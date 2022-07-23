//exp out = [1,2,3,4,5,6,7,9]
const array = [5,4,3,2,9,1,6,7]
for(let i=0; i<array.length; i++){
    for(j=i+1; j<array.length; j++){
        if(array[i] > array[j]){
            let value = array[j];
            array[j] = array[i];
            array[i] = value;
        }
    }
}
console.log(array)


// expected o/p = [2,4,5,6,7,8]
    const numbers = [2,5,8,7,4,6];
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            if(numbers[i] > numbers[j]){
                let val = numbers[j];
                numbers[j] = numbers[i];
                numbers[i] = val
            }
        }
    }
    console.log(numbers)

    //exp o/p = [9,7.5,3,1]
    const arr = [3,5,1,7,9]
    for(let i =0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] < arr[j]){
                let val = arr[j];
                arr[j] = arr[i];
                arr[i] = val
            }
        }
    }
    console.log(arr)