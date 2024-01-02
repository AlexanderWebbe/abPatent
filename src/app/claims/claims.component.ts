import { Component } from "@angular/core";

@Component({
    selector: 'ab-claims',
    styleUrls: ['./claims.component.css'],
    templateUrl: './claims.component.html',
})
export class ClaimsComponent {
    pageTitle: string = "Claims";
    claims: string = '';
    claimsError: boolean = true;
    claimsErrorMessage: string = 'Placeholder for general errors raised from the REST API';

    processClaims() {

        // Validate Input

        // Provide input to Cognative API

        // Provide an output to be provided to the next step

    }

}