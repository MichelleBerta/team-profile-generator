const Employee = require('./employee');

class Manager {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getTitle(){return "Manager";
    
    }

    getOfficeNumber(){return this.officeNumber;
    
    }
}

module.exports = Manager