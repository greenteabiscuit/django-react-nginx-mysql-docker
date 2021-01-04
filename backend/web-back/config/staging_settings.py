from .settings import *


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['*']

STORAGE_NAME = os.environ.get('STORAGE_NAME')

# todo: STORAGE NAMEを環境変数に追加
STATIC_URL = f'https://storage.googleapis.com/{STORAGE_NAME}/static/'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'todoList',
        'USER': os.getenv('DATABASE_USER'),
        'PASSWORD': os.getenv('DATABASE_PASSWORD'),
        'HOST': 'staging-db',
        'PORT': '13306',
    }
}