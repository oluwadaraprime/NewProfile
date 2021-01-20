 let Odd = [ ];
let Even = [ ];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 ) {
      Even.push(i)
     } else {
      Odd.push(i)
    }
}
console.log('Group 1 = ' + Odd);
console.log('Group 2 = ' + Even);
