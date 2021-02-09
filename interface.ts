interface superHero {
    name: string;
    skills: string[];
    life: number;
}

const spiderman: superHero = {
     name: "Peter Parker",
     skills: ["strong", "agile", "spider web", "wall climb"] ,
     life: 100,

}

const batman: superHero = {
    name: "bruce wane",
    skills: ["money", "agil"] ,
    life: 150,
}
console.log(spiderman,batman);