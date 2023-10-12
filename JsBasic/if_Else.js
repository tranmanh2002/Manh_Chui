let arrTop4 = [`Man city`, `Liverpool`, `MU`, `Chelsea`];
let i = 0;
while (i < arrTop4.length){
    if(arrTop4[i].length === 2){
        console.log(`Top club: `, arrTop4[i])
        break;
    }
    i++;
}