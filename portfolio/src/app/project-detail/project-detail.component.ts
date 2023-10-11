import { Component,OnInit } from '@angular/core';
import { ProjectsService } from '../work/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: any;
  constructor(private projectService: ProjectsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = params['projectId'];
      this.project = this.projectService.getProjectById(projectId);
    });
  }
}
