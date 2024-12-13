const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
    origin: 'http://localhost:3001', // Allow requests from your React app
}));
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const { messages, systemPrompt } = req.body;

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: systemPrompt },
                ...messages,
            ],
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error communicating with OpenAI:', error);
        res.status(500).send('Error processing request');
    }
});

const PORT = process.env.PORT || 5000; // Change to 5001 if needed
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});