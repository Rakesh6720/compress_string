	function compressString(strayng){
		//1.  convert the string into an array using toCharArray
		let arrayChars [] = strayng.toCharArray();
		//2.  count the number of items in the array (get the index) using .length
		//let arrayCharsLength = arrayChars.length();
		//3.  evaluate the number of similar elements in the array using every() 
		arrayChars.every(checkForSameElement); // i'm going to have to define checkForSameElement before I can call it here **(see below for checkForSameElement)
		//4.  check if elementsare the same
		//		if elements of the array are the same then count the number of similar elements
		//		if elements of the array are not identical then return WHAT?
		//5.  take the variable that represents the number of similar elements and insert that variable in the field before those similar elements
		//		so you will need variable to hold the number of each similar elements AND....
		
		// SO your first jumping off point is to evaluate if the array has any similar elements 
		//	AND IF SO then count how many of each similar element exist in the array*
		//		* the next step will be figuring out how to list this information back into the array
	}
	
	function checkForSameElement(arrayChars);
	//this function will check arrayChars array for similar elements and return a boolean
	//first, check the first character, then compare it to the next character, if this is true then keep doing that until it's not
	//IF and WHEN the condition is false break into the else loop and say -- hey, computer, i want you to now check the character AFTER the one 
	//		you just stopped at (so, you're going to have to keep track of the index number you stopped at) and resume counting and checking from there
	//		QUESTION: how does the loop restart after the else function?
	//set checked number as variable saying: let checkedNumber = 0
	// if position 0 = position 0 + i then the condition is true where i = the element number of arrayChars[] that I am checking
		let alpha = 0 // alpha is the location within the array where I will begin my check
		if (let loopCount = 1; arrayChars[alpha] === arrayChars[alpha+1]; loopCount++) {
			alpha + 1;
			return loopCount;
			}
		else {
			// write to the console loopCount + arrayChars[].toString("") = numberOfElementRepeats
			let numberOfElementRepeats = loopCount.toString("") + arrayChars[alpha].toString("");
		}
	compressString(aaaabbbcccddd);
	
	/*Jacob's String Compression Code
	function compressString4(str){

    if(str.length = 0){return str};

    let output = "";
    let lastLetter = str[0];
    let letterCounter = 1;

    for(i=1; i < str.length; i++){

        if(str[i] === lastLetter){
            letterCounter++
        } else {
            output += letterCounter.toString() + lastLetter;
            letterCounter = 1;
            lastLetter = str[i];
        }
    }

    output += letterCounter.toString() + lastLetter;

    return output;
}
*/