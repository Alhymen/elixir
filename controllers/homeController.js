var mongo = require('mongodb');
var ControllerCore = require('./controllerCore.js');

function HomeController() { }

HomeController.prototype = ControllerCore.extend ({
	index: function (args, response, isAjax) {
		var MongoClient = mongo.MongoClient;
		var that = this;
		var Db = mongo.Db,
			Connection = mongo.Connection,
			Server = mongo.Server;

		var myCollection;
        var result;
        var paramsTpl={nom:"Jojo", prenom:args.prenom||"la frite"};
/*		var db = MongoClient.connect("mongodb://localhost:" + Connection.DEFAULT_PORT + "/vmedias", function (err, db) {
			if (err)
				throw err;
			console.log("connecter avec MongoDB !");
			myCollection = db.collection('user');
			myCollection.find().toArray(function (err, results) {
				if (err)
					throw err;
				console.log("results :", results);

				that._contextService.requestService.View(results[0].nom);
			});
		});
*/
        if (!isAjax) {
            result = this.contextService.templateService.DisplayViewHTML(this.GetTemplatePath("index"), paramsTpl);
        }
        else{
            result = this.contextService.templateService.DisplayViewJSON(paramsTpl);
        }
        this.RenderView (result, response);
    }
});
module.exports = new HomeController();