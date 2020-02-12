#This python script will implement a random number generator game
#The user will have to guess a random number (between 0-100) and the code will tell you if you are too high, too low, or if you guessed it

#This import will allow for the random module to be used
import random

#variable to store the random number that gets generated
randomNumber = random.randint(0,100)

#prompt to guess and variable to store the guess
print("Enter an integer from 0 to 100: ")
yourGuess = int(input())

#while loop with an if loop inside to check to see if the guess is correct
while randomNumber != "guess":
    #If the number is lower
    if yourGuess < randomNumber:
        print("Guess is too low, try again. Enter an integer from 0 to 100: ")
        yourGuess = int(input())
    #If the number is higher
    elif yourGuess > randomNumber:
        print("Guess is too high, try agian. Enter an integer from 0 to 100: ")
        yourGuess = int(input())
    #if they get the number right with a break at the end to make sure it doesn't repeatedly say the print statement
    else:
        print("Woohoo you guessed it")
        break