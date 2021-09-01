function isUrl(string) {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  return regexp.test(string);
}

function toFloat(string) {
  return parseFloat(string.replace(/\./g, '').replace(',', '.'));
}

export default {
  isUrl,
  toFloat,
};