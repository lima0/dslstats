const fetch = require('node-fetch');
const network = require(`./${process.platform}`);

const routerIP = network.gatewayIP(network.activeNICName());
const url = `http://${routerIP}/api/ntwk/dslinfo`;

(async () => {
  const resp = await fetch(url, {
    credentials: 'include',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.5',
      'Upgrade-Insecure-Requests': '1',
      'Sec-GPC': '1',
      'Cache-Control': 'max-age=0',
    },
    method: 'GET',
    mode: 'cors',
  });
  const stats = await resp.text();
  const statsButWithTrashRemoved = stats.substring(12, stats.length - 2);
  const statsButInJSON = JSON.parse(statsButWithTrashRemoved);
  console.log(statsButInJSON);
})();
