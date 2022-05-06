
if (typeof gdjs.evtsExt__MQTT__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__MQTT__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MQTT__onScenePostEvents = {};

gdjs.evtsExt__MQTT__onScenePostEvents.conditionTrue_0 = {val:false};
gdjs.evtsExt__MQTT__onScenePostEvents.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MQTT__onScenePostEvents.userFunc0x7e1358 = function(runtimeScene, eventsFunctionContext) {
"use strict";
// Remove the messages of the last frame for no dataloss mode
Object
    .values(gdjs.evtTools.mqtt.events)
    .forEach((event, index) => {
        if (Array.isArray(event.data))
            event.data.shift();
        else event.data = gdjs.evtTools.mqtt.empty;
    });

};
gdjs.evtsExt__MQTT__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MQTT__onScenePostEvents.userFunc0x7e1358(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MQTT__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MQTT__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__MQTT__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__MQTT__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__MQTT__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__MQTT__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__MQTT__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
