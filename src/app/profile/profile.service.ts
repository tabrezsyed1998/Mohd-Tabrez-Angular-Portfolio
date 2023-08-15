import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor(private http: HttpClient) {}

  projects: any = [
    {
      id: 1,
      title: 'Personal Portfolio',
      desc: '',
      livedemo: '',
      githurl: '',
      imgUrl: 'assets/images/portfolioImage.png',
      tech: 'Angular 12',
    },
    {
      id: 2,
      title: 'E-commerce App Using React(Coming Soon)',
      desc: 'Coming Soon',
      livedemo: '#',
      githurl: '#',
      imgUrl: 'assets/images/comingSoon.jpg',
      tech: 'React 18,NextJs,Redux',
    },
  ];
  about2 = `Software Developer with 1.5 years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions, React, TypeScript, Javascript, Bootstrap and UI with Responsive Designs .
  Have intermediate understanding of Java, Python, Jquery, MongoDB, NodeJS, and MYSQL . 
  Have good understanding of Problem Solving, DBMS, Operating Systyem, Computer Network .
  Experience with Git, GitHub and JIRA`;

  about =
    'A dynamic and adaptable software professional with proficiency in quickly mastering new technologies. I thrive in team settings, consistently contributing and offering essential support. I am also distinguished by my articulate communication skills, ensuring clarity and precision in conveying complex ideas.';
  resumeurl = 'https://docs.google.com/document/d/1WOh7yP1OE2PR1OdHLuO3kZGsKpBVKiP3/edit';

  skillsData: any = [
    {
      id: '1',
      skill: 'ANGULAR 2+',
      progress: '85%',
    },
    {
      id: '2',
      skill: 'REACT JS',
      progress: '75%',
    },
    {
      id: '3',
      skill: 'TypeScript',
      progress: '80%',
    },
    {
      id: '4',
      skill: 'JAVASCRIPT JQUERY',
      progress: '80%',
    },
    {
      id: '5',
      skill: 'NodeJs',
      progress: '60%',
    },
    {
      id: '6',
      skill: 'Java,C and Python',
      progress: '60%',
    },
  ];

  educationData: any = [
    {
      id: '1',
      from_to_year: '2015 - 2019',
      education: "Bachelor's Degree",
      stream: 'Bachelor of Engineering',
      info: `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      institution: 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD',
    },
    {
      id: '2',
      from_to_year: '2013 - 2015',
      education: 'Higher Secondary',
      stream: 'Science and Mathematics',
      institution: 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      info: `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`,
    },
    {
      id: '3',
      from_to_year: '2012 - 2013',
      education: 'Secondary  School',
      stream: 'Science and Mathematics',
      institution: 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      info: `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`,
    },
  ];
  exprienceData: any = [
    {
      id: 1,
      company: 'Aloha Technology',
      location: 'Pune Maharashtra',
      timeline: '15 March 2022 to Present',
      role: 'Software Developer',
      about:
        'Aloha Technology is a Business Outsourcing & IT Services Provider offering application development, product engineering and business services for any industry.',
      work: 'Collaborated on an Angular-based healthcare application, emphasizing on adding functionalities and enhancing user experience .Contributed to the development of a React/Next-driven domain registration platform, integrating various software components and third-party tools to boost platform efficiency and interactivity .Addressed software issues, adapted the application to new hardware, and revamped interfaces for optimal usability .Played a pivotal role in debugging and ensuring consistent software functionality .Applied hands-on expertise with Git, GitHub, and JIRA, enhancing version control and project management .Possess a strong background in troubleshooting, debugging, and upgrading software to cater to evolving requirements .Technologies: Angular, React, Next ',
    },
  ];

  extraCircularInfo: any = [
    {
      id: 1,
      title: 'Github',
      description: '',
      img: '',
      url: '',
    },
 
  ];
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }
  angularTopics =`All concepts of Angular 2 to Latest Version .
  TypeScript .
  Angular Material .
  BootStrap . 
  Rxjs .
  Problem Solving & Coding Skill .
  Web API Integration .
  Project Training`;
  webdevelopementTopics =`All concepts of HTML/HTML5 .
  Problem Solving & Coding Skill .
  JavaScript .
  CSS/CSS3 .
  BootStrap .
  SASS/SCSS .
  Responsive Design .
  Project Training`

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
