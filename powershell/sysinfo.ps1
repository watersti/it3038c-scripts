$Hello = "Hello, PowerShell"
Write-Host ($Hello)

function getIP{
    (Get-NetIPAddress).ipv4address | Select-String "192*"
}

Write-Host(getIP)

$IP = getIP
Write-Host("This Machine's IP is $IP")
Write-Host("This Machine's IP is {0}" -f $IP)