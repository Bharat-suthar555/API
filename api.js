const express = require('express')
const port = 3000
const server = express()

const social = [
    {
        id: 1,
        content: 'Image',
        'no of likes': 121,
        ImageURL: 'https://c0.anyrgb.com/images/597/569/the-gram-phone-cell-phone-electronics-iphone-social-media-cellphone-hold-hand-computer-thumbnail.jpg',
        'Posted At': '10 Jan 2023 01:01:23',
    },
    {
        id: 2,
        content: 'Video',
        'no of likes': 223,
        VideoURL: 'https://th.bing.com/th/id/OIP.L9qNOc7FFNDv41PPouwxDQHaHa?pid=ImgDet&rs=1',
        'Posted At': '11 jan 2023 11:03:23',
    },
    {
        id: 3,
        content: 'Video',
        'no of likes': 300,
        VideoURL: 'https://th.bing.com/th/id/OIP.L9qNOc7FFNDv41PPouwxDQHaHa?pid=ImgDet&rs=1',
        'Posted At': '12 jan 2023 11:03:23',
    },
    {
        id: 4,
        content: 'Video post',
        'no of likes': 123,
        VideoURL: 'https://th.bing.com/th/id/OIP.L9qNOc7FFNDv41PPouwxDQHaHa?pid=ImgDet&rs=1',
        'Posted At': '14 jan 2023 11:03:23',
    }
]


server.use(express.json())

server.get('/api/social', function (req, res) {
    res.send(social)
})
server.post('/api/social', function (req, res) {
    const newTodo = req.body
  
    newTodo.id = Math.random()
  
    social.push(newTodo)
  
    res.status(201).send('Test')
  })
  

server.patch('/api/social/:id', function (req, res) {
    const id = req.params.id;
    const data = req.body;

    const foundSocialIndex = social.findIndex(post => post.id === parseInt(id));

    if (foundSocialIndex > -1) {
        const old = social[foundSocialIndex];
        social[foundSocialIndex] = {
            // ...old,
            ...data
        };
        res.send('Updated');
    } else {
        res.status(404).send('Not found');
    }
})

server.delete('/api/social/:id', function (req, res) {
    const foundSocialIndex = social.findIndex(post => post.id.toString() === req.params.id);

    if (foundSocialIndex > -1){
        social.splice(foundSocialIndex,1)
        res.send('Deleted')
    
    } else {
        res.status(404).send('Not found')
    }
})

server.listen(port)