/**
 * @module models/Media
 */

var Backbone = require('backbone'),
//	_ = require('underscore'),

	/**
	 * @class
	 * @extends external:Backbone.Model
	 */
		//The marionette hasn't extended the backbone model, so we have to use backbone.model
		//when we want to create one.
		Media = Backbone.Model.extend(
		/** @lends module:models/Media~Media.prototype */
		{

		}
	);
module.exports = Media;