const { default: Axios } = require('axios');
const express = require('express')
const newsRouter = express.Router();
const axios = require('axios');
const e = require('express');

newsRouter.get('', async (req, res) => {


    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`)
        res.render('news', { articles: newsAPI.data })
    } catch (err) {
        if (err.response) {
            res.render('news', { articles: null })
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if (err.request) {
            res.render('news', { articles: null })
            console.log(err.request);
        } else {
            res.render('news', { articles: null })
            console.error('Error', err.message);
        }
    }
})

// Single news Post
newsRouter.get('/:id', async (req, res) => {
    let articleID = req.params.id;

    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${articleID}`)
        res.render('singleNews', { article: newsAPI.data })
    } catch (err) {
        if (err.response) {
            res.render('singleNews', { article: null })
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if (err.request) {
            res.render('singleNews', { article: null })
            console.log(err.request);
        } else {
            res.render('singleNews', { article: null })
            console.error('Error', err.message);
        }
    }
})

// Post
newsRouter.post('/', async (req, res) => {
    let search = req.body.search;

    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`)
        res.render('searchNews', { articles: newsAPI.data })
    } catch (err) {
        if (err.response) {
            res.render('searchNews', { articles: null })
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if (err.request) {
            res.render('searchNews', { articles: null })
            console.log(err.request);
        } else {
            res.render('searchNews', { articles: null })
            console.error('Error', err.message);
        }
    }
})


https://raddy.co.uk/wp-json/wp/v2/posts?search=photoshop
module.exports = newsRouter;