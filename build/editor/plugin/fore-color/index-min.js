/*
Copyright 2013, KISSY UI Library v1.40dev
MIT Licensed
build time: Jan 17 14:27
*/
KISSY.add("editor/plugin/fore-color/index",function(c,f,d,e){function b(a){this.config=a||{}}c.augment(b,{pluginRenderUI:function(a){e.init(a);d.init(a,{cmdType:"foreColor",defaultColor:"rgb(204, 0, 0)",tooltip:"文本颜色"})}});return b},{requires:["editor","../color/btn","./cmd"]});
