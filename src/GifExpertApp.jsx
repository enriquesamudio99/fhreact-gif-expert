import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const handleNewCategory = (newCategory) => {

        if (categories.findIndex(category => category.toLowerCase() === newCategory.toLowerCase()) != -1) return;

        setCategories([newCategory, ...categories]);

    };

    return (
        <>
            <h1 className="title">GifExpertApp</h1>

            <div className="container">
                <AddCategory handleNewCategory={handleNewCategory} />

                <div className="gifs-grid">
                    {
                        categories.map(category => (
                            <GifGrid 
                                key={category} 
                                category={category} 
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );

}
