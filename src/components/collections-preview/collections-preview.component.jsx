import { findAllByTitle } from '@testing-library/react';
import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collections-preview.styles.css';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map( item =>(
                    <CollectionItem key={item.id} item={item}></CollectionItem>
            ))}
        </div>
    </div>
);

export default CollectionPreview;