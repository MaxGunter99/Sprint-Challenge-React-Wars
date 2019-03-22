import React from 'react';

function CharacterSetup(props) {
    return (
      <div className="character-card">
        <h1>{props.CharacterSetupProp.name}</h1>
        <p>
          <strong>Height:</strong> {props.CharacterSetupProp.height}
        </p>
        <p>
          <strong>Mass:</strong> {props.CharacterSetupProp.mass}
        </p>
        <p>
          <strong>Hair Color:</strong> {props.CharacterSetupProp.hairColor}
        </p>
        <p>
          <strong>Eye Color:</strong> {props.CharacterSetupProp.eyeColor}
        </p>
        <p>
          <strong>Birth Year:</strong> {props.CharacterSetupProp.birthYear}
        </p>
        <p>
          <strong>Gender:</strong> {props.CharacterSetupProp.gender}
        </p>
        <p>
          <strong>Homeworld:</strong><img src={props.CharacterSetupProp.homeworld} alt={props.CharacterSetupProp.name} />
        </p>
        <p>
          <strong>Species:</strong> {props.CharacterSetupProp.species}
        </p>
        <p>
          <strong>Created:</strong> {props.CharacterSetupProp.created}
        </p>
        <p>
          <strong>Edited:</strong> {props.CharacterSetupProp.edited}
        </p>
        <p>
          <strong>URL:</strong> {props.CharacterSetupProp.url}
        </p>
        

      </div>
  


    );
}
  
export default CharacterSetup;