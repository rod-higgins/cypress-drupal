# E2E Testing with Cypress and Drupal

## Setup
1. For quick installation of a drupal 10 site and lando, please use `lando start`
2. Setup the project with standard install profile and also configure [JSON:API Module](https://www.drupal.org/project/jsonapi) module to handle all the basic operations('GET', 'POST', 'DELETE' etc) to be performed.
3. The example cypress scripts use a recipe, article content types. Once the `lando start` runs and provisions everything you need. Run the default D10 install via a browser (db connection through 'database' host with drupal10 / drupal10 / drupal10 for user, database, password) then import the db from the data/data.sql.gz file using `lando db-import data/data.sql.gz` to overwrite the default install. This DB has the preconfigured CT's taxonomies for the testing scripts.
4. Please be mindful you may need to alias the OS browser you are using for chromium etc. See below for the linux option.

## Notes

  * - [x] Setup Cypress in your project's root and we implemented Page Object Design Pattern as below:
       + All test framework details under in web/themes/custom/cypress directory
       + Test files(cypress/integration): create_article_via_json_api.spec.spec.js; create_article_via_ui.spec;login.spec.js
       + Page specific files(cypress/page-objects): create_article.js, login.js
       + Test data(cypress/fixtures): article_testdata.js, login_testdata.js
       + Supported/Common re-usable functions(cypress/support): commands.js, index.js
       + Plugin/Add-on components(cypress/plugins): index.js
       + Config file: cypress.json
       + Screenshots(cypress/screenshots): cypress captures screenshots of all the failure tests while execute in CLI
       + Videos folder(cypress/videos): cypress captures vidoes of all the tests while execute them in CLI

  * - [x] Create and Delete various user roles using the drush commands

  * - [x] Verify Login through http request calls with cy.request()
  
  * - [x] Create and Verify an article with Taxonomy Term using both UI as well as JSON:API


## NPM Scripts for test execution

Clone/import this project in your drupal project and change the "baseUrl" field in cypress.json file as per your site. Next, run below commands from the testing directory under the project root:
   + **npm i** - install dependencies
   + **npm run test:headless** - spin up the test execution in headless mode in chrome browser
   + **npm run test:head** - spin up the test execution in head mode in chrome browser
   + **npm run open** - opens the cypress test runner and helps to execute the scripts in an interactive mode
                                                                                                                            
     **_Notes:_**
     + Cypress automatically detects available browsers on your OS and launch that up, so this may take some seconds to begin the execution at first run.
     + If Chrome browser is not installed in your system, please install it first and proceed this script.
     + Also with the below command, we can launch any supported browser by specifying a path to the binary:cypress run --browser /usr/bin/chromium
     + Please refer this [Cypress documentation](https://docs.cypress.io/guides/guides/launching-browsers.html) for more detail




