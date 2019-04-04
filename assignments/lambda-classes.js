// CODE here for your Lambda Classes
// Lambda personnel can be broken down into three different types of people.
// Instructors - extensions of Person
// Students - extensions of Person
// Project Managers - extensions of Instructors
// IMPORTANT - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes.


//* First we need a Person class. This will be our `base-class`
//* Person receives `name` `age` `location` `gender` all as props
//* Person receives `speak` as a method.
//* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props




//Person Class

class person {
    constructor(attr) {
      this.name = attr.name;
      this.age = attr.age;
      this.location = attr.location;
      this.gender = attr.gender;
    }
    speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
  }

  //Objects for Person Class
  const aly = new person({
    name: "Alyssa",
    location: "Orlando",
    age: 25,
    gender: "Female"
  });



//Now that we have a Person as our base class, we'll build our Instructor class.
//Instructor uses the same attributes that have been set up by Person
//Instructor has the following unique props:
// `specialty` what the Instructor is good at i.e. 'redux'
// `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//`catchPhrase` i.e. `Don't forget the homies`
//Instructor has the following methods:
//`demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'




//Instructor Class

class Instructor extends person {
    constructor(instAttr) {
      super(instAttr);
      this.specialty = instAttr.specialty;
      this.favLanguage = instAttr.favLanguage;
      this.catchPhrase = instAttr.catchPhrase;
    }
    demo(subject) {
      return `Today, we are learning about ${subject}.`;
    }
    grade(student, subject) {
      return `${student.name} receives a perfect score on ${subject}.`;
    }
    calculateGrade(student) {
      if (Math.random() > 0.3 && student.grade < 100) {
        student.grade++;
      } else {
        student.grade--;
      }
      return student.grade;
    }
  }

//Instructor Objects

const jer = new Instructor({
    name: "Jeremy",
    location: "Los Angeles",
    age: 30,
    gender: "Male",
    specialty: "Back-end",
    favLanguage: "Python",
    catchPhrase: `Wit beyond measure is man's greatest treasure.`
  });
  
  const mark = new Instructor({
    name: "Mark",
    location: "New Orleans",
    age: 33,
    gender: "Male",
    specialty: "Front-end",
    favLanguage: "Javascript",
    catchPhrase: `It's pizza time!`
  });




//Now we need some students!
//Student uses the same attributes that have been set up by Person
//Student has the following unique props:
//`previousBackground` i.e. what the Student used to do before Lambda School
//`className` i.e. CS132
//`favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
//Student has the following methods:
//`listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//`PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//`sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

// Student Class

class Student extends person {
    constructor(studAttr) {
      super(studAttr);
      this.previousBackground = studAttr.previousBackground;
      this.className = studAttr.className;
      this.favSubjects = studAttr.favSubjects;
      this.grade = studAttr.grade;
    }
    listsSubjects() {
      this.favSubjects.forEach(function(favSubject) {
        console.log(favSubject);
      });
    }
   PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
      return `${this.name} has begun sprint challenge on ${subject}.`;
    }
    graduate() {
      if (this.grade > 70) {
        return `Congratulations, You have graduated from Lambda School!`;
      } 
      else {
        return `Your grade is ${this.grade} % and you are not ready to graduate yet.`;
      }
    }
  }

//Student Objects
const randy = new Student({
    name: "Randy",
    location: "Daytona Beach",
    age: 27,
    gender: "Male",
    previousBackground: "IT Management",
    className: "WEB19",
    favSubjects: ["Python", "Javascript"],
    grade: 67,
  });
  
  const julia = new Student({
    name: "Julia",
    location: "Somerset",
    age: 29,
    gender: "Female",
    previousBackground: "Librarian",
    className: "WEB19",
    favSubjects: ["HTML", "CSS/SASS"],
    grade: 95,
  });




//Now that we have instructors and students, we'd be nowhere without our PM's
//ProjectManagers are extensions of Instructors
//ProjectManagers have the following unique props:
//`gradClassName`: i.e. CS1
//`favInstructor`: i.e. Sean
//ProjectManagers have the following Methods:
//`standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//`debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

//Project Manager Class 

class projectManager extends Instructor {
    constructor(pmAttr) {
      super(pmAttr);
      this.gradClassName = pmAttr.gradClassName;
      this.favInstructor = pmAttr.favInstructor;
    }
    standup(slackChannel) {
      return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
      return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
  }

  //Project Manager Objects

const brad = new projectManager({
    name: "Brad",
    location: "Russia",
    age: 23,
    gender: "Male",
    specialty: "Front-end",
    favLanguage: "React",
    catchPhrase: "I prefer captain. But that will do, thanks.",
    gradClassName: "WEB17",
    favInstructor: "Josh"
  });
  
  const mike = new projectManager({
    name: "Michael",
    location: "Altamonte",
    age: 26,
    gender: "Male",
    specialty: "Back-end",
    favLanguage: "Python",
    catchPhrase: "Crikey",
    gradClassName: "WEB16",
    favInstructor: "Dan"
  });





  //console logs of Person

console.log(aly.speak());
console.log(aly.age);
console.log(aly.gender);

//console logs of Instructor

console.log(mark.demo("HTML"));
console.log(jer.favLanguage);
console.log(mark.specialty);
console.log(mark.catchPhrase);
console.log(jer.grade(julia, "CSS"));
console.log(mark.calculateGrade(randy));
console.log(mark.calculateGrade(julia));

//student console logs

console.log(julia.className);
console.log(randy.previousBackground);
randy.listsSubjects();
julia.listsSubjects();
console.log(randy.PRAssignment("This Statements"));
console.log(julia.sprintChallenge("Applied Javascript"));
console.log(randy.graduate());
console.log(julia.graduate());
