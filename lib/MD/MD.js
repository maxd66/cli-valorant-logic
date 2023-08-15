"use strict";
exports.__esModule = true;
var MD = /** @class */ (function () {
    function MD() {
    }
    MD.prototype.writeMD = function (agent, map) {
        return "# ValoRandom Markdown Page\nThis is a Markdown file that can be generated from this project by running the markdown script.\n        \n## Agent\n        \nYour selected agent is " + agent + "\n        \n## Map\n        \nYour selected map is " + map;
    };
    return MD;
}());
exports["default"] = MD;
