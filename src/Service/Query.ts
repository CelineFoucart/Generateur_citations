import { data, themes } from "../Database/database";
import { Quote } from "../Entity/Quote";
import { Theme } from "../Entity/Theme";

export class Query {

    public random():Quote {
        const index = this.aleat(this.getLastQuoteId());
        return this.hydrateEntity(data[index])
    }

    public getByTheme(themeId:number):Quote {
        const lastThemeId:number = this.getLastThemeId();
        if(themeId > lastThemeId) {
            themeId = lastThemeId;
        }
        const byTheme = data.filter(element => element.theme === themeId);
        const item = byTheme[this.aleat(byTheme.length - 1)];
        return this.hydrateEntity(item);
    }

    public getThemes(): Theme[] {
        const items:Theme[] = [];
        themes.forEach(element => {
            items.push(new Theme(element.id, element.name));
        });
        return items;
    }

    protected hydrateEntity(item:{quote:string, author:string, theme:number}):Quote {
        const quote = new Quote(item.author, item.quote, item.theme);
        const theme = themes[item.theme - 1];
        quote.theme = new Theme(theme.id, theme.name);
        return quote;
    }

    protected aleat(max:number):number {
        return Math.floor(Math.random() * (max - 0)) + 1
    }

    protected getLastQuoteId():number {
        return data.length - 1;
    }

    protected getLastThemeId():number {
        const lastIndex:number = themes.length;
        return themes[lastIndex - 1].id;
    }
}