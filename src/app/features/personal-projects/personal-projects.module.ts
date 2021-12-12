import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalProjectsComponent } from './personal-projects.component';
import { PersonalProjectsRoutingModule } from './personal-projects-routing.module';

@NgModule({
  declarations: [PersonalProjectsComponent],
  imports: [CommonModule, PersonalProjectsRoutingModule],
})
export class PersonalProjectsModule {}
