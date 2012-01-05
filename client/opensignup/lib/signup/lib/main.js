require("ember");
require("ember-statechart");
SU = Ember.Application.create({
	serverHost: '/'
});
require("./controllers/email");
require("./core_statechart");
require("./core_signup");

require("./views/signup_field");
require("./views/button");


