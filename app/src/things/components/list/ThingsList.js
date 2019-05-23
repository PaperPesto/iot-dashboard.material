// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
    name : 'thingsList',
    config : {
      bindings         : {  things: '<', selected : '<', showDetails : '&onSelected' },
      templateUrl      : 'src/things/components/list/ThingsList.html'
    }
  };
  