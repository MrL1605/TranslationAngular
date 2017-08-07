/**
 * Created by Lalit Umbarkar
 * Date: 4/8/17
 * Project: translation-ang
 */

import {Component, OnInit} from "@angular/core";
import {BaseService} from "../services/base.service";
import {TrlHolder} from "../services/trl-holder.service";

@Component({
    selector: "base-container",
    template: require("../templates/base-container.template.html"),
})
export class BaseContainerComponent implements OnInit {

    trlLang: string = this.trlService.currentLang + "";
    trlLangs: Array<string> = this.trlService.trlLanguages;
    childArr: Array<any> = [0];

    constructor(private service: BaseService,
                private trlService: TrlHolder) {
    }

    ngOnInit() {

        /**
         * One time network call for all JSON translation files.
         * And add the content to translations variable in TrlHolder Service.
         * */
        this.trlService.trlFiles.forEach((file) => {
            this.service.getTranslationFile(file)
                .subscribe(
                    (info) => this.trlService.translations.push(info),
                    (err) => console.error("Error Occurred in retrieving File"))
        })

    }

    alterLang() {

        /** Trigger the trigger as soon as there is change in Language. */
        this.trlService.currentLang = parseInt(this.trlLang);
        this.trlService.langChangeTrigger.next();
    }

    addChild() {
        this.childArr.push(0);
    }

    getLangValue(ind: number) {
        if (ind != -1) {
            return this.trlLangs[ind];
        } else {
            return this.trlService.trlDefaultLang;
        }
    }


}

