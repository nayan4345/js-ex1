//Function ??
// function Greet() {
//   console.log(" This is first JavaScript Practice");
//   }

//Greet();

// function Greet(firstName ) {

//      console.log("Hi, " + firstName);
//  }
//  Greet("Nayan");
// let sum = 50

// function Sum(a, b) {
//     return a + b;
// }
// let output = Sum(20, 30);//50
// console.log(output);

// function Double(a) {
//     return a * 2;
// }
//   let result = Double(2)
// console.log(result );

//forEach//

// // let numbers = [1, 2, 3, 4, 5];
// // numbers.forEach((element) => console.log(element));

// let numbers = [1,2,3,4,5]
// numbers.forEach((num,index) => console.log(num,index));

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// numbers.forEach((num) => Summation(num));

// function Summation(num) {
//     console.log(( num += sum));
// }

// let numbers = [25, 45, 55, 77, 88, 99];

// let EvenArray = [];

// numbers.map((x) => {
//     if (x % 2 == 0) {
//         EvenArray.push(x);
//     }
//     return EvenArray;
// });

// console.log(EvenArray);

// let numbers = [25, 45, 55, 77, 88, 99];
// let OddArray=[]
//  numbers.map((x) => {
//     if (x % 2 != 0) {
//         OddArray.push(x)
//     }
//     return OddArray
// });
// console.log(OddArray)

// const square = numbers.map((x) => x ** 2);
// console.log(square);

// let strings = ["avengers", "captain america", "ironman", "black panther"];
// const Upercase = strings.map((x) => x.charAt(0).toUpperCase() + x.substring(1).toLowerCase());
// console.log(Upercase);

// const input = [1,-4,12,0,-3,29,-150]
// let result = input.filter((x) => x>0)
// console.log(result)

// const input = [1,-4,12,0,-3,29,-150]
// let result = input.filter((x) => x< 10)
// console.log(result)
// const characters = [
//     {
//         name: "Luke Skywalker",
//         height: 172,
//         mass: 77,
//         eye_color: "blue",
//         gender: "male",
//     },
//     {
//         name: "Darth Vader",
//         height: 202,
//         mass: 136,
//         eye_color: "yellow",
//         gender: "male",
//     },
//     {
//         name: "Leia Organa",
//         height: 150,
//         mass: 49,
//         eye_color: "brown",
//         gender: "female",
//     },
//     {
//         name: "Anakin Skywalker",
//         height: 188,
//         mass: 84,
//         eye_color: "blue",
//         gender: "male",
//     },
// ];

// function filterArray(list) {
//     let listOfPerson = [];

//     list.forEach((item) => {
//         if (item.height < 200) {
//             listOfPerson.push(item);
//         }
//     });

//     return listOfPerson;
// }

// let filteredList = filterArray(characters);

// console.log(filteredList);

let vegetables = ["garlic", "carrot", "broccoli", "pumpkin"];
function myVeggieList() {
    console.log(vegetables.length);
}
myVeggieList();
