/**
 * Created by Lalit Umbarkar
 * Date: 6/8/17
 * Project: translation-ang
 */

import {Injectable} from "@angular/core";
import {ReplaySubject} from "rxjs/ReplaySubject";
import "rxjs/Rx";

@Injectable()
export class TrlHolder {

    trlFiles: Array<string> = ["locale-es.json", "locale-du.json", "locale-in.json"];
    trlLanguages: Array<string> = ["Spanish", "Dutch", "Hindi"];
    trlDefaultLang: string = "English";
    translations: Array<any> = [];
    currentLang: number = -1;
    langChangeTrigger: any = new ReplaySubject(1);


    getTranslatedStr(text: string): string {
        let langIndex = this.currentLang;
        if (langIndex == -1 || text.trim() === "") {
            return text;
        }
        console.log("Running on - " + text);

        // Check if data for exact string exists
        let trlData = this.translations[langIndex].translations;
        if (trlData[text]) {
            return trlData[text].value;
        }
        // If not found get each word and translate it
        let resultStr = "", splitedText = text.split(" ");
        if (splitedText.length !== 1) {
            for (let split of splitedText) {
                resultStr += this.getTranslatedStr(split) + " ";
            }
            console.log("After loop ", text, resultStr);
            return resultStr;
        }
        console.log("Not found for - " + text);
        return text;
    }
}
