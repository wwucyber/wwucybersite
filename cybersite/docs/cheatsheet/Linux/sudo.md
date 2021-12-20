---
sidebar_position: 10
title: sudo
---

## Description:
Sudo is a command line program that allows users to be given the ability to run certain (or all) commands  as root. 

## Installation
Sudo is included into every major linux distro. If you need to update follow these steps:
```bash
sudo apt-get update
sudo apt-get upgrade
``` 
## Configuration:
### Add User to Sudo File
```bash
sudo /usr/sbin/sudoers
```
#### Example: Grant User Permission to Run All Commands as with sudo (make sure you 100% trust this user)
```
insert_username ALL=(ALL) ALL
```

### Configure User to Run Certain Commands with sudo
```
User_name Machine_name=(Effective_user) command
```
`user_name` = the name of the sudo user  
`machine_name` = host name of machine  
`effective_user` = users that are allowed to execute said commands  
`command` = command users are allowed to run with sudo  

#### Allow user `nathan` to execute any command with sudo on host `ubuntu`
`nathan ubuntu=(ALL) ALL`
#### Allow user `nathan` to execute `ssh` with sudo on host `ubuntu`
`nathan ubuntu=(nathan) ssh` 

## Commands:
### List Sudo Permissions
```bash
sudo -l
```
### Reset sudo timestamp (ticket). 
#### This forces the user to input sudo password next time they run the command
```bash
sudo -K
```
### Run a command as another user or group (can ommit group)
```bash
sudo -u user -g group id -a
```
### Launch default shell with sudo permissions
```bash
sudo -i
```

#### References:
 - https://cheat.sh/sudo
 - https://neverendingsecurity.wordpress.com/2015/04/13/sudo-cheatsheet/