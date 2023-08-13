import { useState } from 'react';
import NavBar from './Navbar';
import Logo from './Logo';
import Search from './Search';
import RecipeList from './RecipeList';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <NavBar />
            <Logo />
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <RecipeList searchTerm={searchTerm}/>
        </div>
    )
}