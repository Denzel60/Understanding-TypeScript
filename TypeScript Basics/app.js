// The "unknown" type
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (userInput === 'string') {
    userName = userInput;
}
// The "never" type
function generateError(message, code) {
    throw { Message: message, errorCode: code };
}
generateError("There was an Error", 500);
