/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(string) {
    // แยก string เอามาเก็บใน array
    const arr = string.split('');

    // ประกาศ array ใหม่เพื่อเก็บ string ที่แก้ไขแล้ว
    const newString = []


    // จำนวน loop ตาม length ของ arr
    for (let i = 0; i < arr.length; i++) {
        /*
        * push ค่าลงไปใน newString 
        * โดยให้ตัวแรกเป็นตัวใหญ่โดยใช้ toUpperCase() 
        * และตามด้วยอักษรตัวเล็ก โดยใช้ toLowerCase() 
        * และ repeat ตามค่าของ i
        * 
        * ค่าที่ได้  newString = [
        *   A,
        *   Bb,
        *   Ccc,
        *   Dddd
        * ] 
        */

        newString.push(arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i));
    }
    
    // นำ array ที่เก็บค่าที่แก้ไขแล้วมา join เข้าด้วยกันโดยใช้ - เป็นตัวคั่น
    return newString.join('-');
}

// console.log(accum("abcd"))
console.log(accum("RqaEzty"))
// console.log(accum("cwAt"))