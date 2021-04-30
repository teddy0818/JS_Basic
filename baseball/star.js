//마름모 별찍기

let star = '';

for(let i=1; i<=3; i++) {
    for(let z=3-i; z>0; z--) {
        star += ' ';
    }

    for(let k=0; k<2*i-1; k++) {
        star += '*';
    }
    star += '\n';
}

for(let i=0; i<=1; i++) {
    for(let z=0; z<i+1; z++) { //1, 2
        star += ' ';
    }

    for(let k=0; k<3-2*i; k++) { // 3, 1
        star += '*';
    }
    star += '\n';
}

console.log(star);