const axios = require('axios');
const crypto = require('crypto');
const open = require('open'); // To open the game URL in a new tab, consider the open library

// Environment variables for API configuration
const MERCHANT_ID = process.env.MERCHANT_ID;
const MERCHANT_SECRET = process.env.MERCHANT_SECRET;
const API_BASE_URL = process.env.API_BASE_URL;

class PGGameController {
  // Generate MD5 signature
  static generateSign(...params) {
    const stringToHash = params.join('');
    return crypto.createHash('md5').update(stringToHash).digest('hex');
  }

  // Open a PG game with user's balance
  static async openGame(req, res) {
    const { playerId, currency, language, gameId } = req.body;

    // Step 1: Fetch user's current balance
    const timestamp = Math.floor(Date.now() / 1000);
    const balanceSign = this.generateSign(MERCHANT_ID, playerId, currency, timestamp, MERCHANT_SECRET);

    try {
      const balanceResponse = await axios.post(`${API_BASE_URL}/player/balance`, {
        merchant_id: MERCHANT_ID,
        player_id: playerId,
        currency,
        timestamp,
        sign: balanceSign,
      });

      if (balanceResponse.data.success !== '1') {
        return res.status(400).json({ error: 'Failed to retrieve user balance' });
      }

      const userBalance = balanceResponse.data.balance;

      // Step 2: Generate play URL
      const playSign = this.generateSign(MERCHANT_ID, playerId, currency, gameId, timestamp, MERCHANT_SECRET);
      const playResponse = await axios.post(`${API_BASE_URL}/player/play_url`, {
        merchant_id: MERCHANT_ID,
        player_id: playerId,
        currency,
        gameid: gameId,
        language,
        timestamp,
        sign: playSign,
      });

      if (playResponse.data.success !== '1') {
        return res.status(400).json({ error: 'Failed to generate game URL' });
      }

      // Step 3: Open game in a new tab
      const gameUrl = playResponse.data.play_url;
      await open(gameUrl);

      // (Optional) Monitor for bet completion and update balance logic can be extended here.

      // Response to indicate game opened successfully
      return res.status(200).json({
        message: 'Game opened successfully',
        gameUrl,
        initialBalance: userBalance,
      });
    } catch (error) {
      console.error('Error opening game:', error);
      return res.status(500).json({ error: 'An error occurred while opening the game' });
    }
  }

  // Placeholder: Handle balance update after bet (e.g., webhook or polling logic)
  static async updateBalanceAfterBet(playerId) {
    // Implement logic based on your application flow
  }
}

module.exports = PGGameController;
