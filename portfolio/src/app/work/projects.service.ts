import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class ProjectsService {
    private projects = [
        {
            id: 'project1',
            software: 'Java | Spring Boot | Rest Assured',
            title: 'Photo Fiesta API',
            paragraph1: "This project embodies both the techincal and soft skills gained throughout my development journey. In collaboration with two developers, our mission was to create an innovative backend application for streamlined photo management. Our approach prioritized the end user, with meticulous crafting of user stories and acceptance criteria. We embraced branch-based collaboration to maintain a cohesive, conflict-free codebase. Ensuring top-notch code quality, we integrated Cucumber testing, covering public and protected endpoints, rigorous token testing, and robust unit testing.",
            paragraph2: "Our RESTful API empowers Photo Fiesta users to securely create accounts and manage photos using a JWT-based authentication system. Once logged in, users can seamlessly add, update, or delete photos within albums, as well as explore their collections.",
            githubUrl: 'https://github.com/ashleyshakir/photomanagementapp.git',
            liveUrl: '',
            imageLogoUrl: './assets/photofiesta.png',
            mockupImageUrls: ['./assets/photo-fiesta-endpoints.png']
        },
        {
            id: 'project2',
            software: 'Javascript | HTML | CSS',
            title: 'Tic Tac Toe Game',
            paragraph1: "This project was a pivotal milestone in my General Assembly bootcamp journey. It entailed the creation of a web application entirely from scratch, utilizing HTML, CSS, and Vanilla JavaScript. The primary objective was to implement game logic, resulting in a dynamic and engaging two-player Tic Tac Toe game for local play.",
            paragraph2: "In addition to the core game functionality, I introduced several enhancements to elevate the user experience. Notable features include a leaderboard that meticulously tracks player names and win counts. This data is persistently stored in local storage, ensuring continuity across sessions. To further captivate users, I incorporated modern sound and color effects.",
            githubUrl: 'https://github.com/ashleyshakir/tic-tac-toe.git',
            liveUrl: 'https://ashleyshakir.github.io/tic-tac-toe/',
            imageLogoUrl: './assets/tic-tac-toe-project.png',
            mockupImageUrls: ['./assets/laptop-ttt.png','./assets/iphone-ttt.png','./assets/ipad-ttt.png']
        },
        {
            id: 'project3',
            software: 'Java | Spring Boot | Spring Security',
            title: 'Team Management API',
            paragraph1: "Introducing the Team Management Web Application - a robust monolithic backend powered by Spring Boot. This dynamic system boasts a RESTful API that empowers administrators with the ability to effortlessly create and oversee youth sports teams. From user registration to team creation, coach assignments, and player additions.",
            paragraph2: "My goal with this project was to simplify team management, providing coaches and team managers with a user-friendly tool, while also ensuring that players can easily access their team information and coaches. What makes this project stand out? My unwavering commitment to security. I prioritize the privacy of team members: players, coaches, and managers. With advanced Spring Security and fortified JSON Web Tokens, your data is securely protected.",
            githubUrl: 'https://github.com/ashleyshakir/team_management.git',
            liveUrl: '',
            imageLogoUrl: './assets/team-management.png',
            mockupImageUrls: ['./assets/team-management-endpoints.png']
        }
    ];

    getProjects() {
      return this.projects;
    }

    getProjectById(id: string) {
        return this.projects.find(project => project.id === id);
    }

  }