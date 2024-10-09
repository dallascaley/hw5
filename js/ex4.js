/* 
  Homework 5 Question 4
*/

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

//Update all scores by 5
studentList.forEach((student) => {
  student.scores.forEach((num, index, arr) => {
    arr[index] = num + 5;
  });
});

//add a new score equal to the average
studentList.forEach((student) => {
  let total = 0;
  let count = 0;
  student.scores.forEach((num) => {
    total += num;
    count++;
  });
  student.scores.push(total / count);
});

studentList.forEach((student) => {
  console.log(`Full name (last, first): ${student.lastName}, ${student.firstName}`);
  console.log(`Updated scores are: ${student.scores}`);
});


