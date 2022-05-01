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
var listofInternemployees = members.filter(
  (interns) => interns.position == "Intern"
);
console.log(listofInternemployees);

// Expected List: i) List of all permanent employees.
// ii) List of all non-permanent employees.
var members = [
  {
    id: 111,
    name: "Chelsea Foster",
    workExp: 7,
    deptExp: 6,
    isPermanent: true,
  },
  {
    id: 102,
    name: "Aggie Sparling",
    workExp: 13,
    deptExp: 10,
    isPermanent: false,
  },
  {
    id: 123,
    name: "Timmy Matthews",
    workExp: 23,
    deptExp: 15,
    isPermanent: false,
  },
  { id: 66, name: "Emmet Foster", workExp: 22, deptExp: 9, isPermanent: true },
  { id: 89, name: "Brent Dolan", workExp: 16, deptExp: 12, isPermanent: true },
];

const listofpermanentemployees = members.filter(
  (permanent) => permanent.isPermanent === true
);
console.log(listofpermanentemployees);

const listofnonpermanentemployees = members.filter(
  (permanent) => permanent.isPermanent === false
);
console.log(listofnonpermanentemployees);
