(function(angular) {

    'use strict';

    angular.module('ngResumeApp')
    .service('staticDataService', ['$http',
        function($http) {

            var strings = {
              name: "Victor Laerte de Oliveira",
              title: "I'm Victor Laerte Oliveira.",
              subtitle: "MSc Candidate - CIn UFPE, Software Developer - Facilit Tecnologia",
              aboutMeEducation: "MSc candidate in Computer Science at CIn - UFPE, BSc in Information Systems at University of Pernambuco (UPE - 2011) and Electronics Technician at the National Service for Industrial Training (SENAI - 2006).",
              aboutMeWork: "At the same time with the researcher occupation, I've been working as software developer at Facilit Technology since 2013 and during that time I was involved in several projects using various technologies, detailed below.",
              address: "Recife, Pernambuco - Brazil",
              email: "victorlaertedoliveira@gmail.com",
              ufpe: {
                name: "Federal University of Pernambuco (UFPE)",
                role: "MSc in Computer Science",
                period: "In Progress",
                description: "Master Degree in Computer Science. Subfields of study: Software Engineering, Mobile Applications"
              },
              upe: {
                name: "University of Pernambuco (UPE)",
                role: "BSc in Information Systems",
                period: "December 2011",
                description: "The final paper of the course sets out the key technical concepts and architectures of the Brazilian Digital Television System (SBTVD). In addition, we present the programming languages and development environments, emphasizing the preparation of a foundation for the implementation of an interactive application using declarative subsystem Ginga-NCL, which will serve to assess the knowledge of educational program viewers by answering of a questionnaire about the topic involved."
              },
              senai: {
                name: "National Service for Industrial Training (SENAI)",
                role: "Tech in Electronics",
                period: "December 2006",
                description: "Electronics technician course"
              },
              umc: {
                name: "Upper Madison College",
                role: "ESL - English as a Second Language",
                period: "October 2012",
                description: "18 weeks of full-time Language Course, completing a 24 weeks exchange"
              },
              scrum_certificate: {
                name: "Certified ScrumMaster",
                role: "Scrum Alliance - 000400666",
                period: "Until March 2017",
                description: "A Certified ScrumMaster helps project teams properly use Scrum, increasing the likelihood of the project's overall success. CSMs understand Scrum values, practices, and applications and provide a level of knowledge and expertise above and beyond that of typical project managers. CSMs act as servant leaders, helping the rest of the Scrum team work together and learn the Scrum framework. CSMs also protect the team from both internal and external distractions"
              },
              c_sharp_certificate: {
                name: "Programming in C# Specialist",
                role: "Microsoft - F108-2395",
                period: "No expiration",
                description: "Microsoft Exam 70-483"
              },
              mcp_certificate: {
                name: "Microsoft Certified Professional",
                role: "Microsoft - F108-2395",
                period: "No expiration",
                description: "Microsoft Certified Professional (MCP) is a certification that validates the professional developer and technical expertise IT developer with rigorous testing, approved and recognized by the industry. MCP exams cover a wide range of products, technologies and Microsoft solutions."
              },
              facilit: {
                name: "Facilit Tecnologia",
                role: "Software Developer",
                period: "May 2013 - Current",
                description: "Software Developer of Java Web and mobile applications (Android, Windows 8/Phone), having used C#, Javascript and many other technologies in different projects, and also performing the role of Scrum Master."
              },
              skills_plp: "Programming Languages and Platforms:",
              skills_plp1: "Java EE / Android, C#, Javascript (Good or better);",
              skills_plp2: "SQL, NCL, Lua (Regular);",
              skills_plp3: "Objective C, Swift (Basic or less)",
              skills_experience: "Experience in:",
              skills_experience_array: [
                {
                  text: "Mobile Development: Android, Windows Phone/8, IOs;"
                },
                {
                  text: "RDBMS: MySQL, PostgreSQL, MongoDB;"
                },
                {
                  text: "Application Servers and web containers: JBOSS e Tomcat;"
                },
                {
                  text: "IDE: Eclipse, Android Studio, IntelliJ IDEA, Visual Studio, NetBeans;"
                },
                {
                  text: "Frameworks, API’s, General Applications: AngularJS, jQuery, NodeJs, ExpressJS, Struts, Spring, Liferay Portal;"
                },
                {
                  text: "CVS: SVN, Git"
                }
              ],
              skills_and_recommendations: "Skills and Recommendations",
              skills_section_description: "In this section all data were collected from my Linkedin's profile, and it's based on number of recomendations. We know it can not show all the reality, but I belive it can show a little bit more about what I've done based in recomendations",
              linkedin_skills: [
                {
                  votes: 29,
                  skill: "Scrum"
                },
                {
                  votes: 28,
                  skill: "JavaScript"
                },
                {
                  votes: 26,
                  skill: "SQL"
                },
                {
                  votes: 24,
                  skill: "Java"
                },
                {
                  votes: 23,
                  skill: "Android"
                },
                {
                  votes: 21,
                  skill: "JQuery"
                },
                {
                  votes: 19,
                  skill: "Java Enterprise Edition"
                },
                {
                  votes: 18,
                  skill: "Java software development"
                },
                {
                  votes: 18,
                  skill: "C#"
                },
                {
                  votes: 17,
                  skill: "Eclipse"
                },
                {
                  votes: 14,
                  skill: "Subversion"
                },
                {
                  votes: 12,
                  skill: "Windows Phone"
                },
                {
                  votes: 11,
                  skill: "Tomcat"
                },
                {
                  votes: 10,
                  skill: "Windows software development"
                },
                {
                  votes: 10,
                  skill: "JBoss Application Server"
                },
                {
                  votes: 10,
                  skill: "Apache Tomcat"
                },
                {
                  votes: 9,
                  skill: "Servidor de Aplicação JBoss"
                },
                {
                  votes: 8,
                  skill: "Microsoft Visual Studio"
                },
                {
                  votes: 8,
                  skill: "Digital TV"
                },
                {
                  votes: 7,
                  skill: "AngularJS"
                },
                {
                  votes: 7,
                  skill: "NetBeans"
                },
                {
                  votes: 6,
                  skill: "Lua"
                },
                {
                  votes: 5,
                  skill: "Visual Studio"
                },
                {
                  votes: 4,
                  skill: "Git"
                },
                {
                  votes: 2,
                  skill: "Node.js"
                },
                {
                  votes: 1,
                  skill: "GitHub"
                },
                {
                  votes: 1,
                  skill: "MongoDB"
                }
              ],
              last_updated: "Last updated at 11/06/2016",
              portfolios: [
                {
                  closed: true,
                  title: "Strategic Monitoring Panel of the Governo do Rio Grande do Norte",
                  description: "Strategic Monitoring Panel of the Governo do Rio Grande do Norte, julho 2016",
                  imgUrl: "images/portfolio/painel_rn.jpg",
                  modalImgUrl: "images/portfolio/modals/painel_rn.jpg",
                  url: "http://www.rn.gov.br/Conteudo.asp?TRAN=ITEM&TARG=131472&ACT&PAGE&PARM&LBL=NOT%C3%8DCIA",
                  tags: [
                    {
                      name: "java"
                    },
                    {
                      name: "javascript"
                    }
                  ]
                },
                {
                  closed: true,
                  title: "Target App for Windows Store",
                  description: "This application aims to access the strategic planning of an institution that uses the Target management platform enables you to navigate so offline Objectives and Strategic Actions, with its detail: graphics, schedule, photos, indicators, maps, etc.",
                  imgUrl: "images/portfolio/tgapp_windows.jpg",
                  modalImgUrl: "images/portfolio/modals/tgapp_windows.jpg",
                  url: "http://www.microsoft.com/en-us/store/p/target-app/9wzdncrdc3k1",
                  tags: [
                    {
                      name: "C#"
                    }
                  ]
                },
                {
                  closed: true,
                  title: "Target App for Android",
                  description: "This application aims to access the strategic planning of an institution that uses the Target management platform enables you to navigate so offline Objectives and Strategic Actions, with its detail: graphics, schedule, photos, indicators, maps, etc.",
                  imgUrl: "images/portfolio/tgapp_android.png",
                  modalImgUrl: "images/portfolio/modals/tgapp_android.jpg",
                  url: "http://play.google.com/store/apps/details?id=br.com.facilit.target.app.android&hl=pt-br",
                  tags: [
                    {
                      name: "java"
                    },
                    {
                      name: "android"
                    }
                  ]
                },
                {
                  closed: true,
                  title: "Na Onda",
                  description: "Na Onda was designed to display information about the wave forecast for surfers scattered in the four corners of Brazil. All forecast information is provided by CPTEC / INPE",
                  imgUrl: "images/portfolio/naonda.png",
                  modalImgUrl: "images/portfolio/modals/naonda.jpg",
                  url: "http://play.google.com/store/apps/details?id=com.victorlaerte.na_onda&hl=pt-br",
                  tags: [
                    {
                      name: "java"
                    },
                    {
                      name: "android"
                    }
                  ]
                },
                {
                  closed: true,
                  title: "Strategic Monitoring Panel of the National Ministry of Integration for the Water for All Program - BR",
                  description: "Strategic Monitoring Panel of the National Ministry of Integration for the Water for All Program, julho 2014",
                  imgUrl: "images/portfolio/painel_apt.jpg",
                  modalImgUrl: "images/portfolio/modals/painel_apt.jpg",
                  url: "http://painel.mi.gov.br/web/agua-para-todos/login",
                  tags: [
                    {
                      name: "java"
                    },
                    {
                      name: "javascript"
                    }
                  ]
                },
                {
                  closed: true,
                  title: "Strategic Monitoring Panel of the National Ministry of Integration for the Project Integrao do São di Francisco (PISF)- BR",
                  description: "Strategic Monitoring Panel of the National Ministry of Integration for the Project Integrao do São di Francisco (PISF), abril 2014",
                  imgUrl: "images/portfolio/painel_pisf.jpg",
                  modalImgUrl: "images/portfolio/modals/painel_pisf.jpg",
                  url: "http://pisf.mi.gov.br",
                  tags: [
                    {
                      name: "java"
                    },
                    {
                      name: "javascript"
                    }
                  ]
                },
                {
                  closed: true,
                  title: "Strategic Monitoring Panel of the Governo de Pernambuco - BR",
                  description: "Strategic Monitoring Panel of the Governo de Pernambuco, novembro 2013",
                  imgUrl: "images/portfolio/painel_govpe.jpg",
                  modalImgUrl: "images/portfolio/modals/painel_govpe.jpg",
                  url: "http://www.paineldecontrole.pe.gov.br",
                  tags: [
                    {
                      name: "java"
                    },
                    {
                      name: "javascript"
                    }
                  ]
                },
                {
                  closed: true,
                  title: "Strategic Monitoring Panel of the National Ministry of Integration - BR",
                  description: "Strategic Monitoring Panel of the National Ministry of Integration, novembro 2013",
                  imgUrl: "images/portfolio/painel_mi.jpg",
                  modalImgUrl: "images/portfolio/modals/painel_mi.jpg",
                  url: "http://painel.mi.gov.br",
                  tags: [
                    {
                      name: "java"
                    },
                    {
                      name: "javascript"
                    }
                  ]
                }
              ],
              quotes: [
                {
                  quote: "“There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.”",
                  author: "C.A.R. Hoare (British computer scientist, winner of the 1980 Turing Award)"
                },
                {
                  quote: "“Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.”",
                  author: "Linus Torvalds (Finnish American, software engineer and hacker, principal force behind the development of the Linux kernel)"
                },
                {
                  quote: "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”",
                  author: "Martin Fowler (author and speaker on software development)"
                },
                {
                  quote: "“Good code is its own best documentation. As you’re about to add a comment, ask yourself, ‘How can I improve the code so that this comment isn’t needed?'”",
                  author: "Steve McConnell (author of many software engineering books including “Code Complete”)"
                },
                {
                  quote: "“One of my most productive days was throwing away 1000 lines of code.”",
                  author: "Ken Thompson (computer scientist, early developer of UNIX OS)"
                }
              ],
              testimonials: [
                {
                  testimonial: "Victor is smart, proactive has is a multitasker. Technically versatile, and also a team player. I'm sure he would be a great asset to any company.",
                  author: "Carlos Brandão Jr (Scrum Master at Liferay, Inc)",
                  info: "20 de outubro de 2016, Linkedin — Carlos supervised Victor Laerte at Facilit Tecnologia"
                },
                {
                  testimonial: "Victor is one of the best problem-solvers I have ever worked with. During the time I've spent with him, he demonstrated expertise in his area and makes great decisions as Scrum Master, especially under pressure. I would gladly certify his skills in Software Development (Web and Mobile apps) from the many projects we've worked together.",
                  author: "Maxwell Francisco (Web Developer at Urban Insight)",
                  info: "18 de outubro de 2016, Linkedin — Maxwell worked directly with Victor Laerte at Facilit Technology"
                },
                {
                  testimonial: "Victor is a great, experienced workmate and friend, talented and easy to work with. He has great technical skills and always willing to learn new technologies and practices (both academical and professional). He's willing to help the workmates and not afraid to work on challenging projects. He also gave great contributions to our internal processes in the company, such as adopt GitHub, Jenkins and other tools, which demonstrates interest to the company and its team, proactivity, out-of-the-box thinking and updated with best practices. He sure was a great addition to our team and will be anywhere he works. ",
                  author: "Everson Veríssimo (Developer at Facilit Tecnologia)",
                  info: "17 de outubro de 2016, Linkedin — Everson worked directly with Victor Laerte at Facilit Tecnologia"
                },
                {
                  testimonial: "We worked together by few years and I can say that Victor is one of the best developers who have had the opportunity to collaborate. Proactive, studious, committed to constantly improve their skills and always with strong and relevant opinions, whether or not on technical issues. As Scrum Master, showed one of his most admirable traits: being a good leader, fair and always enhancing the team work, resolving conflicts and ensuring delivering value to our product. Certainly one of the IT professionals that every company seeks and who would like to have another opportunity to work. I can't see a different future for Victor as well as great success.",
                  author: "Jordana Morais (Senior UX Designer & Front-end at Facilit Tecnologia)",
                  info: "27 de setembro de 2016, Linkedin — Jordana worked directly with Victor Laerte at Facilit Tecnologia"
                }
              ],
              academicPubArray: [
                {
                  category: "Bachelor's Thesis",
                  items: [
                    {
                      language: "pt-BR",
                      title: "TV Digital no Brasil: Uma Metodologia Prática para o Desenvolvimento de Aplicações Interativas Utilizando Ginga-NCL",
                      link: "doc/tcc.pdf",
                      yearAndLocation: "2011 at Pernambuco University"
                    }
                  ],
                  
                }
              ],
              nonAcademicPubArray: [
                {
                  category: "Blog's most viewed posts",
                  items: [
                    {
                      language: "pt-BR",
                      title: "JavaFX AsyncTask: Um jeito fácil de manusear threads com JavaFX",
                      link: "http://mycyber-space.blogspot.com.br/2014/05/javafx-asynctask.html",
                      yearAndLocation: "2014"
                    },
                    {
                      language: "pt-BR",
                      title: "Android, IOS: como detectar e corrigir crashes do meu aplicativo? Crashlytics",
                      link: "http://mycyber-space.blogspot.com.br/2014/05/android-ios-como-detectar-e-corrigir.html",
                      yearAndLocation: "2014"
                    },
                    {
                      language: "pt-BR",
                      title: "Android: Como fazer para as imagens de sua aplicação não serem exibidas na galeria?",
                      link: "http://mycyber-space.blogspot.com.br/2014/05/android-como-fazer-para-as-imagens-de.html",
                      yearAndLocation: "2014"
                    },
                    
                  ],
                  
                }
              ],
              
            }

      this.get = function(key) {

        return strings[key];
    };

    this.getRandom = function(key) {

        var random = strings[key][Math.floor(Math.random()*strings[key].length)];
        return random;
    };

}
]);
})(window.angular);