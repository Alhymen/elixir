var underscore = require("underscore"),
    path = require("path"),
    url = require("url"),
    fs = require("fs");

function TemplateService(paramsTemplate) {
}

TemplateService.prototype = {
    DisplayViewHTML: function(pathTemplate, params) {
//        var self = this;
        var data = fs.readFileSync(pathTemplate);
        if (!data){
            throw "error";
        }
        var preCompile = underscore.template (data.toString('utf8', 0, data.length));
        return preCompile(params);
    },
    DisplayViewJSON: function(params) {
        return params;
    }
};

module.exports = new TemplateService();