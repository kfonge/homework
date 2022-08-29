////////// Easy Going
////////////////////////

// for (let i = 0; i <= 20; i++){
//     console.log(i);
// }

////////// Get Even///////
///////////////////////////
// for (let i = 0; i <= 200; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

///////////////////
/////Fizz Buzz

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 != 0) {
//     console.log("Fizz")
//   } else {
//     if (i % 5 == 0 && i % 3 != 0) {
//       console.log("Buzz")
//     } else {
//       if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz")
//       } else {
//         console.log(i)
//       }
//     }
//   }
// }
///////Wild Wild Life
////////////////////// (name, species, age, hometown)

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant", 5000, "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

//1.
// plantee[2] = 5001
// console.log(plantee)

//2.
// wolfy[3] = "Gotham City"
// console.log(wolfy)

//3.
// dart.push("Hawkins")
// console.log(dart)

//4.
// wolfy.splice(0, 1, "Gameboy")
// console.log(wolfy)

//////Yell at the Ninja Turtles
///////////

// const turtlesArray = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// for (const element of turtlesArray) {
//   console.log(element.toUpperCase())
// }

// console.log(turtlesArray)

////////////Methods, Revisited///////////////
//////////////////////////////////
// const favMovies = [
//   "Jaws",
//   "The Fellowship of the Ring",
//   "Howl's Moving Castle",
//   "Django Unchained",
// ]

//1.

// favMovies.sort()
// console.log(favMovies)
// the .sort method put the elements in order alphabetically by the first character of each element

//2.
// favMovies.pop()
// console.log(favMovies)
//expected output - The Ring removed from array (after sorting, the ring was the last element)

//3.
// favMovies.push('Gardians of the Galaxy')
// console.log(favMovies)

//4.
// favMovies.reverse()
// console.log(favMovies)

//5.
// favMovies.shift()
//expected outcome: first element, 'Jaws' removed
// console.log(favMovies)

//6. unshift adds an element tofront of an array
// favMovies.unshift('Matilda')
// console.log(favMovies.unshift('Matilda'))
//unshift returns the new length of the array, in this case, 5

//7.
// favMovies.splice(3, 1, "Avatar")
//yes, splice mutates the original array

//8-10 using original favMovies which has 4 elements
// let movieSlice = favMovies.slice(2, 4)
// console.log(movieSlice)
// Rather than mutate the original array, slice
// in line 113 the shallow copy of the array is stored
// in a variable, movieSlice

//11.
// console.log(favMovies.indexOf("Fast and Furious"))
// returns -1 because "Fast and Furious" is not in the array.

// 12.
// Declaring with const means that the element or variable cannot be redeclared.
// However this does not change the fact that the array itself is mutable (you can change the elements or contents)
// Its ok that we used const instead of let

///////// Where is Waldo///////////
////////////////////////////////////////////

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
]

//remove eggbert
whereIsWaldo.splice(1,1)
// console.log(whereIsWaldo.splice(1,1)) //returns the removed item, 'Eggbert'
console.log(whereIsWaldo)



// currently whereIsWaldo = [
//   ["Timmy", "Frank"],
//   ["Lucinda", "Jacc", "Neff", "Snoop"],
//   ["Petunia", ["Baked Goods", "Waldo"]],
// ]


// Change neff to no one 
// First access Neff, keeping in mind that splice mutated the array so Eggbert is gone. 
// console.log(whereIsWaldo[1][2])
whereIsWaldo[1][2] = 'No one'

// Access and log Waldo to console
console.log(whereIsWaldo)
console.log(whereIsWaldo[2][1][1])

////////////////////////////////
///////Excited Kitten/////////

let kitten = 0

while (kitten < 20) {
 let random = Math.ceil(Math.random()*3) // random is any (rounded up) whole number btw 1-3

  if (kitten % 2 == 0) {
    //every even number will go through the below 3 options at random depending on the value of random
    if (random == 1) {
      console.log("...human... why you taking pictures of me?...")
    } if (random == 2) {
      console.log("...the catnip made me do it...")
    } if (random == 3) {
      console.log("...why does the red dot always get away...")
    }
  }
  //every odd number will print the below message
  else {
    console.log("Love me pet me! HSSSSSSS")

  }
  kitten++;
}
  
/////////////////////////////////////
//////Find the Median///////////////


