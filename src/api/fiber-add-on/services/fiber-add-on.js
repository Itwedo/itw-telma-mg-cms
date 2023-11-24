'use strict';

/**
 * fiber-add-on service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fiber-add-on.fiber-add-on');
