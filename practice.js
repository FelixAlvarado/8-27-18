function subSort(arr) {
    let sorted = Array.from(arr).sort(((a,b) => a - b));
    let start = null;
    let end = null;
    for (let i = 0; i < arr.length; i++){
        if (start === null){
            if(arr[i] != sorted[i]){
                start = i;
            }
        }else {
            if(arr[i] != sorted[i]){end = i;}
        }
    }
    if (start === null){
        return -1;
    }else {
        return [start,end];
    }
}

//find number thats smaller than previous number
//sort array 
//go through arrays 
//keep track of moment arrays are different 
//keep track of moment arrays are the same
console.log('should be 3,9', subSort([1,2,4,7,10,11,7,12,6,7,16,18,19]));
console.log('sorted already', subSort([1,2,3,4,5]));
