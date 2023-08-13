import '../styles/recipe.css';

export default function Recipe ({recipe}) {
    return (
            <div key={recipe.id} className="recipe" tabIndex={0}>
                <div className="recipe-container">
                    <div className="image-container">
                        <img src={recipe.img} alt="" className="recipe-image" />
                    </div>
                    <h3 className="recipe-name">{recipe.name}</h3>
                </div>
            </div>
    )
}