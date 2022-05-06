gdjs.ChatCode = {};
gdjs.ChatCode.GDchannelObjects1= [];
gdjs.ChatCode.GDchannelObjects2= [];
gdjs.ChatCode.GDChatObjects1= [];
gdjs.ChatCode.GDChatObjects2= [];
gdjs.ChatCode.GDNewTextObjects1= [];
gdjs.ChatCode.GDNewTextObjects2= [];

gdjs.ChatCode.conditionTrue_0 = {val:false};
gdjs.ChatCode.condition0IsTrue_0 = {val:false};
gdjs.ChatCode.condition1IsTrue_0 = {val:false};
gdjs.ChatCode.condition2IsTrue_0 = {val:false};
gdjs.ChatCode.condition3IsTrue_0 = {val:false};
gdjs.ChatCode.condition4IsTrue_0 = {val:false};
gdjs.ChatCode.conditionTrue_1 = {val:false};
gdjs.ChatCode.condition0IsTrue_1 = {val:false};
gdjs.ChatCode.condition1IsTrue_1 = {val:false};
gdjs.ChatCode.condition2IsTrue_1 = {val:false};
gdjs.ChatCode.condition3IsTrue_1 = {val:false};
gdjs.ChatCode.condition4IsTrue_1 = {val:false};


gdjs.ChatCode.userFunc0x7e20a8 = function(runtimeScene) {
"use strict";
const iframe = document.createElement("iframe");
iframe.src = "";
iframe.setAttribute("width", "1000");
iframe.setAttribute("height", "563");
iframe.style.top = "38.5px";
iframe.style.left = "140px";
iframe.frameBorder = "no";
iframe.scrolling = "yes";
iframe.style.position = "absolute";
iframe.style.zIndex = "1000";
iframe.id = "iframe1";
document.body.appendChild(iframe);
};
gdjs.ChatCode.eventsList0 = function(runtimeScene) {

{


gdjs.ChatCode.userFunc0x7e20a8(runtimeScene);

}


};gdjs.ChatCode.userFunc0x7843d0 = function(runtimeScene) {
"use strict";
document.getElementById("iframe1").contentWindow.document.write("<html><style>body {background-color: rgb(34, 71, 114);font-family: monospace;font-size: 16px;}::-webkit-scrollbar {width: 10px;}::-webkit-scrollbar-track {background: #d3e3e8; }::-webkit-scrollbar-thumb {background: #63acc2; }::-webkit-scrollbar-thumb:hover {background: #38616e; }</style><body></body></html>");
};
gdjs.ChatCode.eventsList1 = function(runtimeScene) {

{


gdjs.ChatCode.userFunc0x7843d0(runtimeScene);

}


};gdjs.ChatCode.mapOfGDgdjs_46ChatCode_46GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.ChatCode.GDNewTextObjects1});
gdjs.ChatCode.userFunc0x7e3da0 = function(runtimeScene) {
"use strict";
document.getElementById('iframe1').contentWindow.document.body.innerHTML = document.getElementById('iframe1').contentWindow.document.body.innerHTML + "<br>" + runtimeScene.getVariables().get("msg").getAsString();
};
gdjs.ChatCode.eventsList2 = function(runtimeScene) {

{


gdjs.ChatCode.userFunc0x7e3da0(runtimeScene);

}


};gdjs.ChatCode.eventsList3 = function(runtimeScene) {

{


gdjs.ChatCode.condition0IsTrue_0.val = false;
{
gdjs.ChatCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ChatCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__MQTT__connect.func(runtimeScene, "mqtt.cdxteam.xyz:8888", "{\"clientId\": \"" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("name")) + "\"}", false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__MQTT__subscribe.func(runtimeScene, "chat", 1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.ChatCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.ChatCode.condition0IsTrue_0.val = false;
gdjs.ChatCode.condition1IsTrue_0.val = false;
{
gdjs.ChatCode.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
}if ( gdjs.ChatCode.condition0IsTrue_0.val ) {
{
{gdjs.ChatCode.conditionTrue_1 = gdjs.ChatCode.condition1IsTrue_0;
gdjs.ChatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8275972);
}
}}
if (gdjs.ChatCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.ChatCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chat"), gdjs.ChatCode.GDChatObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.ChatCode.GDNewTextObjects1);

gdjs.ChatCode.condition0IsTrue_0.val = false;
gdjs.ChatCode.condition1IsTrue_0.val = false;
gdjs.ChatCode.condition2IsTrue_0.val = false;
gdjs.ChatCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ChatCode.GDChatObjects1.length;i<l;++i) {
    if ( gdjs.ChatCode.GDChatObjects1[i].getString() != "" ) {
        gdjs.ChatCode.condition0IsTrue_0.val = true;
        gdjs.ChatCode.GDChatObjects1[k] = gdjs.ChatCode.GDChatObjects1[i];
        ++k;
    }
}
gdjs.ChatCode.GDChatObjects1.length = k;}if ( gdjs.ChatCode.condition0IsTrue_0.val ) {
{
gdjs.ChatCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ChatCode.condition1IsTrue_0.val ) {
{
gdjs.ChatCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ChatCode.mapOfGDgdjs_46ChatCode_46GDNewTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ChatCode.condition2IsTrue_0.val ) {
{
{gdjs.ChatCode.conditionTrue_1 = gdjs.ChatCode.condition3IsTrue_0;
gdjs.ChatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8277500);
}
}}
}
}
if (gdjs.ChatCode.condition3IsTrue_0.val) {
/* Reuse gdjs.ChatCode.GDChatObjects1 */
{gdjs.evtsExt__MQTT__publish.func(runtimeScene, "[" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("name")) + "]: " + (( gdjs.ChatCode.GDChatObjects1.length === 0 ) ? "" :gdjs.ChatCode.GDChatObjects1[0].getString()), "chat", 1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.ChatCode.GDChatObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDChatObjects1[i].setString("");
}
}}

}


{


gdjs.ChatCode.condition0IsTrue_0.val = false;
gdjs.ChatCode.condition1IsTrue_0.val = false;
{
gdjs.ChatCode.condition0IsTrue_0.val = gdjs.evtsExt__MQTT__onMessage.func(runtimeScene, "chat", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.ChatCode.condition0IsTrue_0.val ) {
{
{gdjs.ChatCode.conditionTrue_1 = gdjs.ChatCode.condition1IsTrue_0;
gdjs.ChatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8279244);
}
}}
if (gdjs.ChatCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("msg").setString(gdjs.evtsExt__MQTT__GetLastMessage.func(runtimeScene, "chat", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
{ //Subevents
gdjs.ChatCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.ChatCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ChatCode.GDchannelObjects1.length = 0;
gdjs.ChatCode.GDchannelObjects2.length = 0;
gdjs.ChatCode.GDChatObjects1.length = 0;
gdjs.ChatCode.GDChatObjects2.length = 0;
gdjs.ChatCode.GDNewTextObjects1.length = 0;
gdjs.ChatCode.GDNewTextObjects2.length = 0;

gdjs.ChatCode.eventsList3(runtimeScene);
return;

}

gdjs['ChatCode'] = gdjs.ChatCode;
