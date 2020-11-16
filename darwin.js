const {execSync} = require('child_process');

exports.activeNICName = function() {
  const nicname = execSync('netstat -rn | grep UG | awk \'{print $NF}\'');
  return String(nicname).split('\n')[0];
};

exports.gatewayIP = function(nicName) {
  const gateway = execSync(`ipconfig getoption ${nicName} router`);
  return String(gateway).replace('\n', '');
};
