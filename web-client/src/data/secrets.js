/**
 * Object containing various secrets and configurations.
 * @typedef {Object} Secrets
 * @property {string} clientToken - The client token.
 * @property {string} serverPort - The server port.
 * @property {string} serverUrl - The server URL.
 * @property {string} token - The token.
 * @property {string} toolsPath - The tools path.
 * @property {Object} localStorageKeys - The keys for local storage.
 * @property {Object[]} formOptions - The options for forms.
 * @property {Object[]} toolHeaders - The headers for tools.
 */

/**
 * Object containing names of secrets.
 * @typedef {Object} SecretNames
 * @property {string} clientToken - The name of the client token secret.
 * @property {string} serverPort - The name of the server port secret.
 * @property {string} serverUrl - The name of the server URL secret.
 * @property {string} localStorageKeys - The name of the local storage keys secret.
 * @property {string} token - The name of the token secret.
 * @property {string} formOptions - The name of the form options secret.
 * @property {string} toolHeaders - The name of the tool headers secret.
 * @property {string} toolsPath - The name of the tools path secret.
 * @property {string} isDarkMode - The name of the dark mode secret.
 * @property {string} displayMode - The name of the display mode secret.
 */

/**
 * Retrieves the secret value based on the provided key.
 * @param {string} key - The key of the secret.
 * @returns {*} - The secret value.
 */
const getSecret = (key) => secrets[key];

/**
 * The secrets object.
 * @type {Secrets}
 */
const secrets = {
  clientToken: import.meta.env.VITE_CLIENT_TOKEN || "abc123",
  serverPort: import.meta.env.VITE_SERVER_PORT || "",
  serverUrl: import.meta.env.VITE_SERVER_URL || 'api.ryanromig.com',
  token: import.meta.env.VITE_TOKEN || "abc123",
  toolsPath:"/tools",
  localStorageKeys: {
    tools: 'tools'
  },
  // formOptions: {
  //   toolTypes: [
  //     {
  //       displayName: 'Wax Pattern Tool',
  //       abbrv: 'WT',
  //     },
  //     {
  //       displayName: 'Wax Chill Tool',
  //       abbrv: "WCT"
  //     },
  //   ],

  //   locations: [
  //     {
  //       displayName: "Warehouse",
  //       secondaryLocations: [

  //       ]
  //     },
  //     {
  //       displayName: 'Wax',
  //       secondaryLocations: [

  //       ]
  //     }
  //   ]
  // },
  toolHeaders: [
    {
      key: 'partNumber',
      displayName: "Part Number"

    },
    {
      key: 'toolId',
      displayName: 'Tool Id'
    },
    {
      key: 'location',
      displayName: 'Location'
    },

    {
      key: 'owner',
      displayName: 'Owner'
    },
    {
      key: 'type',
      displayName: 'Type'
    },
    {
      key: "historicNumbers",
      displayName: 'Historic Parts ',
    },
    {
      key: "size",
      displayName: 'Size (inches)',
    },
    {
      key: "weight",
      displayName: 'Weight(pounds)',
    },
    {
      key: "status",
      displayName: 'Status',
    },
    {
      key: "customerId",
      displayName: 'Customer ID',
    },
    {
      key: "notes",
      displayName: 'Notes',
    },
    {
      key: "shelfLocation",
      displayName: 'Shelf Location',
    },
    {
      key: "aquisitionCost",
      displayName: 'Aq. Cost',
    },
  ]
};

/**
 * The names of the secrets.
 * @type {SecretNames}
 */
const secretNames = {
  clientToken: 'clientToken',
  serverPort: 'serverPort',
  serverUrl: 'serverUrl',
  localStorageKeys: 'localStorageKeys',
  token: 'token',
  formOptions: 'formOptions',
  toolHeaders: 'toolHeaders',
  toolsPath:'toolsPath',
  isDarkMode:'isDarkMode',
  displayMode:'displayMode',
};

export { getSecret, secretNames };