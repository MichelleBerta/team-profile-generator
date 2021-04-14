const Employee = require('./employee');

class Intern {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getTitle(){return "Intern";
    
    }

    getSchool(){return this.school;
    
    }
}

module.exports = Intern