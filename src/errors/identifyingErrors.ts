class ValidationError extends Error {
    constructor(message: string) {
        super(message); // (1)
        this.name = 'ValidationError'; // (2)
    }
}

// const myFunc = function () {
//     const a;
// };

// class A {
//     constructor();
// }
// const user = {
//     name: 'John Doe',
//     age: 30,
// };
