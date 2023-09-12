import { User, UserProps } from '../models/User';
import { CollectionView } from './CollectionView';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}

// export class UserList extends CollectionView<User, UserProps> {
//   itemParentTemplate(): string {
//     return `ul:<ul></ul>`;
//   }

//   template(model: User): string {
//     return `
//     <li>
//     <p>Name: ${model.get('name')}</p>
//     <p>Age: ${model.get('age')}</p>
//     <hr/>
//     </li>
//     `;
//   }
//   renderItem(model: User, itemParent: Element): void {
//     const templateElement = document.createElement('template');
//     templateElement.innerHTML = this.template(model);
//     itemParent.append(templateElement.content);
//   }
// }
