import { html } from '@polymer/lit-element';

const listTemplate = (context) => html`
    <link rel="stylesheet" href="../components/card-list-view-component/card-list-view-component.css">
    <div class="columns-container">
        <input type="checkbox" />
        <div class="column-two__rows-container">
            <div>
                <a href="javascript:void(0)" id="product-name-link">${context.item.productTitle}</a>
            </div>
            <div>
                <span>${context.item.productDescription}</span>
            </div>
            <div>
                <button type="button" class="action-button">Compare</button>
            </div>
        </div>
        <div></div>
        <div class="column-four__rows-container">
            <div></div>
            <div class="column-four__row-two-container">
                <span>Qty</span>
                <input type="number" class="qty-input" min="0" placeholder="1">
                <div></div>
                <button title="Add to cart" class="action-button" @click="${context.addToCartAction}">Add to Cart</button>
            </div>
        </div>
    </div>
`;

export default listTemplate;