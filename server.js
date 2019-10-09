var arr = [1,2,1,4,3,1,3,3]
birthdayCakeCandles(arr);

function birthdayCakeCandles(ar) {
    let maxValue;
    let maxCount=0;
    let highestCount = 0;
    let highestValue=-1;
    let arLength=ar.length;
        for(let i=0;i<arLength;i++){
            maxCount=1;
             for(let j=i+1;j<arLength;j++){
                 if(ar[i]==ar[j])
                 {
                    maxCount++;
                    maxValue=ar[i];
                 }
                 else{
                     continue;
                 }
             }
                if(maxCount>=highestCount){
                    highestCount=maxCount;
                    if(maxValue>highestValue){
                        highestValue = maxValue;
                    }
                    
                }
        }
     console.log(highestCount);
     console.log(highestValue);
    }
    