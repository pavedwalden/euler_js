var factors = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//var factors = [2,3,4,5,6,7,8,9,10];
var candidate = 26750400;

var lastSuccessfulFactor = 1;
for(var j = factors.length - 1; j >= 0; j--){
	console.log("evaluating " + candidate + ' % by ' + factors[j]);	//dbg
	if(candidate % factors[j] != 0){
		candidate += lastSuccessfulFactor;
		lastSuccessfulFactor = 1;
		j = factors.length;
	}else{
		lastSuccessfulFactor = factors[j];
	}
}
console.log('smallest = ' + candidate);



