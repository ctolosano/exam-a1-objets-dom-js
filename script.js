const Citation = [
	{
		citation: "Un esprit curieux est un esprit sans limites.",
		auteur: "Neil deGrasse Tyson",
		date: 1792,
		tags: "",
		couleurdefond: "#44e5ca",
		couleurdepolice: "#4c0f19",
		origine: "A great Book!",
	},
	{
		citation: "L’imagination gouverne le monde.",
		auteur: "Marie Curie",
		date: 1792,
		tags: "",
		couleurdefond: "#e55744",
		couleurdepolice: "#0f454c",
		origine: "",
	},
	{
		citation: "Le bonheur dépend de nous-mêmes.",
		auteur: "Socrate",
		date: 1730,
		tags: "Innovation, Astronomie",
		couleurdefond: "#69e544",
		couleurdepolice: "#3e0f4c",
		origine: "",
	},
	{
		citation: "Nous sommes faits de poussière d’étoiles.",
		auteur: "Socrate",
		date: 1730,
		tags: "Innovation, Astronomie",
		couleurdefond: "#69e544",
		couleurdepolice: "#3e0f4c",
		origine: "",
	},
	{
		citation:
			"Les ordinateurs sont inutiles, ils ne savent que donner des réponses.",
		auteur: "Albert Einstein",
		date: 1907,
		tags: "",
		couleurdefond: "#bde544",
		couleurdepolice: "#1e0f4c",
		origine: "Das Computer",
	},
];
const Button = document.getElementById("button");
const mainElement = document.getElementById("main");

for (let i = 0; i < Citation.length; i++) {
    let info = Citation[i];

    let oui = CreateCitation(
        info.citation,
        info.auteur,
        info.date,
        info.tags,
        info.couleurdefond,
        info.couleurdepolice,
        info.origine
    );

    

    Button.addEventListener("click", () => {});
} 
function CreateCitation(
	citation,
	auteur,
	date,
	tags,
	couleurdefond,
	couleurdepolice,
	origine
) {
	let CitationText = document.getElementById("titre");
	CitationText.textContent = citation;

	let phrase = document.getElementById("infos");
	phrase.tetContent = auteur + ", " + date + ", " + origine; 

    return Oui  
}

