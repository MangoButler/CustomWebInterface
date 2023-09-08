import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  //This is a generic constraint, it lets Type Script know that the T generic provided will be implementing the HasId interface
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}

//The sync class is much harder to implement than the Eventing class, as the user not only depends on the sync class, but the sync class itself needs access to information from the user to work properly
//Serialize: convert data from an object to a saveable format (like json)
//Deserialize put data in an object using some pre saved data like json

// http://localhost:3000/users
