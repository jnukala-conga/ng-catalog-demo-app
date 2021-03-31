import {LitElement, css} from '@polymer/lit-element';
import cardTemplate from './card-component.template';

export class CardComponent extends LitElement {

    /**
     * component properties
     */
    static get properties() {
       return {
           item: {type: Object},
           addToCartAction: {type: Function}
       }
    }

    static get styles() {
        return [
          css`
          .card-container {
            width: 320px;
            height: 400px;
            border: 1px solid rgb(229, 231, 239);
            border-radius: 5px;
            padding: 10px;
            box-sizing: border-box;
            display: inline-block;
            margin: 5px 0px 10px 5px;
            background: white
        }
        
        .card-header {
            display: flex;
            margin-top:10px;
        }
        
        .product-title {
            margin-left: 5px;
            color: rgb(0, 109, 204);
            cursor: pointer;
            margin-top: 1px;
        }
        
        .truncate {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        
        .multiline-truncate {
            white-space: normal;
        }
        
        .product-img {
            height: 125px;
            width: 100%;
        }
        
        .product-detail {
            height: 285px;
            border-bottom: 1px solid rgb(229, 231, 239);
            margin-top: 15px;
            margin-left: 4px;
        }
        
        .product-description {
            height: 70px;
            margin-bottom: 10px;
        }
        
        .compare-button {
            text-align: center
        }
        
        .qty-input {
            width: 100%;
            height: 30px;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #dddbda;
            outline: none;
        }
        
        .buttonCls {
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
        
        .product-footer {
            display: flex;
        }
        
        .text {
            margin-top: 7px;
        }
        
        
        .qty {
            display: inline-flex;
            margin-top: 15px;
            gap: 15px;
            width: 50%;
        }
        
        .action-slot {
            margin-top: 10px;
        }`
        ]
      }

    constructor() {
        super();
        this.isChecked = false;
    }
    /**
     * This function will trigger on click of checkbox
     * @param {*} $event - mouse event
     */
    toggleCheck($event) {
       this.isChecked = !this.isChecked
    }

    hanldeCompareButton() {
        console.log(`compare event to do`);
    }

    render() {
        return cardTemplate(this);
    }
}

customElements.define('card-component', CardComponent);