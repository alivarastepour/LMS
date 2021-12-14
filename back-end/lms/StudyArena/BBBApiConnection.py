import hashlib
import requests

SHARED_SECRET = 'XXXXXXXXXXXXXXXXX'
SERVER_ADDRESS = 'X.Y.com/bigbluebutton/api/'


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


if __name__ == '__main__':
    print(generate_url('create', name='Test+Meeting', meetingID='abc123', attendeePW='111222', moderatorPW='333444'))
