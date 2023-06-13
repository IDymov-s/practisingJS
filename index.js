'use strict';

// JS filter() exercise

const studentList = require('./mockData.js').data;

// Your code here
// Too simplistic way where we don't pass a language as parameter
const frenchStudents = studentList.filter(({ language }) => language == "French");

console.log(frenchStudents);


// A nicer and cleaner way. Since it makes no sense to repeat the same function
const filterStudents = (lang, students) => {
  return students.filter(({ language }) => language == lang);

}

console.log(filterStudents("Spanish", studentList));