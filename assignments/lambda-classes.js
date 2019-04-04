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