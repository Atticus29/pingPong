
# Ping-Pong

#### 24 Feb., 2017, v.1.0.1

#### By Mark Fisher

## Description

A web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:
Numbers divisible by 3 are replaced with "ping"
Numbers divisible by 5 are replaced with "pong"
Numbers divisible by 15 are replaced with "ping-pong"
A user should be able to enter a new number and see new results over and over again.

### Specifications

|Behavior|Input|Output|
|:---:|:---:|:---:|
|1. Website takes input from the user and alerts the user if that input is not a positive integer|"-3.14"|entry stored as text in scripts.js|
|2. Website  alerts the user if that input is not a positive integer|"-3.14"|`alert("Please enter a positive integer")`|
|3. Back end logic creates an array of integers from 1 to the inputted number|15| numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]|
|4. Back end logic has a function to check whether each number in the array is divisible by some number n, and, if so, replaces that number with some string, str|`changeValuesDivisibleByXtoY(13,"replacement",numbers)`|[1,2,3, 4,5,6,7,8,9,10,11,12,"replacement",14,15]|
|5. changeValuesDivisibleByXtoY function replaces all values in the array that are divisible by 3 to "ping"|`changeValuesDivisibleByXtoY(3,"ping",numbers)`| arrayAfterReplacingThrees = [1,2,"ping", 4,5,"ping",7,8,"ping",10,11,"ping",13,14,"ping"]|
|6. changeValuesDivisibleByXtoY also replaces all values in the array that are divisible by 5 to "pong"|`changeValuesDivisibleByXtoY(5,"pong",arrayAfterReplacingThrees)`|arrayAfterReplacingFivesAndThrees = [1,2,"ping", 4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"pong"]|
|7. changeValuesDivisibleByXtoY also replaces all values in the the array that are divisible by 15 to "ping-pong"|changeValuesDivisibleByXtoY(15,"ping-pong",arrayAfterReplacingFivesAndThrees)|finalArray = [1,2,"ping", 4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"ping-pong"]|
|8. The transformed array is returned to the display page of the website upon click of the "Play" button|User clicks play|User sees the resulting numbers and strings|
|9. User can enter new number and hit play again and expect to see *only* the most recent results|Resulting numbers already displayed. User enters new number and clicks play|Only the resulting numbers and strings from the most recent click are displayed to the user|
|10. Layout has sleek banner-sytle title|||
|11. Layout has sleek skinny left column with details about the game and the author|||
|12. Layout has sleek right-hand content section with rules, the form, and the output|||


## Setup/Installation Requirements

* This repository is meant to be viewed. It can be viewed [here](https://Atticus29.github.io/pingPong).

### Or if you're feeling bold, you can clone OR download a local instance of the site:

* Clone
  * Open your terminal program
    * On a Mac, this would be in the Applications/Utilities directory, and is called, "Terminal"
    * Windows uses a Terminal program as well, but a Terminal with all the capabilities we'll require is not installed by default. Thankfully, we can easily download and install a Terminal program that does fit our needs.
There are many options available, but we recommend using a terminal program called git bash. You can download this free program at [msysgit.github.io](https://git-for-windows.github.io/).
  * Clone this track survey repository by typing, `git clone https://github.com/Atticus29/pingPong.git`
* Download
  * Click [here](https://github.com/Atticus29/pingPong/archive/master.zip) to download the repo
  * Unzip the zipped repository
* Open the pingPong folder and double-click on index.html.
* Make your selections and click submit as instructed on the site.


## Known Bugs

There are no known bugs. I'd be interested to know if you find any.

## Support and contact details

Please feel free to contact mark.aaron.fisher@gmail.com for questions

## Technologies Used

* git v. 2.11.1
* html5
* bootstrap v. 3.3.7
* CSS
* javaScript
* jQuery v. 3.1.1

### License

This software is licensed under the MIT license.

Copyright (c) 2017 Mark Fisher

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
