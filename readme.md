# Automatic Login for Starbucks Wifi

This repository includes multiple resources for automatic Starbucks login. This repo is tested in September 2018 in Singapore on a Mac. The code here is not guaranteed to work for all Starbucks and after sometime, the login mechanism is expected to change. 

This repository includes the following resources:

| File | Type | Remarks |
| ---- | ---- | ------- |
| login.sh | Shell script | This script contains all the required cURL command and arguments for the login POST request. You will need to call this when you are signed out but connected to the wifi. |
| autoLogin.js | NodeJS script | This NodeJS script **automatically** launches the login script at every 10 mins |

*Note that you would need to connect to the wifi first before starting the programs*