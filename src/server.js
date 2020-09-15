const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios')

app.use(cors());

const loadPosts = async () => {
    try {
        const res = await axios.get('https://wordpress.org/news/wp-json/wp/v2/posts?filter[orderby]=date+desc');
        console.log(res.data);
    } catch (err) {
        console.error(err);
    }
};

loadPosts()



