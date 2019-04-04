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
  const aly = new Person({
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


//**Student**
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