import React from 'react';
import './CocktailView.css';

const CocktailView = (props) => {  

  let cocktailFiltervalue = "";

  if(props.cocktailDetailedItems != null) {
    cocktailFiltervalue =  props.cocktailDetailedItems.map((cocktail, index) => (
          <div className="cocktail cocktail-view" key={index}>
              <div className="cocktail-img cocktail-view-img">
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              </div>
              <div className="cocktail-details cocktail-view-details">
                  <h2>{cocktail.strDrink}</h2>
                  <h3>{cocktail.strCategory}</h3>
                  <h3>{cocktail.strIBA}</h3>
                  <h3>{cocktail.strAlcoholic}</h3>
                  <h3>{cocktail.strGlass}</h3>
                  <p><span>Ingredients :</span> {cocktail.strIngredient1}: {cocktail.strMeasure1}, {cocktail.strIngredient2}: {cocktail.strMeasure2}, {cocktail.strIngredient3}: {cocktail.strMeasure3}</p>
                  <p><span>Instructions:</span> {cocktail.strInstructions}</p>
              </div>
          </div>
      ))
  }
  else {
    cocktailFiltervalue = <div className="error-massage">Enter A Valid input</div>
  }
  return (
      <>
        <div className="cocktails">
          {cocktailFiltervalue}
        </div>
      </>
  );
}

export default CocktailView;