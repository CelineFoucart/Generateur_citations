import { Theme } from "./Theme";

export class Quote {
    author:string;
    content:string;
    themeId:number;
    theme:Theme|null;

    constructor(author:string, content:string, themeId:number, theme?:Theme|null) {
        this.author = author;
        this.content = content;
        this.themeId = themeId;
        if(theme) {
            this.theme = theme;
        }
    }
}