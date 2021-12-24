#!/bin/bash
 
read -p "Message: " msg

npm run build
firebase deploy

git add .
git commit -m "$msg"
git push -u origin main