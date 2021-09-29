import React from 'react';
import {Picture} from "./styles"



const AlbumListItems = ({ currentCard }) => {
  console.log('currentCard:', currentCard);

  return (
    <Picture currentCard={currentCard}>
        <div>a</div>
    </Picture>
  );
};

export default AlbumListItems;
