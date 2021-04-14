const Employee = require('./employee');

class Engineer {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getTitle(){return "Engineer";
    
    }

    getGitHub(){return this.gitHub;
    
    }
}

module.exports = Engineer