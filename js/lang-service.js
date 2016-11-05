(function(angular) {

    'use strict';

    angular.module('ngResumeApp')
        .service('langService', ['$http',
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
                    facilit : {name : "Facilit Tecnologia",role:"Software Developer",period:"May 2013 - Current",description:"Java Web Systems and Apps (Android, Windows 8/Phone) Development."},
                    skills_plp : "Programming Languages and Platforms: 1. Java EE / Android, C#, Javascript (Good or better); 2. SQL, NCL, Lua (Regular); 3. Objective C, Swift (Basic or less)",
                    skills_experience : "Experience in: 1. Mobile Development: Android, Windows Phone/8, IOs; 2. RDBMS: MySQL, PostgreSQL, MongoDB; 3. Application Servers and web containers: JBOSS e Tomcat; 4. IDE: Eclipse, Android Studio, IntelliJ IDEA, Visual Studio, NetBeans; 5. Frameworks, API’s, General Applications: AngularJS, jQuery, NodeJs, ExpressJS, Struts, Spring, Liferay Portal; 6. CSV: SVN, Git",
                };

                this.get = function(key) {
                	
                    return strings[key];
                };
                
            }
        ]);
})(window.angular);