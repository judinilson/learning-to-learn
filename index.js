const express = require('express') 
const path = require('path')
const expressEdge = require('express-edge')
const mongoose = require('mongoose')

//controllers
const storeUserController = require('./controllers/storeUser')



const app = new express()

mongoose.connect('mongodb://localhost/learning_to_learn')


app.use(express.static('public'))

app.use(expressEdge)


app.set('views',`${__dirname}/views`)

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/user/register', storeUserController)

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/courses',(req,res)=>{
    res.render('courses')
})

app.get('/news',(req,res)=>{
    res.render('blog')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/single_course',(req,res)=>{
    res.render('single_course')
})



app.listen(4000,()=>{
    console.log('App listen on port: 4000');
})