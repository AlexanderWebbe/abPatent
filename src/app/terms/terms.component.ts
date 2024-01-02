import { Component } from "@angular/core";

@Component({
    selector: 'ab-terms',
    styleUrls: ['./terms.component.css'],
    templateUrl: './terms.component.html'
})
export class TermsComponent {
    pageTitle: string = "Terms";
    terms: string = '';
    termsError: boolean = true;
    termsErrorMessage: string = 'Placeholder for general errors raised from the REST API';

    processTerms() {

        // Validate Input

        // Provide input to Cognative API

        // Provide an output to be provided to the next step

    }


}