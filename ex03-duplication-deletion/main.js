let inputString = prompt("Nhập vào mảng ký tự cần loại bỏ phần tử trùng, các phần tử cách nhau bởi dấu ',': ");
let inputArray = inputString.split(",");

let resultArray = [];
for(let i = 0; i < inputArray.length; i++){
    if (!resultArray.includes(inputArray[i])) {
        resultArray.push(inputArray[i])
    }
}

document.write("Bạn vừa nhập vào mảng: <strong>["+inputString+"]</strong><br>");
document.write("Sau khi bỏ đi phần tử trùng, mảng này trở thành: <strong>["+resultArray.join(",")+"]</strong>");