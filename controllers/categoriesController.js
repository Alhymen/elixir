var mongo = require('mongodb');
var ControllerCore = require('./controllerCore.js');

function CategoriesController() { }

// TODO appel de mongodb à faire récupérer les categories
CategoriesController.prototype = ControllerCore.extend ({
	list: function (page) {
		return page;
	},
	detail: function () {
		return "";
	}
});

module.exports = new CategoriesController();