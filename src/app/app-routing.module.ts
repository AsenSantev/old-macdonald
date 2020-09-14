import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewComponent } from "./view/view.component";
import { CreateComponent } from "./create/create.component";

const routes:Routes = [
    {path: 'view', component: ViewComponent},
    {path: 'create', component: CreateComponent},
    {path: '', redirectTo: '/view', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
