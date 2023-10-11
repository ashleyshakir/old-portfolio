import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from '../work/work.component';
import { ProjectDetailComponent } from './project-detail.component';

const routes: Routes = [
    { path: 'work', component: WorkComponent },
    { path: 'work/:projectId', component: ProjectDetailComponent },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class ProjectDetailComponentRoutingModule { }