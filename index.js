module.exports = function print(message) {
  const starLine = '*'.repeat(message.length);
  console.log(starLine);
  console.log(message);
  console.log(starLine);
}
