// Define your API key
const API_KEY = '21d081afef1f4defaace782e2603e0ba';

// Define the API URL for FC Inter players
const INTER_TEAM_ID = 108; // FC Inter Milan team ID
const API_URL = `https://api.football-data.org/v4/teams/${INTER_TEAM_ID}/squad`;

// Function to fetch player data from Football-Data API
async function fetchInterPlayers() {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'X-Auth-Token': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Inter Milan Players Data:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch and display the data
fetchInterPlayers();
