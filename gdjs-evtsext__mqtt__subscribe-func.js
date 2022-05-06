
if (typeof gdjs.evtsExt__MQTT__subscribe !== "undefined") {
  gdjs.evtsExt__MQTT__subscribe.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MQTT__subscribe = {};

gdjs.evtsExt__MQTT__subscribe.conditionTrue_0 = {val:false};
gdjs.evtsExt__MQTT__subscribe.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MQTT__subscribe.userFunc0x7db620 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs.evtTools.mqtt.connection === null) return;

const topic = eventsFunctionContext.getArgument("topic");
if (typeof gdjs.evtTools.mqtt.events[topic] === "undefined") gdjs.evtTools.mqtt.events[topic] = { data: eventsFunctionContext.getArgument("dataloss") ? "" : [] };
gdjs.evtTools.mqtt.events[topic].loss = eventsFunctionContext.getArgument("dataloss");

gdjs.evtTools.mqtt.connection.subscribe(
    topic,
    { qos: eventsFunctionContext.getArgument("QoS") }
);

};
gdjs.evtsExt__MQTT__subscribe.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MQTT__subscribe.userFunc0x7db620(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MQTT__subscribe.func = function(runtimeScene, topic, QoS, dataloss, parentEventsFunctionContext) {
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
if (argName === "QoS") return QoS;
if (argName === "dataloss") return dataloss;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MQTT__subscribe.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__MQTT__subscribe.registeredGdjsCallbacks = [];