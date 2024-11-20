require('dotenv').config();
const express = require('express');
const { OpenAI} = require('openai');

const app = express();
app.use(express.json()); // For parsing JSON

// Configure OpenAI API
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY,});

// Test route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Summarize route
app.post('/summarize', async (req, res) => {
    const { abstract } = req.body;
    try {
        const response = await openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt: `Summarize this abstract: ${abstract}`,
            max_tokens: 150,
        });
        res.json({ summary: response.choices[0].text.trim() });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
