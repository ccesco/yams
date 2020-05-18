let common = [
  'tests/core/features/**/*.feature',
  '--require-module ts-node/register',
  '--require tests/core/steps/**/*.ts',
  '--format progress-bar',
  '--format node_modules/cucumber-pretty'
].join(' ');

module.exports = {
  default: common,
  // More profiles can be added if desired
};
