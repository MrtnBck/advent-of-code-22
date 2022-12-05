import {readFileSync} from "fs"

function readRawFile(){
    const contents = readFileSync("./data.txt", 'utf-8');
    const arr = contents.split(/\r?\n/);
return arr
}
function manipulateArr(rawArr){
    let calories = 0
    let arr = []
    rawArr.forEach((item, index) => {
        if(rawArr[index+1] === ""){
            calories = calories + Number(item)
            arr.push(calories)
            calories = 0
        }else {
            calories= calories + Number(item)
        }
    });
    return arr
}

    const rawArr = readRawFile()
    
    const sumArr = manipulateArr(rawArr)
    
    const maxValue = Math.max(...sumArr)
    console.log("result for task1: " + maxValue)

    
export {sumArr}
    


