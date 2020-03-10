$RANDO = 0
$Logfile = "C:\Logs\rando.log"

for ($i =0; $i -lt 5; $i++){
    $RANDO = Get-Random -maximum 1000 -Minimum 1
    Write-Host($RANDO)
    Add-Content $Logfile "Info: Random number is ${Rando}"
}