import hashlib

SHARED_SECRET = 'XXXXXXXXXXXXXXXXXXXXXXXX'


def create_checksum(method: str, **kwargs) -> str:
    query = ''
    for param_name, param_value in kwargs.items():
        query += f"{param_name}={param_value}&"
    query = method + query[:-1] + SHARED_SECRET
    return hashlib.sha1(query.encode()).hexdigest()

