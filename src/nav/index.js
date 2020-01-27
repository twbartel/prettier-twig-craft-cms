const { NavParser, IfChildrenParser, ChildrenParser } = require("./nav-parse");
const { printNav, printChildren, printIfChildren } = require("./nav-print");

const melodyExtension = {
    tags: [NavParser, IfChildrenParser, ChildrenParser]
};

module.exports = {
    melodyExtensions: [melodyExtension],
    printers: {
        CraftCMS_NavStatement: printNav,
        CraftCMS_ChildrenStatement: printChildren,
        CraftCMS_IfChildrenStatement: printIfChildren
    }
};
