import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {AuthComponent} from './auth/auth.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminPanelModule} from './admin-panel/admin-panel.module';
import {AuthGuard} from './auth/auth.guard';
import {AdminPanelGuard} from './admin-panel/admin-panel.guard';
import {AdminPanelComponent} from './admin-panel/admin-panel/admin-panel.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {ChatComponent} from './chat/chat/chat.component';
import {TableComponent} from './table/table.component';
import {TabletwoComponent} from './tabletwo/tabletwo.component';

const routes: Routes = [
  {path: '', redirectTo: '/chat', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule),
    data: {animation: 'chat'},
    canActivate: [AuthGuard]
  },
  {path: 'admin', component: AdminPanelComponent, canActivate: [AdminPanelGuard]},
  {path: 'table', component: TableComponent},
  {path: 'tabletwo', component: TabletwoComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignupComponent, AuthComponent, TableComponent];
