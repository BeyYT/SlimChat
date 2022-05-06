
if (typeof gdjs.evtsExt__MQTT__connect !== "undefined") {
  gdjs.evtsExt__MQTT__connect.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MQTT__connect = {};

gdjs.evtsExt__MQTT__connect.conditionTrue_0 = {val:false};
gdjs.evtsExt__MQTT__connect.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MQTT__connect.userFunc0x6d0440 = function(runtimeScene, eventsFunctionContext) {
"use strict";
// Parse settings
const settings = eventsFunctionContext.getArgument("settings");
let settingsParsed;
if (settings.length > 2)
    try {
        settingsParsed = JSON.parse(settings);
    } catch (e) {
        settingsParsed = {}
        console.error("Invalid settings: ", settings, ", Error:", e);
    };

// Connect to broker
gdjs.evtTools.mqtt.connection = mqtt.connect(
    (eventsFunctionContext.getArgument("secure")
        ? "wss://"
        : "ws://")
    + eventsFunctionContext.getArgument("host"),
    settingsParsed
);

// Set up listeners
gdjs.evtTools.mqtt.connection.on("message", (channel, message) => {
    if (typeof gdjs.evtTools.mqtt.events[channel] === undefined) {
        gdjs.evtTools.mqtt.events[channel] = {
            loss: false,
            data: [message],
        };
        return;
    }

    const mqttEvent = gdjs.evtTools.mqtt.events[channel];
    if (mqttEvent.loss) {
        mqttEvent.data = message;
    } else {
        if (!Array.isArray(mqttEvent.data)) mqttEvent.data = [];
        mqttEvent.data.push(message);
    }
});

gdjs.evtTools.mqtt.connection.on("error", function (e) {
    gdjs.evtTools.mqtt.lastError = e;
});

};
gdjs.evtsExt__MQTT__connect.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MQTT__connect.userFunc0x6d0440(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MQTT__connect.func = function(runtimeScene, host, settings, secure, parentEventsFunctionContext) {
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
if (argName === "host") return host;
if (argName === "settings") return settings;
if (argName === "secure") return secure;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MQTT__connect.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__MQTT__connect.registeredGdjsCallbacks = [];