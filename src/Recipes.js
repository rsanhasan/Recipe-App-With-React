import React from 'react';
import Style from './recipe.module.css'
const Recipe = (props) => {
    return ( 
        <div className={Style.recipe}>
            <h1>{props.title}</h1>
            <ol>
                {props.ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient.text}</li>
                ))}
            </ol>
            <p>{props.calories}</p> 
            <img className={Style.image} src={props.image} alt={props.title} />
        </div>
    );
};

export default Recipe;