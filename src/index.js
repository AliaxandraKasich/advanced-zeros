module.exports = function getZerosCount(number, base) {
    var count5 = 0;
    var arr = [];
    var arrCount = [];
    var temp = base;
    for(var i=2; i<= base;i++){
      while(temp % i === 0){
        if(arr.length === 0){
          arr.push(i);
          arrCount[arr.length] = 1;
        } 
        var a = arr.pop();
        arr.push(a);
        temp = temp / i;
        arrCount[arr.length]++; 
        if(a !== i){
          arr.push(i);
          arrCount[arr.length] = 1;
        }
      }
    }
    var tempBase;
    if(arr.length === 2){
      tempBase = arr[1];
    }
    if(arr.length === 1){
      tempBase = arr[0];
    }

   
  
    var tempNumber5 = number;
    
    var temp = number;
    while(temp >= 1){
      temp = Math.trunc(tempNumber5/tempBase);
      count5 = count5 + temp;
      tempNumber5 = tempNumber5/tempBase;
    }
    if(arrCount[0] === arrCount[1]){
      return count5/arr[0];
    }
    return count5;
    
   
  }
