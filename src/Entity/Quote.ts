export class Quote {
    _author:string;
    _content:string;
    _source:string;
    _them:string;

    constructor(author:string, content:string, source:string, them:string) {
        this._author = author;
        this._content = content;
        this._source = source;
        this._them = them;
    }

    get author():string {
        return this._author;
    }

    get content():string {
        return this._content;
    }

    get source():string {
        return this._source;
    }

    get them():string {
        return this._them;
    }
}