function print(message) {
  const starLine = '*'.repeat(message.length);
  console.log(starLine);
  console.log(message);
  console.log(starLine);
}

if (require.main == module) {
  // Running as a script
  print(process.argv[2]);
} else {
  // Being required
  module.exports = print
}