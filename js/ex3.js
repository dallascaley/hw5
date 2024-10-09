/* 
  Homework 5 Question 3
*/

//Declare studentList Array
const studentList = [
   {
       firstName: "Allan",
       lastName: "Able",
       scores: [95, 85, 92, 98]
   },
   {
       firstName: "Amy",
       lastName: "Alexander",
       scores: [80, 88, 100]
   },
   {
       firstName: "Betty",
       lastName: "Barns",
       scores: [70, 80, 90, 100]
   },
   {
       firstName: "Bob",
       lastName: "Bones",
       scores: [75, 85, 95, 85]
   },
   {
       firstName: "Cindy",
       lastName: "Chase",
       scores: [95, 90, 92, 98]
   },
   {
       firstName: "Charles",
       lastName: "Chips",
       scores: [88, 99, 90]
   },
];

// TO DO - Write higher order functions / There are many solutions
function getMinScore(scores) {
   return scores.reduce((acc, num) => {
      return num < acc ? num : acc;
   }, scores[0]);
}

function getMaxScore(scores) {
   return scores.reduce((acc, num) => {
      return num > acc ? num : acc;
   }, scores[0]);
}

function getAvgScore(scores) {
   let total = scores.reduce((acc, num) => acc + num, 0);
   return total / scores.length;
}

function getClassNameResults(students) {
   let results = [];

   students.forEach(student => {
      if (student.lastName.substring(0,1) === 'C') {
         let thisStudent = {
            firstName: student.firstName,
            lastName: student.lastName,
            minScore: getMinScore(student.scores),
            maxScore: getMaxScore(student.scores),
            avgScore: getAvgScore(student.scores)
         };
         results.push(thisStudent);
      }
   });
   return results;
}

//Declare cLastNameResults.  Use functional programming (filter, map, reduce, and pure functions) to generate a new array of objects (don’t use a traditional loop)

cLastNameResults = getClassNameResults(studentList);

//Output
console.log(cLastNameResults);