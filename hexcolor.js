

function genColor() {
    let letters = '0123456789ABCDEF';
    let colorname = ''

    for (i = 0; i < 6; i++) {
        colorname = colorname + letters[Math.floor(Math.random() * 16)];
    }

    document.getElementById('colorbox').style.backgroundColor = '#' + colorname;
    document.getElementById('name').innerText = '#' + colorname;
}

function rgbColor() {
    let arr = [];
    let colorname = 'rgb('
    for (i = 0; i < 3; i++) {
        arr.push(Math.round(Math.random() * 255));
    }

    colorname += arr[0];

    for (i = 0; i < 2; i++) {
        colorname += ',' + arr[i];
    }
    colorname += ')';

    document.getElementById('name2').innerText = colorname;
    document.getElementById('colorbox2').style.backgroundColor = colorname;
}




