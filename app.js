let i=0;
const lastNumber = 10;
let message = '';

while (++i<=lastNumber) {
    
    message+=`${i}${i!=lastNumber ? ',':''},`;
}
console.log(message);

