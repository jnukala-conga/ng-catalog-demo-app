import { LitElement, css } from '@polymer/lit-element';
import listTemplate from './card-list-view-component.template';

class CardListViewComponent extends LitElement {
    static get properties() {
        return {
            item: { type: Object },
            addToCartAction: { type: Function }
        };
    }

    static get styles() {
        return [css `:host {
            font-family: Arial, sans-serif;
            font-size: 0.85rem;
        }
        
        a {
            color: rgb(0 109 204);
            text-decoration: none;
        }
        
        a:hover {
            text-decoration: underline;
        }
        
        .columns-container {
            display: grid;
            width: 100%;
            height: 150px;
            grid-template-rows: 100%;
            grid-template-columns: 3% 45% 25% 27%;
            align-items: center;
            justify-content: initial;
            background: white;
        }
        
        div.columns-container {
            border-bottom: 1px solid #e5e7ef;
        }
        
        .column-two__rows-container {
            display: grid;
            width: 100%;
            height: 100%;
            grid-template-rows: 30% 35% 35%;
            grid-template-columns: 100%;
            align-items: center;
        }
        
        .column-four__rows-container {
            display: grid;
            width: 100%;
            height: 100%;
            grid-template-rows: 70% 30%;
            grid-template-columns: 100%;
            align-items: center;
        }
        
        .column-four__row-two-container {
            display: grid;
            width: 100%;
            height: 100%;
            grid-template-columns: 10% 20% 10% 30%;
            grid-template-rows: 100%;
            justify-content: initial;
            align-items: center;
        }
        
        .action-button {
            background-color: transparent;
            color: #2B2826;
            font-size: 13px;
            padding: 5px 10px 5px 12px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 3px;
            border: 1px solid rgb(229, 231, 239);
            height: 35px;
            outline: none;
        }
        
        .qty-input {
            width: 100%;
            height: 30px;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #dddbda;
            outline: none;
        }`]
    }

    render() {
        return listTemplate(this);
    }
}

customElements.define('card-list-view-component', CardListViewComponent);