var bio = {
	"name": "Adriano Lima",
	"role": "Web Developer",
	"contact": {
		"mobile": "+55 48 98809-5950",
		"email": "adrianolslima@gmail.com",
		"twitter": "",
		"github": "adrianolslima",
		"blog": "",
		"city": "Florianópolis"
	},
	"pic": "https://placebeard.it/200/200",
	"welcomeMsg": "Welcome!",
	"skills": ["programming", "teaching", "Java", "C/C++", "JS"]
};

var education = {
	"school": [
		{
			"name": "Universidade Federal de Santa Catarina",
			"degree": "",
			"dates": 2015,
			"location": "Florianópolis, SC, Brazil",
			"major": "BA"
		}
	],
	"onLineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2017,
			"url": "https://classroom.udacity.com/courses/ud804"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "",
			"title": "",
			"dates": 2008,
			"location": "Florianópolis",
			"description": ""
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "",
			"date": 2013,
			"description": "",
			"images": ["", ""]
		}
	]
}

// // HEADER
// var name = HTMLheaderName.replace("%data%", bio.name);
// var role = HTMLheaderRole.replace("%data%", bio.role);
// var pic = HTMLbioPic.replace("%data%", bio.pic);

// $("#header").append(pic);
// $("#header").append(name);
// $("#header").append(role);

// // CONTACTS
// var mobile = HTMLmobile.replace("%data%", bio.contact.mobile);
// var email = HTMLemail.replace("%data%", bio.contact.email);
// var twitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
// var github = HTMLgithub.replace("%data%", bio.contact.github);
// var blog = HTMLblog.replace("%data%", bio.contact.blog);
// var bioCity = HTMLlocation.replace("%data%", bio.contact.city);

// $("#topContacts").append(mobile);
// $("#topContacts").append(email);
// // $("#topContacts").append(twitter);
// $("#topContacts").append(github);
// // $("#topContacts").append(blog);
// $("#topContacts").append(bioCity);

// var msg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
// var formattedSkills = HTMLskills.replace("%data%", bio.skills);

// $("#header").append(msg);
// $("#header").append(HTMLskillsStart);
// $("#header").append(formattedSkills);


// var jobPosition = HTMLworkTitle.replace("%data%", work.jobPosition);
// var employer = HTMLworkTitle.replace("%data%", work.employer);
// var workCity = HTMLworkLocation.replace("%data%", work.city);

// $("#main").append(jobPosition);
// $("#main").append(employer);
// $("#main").append(work.yearsWorked);
// $("#main").append(workCity);


// var schoolName = HTMLschoolName.replace("%data%", education.name);
// var yearsStudied = HTMLschoolName.replace("%data%", education.yearsStudied);
// var educationCity = HTMLschoolName.replace("%data%", education.city);

// $("#main").append(schoolName);
// $("#main").append(yearsStudied);
// $("#main").append(educationCity);