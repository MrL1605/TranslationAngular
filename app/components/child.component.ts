/**
 * Created by Lalit Umbarkar
 * Date: 6/8/17
 * Project: translation-ang
 */

import {Component} from "@angular/core";


@Component({
    selector: "child",
    template: require("../templates/child.template.html")
})
export class ChildComponent {

    dynamicText: string = "Dynamic Text here - Hello World";

    constructor() {
    }

}
