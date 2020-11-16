exports.gatewayIP = function(nicName) {
  const gateway =
  execSync(`ip route | grep default | head -n1 | cut -f3 -d" "`);
  return String(gateway).replace('\n', '');
};
