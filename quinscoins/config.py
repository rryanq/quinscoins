"""Config."""

import os

# Root of this application, useful if it doesn't occupy an entire domain
APPLICATION_ROOT = '/'

DATABASE_FILENAME = os.path.join(
    (os.path.dirname(os.path.realpath(__file__))),
    'var', 'terms.sqlite3'
)
