// GitHub Gist-based leaderboard
class GistLeaderboard {
    constructor() {
        this.gistId = '8de8e8eee39b389c1fd4081962932f85';
        this.apiUrl = `https://api.github.com/gists/${this.gistId}`;
    }

    async saveScore(gameTime, captured, userName, organization) {
        const score = {
            name: userName,
            organization: organization,
            captured: captured,
            gameTime: gameTime,
            timestamp: Date.now(),
            date: new Date().toLocaleDateString()
        };

        // Log score for manual addition to gist
        console.log('🏆 NEW SCORE:', JSON.stringify(score, null, 2));
        alert(`Score recorded! ${userName}: ${captured}/15 AIs captured`);
        return score;
    }

    async loadScores() {
        try {
            const response = await fetch(this.apiUrl);
            const gist = await response.json();
            return JSON.parse(gist.files['scores.json'].content);
        } catch (error) {
            console.error('Failed to load scores:', error);
            return [];
        }
    }

    async refreshScores() {
        return await this.loadScores();
    }
}

window.gistLeaderboard = new GistLeaderboard();
