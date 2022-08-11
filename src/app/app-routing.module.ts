import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelperComponent } from './knowledge-base/helper/helper.component';
import { CookiespolicyComponent } from './views/cookies-policy/cookies-policy.component';
import { LoginComponent } from './views/login/login.component';
import { NotfoundComponent } from './views/not-found/not-found.component';
import { PrivacypolicyComponent } from './views/privacy-policy/privacy-policy.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { TermsComponent } from './views/terms/terms.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'help', component: HelperComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ResetPasswordComponent},
  {path: 'cookies-policy', component: CookiespolicyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'not-found', component: NotfoundComponent},
  {path: 'privacy-policy', component: PrivacypolicyComponent},
  {path: 'terms-and-conditions', component: TermsComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
 HomeComponent,
 HelperComponent,
  RegistrationComponent,
 LoginComponent,
 ResetPasswordComponent,
 CookiespolicyComponent,
  PrivacypolicyComponent,
  TermsComponent,
 NotfoundComponent
]
