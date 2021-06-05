function sockMerchant(ar) {
    // Write your code here
    let obj = {};
    for(let n of ar){
        if(n in obj){
            obj[n] += 1;
        }else{
            obj[n] = 1;
        }
    }
    let sum = 0;
    for(let sp in obj){
        sum += parseInt(obj[sp]/2);
    }
    return sum;
}

sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])
