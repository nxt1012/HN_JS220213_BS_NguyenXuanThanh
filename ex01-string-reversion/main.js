let inputString = prompt("Nhập vào chuỗi ký tự cần đảo ngược: ");
let reverseString = ""
for(let i = inputString.length-1; i >= 0; i--){
    reverseString += inputString.charAt(i);
}
document.write("Bạn vừa nhập vào chuỗi ký tự: <strong>"+inputString+"</strong><br>");

document.write("Chuỗi này khi đảo ngược lại sẽ thành: <strong>"+reverseString+"</strong>");