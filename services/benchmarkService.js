function BenchmarkService () {
}

BenchmarkService.prototype = {
	Execute: function (name, func, nbRepeat) {
		var startTime,
			stopTime,
			timeLaps;

		console.log("Début de " + name);

		nbRepeat = nbRepeat || 10000;
		
		startTime = new Date();
		
		
		for (var i = 0; i < nbRepeat; i++) {
			func(i);
		}

		stopTime =  new Date();
		
		timeLaps = stopTime.getTime() - startTime.getTime();

		console.log("temps effectué pour l'action " + name + " : " + parseInt(timeLaps / 10) / 100 + " secondes.");

		return timeLaps;
	},
	Compare: function (tabCompareTest, nbRepeat) {
        var timesLaps = [];
        for (var i = 0; i < tabCompareTest.length; i++){
            timesLaps[i] = this.Execute(tabCompareTest[i].name, tabCompareTest[i].func, nbRepeat);
        }

		this.ShowResult(tabCompareTest, timesLaps);
	},
	ShowResult: function (tabCompareTest, timesLaps) {
	}
}

module.exports = new BenchmarkService();
