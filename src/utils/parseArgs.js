const parseArgs = (rawArgs) => {
  const args = rawArgs.reduce((agg, arg) => {
    const match = arg.match(/^--(?<key>\w+)=(?<value>.+)$/);
    return match ? { ...agg, [match.groups.key]: match.groups.value } : agg;
  });

  return args;
};

module.exports = {
  parseArgs,
};
