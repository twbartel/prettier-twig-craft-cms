const {
    melodyExtensions: navExtensions,
    printers: navPrinters
} = require("./nav");

module.exports = {
    melodyExtensions: [...navExtensions],
    printers: {
        ...navPrinters
    }
};
