"""Quins Coins Website Setup."""
from setuptools import setup

setup(
    name='quinscoins',
    version='0.1.0',
    packages=['quinscoins'],
    include_package_data=True,
    install_requires=[
        'flask',
        'arrow',
        'html5validator',
        'pycodestyle',
        'pydocstyle',
        'Flask-Testing',
        'selenium',
        'pylint',
        'requests',
        'sh',
    ],
)
