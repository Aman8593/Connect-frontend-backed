import express from 'express'
const app = express();

app.get('/',(req,res) => {
    res.send('server is ready');
});

app.get('/api/jokes',(req,res) => {
    const jokes = [
        {   id: 1,  
            title: 'Why was the math book sad?', 
            punchline: 'Because it had too many problems.' 
        },
        {   id: 2, 
            title: 'Why did the scarecrow win an award?', 
            punchline: 'Because he was outstanding in his field.' 
        },
        {   id: 3, 
            title: 'Why don\'t scientists trust atoms?', 
            punchline: 'Because they make up everything.' 
        },
    ];
    res.json(jokes);
})
const port = process.env.PORT || 3000

app.listen(port,() => {
    console.log(`serve at http://localhost:${port}`)
});