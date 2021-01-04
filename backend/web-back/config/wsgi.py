"""
WSGI config for config project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

if os.environ.get('ENV') == "LOCAL":
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.local_settings')
elif os.environ.get('ENV') == "STAGING":
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.staging_settings')

application = get_wsgi_application()
