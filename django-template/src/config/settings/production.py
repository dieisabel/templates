"""Production configuration"""
from config.settings.base import *

DEBUG = False

# WSGI application for production
#
# For more information see https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface
WSGI_APPLICATION = 'config.wsgi.application'

# Security
ALLOWED_HOSTS = [
    # Put here your host
]

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]
