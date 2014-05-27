function isPalindrome(string){
	for(var i = 0; i < Math.floor(string.length / 2); i++){
		console.log(string[i],string[string.length - 1 - i]) //dbg
		if(string[i] != string[string.length - 1 - i]){
			return false;
		}
	}
	return true;
}

console.log(isPalindrome("test2string"));
console.log(isPalindrome("1234321"));
console.log(isPalindrome("12344321"));