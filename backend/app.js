const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 4000;
const API_KEY = 'f7c60082eff916bf6b71057813e68f3c';

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Fetch movies from TMDB API
app.get('/movies', async (req, res) => {

    try {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=2023`;

        const response = await axios.get(url, {
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }
        });
        res.json(response.data);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});