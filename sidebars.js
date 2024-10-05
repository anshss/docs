/**
 * Creating a sidebar enables you to:
 create an ordered group of docs
 render a sidebar for each doc of that group
 provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  // learningLab: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'learningLab',
  //   },
  // ],

  // ecosystem: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'Ecosystem',
  //   },
  // ],

  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: [
        'intro/overview',
        'intro/what-is-lit-protocol',
        'resources/how-it-works',
      ],
    },
    {
      type: 'category',
      label: 'Installing the Lit SDK',
      link: {
        type: 'doc',
        id: 'sdk/installation',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Migrating from earlier versions',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Migrating from earlier versions',
            description:
              'Learn how to migrate from earlier versions of the Lit SDK!',
            keywords: ['migrations'],
          },
          items: [
            'sdk/migrations/6.0.0',
            'sdk/migrations/4.0.0',
            'sdk/migrations/3.2.0',
            {
              type: 'category',
              label: 'Migrating from 2.x.x to 3.x.x',
              link: {
                type: 'doc',
                id: 'sdk/migrations/3.0.0/overview',
              },
              collapsed: true,
              items: ['sdk/migrations/3.0.0/changes'],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Connecting to a Lit Network',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'connecting-to-a-lit-network/connecting',
      },
      items: [
        'connecting-to-a-lit-network/mainnets',
        'connecting-to-a-lit-network/testnets',
        'connecting-to-a-lit-network/migrating-to-datil',
        {
          type: 'category',
          label: 'Lit Blockchains',
          collapsed: true,
          items: [
            'connecting-to-a-lit-network/lit-blockchains/chronicle-yellowstone',
            'connecting-to-a-lit-network/lit-blockchains/chronicle',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Paying for Usage of Lit',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'paying-for-lit/overview',
      },
      items: [
        {
          type: 'category',
          label: 'Capacity Credits',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'paying-for-lit/capacity-credits',
          },
          items: [
            {
              type: 'category',
              label: 'Minting a Capacity Credit',
              collapsed: true,
              items: [
                'paying-for-lit/minting-capacity-credit/via-contract',
                'paying-for-lit/minting-capacity-credit/via-explorer',
              ],
            },
            'paying-for-lit/delegating-credit',
            'paying-for-lit/using-delegated-auth-sig',
          ],
        },
        'paying-for-lit/payment-delegation-db',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Lit SDK Guides',
        description: 'Learn how to use the Lit SDK!',
        keywords: ['guides'],
      },
      items: [
        {
          type: 'category',
          label: 'Authentication',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Session Signatures',
              link: {
                type: 'doc',
                id: 'sdk/authentication/session-sigs/intro',
              },
              collapsed: true,
              items: [
                'sdk/authentication/session-sigs/resources-and-abilities',
                'sdk/authentication/session-sigs/capability-objects',
                'sdk/capacity-credits',
                'sdk/authentication/session-sigs/get-session-sigs',
                'sdk/authentication/session-sigs/get-pkp-session-sigs',
                'sdk/authentication/session-sigs/get-lit-action-session-sigs',
                'sdk/authentication/session-sigs/usage',
              ],
            },
            'sdk/authentication/security',
          ],
        },
        {
          type: 'category',
          label: 'User Wallets',
          link: {
            type: 'doc',
            id: 'user-wallets/overview',
          },
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Programmable Key Pairs (PKPs)',
              link: {
                type: 'doc',
                id: 'user-wallets/pkps/overview',
              },
              collapsed: true,
              items: [
                'user-wallets/pkps/quick-start',
                {
                  type: 'category',
                  label: 'Minting a PKP',
                  link: {
                    type: 'doc',
                    id: 'user-wallets/pkps/minting/overview',
                  },
                  collapsed: true,
                  items: [
                    'user-wallets/pkps/minting/via-contracts',
                    'user-wallets/pkps/minting/via-social',
                    'user-wallets/pkps/minting/via-web-authn',
                    'user-wallets/pkps/minting/via-multiple-auth-methods',
                  ],
                },
                'user-wallets/pkps/walletconnect',
                {
                  type: 'category',
                  label: 'Advanced Topics',
                  collapsed: true,
                  items: [
                    {
                      type: 'category',
                      label: 'Auth Methods',
                      collapsed: true,
                      link: {
                        type: 'doc',
                        id: 'user-wallets/pkps/advanced-topics/auth-methods/overview',
                      },
                      items: [
                        'user-wallets/pkps/advanced-topics/auth-methods/add-remove-auth-methods',
                        'user-wallets/pkps/advanced-topics/auth-methods/social-login',
                        'user-wallets/pkps/advanced-topics/auth-methods/web-authn',
                        'user-wallets/pkps/advanced-topics/auth-methods/email-sms',
                        'user-wallets/pkps/advanced-topics/auth-methods/custom-auth',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Claimable Keys (HD Keys)',
                      link: {
                        type: 'doc',
                        id: 'user-wallets/pkps/claimable-keys/intro',
                      },
                      collapsed: true,
                      items: ['user-wallets/pkps/claimable-keys/usage'],
                    },
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Wrapped Keys',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'user-wallets/wrapped-keys/overview',
              },
              items: [
                'user-wallets/wrapped-keys/generating-wrapped-key',
                'user-wallets/wrapped-keys/importing-key',
                'user-wallets/wrapped-keys/exporting-wrapped-key',
                'user-wallets/wrapped-keys/getting-wrapped-key-metadata',
                'user-wallets/wrapped-keys/storing-wrapped-key-metadata',
                'user-wallets/wrapped-keys/listing-wrapped-keys',
                'user-wallets/wrapped-keys/sign-message',
                'user-wallets/wrapped-keys/sign-transaction',
                'user-wallets/wrapped-keys/custom-wrapped-keys',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Encryption and Access Control',
          link: {
            type: 'doc',
            id: 'sdk/access-control/intro',
          },
          collapsed: true,
          items: [
            'sdk/access-control/quick-start',
            {
              type: 'category',
              label: 'Advanced Topics',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Advanced Topics',
                keywords: ['encryption', 'decryption'],
              },
              items: [
                'sdk/access-control/jwt-auth',
                {
                  type: 'category',
                  label: 'Types of Conditions',
                  collapsed: true,
                  items: [
                    'sdk/access-control/condition-types/unified-access-control-conditions',
                    'sdk/access-control/condition-types/boolean-logic',
                  ],
                },
                {
                  type: 'category',
                  label: 'EVM',
                  collapsed: true,
                  items: [
                    'sdk/access-control/evm/basic-examples',
                    'sdk/access-control/evm/custom-contract-calls',
                    'sdk/access-control/evm/poap',
                    'sdk/access-control/evm/timelock',
                    'sdk/access-control/evm/siwe',
                  ],
                },
                {
                  type: 'category',
                  label: 'Solana',
                  collapsed: true,
                  link: {
                    type: 'doc',
                    id: 'sdk/access-control/solana/overview',
                  },
                  items: ['sdk/access-control/solana/siws-access-control'],
                },
                {
                  type: 'category',
                  label: 'Other Chains',
                  collapsed: true,
                  items: [
                    'sdk/access-control/other-chains/sol-rpc-conditions',
                    'sdk/access-control/other-chains/cosmos-conditions',
                  ],
                },
                {
                  type: 'category',
                  label: 'Off-Chain',
                  collapsed: true,
                  items: ['sdk/access-control/lit-action-conditions'],
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Decentralized Compute (Lit Actions)',
          link: {
            type: 'doc',
            id: 'sdk/serverless-signing/overview',
          },
          collapsed: true,
          items: [
            'sdk/serverless-signing/quick-start',
            'sdk/serverless-signing/deploying',
            {
              type: 'category',
              label: 'Advanced Topics',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Advanced Topics',
                keywords: ['compute', 'lit actions'],
              },
              items: [
                'sdk/serverless-signing/conditional-signing',
                'sdk/serverless-signing/fetch',
                'sdk/serverless-signing/processing-validation',
                'sdk/serverless-signing/key-claiming',
                'sdk/serverless-signing/eip191',
                'sdk/serverless-signing/dependencies',
                'sdk/serverless-signing/combining-decryption-shares',
                `sdk/serverless-signing/combining-signatures`,
                'sdk/serverless-signing/run-once',
                `sdk/serverless-signing/get-rpc-url`,
                'sdk/serverless-signing/broadcast-and-collect',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Appendix',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Appendix',
        description: 'Learn about the appendix for the Lit SDK!',
        keywords: ['appendix'],
      },
      items: [
        {
          type: 'category',
          label: 'Networks',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Lit Networks',
            description: 'Learn about the different Lit Networks!',
            keywords: ['networks'],
          },
          items: [
            {
              type: 'category',
              label: 'Lit Networks',
              collapsed: true,
              items: ['network/networks/testnet', 'network/networks/mainnet'],
            },
          ],
        },
        {
          type: 'category',
          label: 'Useful Tools',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Lit Tools',
            description:
              'Learn about the different tools that can help you with Lit SDK!',
            keywords: ['tools'],
          },
          items: [
            'tools/access-control',
            'tools/getlit-cli',
            'tools/event-listener',
            'tools/litexplorer',
            'tools/searchlit',
          ],
        },
        {
          type: 'category',
          label: 'Integrations',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Integrations with Lit SDK',
            description: 'Learn about the different integrations with Lit SDK!',
            keywords: ['integrations'],
          },
          items: [
            {
              type: 'category',
              label: 'Smart Contract Accounts',
              link: {
                type: 'doc',
                id: 'integrations/aa/overview',
              },
              collapsed: true,
              items: [
                'integrations/aa/alchemy-account-kit',
                'integrations/aa/pimlico',
                'integrations/aa/openfort',
                {
                  type: 'doc',
                  id: 'integrations/aa/candide',
                  label: 'Candide',
                },
              ],
            },
            {
              type: 'category',
              label: 'Storage',
              collapsed: true,
              items: [
                'integrations/storage/ceramic-example',
                'integrations/storage/irys',
              ],
            },
          ],
        },
        'sdk/tests',
      ],
    },
    {
      type: 'category',
      label: 'Resources and Support',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'support/intro',
      },
      items: [
        'intro/usecases',
        'resources/supported-chains',
        'resources/contracts',
        'resources/glossary',
        'support/faq',
        'support/bug-bounty',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Lit SDK API Reference',
        description:
          'Get the API reference for different versions of the Lit SDK!',
        keywords: ['api-reference'],
      },
      items: [
        'api-reference/latest',
        {
          type: 'category',
          label: 'Legacy SDK Versions',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Legacy SDK Versions',
            description:
              'Get the API reference for older versions of the Lit SDK!',
            keywords: ['api-reference'],
          },
          items: [
            'api-reference/v3-sdk',
            'api-reference/v2-sdk',
            'api-reference/v1-sdk',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Additional Examples',
      collapsed: true,
      items: ['additional-examples/intro'],
    },
  ],
};

module.exports = sidebars;
