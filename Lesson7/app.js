// let a = "hello";
// let b = 10;

// nhập dữ liệu từ bàn phím và gán trị vừa nhập vào trong 1 biến
// let input = prompt("Hãy nhập vào đây để gán giá trị cho biến 'input': "); // dữ liệu có kiểu string

// let x = Number(prompt("Nhập số x"));
// let y = Number(prompt("Nhập số y"));

// let z = x + y;
// console.log(z);

// console.log(input);


// let name = "Chinh Do";

// {
//     // bên trong 1 khối lệnh
//     let name = "Someone Else";
//     let age = 28;

//     {
//         let address = "Thai Binh";
//         // dùng được age ở chỗ này

//         // address chỉ tồn tại ở trong này
//     }

//     console.log(age);

// }

// console.log(age); // không tồn tại ở đây

// let age = prompt("Nhập vào tuổi của bạn");

// nếu age nhỏ hơn 18 thì => "Không cho vào"
// nếu age lớn hơn hoặc bằng 18 => "Vào thoải mái"

// if (age < 18) {
//     console.log("Không cho vào");
// } else {
//     console.log("Vào thoải mái");
// }


// nhập vào phân loại của 1 thằng học sinh: 1, 2, 3
// nếu phân loại là 1 => 'Thằng này xứng đáng có 10 người yêu'
// nếu phân loại là 2 => '9.5 điểm'
// nếu phân loại là 3 => 'Cần cố gắng hơn'

// let rank = prompt('nhập vào phân loại');
// if (rank == 1) {
//     console.log('Thằng này xứng đáng có 10 người yêu')
// } else if (rank == 2) {
//     console.log('9.5 điểm');
// } else if (rank == 3) {
//     console.log('Cần cố gắng hơn');
// } else {
//     console.log('nhập đúng rank của bạn');
// }

// let text = prompt('Nhập vào 1 chuỗi');

// if (text.length < 8) {
//     console.log('chuỗi ngắn quá');
// } else {
//     console.log('chuỗi này được');
// }

// in ra dòng "I Love You" 500 lần, mỗi dòng có đánh số thứ tự
// for (let count = 1; count <= 500; count++) {
//     console.log(count + ". I Love You");
// }

// let sum = 0;
// for (let count = 1; count <= 50; count++) {
//     sum += count;
// }
// console.log(sum)

// let num = 10;
// while (num >= 6) {
//     console.log(num);
//     num = Math.floor(Math.random() * 10);
// }

// let index = 1;
// while (index <= 200) {
//     console.log(index);
//     index++;
// }

// let s = prompt("Chuỗi s");
// let l = prompt("Số l");

// while (s.length < l) {
//     s += 'a';
// }

// console.log(s);

// let x = prompt("Nhập số x");
// let y = prompt("Nhập số y");

// if (
//     x >= 0
//     && x < y
//     && y <= 100
// ) {
//     while (x < y) {
//         x++;
//         y--;
//     }

//     console.log(x, y);
// } else {
//     console.log('Nhập sai x và y')
// }

//BÀI 1
// for (let num = 1; num <= 500; num++) {
//     console.log(num);
// }


//Bài 2

// for (let i = 1; i <= 300; i++) {
//     if (i % 2 == 0 && i % 3 == 0) {
//         console.log(i)
//     }
// }

//bai 3//

// let sum = 0
// for (let count = -30; count <= 50; count++) {
//     if (count % 2 == 0) {
//         sum = sum + count;
//     }

// }
// console.log(sum)

// Bài 4: tính giai thừa
// let gt = 1;
// let bienBai4 = prompt('Nhap vao n: ');
// let tong = 1;
// while (gt <= bienBai4) {
//     tong = tong * gt;
//     gt++;
// }
// console.log(tong);

// let res = 1;
// let n = Number(prompt('Nhập vào số n'));
// for (let i = 1; i <= n; i++) {
//     res = res * i;
// }

// console.log(res);

// let a = Number(prompt('a'));
// let b = Number(prompt('b'));
// let x = Number(prompt('x'));

// let res = null;

// for (let i = a; i <= b; i++) {
//     if (i % x == 0) {
//         res = i;
//         break;
//     }
// }

// let count = a;
// while (count <= b && res % x != 0) {
//     if (count % x == 0) res = count;
//     count++;
// }

// console.log(res);


let S = 0;
let n = prompt("Nhap n= ");
for (let i = 1; i <= n; i++) {
    S += 1 / (i * (i + 1));
}

console.log(S);