const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const initialValue=batteryBatches[0]
const currentValue=batteryBatches[0]
const totalBatteries=
batteryBatches.reduce((accumulator, currentValue)=>
    accumulator+currentValue)
console.log(totalBatteries)
