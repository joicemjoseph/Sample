#!/usr/bin/env node 
//sha-bash enviornment variable
//For more info on prime numbers, Visit http://en.wikipedia.org/wiki/Prime_Number

/**
 * Copyright 2013 Verifi, Corp. 
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
/*
var prim = new function(n) {

//First function to check the number is as follows
	var checkVar=(n%2);
	return(checkVar);
}*/
var num=19;
var b=num%2;
	if( b == 1) {
		console.log("This is a prime number");
	}
	else	{
		console.log("This is not a prime Number");
	}
	
	
	