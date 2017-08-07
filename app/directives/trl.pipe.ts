/**
 * Created by Lalit Umbarkar
 * Date: 6/8/17
 * Project: translation-ang
 */

import {Pipe, PipeTransform} from "@angular/core";
import {TrlHolder} from "../services/trl-holder.service";

/**
 * Usage - {{ varToTranslate | trl }}
 *
 * As this pipe is impure it will trigger transform more number of times,
 * but does not work without it as no change can occur when language
 * is changed.
 *
 * */
@Pipe({name: 'trl', pure: false})
export class TrlPipe implements PipeTransform {

    constructor(private trlService: TrlHolder) {
    }

    transform(text: string): string {
        return this.trlService.getTranslatedStr(text);
    }
}
