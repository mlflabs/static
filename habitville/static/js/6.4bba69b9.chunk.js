(this.webpackJsonphabitville=this.webpackJsonphabitville||[]).push([[6],{461:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",(function(){return o}));var i=n(44),o=function(t){var e,n,o,v,f=10*-l,p=0,h=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),L=new WeakMap,m=function(t){f=Object(i.i)(t),w(t)},b=function(){clearTimeout(v),v=void 0,n&&(O(!1),n=void 0)},E=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,g(a(t),t))},w=function(t){g(void 0,t)},g=function(t,e){if(!t||t!==n){clearTimeout(v),v=void 0;var o=Object(i.j)(e),a=o.x,c=o.y;if(n){if(L.has(n))throw new Error("internal error");n.classList.contains(s)||j(n,a,c),O(!0)}if(t){var d=L.get(t);d&&(clearTimeout(d),L.delete(t));var l=r(t)?0:u;t.classList.remove(s),v=setTimeout((function(){j(t,a,c),v=void 0}),l)}n=t}},j=function(t,e,n){p=Date.now(),t.classList.add(s);var i=h&&c(t);i&&i.addRipple&&(T(),o=i.addRipple(e,n))},T=function(){void 0!==o&&(o.then((function(t){return t()})),o=void 0)},O=function(t){T();var e=n;if(e){var i=d-Date.now()+p;if(t&&i>0&&!r(e)){var o=setTimeout((function(){e.classList.remove(s),L.delete(e)}),d);L.set(e,o)}else e.classList.remove(s)}},S=document;S.addEventListener("ionScrollStart",(function(t){e=t.target,b()})),S.addEventListener("ionScrollEnd",(function(){e=void 0})),S.addEventListener("ionGestureCaptured",b),S.addEventListener("touchstart",(function(t){f=Object(i.i)(t),E(t)}),!0),S.addEventListener("touchcancel",m,!0),S.addEventListener("touchend",m,!0),S.addEventListener("mousedown",(function(t){var e=Object(i.i)(t)-l;f<e&&E(t)}),!0),S.addEventListener("mouseup",(function(t){var e=Object(i.i)(t)-l;f<e&&w(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,l=2500}}]);
//# sourceMappingURL=6.4bba69b9.chunk.js.map