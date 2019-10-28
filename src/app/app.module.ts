import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestBuilderComponent } from './test-builder/test-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestBuilderPreviewComponent } from './test-builder/test-builder-preview/test-builder-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBuilderComponent,
    TestBuilderPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
