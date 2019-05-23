import ThingDetailsController from './ThingDetailsController'

export default {
  name : 'thingDetails',
  config : {
    bindings         : {  selected: '<' },
    templateUrl      : 'src/things/components/details/ThingDetails.html',
    controller       : [ '$mdBottomSheet', '$log', ThingDetailsController ]
  }
};