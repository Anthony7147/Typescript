console.log(fullName('Anthony', 'Knoll'));
// console.log(otherFullName('Anthony', 'Knoll'));
// console.log(thirdFullName('Anthony', 'Knoll'));
// Function declaration, hoisting
function fullName(first, last) {
    return first + " " + last;
}
// Function expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
//# sourceMappingURL=017_function_declarations_vs_expressions.js.map