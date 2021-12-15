import React from 'react';
import CollectionCard from './CollectionCard';
import './CollectionList.css';
const CollectionList = ({ items, setActive }) => {
  return (
    <div className="collectionList">
      {items.map((item, index) => (
        <div key={item.token_id} onClick={() => setActive(index)}>
          <CollectionCard
            key={item.token_id}
            id={item.token_id}
            name={item.name}
            traits={item.traits}
            image={item.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default CollectionList;
