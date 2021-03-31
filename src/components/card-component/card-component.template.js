import { html } from '@polymer/lit-element';
const cardTemplate = (context) => html`
    <link rel="stylesheet" href="../components/card-component/card-component.css">
    <div class="card-container">
      <div class="card-header">
        <div class="input-box">
            <input type="checkbox"
            value=${context.item.isChecked}
            .checked=${context.item.isChecked}
            @click=${context.toggleCheck}>
        </div>
        <div class="product-title truncate" title=${context.item.productTitle}>
          ${context.item.productTitle}
        </div>
      </div>
      <div class="product-detail">
          <div class="product-img"></div>
          <div class="product-description truncate multiline-truncate">
             ${context.item.productDescription}
          </div>
          <div class="compare-button">
             <button class="buttonCls" @click="${context.hanldeCompareButton}">Compare</button>
          </div>
      </div>
      <div class="product-footer">
        <div class="left-container">
         <span class="qty">
             <span class="text">Qty:</span>
          <span>
            <input type="text"
             class="qty-input"
             value="1"
            >
            </div>
            <div class="action-slot">
                <button class="buttonCls" @click="${context.addToCartAction}">AddToCart</button>
            </div>
      </div>
    </div>
    <slot></slot>
    `
export default cardTemplate;