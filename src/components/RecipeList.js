import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import allRecipesData from '../data/allRecipesData';
import '../styles/recipeList.css';
import Recipe from './Recipe';

export default function RecipeList({ searchTerm }) {
    const recipesPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
  
    // Filtrer les recettes lorsque le searchTerm change
    useEffect(() => {
      const filtered = allRecipesData.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRecipes(filtered);
      setCurrentPage(1);
    }, [searchTerm]);

    // Calculer l'index de début et de fin des recettes à afficher sur la page actuelle
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    // Gérer le défilement vers le haut de la fenêtre lors de la pagination
    function scrollUp() {
      window.scrollTo(0, 0);
    }

    // Gérer le changement de page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        scrollUp();
    };

    // Calculer le nombre total de pages
    const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

    return (
        <div id="recipes-list-container">
          <div className="recipes-container">
            {currentRecipes.map(recipe => (
              <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                <Recipe recipe={recipe} />
              </Link>
            ))}
          </div>
    
          {/* Afficher les liens de pagination */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={currentPage === pageNumber ? 'active' : ''}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </div>
      );
    }
