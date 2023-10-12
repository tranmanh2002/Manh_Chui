console.log(`hi chào cậu `)
//key: value
let a = {
    name: `john`,
    age: 25
};
console.log(`check data object: `, a)
console.log(`my name is: `, a.name)
console.log(`i am: `, a.age)

//khai bao array
let b = [`MU`, `Liver`,`Chelsea`];
//thay doi phan tu trong mang
b[0] = `Man`
//chen phan tu vao mang
b.push = `MU`

console.log(`type of b: `, typeof b, b)

//array object
let family = [
    {name: 'Puka', age: 16},
    {name: `Nika`, age: 18}
]
console.log(`My family: `, family)
