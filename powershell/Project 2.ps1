#This Line wil get all files higher than 200MB on the C:Drive
$Data = Get-ChildItem c:\ -r -ErrorAction SilentlyContinue -Force | Where-Object {$_.length -gt 209715200} | sort -descending -property length | select name, Length | Out-String

#This line wil email it to the specified user

Send-MailMessage -To "watersti@mail.uc.edu" -From "me@mail.edu" -Subject "IT3038C Windows SysInfo" -Body $Data -SmtpServer smtp.gmail.com -Port 587 -UseSSL -Credential (Get-Credential)
Write-Host("Email sent")
