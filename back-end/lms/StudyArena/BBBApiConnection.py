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
    return ET.fromstring(result.text)


def create(**kwargs):
    result = communicate(generate_url('create', **kwargs))
    return result.find('returncode') == 'SUCCESS'


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
