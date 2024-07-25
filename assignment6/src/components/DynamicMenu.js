import React from 'react';

const DynamicMenu = ({ items }) => {
  return (
    <nav>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </nav>
  );
};

export default DynamicMenu;
