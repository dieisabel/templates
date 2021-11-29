"""Development configuration"""
from config.settings.base import *

DEBUG = True

# Speed up development

# By default Django uses a lot of password hashers. To speed up password
# hashing we can choose some other hashing algorithm, that requires less time
# to hash. But remember, a lot of fast algorighms is not proven for production,
# so be very careful.
#
# For more information see https://docs.djangoproject.com/en/3.2/topics/auth/passwords/#included-hashers
PASSWORD_HASHERS = [
    'django.contrib.auth.hashers.MD5PasswordHasher',
]

# In development we can turn off password validators because they just
# slows down development process in my opinion. So, we can just turn
# off them.
#
# For more information see https://docs.djangoproject.com/en/3.2/topics/auth/passwords/#module-django.contrib.auth.password_validation
AUTH_PASSWORD_VALIDATORS = []
