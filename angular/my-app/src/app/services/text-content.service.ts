import { Injectable } from "@angular/core";
import { Language } from "../models/language.model";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { TextContent } from "../models/text-content.model";

@Injectable()
export class TextContentService {

    public defaultLanguage: Language = Language.English;

    constructor(private httpClient: HttpClient) {
    }

    private apiTextContent: string = "http://localhost:3000/textContent"

    public getTextContent(language: Language): Observable<TextContent> {
        return this.httpClient.get<TextContent[]>(`${this.apiTextContent}?Language=${language}`).pipe(map((content: TextContent[]) => {
            return content[0];
        }));
    }
}