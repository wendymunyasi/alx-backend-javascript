const Utils = {
  calculateNumber(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    if (type === 'SUM') {
      return roundedA + roundedB;
    }
    if (type === 'SUBTRACT') {
      return roundedA - roundedB;
    }
    if (type === 'DIVIDE') {
      //  OR return roundedB === 0 ? 'Error' : roundedA / roundedB;
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    }
    return 0;
  },
};

module.exports = Utils;
