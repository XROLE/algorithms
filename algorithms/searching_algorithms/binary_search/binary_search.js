const res = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9);

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length -1;

    while(left < right){
        
        let mid = Math.floor((left + right) / 2)
        if(arr[mid] == target){
            console.log('Hello world ', mid);
            return mid;
        } else if(arr[mid] < target) {
            left = mid;
        } else if(arr[mid] > target){
            right = mid;
        } else {
            return -1;
        }
    }

}

console.log('This is the res result: ', res);
