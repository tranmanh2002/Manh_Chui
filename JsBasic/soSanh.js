let a = 5;
let b = `5`

console.log(`compare a, b: `, a == b)//true

/// === type, value. khuyen khich dung ===
console.log(`compare a, b: `, a === b)//false

//phan biet empty, null, undefined
let c;//chua gan gia tri
console.log(`check value: `, c)//undefined

c ={};
console.log(`check value: `, c)

c = null;//gan gia tri mac dinh null
console.log(`check value: `, c)//null