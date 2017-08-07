/**
 * Created by Lalit Umbarkar
 * Date: 5/8/17
 * Project: translation-ang
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/Rx";

@Injectable()
export class BaseService {

    constructor(private http: Http) {
    }

    getTranslationFile(fileName: string): Observable<any> {
        return this.http.get("/cdn/" + fileName)
            .map((resp: any) => resp.json())
            .catch((err: any) => err);
    }

}


