// Load the custom app ES6 modules

import ThingsDataService from 'src/things/services/ThingsDataService';

import ThingsList from 'src/things/components/list/ThingsList';
import ThingDetails from 'src/things/components/details/ThingDetails';

// Define the AngularJS 'users' module

export default angular
  .module("things", ['ngMaterial'])

  .component(ThingsList.name, ThingsList.config)
  .component(ThingDetails.name, ThingDetails.config)

  .service("ThingsDataService", ThingsDataService);
