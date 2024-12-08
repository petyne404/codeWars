function removeParentheses(string) {
    let bracket = 0;
    let result = [];

    /*
    * นำ string มา loop ว่ามี ( หรือ ) อยู่ใน string หรือเปล่า
    * ถ้ามี ( ให้เพิ่มค่า bracket เข้าไป 1
    * ถ้ามี ) ให้ลบค่า bracket ออกไป 1
    * ถ้า bracket เท่ากับ 0 ให้เพิ่ม char เข้าไปใน result
    * สุดท้าย return result ออกมาเป็น string
    **/
   
    for (let char of string) {
        if (char === '(') {
            bracket++
        } else if (char === ')') {
            bracket--
        } else if (bracket === 0) {
            result.push(char);
        }
    }
    return result.join('');
}
const input = "example((asdf) (asdf)(s) (asdf)unwanted( thing)) asdf(asdf)example";
const result = removeParentheses(input);
console.log(result);
