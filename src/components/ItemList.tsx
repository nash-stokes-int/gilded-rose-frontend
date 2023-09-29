import React from 'react';
import {IItem} from '../interfaces/IItem'

interface ItemListProps {
    items: IItem[];
}
  
const ItemList: React.FC<ItemListProps> = ({ items }) => (
    <div>
        {items.map(item => (
            <div key={item.id}>
                <h2>{item.name}</h2>
                <p>Sell In: {item.sellIn}</p>
                <p>Quality: {item.quality}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Created On: {new Date(item.createdOn).toLocaleDateString()}</p>
                <p>Created By: {item.createdBy}</p>
            </div>
        ))}
    </div>
);
  
export default ItemList;