(function(angular) {

    'use strict';

    angular.module('ngResumeApp')
        .service('langService', ['$http',
            function($http) {

                var strings = {

                    title : "I'm Victor Laerte Oliveira.",
                    subtitle : "MSc Candidate - CIn UFPE, Software Developer - Facilit Tecnologia",
                    aboutMeEducation : "MSc candidate in Computer Science at CIn - UFPE, BSc in Information Systems at University of Pernambuco (UPE - 2011) and Electronics Technician at the National Service of Industrial Learning (SENAI - 2006) .",
                    aboutMeWork : "At the same time with the researcher occupation, I've been working as software developer at Facilit Technology since 2013 and during that time I was involved in several projects using various technologies, detailed below.",
                    name : "Victor Laerte de Oliveira",
                    address : "Recife, Pernambuco - Brazil",
                    email : "victorlaertedoliveira@gmail.com"

                };

                this.get = function(key) {
                	
                    return strings[key];
                };
                
            }
        ]);
})(window.angular);