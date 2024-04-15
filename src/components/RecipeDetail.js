import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import '../styles/recipeDetail.css';
import preparationLogo from '../assets/wisk.svg';
import ingredientLogo from '../assets/ingredients.svg';
import backArrow from '../assets/backArrow.png';

  export default function RecipeDetail({allRecipesData, allIngredientsImg}) {
    //On utilise useNavigate ici pour permette a l'utilisateur de naviguer au sein de l'application
    const navigate = useNavigate();

    useEffect(() => {
      // Défilement vers le haut de la page lorsque le composant est monté
        window.scrollTo(0, 0);
    }, []);

    const goBack = () => {
    // imperatively redirects back
      navigate(-1)
    }
    
    //On utilise useParams ici pour venir récupérer la valeur id dans la barre URL
    const { id } = useParams();
    //On convertit l'ID en nombre entier avec parseInt
    const recipeId = parseInt(id, 10);
    //On vient chercher dans le tableau allRecipesData les recettes dont l'id colle avec recipeID
    const recipe = allRecipesData.find(recipe => recipe.id === recipeId);

    if (!recipe) {
      return <div>Recipe not found</div>;
    }

    return (
      <div id='recipeDetail-container'>
        <img src={backArrow} alt='Return Button' id='boutonRetour' onClick={goBack}/>
        <img id='recipeDetail-img' src={recipe.img} alt='recipeImage' />
        <h2 id='recipeDetail-name'>{recipe.name}</h2>
        <div className="recipeDetail-title-container">
          <img src={ingredientLogo} alt='iconeIngredients' height="30px" width="30px"/>
          <h2>Ingrédients</h2>
        </div>
        <div id="recipeDetail-ingredients-container">
          <ul id='recipeDetail-ingredients'>
            {Object.entries(recipe.ingredients).map(([ingredientKey, ingredientValue]) => {
              const ingredient = allIngredientsImg.find((item) => item.ingredient === ingredientKey);
              //On cherche a faire passer ingredientKey de camel case à Normal string
              const convertToNormalString = (ingredientKey) => {
                // Divise la chaîne en mots en utilisant des espaces
                const words = ingredientKey.split(/(?=[A-Z])/);
                  var result = words.map(function(word, index) {
                  if (index === 0) {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                  }
                  // Pour les mots suivants, ajoute un espace avant chaque mot et capitalise la première lettre
                  return ' ' + word.charAt(0).toLowerCase() + word.slice(1);
                }).join('');
                
                return result;
              }

              return (
                <li key={ingredientKey}>
                  {ingredient && <img src={ingredient.img} alt='ingredientImg' />} {convertToNormalString(ingredientKey)}: {ingredientValue}
                </li>
              );
              })}
          </ul>
        </div>
        <div className="recipeDetail-title-container">
          <img src={preparationLogo} alt='iconePreparation' height="30px" width="30px"/>
          <h2>Préparation</h2>
        </div>
        <p id='recipeDetail-description'>
          {recipe.description}
        </p>
      </div>
    );
  }
