#!/bin/bash
if [ $# -eq 0 ]
    then
    npm start;
elif [ $1 == 'i' ]
    then
    npm install;
    npm start;
else
    echo 'oops! that was an error';
fi