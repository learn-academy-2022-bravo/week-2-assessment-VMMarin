// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
console.log(cohort.split(""))

// a) Your answer: ['B','r','a','v','o',' ','2','0','2','2']
// b) Verify and explain: .split() splits strings into an array of substrings and outputs the array


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: 'Hello, LEARN Student!'
// b) Verify and explain: undefined - name is undefined? Improper syntax?


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: [8, 10, 12, 14, 16] .map indicates that each value of the array is to be iterated upon, multiplied by 2.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: .filter iterates through an array and returns a new (shorter) array. Value modulo 2 !===0 essentially says return only numbers which when divided by two would have a remainder(odd numbers.)


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 console.log(myCodingSkills.languages[0])

// a) Your answer:Javascript
// b) Verify and explain: index 0 of languages is Javascript


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: learnStudent: student name, George, cohort Bravo, year 2022
// b) Verify and explain: Learn {student: 'George', cohort: 'Bravo', year: 2022} - Object learnStudent pulls from Learn, and includes .student, .cohort, .year. .student name George was assigned in the log. 
