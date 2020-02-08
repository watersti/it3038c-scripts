#This script is to tell you how much free space you have on your hard drive (C:) and the time it was ran at.
#Function to get Hard drive Space left
function Disk {
    Get-PSDrive C
}

#Function to get time
function Time {
    (Get-Date).TimeOfDay;
}

#Set of variables to take the number given by The Disk function into a GB number to easily read and reference againast the Disk Function.
$drive = Disk
$free_size = $drive.free
$DiskSpace = [math]::Round(($free_size / 1GB),2)

#Setting the Time function to a variable for easier implementation in my opinion
$time = Time


#Outputting the script results in an easy to read format
Write-Host("Your C drive has $Diskspace GB left and this was conducted at $time.")