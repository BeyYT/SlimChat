
if (typeof gdjs.evtsExt__MQTT__onMessage !== "undefined") {
  gdjs.evtsExt__MQTT__onMessage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MQTT__onMessage = {};

gdjs.evtsExt__MQTT__onMessage.conditionTrue_0 = {val:false};
gdjs.evtsExt__MQTT__onMessage.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MQTT__onMessage.userFunc0x787520 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const mqttEvent = gdjs.evtTools.mqtt.events[eventsFunctionContext.getArgument("topic")];
if (typeof mqttEvent === "undefined" || typeof mqttEvent.data === "undefined") return;
eventsFunctionContext.returnValue =
    Array.isArray(mqttEvent.data)
        ? mqttEvent.data.length !== 0
        : mqttEvent.data !== gdjs.evtTools.mqtt.empty;

};
gdjs.evtsExt__MQTT__onMessage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MQTT__onMessage.userFunc0x787520(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MQTT__onMessage.func = function(runtimeScene, topic, parentEventsFunctionContext) {
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
if (argName === "topic") return topic;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MQTT__onMessage.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__MQTT__onMessage.registeredGdjsCallbacks = [];