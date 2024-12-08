function wordMesh(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let preResult = []; // สร้างตัวแปรไว้สำหรับเก็บผลลัพธ์ชั่วคราวสำหรับแต่ละคำ ก่อนที่จะเอาไปเก็บใน result
        //ให้เริ่มต้นตอนคำที่ 2
        if (i >= 1) {
            let prevWord = arr[i - 1].split(''); // คำก่อนหน้า
            let currWord = arr[i].split(''); // คำปัจจุบัน
            
            // กำหนดความยาวของ prevWord และ currWord ให้เท่ากัน
            prevWord.length > currWord.length
                ? prevWord = prevWord.slice(prevWord.length - currWord.length)
                : currWord = currWord.slice(0, prevWord.length);

            //loop จนกว่า prevWord หรือ currWord จะเป็นค่าว่าง
            while (prevWord.length > 0) {
                
                /**
                 * เช็คว่าตัวอักษรแรกของ prevWord และ currWord เหมือนกันหรือไม่
                 *  ถ้าไม่ให้ทำการ ลบตัวอักษรแรกของ prevWord และ ลบตัวอักษรสุดท้ายของ currWord
                 *  และถ้าตัวแรกของ prevWord เหมือนกับ currWord ให้ทำการเช็คว่าตัวอักษรที่เหลือของ prevWord เหมือนกับ currWord หรือไม่
                 *  ถ้าไม่ให้ทำการ ลบตัวอักษรแรกของ prevWord และ ลบตัวอักษรสุดท้ายของ currWord
                 *  ถ้าเหมือนกันให้ทำการเก็บค่าทั้งหมดใน prevWrod ไปเก็บใน preResult
                 *  แล้วทำการ break ออกจาก loop
                */ 

                if (prevWord[0] !== currWord[0]) {
                    prevWord.shift()
                    currWord.pop()
                } else if (prevWord.every((value, index) => value === currWord[index])) {
                    preResult = prevWord;
                    break;
                } else {
                    prevWord.shift();
                    currWord.pop();
                }
            }
        }

        //เช็คว่า ถ้า result มีค่าแล้ว และ preResult มีค่าเท่ากับค่าว่าง return 'failed to mesh'
        // เพราะว่าไม่สามารถเชื่อมคำได้
        if (result.length > 0 && preResult.length == 0) {
            return 'failed to mesh';
        }

        // นำค่าที่เก็บไว้ใน preResult มาเก็บใน result
        result.push(preResult.join(''));
    }
    return result.join('');

}

// console.log(wordMesh(["beacon", "condominium", "umbilical", "california"]));
//conumcal
console.log(wordMesh(["jamestown", "ownership", "hippocampus", "pushcart", "cartographer", "pheromone"]));
console.log(wordMesh(["kingdom", "dominator", "notorious", "usual", "allegory"]));
