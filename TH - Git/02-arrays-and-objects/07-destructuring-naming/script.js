// Đặt thuộc tinhs đôi tượng có cùng tên với biến
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
};

console.log(person.age);

// Phá hủy thuộc tính đối tượng
const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'John',
    },
};

const {
    id: todoId, // đổi tên id thành todoId
    title,
    user: { name }, // Phá hủy nhiều cấp độ
} = todo;

console.log(todoId);

// Phá hủy mảng bằng toán tử còn lại / trải rộng
const numbers = [23, 67, 33, 49, 52];
const [first, second, ...reset] = numbers;
console.log(first, second, reset);