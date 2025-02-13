import { useState } from 'react';

export default function Select ({ 
    options, 
    placeholder
}) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <select
                id="options"
                value={selectedOption}
                onChange={handleChange}
                className='rounded-md border-gray-300 text-sm'
            >
                {placeholder ? <option value="">{placeholder}</option> : ''}
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
