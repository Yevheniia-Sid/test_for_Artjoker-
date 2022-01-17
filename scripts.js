"use strict";
let promocod;
promocod = prompt("enter the value of the promo code");

alert (GetBonus(promocod));

function GetBonus(code) {
    if (isPromocodValid(code)==0) return "Wrong promocod";
    let arrPromocod = convertToArray(code);
    
    if(isAverageBonus(arrPromocod)){
        return isMaxBonus(arrPromocod)?2000:1000;
    }
    return isMinBonus (arrPromocod)?100:0;
 }


function isPromocodValid(code){
    let i=0;
    while(code>0){
        code=Math.trunc(code/10);
        i++;
    }
    if (i!=8){
        return 0;
    }
    else return 1;
}
function convertToArray(codeString){
    let arrCode=[];
    let i=7;
    while(codeString!=0){
        arrCode[i]=codeString%10;
        codeString=Math.trunc(codeString/10);
        i--;
    }
    return arrCode;
}

function isMaxBonus(arr){
    let isPrevEven=0;
    let pairsCount=0;
    for(let i=1; i<8;i++){
        if((isPrevEven==false)&&(arr[i-1]%2==1)&&(arr[i]%2==1)){
            if (arr[i-1]<arr[i]) pairsCount=pairsCount+1;
            else return 0;
        }
        isPrevEven=arr[i-1]%2;
        if((i==7)&&(pairsCount>=2)) return 2000;
        
    }
}
function isAverageBonus(arr){
    let isPrevEven=0;
    let pairsCount=0;
    for(let i=1; i<8;i++){
        
        if((isPrevEven==false)&&(arr[i-1]%2==1)&&(arr[i]%2==1)){
            pairsCount=pairsCount+1;
            if (pairsCount==2) return 1000;
        }
        isPrevEven=arr[i-1]%2;
    }
    return 0;

}

function isMinBonus (arr){
    let sumEven=0;
    let sumOdd=0;
    for(let i=0; i<8; i++){
        if (arr[i]%2==0)
            sumEven+=arr[i];
        else sumOdd+=arr[i];
    }
    if(sumEven>sumOdd)
    return 1;
    else return 0;  
}

