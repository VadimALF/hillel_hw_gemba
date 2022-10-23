const students = [
  {
    id: 10,
    name: 'John Smith',
    marks: [10, 8, 6, 9, 8, 7]
  },
  {
    id: 11,
    name: 'John Doe',
    marks: [ 9, 8, 7, 6, 7]
  },
  {
    id: 12,
    name: 'Thomas Anderson',
    marks: [6, 7, 10, 8]
  },
  {
    id: 13,
    name: 'Jean-Baptiste Emanuel Zorg',
    marks: [10, 9, 8, 9]
  }
]
//averageStudentMark(10); // id === 10
//averageGroupMark(students);

let idStudent = enterID()
let oneStudent = students.find(students => students.id === idStudent)

alert('student №' + idStudent + '\nname: ' + oneStudent.name + '\nmarks: '
    + oneStudent.marks + '\nGPA = ' + averageStudentMark(oneStudent.marks) 
    + '\naverage GPA = ' + averageGroupMark(students)
    + '\nTotal GPA = ' + totalGroupMark(students))

function enterID() {
    let volue = prompt('Enter the number of student ID as 10, 11, 12, or 13', '10')
    while (volue !== '10' && volue !== '11' && volue !== '12' && volue !== '13') {
        volue = prompt('You entered "' + volue + '" it is not 10 or 11 or 12 and not even 13.\n Try again.', '12')
    }
return Number(volue)
}

function averageStudentMark(marks) {
  console.log(marks)
    
    let GPA = marks[0]
    for (var i = 1; i < marks.length; i++){
        GPA = GPA + marks[i]
     }
return GPA/marks.length
}

function averageGroupMark(students) {
    let student = []
    let averageGPA = 0
    for (var i = 0; i < students.length; i++){
        student = students[i]
        averageGPA = averageGPA + averageStudentMark(student.marks)
    }
return averageGPA/students.length
}

function totalGroupMark(students) {
    let student = students[0]
    let allMarks = student.marks
    let numberOfMarks = 0
    for (var i = 1; i < students.length; i++){
        allMarks = allMarks.concat(students[i].marks)
    }
    return averageStudentMark(allMarks)
}