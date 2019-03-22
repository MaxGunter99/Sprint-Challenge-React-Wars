import React from 'react';

import CharacterSetup from './character';


const Luke = {
    name: "Luke Skywalker", 
    height: "172", 
    mass: "77", 
    hairColor: "blond", 
    skinColor: "fair", 
    eyeColor: "blue", 
    birthYear: "19BBY", 
    gender: "male", 
    homeworld: "https://swapi.co/api/planets/1/", 
    // films: [
    //     "https://swapi.co/api/films/2/", 
    //     "https://swapi.co/api/films/6/", 
    //     "https://swapi.co/api/films/3/", 
    //     "https://swapi.co/api/films/1/", 
    //     "https://swapi.co/api/films/7/"
    // ], 
    species: "https://swapi.co/api/species/1/",
    // "vehicles": [
    //     "https://swapi.co/api/vehicles/14/", 
    //     "https://swapi.co/api/vehicles/30/"
    // ], 
    // starships: [
    //     "https://swapi.co/api/starships/12/", 
    //     "https://swapi.co/api/starships/22/"
    // ], 
    created: "2014-12-09T13:50:51.644000Z", 
    edited: "2014-12-20T21:17:56.891000Z", 
    url: "https://swapi.co/api/people/1/"
};

const C= {
    name: "C-3PO", 
    height: "167", 
    mass: "75", 
    hairColor: "n/a", 
    skinColor: "gold", 
    eyeColor: "yellow", 
    birthYear: "112BBY", 
    gender: "n/a", 
    homeworld: "https://swapi.co/api/planets/1/", 
    // "films": [
    //     "https://swapi.co/api/films/2/", 
    //     "https://swapi.co/api/films/5/", 
    //     "https://swapi.co/api/films/4/", 
    //     "https://swapi.co/api/films/6/", 
    //     "https://swapi.co/api/films/3/", 
    //     "https://swapi.co/api/films/1/"
    // ], 
    species: "https://swapi.co/api/species/2/", 
    // "vehicles": [], 
    // "starships": [], 
    created: "2014-12-10T15:10:51.357000Z", 
    edited: "2014-12-20T21:17:50.309000Z", 
    url: "https://swapi.co/api/people/2/"
};

const R2 = {
    name: "R2-D2", 
    height: "96", 
    mass: "32", 
    hairColor: "n/a", 
    skinColor: "white, blue", 
    eyeColor: "red", 
    birthYear: "33BBY", 
    gender: "n/a", 
    homeworld: "https://swapi.co/api/planets/8/", 
    // "films": [
    //     "https://swapi.co/api/films/2/", 
    //     "https://swapi.co/api/films/5/", 
    //     "https://swapi.co/api/films/4/", 
    //     "https://swapi.co/api/films/6/", 
    //     "https://swapi.co/api/films/3/", 
    //     "https://swapi.co/api/films/1/", 
    //     "https://swapi.co/api/films/7/"
    // ], 
    species: "https://swapi.co/api/species/2/", 
    // "vehicles": [], 
    // "starships": [], 
    created: "2014-12-10T15:11:50.376000Z", 
    edited: "2014-12-20T21:17:50.311000Z", 
    url: "https://swapi.co/api/people/3/"
    // }, 
};

const DarthVader = {
    name: "Darth Vader", 
    height: "202", 
    mass: "136", 
    hairColor: "none", 
    skinColor: "white", 
    eyeColor: "yellow", 
    birthYear: "41.9BBY", 
    gender: "male", 
    homeworld: "https://swapi.co/api/planets/1/", 
    // "films": [
    //     "https://swapi.co/api/films/2/", 
    //     "https://swapi.co/api/films/6/", 
    //     "https://swapi.co/api/films/3/", 
    //     "https://swapi.co/api/films/1/"
    // ], 
    species: "https://swapi.co/api/species/1/", 
    // "vehicles": [], 
    // "starships": [
    //     "https://swapi.co/api/starships/13/"
    // ], 
    created: "2014-12-10T15:18:20.704000Z", 
    edited: "2014-12-20T21:17:50.313000Z", 
    url: "https://swapi.co/api/people/4/"
};

const Leia = {
    name: "Leia Organa", 
    height: "150", 
    mass: "49", 
    hairColor: "brown", 
    skinColor: "light", 
    eyeColor: "brown", 
    birthYear: "19BBY", 
    gender: "female", 
    homeworld: "https://swapi.co/api/planets/2/", 
    // "films": [
    //     "https://swapi.co/api/films/2/", 
    //     "https://swapi.co/api/films/6/", 
    //     "https://swapi.co/api/films/3/", 
    //     "https://swapi.co/api/films/1/", 
    //     "https://swapi.co/api/films/7/"
    // ], 
    species: "https://swapi.co/api/species/1/", 
    // "vehicles": [
    //     "https://swapi.co/api/vehicles/30/"
    // ], 
    // "starships": [], 
    created: "2014-12-10T15:20:09.791000Z", 
    edited: "2014-12-20T21:17:50.315000Z", 
    url: "https://swapi.co/api/people/5/"
};

const Owen = {
    name: "Owen Lars", 
    height: "178", 
    mass: "120", 
    hairColor: "brown, grey", 
    skinColor: "light", 
    eyeColor: "blue", 
    birthYear: "52BBY", 
    gender: "male", 
    homeworld: "https://swapi.co/api/planets/1/", 
    // films: [
    //     "https://swapi.co/api/films/5/", 
    //     "https://swapi.co/api/films/6/", 
    //     "https://swapi.co/api/films/1/"
    // ], 
    species: "https://swapi.co/api/species/1/", 
    // "vehicles": [], 
    // "starships": [], 
    created: "2014-12-10T15:52:14.024000Z", 
    edited: "2014-12-20T21:17:50.317000Z", 
    url: "https://swapi.co/api/people/6/"
};

const Beru = {
    name: "Beru Whitesun lars", 
    height: "165", 
    mass: "75", 
    hairColor: "brown", 
    skinColor: "light", 
    eyeColor: "blue", 
    birthYear: "47BBY", 
    gender: "female", 
    homeworld: "https://swapi.co/api/planets/1/", 
    // "films": [
    //     "https://swapi.co/api/films/5/", 
    //     "https://swapi.co/api/films/6/", 
    //     "https://swapi.co/api/films/1/"
    // ], 
    species: "https://swapi.co/api/species/1/", 
    // "vehicles": [], 
    // "starships": [], 
    created: "2014-12-10T15:53:41.121000Z", 
    edited: "2014-12-20T21:17:50.319000Z", 
    url: "https://swapi.co/api/people/7/"
};

const R5 = {
    name: "R5-D4", 
    height: "97", 
    mass: "32", 
    hairColor: "n/a", 
    skinColor: "white, red", 
    eyeColor: "red", 
    birthYear: "unknown", 
    gender: "n/a", 
    homeworld: "https://swapi.co/api/planets/1/", 
    // "films": [
    //     "https://swapi.co/api/films/1/"
    // ], 
    species: "https://swapi.co/api/species/2/", 
    // "vehicles": [], 
    // "starships": [], 
    created: "2014-12-10T15:57:50.959000Z", 
    edited: "2014-12-20T21:17:50.321000Z", 
    url: "https://swapi.co/api/people/8/"
};

const Biggs = {
    name: "Biggs Darklighter", 
    height: "183", 
    mass: "84", 
    hairColor: "black", 
    skinColor: "light", 
    eyeColor: "brown", 
    birthYear: "24BBY", 
    gender: "male", 
    homeworld: "https://swapi.co/api/planets/1/", 
    // "films": [
    //     "https://swapi.co/api/films/1/"
    // ], 
    species: "https://swapi.co/api/species/1/", 
    // "vehicles": [], 
    // "starships": [
    //     "https://swapi.co/api/starships/12/"
    // ], 
    created: "2014-12-10T15:59:50.509000Z", 
    edited: "2014-12-20T21:17:50.323000Z", 
    url: "https://swapi.co/api/people/9/"
};

const Obi = {
    name: "Obi-Wan Kenobi", 
    height: "182", 
    mass: "77", 
    hairColor: "auburn, white", 
    skinColor: "fair", 
    eyeColor: "blue-gray", 
    birthYear: "57BBY", 
    gender: "male", 
    homeworld: "https://swapi.co/api/planets/20/", 
    // "films": [
    //     "https://swapi.co/api/films/2/", 
    //     "https://swapi.co/api/films/5/", 
    //     "https://swapi.co/api/films/4/", 
    //     "https://swapi.co/api/films/6/", 
    //     "https://swapi.co/api/films/3/", 
    //     "https://swapi.co/api/films/1/"
    // ], 
    species: "https://swapi.co/api/species/1/", 
    // "vehicles": [
    //     "https://swapi.co/api/vehicles/38/"
    // ], 
    // "starships": [
    //     "https://swapi.co/api/starships/48/", 
    //     "https://swapi.co/api/starships/59/", 
    //     "https://swapi.co/api/starships/64/", 
    //     "https://swapi.co/api/starships/65/", 
    //     "https://swapi.co/api/starships/74/"
    // ], 
    created: "2014-12-10T16:16:29.192000Z", 
    edited: "2014-12-20T21:17:50.325000Z", 
    url: "https://swapi.co/api/people/10/"
};

function CharacterInfo() {
    return (
      <div>
        <div className="class-list">
          <CharacterSetup CharacterSetupProp={Luke} />
          <CharacterSetup CharacterSetupProp={C} />
          <CharacterSetup CharacterSetupProp={R2} />
          <CharacterSetup CharacterSetupProp={DarthVader} />
          <CharacterSetup CharacterSetupProp={Leia} />
          <CharacterSetup CharacterSetupProp={Owen} />
          <CharacterSetup CharacterSetupProp={Beru} />
          <CharacterSetup CharacterSetupProp={R5} />
          <CharacterSetup CharacterSetupProp={Biggs} />
          <CharacterSetup CharacterSetupProp={Obi} />

        </div>
      </div>
    );
}

export default CharacterInfo;