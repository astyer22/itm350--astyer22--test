// /parameter-range.js
function findSquareRoots(num) {
    if (num < 0) {
        return 'invaild can not find square root of negative number';
    }

    return Math.sqrt(num);
}



module.exports = findSquareRoots;
