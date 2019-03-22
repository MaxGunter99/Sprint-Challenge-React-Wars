import React from 'react';

function CharacterSetup(props) {
    return (
      <div className="character-card">
        <h3>{props.CharacterSetupProp.name}</h3>
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
          <strong>Films:</strong> {props.CharacterSetupProp.species}
        </p>
      </div>
  


    );
}
  
export default CharacterSetup;