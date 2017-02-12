// $("#main").append("Adriano");

// var awsomeThoughts = "I am Adriano and I am awsome!";

// console.log(awsomeThoughts);

// var funThoughts = awsomeThoughts.replace("awsome", "fun");

// $("#main").append(funThoughts);

var name = "Adriano Lima";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

