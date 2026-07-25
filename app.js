const verkenningen = [

"Loop vandaag een andere route.",
"Maak een foto van iets moois.",
"Vraag iemand naar zijn passie.",
"Luister naar muziek die je niet kent.",
"Maak iets met je handen.",
"Ga 10 minuten wandelen zonder telefoon.",
"Lees iets buiten je normale interesse.",
"Schrijf drie dingen op waar je nieuwsgierig naar bent."

];


function nieuweVerkenning(){

let keuze =
verkenningen[
Math.floor(Math.random()*verkenningen.length)
];

document.getElementById("challenge").innerHTML=keuze;

}


nieuweVerkenning();



function opslaan(){

let dag={

datum:new Date().toISOString(),

energie:
document.getElementById("energie").value,

rust:
document.getElementById("rust").value,

verbonden:
document.getElementById("verbonden").value,


dagtekst:
document.getElementById("dagtekst").value,


energiebron:
document.getElementById("energiebron").value,


nieuwsgierig:
document.getElementById("nieuwsgierig").value,


onthouden:
document.getElementById("onthouden").value

};


let bestaand =
JSON.parse(localStorage.getItem("kompas") || "[]");


bestaand.push(dag);


localStorage.setItem(
"kompas",
JSON.stringify(bestaand)
);


document.getElementById("melding").innerHTML=
"✔ Opgeslagen";

}
