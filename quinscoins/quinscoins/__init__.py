"""Quins Coins Server."""
import flask

# app is a single object used by all the code modules in this package
app = flask.Flask(__name__)  # pylint: disable=invalid-name

app.config.from_object('quinscoins.config')

# Overlay settings read from file specified by environment variable. This is
# useful for using different on development and production machines.
# Reference: http://flask.pocoo.org/docs/0.12/config/
app.config.from_envvar('BRUH', silent=True)

import quinscoins.model # noqa: E402  pylint: disable=wrong-import-position
import quinscoins.views.views # noqa: E402  pylint: disable=wrong-import-position
import quinscoins.api.term_result  # noqa: E402  pylint: disable=wrong-import-position
