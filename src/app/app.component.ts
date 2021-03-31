import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-catalog-app';
  items = [];
  data = [];
  view = 'Grid';

  constructor() {
    this.items = ['hello', 'this', 'is', 'displayed', 'using', 'litElement'];
    this.data = [{
      id: '1',
      productTitle: "Auto_Config_BP_A_23697",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '2',
      productTitle: "Auto_Config_BP_B_23697",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '3',
      productTitle: "Auto_Config_B_21145",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '4',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '5',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '6',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '7',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '1',
      productTitle: "Auto_Config_BP_A_23697",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '2',
      productTitle: "Auto_Config_BP_B_23697",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '3',
      productTitle: "Auto_Config_B_21145",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '4',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '5',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '6',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '7',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '1',
      productTitle: "Auto_Config_BP_A_23697",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '2',
      productTitle: "Auto_Config_BP_B_23697",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '3',
      productTitle: "Auto_Config_B_21145",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '4',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '5',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '6',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '7',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '1',
      productTitle: "Auto_Config_BP_A_23697",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '2',
      productTitle: "Auto_Config_BP_B_23697",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '3',
      productTitle: "Auto_Config_B_21145",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '4',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '5',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '6',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '7',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '1',
      productTitle: "Auto_Config_BP_A_23697",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '2',
      productTitle: "Auto_Config_BP_B_23697",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '3',
      productTitle: "Auto_Config_B_21145",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '4',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '5',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '6',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '7',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '1',
      productTitle: "Auto_Config_BP_A_23697",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '2',
      productTitle: "Auto_Config_BP_B_23697",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '3',
      productTitle: "Auto_Config_B_21145",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '4',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '5',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '6',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '7',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '1',
      productTitle: "Auto_Config_BP_A_23697",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '2',
      productTitle: "Auto_Config_BP_B_23697",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '3',
      productTitle: "Auto_Config_B_21145",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '4',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '5',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '6',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '7',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },{
      id: '1',
      productTitle: "Auto_Config_BP_A_23697",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '2',
      productTitle: "Auto_Config_BP_B_23697",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '3',
      productTitle: "Auto_Config_B_21145",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }, {
      id: '4',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '5',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '6',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    },
    {
      id: '7',
      productTitle: "Auto_Config_B_21146",
      isChecked: false,
      productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
    }
  ,{
    id: '1',
    productTitle: "Auto_Config_BP_A_23697",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  }, {
    id: '2',
    productTitle: "Auto_Config_BP_B_23697",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  }, {
    id: '3',
    productTitle: "Auto_Config_B_21145",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  }, {
    id: '4',
    productTitle: "Auto_Config_B_21146",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  },
  {
    id: '5',
    productTitle: "Auto_Config_B_21146",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  },
  {
    id: '6',
    productTitle: "Auto_Config_B_21146",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  },
  {
    id: '7',
    productTitle: "Auto_Config_B_21146",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  },
  {
    id: '1',
    productTitle: "Auto_Config_BP_A_23697",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  }, {
    id: '2',
    productTitle: "Auto_Config_BP_B_23697",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  }, {
    id: '3',
    productTitle: "Auto_Config_B_21145",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  }, {
    id: '4',
    productTitle: "Auto_Config_B_21146",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  },
  {
    id: '5',
    productTitle: "Auto_Config_B_21146",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  },
  {
    id: '6',
    productTitle: "Auto_Config_B_21146",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  },
  {
    id: '7',
    productTitle: "Auto_Config_B_21146",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  },{
    id: '1',
    productTitle: "Auto_Config_BP_A_23697",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  }, {
    id: '2',
    productTitle: "Auto_Config_BP_B_23697",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  }, {
    id: '3',
    productTitle: "Auto_Config_B_21145",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  }, {
    id: '4',
    productTitle: "Auto_Config_B_21146",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  },
  {
    id: '5',
    productTitle: "Auto_Config_B_21146",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  },
  {
    id: '6',
    productTitle: "Auto_Config_B_21146",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  },
  {
    id: '7',
    productTitle: "Auto_Config_B_21146",
    isChecked: false,
    productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
  }];
  }
}
