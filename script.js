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
		auteur: "Carl Sagan",
		date: 2017,
		tags: "Littérature, Innovation, Astronomie",
		couleurdefond: "#e5a044",
		couleurdepolice: "#0f294c",
		origine: "Le Monde",
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
let CitationText = document.querySelector("#titre");
let phrase = document.querySelector("#info");

let compteur = 0;
Button.addEventListener("click", () => {
	compteur = compteur + 1;
	if (compteur == Citation.length) {
		compteur = 0;
	}
	console.log(Citation[compteur].auteur);

	CitationText.textContent = Citation[compteur].citation;

	phrase.textContent =
		Citation[compteur].auteur +
		", " +
		Citation[compteur].date +
		", " +
		Citation[compteur].origine;

	document.body.style.backgroundColor = Citation[compteur].couleurdefond;
	Button.style.backgroundColor = Citation[compteur].couleurdepolice;
});

CitationText.textContent = Citation[compteur].citation;
phrase.textContent =
	Citation[compteur].auteur +
	", " +
	Citation[compteur].date +
	", " +
	Citation[compteur].origine;

let couleur = (document.body.style.backgroundColor =
	Citation[compteur].couleurdefond);

let couleurBtn = (Button.style.backgroundColor =
	Citation[compteur].couleurdepolice);

setInterval(() => {
	compteur = compteur + 1;
	if (compteur == Citation.length) {
		compteur = 0;
	}
	console.log(Citation[compteur].auteur);

	let CitationText = document.querySelector("#titre");
	CitationText.textContent = Citation[compteur].citation;

	let phrase = document.querySelector("#info");
	phrase.textContent =
		Citation[compteur].auteur +
		", " +
		Citation[compteur].date +
		", " +
		Citation[compteur].origine;

	let couleur = (document.body.style.backgroundColor =
		Citation[compteur].couleurdefond);

	let couleurBtn = (Button.style.backgroundColor =
		Citation[compteur].couleurdepolice);
}, 10000);
