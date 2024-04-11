// lower case
var personName = "Waleed";
console.log("lowercase", personName.toLowerCase());
// upper case
console.log("uppercase", personName.toLocaleUpperCase());
// title case
console.log("titlecase", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
