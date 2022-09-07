//bài 5*
// // console.log(age);//error

// let age = 27;

// console.log(age);   // 27

// // console.log(firstName);// error chưa đc khai báo

// console.log(age); // 27

// let firstName = "Peter";
// let lastName = "Parker";
// const job = "Spider man";

// console.log(firstName); // peter
// console.log(lastName);//parker
// console.log(job);//Spider man

///////////
//bài 6
//   a = 2;
//   var a;
//   console.log( a ); // 2
////
//bài 7
//   console.log( a ); //undefined
// var a = 2;

//bài 8
// Không chạy đoạn code sau, phán đoán output của các câu lệnh console.log() var a = 10;
// function foo() {
// var a;
// console.log( a );// undefined
// a = 2;
// }
// foo();

//Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array

// function removeEnd(arr, n) {
//   // logic code
//   let newarr = arr.length - n
//arr.length = newarr
//   return arr
// }
//removeEnd([1, 2, 3, 4, 5],2)
/////////////////////

//  12. Viết 1 chương trình trả về n phần tử đầu tiên có trong 1 array
// function firt(){
// arr.length = n;
//return arr
//c2

//c3
// return arr.splice(n,arr.length-n);
//   }

//13. Cho một mảng
// const users = [
// {
// name: "Angelina Jolie",
// age: 80
// },
// {
// name: "Eric Jones",
// age: 2
// },
// {
// name: "Paris Hilton",
// age: 5
// },
// {
// name: "Kayne West",
// age: 16
// },
// {
// name: "Bob Ziroll",
// age: 100
// }
// ]
// let user = users.map(function(users){
//     return `<H1>${users.name}</H1> <H2>${users.age}</H2>    `;
// })
// console.log(user);
// //Sử dụng phương thức map() của array, tạo một array mới với các phần tử con ở
// //trong có name nằm trong các thẻ h1, age nằm trong các thẻ h2
//** cach 2 */
// let result =  users.map(function(e,i){
//   e.name=`<H1>${e.name}<H1>`
//   e.name=`<H2>${e.age}<H2>`
//   return e
// })
// console.log(result);

//14
// let usrInput = users.map(function(user){

//     return user.name;

//     })

//     console.log(usrInput);
/////////////
// bài 16
// let array = [1,2,3,4,5,6,7,8,9,0,74];

// let filterArray = array.filter(function(arr){

//    return arr > 5;
// })

// console.log(filterArray);

//Viết một hàm triple() trả về một số đã được nhân 3
//Sử dụng phương thức map của array, viết hàm multiply() nhận vào một mảng và trả về mảng mới với các số đã
//được nhân 3. Sử dụng hàm triple để nhân 3 các số đó.
// let tripleNum = [1,2,3,4,55];
// let n = prompt(Number('NHap:'));
// function triple(number){
//     return number*3;
// }
// // console.log(triple());
// let tripleNumber = tripleNum.map((trip)=>{

//     return (trip*3)*triple(n);

// })

// console.log(tripleNumber);

///***********************/
// function tripple(num) {
//   return num*3;
// }

// function multiply(numbers) {
//   return numbers.map(x=>tripple(x));
// }

//bài 17.Cho mảng sau

// var members = [
//   { name: 'Lan', gender: 'female' },
//   { name: 'Linh', gender: 'female' },
//   { name: 'Trung', gender: 'male' },
//   { name: 'Peter', gender: 'gay' }
// ];

//Viết một hàm nhận đầu vào là mảng trên, sử dụng phương thức filter của array,
//trả về một mảng mới chỉ chữa những phần tử object có gender là female

// let filterMembers = members.filter(function(member,index,array){

//    let ouput = [];
// if(member.gender==='male' || member.gender==='female'){

//    ouput.push(member.gender);

//    return ouput

// }
// });

// console.log(filterMembers);

// 18.Viết một hàm nhận vào một mảng số tự nhiên, sử dụng find method của array trả về số chẵn đầu tiên của mảng đó,
// nếu không tìm thấy trả về undefined
// var arr = [1,2,3,4,5,6,7,8,9]
// var arr2 = arr.find(function(element){

//   return arr2%2===0
// })
// console.log(arr2)

// function findFirstEvenNumber(array) {
//   // your code here
//   return array.find(x=>x%2==0);
// }
// findFirstEvenNumber([11, 13, 25, 29, 40]) //40
// findFirstEvenNumber([33, 23, 17]) //undefined

//bài 20...Viết một hàm nhận vào một mảng ngẫu nhiên. Sử dụng phương thức reduce của array,
//trả về object mới với các phần tử trong mảng là key, và value sẽ là số lần xuất hiện của chúng ở trong mảng

// Input
// countOccurrences(['a', 'b', 'c', 'b', 'a'])
// // Expected output:
// // { a: 2, b: 2, c: 1 };

// function countOccurrences(arr) {
//   let arr.reduce((newObject, key) => {
//    if (newObject[key])
//       key = newObject[key]++;
//    else newObject[key] = 1;
//    return newObject
//  },{});
// }

//cú pháp: reduce(function callbackFn(accumulator, currentValue, index, array) { ... }, initialValue) ---------
//Ở đoạn code trên: {} chính là giá trị khởi tạo (đối số thứ 2 của hàm reduce) - được lưu vào biến newObject, key là từng phần tử của mảng arr.
//Lệnh newObject[key] chính là lấy một item của object newObject mà key của item đó là 1 phần tử của mảng arr
//Nội dung trong hàm callback của reduce là:

//Nếu newObject['a'] là true (ý là nếu đối tượng newObject có item có key là a)
//     newObject['a'] ++ ( tức là  tăng value của item của đối tượng có key là a lên 1 đơn vị - newObject đã bị thay đổi)
//Else
//    newObject['a'] = 1;  ( tức là thêm 1 item cho đối tượng newObject có key là a và value là 1 - newObject đã bị thay đổi)

//return newObject  ( tức là gán lại giá trị tích lũy: newObject  = newObject  - tức là  newObject(biến tích lũy)  = newObject(đã bị thay đổi)  )
//Cứ thế lần lượt xét hết các item của mảng arr.


//baif 16
// function triple (num){
//   return num * 3;
// }
// function multiply(arr) {
//   return arr.map(triple);
// }
// console.log (multiply([1,2,3,4,5]));


// bài 17
// var members = [
//   { name: 'Lan', gender: 'female' },
//   { name: 'Linh', gender: 'female' },
//   { name: 'Trung', gender: 'male' },
//   { name: 'Peter', gender: 'gay' }
// ];

//  function filterMembers(arr){
//   return arr.filter(function(e,i) {
//     return e.gender ="female";
//   });
//  }
//  console.log(filterMembers(members));


//bài 18
// let a = [1,2,3,4,5];
// let result = arr.find(function(e,i) {
//   return e < 4;
// }); 

// console.log(result);

//bài 20
// let arr = ['a', 'b', 'c', 'b', 'a'];
// let result = {};
// for(let i = 0; i < arr.length-1; i++){
//   let element = arr[i];
//   if(!result[element]){
//     result[element] = 1;
//   }else{
//     result[element]=result[element]+1;
//   }
// } 
// console.log(result);






//Viết một hàm nhận vào một mảng 2 chiều, sử dụng phương thức reduce và trả về một mảng một chiều chứa toàn
// bộ những phần tử con trong các mảng con
//bài 21  .thày chữa
// function flatternArr(arr) {
//     return arr.reduce(function(pre,cur){
//     // return pre.concat(cur);           cách 1
//     //return [...pre,...cur]// spread operator (arr,object)
//         for (var i = 0; i < cur.length; i++){
//             pre.push(cur[i]);
//         }
//         return pre;
//     },[]);
// }
// let result = flatternArr([
//     [1,2,3],
//     [4,5,6],
// ])
// console.log(result);

//bai 22
// function sum(){
//     let result=0;
//     if(arr[0]< arr[1]) {
//         for (let i=arr[0]; i<arr[1]; i++){
//             result = result + i;
//         }
//     }else {
//         for (let i=arr[1]; i<arr[0]; i++){
//             result = result + i;
//         }
//     }
//    return result;
// }
// console.log(sum(4,1));
//


//bai 23
// function diff(arr1,arr2){
//     //lọc những phần tử ở trong mảng arr1 chưa tồn tại trong mảng arr2
//   let result1 = arr1.filter(function(e,i) {
//     return arr2.indexOf(e) ===-1;
//   });
//   //lọc những phần tử ở trong arr2 chưa tồn tại trong mảng arr1 
//   let result2 = arr2.filter(function(e,i) {
//     return arr1.indexOf(e) ===-1;
//   });
//   //nối mảng result lại và return
//   return result1.concat(result2);
// }
// let result = diff([1, 2, 3, 4], [1, 2, 1]);
// console.log(result); 


//
//bài 24
// function sumfib(n){
//     let num1 =1;
//     let num2 =1;
//     let temp;
//     let result = [];
//     for(let i=1;i<=n;i++){
//         if(num1 <= n) {
//             result.push(num1);
//         }
//         temp = num1;
//         num1 = num2;
//         num2 = temp + num2;
//     }
//     let sum = 0;
//     for(let e of result) {
//         if (e % 2==1) {
//             sum = sum+e;
//         }
//     }
//     return sum;
// }
// console.log(sumfib(4));


// function flatternArr(arr) {
//     return arr.reduce(function(pre,cur){
//     // return pre.concat(cur);           cách 1
//     //return [...pre,...cur]// spread operator (arr,object)
//         // for (var i = 0; i < cur.length; i++){
//         //     pre.push(cur[i]);
//         // }
//         return pre;
//     });
// }

// function uniqueArray() {
//     let result = [];
//     for(let i=0;i<=arguments.length;i++) {
//         result.push(arguments[i]);
//     }
//     result =flatternArr(result);
//     return result.filter(function(e,i) {
//         return result.indexOf(e) === i;
//     });
// }
// let result = uniqueArray([1,2,3,4],[1,2,3,4,5,6,7,8,],[1,2,3,4,1]);
// console.log(result);