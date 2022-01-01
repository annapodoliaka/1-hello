const students = [
  {
    id: 10,
    name: 'John Smith',
    marks: [10, 8, 6, 9, 8, 7 ]
  },
  {
    id: 11,
    name: 'John Doe',
    marks: [ 9, 8, 7, 6, 7 ]
  },
  {
    id: 12,
    name: 'Thomas Anderson',
    marks: [6, 7, 10, 8 ]
  },
  {
    id: 13,
    name: 'Jean-Baptiste Emanuel Zorg',
    marks: [10, 9, 8, 9 ]
  }
]

console.log(averageStudentMark(15));
console.log(averageGroupMark(students));

function averageStudentMark(id) {
  const student = students.find((student) => student.id === id);

  if (student) {
    return arrAverage(student.marks);
  }

  return null;
}

function averageGroupMark(students) {
  const marks = students.flatMap(({ marks }) => marks);

  return arrAverage(marks);
}

function arrAverage(arr) {
  return arr.reduce((acc, num) => acc + num) / arr.length;
}