let inputString = prompt("Nhập vào chuỗi ký tự cần viết in hoa mỗi ký tự đầu chữ: ");
let wordsArray = inputString.split(" ");

for(let i = 0; i < wordsArray.length; i++){
    let temp = wordsArray[i].charAt(0).toUpperCase();
    wordsArray[i] = temp + wordsArray[i].slice(1)
}
document.write("Bạn vừa nhập vào chuỗi ký tự: <strong>"+inputString+"</strong><br>");

document.write("Chuỗi này khi viết in hoa mỗi ký tự đầu chữ sẽ thành: <strong>"+wordsArray.join(" ")+"</strong>");