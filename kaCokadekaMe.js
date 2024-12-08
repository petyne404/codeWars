function kaCokadekaMe(string) {
    // ประกาศตัวแปร str เป็น array ที่แบ่งคำจาก string ด้วย space
    let str = string.split(' ');
    // ประกาศตัวแปร vowels ที่เป็นเสียงสระไว้สำหรับตรวจสอบ
    let vowels = ['a', 'i', 'u', 'e', 'o'];
    let result = '';

    // วนลูปเพื่อดึงคำออกมาจากอะเรย์ str
    for (let s of str) {
        // ประกาศตัวแปร preResult เพื่อเก็บคำที่แก้ไขแล้ว
        let preResult = 'ka';

        // วนลูปเพื่อดึงตัวอักษรออกมาจากคำ
        for (let i = 0; i < s.length; i++) {
            /**
             * -ตรวจสอบว่าตัวอักษรนั้นเป็นเสียงสระหรือไม่
             *  + ถ้าเป็นเสียงสระให้ตรวจสอบว่าเป็นตัวอักษรพิมพ์ใหญ่หรือเล็ก
             *      * ถ้าเป็นตัวอักษรพิมพ์ใหญ่ให้เพิ่ม ka ไปหลังตัวอักษรนั้น
             *  + ถ้าเป็นตัวอักษรพิมพ์เล็กให้ตรวจสอบว่าตัวอักษรถัดไปเป็นเสียงสระหรือไม่
             *      * ถ้าเป็นเสียงสระให้เพิ่มตัวอักษรนั้นเข้าไปใน preResult
             *      * ถ้าเป็นตัวอักษรที่ไม่ใช่เสียงสระให้เพิ่ม ka ไปหลังตัวอักษรนั้น
             * -ถ้าไม่ใช่เสียงสระให้เพิ่มตัวอักษรนั้นเข้าไปใน preResult
             *  */            
            if (vowels.includes(s[i].toLowerCase())) {
                if (s[i] === s[i].toUpperCase()) {
                    preResult += `${s[i]}ka`;
                } else if (vowels.includes(s[i + 1]) || i === s.length - 1) {
                    preResult += s[i];
                } else if (i !== s.length - 1) {
                    preResult += `${s[i]}ka`;
                }
            } else {
                preResult += s[i];
            }
        }
        result += preResult;
    }

    return result;
}

console.log(kaCokadekaMe('maintenance'));
console.log(kaCokadekaMe('Woodie'));
console.log(kaCokadekaMe('Abbaa'));
//kamaikantekanakance
//kamaikankatekanakankace
//kamaikantekanankace
//kaiamkaetnkanankaundefinedec

//'kamaikantekanankace'
//'kamaikantekanakance'