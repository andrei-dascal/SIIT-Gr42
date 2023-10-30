import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { CookieStorageService } from './services/cookie-storage.service';
import { MenuComponent } from './components/menu/menu.component';
import { ToggleComponent } from './components/shared/toggle/toggle.component';
import { TextContentService } from './services/text-content.service';
import { ArticleComponent } from './components/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ToggleComponent,
    ArticleComponent,
    BlogComponent,
    HighlightDirective,
    DefaultImagePipe
  ],
  exports: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [UserService, CookieStorageService, TextContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
