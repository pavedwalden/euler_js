function fizzbuzz(){
	var runningTotal = 0;
	for(i = 1; i < 1000; i++){
		if(i % 3 === 0){
			runningTotal += i;
		}else if(i % 5 === 0){
			runningTotal += i;
		}
	}
	console.log(runningTotal);
}

fizzbuzz();