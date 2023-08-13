import '../styles/search.css';

const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
// const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

export default function Search ({searchTerm, setSearchTerm}) {

    const onSearchTermChangeHandler = (e) => {
        setSearchTerm(e.target.value);
      };
    
    const onClearSearchTermHandler = () => {
        setSearchTerm('');
    };

    return (
        <div id="search-container">
            <div id="searchbar-container">
                <img id="search-icon" alt="" src={searchIconUrl} />
                <input
                    id="search"
                    type="text"
                    value={searchTerm}
                    onChange={onSearchTermChangeHandler}
                    placeholder="Chercher une recette"
                />
                {searchTerm.length > 0 && (
                <button
                    onClick={onClearSearchTermHandler}
                    type="button"
                    id="search-clear-button"
                >
                X
                </button>
                )}
            </div>
        </div>
    )
}
