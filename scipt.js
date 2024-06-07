// Câu 01: Arithmetic (Toán tử số học)
var x = 5;
var y = 3;

// addition
console.log("x + y = ", x + y); // 8

// subtraction
console.log("x - y = ", x - y); // 2

// multiplication
console.log("x * y = ",x * y); // 15

// division
console.log("x / y = ", x / y); // 1.6666666666666667

// remainder
console.log("x % y = ",x % y); // 2

// increment
console.log("++x = ", ++x);// x bây giờ = 6
console.log("x++ = ", x++); // in ra 6 và sau đó tăng lên 7
console.log("x = ", x); // 7

// decrement
console.log("--x = ", --x); // x bây giờ = 6
console.log("x-- = ", x--); // in ra 6 và sau đó giảm xuống còn 5
console.log("x = ", x); // 5

// exponentiaiton
console.log("x ** y =", x ** y);

// Câu 02: Comparison (Toán tử so sánh)
// equal operator
console.log(2 == 2);
console.log(2 == '2');

// not equal operator
console.log(3 != 2);
console.log('hello' != 'Hello');

// strict equal operator
console.log(2 === 2);
console.log(2 === '2');

// strict not equal operator
console.log(2 !== '2');
console.log(2 !== 2);

// Câu 03: Logical (Toán tử logic)
// logical AND
console.log(true && true);
console.log(true && false);

// logical OR
console.log(true || false);

// logical NOT
console.log(!true);

//Câu 04: String operators (Nối chuỗi)
console.log("hello" + " world"); // hello world

var a = "JavaScipt";

a += " tutorial";
console.log(a); // JavaScipt tutorial

//Câu 05: Swapping Variables (Hoán đổi biến)
var value1 = "one";
var value2 = "two";

// Giá trị ban đầu
console.log("Giá trị ban đầu: ", value1); // Giá trị ban đầu:  one
console.log("Giá trị ban đầu: ", value2); // Giá trị ban đầu:  two

// Hoán đổi giá trị
var value3 = value1;
value1 = value2;
value2 = value3;

console.log("Giá trị sau khi hoàn đổi: ", value1); // Giá trị sau hoán đổi: two
console.log("Giá trị sau khi hoàn đổi: ", value2); // Giá trị sau hoán đổi: one

// Câu 06: Một hình tròn và hai hình vuông

function squareAreasDiference(r) {
    var S = 2 * r**2;
    return S;
};

var test1 = squareAreasDiference(5);
console.log(test1);

var test2 = squareAreasDiference(6);
console.log(test2);

var test3 = squareAreasDiference(7);
console.log(test3);

// Câu 07: Kiểm tra xem một chuỗi có phải là palindrome hay không?

function palindrome(string) {
    const reverseString = string.split("").reverse().join("");
    console.log(reverseString)
    return string === reverseString;
}
console.log(palindrome("rotavator"));
console.log(palindrome("hello"));

// Câu 08: Data Types (Kiểu dữ liệu)
console.log(typeof "Le Van A"); // string
console.log(typeof 5000); // number
console.log(typeof 5000.99); // number
console.log(typeof [10, 15, 17]); // object
console.log(typeof { name: "Le Van A", age: 18, country: "Viet Nam" }); // object
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object

// Câu 10: Type Coercion (Ép kiểu)
var a = "100";
var b = 20;
var c = true;

console.log(+a + b + c);

// Câu 11: Assignment Operators (Toán tử gán)
var a = 10;

a = a + 20;
console.log(a); // 30

a = a + 70;
console.log(a); // 100

a += 100;
console.log(a); // 200

a -= 50;
console.log(a); // 150

a /= 50;
console.log(a); // 3

// Câu 12: Operators Challenges
var a = 10;
var b = "20";
var c = 80;

var test1 = ++a + +b++ + +c++ - +a++;
console.log(test1); // 11 + (+20) + (+80) -(+11) = 100
console.log(a, b, c); // a = 12; b = 21; c = 81
console.log("------------");

var test2 = ++a + -b + +c++ - -a++ + +a;
console.log(test2); // 13 + (-21) + (+81) - (-13) + (+14) = 100
console.log(a, b, c);//a = 14; b = 21; c = 82
console.log("------------");

var test3 = --c + +b + --a * +b++ - +b * a + --a - +true;
console.log(test3);// 81 + (+21) + (13) * (+21) - (+22) * 13 + 12 - (+1) = 100
console.log(a, b, c);// a = 12; b = 22; c = 81
console.log("------------");

// Câu 13: Math Object
console.log(Math.round(99.2)); //99

console.log(Math.round(99.5)); //100

console.log(Math.ceil(99.2)); //100

console.log(Math.floor(99.9)); //99

console.log(Math.min(10, 20, 100, -100, 90));//-100

console.log(Math.max(10, 20, 100, -100, 90));//100

console.log(Math.pow(2, 4));//16

console.log(Math.random());//Trả về 0.46481923092989685 (Một số thập phân ngẫu nhiên)

console.log(Math.trunc(99.5));//99, vì trunc bỏ đi các số sau dấu thập phân

// Câu 14: String Methods (1)
var theName = "  28Tech  ";
//trim là bỏ cách
console.log(theName);//  28Tech  
console.log(theName[1]);//
console.log(theName[5]);//  e

console.log(theName.charAt(1));//" "
console.log(theName.charAt(5));//"e"

console.log(theName.length);// 10

console.log(theName.trim());//"28Tech"

console.log(theName.toUpperCase());//"  28TECH  "
console.log(theName.toLowerCase());// "  28tech  "

console.log(theName.trim().charAt(5).toUpperCase());//"H"

// Câu 15: String Methods (2)
var a = "Daca.vn - Professional Web Design Services.";

console.log(a.indexOf("Web")); //23
console.log(a.indexOf("Web", 24));//-1
console.log(a.indexOf("vn"));//5

console.log(a.lastIndexOf("Design"));//27

console.log(a.slice(10, 22));//Professional
console.log(a.slice(-16, -10));//Design

console.log(a.split("", 7)); // ["D", "a", "c", "a", ".", "v", "n"]

// Câu 16: Comparison Operators (Toán tử so sánh)
console.log(10 == "10"); // true
console.log(-100 == "-100");// true
console.log(10 != "10");// false

console.log(10 === "10");// false
console.log(10 !== "10");// true
console.log(10 !== 10);// false

console.log(10 > 20);// false
console.log(10 > 10);// false
console.log(10 >= 10);// true

console.log(10 < 20);// true
console.log(10 < 10);// false
console.log(10 <= 10);// true

console.log(typeof "Daca.vn" === typeof "Nam Dang");//true

// Câu 17: Logical Operators (Toán tử logic)
console.log(true); // true

console.log(!true);//false

console.log(!(10 == "10"));//false

console.log((10 == "10") && (10 > 8) && (10 > 50));//false

console.log((10 == "10") || (10 > 80) || (10 > 50));//true

//Câu 18: Add And Remove From Array
const myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

myFriends.unshift("Vu Van E", "Nguyen Van F");
console.log(myFriends);//"Vu Van E", "Nguyen Van F", "Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"

const myFriends1 = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

myFriends1.push("Vu Van E", "Nguyen Van F");
console.log(myFriends1);//"Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D", "Vu Van E", "Nguyen Van F"

const myFriends2 = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

myFriends2.shift();
console.log(myFriends2);//"Nguyen Thi B", "Do Van C", "Dao Thi D"

const myFriends3 = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

myFriends3.pop();
console.log(myFriends3);//"Le Van A", "Nguyen Thi B", "Do Van C"

//Câu 19: indexOf() và lastIndexOf()
var chuoi = "JavaScript là một ngôn ngữ lập trình phổ biến. Đây là ngôn ngữ đứng đầu trong bảng xếp hạng 2023.";
var tuTimKiem = "ngôn ngữ";

var viTriDauTien = chuoi.indexOf(tuTimKiem);
var viTriCuoiCung = chuoi.lastIndexOf(tuTimKiem);

console.log(`Vị trí đầu tiên của từ khóa "${tuTimKiem}" là: ${viTriDauTien}`);
console.log(`Vị trí đầu tiên của từ khóa "${tuTimKiem}" là: ${viTriCuoiCung}`);

// Câu 20: Chuyển Đổi Phút thành Giây
function convert(minutes){
    return minutes * 60;
}
console.log(convert(5)); // ➞ 300
console.log(convert(3)); // ➞ 180
console.log(convert(2)); // ➞ 120

// Câu 21: Diện Tích của Tam Giác
function triArea(base, height) {
    return (base * height) / 2;
}
console.log(triArea(3, 2));
console.log(triArea(7, 4));
console.log(triArea(10, 10));

// Câu 22: Cạnh Lớn Nhất của Tam Giác
function nextEdge(side1, side2) {
    return side1 + side2 - 1;
  }
  
  // Ví dụ
  console.log(nextEdge(8, 10)); // ➞ 17
  console.log(nextEdge(5, 7)); // ➞ 11
  console.log(nextEdge(9, 2)); // ➞ 10

// Câu 23: Tổng Góc của Đa Giác

function sumPolygon(n){
    return (n - 2) * 180;
}
console.log(sumPolygon(3));
console.log(sumPolygon(4)); // ➞ 360
console.log(sumPolygon(6)); // ➞ 720

// Câu 24: Điểm Bóng Đá
function footballPoints(wins, draws, losses){
    return wins * 3 + draws * 1;
}
console.log(footballPoints(3, 4, 2));
console.log(footballPoints(5, 0, 2)); // ➞ 15
console.log(footballPoints(0, 0, 1)); // ➞ 0

// Câu 25: Khung Hình Trên Giây
function frames(minutes, fps){
    return minutes * 60 * fps;
};
console.log(frames(1,1));
console.log(frames(10,1));
console.log(frames(10,25));

// Câu 26: Diện tích hình chữ nhật
function area(length, width) {
    if(length <= 0|| width <= 0){
        return -1;
    }
    else{
        return length * width;
    }
};
console.log(area(3, 4)); // Output: 12
console.log(area(10, 11)); // Output: 110
console.log(area(-1, 5)); // Output: -1
console.log(area(0, 2)); // Output: -1

// Câu 27: Number of Stickers (Số lượng nhãn dán)
function howManyStickers(n){
    return (n * n) * 6;
}
console.log(howManyStickers(1)) //➞ 6
console.log(howManyStickers(2)) //➞ 24
console.log(howManyStickers(3)) //➞ 54

// Câu 28: 50-30-20 Strategy (Chiến lược 50-30-20)
function fiftyThirtyTwenty(salary){
    var needs = salary * 0.5;
    var hobby = salary * 0.3;
    var savings = salary * 0.2;

    return{
        Needs: needs,
        Hobby: hobby,
        Savings: savings,
    };
}
console.log(fiftyThirtyTwenty(10000));
// Output: { "Needs": 5000, "Hobby": 3000, "Savings": 2000 }

console.log(fiftyThirtyTwenty(50000));
// Output: { "Needs": 25000, "Hobby": 15000, "Savings": 10000 }

console.log(fiftyThirtyTwenty(13450));
// Output: { "Needs": 6725, "Hobby": 4035, "Savings": 2690 }

// Câu 29: Nth Star Number (Số sao thứ N)
function starNumber(n) {
    return 6 * n * (n - 1) + 1;
}
console.log(starNumber(2)); // Output: 13
console.log(starNumber(3)); // Output: 37
console.log(starNumber(5)); // Output: 121

// Câu 30: Lãi kép
function compoundInterest(p, t, r, n){
    var A = p * Math.pow(1 + r / n, n * t);

    return parseFloat(A.toFixed(2));
};
console.log(compoundInterest(10000, 10, 0.06, 12)); // Output: 18193.97
console.log(compoundInterest(100, 1, 0.05, 1)); // Output: 105.0
console.log(compoundInterest(3500, 15, 0.1, 4)); // Output: 15399.26
console.log(compoundInterest(100000, 20, 0.15, 365)); // Output: 2007316.26

// Câu 31: The Farm Problem (Vấn đề trang trại)
function animals(chickens, cows, pigs){
   var totalChickensLegs = chickens * 2;
   var totalCowsLeg = cows * 4;
   var totalPigsLeg = pigs * 4;

   var totalLegs = totalChickensLegs + totalCowsLeg + totalPigsLeg;

   return totalLegs;
}
console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3)); // Kết quả: 22
console.log(animals(5, 2, 8)); // Kết quả: 50

// Câu 32: Chuyển đổi tuổi sang ngày
function calcAge(n){
    return n * 365;
};
console.log(calcAge(65)); // Output: 23725
console.log(calcAge(0)); // Output: 0
console.log(calcAge(20)); // Output: 7300

// Câu 33: Khủng hoảng thế kỷ
function futurePeople(population, n){
    return population + (3 * 10 * 12 * n);
};
console.log(futurePeople(256, 2)); // Output: 976
console.log(futurePeople(3248, 6)); // Output: 5408
console.log(futurePeople(5240, 3)); // Output: 6320

// Câu 34: Xếp chồng các hộp
function stackBoxes(n){
    return n*n;
}
console.log(stackBoxes(1));
console.log(stackBoxes(2)); // Output: 4
console.log(stackBoxes(0)); // Output: 0

// Câu 35: Viết hàm Nói lắp
function stutter(word) {
    // Lấy hai ký tự đầu tiên
    var firstTwoLetters = word.substring(0, 2);
    // Ghép chuỗi với dấu ba chấm và khoảng trắng sau mỗi ký tự
    var stutteredWord = `${firstTwoLetters}... ${firstTwoLetters}... ${word}`;
    return stutteredWord;
}
console.log(stutter("Bạn có khỏe không?")); // Output: "Bạ... Bạ... Bạn có khỏe không?"
console.log(stutter("Tôi khỏe.")); // Output: "Tô... Tô... Tôi khỏe."
console.log(stutter("Đây là đâu?")); // Output: "Đâ... Đâ... Đây là đâu?"