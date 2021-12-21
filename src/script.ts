import { Quote } from "./Entity/Quote";
import { Theme } from "./Entity/Theme";
import { Insert } from "./Service/Insert";
import { Query } from "./Service/Query";

const query:Query = new Query();
let quote:Quote = query.random();
const themes:Theme[] = query.getThemes();
const insert = new Insert(["theme", "content", "author"]);

window.onload = () => {   
    insert.quote(quote); 
    insert.themes(themes, 'select');
    document.querySelector('#submit').addEventListener('click', (event) => {
        event.preventDefault();
        const target:HTMLSelectElement = document.querySelector('#select');
        const value = (target === null) ? 0 : target.selectedIndex;
        if(value === 0) {
            quote = query.random();
        } else {
            quote = query.getByTheme(value);
        }
        insert.quote(quote);
    });
}
