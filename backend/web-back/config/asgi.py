"""
ASGI config for config project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

if os.environ.get('ENV') == "LOCAL":
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.local_settings')
elif os.environ.get('ENV') == "STAGING":
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.staging_settings')

application = get_asgi_application()
