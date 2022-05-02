#!/bin/bash
 
read -p "Message: " msg

yarn build
npm run deploy

git add .
git commit -m "$msg"
git push -u origin main

read -p "GIT_USER: " gitusr

GIT_USER=gitusr npm run deploy