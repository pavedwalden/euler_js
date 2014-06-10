var candidate;
var palindromes = [];

function isPalindrome(string){
	for(var i = 0; i < Math.floor(string.length / 2); i++){
		if(string[i] != string[string.length - 1 - i]){
			return false;
		}
	}
	return true;
}

for(var i = 999; i > 900; i--){
	for(var j = 999; j > 900; j--){
		candidate = i * j;
		//console.log(i + ' * ' + j + ' = ' + candidate);
		if(isPalindrome(candidate.toString())){
			palindromes.push(candidate);
		}
	}
}

var winner = 0;
for(var i = palindromes.length - 1; i > 0; i--){
	if(winner < palindromes[i]){
		winner = palindromes[i];
	}
}

console.log("The largest palindrome product of numbers less than 999 is " + winner);
