(this.webpackJsonphabitville=this.webpackJsonphabitville||[]).push([[87],{424:function(i,e,t){"use strict";t.r(e),t.d(e,"ion_split_pane",(function(){return o}));var s=t(69),n=(t(20),{xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""}),o=function(){function i(i){Object(s.k)(this,i),this.visible=!1,this.disabled=!1,this.when=n.lg,this.ionSplitPaneVisible=Object(s.e)(this,"ionSplitPaneVisible",7)}return i.prototype.visibleChanged=function(i){var e={visible:i,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(e)},i.prototype.connectedCallback=function(){this.styleChildren(),this.updateState()},i.prototype.disconnectedCallback=function(){this.rmL&&(this.rmL(),this.rmL=void 0)},i.prototype.updateState=function(){var i=this;if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)this.visible=!1;else{var e=this.when;if("boolean"!==typeof e){var t=n[e]||e;if(0!==t.length){if(window.matchMedia){var s=function(e){i.visible=e.matches},o=window.matchMedia(t);o.addListener(s),this.rmL=function(){return o.removeListener(s)},this.visible=o.matches}}else this.visible=!1}else this.visible=e}},i.prototype.isPane=function(i){return!!this.visible&&(i.parentElement===this.el&&i.classList.contains("split-pane-side"))},i.prototype.styleChildren=function(){for(var i=this.contentId,e=this.el.children,t=this.el.childElementCount,s=!1,n=0;n<t;n++){var o=e[n],a=void 0!==i&&o.id===i;if(a){if(s)return void console.warn("split pane cannot have more than one main node");s=!0}l(o,a)}s||console.warn("split pane does not have a specified main node")},i.prototype.render=function(){var i,e=Object(s.d)(this);return Object(s.i)(s.a,{class:(i={},i[e]=!0,i["split-pane-"+e]=!0,i["split-pane-visible"]=this.visible,i)},Object(s.i)("slot",null))},Object.defineProperty(i.prototype,"el",{get:function(){return Object(s.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(i,"watchers",{get:function(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}},enumerable:!0,configurable:!0}),Object.defineProperty(i,"style",{get:function(){return":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-main),:host(.split-pane-visible) ::slotted(.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:var(--border);border-left:0}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:0;border-left:var(--border)}"},enumerable:!0,configurable:!0}),i}(),l=function(i,e){var t,s;e?(t="split-pane-main",s="split-pane-side"):(t="split-pane-side",s="split-pane-main");var n=i.classList;n.add(t),n.remove(s)}}}]);
//# sourceMappingURL=87.46ec9029.chunk.js.map