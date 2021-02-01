import { NgModule } from '@angular/core';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [

  // path: 'dashboard': PagesRouting
  // path: 'login': authRouting
  // path: 'register': authRouting
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
