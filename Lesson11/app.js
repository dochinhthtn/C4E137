// localStorage

// lưu dữ liệu vào localStorage
// localStorage.setItem('name', 'chinh do');
// localStorage.setItem('address', 'Thai Binh');
// localStorage.setItem('weight', 70);

// localStorage.setItem('name', 'someone');

// localStorage.setItem('favorites', ['a', 'b', 'c', 'd']);
// localStorage.setItem('pet', { type: 'cat', name: 'Bob', age: 2 });

// lấy dữ liệu từ localStorage
// const value = localStorage.getItem('weight'); // kiểu dữ liệu trả về: string | null
// const favorites = localStorage.getItem('favorites');
// const pet = localStorage.getItem('pet');
// console.log(pet);

const favorites = ['money', 'sleeping', 'girl'];
const pet = { type: 'cat', name: 'Bob', age: 2 };
const users = [
    { id: 1, name: 'A', username: 'user_a', password: '12345678' },
    { id: 2, name: 'B', username: 'user_b', password: '12345678' }
];

// biến đổi object | array => string (json)
// const favoritesJSON = JSON.stringify(favorites);
// console.log(favoritesJSON);

// const petJSON = JSON.stringify(pet);
// console.log(petJSON);

// lưu lại users vào localstorage
// const usersJSON = JSON.stringify(users); // biến đổi users => json
// localStorage.setItem('users', usersJSON);
// console.log(usersJSON);

// biến đổi string (json) => object | array

// const newPet = JSON.parse(petJSON);
// console.log(newPet);

// lấy users từ localstorage
// const value = localStorage.getItem('users');
// const newUsers = JSON.parse(value);
// console.log(newUsers);

const defaultSeconds = 180;

const $seconds = document.getElementById('seconds');
const $startTimerBtn = document.getElementById('start-timer-btn');
const $pauseTimerBtn = document.getElementById('pause-timer-btn');
const $resetTimerBtn = document.getElementById('reset-timer-btn');

let timer = null;

$seconds.innerHTML = defaultSeconds;

$startTimerBtn.onclick = function () {

    timer = setInterval(() => {
        let value = $seconds.innerHTML;
        value = value - 1;
        $seconds.innerHTML = value;

        if (value == 0) {
            clearInterval(timer);
            return;
        }


    }, 1000);
};

$pauseTimerBtn.onclick = function () {
    clearInterval(timer);
}

$resetTimerBtn.onclick = function () {
    clearInterval(timer);
    $seconds.innerHTML = defaultSeconds;
}

// let name = 'Chinh Do';

// let text = `
// Hello
// ${name}
// Goobye
// `;

// spread
let nums1 = [1, 2, 3, 4];
let nums2 = [8, 9, 10];

let res1 = [...nums1, 10, 9, ...nums1];

let res2 = [...nums1, ...nums2];
console.log(res2);

let part1 = { type: 'Cat', name: 'Bob' };
let part2 = { age: 20 };

let cat1 = { name: 'Bob', age: 1 };
let cat2 = { name: 'Peter', age: 2 };
let cat3 = { name: 'Bo', age: 24 };

let magicCat = { ...cat3, ...cat1, ...cat2 };
console.log(magicCat);


let summary = { name: 'Peter', ...part1, ...part2, address: 'HN' };
// console.log(summary)

// destructuring
// let type = summary.type;
// let name = summary.name;
let { type, name } = summary;
// console.log(type, name);

let [a, b, c, d] = nums1;
// console.log(c, d);