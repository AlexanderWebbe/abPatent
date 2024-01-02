import { Component } from "@angular/core";

@Component({
    selector: 'ab-termDefinitions',
    styleUrls: ['./termDefinitions.component.css'],
    templateUrl: './termDefinitions.component.html'
})
export class TermDefinitionsComponent {
    pageTitle: string = "Term Definitions";
    termDefinitions: string = '';
    termDefinitionsError: boolean = true;
    termDefinitionsErrorMessage: string = 'Placeholder for general errors raised from the REST API';

    processTermDefinitions() {

        // Validate Input

        // Provide input to Cognative API

        // Provide an output to be provided to the next step

    }

}