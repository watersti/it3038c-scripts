import time

start_time=time.time()

print('what is your name?')
myName=input()
while myName != 'Travis':
    if myName =='Travis':
        print('ha ha v funny seriously who are you')
        myName = input()
    else:
        print('That is not your name. please tell me your real name')
        myName = input()
        
print('hello, ' + myName + '. That is a good name. How old are you?')
myAge=int(input())

if myAge < 13:
    print("You're a minor?")
elif myAge == 13:
    print("You're a teenager now... that's cool, I guess")
elif myAge > 13 and myAge <30:
    print("You're young and dumb")
elif myAge >=30 and myAge < 65:
    print("You're adulting.")
else:
    print("... how are you not dead?")

programAge = int(time.time()-start_time)

print('%s? That is funny I am only %s seconds old.' % (myAge, programAge))
print("I wish I was " + str(int(myAge)*2)+ " years old")
print("I wish I was %s years old" % (int(myAge) *2))

time.sleep(3)
print('I sweepy. bye.')