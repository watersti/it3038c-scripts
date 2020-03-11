#This is how you get the permissions of a file, directory, or any other specified path.
#To test this for yourself, enter your own item after the path
$Permission = Get-Permission -Path 'C:\it3038c-scripts\Labs\Lab7\PermissionsTest.txt'
Write-Host($Permission)