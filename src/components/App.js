import '../styles/app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import RecipeDetail from './RecipeDetail';
import allRecipesData from "../data/allRecipesData";
import allIngredientsImg from '../data/allIngredientsImg';



function App() {

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/Les-recettes-de-Maman' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/recipes/:id" element={<RecipeDetail allRecipesData={allRecipesData} allIngredientsImg={allIngredientsImg}/>} />
        </Routes>
      </main>
       {/*   <Route path='/sign-up' element={<SignUp />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/articles/:title' element={<Article />} />
          <Route path='/authors/:name' element={<Author />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/categories' element={<Categories />} />
        */}
    </BrowserRouter>
  );
}

export default App;
