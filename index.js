
let lexicon = {
name: 'lexicon',
address: 'Smallstreet 4',
zipcode: '13333',
city: 'Stockholm',
students: [],
teachers: [],
relegateStudent: function (student) {
    student.subjects.forEach((subject) => subject.removeStudent)
    student.subjects = []

},
fireTeacher: function (teacher) {
    teacher.subjects.forEach((subject) => subject.removeTeacher)
    teacher.subjects = []
}
}

let math = {
    name: 'math',
    students: [],
    teacher: {},
   addTeacher: function (teacher) {
        this.teacher = teacher
    },
    removeTeacher: function (teacher) {
        this.teacher = {}
    },
    addStudent: function (student) {
        this.students.push(student)
    },
    removeStudent: function (student) {
        this.students.indexOf(student) 
        const x = this.students.splice(index, 1)
    }
}

let english = {
    name: 'english',
    students: [],
    teacher: {},
    addTeacher: function (teacher) {
        this.teacher = teacher
    },
    removeTeacher: function (teacher) {
        this.teacher = {}
    },
    addStudent: function (student) {
        this.students.push(student)
    },
    removeStudent: function (student) {
        this.students.indexOf(student) 
        const x = this.students.splice(index, 1)
    }
}

let history = {
    name: 'history',
    students: [],
    teacher: {},
    addTeacher: function (teacher) {
        this.teacher = teacher
    },
    removeTeacher: function (teacher) {
        this.teacher = {}
    },
    addStudent: function (student) {
        this.students.push(student)
    },
    removeStudent: function (student) {
        this.students.indexOf(student) 
        const x = this.students.splice(index, 1)
    }
}

let nisse = {
    name: 'nisse',
    age: '22',
    gender: 'male',
    subjects: [],
    addSubject: function (subject) {
        this.subjects.push(subject)
    },
    quitSubject: function (subject) {
        const index = this.subjects.indexOf(subject)
        const x = this.subjects.splice(index, 1)
    }
}

let lasse = {
    name: 'lasse',
    age: '22',
    gender: 'male',
    subjects: [],
    addSubject: function (subject) {
        this.subjects.push(subject)
    },
     quitSubject: function (subject) {
        const index = this.subjects.indexOf(subject)
        const x = this.subjects.splice(index, 1)
    }
}

let bosse = {
    name: 'bosse',
    age: '22',
    gender: 'male',
    subjects: [],
    addSubject: function (subject) {
        this.subjects.push(subject)
    },
     quitSubject: function (subject) {
        const index = this.subjects.indexOf(subject)
        const x = this.subjects.splice(index, 1)
    }
}

let frasse = {
    name: 'frasse',
    age: '22',
    gender: 'male',
    subjects: [],
    addSubject: function (subject) {
        this.subjects.push(subject)
    },
     quitSubject: function (subject) {
        const index = this.subjects.indexOf(subject)
        const x = this.subjects.splice(index, 1)
    }
}

let olle = {
    name: 'olle',
    age: '22',
    gender: 'male',
    subjects: [],
    addSubject: function (subject) {
        this.subjects.push(subject)
    },
     quitSubject: function (subject) {
        const index = this.subjects.indexOf(subject)
        const x = this.subjects.splice(index, 1)
    }
}

let kerstin = {
    name: 'kerstin',
    subjects: [],
    enlistToSubject: function (subject) {
        this.subjects.push(subject)
    }
}

let eva = {
    name: 'eva',
    subjects: [],
    enlistToSubject: function (subject) {
        this.subjects.push(subject)
    }
}

eva.subjects.push(math)
console.log(eva)
console.log(math)       
/* Datan är väl användbar ur vissa perspektiv, det beror ju helt på hur den ska användas. Känns lite 
knepigt att lägga till ämne till läraren och sedan lägga till läraren till ämnet. Risk att det blir 
problem med cirkulära beroenden senare. Dessutom kanske ett ämne kan ha flera lärare. */

math.students.push(nisse)
console.log(math)

function  addSubjectToTeacher(teacher, subject) {

    teacher.subjects.push(subject)
    subject.teacher=teacher
    return teacher
}

console.log(addSubjectToTeacher(kerstin, history))

history.addTeacher(eva)
//console.log(history)

kerstin.enlistToSubject(math)
//console.log(kerstin)

history.addStudent(nisse)
//console.log(history)

nisse.addSubject(history)
//console.log(nisse)

nisse.quitSubject(history)

eva.enlistToSubject(history)
eva.enlistToSubject(math)
console.log(eva)
lexicon.fireTeacher(eva)
console.log(eva)
console.log(math)