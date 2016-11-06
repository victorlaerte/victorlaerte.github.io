(function(angular) {

    'use strict';

    angular.module('ngResumeApp')
        .service('staticDataService', ['$http',
            function($http) {

                var strings = {

                    name : "Victor Laerte de Oliveira",
                    title : "I'm Victor Laerte Oliveira.",
                    subtitle : "MSc Candidate - CIn UFPE, Software Developer - Facilit Tecnologia",
                    aboutMeEducation : "MSc candidate in Computer Science at CIn - UFPE, BSc in Information Systems at University of Pernambuco (UPE - 2011) and Electronics Technician at the National Service of Industrial Learning (SENAI - 2006) .",
                    aboutMeWork : "At the same time with the researcher occupation, I've been working as software developer at Facilit Technology since 2013 and during that time I was involved in several projects using various technologies, detailed below.",
                    name : "Victor Laerte de Oliveira",
                    address : "Recife, Pernambuco - Brazil",
                    email : "victorlaertedoliveira@gmail.com",
                    ufpe : {name : "Federal University of Pernambuco",role:"MSc in Computer Science",period:"In Progress",description:"Master Degree in Computer Science. Subfields of study: Software Engineering, Mobile Applications"},
                    upe : {name : "University of Pernambuco",role:"BSc in Information Systems",period:"December 2011",description:"The final paper of the course sets out the key technical concepts and architectures of the Brazilian Digital Television System (SBTVD). In addition, we present the programming languages and development environments, emphasizing the preparation of a foundation for the implementation of an interactive application using declarative subsystem Ginga-NCL, which will serve to assess the knowledge of educational program viewers by answering of a questionnaire about the topic involved."},
                    senai : {name : "Serviço Nacional de Aprendizagem Industrial",role:"Tech in Electronics",period:"December 2006",description:"Electronics technician course"},
                    umc : {name : "Upper Madison College",role:"ESL - English as a Second Language",period:"October 2012",description:"18 weeks of full-time Language Course, completing a 24 weeks exchange"},
                    scrum_certificate : {name : "Certified ScrumMaster",role:"Scrum Alliance - 000400666",period:"Until March 2017",description:"A Certified ScrumMaster® helps project teams properly use Scrum, increasing the likelihood of the project's overall success. CSMs understand Scrum values, practices, and applications and provide a level of knowledge and expertise above and beyond that of typical project managers. CSMs act as servant leaders, helping the rest of the Scrum team work together and learn the Scrum framework. CSMs also protect the team from both internal and external distractions"},
                    c_sharp_certificate : {name : "Programming in C# Specialist",role:"Microsoft - F108-2395",period:"No expiration",description:"Microsoft Exam 70-483"},
                    mcp_certificate : {name : "Microsoft Certified Professional",role:"Microsoft - F108-2395",period:"No expiration",description:"Microsoft Certified Professional (MCP) is a certification that validates the professional developer and technical expertise IT developer with rigorous testing, approved and recognized by the industry. MCP exams cover a wide range of products, technologies and Microsoft solutions."},
                    facilit : {name : "Facilit Tecnologia",role:"Software Developer",period:"May 2013 - Current",description:"Java Web Systems and Apps (Android, Windows 8/Phone) Development."},
                    skills_plp : "Programming Languages and Platforms:",
                    skills_plp1 : "Java EE / Android, C#, Javascript (Good or better);",
                    skills_plp2 : "SQL, NCL, Lua (Regular);",
                    skills_plp3 : "Objective C, Swift (Basic or less)",
                    skills_experience : "Experience in:",
                    skills_experience1 : "Mobile Development: Android, Windows Phone/8, IOs; 2.",
                    skills_experience2 : "RDBMS: MySQL, PostgreSQL, MongoDB;",
                    skills_experience3 : "Application Servers and web containers: JBOSS e Tomcat;",
                    skills_experience4 : "IDE: Eclipse, Android Studio, IntelliJ IDEA, Visual Studio, NetBeans;",
                    skills_experience5 : "Frameworks, API’s, General Applications: AngularJS, jQuery, NodeJs, ExpressJS, Struts, Spring, Liferay Portal;",
                    skills_experience6 : "CVS: SVN, Git",
                    skills_and_recommendations : "Skills and Recommendations",
                    skills_section_description : "In this section all data were collected from my Linkedin's profile, and it's based on number of recomendations. We know it can not show all the reality, but I belive it can be show I little bit more about what I've done based in recomendations",
                    linkedin_skills : [{votes:29,skill:"Scrum"},{votes:28,skill:"JavaScript"},{votes:26,skill:"SQL"},{votes:24,skill:"Java"},{votes:23,skill:"Android"},{votes:21,skill:"JQuery"},{votes:19,skill:"Java Enterprise Edition"},{votes:18,skill:"Java software development"},{votes:18,skill:"C#"},{votes:17,skill:"Eclipse"},{votes:14,skill:"Subversion"},{votes:12,skill:"Windows Phone"},{votes:11,skill:"Tomcat"},{votes:10,skill:"Windows software development"},{votes:10,skill:"JBoss Application Server"},{votes:10,skill:"Apache Tomcat"},{votes:9,skill:"Servidor de Aplicação JBoss"},{votes:8,skill:"Microsoft Visual Studio"},{votes:8,skill:"Digital TV"},{votes:7,skill:"AngularJS"},{votes:7,skill:"NetBeans"},{votes:6,skill:"Lua"},{votes:5,skill:"Visual Studio"},{votes:4,skill:"Git"},{votes:2,skill:"Node.js"},{votes:1,skill:"GitHub"},{votes:1,skill:"MongoDB"}],
                    last_updated : "Last updated at 11/06/2016",

                };

                this.get = function(key) {
                	
                    return strings[key];
                };
                
            }
        ]);
})(window.angular);