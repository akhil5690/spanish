import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './WIDGETS/home-page/home-page.component';
import { MainPageComponent } from './WIDGETS/main-page/main-page.component';
import { LoginPageComponent } from './WIDGETS/login-page/login-page.component';
import { ForgetpasswordPageComponent } from './WIDGETS/forgetpassword-page/forgetpassword-page.component';
import { RegisterPageComponent } from './WIDGETS/register-page/register-page.component';
import { TutorialPageComponent } from './WIDGETS/tutorial-page/tutorial-page.component';
import { AlphabetsPageComponent } from './WIDGETS/alphabets/alphabets-page/alphabets-page.component';

const routes: Routes = [
  {path:'home-page',component:HomePageComponent},
  {path:'main-page',component:MainPageComponent},
  {path:'login-page',component:LoginPageComponent},
  {path:'forgetpassword-page',component:ForgetpasswordPageComponent},
  {path:'register-page',component:RegisterPageComponent},
  {path:'tutorial-page',component:TutorialPageComponent},
  {path:'alphabets-page',component:AlphabetsPageComponent},


  {path:'',redirectTo:'home-page',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[HomePageComponent,MainPageComponent, LoginPageComponent,ForgetpasswordPageComponent,RegisterPageComponent,TutorialPageComponent ];
