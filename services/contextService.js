function ContextService() { }

ContextService.prototype = {
	Init: function (securiteService, errorService, requestService, templateService, cacheService) {
		this.securiteService = securiteService;
		this.errorService = errorService;
		this.requestService = requestService;
		this.templateService = templateService;
	}
};

module.exports = new ContextService();