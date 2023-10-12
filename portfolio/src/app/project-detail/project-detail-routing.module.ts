import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { WorkComponent } from '../work/work.component';
import { ProjectDetailComponent } from './project-detail.component';

const routes: Routes = [
    { path: 'work', component: WorkComponent },
    { path: 'work/:projectId', component: ProjectDetailComponent },
  ];
  const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload'
  };
  @NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
  })
export class ProjectDetailComponentRoutingModule { }