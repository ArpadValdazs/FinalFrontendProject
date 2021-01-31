import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {AuthComponent} from './auth/auth.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminPanelModule} from './admin-panel/admin-panel.module';
import {AuthGuard} from './auth/auth.guard';
import {AdminPanelGuard} from './admin-panel/admin-panel.guard';
import {AdminPanelComponent} from './admin-panel/admin-panel/admin-panel.component';

const routes: Routes = [
  {path: '', component: SignupComponent},
  {path: 'auth', component: AuthComponent},
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule),
    data: {animation: 'chat'},
    canActivate: [AuthGuard]
  },
  {path: 'admin', component: AdminPanelComponent, canActivate: [AdminPanelGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignupComponent, AuthComponent];
