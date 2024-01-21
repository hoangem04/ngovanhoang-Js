// khai báo biến x
let x;



// tạo đối tượng bằng cách sử dụng hàm tạo đối tượng
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;
console.log(x);

// Lồng ghép đối tượng
const person = {
    address: {
        coords: {
            lat: 42.9384,
            Ing: -71.3232,
        },
    },
};

x = person.address.coords.lat;
console.log(x);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// toán tử trải rộng
const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

// Mảng đối tượng
const todos = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Pickup kids from school' },
    { id: 3, name: 'Take out trash' },
];

x= todos[0].name;
console.log(x);

// Nhận mảng khóa đối tượng
x = Object.keys(todo);

// Nhận mảng giá trị đối tượng
x = Object.values(todo);

// Nhận mảng các cặp khóa và giá trị đối tượng
x = Object.entries(todo);

// Kiểm tra đối tượng có thuộc tính
x= todo.hasOwnProperty('age');

console.log(x);


