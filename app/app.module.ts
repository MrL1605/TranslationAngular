import {NgModule} from "@angular/core";
import {AppRouter} from "./app.router";
import {BaseContainerComponent} from "./components/base-container.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {ChildComponent} from "./components/child.component";
import {TrlHolder} from "./services/trl-holder.service";
import {BaseService} from "./services/base.service";
import {TrlDirective} from "./directives/trl.directive";
import {TrlPipe} from "./directives/trl.pipe";



@NgModule({
    declarations: [
        BaseContainerComponent, ChildComponent,
        TrlDirective, TrlPipe
    ],
    imports: [
        BrowserModule, FormsModule, HttpModule, AppRouter
    ],
    providers: [
        BaseService, TrlHolder
    ],
    bootstrap: [
        BaseContainerComponent
    ]
})
export class AppModule {
}


