// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Start",
      link: {
        type: 'generated-index',
        title: 'Start',
        description: 'Learn how to get started with the platform',
      },
      items: [
        "start/embed",
        "start/errors",
        "start/first-query",
        "start/getting-updates",
        "start/mempool",
      ],
    },

    {
      type: "category",
      label: "Authorisation",
      link: {
        type: 'generated-index',
        title: 'Authorisation Documentation',
        description: 'Learn about how to generate and use authorisation tokens',
      },
      items: [
        "authorisation/how-to-generate",
        "authorisation/how-to-use",
        "authorisation/websocket",
      ],
    },

    {
      type: "category",
      label: "Using the IDE",
      link: {
        type: 'generated-index',
        title: 'Using the IDE',
        description: 'Explore all functionalities of the platform\'s IDE',
      },
      items: [
        "ide/account",
        "ide/code",
        "ide/paid",
        "ide/points",
        "ide/private",
        "ide/query",
        "ide/search",
        "ide/share",
        "ide/team",
        "ide/tradingview",
        "ide/variables",
      ],
    },

    {
      type: "category",
      label: "Building Queries",
      link: {
        type: 'generated-index',
        title: 'Building Queries Documentation',
        description: 'Learn how to build powerful queries',
      },
      items: [
        {
          type: "category",
          label: "Capabilities",
          link: {
            type: 'generated-index',
            title: 'Capabilities',
            description: 'Explore the platform\'s query capabilities',
          },
          items: [
            "graphql/datetime",
            "graphql/calculations",
            "graphql/combined",
            "graphql/filters",
            "graphql/limits",
            "graphql/capabilities/aggregated_metrics",
            "graphql/capabilities/array-intersect",
            "graphql/capabilities/patterns",
            "graphql/capabilities/query_fact_records",
            "graphql/capabilities/subscription_aggregates",
            "graphql/capabilities/subscription_facts",
            "graphql/optimizing-graphql-queries",
            "graphql/postman",
            "graphql/query",
            "graphql/sorting",
          ],
        },
        {
          type: "category",
          label: "Dataset",
          link: {
            type: 'generated-index',
            title: 'Dataset Overview',
          },
          items: [
            "graphql/dataset/archive",
            "graphql/dataset/combined",
            "graphql/dataset/database",
            "graphql/dataset/EAP",
            "graphql/dataset/network",
            "graphql/dataset/options",
            "graphql/dataset/realtime",
            "graphql/dataset/select-blocks",
          ],
        },
        {
          type: "category",
          label: "Metrics",
          link: {
            type: 'generated-index',
            title: 'Metrics',
          },
          items: [
            "graphql/metrics/alias",
            "graphql/metrics/count",
            "graphql/metrics/distinct",
            "graphql/metrics/if",
            "graphql/metrics/metrics",
            "graphql/metrics/priceAsymmetry",
            "graphql/metrics/selectWhere",
            "graphql/metrics/statistics",
            "graphql/metrics/sum",
            "graphql/metrics/uniq",
            "graphql/metrics/quantile"
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Streaming",
      link: {
        type: 'generated-index',
        title: 'Streaming Overview',
      },
      items: [
        {
          type: "category",
          label: "Streaming via Subscriptions",
          link: {
            type: 'generated-index',
            title: 'Streaming via Subscriptions',
          },
          items: [
            "subscriptions/subscription",
            "subscriptions/trigger",
            "subscriptions/websockets",
            "subscriptions/examples",
            "subscriptions/example-rust",
            "subscriptions/mempool-subscriptions",
            "subscriptions/backfilling-subscription"
          ],
        },
        {
          type: "category",
          label: "Data Streams",
          link: {
            type: 'generated-index',
            title: 'Data Streams Overview',
          },
          items: [
            "streams/kafka-streaming-concepts",
            {
              type: "category",
              label: "Go Example",
              items: ["streams/kafka-streams-go"],
            },
            {
              type: "category",
              label: "Java Example",
              items: ["streams/kafka-streams-java"],
            },
            {
              type: "category",
              label: "JavaScript Example",
              items: ["streams/kafka-streams-js"],
            },
            {
              type: "category",
              label: "Python Example",
              items: ["streams/kafka-streams-python"],
            },
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Understanding Cubes",
      link: {
        type: 'generated-index',
        title: 'Understanding Cubes Overview',
      },
      items: [
        {
          type: "category",
          label: "EVM Cube",
          link: {
            type: 'generated-index',
            title: 'EVM Cube Overview',
          },
          items: [
            "cubes/EVM",
            "cubes/balance-updates-cube",
            "cubes/dextrades-dextradesbyTokens",
            "cubes/dextrades",
            "cubes/dextradesbyTokens",
            "cubes/transaction-cube",
            "cubes/transfers-cube",
          ],
        },
        "cubes/solana",
      ],
    },

    {
      type: "category",
      label: "L1 Chains",
      link: {
        type: 'generated-index',
        title: 'L1 Chains Overview',
      },
      items: [
        {
          type: "category",
          label: "Ethereum",
          link: {
            type: 'generated-index',
            title: 'Ethereum Overview',
          },
          items: [
            "examples/blocks/blocks-api",
            "examples/calls/smartcontract",
            "examples/calls/smartcontract-filterby",
            "examples/mempool/mempool-api",
            {
              type: "category",
              label: "Balances",
              items: [
                "examples/balances/balance-api",
                "examples/token-holders/token-holder-api",
              ],
            },
            {
              type: "category",
              label: "Token Transfers",
              items: ["examples/transfers/erc20-token-transfer-api"],
            },
            {
              type: "category",
              label: "DEX Trades",
              link: {
                type: 'generated-index',
                title: 'DEX Trades',
              },
              items: [
                "examples/dextrades/dex-api",
                "examples/dextrades/token-trades-apis",
                "examples/dextrades/trades-of-an-address-api",
                "examples/dextrades/pair-creation-time",
                "examples/dextrades/crypto-coin-ticker",
                "examples/realtimetrades",
                "examples/dextrades/DEXScreener/evm_dexscreener",
                "examples/dextrades/pools-api"
              ],
            },
            {
              type: "category",
              label: "NFT",
              items: [
                "examples/nft/nft-api",
                "examples/nft/nft-ownership-api",
                "examples/nft/nft-trades-apI",
              ],
            },
            {
              type: "category",
              label: "Ethers Library",
              items: [
                "examples/ethers-library/debug_traceCall",
                "examples/ethers-library/debug_traceTransaction",
                "examples/ethers-library/eth-getbalance",
                "examples/ethers-library/eth_blockNumber",
                "examples/ethers-library/eth_gasPrice",
                "examples/ethers-library/eth_getBlockReceipts",
                "examples/ethers-library/eth_getCode",
                "examples/ethers-library/eth_getLogs",
                "examples/ethers-library/eth_getTransactionByHash",
                "examples/ethers-library/eth_getTransactionReceipt",
                "examples/ethers-library/eth_subscribe",
              ],
            },
          ],
        },

        {
          type: "category",
          label: "BSC",
          link: {
            type: 'generated-index',
            title: 'BSC Overview',
          },
          items: [
            "examples/BSC/bsc-balance-updates",
            "examples/BSC/bsc-calls-api",
            "examples/BSC/bsc-dextrades",
            "examples/BSC/bsc-events-api",
            "examples/BSC/bsc-nft",
            "examples/BSC/bsc-transfers",
            "examples/BSC/gra-fun-api"
          ],
        },
        {
          type: "category",
          label: "Solana",
          link: {
            type: 'generated-index',
            title: 'Solana API Documentation',
          },
          items: [
            "examples/Solana/Moonshot-API",
            "examples/Solana/Pump-Fun-API",
            "examples/Solana/Pump-Fun-Marketcap-Bonding-Curve-API",
            "examples/Solana/Solana-AldrinAmm-api",
            "examples/Solana/Solana-DexPools-API",
            "examples/Solana/Solana-Jito-Bundle-api",
            "examples/Solana/Solana-Lifinity-dex-api",
            "examples/Solana/Solana-Meteora-api",
            "examples/Solana/Solana-OpenBook-api",
            "examples/Solana/Solana-Phoenix-api",
            "examples/Solana/Solana-Raydium-DEX-API",
            "examples/Solana/raydium-clmm-API",
            "examples/Solana/solana-balance-updates",
            "examples/Solana/solana-dextrades",
            "examples/Solana/solana-instructions",
            "examples/Solana/solana-jupiter-api",
            "examples/Solana/solana-logs",
            "examples/Solana/solana-nft",
            "examples/Solana/solana-orca-dex-api",
            "examples/Solana/solana-rewards",
            "examples/Solana/solana-search-tokens",
            "examples/Solana/solana-transactions",
            "examples/Solana/solana-transfers",
            "examples/Solana/solana-zeta",
            "examples/dextrades/DEXScreener/solana_dexscreener",
          ],
        },

        {
          type: "category",
          label: "Tron",
          link: {
            type: 'generated-index',
            title: 'Tron Overview',
          },
          items: [
            "examples/Tron/sunswap-api",
            "examples/Tron/tron-balance-updates",
            "examples/Tron/tron-dextrades",
            "examples/Tron/tron-mempool",
            "examples/Tron/tron-nft",
            "examples/Tron/tron-sunpump",
            "examples/Tron/tron-transactions-api",
            "examples/Tron/tron-transfers",
            "examples/Tron/usdt-trc20-api",
          ],
        },
        {
          type: "category",
          label: "Optimism",
          link: {
            type: 'generated-index',
            title: 'Optimism Overview',
          },
          items: [
            "examples/Optimism/optimism-balance-updates",
            "examples/Optimism/optimism-dextrades",
            "examples/Optimism/optimism-nft",
            "examples/Optimism/optimism-transfers",
          ],
        },
      ],
    },

    {
      type: "category",
      label: "L2 Chains",
      link: {
        type: 'generated-index',
        title: 'L2 Chains Overview',
      },
      items: [
        {
          type: "category",
          label: "Arbitrum",
          link: {
            type: 'generated-index',
            title: 'Arbitrum Overview',
          },
          items: [
            "examples/Arbitrum/Balance_Updates",
            "examples/Arbitrum/Blocks_Transactions",
            "examples/Arbitrum/DexTrades",
            "examples/Arbitrum/Smart_Contract_Calls",
            "examples/Arbitrum/Smart_Contract_Events",
          ],
        },
        {
          type: "category",
          label: "Base",
          link: {
            type: 'generated-index',
            title: 'Base Overview',
          },
          items: [
            "examples/Base/aerodrome-base-api",
            "examples/Base/base-balance-updates",
            "examples/Base/base-coins-api",
            "examples/Base/base-dextrades",
            "examples/Base/base-nft",
            "examples/Base/base-transfers",
          ],
        },
        {
          type: "category",
          label: "Matic (Polygon)",
          link: {
            type: 'generated-index',
            title: 'Matic Overview',
          },
          items: [
            "examples/Matic/matic-balance-updates",
            "examples/Matic/matic-dextrades",
            "examples/Matic/matic-nft",
            "examples/Matic/matic-transfers",
          ],
        },
        {
          type: "category",
          label: "OpBNB",
          link: {
            type: 'generated-index',
            title: 'OpBNB Overview',
          },
          items: [
            "examples/OpBNB/opbnb-balance-updates",
            "examples/OpBNB/opbnb-dextrades",
            "examples/OpBNB/opbnb-nft",
            "examples/OpBNB/opbnb-transfers",
          ],
        },
        {
          type: "category",
          label: "Cross-Chain",
          link: {
            type: 'generated-index',
            title: 'Cross-Chain API',
          },
          items: ["examples/cross-chain/cross-chain-api"],
        },
      ],
    },

    {
      type: "category",
      label: "How-To Guides",
      link: {
        type: 'generated-index',
        title: 'How-To Guides Overview',
      },
      items: [
        {
          type: "category",
          label: "NFT Creator Portfolio",
          link: {
            type: 'generated-index',
            title: 'NFT Creator Portfolio',
          },
          items: [
            "usecases/nft-creator/gettingstarted",
            "usecases/nft-creator/pages",
            "usecases/nft-creator/app",
            "usecases/nft-creator/components",
          ],
        },
        {
          type: "category",
          label: "P&L Calculator",
          link: {
            type: 'generated-index',
            title: 'P&L Calculator Overview',
          },
          items: [
            "usecases/p-l-product/overview",
            "usecases/p-l-product/balanceUpdates",
            "usecases/p-l-product/price",
            "usecases/p-l-product/pl",
          ],
        },
        {
          type: "category",
          label: "TradingView Advanced Charts",
          link: {
            type: 'generated-index',
            title: 'TradingView Advanced Charts Overview',
          },
          items: [
            "usecases/tradingview-advanced-charts/getting-started",
            "usecases/tradingview-advanced-charts/component",
            "usecases/tradingview-advanced-charts/datafeed",
            "usecases/tradingview-advanced-charts/getBars",
            "usecases/tradingview-advanced-charts/advancedChart",
          ],
        },
        {
          type: "category",
          label: "Build your Own Real-Time Balance Checker",
          link: {
            type: 'generated-index',
            title: 'Real-Time Balance Checker',
          },
          items: [
            "usecases/real-time-balance-tracker/overview",
            "usecases/real-time-balance-tracker/scripts",
            "usecases/real-time-balance-tracker/ui",
          ],
        },
        {
          type: "category",
          label: "Build Lightweight TradingView Chart with Real-time Data",
          link: {
            type: 'generated-index',
            title: 'TradingView Chart with Real-Time Data',
          },
          items: ["usecases/tradingview/tradingview"],
        },
        {
          type: "category",
          label:
            "Subscribing to Realtime OHLC with TradingView Advanced Charts",
          link: {
            type: 'generated-index',
            title: 'Realtime OHLC with TradingView',
          },
          items: [
            "usecases/tradingview-subscription-realtime/getting-started",
            "usecases/tradingview-subscription-realtime/historical_OHLC",
            "usecases/tradingview-subscription-realtime/realtime_OHLC",
            "usecases/tradingview-subscription-realtime/custom_datafeed",
            "usecases/tradingview-subscription-realtime/widget",
            "usecases/tradingview-subscription-realtime/final-step",
          ],
        },

        "usecases/Top-10-ethereum-tokens",
        "usecases/arbitrum-sniper-bot",
        "usecases/automated-trading-ethereum-volume-surge-bot",
        "usecases/base-sniper-bot",
        "usecases/crypto-dashboard",
        "usecases/dapps",
        "usecases/discord-bot",
        "usecases/mempool-transaction-fee",
        "usecases/monitoring-solana-blockchain-real-time-tutorial",
        "usecases/nft-analytics",
        "usecases/nft-scanner",
        "usecases/real-time-historical-ethereum-price-excel-google-sheets",
        "usecases/sandwitch-detection",
        "usecases/solana-arbitrage-dashboard",
        "usecases/solana-sniper-bot",
        "usecases/streaming-moonshot-prices",
        "usecases/telegram-bot",
        "usecases/tokenholder-heatmap",
        "usecases/trading-indicators",
      ],
    },

    {
      type: "category",
      label: "Data in Cloud",
      link: {
        type: 'generated-index',
        title: 'Data in Cloud',
      },
      items: [
        {
          type: "category",
          label: "Protobuf",
          link: {
            type: 'generated-index',
            title: 'Protobuf Overview',
          },
          items: [
            "cloud/protobuf/evm",
            "cloud/protobuf/protobuf",
            "cloud/protobuf/solana",
            "cloud/protobuf/tron",
            "cloud/protobuf/objects",
          ],
        },
        {
          type: "category",
          label: "Examples",
          link: {
            type: 'generated-index',
            title: 'Cloud Examples',
          },
          items: [
            "cloud/examples/appsync",
            "cloud/examples/lambda-functions",
            "cloud/examples/s3-eth-tutorial",
          ],
        },

      ],
    },

    {
      type: "category",
      label: "API Blog",
      link: {
        type: 'generated-index',
        title: 'API Blog',
      },
      items: [
        "API-Blog/migrate-v1-v2",
        "API-Blog/track-token-lock-unlock",
        "API-Blog/use-regular-expressions-to-search-solana-logs",
        "API-Blog/what-are-internal-transactions-how-to-get-them",
      ],
    },
  ],
};

module.exports = sidebars;
