// Function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Anthony', 'Knoll'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Karina', 'Knoll');
//# sourceMappingURL=018_5_immediatel_invoked_arguments.js.map