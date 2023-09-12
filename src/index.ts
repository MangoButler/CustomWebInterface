import { UserProps } from './models/User';
import { Collection } from './models/Collection';
import { UserList } from './views/Userlist';
import { User } from './models/User';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
});
users.fetch();

// const collection = User.buildUserCollection();
// collection.on('change', () => {
//   console.log(collection);
// });

// collection.fetch();

// const user = User.buildUser({ age: 20, name: 'James' });
// const root = document.getElementById('root');
// if (root) {
//   const userForm = new UserForm(root, user);
//   userForm.render();
// } else {
//   throw new Error('No roote element found!');
// }

// const user = User.buildUser({ age: 20, name: 'James' });
// const root = document.getElementById('root');
// if (root) {
//   const userEdit = new UserEdit(root, user);
//   userEdit.render();
//   console.log(userEdit);
// }
