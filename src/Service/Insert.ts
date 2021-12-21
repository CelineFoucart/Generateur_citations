import { Quote } from "../Entity/Quote";
import { Theme } from "../Entity/Theme";

export class Insert {
    private ids:string[];

    constructor(ids:string[]) {
        this.ids = ids;
    }

    public quote(quote: Quote):void {
        this.ids.forEach(id => {
            const element = document.querySelector(`#${id}`);
            if(element === null) {
                console.error(`the element ${id} cannot be null`);
            } else {
                if(id === "theme") {
                    element.innerHTML = quote.theme.name;
                } else {
                    element.innerHTML = quote[id as keyof(Quote)] as string;
                }  
            }
        });
    }

    public themes(items:Theme[], id:string):void {
        const select = document.querySelector(`#${id}`);
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = `${item.id}`;
            option.innerHTML = item.name;
            select.appendChild(option);
        });
    }
}