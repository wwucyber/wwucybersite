---
sidebar_position: 3
title: NMAP
author: nathan
---
***You Must Know Your Assets To Defend Them***
## Description:
NMAP is the widely used and established network scanning utility. It's used to get a picture of what systems are on a network and what services are running on them. It also has an in-depth scripting engine called NSE (NMAP Scripting Engine) which will be used in many commands below. It even has a GUI counterpart called **zenmap** that we will **not** be covering.

## Installation
### Ubuntu/Apt Based Systems:
If your apt repo is configured with the correct packages:
```bash
sudo apt-get install nmap
```
If not run:
```bash
apt-get update 
sudo apt-get install nmap
```
### Windows:
Download packaged executable from
```bash
https://nmap.org/dist/nmap-7.92-setup.exe
```
Execute it and navigate to the location you installed it to in terminal.

Execute commands using `nmap.exe` in that folder. You can also add that executable to PATH to skip moving to the install location each time.
## Most Common Commands:
### Comprehensive Scan 
#### TCP Scan Top 1000 ports, use NSE to identify services (-sV), use NSE default scripts (-sC), force scan without ping check (-Pn), output scan in all formats (-oA), and show verbosity as its being ran (-v)
```bash
sudo nmap -sC -sV -Pn -v -oA OUTPUT_FILE TARGET_IP
```
### Comprehensive UDP Scan (same as above but UDP)
```bash
sudo nmap -sU -sC -sV -Pn -v -oA OUTPUT_FILE TARGET_IP
```
## Basic Commands:
### Simple Scan Single IP Address
```bash
nmap TARGET_IP
```
### Switch Scan To UDP
```bash
nmap -sU TARGET_IP
```
### Simple Scan IP Range
```bash
nmap FIRST_IP-LAST_IP
```
## Utility Switches
### Display Verbosity
```bash
nmap -v
```
### Display Help
```bash
nmap -h
```
### Exclude a Host
```bash
nmap --exclude IP_ADDRESS
```
### Scan Range Of Ports
```bash
sudo nmap -p FIRST_PORT-LAST_PORT IP_ADDRESS
```
## Output Formats
### Output Scan in "Normal" Format
```bash
nmap -oN OUTPUT_FILE_NAME TARGET_IP
```
### Output Scan in XML Format
```bash
nmap -oX OUTPUT_FILE_NAME TARGET_IP
```
### Output Scan in Greppable Format
```bash
nmap -oG OUTPUT_FILE_NAME TARGET_IP
```
### Output Scan in All Formats
```bash
nmap -oA OUTPUT_FILE_NAME TARGET_IP
```