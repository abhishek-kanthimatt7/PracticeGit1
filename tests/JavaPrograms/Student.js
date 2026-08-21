const Person = require ("./person.js");

module.exports = class Student extends Person{
    constructor(name,age,grade)
    {
        super(name,age);
        this.grade=grade;
    }
    getStudentDetails()
    {
        const parentDetails = super.getDetails();
        return `${this.parentDetails} Grade: ${this.grade}`;
    }
}

