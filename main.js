(()=>{"use strict";var e,t,n,r,o,l,a,u,i,c={514:(e,t,n)=>{n.r(t)},688:(e,t)=>{t.__esModule=!0,t.BASIC_GAME_TIME_STEP_DURATION_MS=t.BASIC_GAME_FIELD_HEIGTH=t.BASIC_GAME_FIELD_WIDTH=void 0,t.BASIC_GAME_FIELD_WIDTH=10,t.BASIC_GAME_FIELD_HEIGTH=10,t.BASIC_GAME_TIME_STEP_DURATION_MS=500},330:(e,t)=>{t.__esModule=!0,t.tableToArray=void 0,t.tableToArray=function(e){for(var t=[],n=0;n<e.rows.length;n+=1){t.push([]);for(var r=0;r<e.rows[n].cells.length;r+=1)t[n].push(Number(e.rows[n].cells[r].innerText))}return t}},115:(e,t,n)=>{t.__esModule=!0,t.changeSizeofField=void 0;var r=n(906);t.changeSizeofField=function(e,t,n){return r.createGameField(e,t).map((function(e,t){return e.map((function(e,r){return n[t]&&n[t][r]?n[t][r]:0}))}))}},906:(e,t)=>{t.__esModule=!0,t.createGameField=void 0,t.createGameField=function(e,t){for(var n=[];n.length<t;)n.push([]);return n.forEach((function(t){for(;t.length<e;)t.push(0)})),n}},668:(e,t,n)=>{t.__esModule=!0,t.getNextGeneration=void 0;var r=n(129);t.getNextGeneration=function(e){return e.map((function(t,n){return t.map((function(t,o){var l=r.getNumbAliveCell(n,o,e);return 3===l&&0===e[n][o]?1:2!==l&&3!==l||1!==e[n][o]?0:1}))}))}},129:(e,t)=>{t.__esModule=!0,t.getNumbAliveCell=void 0,t.getNumbAliveCell=function(e,t,n){for(var r=0,o=e-1;o<e+2;o+=1)for(var l=t-1;l<t+2;l+=1)o===e&&l===t?r+=0:n[o]&&n[o][l]&&(r+=1);return r}},177:(e,t,n)=>{t.__esModule=!0,t.getOneStepDeathCells=void 0;var r=n(668);t.getOneStepDeathCells=function(e){var t=r.getNextGeneration(e);return t.map((function(n,r){return n.map((function(n,o){return 1===e[r][o]&&0===t[r][o]?1:0}))}))}},996:(e,t)=>{t.__esModule=!0,t.toggleCellState=void 0,t.toggleCellState=function(e,t,n){return n.map((function(n,r){return n.map((function(n,o){return o===t&&r===e?0===n?1:0:n}))}))}},567:(e,t,n)=>{t.__esModule=!0,t.onCellClick=void 0;var r=n(279),o=n(330);t.onCellClick=function(e){document.querySelector(".gameField").addEventListener("click",(function(t){var n=t.target.cellIndex,l=t.target.closest("tr").rowIndex,a=t.target.closest("table"),u=e(l,n,o.tableToArray(a));r.renderTable(u)}),!0)}},218:(e,t,n)=>{t.__esModule=!0,t.onInputChange=void 0;var r=n(330),o=n(279);t.onInputChange=function(e){var t=document.querySelector(".gameField");document.querySelector(".gameControllers").addEventListener("change",(function(n){var l,a;"input-width"===n.target.classList[1]?(l=Number(n.target.value),a=t.rows.length):(a=Number(n.target.value),l=t.rows[0].cells.length);var u=e(l,a,r.tableToArray(t));o.renderTable(u)}),!0)}},279:(e,t,n)=>{t.__esModule=!0,t.renderTable=void 0;var r=n(177);t.renderTable=function(e){for(var t=document.querySelector(".gameField");t.rows&&t.rows.length>0;)t.deleteRow(-1);for(;t.rows.length<e.length;)for(t.insertRow(-1);t.rows[t.rows.length-1].cells.length<e[0].length;)t.rows[t.rows.length-1].insertCell(-1);e.forEach((function(n,o){n.forEach((function(n,l){t.rows[o].cells[l].innerText=""+n;var a=0===n?"cell-dead":"cell-alive";1===e[o][l]&&(a=1===r.getOneStepDeathCells(e)[o][l]?"cell-one-step-to-death":a),t.rows[o].cells[l].classList.add("cell",a)}))}))}}},s={};function d(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={exports:{}};return c[e](n,n.exports,d),n.exports}d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=d(906),t=d(668),n=d(279),r=d(567),o=d(218),l=d(996),a=d(115),u=d(330),i=d(688),d(514),function(){var c,s,d=!1,_=i.BASIC_GAME_TIME_STEP_DURATION_MS,g=e.createGameField(i.BASIC_GAME_FIELD_WIDTH,i.BASIC_GAME_FIELD_HEIGTH);function v(){if(d){var e=document.querySelector(".gameField"),r=u.tableToArray(e),o=t.getNextGeneration(r);if(n.renderTable(o),!document.querySelectorAll(".cell-alive").length&&!document.querySelectorAll(".cell-one-step-to-death").length){d=!1;var l=document.querySelector(".button");l.innerText="Play",l.classList.remove("button-running"),l.classList.add("button-stopped")}}}n.renderTable(g),r.onCellClick(l.toggleCellState),o.onInputChange(a.changeSizeofField),(s=document.querySelector(".button")).addEventListener("click",(function(e){"Play"===e.target.innerText?(s.innerText="Stop",s.classList.remove("button-running"),s.classList.add("button-stopped"),c=setInterval(v,_)):(s.innerText="Play",s.classList.remove("button-stopped"),s.classList.add("button-running"),clearInterval(c)),d=!d})),document.querySelector(".input-game-speed").addEventListener("change",(function(e){var t=Number(e.target.value);_=t>=0?i.BASIC_GAME_TIME_STEP_DURATION_MS/(t+1):i.BASIC_GAME_TIME_STEP_DURATION_MS*(1-t)}))}()})();