/**
 * Copyright  � 2013  Verifi, Corp. 
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */


//This commented area below  is a try. A try to recieve input from command prompt. but unfortunately it is not working. 
 
 /*
var numberFromPrompt=0;
var prompts = rl.createInterface(process.stdin, process.stdout);
var rl = require("readline");
prompts.question("Untill How much do you wanna fing the prime Number Series? ", function  (numberFromPrompt) {
	console.log(numberFromPrompt);
		});*/
var fs=require("fs");
var arr=[];


var outfile = "primeNumber.txt";
var pusher = function(number) {
	arr.push(number);
		};
var fmt = function(arr) {
	return arr.join(" \t");
};		
var isPrime = function(num) {
if(num < 2)	{
	return false;
}
for (var i = 2; i < num; i++)	{
	if(num%i==0)	{
		return false;
	}
}
return true;
};
var loopMe = function (maxim)	{
	for (numb=0;numb<=maxim;numb++)	{
	var bool=isPrime(numb);
	if(bool===true)	{
	pusher(numb);
	}
}
};

var printMe =function()	{		
	console.log(fmt(arr));
	fs.writeFileSync(outfile, fmt(arr));
};
loopMe(100);
printMe();