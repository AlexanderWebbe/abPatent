import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HistoryListComponent } from "./history/history-list.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClaimsComponent } from "./claims/claims.component";
import { TermsComponent } from "./terms/terms.component";
import { TermDefinitionsComponent } from "./termDefinitions/termDefinitions.component";

@NgModule({
  declarations: [AppComponent, HistoryListComponent, ClaimsComponent, TermsComponent, TermDefinitionsComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
