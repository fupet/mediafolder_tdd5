var /*assert = require('chai').assert,
	sinon = require('sinon'),*/
//	fauxServer = require('backbone-faux-server'),

	MediaController = require('../../libs/MediaFolder/mediaController'),

	testContent = require('./content/testcontent.html'),
	testUtils = require('../setup_utils');

suite('mediaController', function() {
	setup(function() {
		testUtils.loadTestContent(testContent);

		this.mediaController = new MediaController();

	});
});
