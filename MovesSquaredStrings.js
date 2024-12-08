function rot90Clock(strng) {
    // นำ string มาแบ่ง โดยใช้ \n เป็นตัวแบ่ง
    str = strng.split('\n');
    // สร้าง array เพื่อเก็บผลลัพธ์
    result = [];

    // วนลูปตามความยาวของ array str
    for (let i = 0; i < str[0].length; i++) {
        // สร้างตัวแปร temp เพื่อเก็บผลลัพธ์ของ array แต่ละตัว
        let temp = '';
        // วนลูปตามความยาวของ array str แต่ละตัว และเริ่มจากตัวสุดท้าย
        for (let j = str.length - 1; j >= 0; j--) {
            temp += str[j][i];
        }
        result.push(temp);
    }
    return result.join('\n');
}

function diag1Sym(strng) {
    str = strng.split('\n');
    result = [];

    for (let i = 0; i < str[0].length; i++) {
        let temp = '';
        // วนลูปตามความยาวของ array str แต่ละตัว และเริ่มจากตัวแรก
        for (let j = 0; j < str.length; j++) {
            temp += str[j][i];
        }
        result.push(temp);
    }
    return result.join('\n');
}

function selfieAndDiag1(strng) {
    str = strng.split('\n');
    result = [];

    for (let i = 0; i < str[0].length; i++) {
        let temp = '';
        // นำค่าของ array str ตำที่ i มาเก็บไว้ใน temp
        temp += `${str[i]}|`;
        // วนลูปตามความยาวของ array str แต่ละตัว และเริ่มจากตัวแรก
        for (let j = 0; j < str.length; j++) {
            temp += str[j][i];
        }
        result.push(temp);
    }
    return result.join('\n');
}
function oper(fct, s) {
    // เรียก callback function fct โดยส่งค่า s เข้าไป
    return fct(s)
}



console.log(oper(selfieAndDiag1,'abcd\nefgh\nijkl\nmnop'))

//rot90Clock
//input abcd\nefgh\nijkl\nmnop
//output miea\nnjfb\nokgc\nplhd

//diag1Sym
//input abcd\nefgh\nijkl\nmnop
//output aeim\nbfjn\ncgko\ndhlp

//selfieAndDiag1
//input abcd\nefgh\nijkl\nmnop
//output abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp
