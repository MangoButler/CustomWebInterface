import { Collection } from '../models/Collection';
import { HasId, Model } from '../models/Model';
import { View } from './View';

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    for (let model of this.collection.models) {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    }
    this.parent.append(templateElement.content);
  }
}

// export abstract class CollectionView<T extends Model<K>, K extends HasId> {
//   constructor(public collection: Collection<T, K>, public parent: Element) {}

//   itemParentTemplate(): string {
//     return `div:<div></div>`;
//   }

//   abstract renderItem(model: T, itemParent: Element): void;

//   render(): void {
//     const templateElement = document.createElement('template');
//     const selector = this.itemParentTemplate().split(':')[0];
//     const element = this.itemParentTemplate().split(':')[1];
//     templateElement.innerHTML = element;
//     const itemParent = templateElement.content.querySelector(`${selector}`);
//     if (itemParent) {
//       this.collection.models.forEach((item) => {
//         this.renderItem(item, itemParent);
//       });
//       this.parent.append(itemParent);
//     }
//   }
// }
