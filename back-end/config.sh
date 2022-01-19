#!/bin/bash
Green="\033[0;36m"
NC="\033[0m"
if [ $# -eq 2 ] && [ $2 == '0' ]; then
	echo -e "${Green}installing pip and venv${NC}"
	sudo apt update
        sudo apt -y install python3-pip
        sudo pip3 install virtualenv
        virtualenv venv
fi
if [ $1 == 'i' ]; then
	echo -e "${Green}source venv and install requirements${NC}"
	source ./venv/bin/activate
	python3 -m pip install -r ./requirements.txt
	echo -e "${Green}READY TO RUN...${NC}"
	python3 ./lms/manage.py makemigrations
	python3 ./lms/manage.py migrate
	python3 ./lms/manage.py runserver
fi
