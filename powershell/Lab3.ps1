#Script to send email containg the appropriate values
function getIP{
    (Get-NetIPAddress).ipv4address | Select-String "192*"
}
#Function to get IP Address

function getUser{
    (Get-LocalUser) | Select-String "adm*"
}
#Function to get user

function getHostname{
    $env:COMPUTERNAME
}
#function to get Host Name

function getVersion{
    ($Host.version).Major
}
#Function to get Version number

function getDate{
    Get-Date
}
#Function to get the date

$IP = getIP
$User = getUser
$HostName = getHostname
$Version = getVersion
$Date = getDate

$BODY = "This Machine's IP is $IP. User is $User. Hostname is $HostName. PowerShell Version $Version. Today's Date is $Date"
Send-MailMessage -To "watersti@mail.uc.edu" -From "me@mail.edu" -Subject "IT3038C Windows SysInfo" -Body $BODY -SmtpServer smtp.gmail.com -Port 587 -UseSSL -Credential (Get-Credential)
Write-Host("Email sent")