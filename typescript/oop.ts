class QuestionText {
    public text: string;
}

// enum Dificulty {
//     None = 0,
//     Easy = 1,
//     Medium = 2,
//     Hard = 3 
// }

class Question {
    //properties that we've used in db.json
    private id: string;
    public category: string;
    public questionText: QuestionText;
    public correctAnswer: string;
    public incorrectAnswers: string[];
    public dificulty: string;
}

interface IRepository {
    //all public properties and methods that needs to be implemented
    getAllQuestions(): Question[];

    // getQuestionsByDifficulty();

    // insertQuestion(question:Question);
}

//Andrei's work

class QuestionView {
    constructor(private repository: IRepository) {
    }

    loadAllQuestions() {
        const allQuestions: Question[] = this.repository.getAllQuestions();
        //For testing pupose I would use hardcoded questions, until getAllQuestions is implemented;

        for(const question of allQuestions) {
            //display in the UI; DOM Manipulation
        }
    }
}

//Andreea's work

class LocalRepository implements IRepository {
    // getQuestionsByDifficulty() {
    //     throw new Error("Method not implemented.");
    // }
    // insertQuestion(question: Question) {
    //     throw new Error("Method not implemented.");
    // }
    
    getAllQuestions(): Question[] {
        console.log("Inside getAllQuestions from LocalRepository");
        //Call to db.json to load all questions.
        //See Ajax and promises course.
        return [];
    }
}

//Raluca's work

class ThirdPartyRepository implements IRepository {
    
    getAllQuestions(): Question[] {
        console.log("Inside getAllQuestions from ThirdPartyRepository");
        //Call to third party api to load all questions.
        //See Ajax and promises course.
        //Map what you get from third party to Question
        return [];
    }
}

const questionView: QuestionView = new QuestionView(new ThirdPartyRepository());
questionView.loadAllQuestions();

class Address {
    static description = "Here you can find all RO addresses";
    public country: string;
    public city: string;
    public addressLine1: string;
    public addressLine2: string;

    constructor(country: string, city: string, addressLine1: string) {
        this.country = country;
        this.city = city;
        this.addressLine1 = addressLine1;
    }
}

class Person {
    public name: string;
    public uniqueIdentifier: string;
    public address: Address;

    constructor(name: string, uniqueIdentifier: string, address: Address) {
        this.name = name;
        this.uniqueIdentifier = uniqueIdentifier;
        this.address = address;
    }

    changeAddress(newAddress: Address): void {
        this.address = newAddress;
        //Save it to db;
    }
}

interface IUser {
    login(username: string, password: string): void;
}

// interface ITest {
//     loginX(username: string, password: string): void;
// }

abstract class User extends Person implements IUser {
    public readonly username: string;
    private password: string;

    constructor(username: string, password: string, name: string, uniqueIdentifier: string, address: Address) {
        super(name, uniqueIdentifier, address);
        this.username = username;
        this.password = password;
    }

    // loginX(username: string, password: string): void {
    //     throw new Error("Method not implemented.");
    // }

    login(username: string, password: string): void {
        if(this.validateUser(username, password))
            console.log("Login successfully");
        else
            console.log("Login failed"); 
    }

    //Either a settter on password or a function;
    updatePassword(username: string, oldPassword: string, newPassword: string): void {
        const isUserValid: boolean = this.validateUser(username, oldPassword);

        if(!isUserValid)
            return;

        const isPasswordValid = this.validatePassword(newPassword);

        if(!isPasswordValid)
            return;

        this.password = newPassword;
        console.log("Password changed");
    }

    private validateUser(username: string, password: string): boolean {
        const isValid: boolean = username === this.username && password === this.password;

        if(!isValid)
            console.log("Invalid user!");

        return isValid;
    }

    private validatePassword(password) {
        if(password.length < 6) {
            console.log("Minimum characters length: 6");
            return false;
        }

        return true;
    }
}

class Admin extends User {
    constructor(username: string, password: string, name: string, uniqueIdentifier: string, address: Address) {
        super(username, password, name, uniqueIdentifier, address);
    }

    login(username: string, password: string) {
        console.log("Admin login");
        super.login(username, password);
    }

    removeUser(username: string) {
        console.log("User removed");
    }
}

const admin1: Admin = new Admin("andrei.dascal", "password.123", "Andrei Dascal", "123445567", new Address("Romania", "Cluj-Napoca", "Str. ..."));

function logUser(user: User) {
    console.log(user.username);
}

const person1: Person = admin1;

logUser(admin1);
logUser(person1 as User);