module.exports = function addVersion(st, version) {
    if (typeof st !== "string")
			throw new TypeError("input must be a string");
    if (typeof version !== "number")
			throw new TypeError("version must be a number");
    return st + "_v" + version + ".0";
};
