import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import {ClipboardModule} from '@angular/cdk/clipboard';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from "@angular/material/stepper";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ActionsComponent } from "./actions/actions.component";
import { ClaimsComponent } from "./claims/claims.component";
import { HistoryListComponent } from "./history/history-list.component";
import { TermsComponent } from "./terms/terms.component";
import { TermDefinitionsComponent } from "./termDefinitions/termDefinitions.component";


@NgModule({
  declarations: [AppComponent, ActionsComponent, HistoryListComponent, ClaimsComponent, TermsComponent, TermDefinitionsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ClipboardModule, FormsModule, HttpClientModule, MatFormFieldModule, MatInputModule, MatStepperModule ],
  bootstrap: [AppComponent]
})
export class AppModule {}
