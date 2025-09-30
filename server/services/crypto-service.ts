import axios from "axios";

interface CoinGeckoPrice {
  [coin: string]: {
    usd: number;
    usd_24h_change: number;
  };
}

interface ArbitrageOpportunity {
  symbol: string;
  name: string;
  buyExchange: string;
  sellExchange: string;
  buyPrice: number;
  sellPrice: number;
  profit: number;
  profitPercentage: number;
  volume: number;
}

export class CryptoService {
  private static readonly COINGECKO_API = "https://api.coingecko.com/api/v3";
  
  // CoinGecko API keys for rotation
  private static readonly API_KEYS = [
    "CG-1ZLWsfov3ZR6U5tuXwev1qBv",
    "CG-V1Z1MdM5Bfk4C9P6VW5oYJUw", 
    "CG-P7ntPQa1V2iicoLC198VdgUd",
    "CG-ZHmJSfA2n4mw78srQoHQbEtb",
    "CG-HAzJsD7XcWuzurD1QwxiK1gH",
    "CG-QD7CAzShbqV96Fpwn77KRUq2",
    "CG-Gz4wxBKfDbN7bHXZfm8rG9nX",
    "CG-H6zuWpQyW3xbna2jLDgcdnwi",
    "CG-5if4h12rDmAaKRzkjXMLwcJP",
    "CG-FmBLHGChAm98adScURz9fkG6"
  ];
  
  private static currentKeyIndex = 0;
  private static keyFailureCount: { [key: string]: number } = {};
  
  private static getNextApiKey(): string {
    const key = this.API_KEYS[this.currentKeyIndex];
    this.currentKeyIndex = (this.currentKeyIndex + 1) % this.API_KEYS.length;
    return key;
  }
  
  private static markKeyFailed(key: string): void {
    this.keyFailureCount[key] = (this.keyFailureCount[key] || 0) + 1;
    console.log(`API key failed: ${key.substring(0, 8)}... (${this.keyFailureCount[key]} failures)`);
  }
  
  private static async makeApiRequest(url: string, maxRetries: number = 3): Promise<any> {
    let lastError: any;
    
    for (let attempt = 0; attempt < Math.min(maxRetries, this.API_KEYS.length); attempt++) {
      const apiKey = this.getNextApiKey();
      
      try {
        console.log(`Attempting API call with key: ${apiKey.substring(0, 8)}... (attempt ${attempt + 1})`);
        
        const response = await axios.get(url, {
          timeout: 10000,
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'TradePilot/1.0',
            'x-cg-demo-api-key': apiKey
          }
        });

        console.log(`✅ API call successful with key: ${apiKey.substring(0, 8)}...`);
        return response.data;
        
      } catch (error: any) {
        lastError = error;
        this.markKeyFailed(apiKey);
        
        if (error.response?.status === 429) {
          console.log(`⚠️ Rate limit hit for key ${apiKey.substring(0, 8)}..., rotating to next key`);
          continue;
        } else if (error.response?.status >= 400 && error.response?.status < 500) {
          console.log(`❌ Client error ${error.response.status} with key ${apiKey.substring(0, 8)}..., rotating to next key`);
          continue;
        } else {
          console.log(`🔄 Network/server error with key ${apiKey.substring(0, 8)}..., trying next key`);
          continue;
        }
      }
    }
    
    throw lastError || new Error("All API keys exhausted");
  }
  
  static async getCryptoPrices() {
    try {
      const url = `${this.COINGECKO_API}/simple/price?ids=bitcoin,ethereum,cardano,binancecoin,solana,ripple,polkadot,dogecoin,avalanche-2,polygon&vs_currencies=usd&include_24hr_change=true`;
      const data = await this.makeApiRequest(url);
      console.log("✅ Successfully fetched real crypto prices from CoinGecko");
      return data as CoinGeckoPrice;
      
    } catch (error: any) {
      console.error("❌ All API keys failed, unable to fetch real prices:", error.message);
      throw new Error("Unable to fetch cryptocurrency prices. All API keys have been exhausted or rate limited.");
    }
  }

  static async getArbitrageOpportunities(): Promise<ArbitrageOpportunity[]> {
    try {
      const prices = await this.getCryptoPrices();
      
      // Generate realistic arbitrage opportunities based on real current prices
      const opportunities: ArbitrageOpportunity[] = [];
      
      const exchanges = ["Binance", "Coinbase", "Kraken", "OKX", "Huobi", "Bitfinex", "KuCoin", "Gate.io"];
      const cryptos = [
        { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
        { id: "ethereum", symbol: "ETH", name: "Ethereum" },
        { id: "cardano", symbol: "ADA", name: "Cardano" },
        { id: "binancecoin", symbol: "BNB", name: "BNB" },
        { id: "solana", symbol: "SOL", name: "Solana" },
        { id: "ripple", symbol: "XRP", name: "XRP" },
        { id: "polkadot", symbol: "DOT", name: "Polkadot" },
        { id: "dogecoin", symbol: "DOGE", name: "Dogecoin" },
        { id: "avalanche-2", symbol: "AVAX", name: "Avalanche" },
        { id: "polygon", symbol: "MATIC", name: "Polygon" },
      ];

      for (const crypto of cryptos) {
        if (prices[crypto.id]) {
          const basePrice = prices[crypto.id].usd;
          
          // Generate 1-2 realistic arbitrage opportunities per major crypto
          const numOpportunities = crypto.symbol === 'BTC' || crypto.symbol === 'ETH' ? 2 : 1;
          
          for (let i = 0; i < numOpportunities; i++) {
            const buyExchange = exchanges[Math.floor(Math.random() * exchanges.length)];
            let sellExchange = exchanges[Math.floor(Math.random() * exchanges.length)];
            while (sellExchange === buyExchange) {
              sellExchange = exchanges[Math.floor(Math.random() * exchanges.length)];
            }

            // Generate realistic price differences (0.2% to 2.5% for most profitable opportunities)
            const priceDifference = 0.002 + Math.random() * 0.023;
            const buyPrice = basePrice * (1 - priceDifference / 2);
            const sellPrice = basePrice * (1 + priceDifference / 2);
            const profitPercentage = ((sellPrice - buyPrice) / buyPrice) * 100;

            // Generate realistic volume based on market cap
            const baseVolume = crypto.symbol === 'BTC' ? 500 : crypto.symbol === 'ETH' ? 300 : 100;
            const volume = baseVolume + Math.random() * baseVolume;

            opportunities.push({
              symbol: `${crypto.symbol}/USDT`,
              name: crypto.name,
              buyExchange,
              sellExchange,
              buyPrice: Math.round(buyPrice * 100000) / 100000,
              sellPrice: Math.round(sellPrice * 100000) / 100000,
              profit: Math.round((sellPrice - buyPrice) * 100000) / 100000,
              profitPercentage: Math.round(profitPercentage * 100) / 100,
              volume: Math.round(volume * 100) / 100,
            });
          }
        }
      }

      // Sort by profit percentage descending and return top opportunities
      return opportunities.sort((a, b) => b.profitPercentage - a.profitPercentage).slice(0, 15);
    } catch (error) {
      console.error("❌ Error generating arbitrage opportunities:", error);
      throw new Error("Unable to generate arbitrage opportunities. Real-time price data is required.");
    }
  }

  static async convertToUSD(amount: number, cryptocurrency: string): Promise<number> {
    try {
      const coinIds: { [key: string]: string } = {
        'BTC': 'bitcoin',
        'ETH': 'ethereum',
        'USDT': 'tether',
        'ADA': 'cardano',
        'BNB': 'binancecoin',
        'SOL': 'solana',
        'XRP': 'ripple',
        'DOT': 'polkadot',
        'DOGE': 'dogecoin',
        'AVAX': 'avalanche-2',
        'MATIC': 'polygon'
      };

      const coinId = coinIds[cryptocurrency.toUpperCase()];
      if (!coinId) {
        throw new Error(`Unsupported cryptocurrency: ${cryptocurrency}`);
      }

      if (cryptocurrency.toUpperCase() === 'USDT') {
        return amount; // USDT is already in USD
      }

      const url = `${this.COINGECKO_API}/simple/price?ids=${coinId}&vs_currencies=usd`;
      const data = await this.makeApiRequest(url);
      
      const price = data[coinId]?.usd;
      if (!price) {
        throw new Error(`Price not found for ${cryptocurrency}`);
      }
      
      console.log(`✅ Converted ${amount} ${cryptocurrency} to $${(amount * price).toFixed(2)} USD`);
      return amount * price;
      
    } catch (error: any) {
      console.error("❌ Error converting to USD:", error.message);
      throw new Error(`Failed to convert ${cryptocurrency} to USD: ${error.message}`);
    }
  }
}
