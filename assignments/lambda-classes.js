// CODE here for your Lambda Classes
class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(props){
        super(props)
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}



class Student extends Person {
    constructor(props){
        super(props)
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
     listsSubjects(){

        return (this.favSubjects.toString())           
               
    }
    PRAssignment(subject){

        return `${this.name} has submitted a PR for ${subject}`;
    }
}



class ProjectManager extends Instructor{
    constructor(props){
        super(props)
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, @${slackChannel} standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

////////////TESTING/////////////////

const jim = new Person({
    name: "Jim",
    age: 30,
    location: "Scranton, PA",
    gender: "Male"
})

const pam = new Instructor({
    name: "Pam",
    age: 28,
    location: "Scranton, PA",
    gender: "Female",
    specialty: "Drawing",
    favLanguage: "Javascript",
    catchPhrase: "Michael is an idiot"
})

const dwight = new Instructor({
    name: "Dwight",
    age: 32,
    location: "Scranton, PA",
    gender: "Male",
    specialty: "Beet Farming",
    favLanguage: "English",
    catchPhrase: "I am assistant regional manager"
})

const michael = new Student({
    name: "Michael",
    age: 40,
    location: "Scranton, PA",
    gender: "Male",
    specialty: "Middle Management",
    favLanguage: "English",
    catchPhrase: "I am a manager",
    previousBackground: "Paper sales",
    className: "Web18",
    favSubjects: ["CSS", "HTML", "Javascript"]
    
})

const david = new ProjectManager({
    name: "David",
    age: 35,
    location: "Scranton, PA",
    gender: "Male",
    specialty: "Middle Management",
    favLanguage: "English",
    catchPhrase: "I am a PM",
    previousBackground: "Paper sales",
    className: "Web18",
    favSubjects: ["CSS", "HTML", "Javascript"],
    gradClassName: "Web 10",
    favInstructor: "Josh"
})



//console.log(jim.speak());

//console.log(pam.demo("CSS"));

//console.log(dwight.grade(jim, "Bear Defense"))

//console.log(michael.listsSubjects())

//console.log(michael.PRAssignment("CSS"))

//console.log(david.standUp("Web18"))

console.log(david.debugsCode(michael, "React"))
