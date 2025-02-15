(function (angular) {

    'use strict';

    angular.module('ngResumeApp')
        .service('staticDataService', ['$http',
            function ($http) {

                var strings = {
                    name: "Victor Laerte de Oliveira",
                    title: "Victor Laerte de Oliveira",
                    subtitle: "Software Engineering Manager - MSc in Computer Science, Software Engineer - Searasa Experian.",
                    aboutMeEducation: "MSc in Computer Science at CIn - UFPE, BSc in Information Systems at University of Pernambuco (UPE - 2011) and Electronics Technician at the National Service for Industrial Training (SENAI - 2006).",
                    aboutMeWork: "I started working as a software developer in 2013, exploring various technologies and platforms throughout my career. Over time, I developed strong leadership skills and now play a key role in guiding both teams and business strategy.",
                    address: "Recife, Pernambuco - Brazil",
                    email: "victorlaertedoliveira@gmail.com",
                    ufpe: {
                        url : "http://www.cin.ufpe.br",
                        imgUrl : "images/logoufpe.jpg",
                        name: "Federal University of Pernambuco (UFPE)",
                        role: "MSc in Computer Science",
                        period: "August 2019",
                        description: "Master Degree in Computer Science. Title: An Empirical Study on the Usage of the Kotlin Programming Language for Android",
                        groups: [{
                            name: "Software Productive Group",
                            acronym: "SPG",
                            url: "http://twiki.cin.ufpe.br/twiki/bin/view/SPG/WebHome",
                            imageUrl: "images/logoSPG.jpg",
                            description: "is a research group that investigates and develops tools, techniques and processes for improving software development productivity levels without compromising software and human life quality factors. We are a multi-institutional group formed by people from the Informatics Center of the Federal University of Pernambuco, DSC/UFCG and DIMAp/UFRN."
                        }]
                    },
                    upe: {
                        url : "http://upecaruaru.com.br",
                        imgUrl : "images/logoupe.jpg",
                        name: "University of Pernambuco (UPE)",
                        role: "BSc in Information Systems",
                        period: "December 2011",
                        description: "The final paper of the course sets out the key technical concepts and architectures of the Brazilian Digital Television System (SBTVD). In addition, we present the programming languages and development environments, emphasizing the preparation of a foundation for the implementation of an interactive application using declarative subsystem Ginga-NCL, which will serve to assess the knowledge of educational program viewers by answering of a questionnaire about the topic involved."
                    },
                    senai: {
                        url : "http://www.pe.senai.br",
                        imgUrl : "images/logosenai.jpg",
                        name: "National Service for Industrial Training (SENAI)",
                        role: "Tech in Electronics",
                        period: "December 2006",
                        description: "Electronics technician course"
                    },
                    umc: {
                        url : "http://umcollege.ca",
                        imgUrl : "images/logoumc.jpg",
                        name: "Upper Madison College",
                        role: "ESL - English as a Second Language",
                        period: "October 2012",
                        description: "18 weeks of full-time Language Course, completing a 24 weeks exchange"
                    },
                    management30: {
                        url : "https://management30.com",
                        imgUrl : "images/management30.jpg",
                        name: "Management 3.0",
                        role: "The Next Generation of Management",
                        period: "December 2018",
                        description: "Management 3.0 is an ever-changing collection of games, tools, and practices to help any worker to manage the organization. It is a way of looking at work systems with a strong focus on people."
                    },
                    scrum_certificate: {
                        imgUrl : "images/logocsm.png",
                        name: "Certified ScrumMaster",
                        role: "Scrum Alliance - 000400666",
                        period: "Until March 2017",
                        description: "A Certified ScrumMaster helps project teams properly use Scrum, increasing the likelihood of the project's overall success. CSMs understand Scrum values, practices, and applications and provide a level of knowledge and expertise above and beyond that of typical project managers. CSMs act as servant leaders, helping the rest of the Scrum team work together and learn the Scrum framework. CSMs also protect the team from both internal and external distractions"
                    },
                    c_sharp_certificate: {
                        imgUrl : "images/logomicrosoft.jpg",
                        name: "Programming in C# Specialist",
                        role: "Microsoft - F108-2395",
                        period: "No expiration",
                        description: "Microsoft Exam 70-483"
                    },
                    mcp_certificate: {
                        imgUrl : "images/logomicrosoft.jpg",
                        name: "Microsoft Certified Professional",
                        role: "Microsoft - F108-2395",
                        period: "No expiration",
                        description: "Microsoft Certified Professional (MCP) is a certification that validates the professional developer and technical expertise IT developer with rigorous testing, approved and recognized by the industry. MCP exams cover a wide range of products, technologies and Microsoft solutions."
                    },
                    liferay: {
                        url : "http://liferay.com",
                        imgUrl : "images/liferay.png",
                        name: "Liferay Inc.",
                        role: "Lead Mobile Software Engineer",
                        period: "March 2017 - June 2019",
                        description: "Lead Mobile Software Engineer. Working building apps in different platforms (Android, iOS) with many technologies like Java, Kotlin, Swift, Obj-C, C# and others. I am also responsible for managing the mobile team in Latin America using agile practices and some concepts of Management 3.0."
                    },
                    facilit: {
                        url : "http://www.facilit.com.br",
                        imgUrl : "images/logofacilit.jpg",
                        name: "Facilit Tecnologia",
                        role: "Software Developer",
                        period: "May 2013 - March 2017",
                        description: "Software Developer of Java Web and mobile applications (Android, Windows 8/Phone), having used C#, Javascript and many other technologies in different projects, and also performing the role of Scrum Master."
                    },
                    tempest: {
                        url : "https://www.tempest.com.br/",
                        imgUrl : "images/logotempest.png",
                        name: "Tempest Security Intelligence",
                        role: "Lead Mobile Software Engineer",
                        period: "June 2019 - March 2024",
                        description: "Lead Mobile Software Engineer. Working building SDKs and apps for Android and iOS focusing on security. Also responsible for managing the mobile team using agile practices.",
                        groups: [{
                            name: "AllowMe Intelligence",
                            acronym: "by Tempest",
                            url: "https://www.tempest.com.br/allow-me/index.html",
                            imageUrl: "images/logoallowme.png",
                            description: "AllowMe helps other businesses prevent and mitigate risks from their customers."
                        }]
                    },
                    serasa_experian: {
                        url : "https://www.serasaexperian.com.br/",
                        imgUrl : "images/serasa.png",
                        name: "Serasa Experian",
                        role: "Software Engineering Manager",
                        period: "April 2024 - Current",
                        description: "I lead a team dedicated to developing fraud prevention solutions, encompassing multiple areas such as native SDKs (Android, iOS, Web) and backend services. My role goes beyond managing the team; I actively contribute to shaping the strategic direction of the area, ensuring our solutions remain effective, scalable, and aligned with business needs. This involves collaborating with different stakeholders, refining our technology stack, and continuously improving our approach to fraud detection and prevention.",
                        groups: [{
                            name: "ID&F - Identity and Fraud",
                            acronym: "",
                            url: "https://www.serasaexperian.com.br/solucoes/antifraude/#info-tabs-item-bdbed13ecf-tab",
                            description: "Security for business without impacting customer experience"
                        }]
                    },
                    skills_plp: "Programming Languages and Platforms:",
                    skills_plp1: "Java (EE / Android), Kotlin, C#, Javascript, Swift, Objective-C",
                    skills_experience: "Experience in:",
                    skills_experience_array: [{
                        text: "Mobile Development: Android, iOS, Windows Phone/8;"
                    }, {
                        text: "RDBMS: MySQL, PostgreSQL, MongoDB;"
                    }, {
                        text: "Application Servers and web containers: JBOSS e Tomcat;"
                    }, {
                        text: "IDE: Eclipse, Android Studio, xCode, IntelliJ IDEA, Visual Studio, NetBeans;"
                    }, {
                        text: "Continuous Integration: Jenkins, Travis CI;"
                    }, {
                        text: "CVS: SVN, Git"
                    }],
                    skills_and_recommendations: "Skills and Recommendations",
                    skills_section_description: "In this section all data were collected from my Linkedin's profile, and it's based on number of recomendations. We know it can not show all the reality, but I belive it can show a little bit more about what I've done based in recomendations",
                    linkedin_skills: [{
                        votes: 35,
                        skill: "JavaScript"
                    }, {
                        votes: 33,
                        skill: "Scrum"
                    }, {
                        votes: 31,
                        skill: "Java"
                    }, {
                        votes: 29,
                        skill: "Android"
                    }, {
                        votes: 28,
                        skill: "SQL"
                    }, {
                        votes: 22,
                        skill: "JQuery"
                    }, {
                        votes: 21,
                        skill: "Java software development"
                    }, {
                        votes: 19,
                        skill: "C#"
                    }, {
                        votes: 19,
                        skill: "Java Enterprise Edition"
                    }, {
                        votes: 19,
                        skill: "Eclipse"
                    }, {
                        votes: 13,
                        skill: "Subversion"
                    }, {
                        votes: 12,
                        skill: "Apache Tomcat"
                    }, {
                        votes: 12,
                        skill: "Windows Phone"
                    }, {
                        votes: 12,
                        skill: "Tomcat"
                    }, {
                        votes: 10,
                        skill: "JBoss Application Server"
                    }, {
                        votes: 9,
                        skill: "Windows software development"
                    }, {
                        votes: 9,
                        skill: "Microsoft Visual Studio"
                    }, {
                        votes: 8,
                        skill: "NetBeans"
                    }, {
                        votes: 7,
                        skill: "Git"
                    }, {
                        votes: 6,
                        skill: "AngularJS"
                    }, {
                        votes: 6,
                        skill: "Lua"
                    }, {
                        votes: 3,
                        skill: "GitHub"
                    }, {
                        votes: 3,
                        skill: "Node.js"
                    }, {
                        votes: 2,
                        skill: "MongoDB"
                    }],
                    last_updated: "Last updated at 05/21/2020",
                    portfolios: [
                    {
                        closed: true,
                        title: "AllowMe",
                        description: "AllowMe helps your company to prevent fraud and mitigate risks throughout your customers' digital journey. Incorporated into websites and mobile apps, AllowMe also helps to improve your customer's experience when using your company's digital platforms, reducing friction in the onboarding process and decreasing the cost of acquiring new customers.",
                        imgUrl: "images/portfolio/allowMe.png",
                        modalImgUrl: "images/portfolio/modals/allowMe.png",
                        url: "https://allowme.cloud/",
                        tags: [{
                            name: "kotlin"
                        }, {
                            name: "java"
                        }, {
                            name: "android"
                        }, {
                            name: "swift"
                        }, {
                            name: "ios"
                        }, {
                            name: "objective-c"
                        }]
                    },{
                        closed: true,
                        title: "Liferay Screens",
                        description: "Liferay Screens is a collection of fully native mobile components, using all the power of your Liferay platform as an enterprise grade mobile back end.",
                        imgUrl: "images/portfolio/liferay-screens.png",
                        modalImgUrl: "images/portfolio/modals/liferay-screens.png",
                        url: "https://github.com/liferay/liferay-screens",
                        tags: [{
                            name: "kotlin"
                        }, {
                            name: "java"
                        }, {
                            name: "android"
                        }, {
                            name: "swift"
                        }, {
                            name: "ios"
                        }]
                    },{
                        closed: true,
                        title: "WeDeploy Android SDK",
                        description: "WeDeploy helps you build from simple to complex applications. We give you predefined services that can speed up your development process.",
                        imgUrl: "images/portfolio/welogo.png",
                        modalImgUrl: "images/portfolio/modals/wedeploy.png",
                        url: "https://github.com/wedeploy/wedeploy-sdk-android",
                        tags: [{
                            name: "java"
                        }, {
                            name: "android"
                        }]
                    },{
                        closed: true,
                        title: "Liferay Loop",
                        description: "Loop is Liferay's enterprise social network. Get connected to your co-workers, share posts with your team, follow topics that interest you!",
                        imgUrl: "images/portfolio/loop.png",
                        modalImgUrl: "images/portfolio/modals/loop.png",
                        url: "https://itunes.apple.com/app/liferay-loop/id999031610",
                        tags: [{
                            name: "swift"
                        }, {
                            name: "objective-c"
                        }, {
                            name: "ios"
                        }, {
                            name: "kotlin"
                        }, {
                            name: "java"
                        }, {
                            name: "android"
                        }]
                    }, {
                        closed: true,
                        title: "Trump Ipsum",
                        description: "An extension for Sublime Text 2 and 3! It allows you to insert the best Dumbest Lorem Ipsum in the editor via menu items or keyboard shortcuts.",
                        imgUrl: "images/portfolio/trump.png",
                        modalImgUrl: "images/portfolio/modals/trump.png",
                        url: "http://www.victorlaerte.com/dumbest-ipsum/",
                        tags: [{
                            name: "entertainment"
                        }, {
                            name: "python"
                        }]
                    }, {
                        closed: true,
                        title: "BeerJs - Recife",
                        description: "A community to bring together JavaScript Beer lovers in the world's major cities",
                        imgUrl: "images/portfolio/beerjs.png",
                        modalImgUrl: "images/portfolio/modals/beerjs.png",
                        url: "https://beerjs.github.io/recife/",
                        tags: [{
                            name: "entertainment"
                        }, {
                            name: "javascript"
                        }]
                    }, {
                        closed: true,
                        title: "Target App for Windows Store",
                        description: "This application aims to access the strategic planning of an institution that uses the Target management platform enables you to navigate so offline Objectives and Strategic Actions, with its detail: graphics, schedule, photos, indicators, maps, etc.",
                        imgUrl: "images/portfolio/tgapp_windows.jpg",
                        modalImgUrl: "images/portfolio/modals/tgapp_windows.jpg",
                        url: "http://www.microsoft.com/en-us/store/p/target-app/9wzdncrdc3k1",
                        tags: [{
                            name: "C#"
                        }]
                    }, {
                        closed: true,
                        title: "Strategic Monitoring Panel of the Rio Grande do Norte Government",
                        description: "Strategic Monitoring Panel of the Governo do Rio Grande do Norte, july 2016",
                        imgUrl: "images/portfolio/painel_rn.jpg",
                        modalImgUrl: "images/portfolio/modals/painel_rn.jpg",
                        url: "http://www.rn.gov.br/Conteudo.asp?TRAN=ITEM&TARG=131472&ACT&PAGE&PARM&LBL=NOT%C3%8DCIA",
                        tags: [{
                            name: "java"
                        }, {
                            name: "javascript"
                        }]
                    }, {
                        closed: true,
                        title: "Strategic Monitoring Panel of the National Ministry of Integration for the Water for All Program - BR",
                        description: "Strategic Monitoring Panel of the National Ministry of Integration for the Water for All Program, july 2014",
                        imgUrl: "images/portfolio/painel_apt.jpg",
                        modalImgUrl: "images/portfolio/modals/painel_apt.jpg",
                        url: "http://painel.mi.gov.br/web/agua-para-todos/login",
                        tags: [{
                            name: "java"
                        }, {
                            name: "javascript"
                        }]
                    }, {
                        closed: true,
                        title: "Strategic Monitoring Panel of the National Ministry of Integration for PISF- BR",
                        description: "Strategic Monitoring Panel of the National Ministry of Integration for PISF, april 2014",
                        imgUrl: "images/portfolio/painel_pisf.jpg",
                        modalImgUrl: "images/portfolio/modals/painel_pisf.jpg",
                        url: "http://pisf.mi.gov.br",
                        tags: [{
                            name: "java"
                        }, {
                            name: "javascript"
                        }]
                    }, {
                        closed: true,
                        title: "Strategic Monitoring Panel of the Pernambuco Government - BR",
                        description: "Strategic Monitoring Panel of the Pernambuco Government, november 2013",
                        imgUrl: "images/portfolio/painel_govpe.jpg",
                        modalImgUrl: "images/portfolio/modals/painel_govpe.jpg",
                        url: "http://www.paineldecontrole.pe.gov.br",
                        tags: [{
                            name: "java"
                        }, {
                            name: "javascript"
                        }]
                    }, {
                        closed: true,
                        title: "Strategic Monitoring Panel of the National Ministry of Integration - BR",
                        description: "Strategic Monitoring Panel of the National Ministry of Integration, november 2013",
                        imgUrl: "images/portfolio/painel_mi.jpg",
                        modalImgUrl: "images/portfolio/modals/painel_mi.jpg",
                        url: "http://painel.mi.gov.br",
                        tags: [{
                            name: "java"
                        }, {
                            name: "javascript"
                        }]
                    }, {
                        closed: true,
                        title: "Target App for Android",
                        description: "This application aims to access the strategic planning of an institution that uses the Target management platform enables you to navigate so offline Objectives and Strategic Actions, with its detail: graphics, schedule, photos, indicators, maps, etc.",
                        imgUrl: "images/portfolio/tgapp_android.png",
                        modalImgUrl: "images/portfolio/modals/tgapp_android.jpg",
                        url: "http://play.google.com/store/apps/details?id=br.com.facilit.target.app.android&hl=pt-br",
                        tags: [{
                            name: "java"
                        }, {
                            name: "android"
                        }]
                    }],
                    quotes: [{
                        quote: "“There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.”",
                        author: "C.A.R. Hoare (British computer scientist, winner of the 1980 Turing Award)"
                    }, {
                        quote: "“Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.”",
                        author: "Linus Torvalds (Finnish American, software engineer and hacker, principal force behind the development of the Linux kernel)"
                    }, {
                        quote: "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”",
                        author: "Martin Fowler (author and speaker on software development)"
                    }, {
                        quote: "“Good code is its own best documentation. As you’re about to add a comment, ask yourself, ‘How can I improve the code so that this comment isn’t needed?'”",
                        author: "Steve McConnell (author of many software engineering books including “Code Complete”)"
                    }, {
                        quote: "“One of my most productive days was throwing away 1000 lines of code.”",
                        author: "Ken Thompson (computer scientist, early developer of UNIX OS)"
                    }, {
                        quote: "“Decision making often involves a tradeoff between effort and accuracy: The strategies that more often lead to the correct choice most of the time also require more effort and time.”",
                        author: "Carsten de Dreu (Professor of Psychology at Leiden University, Behavioral Economics at the University of Amsterdam and member of the Royal Netherlands Academy of Arts and Sciences)"
                    }, {
                        quote: "“Raise your quality standards as high as you can live with, avoid wasting your time on routine problems, and always try to work as closely as possible at the boundary of your abilities. Do this, because it is the only way of discovering how that boundary should be moved foward.”",
                        author: "Edsger Wybe Dijkstra (Computer scientist and an early pioneer in many research areas of computing science. Turing Award Winner)"
                    }],
                    testimonials: [{
                        testimonial: "Victor is smart, proactive has is a multitasker. Technically versatile, and also a team player. I'm sure he would be a great asset to any company.",
                        author: "Carlos Brandão Jr (Senior Project Manager/Agile Coach at Liferay, Inc)",
                        info: "October 20, 2016 from Linkedin — Carlos supervised Victor Laerte at Facilit Tecnologia",
                        imgUrl: "images/carlos_brandao.jpg"
                    }, {
                        testimonial: "Victor is one of the best problem-solvers I have ever worked with. During the time I've spent with him, he demonstrated expertise in his area and makes great decisions as Scrum Master, especially under pressure. I would gladly certify his skills in Software Development (Web and Mobile apps) from the many projects we've worked together.",
                        author: "Maxwell Francisco (Software Engineer Consultant at Dellent Consulting)",
                        info: "October 18, 2016 from Linkedin — Maxwell worked directly with Victor Laerte at Facilit Technology",
                        imgUrl: "images/maxwell_francisco.jpg"
                    }, {
                        testimonial: "Victor is a great, experienced workmate and friend, talented and easy to work with. He has great technical skills and always willing to learn new technologies and practices (both academical and professional). He's willing to help the workmates and not afraid to work on challenging projects. He also gave great contributions to our internal processes in the company, such as adopt GitHub, Jenkins and other tools, which demonstrates interest to the company and its team, proactivity, out-of-the-box thinking and updated with best practices. He sure was a great addition to our team and will be anywhere he works. ",
                        author: "Everson Veríssimo (Backend Software Engineer at Liferay)",
                        info: "October 17, 2016 from Linkedin — Everson worked directly with Victor Laerte at Facilit Tecnologia",
                        imgUrl: "images/everson_verissimo.jpg"
                    }, {
                        testimonial: "We worked together by few years and I can say that Victor is one of the best developers who have had the opportunity to collaborate. Proactive, studious, committed to constantly improve their skills and always with strong and relevant opinions, whether or not on technical issues. As Scrum Master, showed one of his most admirable traits: being a good leader, fair and always enhancing the team work, resolving conflicts and ensuring delivering value to our product. Certainly one of the IT professionals that every company seeks and who would like to have another opportunity to work. I can't see a different future for Victor as well as great success.",
                        author: "Jordana Morais (UX Consultant & Tech Lead at Liferay, Inc)",
                        info: "September 27, 2016 from Linkedin — Jordana worked directly with Victor Laerte at Facilit Tecnologia",
                        imgUrl: "images/jordana_morais.jpg"
                    }, {
                        testimonial: "Victor is a very talented and disciplined Software Engineer. Always working with a pro-active attitude he is able to help his team achieving their goals. He is definitely a good resource for any IT company as he learns fast and has compromise and ownership to his work. His skills range from an excellent sense of team work to technical skills such as widely used programming languages: Java, JavaScript and C#.",
                        author: "Thiago Andrade (Software Development Engineer II at Amazon)",
                        info: "December 27, 2016 from Linkedin — Thiago supervised Victor Laerte at Facilit Tecnologia",
                        imgUrl: "images/thiago_andrade.jpg"
                    }, {
                        testimonial: "I had the luck to work with Victor side by side, we both worked on Facilit's mobile application. It always amazed me the speed which Victor was able to deliver features, while constantly keeping up super code quality. Perhaps one of the most valuable traits of good developers is one's ability to turn complexity into simplicity, and that's why Victor was able to always deliver so rapidly, he repeatedly figured out the most efficient way to accomplish his goals. I also really admired Victor's care to user interfaces, they were always so responsive and fluid, resulting in a great user experience.",
                        author: "João Neves (Principal Software Engineer at Salesforce)",
                        info: "December 20, 2016 from Linkedin — João worked directly with Victor Laerte at Facilit Tecnologia",
                        imgUrl: "images/joao_neves.jpg"
                    }, {
                        testimonial: "Was a pleasure to work with Victor, He is a smart, proactive and dedicated to everything. We worked together in some mobile apps at Liferay. We had effort in quality using top technologies like Swift, Kotlin, Reactive programming, TDD, CI, CD. I believe he will have a brilliant career and will help his coworkers to grown up like him.",
                        author: "Allan Melo (Senior iOS Developer at PicPay)",
                        info: "January 22, 2019 from Linkedin - Allan worked with Victor Laerte in the same group",
                        imgUrl: "images/allan_melo.jpeg"
                    }, {
                        testimonial: "In the two companies that I worked directly with Victor, he has always shown to be a professional who has seriousness in what he does and always seeks to do the right thing and accuse the wrong things that are happening. For me, he will always be a great friend that I can trust and he can count on me for everything.",
                        author: "Adriano Interaminense (Front-End Engineer at Liferay, Inc)",
                        info: "June 27, 2019 from Linkedin - Adriano worked with Victor Laerte in the same group",
                        imgUrl: "images/adriano.jpeg"
                    }],
                    academicPubArray: [{
                        category: "Scientifc Papers",
                        items: [{
                            language: "en-US",
                            title: "On the Adoption of Kotlin on Android Development: A Triangulation Study",
                            link: "doc/On_the_Adoption_of_Kotlin_on_Android_Development__a_Triangulation_Study.pdf",
                            yearAndLocation: "2020 IEEE 27th International Conference on Software Analysis, Evolution and Reengineering (SANER), February 18-21, 2020, London, ON, Canada"
                        },
                        {
                            language: "en-US",
                            title: "An Initial Understanding of Task Interdependence in Software Engineering: A Case Study",
                            link: "doc/task-interdependence.pdf",
                            yearAndLocation: "11th International Workshop on Cooperative and Human Aspects of Software, May 27, 2018, Gothenburg, Sweden"
                        }],
                    }, {
                        category: "Master's Thesis",
                        items: [{
                            language: "en-US",
                            title: "An Empirical Study on the Usage of the Kotlin Programming Language for Android Development",
                            link: "https://repositorio.ufpe.br/bitstream/123456789/36041/1/DISSERTA%C3%87%C3%83O%20Victor%20Laerte%20de%20Oliveira.pdf",
                            yearAndLocation: "2019 at Federal University of Pernambuco"
                        }],
                    }, {
                        category: "Bachelor's Final Work",
                        items: [{
                            language: "pt-BR",
                            title: "TV Digital no Brasil: Uma Metodologia Prática para o Desenvolvimento de Aplicações Interativas Utilizando Ginga-NCL",
                            link: "doc/tcc.pdf",
                            yearAndLocation: "2011 at University of Pernambuco"
                        }],
                    }],
                    nonAcademicPubArray: [{
                        category: "Blog's most viewed posts",
                        items: [{
                                language: "en",
                                title: "JavaFX AsyncTask: A easy way to handle multithreading in JavaFX",
                                link: "https://medium.com/@victorlaertedoliveira/archive-javafx-asynctask-a-easy-way-to-handle-multithreading-in-javafx-26689f3cd8fa",
                                yearAndLocation: "2014, republished in 2017"
                            }, {
                                language: "en",
                                title: "Crashlytics: How to detect and fix crashes in your app",
                                link: "https://medium.com/@victorlaertedoliveira/archive-crashlytics-how-to-detect-and-fix-crashes-in-your-app-9c0821b8218",
                                yearAndLocation: "2014, republished in 2017"
                            }, {
                                language: "en",
                                title: "Android: How to make Android gallery ignore the images of your app?",
                                link: "https://medium.com/@victorlaertedoliveira/archive-android-how-to-make-android-gallery-ignore-the-images-of-your-app-9563ab2e7f05",
                                yearAndLocation: "2014, republished in 2017"
                            },
                        ],
                    }],
                }

                this.get = function (key) {

                    return strings[key];
                };

                this.getRandom = function (key) {

                    var random = strings[key][Math.floor(Math.random() * strings[key].length)];
                    return random;
                };

            }
        ]);
})(window.angular);