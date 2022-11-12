const smartTrim = (str, length, delim, appendix) => {
  let trimmedStr = str.substr(0, length + delim.lenght);
  let lastDelimIndex = trimmedStr.lastIndexOf(delim);
  if (lastDelimIndex != 0) trimmedStr = trimmedStr.substr(0, lastDelimIndex);

  if (trimmedStr) trimmedStr += appendix;
  return trimmedStr;
};
export default { smartTrim };