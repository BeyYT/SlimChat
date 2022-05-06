gdjs.mainCode = {};
gdjs.mainCode.GDwtfObjects1= [];
gdjs.mainCode.GDwtfObjects2= [];
gdjs.mainCode.GDNewTextInputObjects1= [];
gdjs.mainCode.GDNewTextInputObjects2= [];
gdjs.mainCode.GDNewTextObjects1= [];
gdjs.mainCode.GDNewTextObjects2= [];

gdjs.mainCode.conditionTrue_0 = {val:false};
gdjs.mainCode.condition0IsTrue_0 = {val:false};
gdjs.mainCode.condition1IsTrue_0 = {val:false};
gdjs.mainCode.condition2IsTrue_0 = {val:false};
gdjs.mainCode.condition3IsTrue_0 = {val:false};


gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.mainCode.GDNewTextObjects1});
gdjs.mainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.mainCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.mainCode.GDNewTextInputObjects1);

gdjs.mainCode.condition0IsTrue_0.val = false;
gdjs.mainCode.condition1IsTrue_0.val = false;
gdjs.mainCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mainCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDNewTextInputObjects1[i].getString() != "" ) {
        gdjs.mainCode.condition0IsTrue_0.val = true;
        gdjs.mainCode.GDNewTextInputObjects1[k] = gdjs.mainCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDNewTextInputObjects1.length = k;}if ( gdjs.mainCode.condition0IsTrue_0.val ) {
{
gdjs.mainCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDNewTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.mainCode.condition1IsTrue_0.val ) {
{
gdjs.mainCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
if (gdjs.mainCode.condition2IsTrue_0.val) {
/* Reuse gdjs.mainCode.GDNewTextInputObjects1 */
{runtimeScene.getGame().getVariables().get("name").setString((( gdjs.mainCode.GDNewTextInputObjects1.length === 0 ) ? "" :gdjs.mainCode.GDNewTextInputObjects1[0].getString()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Chat", false);
}}

}


};

gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDwtfObjects1.length = 0;
gdjs.mainCode.GDwtfObjects2.length = 0;
gdjs.mainCode.GDNewTextInputObjects1.length = 0;
gdjs.mainCode.GDNewTextInputObjects2.length = 0;
gdjs.mainCode.GDNewTextObjects1.length = 0;
gdjs.mainCode.GDNewTextObjects2.length = 0;

gdjs.mainCode.eventsList0(runtimeScene);
return;

}

gdjs['mainCode'] = gdjs.mainCode;
