"use strict";
exports.__esModule = true;
var HTML = /** @class */ (function () {
    function HTML() {
    }
    HTML.prototype.writePage = function (agent, map) {
        console.log("---Generating website...\n");
        return "<!DOCTYPE html>\n    <!DOCTYPE html>\n    <html lang=\"en\">\n      <head>\n        <meta charset=\"UTF-8\" />\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <title>ValoRandom</title>\n        <link href=\"./css/style.css\" rel=\"stylesheet\" />\n      </head>\n      <body>\n        <h1>Hey this is ValoRandom</h1>\n        <h2>Your selected agent is " + agent + ".</h2>\n        <h2>Your selected map is " + map + ".</h2>\n        <script src=\"./script/script.js\"></script>\n      </body>\n    </html>\n        ";
    };
    return HTML;
}());
exports["default"] = HTML;
