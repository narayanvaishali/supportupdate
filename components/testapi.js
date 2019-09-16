import axios from 'axios';

const CallumAPI = {
  posts: [

  ],
  all: function() {
    return axios.get//('https://jsonplaceholder.typicode.com/users')
    ('https://my-json-server.typicode.com/typicode/demo/posts')
      .then(res => {
        this.posts = res.data;
        return this.posts;
      })
  }
}

export default CallumAPI