---
sidebar_position: 10
title: Powershell Cmdlets
---

## Description:
Powershell cmdlets are lightweight commands using in a Powershell Environment. These perform actions like setting network information, disabling devices, downloading files, and more.

## Installation
Powershell is included in most Windows 10 environments. If not found, it can be downloaded here:  
https://github.com/PowerShell/PowerShell/releases/tag/v7.2.1

## Commands:

### Networking
#### Get IP Configuration
```powershell
Get-NetIPConfiguration
```

#### List All Adapters
```powershell
Get-NetAdapter
```

#### Disable/Enable an Adapter
```powershell
Disable-NetAdapter -Name "INSERT_NAME_HERE"
Enable-NetAdapter -Name "INSERT_NAME_HERE"
```

#### Set IP Address
```powershell
New-NetIPAddress -InterfaceAlias "INSERT_ADAPTER_NAME" -IPv4Address INSERT_IP_HERE -PrefixLength "CIDR_HERE" -DefaultGateway ROUTER_IP_HERE
```

#### Get DNS Cache
```powershell
Get-DnsClientCache
```

#### Clear DNS Cache
```powershell
Clear-DnsClientCache
```

#### Get SMB Config
```powershell
Get-SmbClientConfiguration
```

#### Get SMB Connections
```powershell
Get-SmbConnection
```

#### Ping
```powershell
Test-Connection IP_HERE
```

#### Get More Detail From Ping
```powershell
Test-NetConnection -ComputerName IP_HERE -InformationLevel Detailed
```

#### Tracert
```powershell
Test-NetConnection IP_HERE -TraceRoute
```

#### Portscan
```powershell
Test-NetConnection -ComputerName IP_HERE -Port PORT_NUMBER_HERE
```

#### NSlookup
```powershell
Resolve-DnsName DOMAIN_HERE
```

#### List Open Connections
```powershell
Get-NetTCPConnection
```
```powershell
Get-NetTCPConnection -State Established
```

#### Get Website Content
```
Invoke-WebRequest URL_HERE
```
```
curl URL_HERE
```
```
wget URL_HERE
```
### File-System

#### Move a File
```powershell
Move-Item FILE LOCATION
```
```powershell
mv FILE LOCATION
```

#### Diff Two Files
```powershell
Compare-Object FILE1 FILE2
```
```powershell
compare FILE1 FILE2
```
### Remote Commands
#### Run a Command On A Remote Host
```powershell
Invoke-Command -ComputerName INSERT_COMPUTER_NAME -Credential DOMAIN\USERNAME -ScriptBlock {INSERT_COMMAND_HERE}
```

#### Run a Script On A Remote Host
```powershell
Invoke-Command -FilePath PATH_TO_SCRIPT -ComputerName COMPUTER_NAME_HERE
```


### References

 - https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/?view=powershell-7.2
 - https://docs.microsoft.com/en-us/powershell/scripting/developer/cmdlet/cmdlet-overview?view=powershell-7.2
 - https://www.thomasmaurer.ch/2016/02/basic-networking-powershell-cmdlets-cheatsheet-to-replace-netsh-ipconfig-nslookup-and-more/
 - https://www.comparitech.com/net-admin/powershell-cheat-sheet/