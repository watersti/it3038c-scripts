Lab 7

Instructions to install carbon for powershell:
```
1. Download and run "Carbon Installation Script
2. With the NuGet provider is required to continue pop-up, click the "Yes" button.
3. Untrusted Repository pop-up, click the "Yes to All" button.

After this it will be downloaded onto your computer and ready to use.
```
Examples:
Make a Directory
```
To make a new directory, you can either run the "Make-A-Directory.ps1" script or type the following code into Powershell ISE:
Install-Directory -Path 'C:\it3038c-scripts\Labs\Lab7\NewDirectoryAlpha' //The Path can be whatever path is needed
```
Obtaining Permissions
```
To get permissions for a file or directory, you can either run the "PermissionsObtainer.ps1" script or type the following code into Powershell ISE:
Get-Permission -Path 'C:\it3038c-scripts\Labs\Labe7\PermissionsText.txt' //The path can be used for any path that is needed to test
```
Get IPv4 Address from local Machine
```
To get the IPv4 Address for the local machine, you can either run the "GetIPv4.ps1" script or type the following code into Powershell ISE:
Get-IPAddress -V4 //Which will display information pertaining to IPv4
```
