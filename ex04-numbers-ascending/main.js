let inputString = prompt("Nhập vào mảng số cần sắp thứ tự (mỗi phần tử cách nhau bởi một dấu phẩy và một dấu cách ', ': ");
let inputArray = inputString.split(", ");
let numberArray = [];

//converting to numbers
for(let i = 0; i < inputArray.length; i++){
    numberArray[numberArray.length] = parseInt(inputArray[i]);
}

function bubbleSort(array){
    let done = false;
    while(!done){
        done = true;
        for(let i = 0; i < array.length; i++){
            if (array[i-1] > array[i]){
                done = false;
                let temp = array[i-1];
                array[i-1] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}

document.write("Mảng số nhập vào ban đầu là: <strong>["+inputString+"]</strong><br>");

document.write("Mảng mới sau khi sắp thứ tự từ nhỏ đến lớn là: <strong>["+bubbleSort(numberArray)+"]</strong>");