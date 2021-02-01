import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';

//Componentes


const routes: Routes = [

    {
        path: 'home', component: PagesComponent,
        children: [
                 { path: '', component: HomeComponent },
                 { path: 'register', component: RegisterComponent },
                 { path: 'table', component: TableComponent },
            //   //  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
