import React from 'react';
import {Link} from 'react-router-dom';
import './CocktailList.css';

const CocktailList = (props) => {  
    let cocktailFiltervalue = "";
    if(props.cocktailitems != null) {
      cocktailFiltervalue =  props.cocktailitems.map((cocktail, index) => (
        <Link className="cocktail" key={index} onClick={() => props.detailfilter(cocktail.idDrink)} to='/detail'>
          <div className="cocktail-img">
              <img src={cocktail.strDrinkThumb} alt={cocktail.strImageAttribution} />
          </div>
          <div className="cocktail-details">
            <h2>{cocktail.strDrink}</h2>
            <h3>{cocktail.strCategory}</h3>
            <p><span>Ingredients :</span> {cocktail.strIngredient1}: {cocktail.strMeasure1}, {cocktail.strIngredient2}: {cocktail.strMeasure2}, {cocktail.strIngredient3}: {cocktail.strMeasure3}</p>
          </div>
        </Link>
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

export default CocktailList;