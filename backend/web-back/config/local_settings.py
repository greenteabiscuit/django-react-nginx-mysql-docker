from .settings import *


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get('DEBUG')

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'todoList',
        'USER': os.environ.get('USER'),
        'PASSWORD': 'password',
        'HOST': os.environ.get('HOST'),
        'PORT': '3306',
    }
}