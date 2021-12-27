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


const averageGroupMark = students
.map(student => student.marks)
// .reduce((acc, {marks}) => acc + marks, 0) / students.length

console.log (averageGroupMark)




// const averageGroupMark = students.reduce((acc, {marks}) => acc + marks, 0) / students.length

// console.log (averageGroupMark)




// Написать две функции:

// averageStudentMark - выведет средний бал студента, ид которого передан в аргументе

// averageGroupMark - выведет средний бал по всем студентам