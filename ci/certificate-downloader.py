#!/usr/bin/env python3

from requests import Session
import json

s = Session()

import logging

logger = logging.getLogger(__name__)

URL_ACC = "https://dgca-verifier-service-eu-acc.cfapps.eu10.hana.ondemand.com/"


headers = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
    'x-resume-token' : '0'
}

kid_list = s.get(URL_ACC + 'signercertificateStatus', headers=headers).json()

certificate_list = {}

for kid in kid_list:
	response = s.get(URL_ACC + 'signercertificateUpdate', headers=headers)
	if kid != response.headers["x-kid"]:
		logger.warning(f"Kid doesn't match: {kid}")
	certificate_list[kid] = response.text
	headers['x-resume-token'] = response.headers['x-resume-token']
	logger.info("Current token: " + headers['x-resume-token'])

with open("certificate_list.json", "w") as f:
	f.write(json.dumps(certificate_list))

