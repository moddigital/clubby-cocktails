(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], factory(root));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.ageCheck = factory(root);
	}
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {

	'use strict';

	//
	// Variables
	//

	var ageCheck = {}; // Object for public APIs
	var supports = !!document.querySelector && !!root.addEventListener; // Feature test
	var settings, modal, accept, decline, message;

	// Default settings
	var defaults = {
		modalId: 'age_check',
        acceptId: 'age_agree',
        declineId: 'age_decline',
        messageId: 'age_message',
        bodyClass: 'ac-shown',
        delay: 300,
	};


	//
	// Private methods
	//

	/**
	 * A simple forEach() implementation for Arrays, Objects and NodeLists
	 * @private
	 * @param {Array|Object|NodeList} collection Collection of items to iterate
	 * @param {Function} callback Callback function for each iteration
	 * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
	 */
	var forEach = function (collection, callback, scope) {
		if (Object.prototype.toString.call(collection) === '[object Object]') {
			for (var prop in collection) {
				if (Object.prototype.hasOwnProperty.call(collection, prop)) {
					callback.call(scope, collection[prop], prop, collection);
				}
			}
		} else {
			for (var i = 0, len = collection.length; i < len; i++) {
				callback.call(scope, collection[i], i, collection);
			}
		}
	};

	/**
	 * Merge defaults with user options
	 * @private
	 * @param {Object} defaults Default settings
	 * @param {Object} options User options
	 * @returns {Object} Merged values of defaults and options
	 */
	var extend = function ( defaults, options ) {
		var extended = {};
		forEach(defaults, function (value, prop) {
			extended[prop] = defaults[prop];
		});
		forEach(options, function (value, prop) {
			extended[prop] = options[prop];
		});
		return extended;
	};

	/**
	 * Handle events
	 * @private
	 */
	var eventHandler = function (event) {
		var target = event.target;
        switch(target) {
            case accept:
              acceptAge();
              break;
            case decline:
              message.classList.remove('msg-hidden');
              break;
          }
	};

	/**
	 * Get all the needed elements from our modal
	 * @private
	 */
     var getElements = function () {
        modal = document.getElementById(settings.modalId);
        accept = document.getElementById(settings.acceptId);
        decline = document.getElementById(settings.declineId);
        message = document.getElementById(settings.messageId);
	};

    /**
	 * Set local storage
	 * @private
	 */
	var acceptAge = function () {
        localStorage.setItem('overEighteen', 'true');
        removeModal();
	};

    /**
	 * hide and destroy modal
	 * @private
	 */
	var removeModal = function () {
        modal.classList.remove('is-shown');
        document.body.classList.remove(settings.bodyClass);
        setTimeout(function(){
            ageCheck.destroy();
            modal.remove();
        }, settings.delay);
	};

    /**
	 * Checks the localStorage for the
     * `overEighteen` value.
	 * @private
	 */
	var isOverEighteen = function () {
        var value = localStorage.getItem('overEighteen');
        if (value == null) return false;
		return true;
	};

    /**
	 * Checks the parameters to see if we need to bypass
     * the age check
	 * @private
	 */
	var paramGiven = function () {
        var paramGiven = false;

        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var age = urlParams.get('age');

        if (age !== null){
            paramGiven = true;
            var value = localStorage.getItem('overEighteen');
            if (value == null) localStorage.setItem('overEighteen', 'true');
        }

		return paramGiven;
	};

    ///
    /// Public methods
    ///

	/**
	 * Destroy the current initialization.
	 * @public
	 */
     ageCheck.destroy = function () {

		// If plugin isn't already initialized, stop
		if ( !settings ) return;

		// Remove event listeners
		document.removeEventListener('click', eventHandler, false);

		// Reset variables
		settings = null;
	};

	/**
	 * Initialize Plugin
	 * @public
	 * @param {Object} options User settings
	 */
     ageCheck.init = function ( options ) {
        var cont = true;

		// feature test
        if ( !supports ) return;
        // Destroy any existing initializations
        ageCheck.destroy();
		// Merge user options with defaults
        settings = extend( defaults, options || {} );
        // Get elements
        getElements();
        // Check parameter
        if (paramGiven()){
            cont = false;
        }
        // Do we need to show the modal?
        if (!isOverEighteen()){
            modal.classList.add('is-shown');
            document.body.classList.add(settings.bodyClass);
        } else {
            cont = false;
        }

        // Do we continue or destroy?
        if (cont){
            // Listen for events
            document.addEventListener('click', eventHandler, false);
        } else {
            removeModal();
        }
	};

	//
	return ageCheck;
});
