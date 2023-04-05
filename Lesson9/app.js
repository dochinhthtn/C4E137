const thePet = {
    name: "Bob",
    age: 2,
    kind: "dog"
};

const mySelf1 = {
    // đặc điểm (thuộc tính)
    firstName: "Chinh",
    lastName: "Do",
    dob: "25/11/1995",
    address: "Thai Binh",
    phoneNumber: "0977666332",
    pet: thePet

    // hành vi (phương thức)
};

const mySelf2 = {
    // đặc điểm (thuộc tính)
    firstName: "Chinh",
    lastName: "Do",
    dob: "25/11/1995",
    address: "Thai Binh",
    phoneNumber: "0977666332",
    pet: thePet

    // hành vi (phương thức)
};

// const mySelf3 = mySelf1;

// console.log(mySelf1 == mySelf2);
// console.log(mySelf1 == mySelf3);

// lấy ra giá trị của thuộc tính "firstName" trong mySelf1
// console.log(mySelf1.firstName);
// console.log(mySelf1['firstName']);

// const key = 'firstName';
// console.log(mySelf1[key]);

// console.log(mySelf1.firstName == mySelf2.firstName);
console.log(mySelf1.pet == mySelf2.pet);

// thay đổi giá trị thuộc tính phoneNumber của mySelf1
mySelf1.phoneNumber = "09826578333";
mySelf1['phoneNumber'] = "09826578333";

// thêm thuộc tính isHandsome cho mySelf1
mySelf1.isHandsome = true;
mySelf1['isHandsome'] = true;

// xóa thuộc tính dob của mySelf1
delete mySelf1.dob;

// console.log(mySelf1);

// for (let key in mySelf1) {
//     console.log("Đặc điểm " + key + " có giá trị là: " + mySelf1[key]); // khác mySelf1.key
// }

// khai báo function nhập và kiểm tra 1 số
// let a = inputNumber('a');
// let b = inputNumber('b');

// function inputNumber(label) {
//     let input = NaN;
//     do {
//         input = Number(prompt("Nhập vào số " + label + ": "));
//     } while (isNaN(input));

//     return input; // trả về giá trị khi gọi hàm và không thực thi các đoạn code bên dưới
//     console.log("Thực thi chỗ này không?")
// }

// function test() {
//     let a = 100;
//     let b = 10;

//     // closure (bao đóng)
//     function calculateAB() {
//         return a + b;
//     }

//     return calculateAB;
// }

// const res1 = test();
// console.log(res1);

// console.log(test());

// gọi function inputNumber
// a = inputNumber('a');
// b = inputNumber('b');
// let c = inputNumber('c');

// function có tính chất hoisting: sử dụng function trước khi khai báo


function doSomething() {
    console.log("Do something here");
}

function sayHello() {
    console.log("hello world");

    return function () {
        console.log("goodbye, see you later");
    }
}

function executeAfterSeconds(seconds, work) {
    console.log("Thực thi gì đó sau " + seconds + " giây");
    setTimeout(work, seconds * 1000);
}

// executeAfterSeconds(3, sayHello());

// let res = sayHello(); // () => console.log("goodbye, see you later")
// executeAfterSeconds(3, res);
// executeAfterSeconds(5, doSomething);

// khai báo arrow function

const doAnything = () => {

}

const doNothing = (a, b, c, d) => {
    return "hello";
};

// function sum(a,b,c) {
//     return a + b + c;
// }
// const sum = (a, b, c) => a + b + c;

// const chinhDo = {
//     name: "Chinh Do",
//     flirt: () => {
//         console.log(this);
//     },

//     run: function () {
//         console.log(this);
//     }
// };

// chinhDo.flirt();
// chinhDo.run();

// bài 1: viết function tìm nghiệm phương trình bậc 2
function timNghiemPtBac2(a, b, c) {
    if (a == 0) {
        console.log("Không phải phương trình bậc 2");
        return null;
    }

    const delta = b ** 2 - 4 * a * c;
    if (delta == 0) {
        const x = -b / (2 * a);
        return [x];
    } else if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    } else {
        return [];
    }
}

// let nghiem = timNghiemPtBac2(1, -3, -4);
// console.log(nghiem);

// bài 2: kiểm tra 3 cạnh của 1 tam giác
function kiemTra3CanhTamGiac(a, b, c) {

    if (a > 0 && b > 0 && c > 0) {
        if ((a + b > c) && (a + c > b) && (b + c > a)) return true;
    }

    return false;

    // return (
    //     (a > 0 && b > 0 && c > 0)
    //     && (a + b > c)
    //     && (a + c > b)
    //     && (b + c > a)
    // );
}

let laTamGiac = kiemTra3CanhTamGiac(2, 8, 4);
console.log(laTamGiac);