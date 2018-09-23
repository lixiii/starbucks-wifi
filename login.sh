#!/bin/sh

curl -X POST \
  http://sb.login.org/login \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 27c4e890-7c8f-41d5-9054-5d129d5a304a' \
  -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' \
  -H 'accept-encoding: gzip, deflate' \
  -H 'accept-language: en-sg' \
  -H 'connection: keep-alive' \
  -H 'content-length: 72' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -H 'host: sb.login.org' \
  -H 'origin: https://login5.d-synergy.com' \
  -H 'proxy-connection: keep-alive' \
  -H 'upgrade-insecure-requests: 1' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15' \
  -d 'username=dsuser&password=dspass&dst=http%3A%2F%2Fwww.starbucks.com.sg%2F' \
  > /dev/null