/**
 * Created by Lalit Umbarkar
 * Date: 6/8/17
 * Project: translation-ang
 */


import {Directive, ElementRef, OnInit, Renderer2} from "@angular/core";
import {TrlHolder} from "../services/trl-holder.service";


/**
 * Usage - <tag trl> Text to translate. </tag>
 *
 *
 * Every time a new tag is brought into view, it will trigger
 * ngOnInit(), and consequently it will check if language is default or not.
 *  - If not first replace text with translated text.
 *  - If yes, skip above step.
 *
 * Then subscribe to trigger from TrlHolder's Subject, so that it can start translate
 * when language is changed.
 *
 * NOTE:    DO NOT USE Directive and Pipe simultaneously.
 *          It will break other Pipes, for some unknown error.
 * */
@Directive({
    selector: "[trl]"
})
export class TrlDirective implements OnInit {

    trlEngText: string = "";

    constructor(private el: ElementRef,
                private renderer: Renderer2,
                private trlService: TrlHolder) {
    }

    ngOnInit() {
        // First take the text inside current Directive
        this.trlEngText = this.el.nativeElement.textContent.trim();
        // Check if language is default, else translate immediately.
        if (this.trlService.currentLang !== -1) {
            this.el.nativeElement.textContent = this.trlService.getTranslatedStr(this.trlEngText);
        }

        // Subscribed to Trigger so when ever change occurs,
        // translation must trigger.
        this.trlService.langChangeTrigger.subscribe((info: any) => {
            this.el.nativeElement.textContent = this.trlService.getTranslatedStr(this.trlEngText);
        })
    }


}

