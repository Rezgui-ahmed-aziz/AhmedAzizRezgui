#include <bits/stdc++.h>
using namespace std;

int task1(string input){
    int stringSize = input.size();
    string correctString = "";
    for(int i=0;i<stringSize;i++){
        //this for loop creates the string that should be tested for being a palindrome
        if('A'<=input[i] && input[i]<='Z'){
            //testing if the character is uppercase
            correctString += input[i] + 32;
        }
        else if('a'<= input[i] && input[i]<= 'z'){
            correctString += input[i]; 
        }
    }
    int CorrectStringSize = correctString.size();
    int leftPointer = 0, rightPointer = CorrectStringSize-1;
    int result = 1;
    while(leftPointer<rightPointer){
        // This while loop compares the first element with the last, then the second element
        // with the second to last element to give optimal palidrome testing
        if(correctString[leftPointer]!=correctString[rightPointer]){
            result = 0;
            break;
        }
        leftPointer++;
        rightPointer--;
    }
    return result;
}

int main(){
    // We can change the input here
    string input = "Madam, in Eden, I'm Adam";

    if(task1(input))cout<<"true\n";
    else cout<<"false\n";
    return 0;
}


