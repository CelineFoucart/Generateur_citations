import { Quote } from "./Entity/Quote";
import { data } from "./Database/database";

const quote:Quote = new Quote(data[0].author, data[0].content, data[0].source, data[0].them);
console.log(quote);

// onload => une citation aléatoire
// obtenir une nouvelle citation aléatoire ou par thème avec le formulaire.
