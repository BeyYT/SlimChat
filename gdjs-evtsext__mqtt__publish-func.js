
if (typeof gdjs.evtsExt__MQTT__publish !== "undefined") {
  gdjs.evtsExt__MQTT__publish.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MQTT__publish = {};

gdjs.evtsExt__MQTT__publish.conditionTrue_0 = {val:false};
gdjs.evtsExt__MQTT__publish.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MQTT__publish.userFunc0x7e1d48 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs.evtTools.mqtt.connection === null) return;
gdjs.evtTools.mqtt.connection.publish(
    eventsFunctionContext.getArgument("topic"),
    eventsFunctionContext.getArgument("content"),
    { qos: eventsFunctionContext.getArgument("QoS"), retain: eventsFunctionContext.getArgument("retain") }
);

};
gdjs.evtsExt__MQTT__publish.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MQTT__publish.userFunc0x7e1d48(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MQTT__publish.func = function(runtimeScene, content, topic, QoS, retain, parentEventsFunctionContext) {
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
if (argName === "content") return content;
if (argName === "topic") return topic;
if (argName === "QoS") return QoS;
if (argName === "retain") return retain;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MQTT__publish.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__MQTT__publish.registeredGdjsCallbacks = [];