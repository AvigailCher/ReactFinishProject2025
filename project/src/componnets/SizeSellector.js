import React, { useState } from 'react';
import './SizeSelector.css';

const SizeSelector = ({ sizes, onSelect }) => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleChange = (e) => {
    setSelectedSize(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <div className="size-selector">
      <label htmlFor="size">בחר מידה:</label>
      <select id="size" value={selectedSize} onChange={handleChange}>
        <option value="">-- בחר --</option>
        {sizes.map((size) => (
          <option key={size} value={size}>{size}</option>
        ))}
      </select>
    </div>
  );
};

export default SizeSelector;
