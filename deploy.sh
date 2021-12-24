#!/bin/bash
 
read -p "Message: " msg

yarn build

git add .
git commit -m "$msg"
git push -u origin main