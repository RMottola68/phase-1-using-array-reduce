const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = 0;

let batteries = (oldNum, newNum) => {
    return oldNum += newNum;

}

totalBatteries = batteryBatches.reduce(batteries);




console.log(totalBatteries);