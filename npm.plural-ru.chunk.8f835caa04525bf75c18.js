(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.plural-ru"],{9610:function(e,r,t){"use strict";var n=Array.prototype.slice;function o(e){var r,t=n.call(arguments,1);switch(t.length){case 1:throw new Error("Not enough forms");case 2:r=e>1?t[1]:t[0];break;default:r=t[u(e)];break}return r.replace(/%d/g,e)}function a(e){var r=n.call(arguments,1),t=r[c(e)];return t.replace(/%d/g,e)}function c(e){return e>1e6?2:(e>1e3&&e<1e6&&/000$/.test(e)&&(e/=1e3),e%10===1&&e%100!==11||/1000$/.test(e.toString())?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}function u(e){return e%10===1&&e%100!==11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2}e.exports=o,e.exports.noun=o,e.exports.verb=a}}]);