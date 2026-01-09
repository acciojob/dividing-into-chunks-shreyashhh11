const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
	let current = [];
	let currentsum = 0;

	for(let num of arr){
		if(currentsum+num <= n){
			current.push(num);
			currentsum += num;
		}else{
			result.push(current);
			current = [num]
			currentsum = num 
		}	
	}
	if(current.length > 0){
			result.push(current)
		}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
