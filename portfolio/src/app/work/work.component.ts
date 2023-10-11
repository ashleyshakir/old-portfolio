import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { ProjectDetailComponentRoutingModule } from '../project-detail/project-detail-routing.module';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  projects: any[] =[];
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }
}
