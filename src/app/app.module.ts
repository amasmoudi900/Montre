import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { DealsComponent } from './components/deals/deals.component';
import { NewsComponent } from './components/news/news.component';
import { BrandsComponent } from './components/brands/brands.component';
import { MontreComponent } from './components/montre/montre.component';
import { AddMontreComponent } from './components/add-montre/add-montre.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListMontresComponent } from './components/list-montres/list-montres.component';
import { AdminComponent } from './components/admin/admin.component';
import { InMemoryWebApiModule, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { DisplayMontreComponent } from './components/display-montre/display-montre.component';
import { UpdateMontreComponent } from './components/update-montre/update-montre.component';
import { LoginComponent } from './components/login/login.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { MontreService } from './services/montre.service';
import { AuthGuardService } from './services/auth-guard.service';
import { SearchMontreComponent } from './components/search-montre/search-montre.component';
import { SignupComponent } from './components/signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    OurServicesComponent,
    FeaturedProductsComponent,
    FashionComponent,
    DealsComponent,
    NewsComponent,
    BrandsComponent,
    MontreComponent,
    AddMontreComponent,
    HomeComponent,
    ListMontresComponent,
    AdminComponent,
    DisplayMontreComponent,
    UpdateMontreComponent,
    LoginComponent,
    LoaderComponent,
    PageNotFoundComponent,
    SearchMontreComponent,
    SignupComponent ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule
  ],
  providers: [AuthService, DataService, MontreService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
