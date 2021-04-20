import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuardUserService } from "./services/auth-guard-user.service";
import { AuthGuardAdminService } from "./services/auth-guard-admin.service";
import { AuthenticationService } from "./services/authentication.service";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { ShopComponent } from "./shop/shop.component";
import { LearnComponent } from "./learn/learn.component";
import { ContactComponent } from "./contact/contact.component";
import { AdminComponent } from "./admin/admin.component";
import { ManageUsersComponent } from "./manage-users/manage-users.component";
import { ManagePianosComponent } from "./manage-pianos/manage-pianos.component";
import { UpdateProfileComponent } from "./update-profile/update-profile.component";
import { CreatePianoComponent } from "./create-piano/create-piano.component";
import { GrandPianosComponent } from "./grand-pianos/grand-pianos.component";
import { UprightPianosComponent } from "./upright-pianos/upright-pianos.component";
import { DigitalPianosComponent } from "./digital-pianos/digital-pianos.component";
import { BuyPianoComponent } from "./buy-piano/buy-piano.component";
//import { UpdatePianoComponent } from "./update-piano/update-piano.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    {
        path: "profile",
        component: ProfileComponent,
        canActivate: [AuthGuardUserService]
    },
    { path: "shop", component: ShopComponent },
    { path: "learn", component: LearnComponent },
    { path: "contact", component: ContactComponent },
    {
        path: "admin",
        component: AdminComponent,
        canActivate: [AuthGuardAdminService, AuthGuardUserService]
    },
    {
        path: "manageUsers",
        component: ManageUsersComponent,
        canActivate: [AuthGuardAdminService, AuthGuardUserService]
    },
    {
        path: "managePianos",
        component: ManagePianosComponent,
        canActivate: [AuthGuardAdminService, AuthGuardUserService]
    },
    {
        path: "updateProfile",
        component: UpdateProfileComponent,
        canActivate: [AuthGuardUserService]
    },
    {
        path: "createPiano",
        component: CreatePianoComponent,
        canActivate: [AuthGuardAdminService, AuthGuardUserService]
    },
    /*{
        path: "updatePiano",
        component: UpdatePianoComponent,
        canActivate: [AuthGuardAdminService, AuthGuardUserService]
    }*/
    {
        path: "grandPianos",
        component: GrandPianosComponent
    },
    {
        path: "uprightPianos",
        component: UprightPianosComponent
    },
    {
        path: "digitalPianos",
        component: DigitalPianosComponent
    },
    {
        path: "buyPiano",
        component: BuyPianoComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        ProfileComponent,
        ShopComponent,
        LearnComponent,
        ContactComponent,
        AdminComponent,
        ManageUsersComponent,
        ManagePianosComponent,
        UpdateProfileComponent,
        CreatePianoComponent,
        GrandPianosComponent,
        UprightPianosComponent,
        DigitalPianosComponent,
        BuyPianoComponent
        //UpdatePianoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        AuthenticationService,
        AuthGuardUserService,
        AuthGuardAdminService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
