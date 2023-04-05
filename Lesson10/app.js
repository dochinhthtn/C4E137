// quy ước nhỏ: tất cả biến lưu phần tử html đều có dấu $ đằng trước

// truy xuất phần tử thông qua id
// const $title = document.getElementById('big-title');

// truy xuất phần tử thông qua class
// const $paragraphs = document.getElementsByClassName('red-paragraph'); // trả về html collection

// truy xuất phần tử thông qua tên thẻ
// const $images = document.getElementsByTagName('img'); // trả về html collection
// console.log($images);

// document.querySelector(), document.querySelectorAll() => tìm hiểu thêm

// lấy ra nội dung của phần tử
// let titleContent = $title.innerHTML;
// console.log(titleContent);

// $title.innerHTML = "Nội dung mới 🙄";

// lấy ra thuộc tính của 1 phần tử
// let titleAttributeValue = $title.getAttribute('id');
// console.log(titleAttributeValue);

// thêm mới/thay đổi thuộc tính của 1 phần tử
// $title.setAttribute('data-goodbye', 'This is goodbye');
// $title.setAttribute('data-hello', 'This is hello');

// xóa thuộc tính của 1 phần tử
// $title.removeAttribute('data-goodbye');

// thay đổi định dạng của phần tử
// $title.style.color = 'red';
// $title.style.backgroundColor = 'black';
// $title.style.display = 'flex';
// $title.setAttribute('style', 'color: red; background-color: blue;')

// for (const $p of $paragraphs) {
//     $p.style.color = 'red';
// }

// $paragraphs[0].style.color = 'blue';

// thêm phần tử vào trang web
// const $link = document.createElement('a');
// $link.innerHTML = "This is link to somewhere";
// $link.setAttribute('href', 'http://google.com');

// document.body.prepend($link);
// $title.before($link); // thêm $link vào trước $title
// $title.after($link); // thêm $link vào sau $title
// $title.append($link); // thêm $link vào trong $title

// xóa phần tử trên trang web
// $title.remove();

// listener sau ghi đè listener trước
// $title.onclick = handleClickTitle1;
// $title.onclick = handleClickTitle2;

// thêm listener
// $title.addEventListener('click', handleClickTitle1);
// $title.addEventListener('click', handleClickTitle2);

// function handleClickTitle1() {
//     console.log('hello')
// }


// function handleClickTitle2() {
//     console.log('goodbye')
// }


// const $emailInput = document.getElementById('my-email');
// $emailInput.onchange = function () {
//     let email = $emailInput.value; // lấy giá trị nhập vào của ô input

//     let emailValid = isEmailValid(email);
//     if (!emailValid) alert('Hãy nhập lại email');
// };


// const $numberA = document.getElementById('number-a');
// const $numberB = document.getElementById('number-b');
// const $plusBtn = document.getElementById('plus-btn');
// const $subBtn = document.getElementById('sub-btn');

// $plusBtn.onclick = function () {
//     let a = Number($numberA.value);
//     let b = Number($numberB.value);

//     alert(a + b);
// }

// $subBtn.onclick = function () {
//     let a = $numberA.value;
//     let b = $numberB.value;

//     alert(a - b);
// }



// function isEmailValid(email) {
//     return String(email)
//         .toLowerCase()
//         .match(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         );
// }

// bài 1:
// const $urlInput = document.getElementById('url-input');
// const $widthInput = document.getElementById('width-input');
// const $heightInput = document.getElementById('height-input');
// const $borderRadiusInput = document.getElementById('border-radius-input');
// const $altInput = document.getElementById('alt-input');
// const $image = document.getElementById('image');

// $urlInput.onchange = () => $image.setAttribute('src', $urlInput.value);
// $altInput.onchange = () => $image.setAttribute('alt', $altInput.value);
// $widthInput.onchange = () => $image.style.width = $widthInput.value + 'px';
// $heightInput.onchange = () => $image.style.height = $heightInput.value + 'px';
// $borderRadiusInput.onchange = () => $image.style.borderRadius = $borderRadiusInput.value + 'px';

// bài 2:
const $contentInput = document.getElementById('task-content-input');
const $createTaskBtn = document.getElementById('create-task-btn');
const $taskList = document.getElementById('task-list');

$createTaskBtn.onclick = () => {
    let value = $contentInput.value;

    // tạo 1 li
    const $li = document.createElement('li');
    $li.innerHTML = value;

    $taskList.append($li);
};