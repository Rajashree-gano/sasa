let dup = ['DELHI','CHENNAI','CHENNAI','NEWYORK','DELHI','GOA','MUMBAI','CALIFORNIA','GOA']

function removeDuplicates(arr){
    let unique_array = [];
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array;
}

console.log(removeDuplicates(dup)); 