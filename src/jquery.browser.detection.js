(function ($) {

	"use strict";

	$.browserDetection = function (options) {

		var data = {}, browser, version, os;

		parseUserAgent();

		// exception rules
		renameOsx();
		cutSafariVersion();

		prepareData();
		processOptions();

		return data;


		function parseUserAgent() {
			var userAgent = navigator.userAgent.toLowerCase(),
				browserParts = /(ie|firefox|chrome|safari|opera)(?:.*version)?(?:[ \/])?([\w.]+)/.exec(userAgent);

			browser = browserParts[1],
			version = browserParts[2],
			os = /(mac|win|linux|freebsd|mobile|iphone|ipod|ipad|android|blackberry|j2me|webtv)/.exec(userAgent)[1];
		}

		function prepareData() {
			data.browser = browser;
			data.version = parseInt(version, 10);
			data.os = os;
		}

		function renameOsx() {
			if (os === 'mac') {
				os = 'osx';
			}
		}

		function cutSafariVersion() {
			if (os === 'safari') {
				version = version.substring(0, 1);
			}
		}

		function processOptions() {
			options = options || {};

			if (options.addClasses) {
				$('html').addClass(data.os + ' ' + data.browser + ' ' + data.browser + '-' + data.version);
			}
		}

	};

})(jQuery);