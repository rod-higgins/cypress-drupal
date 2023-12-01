export const CONTENT_URL = '/node/add/article';
export const NODE_URL = '/node';
export const NODE_TYPE = 'article';
export const ARTICLE_TITLE = 'E2E Testing with Cypress and Drupal';
export const ARTICLE_JSON_TITLE = 'E2E Testing with Cypress, Drupal & Json:API Module'
export const ARTICLE_BODY =
	'<p>E2E Testing with Cypress and Drupal. In this session, we shall see,</p>' +
	'<ul>' +
	'<li>Show how Cypress tests are written in Drupal using Knowledge sharing project</li>' +
	'<li>Various User Role Creation and Deletion with Drush</li>' +
	'<li><strong>Good to know:</strong>Various Data Seeding Approaches</li>' +
	'</ul>';
export const ARTICLE_TAG = 'Cypress Article Tag ' + Date.now();
export const ARTICLE_JSON_TAG = 'Cypress-Drupal ' + Date.now();
export const ARTICLE_JSON_PRIM_ATTRIBUTES = {
	title: ARTICLE_JSON_TITLE,
	body: {
		value: ARTICLE_JSON_TITLE
	}
}
export const ARTICLE_JSON_HEADER_TITLE = ARTICLE_JSON_PRIM_ATTRIBUTES.title;
export const ARTICLE_JSON_BODY_VALUE = ARTICLE_JSON_PRIM_ATTRIBUTES.body.value;
export const ARTICLE_JSON_TAG_ATTRIBUTE = {
	name: {
		value: ARTICLE_JSON_TAG
	}
};