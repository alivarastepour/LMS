import datetime
import hashlib
import requests
import xml.etree.ElementTree as ET
from jalali_date import datetime2jalali
from urllib.parse import quote as urlEncode

SHARED_SECRET = 'XXXXXX'
SERVER_ADDRESS = 'https://xx.xx.xx/bigbluebutton/api/'


def dict_to_str(**kwargs):
    query = ''
    for param_name, param_value in kwargs.items():
        query += f"{param_name}={urlEncode(str(param_value)) if type(param_value) != bool else 'true' if param_value else 'false'}&"
    return query[:-1]


def create_checksum(method: str, **kwargs) -> str:
    query = method + dict_to_str(**kwargs) + SHARED_SECRET
    return hashlib.sha1(query.encode()).hexdigest()


def generate_url(method, **kwargs):
    return SERVER_ADDRESS + method + '?' + dict_to_str(**kwargs) + '&checksum=' + create_checksum(method, **kwargs)


def communicate(url, **kwargs):
    result = requests.post(url, **kwargs)
    return ET.fromstring(result.text)


def create(**kwargs):
    result = communicate(generate_url('create', **kwargs))
    return result.find('returncode').text == 'SUCCESS'


def join(**kwargs):
    # result = communicate(generate_url('join', **kwargs))
    # return result.find('returncode').text == 'SUCCESS', result.find('url').text
    return generate_url('join', **kwargs)


def is_meeting_running(**kwargs):
    result = communicate(generate_url('isMeetingRunning', **kwargs))
    return result.find('returncode').text == 'SUCCESS', result.find('running').text == 'true'


def end(**kwargs):
    result = communicate(generate_url('end', **kwargs))
    return result.find('returncode').text == 'SUCCESS',


def get_meeting_info(**kwargs):
    result = communicate(generate_url('getMeetingInfo', **kwargs))
    is_success = result.find('returncode').text == 'SUCCESS'
    return is_success, result.find('running').text == 'true' if is_success else False, result.find(
        'recording').text == 'true' if is_success else False, result.find('createDate').text.split()[3][
                                                              :-3] if is_success else 'Never'
    # anything else that is useful


def get_meetings(**kwargs):
    result = communicate(generate_url('getMeetings', **kwargs))
    status_condition = result.find('returncode').text == 'SUCCESS'
    meetings = []
    if status_condition:
        meetings = [(meeting.find('meetingName').text, meeting.find('meetingID').text,
                     meeting.find("participantCount").text, meeting.find("hasUserJoined").text) for meeting in
                    result.find('meetings')]
    return status_condition, meetings


def get_recordings(**kwargs):
    result = communicate(generate_url('getRecordings', **kwargs))
    status_condition = result.find('returncode').text == 'SUCCESS'
    recordings = []
    if status_condition:
        # TODO: return url of recording
        recordings = [{'name': recording.find('name').text,
                       'start_date': datetime2jalali(datetime.datetime.fromtimestamp(
                           float(recording.find('startTime').text) / 1000 + (3 * 60 + 30) * 60)).strftime(
                           '%y/%m/%d - %H:%M'),
                       'url': recording.find('playback')[0].find('url').text if
                       recording.find('playback')[0].find('type').text == 'presentation' else
                       recording.find('playback')[-1].find('url').text,
                       'duration': recording.find('playback')[0].find('length').text if
                       recording.find('playback')[0].find('type').text == 'presentation' else
                       recording.find('playback')[-1].find('length').text
                       }
                      for recording in result.find('recordings')]
        recordings.sort(key=lambda k: k['start_date'], reverse=True)
    return status_condition, recordings


# TODO: add recording methods
if __name__ == '__main__':
    print(generate_url('getMeetings'))
    xml = """<modules>
   <module name="presentation">
      <document url="https://www.example.com/x.pdf" filename="x.pdf"/>
      <document url="https://www.example.com/default.pptx" filename="default.pptx"/>
   </module>
    </modules>"""
    y = generate_url('create', name='Test+Meeting', meetingID='abc12345', attendeePW='111222', moderatorPW='333444')
    print(generate_url('join', fullName='mahmood', meetingID='abc12345', password='333444'))
    print(create(name='Test+Meeting', meetingID='abc123456', attendeePW='111222', moderatorPW='333444'))
    print(generate_url('join', fullName='Mahmood_Choopani', meetingID='abc123456', password='333444', redirect='FALSE'))
    print(is_meeting_running(meetingID='abc123456'))
    print(is_meeting_running(meetingID='abc12345'))
    x = 'abc123456'
    print(get_meeting_info(meetingID=x))
    print(get_meetings())
    # print(join(fullName='Mahmood_Choopani',meetingID='abc123456',password='333444',redirect='FALSE'))
