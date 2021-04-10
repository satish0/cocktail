import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CocktailList from './CocktailList/CocktailList';
import CocktailFilter from '../../component/CocktailFilter/CocktailFilter';
import CocktailView from './CocktailList/CocktailView/CocktailView';
import './Cocktail.css';
import axios from '../../Axios';

const Cocktail = () => {
    const [cocktail, setCocktail] = useState([]);
    const [detailedcocktail, setDetailedcocktail] = useState([]);
    // const [loaderror, setloaderror] = useState(false);

    useEffect(() => {
        loadUsers("");
    }, []);
    
    const cocktail_detail_view = (drinkid) => {
        console.log(drinkid);
        axios.get('lookup.php?i='+drinkid)
        .then(response => {
            setDetailedcocktail(response.data.drinks);
            console.log(response);
        })
    }

    const cocktail_name_filter = (n) => {
        loadUsers(n.target.value);
    };

    const cocktail_category_filter = (c) => {
        console.log(c);
        axios.get('/filter.php?c='+c)
        .then(response => {
            setCocktail(response.data.drinks);
            console.log(response);
        })
    };
    
    
    const cocktail_ingredient_filter = (i) => {
        console.log(i);
        axios.get('/filter.php?i='+i)
        .then(response => {
            setCocktail(response.data.drinks);
            console.log(response);
        })
    };

    const loadUsers = async (ele) => {
        // console.log(searchName);
        await axios.get('/search.php?s='+ele)
        .then(response => {
            setCocktail(response.data.drinks);
        })
    };

    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <div className="cocktail-inner">
                    <h1>Cocktail Party</h1>
                    <p>Here is list cocktail we offers</p>
                    <Router>
                        <Switch>
                            <Route exact path="/cocktail">
                                <CocktailFilter namefilter = {cocktail_name_filter} categoryfilter = {cocktail_category_filter} ingredientfilter = {cocktail_ingredient_filter} />
                                <CocktailList detailfilter={cocktail_detail_view} cocktailitems={ cocktail } />
                            </Route>
                            <Route path="/detail">
                                <Link className="back" to='/' >back</Link>
                                <CocktailView cocktailDetailedItems={ detailedcocktail } />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default Cocktail;