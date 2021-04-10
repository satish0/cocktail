import React from 'react';
import './CocktailFilter.css';

const CocktailFilter = (props) => {
    return(
        <>
            <div className="cocktails-filters">
                <form>
                    <div className="form-group">
                        <label htmlFor="search">Search By Name</label>
                        <input type="text" name="search" onChange={ props.namefilter } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Search By Category</label>
                        <input type="text" name="category" onChange={ props.categoryfilter }  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ingredients">Search By Ingredients</label>
                        <input type="text" name="ingredients" onChange={ props.ingredientfilter }  />
                    </div>
                </form>
            </div>
        </>
    )
}

export default CocktailFilter;