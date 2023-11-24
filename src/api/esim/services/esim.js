'use strict';

/**
 * esim service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::esim.esim');
