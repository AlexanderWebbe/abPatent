import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from "@angular/material/stepper";

import { AppComponent } from "./app.component";
import { HistoryListComponent } from "./history/history-list.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClaimsComponent } from "./claims/claims.component";
import { TermsComponent } from "./terms/terms.component";
import { TermDefinitionsComponent } from "./termDefinitions/termDefinitions.component";


@NgModule({
  declarations: [AppComponent, HistoryListComponent, ClaimsComponent, TermsComponent, TermDefinitionsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, MatFormFieldModule, MatInputModule, MatStepperModule ],
  bootstrap: [AppComponent]
})
export class AppModule {}
