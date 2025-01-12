//  1.
var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};
console.log(monster.name);
console.log(monster.types[1]);




var pokemon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

//  2.
for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].id % 3 === 0) {
        console.log(pokemon[i].name);
    }
}

//  3.
for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].types.includes("poison")) {
        if (pokemon[i].types.length === 1) {
            console.log(pokemon[i].name);
        }
    }
}

//  4.
for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].types.includes("flying")) {
        console.log(pokemon[i].types[0]);
    }
}

//  Bonus
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length === 1 && pokémon[i].types[0] === "poison") {
        let reverseString = ""
        for (var j = pokémon[i].name.length - 1; j >= 0; j--) {
            reverseString += pokémon[i].name[j];
        }
        console.log(reverseString);
    }
}

