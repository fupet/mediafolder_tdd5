/**
 * @module controllers/Chat
 * @requires module:collections/Messages
 * @requires module:views/Chat
 */

var Backbone = require('backbone'),
//This controller initializes the model and the view, so it needs them.
//	Messages = require('./messages'),
//	ChatView = require('./chatView'),

//The controller uses Marionette Controller as its base.
	MediaController = Backbone.Marionette.Controller.extend(
		/** @lends module:controllers/Chat~MediaController.prototype */
		{
			/**
			 * @class MediaController
			 * @constructs
			 * @extends external:Backbone.Marionette.Controller
			 */
			//This function automatically runs, when we create an instance from this module.
			initialize : function() {}
		}
	);

module.exports = MediaController;