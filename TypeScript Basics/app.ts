// The "unknown" type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if(userInput === 'string'){
    userName = userInput;
}

// The "never" type
function generateError(message: string, code: number): never {
    throw {Message: message, errorCode: code}; 
    // while (true) {}   
}

generateError("There was an Error", 500)

