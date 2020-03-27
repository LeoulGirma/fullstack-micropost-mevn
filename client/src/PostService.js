import axios from 'axios';

const url = 'http://localhost:5000/api/posts/'

// service for making requests to the api

class PostService {
    //Get posts
    static async getPosts() {
        const res = await axios.get(url);
        const data = res.data;
        return new Promise((resolve, reject) => {
            try {
                console.log(data);
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                )
            } catch (error) {
                reject(error);
            }
        })
    }
    //Create Post 
    static insertPost(text) {
        return axios.post(url, {
            text
        }
        )
    }
    //delete Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default PostService