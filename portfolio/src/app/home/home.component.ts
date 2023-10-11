import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../work/projects.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  projects: any[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }

}
