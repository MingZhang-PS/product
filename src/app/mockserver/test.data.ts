import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../models/Product';

export class TestData implements InMemoryDbService {
  createDb() {
    const fakeProducts =  [
        {
          id: 1,
          name: 'thinkpad',
          description: 'produced by lenovo',
          imageUrl: 'http://img2.imgtn.bdimg.com/it/u=4191408213,2120974131&fm=26&gp=0.jpg'
        },
        {
          id: 2,
          name: 'macpro',
          description: 'produced by apple',
          imageUrl: 'http://img4.imgtn.bdimg.com/it/u=4193764848,3921796796&fm=26&gp=0.jpg'
        },
        {
          id: 3,
          name: 'hp',
          description: 'produced by hp',
          imageUrl: 'http://img0.imgtn.bdimg.com/it/u=66491679,1118250579&fm=26&gp=0.jpg'
        }
      ];
    return { products: fakeProducts };
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
  }
}
