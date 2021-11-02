import React from 'react';
import { Cascader, Card, Button } from 'antd';
import { useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY;

function RecipeCard() {

    const [results, setResults] = useState("")

    const [steps, setSteps] = useState([])
    const [getID, setGetID] = useState('');

    const [getIngredients, setGetIngredients] = useState([]);
    const [music, setMusic] = useState('')
    const [fact, setFact] = useState('')
    const [styles, setStyles] = useState('')
    const [foodstyles, setFoodStyles] = useState('')


    const options = [
        {
            value: 'French',
            label: 'French',

        },
        {
            value: 'Italian',
            label: 'Italian',

        },
        {
            value: 'American',
            label: 'American',

        },
        {
            value: 'Caribbean',
            label: 'Caribbean',

        },
        {
            value: 'Greek',
            label: 'Greek',

        },
        {
            value: 'Chinese',
            label: 'Chinese',

        },
        {
            value: 'Indian',
            label: 'Indian',

        },
        {
            value: 'Mediterranean',
            label: 'Mediterranean',

        },
        {
            value: 'European',
            label: 'European',

        },
        {
            value: 'Japanese',
            label: 'Japanese'

        },
        {
            value: 'Mexican',
            label: 'Mexican',

        },
        {
            value: 'Thai',
            label: 'Thai'

        },
        {
            value: 'German',
            label: 'German',

        },
        {
            value: 'Southern',
            label: 'Southern',

        },
        {
            value: 'Middle Eastern',
            label: 'Middle Eastern',

        },


    ]


    function searchCuisine(value) {

        //Swtich Statement to Assign the correct useState to music using setMusic
        switch (value[0]) {
            case 'French':
                setMusic("https://open.spotify.com/embed/artist/21lWVwQxrCGHedpvicoxbr")
                setStyles("french")
                setFoodStyles("french-food")
                break;
            case 'Italian':
                setMusic('https://open.spotify.com/embed/artist/7GgQPPfphmWHl4LUSD4fcU')
                setStyles("italian")
                setFoodStyles("italian-food")
                break;
            case 'American':
                setMusic('https://open.spotify.com/embed/playlist/1ZH9ObToPQQATnLXNnvu4C')
                setStyles("american")
                setFoodStyles("american-food")
                break;
            case 'Caribbean':
                setMusic('https://open.spotify.com/embed/playlist/0IL63l7iDIaEIBSGnpgNJK')
                setStyles("caribbean")
                setFoodStyles("caribbean-food")
                break;
            case 'Greek':
                setMusic('https://open.spotify.com/embed/album/0Y9XGeIynbLRRah2SSjf9Y?si=Vv0m4eAiT6iwbTt63vKQ2w')
                setStyles("greek")
                setFoodStyles("greek-food")
                break;
            case 'Chinese':
                setMusic('https://open.spotify.com/embed/album/6M3PJFvzdQcM6uvfqeTzAf?si=fG3u5EsGRkqBUCiSYwwS4A')
                setStyles("chinese")
                setFoodStyles("chinese-food")
                break;
            case 'Indian':
                setMusic('https://open.spotify.com/embed/album/3QqypECfGRIXY2uC7yYJDp?si=QcjGe4IQQZ62xoE1upGGJA')
                setStyles("indian")
                setFoodStyles("indian-food")
                break;
            case 'Mediterranean':
                setMusic('https://open.spotify.com/embed/album/5pdMdpF9SSdzzEMXyE0Zb4?si=0pk0Pp6bSk2zmOa7rEeZYA')
                setStyles("mediterranean")
                setFoodStyles("mediterranean-food")
                break;
            case 'European':
                setMusic('https://open.spotify.com/embed/album/6Yo2yr1t3tv3wWOLWJBhF4?si=kdwek9rKQ96LpiXpJ3KhBQ')
                setStyles("european")
                setFoodStyles("european-food")
                break;
            case 'Japanese':
                setMusic('https://open.spotify.com/embed/playlist/4TyimJNmi0T8khXSHULYui')
                setStyles("japanese")
                setFoodStyles("japanese-food")
                break;
            case 'Mexican':
                setMusic('https://open.spotify.com/embed/playlist/0QYKTxUZxxUv5pgMCwQITC')
                setStyles("mexican")
                setFoodStyles("mexican-food")
                break;
            case 'Thai':
                setMusic('https://open.spotify.com/embed/playlist/0kpYdO6ts00Cog2wIbdmZd')
                setStyles("thai")
                setFoodStyles("thai-food")
                break;
            case 'German':
                setMusic('https://open.spotify.com/embed/playlist/46sOO9xULLbpTWyIeZkZDE')
                setStyles("german")
                setFoodStyles("german-food")
                break;
            case 'Southern':
                setMusic('https://open.spotify.com/embed/playlist/3Bgs8meDQxHuTrdiqUGZGR')
                setStyles("southern")
                setFoodStyles("southern-food")
                break;
            case 'Middle Eastern':
                setMusic('https://open.spotify.com/embed/playlist/43R9R4yzfVKP8UPXyKXaLd')
                setStyles("middle-eastern")
                setFoodStyles("middle-eastern-food")
                break;

            default:
                setMusic('')

        }
        fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${value}&apiKey=${API_KEY}&addRecipeInformation=true&number=30&type=main course`)
            .then(response => {
                return response.json()
            })
            .then(response => {
                if (!response.results) {
                    setResults({
                        title: "Sorry the Site is too popular at the moment! Come back later <3",
                        image: "",
                        time: ""
                    })
                    setGetID(
                        ""
                    )
                    setSteps(""
                    )

                    setMusic('https://open.spotify.com/embed/track/2eRYuzlSOBk3HlMsCSOLPJ')
                    setStyles("none")
                    setFoodStyles("no-food")

                } else {

                    let i = Math.floor(Math.random() * response.results.length)

                    setResults({
                        title: response.results[i].title,
                        image: response.results[i].image,
                        time: response.results[i].readyInMinutes
                    })
                    setGetID(
                        response.results[i].id
                    )

                    setSteps(response.results[i].analyzedInstructions[0].steps.map((e) => (
                        `${e.step}  `
                    )))
                }
            }
            )

        fetch(`https://api.spoonacular.com/food/trivia/random/?apiKey=${API_KEY}`).then(response => {
            return response.json()
        })
            .then(response => {
                setFact(response.text)
            })

    }

    function searchIngredients() {
        fetch(`https://api.spoonacular.com/recipes/${getID}/information?includeNutrition=false&apiKey=${API_KEY}`)
            .then(response => {
                return response.json()
            })
            .then(response => {
                setGetIngredients(response.extendedIngredients.map((ingredient) => (

                    `${ingredient.name}`)))
            })

    }

    function searchRandom() {
        // GET request using fetch with error handling


        setMusic("https://open.spotify.com/embed/playlist/5RhyxlHe1yEFFCGDTHhcwW")
        setStyles('random')
        setFoodStyles('random-food')


        fetch(`https://api.spoonacular.com/recipes/random/?apiKey=${API_KEY}&type=main course`)
            .then(response => {
                return response.json()
            })
            .then(response => {
                if (!response.recipes) {
                    setResults({
                        title: "Sorry the Site is too popular at the moment! Come back later <3",
                        image: "",
                        time: ""
                    })
                    setGetID(
                        ""
                    )
                    setSteps(""
                    )

                    setMusic('https://open.spotify.com/embed/track/2eRYuzlSOBk3HlMsCSOLPJ')
                    setStyles("none")
                    setFoodStyles("no-food")

                } else {

                    setResults({
                        title: response.recipes[0].title,
                        image: response.recipes[0].image,
                        time: response.recipes[0].readyInMinutes
                    })
                    setGetID(
                        response.recipes[0].id
                    )

                    setSteps(response.recipes[0].analyzedInstructions[0].steps.map((e) => (
                        `${e.step}  `
                    )))

                }
            }
            )

        fetch(`https://api.spoonacular.com/food/trivia/random/?apiKey=${API_KEY}`).then(response => {
            return response.json()
        })
            .then(response => {
                setFact(response.text)
            })

    }

    function searchSingle() {
        // GET request using fetch with error handling
        setMusic("https://open.spotify.com/embed/playlist/23QwFDXMFGYYygnbr1D7hG")
        setStyles('single')
        setFoodStyles('single-food')
        setFact("Bummer, sorry you're here bud.")


        fetch(`https://api.spoonacular.com/recipes/random?&tags=beverage,drink&apiKey=${API_KEY}&type=main course`)
            .then(response => {
                return response.json()
            })
            .then(response => {
                if (!response.recipes) {
                    setResults({
                        title: "Sorry the Site is too popular at the moment! Come back later <3",
                        image: "",
                        time: ""
                    })
                    setGetID(
                        ""
                    )
                    setSteps(""
                    )

                    setMusic('https://open.spotify.com/embed/track/2eRYuzlSOBk3HlMsCSOLPJ')
                    setStyles("none")
                    setFoodStyles("no-food")

                } else {
                    setResults({
                        title: response.recipes[0].title,
                        image: response.recipes[0].image,
                        time: response.recipes[0].readyInMinutes
                    })
                    setGetID(
                        response.recipes[0].id
                    )

                    setSteps(response.recipes[0].analyzedInstructions[0].steps.map((e) => (
                        `${e.step}  `
                    )))

                }
            }
            )
    }

    // rewrites the array, adding a comma onto the end of each ingredient
    var style = getIngredients.reduce(function (a, b) {
        return a.concat(b).concat(', ');
    }, []).slice(0, -1);



    return (

        <div className="return-card">
            <Card title="Select Your Meal Type!" className="recipe" hoverable={true}>
                <Cascader options={options} size="large" placeholder="Select a Dish Type!" onChange={searchCuisine} />
                <div></div>
            </Card >
            <Button className="help-me" onClick={searchRandom}>
                No Time, Just Help!!
            </Button>

            <Button className="help-me" onClick={searchSingle}>
                Recipe for One...
            </Button>


            {

                !results ? <div > </div> :
                    <Card onLoad={searchIngredients} hoverable={true} className="returned-recipe" >
                        <h3> {results.title} </h3>
                        <img className={foodstyles} src={results.image}></img>
                        <p className={styles}> Ready in {results.time} minutes!</p>
                        <p className="ingredient-title"> Ingredients: </p>
                        <p className="ingredients"> {style}</p>
                        <p className="steps-title"> Steps: </p>
                        <p className="instructions">  {steps}   </p>
                        <p className="ingredient-title"> Your Music Selection: </p>
                        <iframe src={music} width="600" height="420" frameBorder="0" className="spotify-playlist" allowtransparency="true" play="true" allow="encrypted-media"></iframe>
                        <p className="food-fact-title"> Icebreaker Food Fact: </p>
                        <p className="food-fact">  {fact}   </p>
                    </Card>

            }


        </div >
    )
}

export default RecipeCard