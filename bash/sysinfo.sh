shabang
#!/bin/bash
#This script will email us our user, IP, hostname and today's date.
emailaddress=watersti@mail.uc.edu
today=1/21/2020
ip=192.168.33.173
content="User $USER from IP $ip on $today running machine type of $MACHTYPE with hostname $HOSTNAME "
mail -s "IT3038C Linux IP" $emailaddress <<< $(echo -e $content)

