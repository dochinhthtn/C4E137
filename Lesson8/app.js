// mảng

// cách khai báo:
let names = [
    "Chinh Do",
    "Ngoc Trinh",
    "Chi Pu",
    "Ngoc Trinh",
    "Dam Vinh Hung",
    "Ngoc Trinh",
    "Chi Pu",
];

// console.log(names);


// let numbers = [1, 100, 40, 3, 20];

// let isRich = false;
// let isHandsome = true;
// let hasGirlfriend = false;

// let features = [isRich, isHandsome, hasGirlfriend];

// isRich = true;
// truy xuất giá trị 1 phần tử bất kỳ trong mảng?
// console.log(names[1]); // lấy giá trị phần tử thứ 2 trong mảng
// console.log(names[0]); // lấy giá trị phần tử thứ 1 trong mảng

// thay đổi giá trị phần tử bất kỳ trong mảng?
// names[0] = "hello world";
// names[4] = "goodbye everyone";
// console.log(names);


// console.log(features);

// let array1 = ['a', 'b', 'c'];
// let array2 = ['a', 'b', 'c'];

// let array3 = array1;

// kiểm tra kiểu dữ liệu của mảng?
// console.log(typeof (array1));
// console.log(array1 + array2); // chương trình tự động ép kiểu mảng về string khi thực hiện phép cộng
// console.log(array1 == array2);
// console.log(array1 == array3);

// array1[0] = "hello";
// console.log(array1, array2);

// hoán đổi giá trị của 2 phần tử trong mảng
// let tmp = names[0];
// names[0] = names[3];
// names[3] = tmp;
// console.log(names);

// duyệt mảng

// c1: for ... let i = 0 ...
// for (let i = 0; i < names.length; i++) {
//     let stt = i + 1;
//     // console.log(stt + ". " + names[i]);

//     let name = names[i];
//     if (name == 'Ngoc Trinh' || name == 'Chi Pu') {
//         console.log(stt + ". " + name);
//     }
// }

// c2: for ... of
// let i = 0;
// for (const name of names) {
//     // làm việc với name ở trong này

//     i++;
// }

// const numbers = [1, 7, 8, -3, 6, 10, 9];
// in ra số chẵn trong numbers
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];

//     if (number % 2 == 0) console.log(number);
// }

// tính tổng phần tử
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     sum += number;
//     // sum = sum + number;
// }
// console.log(sum);

// tìm phần tử nhỏ nhất
// let min = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];

//     if (min > number) min = number;
// }
// console.log(min);

// thêm 3 số vào đầu mảng
// numbers.unshift(100, 1000, -4);
// console.log(numbers);
// thêm 3 số vào cuối mảng
// numbers.push(-9, 10, 50);
// console.log(numbers);

// xóa 1 phần tử đầu tiên trong mảng
// let deletedFirstNumber = numbers.shift();
// console.log("giá trị phần tử đầu tiên bị xóa: " + deletedFirstNumber);

// xóa 1 phần tử cuối mảng
// let deletedLastNumber = numbers.pop();
// console.log("giá trị phần tử cuối bị xóa: " + deletedLastNumber);

// tìm hiểu phương thức splice()?

// quiz 01:
// let arr = [];
// let n = Number(prompt('Nhap so n (n > 0)'));

// for (let i = 0; i < n; i++) {
//     let randomNumber = Math.floor(Math.random() * n);
//     arr[i] = randomNumber;
// }

// console.log(arr);

//bai 2
// let arr = [1, 2];
// let n = Number(prompt("Nhap vao n "));
// while (arr.length < n) {
//     arr.unshift(0);
// }
// console.log(arr);

// bai 3
// let arr = [1, 2, 6, 9];
// while (arr.length > 1) {
//     arr.pop();
// }
// console.log(arr);

// bài 1:
// let myArray = [1, 2, 3]
// let tich = 1
// for (let i = 0; i < myArray.length; i++) {
//     tich = tich * myArray[i]
// }
// console.log(tich);

// bài 2:

const numbers = [1, 7, 9, 10, 2, -10, 8, 4, -3];
const numbersDivideBy2 = [];

// tìm tất cả giá trị trong mảng numbers chia hết cho 2
// push tất cả số tìm được vào mảng numbersDivideBy2
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) numbersDivideBy2.push(numbers[i]);
}

if (numbersDivideBy2.length == 0) {
    console.log("Không có số nào trong numbers chia hết cho 2");
} else {
    // tìm giá trị nhỏ nhất trong mảng numbersDivideBy2
    let min = numbersDivideBy2[0];
    for (let i = 0; i < numbersDivideBy2.length; i++) {
        if (min > numbersDivideBy2[i]) {
            min = numbersDivideBy2[i];
        }
    }

    console.log("Giá trị nhỏ nhất chia hết cho 2 là: " + min);
}