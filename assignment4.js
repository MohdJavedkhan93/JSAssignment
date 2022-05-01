// Ques 1: we have an array of employees along with their years of work experience.
// We only want the total years of all employees’ work experience as the output.

var employees = [
  { id: 111, name: "Chelsea Foster", years: 7 },
  {
    id: 102,
    name: "Aggie Sparling",
    years: 13,
  },
  {
    id: 123,
    name: "Timmy Matthews",
    years: 23,
  },
  {
    id: 119,
    name: "Emmet Foster",
    years: 22,
  },
];
var totalyears = employees.map((workexp) => workexp.years);
// console.log(totalyears);
var totalyears = [7, 13, 23, 22];
var sum = 0;
var n = totalyears.length;
for (let i = 0; i < n; i++) {
  sum += totalyears[i];
}
console.log(sum);

// list of Intern employee
var members = [
  {
    id: 111,
    name: "Chelsea Foster",
    position: "Intern",
  },
  {
    id: 102,
    name: "Aggie Sparling",
    position: "Employee",
  },
  {
    id: 123,
    name: "Timmy Matthews",
    position: "Intern",
  },
  {
    id: 66,
    name: "Emmet Foster",
    position: "Employee",
  },
];
var allinterns = members.filter((interns) => interns.position == "Intern");
console.log(allinterns);
