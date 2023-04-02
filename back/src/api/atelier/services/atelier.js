'use strict';

/**
 * atelier service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::atelier.atelier');
