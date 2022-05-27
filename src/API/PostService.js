import axios from 'axios';


export class PostService {
  static async getAll() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
  };
};
