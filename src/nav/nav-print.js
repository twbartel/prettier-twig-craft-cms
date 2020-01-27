const prettier = require("prettier");
const { group, indent, hardline, concat } = prettier.doc.builders;

const printNav = (node, path, print) => {
    const parts = [node.trimLeft ? "{%-" : "{%", " nav "];
    if (node.valueTarget) {
        parts.push(path.call(print, "valueTarget"));
    }
    if (node.sequence) {
        parts.push(" in ", path.call(print, "sequence"));
    }
    parts.push(node.trimRightNav ? " -%}" : " %}");

    const printedChildren = path.call(print, "body");
    parts.push(indent(concat([hardline, printedChildren])));

    parts.push(
        hardline,
        node.trimLeftEndnav ? "{%-" : "{%",
        " endnav ",
        node.trimRight ? "-%}" : "%}"
    );

    return group(concat(parts));
};

const printChildren = (node, path, print) => {
    const parts = [node.trimLeft ? "{%-" : "{%"];
    parts.push(" children ");
    parts.push(node.trimRight ? "-%}" : "%}");
    return concat(parts);
};

const printIfChildren = (node, path, print) => {
    const parts = [node.trimLeft ? "{%-" : "{%"];
    parts.push(" ifchildren ");
    parts.push(node.trimRightIfChildren ? "-%}" : "%}");

    const printedChildren = path.call(print, "body");
    parts.push(indent(concat([hardline, printedChildren])));

    parts.push(
        hardline,
        node.trimLeftEndIfChildren ? "{%-" : "{%",
        " endifchildren ",
        node.trimRight ? "-%}" : "%}"
    );

    return concat(parts);
};

module.exports = {
    printNav,
    printChildren,
    printIfChildren
};
