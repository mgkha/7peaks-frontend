const hashCode = (str: string) => {
  var hash = 0,
    i,
    chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const ColorLib = {
  /**
   * A hash function that returns color code from a string
   * @param {string} data
   * @returns {string} color code
   */
  stringToColor(data: string): string {
    var colorRange = [
      "#810CA8",
      "#FF7000",
      "#CE7777",
      "#FED049",
      "#3F0071",
      "#434242",
      "#395144",
      "#A4BE7B",
      "#DC3535",
      "#F0FF42",
    ];
    return colorRange[Math.abs(hashCode(data.toString()) % colorRange.length)];
  },
};

export default ColorLib;
