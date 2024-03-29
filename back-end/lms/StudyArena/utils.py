import io
import os

ROOT_PATH = '/var/www/html'
URL = "localhost"

def directory_creator(path: str):
    try:
        os.makedirs(path)
    except FileExistsError as _:
        pass


def file_handler(file, sub_path, file_name):
    directory_creator(ROOT_PATH + '/' + sub_path)
    # /a/b/c/f.x
    full_path = f'{ROOT_PATH}/{sub_path}/{file_name}'
    while os.path.isfile(full_path):
        splits = full_path.split('/')
        # [a,b,c,f.x]
        splits[-1] = splits[-1].split('.')[0] + '(1).' + splits[-1].split('.')[-1]
        # [a,b,c,f(1).x]
        full_path = '/'.join(splits)

    with io.open(full_path, 'wb') as o:
        for b in file.readlines():
            o.write(b)
            o.flush()
    return full_path.replace(ROOT_PATH, '')


def file_remover(link):
    os.remove(ROOT_PATH + link.replace(URL,""))


if __name__ == '__main__':
    file_remover(ROOT_PATH + "localhost/sdlkf/1004/default.pptx".replace("localhost", ""))
