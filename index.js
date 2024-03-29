function School (name, address, zipcode, city) {
    this.name = name,
    this.address = address,
    this.zipcode = zipcode,
    this.city = city,
    this.students = [],
    this.teachers= [],
    this.relegateStudent= function (student) {
    student.subjects.forEach((subject) => subject.removeStudent)
    student.subjects = []
    },
    this.fireTeacher= function (teacher) {
    teacher.subjects.forEach((subject) => subject.removeTeacher)
    teacher.subjects = []
}
}

function Student(name, age, gender ) {
  this.name = name,
  this.age = age,
  this.gender = gender,
  this.subjects = [],
  this.grade = []
  this.addSubject = function (subject) {
        this.subjects.push(subject)
    },
  this.quitSubject = function (subject) {
        const index = this.subjects.indexOf(subject)
        const x = this.subjects.splice(index, 1)
    }
  this.setGrade = function (grade) {
        this.grade.push(grade)
    }
}

function Teacher (name) {
    this.name = name,
    this.subjects = [],
    this.addSubject= function (subject) {
        this.subjects.push(subject)
    }
}

function Subject (name) {
    this.name= name,
    this.students = [],
    this.teacher= {},
    this.addTeacher = function (teacher) {
        this.teacher = teacher
    },
    this.removeTeacher= function (teacher) {
        this.teacher = {}
    },
    this.addStudent= function (student) {
        this.students.push(student)
    },
    this.removeStudent= function (student) {
        this.students.indexOf(student) 
        const x = this.students.splice(index, 1)
    }
}

function Grade (grade, subject) {
    this.grade = grade,
    this.subject = subject
}

// Create a school
let lexicon = new School('lexicon', 'Smallstreet 4', '13333', 'Stockholm');

// Create teachers
let eva = new Teacher('eva')
let kerstin = new Teacher('kerstin')
lexicon.teachers.push(eva, kerstin)

// Create students
let nisse = new Student('nisse', '22', 'male')
let lasse = new Student('lasse', '22', 'male')
let bosse = new Student('bosse', '22', 'male')
let frasse = new Student('frasse', '22', 'male')
let olle = new Student('olle', '22', 'male')
lexicon.students.push(nisse, lasse, bosse, frasse, olle)

// Create subjects
let math = new Subject ('math')
let english = new Subject ('english')
let history = new Subject('history')

// Add subjects to teachers
eva.addSubject(math)
eva.addSubject(history)
history.addTeacher(eva)
math.addTeacher(eva)
kerstin.addSubject(english)
english.addTeacher(kerstin)

// Add subjects to students
nisse.addSubject(math)
math.addStudent(nisse)
lasse.addSubject(math)
math.addStudent(lasse)
bosse.addSubject(history)
history.addStudent(bosse)
nisse.setGrade('A', math)



function displayAllStudents() {
    for (const studentIndex in lexicon.students) {
        const student = lexicon.students[studentIndex]

        console.log(`Student ${studentIndex}:`)
        
        for (const key in student) {
            if (student.hasOwnProperty(key)) {
                const value = student[key];
                console.log(`  ${key}: ${value}`)
            }
        }
        console.log(); // En tom rad för att separera studenterna
    }
}

function displayAllTeachers() {
       for (const teacherIndex in lexicon.teachers) {
        const teacher = lexicon.teachers[teacherIndex]

        console.log(`Teacher ${teacherIndex}:`)
        
        for (const key in teacher) {
            if (teacher.hasOwnProperty(key)) {
                const value = teacher[key];
                console.log(`  ${key}: ${value}`)
            }
        }
        console.log(); // En tom rad för att separera lärarna
    }
}

function displayAllSubjectsOfStudent(student) {
     for (const subjectIndex in student.subjects) {
        const subject = student.subjects[subjectIndex]

        console.log(`Student's subject:`)
        
        for (const key in subject) {
            if (subject.hasOwnProperty(key)) {
                const value = subject[key]
                console.log(`  ${key}: ${value}`)
            }
        }
    }    
}

function displayAllStudentsEnlistedToSubject(subject) {
    for (const studentIndex in subject.students) {
        const student = subject.students[studentIndex]

        console.log(`The subjects students:`)
        
        for (const key in student) {
            if (student.hasOwnProperty(key)) {
                const value = student[key]
                console.log(`  ${key}: ${value}`)
            }
        }
    }    
   
}

displayAllStudents()
displayAllTeachers()
displayAllSubjectsOfStudent(nisse)
displayAllStudentsEnlistedToSubject(math)
