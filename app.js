

function start() {
    const ucBtn = document.querySelector('#uc');
    const lcBtn = document.querySelector('#lc');
    const tcBtn = document.querySelector('#tc');
    const scBtn = document.querySelector('#sc');
    const copyBtn = document.querySelector('#copy');
    ucBtn.addEventListener('click', ucFun);
    lcBtn.addEventListener('click', lcFun);
    tcBtn.addEventListener('click', tcFun);
    scBtn.addEventListener('click', scFun);
    copyBtn.addEventListener('click', copyFun);

    setInterval(() => {
        countLine(); countWord();
    }, 500);

}
start();
function countLine() {
    const txt = document.querySelector('#txt');
    let lines = document.querySelector('#lines');
    let textValue = txt.value.trim();
    const line = [...textValue].reduce((a, c) => a + (c === '\n' ? 1 : 0), 0)

    if (textValue != "") {
        lines.innerHTML = line + 1;
    }
    else {
        lines.innerHTML = line;
    }
}
function countWord() {
    const txt = document.querySelector('#txt');
    const characters = document.querySelector('#letters');
    const words = document.querySelector('#words');
    let textValue = txt.value.trim(); // đoạn văn bản
    let textLength = textValue.length; // số kí tự
    let wordNum = textValue.split(' ').length + textValue.split('\n').length - 1;
    if (textValue != "") {
        characters.innerHTML = textLength;
        words.innerHTML = 500000 - (500000 - wordNum);
    }
    else {
        characters.innerHTML = textValue.length
        words.innerHTML = wordNum - 1;
    }
}

function ucFun() {
    const txt = document.querySelector('#txt');
    let textValueUp = txt.value.trim().toUpperCase();
    txt.value = textValueUp;
}
function lcFun() {
    const txt = document.querySelector('#txt');
    let textValue = txt.value.trim().toLowerCase();
    txt.value = textValue;

}
// function titleCase(str) {
//     let rs = [];
//     str = str.split(/\r?\n/);
//     let strLength = str.length;
//     for (let i = 0; i < strLength; i++) {
//         let stringTmp = str[i];
//         stringTmp = stringTmp.split(' ');
//         console.log(stringTmp);
//         for (let j = 0; j < stringTmp.length; j++) {
//             stringTmp[j] = stringTmp[j].charAt(0).toUpperCase() + stringTmp[j].slice(1) + '\n';
//             rs.push(stringTmp[j]);
//         }
//     }
//     console.log(rs);
//     return rs.join(' ');
// }

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function tcFun() {
    const txt = document.querySelector('#txt');
    let textValue = txt.value.trim().toLowerCase();
    txt.value = toTitleCase(textValue);
}
function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}
function capitalize2(str) {
    str = str.split('/n');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
function scFun() {
    const txt = document.querySelector('#txt');
    let textValueUp = txt.value.trim().toLowerCase();
    txt.value = capitalize(textValueUp);
}

function copyFun() {
    const txt = document.querySelector('#txt');
    txt.select();
    txt.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(txt.value);
}
