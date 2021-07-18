import React from 'react';
import PropTypes from 'prop-types';
import ShopItemModel from '../models/ShopItemModel';

export default function ShopItemFunc() {
    const obj = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£'
    };

    return (
        <div className="main-content">
            <h2>{obj.brand}</h2>
            <h1>{obj.title }</h1>
            <h3>{obj.description}</h3>
            <div className="description">{ obj.descriptionFull }</div>
            <div className="highlight-window mobile">
                <div className="highlight-overlay"></div>
            </div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{obj.currency + obj.price + '.00' }</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    );

    ShopItemFunc.propTypes = {
        obj: PropTypes.instanceOf(ShopItemModel).isRequired
    }
}

