import { useState } from 'react';

export const AddCategory = ({ handleNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleSubmit = (e) => {

        e.preventDefault();

        const value = inputValue.trim();
        if (value.length <= 1) return;

        handleNewCategory(value);
        setInputValue('');

    }

    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            <input 
                className="input"
                type="text"
                placeholder="Search Gifs..."
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );

}