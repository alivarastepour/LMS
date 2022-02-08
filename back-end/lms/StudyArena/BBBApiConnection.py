import hashlib
import requests
import xml.etree.ElementTree as ET

SHARED_SECRET = 'XXXXXX'
SERVER_ADDRESS = 'https://xx.xx.xx/bigbluebutton/api/'


def dict_to_str(**kwargs):
    query = ''
    for param_name, param_value in kwargs.items():
        query += f"{param_name}={param_value}&"
    return query[:-1]


def create_checksum(method: str, **kwargs) -> str:
    query = method + dict_to_str(**kwargs) + SHARED_SECRET
    return hashlib.sha1(query.encode()).hexdigest()


def generate_url(method, **kwargs):
    return SERVER_ADDRESS + method + '?' + dict_to_str(**kwargs) + '&checksum=' + create_checksum(method, **kwargs)


def communicate(url, **kwargs):
    result = requests.post(url, **kwargs)
    print(result.text)
    return ET.fromstring(result.text)


def create(**kwargs):
    result = communicate(generate_url('create', **kwargs))
    return result.find('returncode').text == 'SUCCESS',


# def join(**kwargs):
#     result = communicate(generate_url('join', **kwargs))
#     return result.find('returncode').text == 'SUCCESS', result.find('url').text


def is_meeting_running(**kwargs):
    result = communicate(generate_url('isMeetingRunning', **kwargs))
    return result.find('returncode').text == 'SUCCESS', result.find('running').text == 'true'


def end(**kwargs):
    result = communicate(generate_url('end', **kwargs))
    return result.find('returncode').text == 'SUCCESS',


def get_meeting_info(**kwargs):
    result = communicate(generate_url('getMeetingInfo', **kwargs))
    return result.find('returncode').text == 'SUCCESS', result.find('running').text == 'true', result.find(
        'recording').text == 'true', result.find('createDate').text  # anything else that is useful


def get_meetings(**kwargs):
    result = communicate(generate_url('getMeetings', **kwargs))
    status_condition = result.find('returncode').text == 'SUCCESS'
    meetings = []
    if status_condition:
        meetings = [(meeting.find('meetingName').text, meeting.find('meetingID').text,) for meeting in
                    result.find('meetings')]
    return status_condition, meetings


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
    # print(join(fullName='Mahmood_Choopani',meetingID='abc123456',password='333444',redirect='FALSE'))
