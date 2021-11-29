"""Testing configuration

Remember that often tests override some settings, so this module contains
just base settings for tests.
"""
from config.settings.base import *

DEBUG = True

# Speed up testing

# By default Django uses a slow password hashers. To speed up password
# hashing we can choose some other hashing algorithm, that requires less time
# to hash. But remember, a lot of fast algorighms is not proven for production,
# so be very careful.
#
# For more information see https://docs.djangoproject.com/en/3.2/topics/auth/passwords/#included-hashers
PASSWORD_HASHERS = [
    'django.contrib.auth.hashers.MD5PasswordHasher',
]

# In most cases we don't need password validators for tests (unless we need
# to test them. If that so just override settings), so we can
# just turn off them.
#
# For more information see https://docs.djangoproject.com/en/3.2/topics/auth/passwords/#module-django.contrib.auth.password_validation
AUTH_PASSWORD_VALIDATORS = []
