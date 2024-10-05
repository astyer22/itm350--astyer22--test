function calculateArea(width, height) {
  if(width < 0 || height < 0 ) {
    return "invaild can not find area of negative number";
  }
    return width * height;
}

module.exports = calculateArea;