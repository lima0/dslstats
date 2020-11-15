const {execSync} = require('child_process');

exports.activeNICName = function() {
  const nicname = execSync('netstat -rn | grep UG | awk \'{print $NF}\'');
  return String(nicname).split('\n')[0];
};

exports.gatewayIP = function(nicName) {
  // exec(`ipconfig getoption ${nicName} router`, (err, output) => {
  //     if (err) {
  //         console.error(err);
  //         return
  //     }
  //     return output
  // })
  const gateway = execSync(`ipconfig getoption ${nicName} router`);
  return String(gateway).replace('\n', '');
};
