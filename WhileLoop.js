let random = [];
let count = 0;
const size = 5;

while(count < size) {
    random.push(Math.round(Math.random() * 10));
    count++;
    console.log('The current size of the array is ' + count);
}

console.log(random);