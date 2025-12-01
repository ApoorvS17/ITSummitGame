// Add these methods to your AIHunterGame class to replace the existing ones

// Replace the existing saveScore method with this:
async saveScore(gameTime, captured) {
    // Use gist leaderboard
    if (window.gistLeaderboard) {
        await window.gistLeaderboard.saveScore(gameTime, captured, this.user.name, this.user.organization);
    }
}

// Replace the existing showScoreboard method with this:
async showScoreboard() {
    this.showPage('scoreboard-page');
    
    try {
        const scores = await window.gistLeaderboard.loadScores();
        this.updateScoreboardDisplay(scores);
    } catch (error) {
        console.error('Failed to load scores:', error);
        // Show empty state
        const grid = document.getElementById('scoreboard-grid');
        grid.innerHTML = '<div style="text-align: center; color: rgba(255,255,255,0.5); padding: 40px;">Failed to load scores. Click refresh to try again.</div>';
    }
}

// Add this to the constructor to make game instance globally available:
// Add this line in the constructor after this.init():
// window.gameInstance = this;
// gameInstance = this;
