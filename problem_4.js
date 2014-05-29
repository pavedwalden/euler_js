function isPalindrome(string){
	for(var i = 0; i < Math.floor(string.length / 2); i++){
//		console.log(string[i],string[string.length - 1 - i]) //dbg
		if(string[i] != string[string.length - 1 - i]){
			return false;
		}
	}
	return true;
}

var candidate;
var palindromes = [];

for(var i = 999; i > 900; i--){
	for(var j = 999; j > 900; j--){
		candidate = i * j;
		console.log(i + ' * ' + j + ' = ' + candidate);
		if(isPalindrome(candidate.toString())){
			palindromes.push(candidate);
		}
	}
}



//console.log(palindromes);
console.log(palindromes.length);

var winner = 0;
for(var i = palindromes.length - 1; i > 0; i--){
	if(winner < palindromes[i]){
		winner = palindromes[i];
	}
}

console.log("the largest palindrome product is " + winner);




// console.log(isPalindrome("test2string"));
// console.log(isPalindrome("1234321"));
// console.log(isPalindrome("12344321"));

