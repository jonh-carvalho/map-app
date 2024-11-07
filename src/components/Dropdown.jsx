import React from 'react';

const Dropdown = ({ selectedPlace, setSelectedPlace }) => {
    const handleChange = (event) => {
        setSelectedPlace(event.target.value);
    };

    return (
        <select value={selectedPlace} onChange={handleChange}>
            <option value="hospital">Hospital</option>
            <option value="police">Delegacia</option>
            <option value="school">Escola</option>
            <option value="restaurant">Restaurante</option>
            <option value="bank">Banco</option>
        </select>
    );
};

export default Dropdown;
