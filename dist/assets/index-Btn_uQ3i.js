const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-DkymAeqc.js","./webworkerAll-BMXdjJOA.js","./colorToUniform-ctgBpyc5.js","./WebGPURenderer-Di3rdxA7.js","./SharedSystems-BtI9cks1.js","./WebGLRenderer-B7l2gyCd.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const ah="modulepreload",lh=function(i,t){return new URL(i,t).href},Ys={},wn=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(e.map(u=>{if(u=lh(u,n),u in Ys)return;Ys[u]=!0;const h=u.endsWith(".css"),c=h?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const g=o[p];if(g.href===u&&(!h||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${c}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":ah,h||(d.as="script"),d.crossOrigin="",d.href=u,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((p,g)=>{d.addEventListener("load",p),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};var I=(i=>(i.Application="application",i.WebGLPipes="webgl-pipes",i.WebGLPipesAdaptor="webgl-pipes-adaptor",i.WebGLSystem="webgl-system",i.WebGPUPipes="webgpu-pipes",i.WebGPUPipesAdaptor="webgpu-pipes-adaptor",i.WebGPUSystem="webgpu-system",i.CanvasSystem="canvas-system",i.CanvasPipesAdaptor="canvas-pipes-adaptor",i.CanvasPipes="canvas-pipes",i.Asset="asset",i.LoadParser="load-parser",i.ResolveParser="resolve-parser",i.CacheParser="cache-parser",i.DetectionParser="detection-parser",i.MaskEffect="mask-effect",i.BlendMode="blend-mode",i.TextureSource="texture-source",i.Environment="environment",i.ShapeBuilder="shape-builder",i.Batcher="batcher",i))(I||{});const kr=i=>{if(typeof i=="function"||typeof i=="object"&&i.extension){if(!i.extension)throw new Error("Extension class must have an extension object");i={...typeof i.extension!="object"?{type:i.extension}:i.extension,ref:i}}if(typeof i=="object")i={...i};else throw new Error("Invalid extension type");return typeof i.type=="string"&&(i.type=[i.type]),i},Gi=(i,t)=>kr(i).priority??t,_t={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...i){return i.map(kr).forEach(t=>{t.type.forEach(e=>{var n,r;return(r=(n=this._removeHandlers)[e])==null?void 0:r.call(n,t)})}),this},add(...i){return i.map(kr).forEach(t=>{t.type.forEach(e=>{var s,o;const n=this._addHandlers,r=this._queue;n[e]?(o=n[e])==null||o.call(n,t):(r[e]=r[e]||[],(s=r[e])==null||s.push(t))})}),this},handle(i,t,e){var o;const n=this._addHandlers,r=this._removeHandlers;if(n[i]||r[i])throw new Error(`Extension type ${i} already has a handler`);n[i]=t,r[i]=e;const s=this._queue;return s[i]&&((o=s[i])==null||o.forEach(a=>t(a)),delete s[i]),this},handleByMap(i,t){return this.handle(i,e=>{e.name&&(t[e.name]=e.ref)},e=>{e.name&&delete t[e.name]})},handleByNamedList(i,t,e=-1){return this.handle(i,n=>{t.findIndex(s=>s.name===n.name)>=0||(t.push({name:n.name,value:n.ref}),t.sort((s,o)=>Gi(o.value,e)-Gi(s.value,e)))},n=>{const r=t.findIndex(s=>s.name===n.name);r!==-1&&t.splice(r,1)})},handleByList(i,t,e=-1){return this.handle(i,n=>{t.includes(n.ref)||(t.push(n.ref),t.sort((r,s)=>Gi(s,e)-Gi(r,e)))},n=>{const r=t.indexOf(n.ref);r!==-1&&t.splice(r,1)})}},uh={extension:{type:I.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await wn(()=>import("./browserAll-DkymAeqc.js"),__vite__mapDeps([0,1,2]),import.meta.url)}},hh={extension:{type:I.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await wn(()=>import("./webworkerAll-BMXdjJOA.js"),__vite__mapDeps([1,2]),import.meta.url)}};class at{constructor(t,e,n){this._x=e||0,this._y=n||0,this._observer=t}clone(t){return new at(t??this._observer,this._x,this._y)}set(t=0,e=t){return(this._x!==t||this._y!==e)&&(this._x=t,this._y=e,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}function gs(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ca={exports:{}};(function(i){var t=Object.prototype.hasOwnProperty,e="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(e=!1));function r(l,u,h){this.fn=l,this.context=u,this.once=h||!1}function s(l,u,h,c,f){if(typeof h!="function")throw new TypeError("The listener must be a function");var d=new r(h,c||l,f),p=e?e+u:u;return l._events[p]?l._events[p].fn?l._events[p]=[l._events[p],d]:l._events[p].push(d):(l._events[p]=d,l._eventsCount++),l}function o(l,u){--l._eventsCount===0?l._events=new n:delete l._events[u]}function a(){this._events=new n,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],h,c;if(this._eventsCount===0)return u;for(c in h=this._events)t.call(h,c)&&u.push(e?c.slice(1):c);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(h)):u},a.prototype.listeners=function(u){var h=e?e+u:u,c=this._events[h];if(!c)return[];if(c.fn)return[c.fn];for(var f=0,d=c.length,p=new Array(d);f<d;f++)p[f]=c[f].fn;return p},a.prototype.listenerCount=function(u){var h=e?e+u:u,c=this._events[h];return c?c.fn?1:c.length:0},a.prototype.emit=function(u,h,c,f,d,p){var g=e?e+u:u;if(!this._events[g])return!1;var m=this._events[g],x=arguments.length,v,y;if(m.fn){switch(m.once&&this.removeListener(u,m.fn,void 0,!0),x){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,h),!0;case 3:return m.fn.call(m.context,h,c),!0;case 4:return m.fn.call(m.context,h,c,f),!0;case 5:return m.fn.call(m.context,h,c,f,d),!0;case 6:return m.fn.call(m.context,h,c,f,d,p),!0}for(y=1,v=new Array(x-1);y<x;y++)v[y-1]=arguments[y];m.fn.apply(m.context,v)}else{var _=m.length,A;for(y=0;y<_;y++)switch(m[y].once&&this.removeListener(u,m[y].fn,void 0,!0),x){case 1:m[y].fn.call(m[y].context);break;case 2:m[y].fn.call(m[y].context,h);break;case 3:m[y].fn.call(m[y].context,h,c);break;case 4:m[y].fn.call(m[y].context,h,c,f);break;default:if(!v)for(A=1,v=new Array(x-1);A<x;A++)v[A-1]=arguments[A];m[y].fn.apply(m[y].context,v)}}return!0},a.prototype.on=function(u,h,c){return s(this,u,h,c,!1)},a.prototype.once=function(u,h,c){return s(this,u,h,c,!0)},a.prototype.removeListener=function(u,h,c,f){var d=e?e+u:u;if(!this._events[d])return this;if(!h)return o(this,d),this;var p=this._events[d];if(p.fn)p.fn===h&&(!f||p.once)&&(!c||p.context===c)&&o(this,d);else{for(var g=0,m=[],x=p.length;g<x;g++)(p[g].fn!==h||f&&!p[g].once||c&&p[g].context!==c)&&m.push(p[g]);m.length?this._events[d]=m.length===1?m[0]:m:o(this,d)}return this},a.prototype.removeAllListeners=function(u){var h;return u?(h=e?e+u:u,this._events[h]&&o(this,h)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=e,a.EventEmitter=a,i.exports=a})(Ca);var ch=Ca.exports;const xt=gs(ch),fh=Math.PI*2,dh=180/Math.PI,We=Math.PI/180;class yt{constructor(t=0,e=0){this.x=0,this.y=0,this.x=t,this.y=e}clone(){return new yt(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,e=t){return this.x=t,this.y=e,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return Xn.x=0,Xn.y=0,Xn}}const Xn=new yt;class H{constructor(t=1,e=0,n=0,r=1,s=0,o=0){this.array=null,this.a=t,this.b=e,this.c=n,this.d=r,this.tx=s,this.ty=o}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,e,n,r,s,o){return this.a=t,this.b=e,this.c=n,this.d=r,this.tx=s,this.ty=o,this}toArray(t,e){this.array||(this.array=new Float32Array(9));const n=e||this.array;return t?(n[0]=this.a,n[1]=this.b,n[2]=0,n[3]=this.c,n[4]=this.d,n[5]=0,n[6]=this.tx,n[7]=this.ty,n[8]=1):(n[0]=this.a,n[1]=this.c,n[2]=this.tx,n[3]=this.b,n[4]=this.d,n[5]=this.ty,n[6]=0,n[7]=0,n[8]=1),n}apply(t,e){e=e||new yt;const n=t.x,r=t.y;return e.x=this.a*n+this.c*r+this.tx,e.y=this.b*n+this.d*r+this.ty,e}applyInverse(t,e){e=e||new yt;const n=this.a,r=this.b,s=this.c,o=this.d,a=this.tx,l=this.ty,u=1/(n*o+s*-r),h=t.x,c=t.y;return e.x=o*u*h+-s*u*c+(l*s-a*o)*u,e.y=n*u*c+-r*u*h+(-l*n+a*r)*u,e}translate(t,e){return this.tx+=t,this.ty+=e,this}scale(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),r=this.a,s=this.c,o=this.tx;return this.a=r*e-this.b*n,this.b=r*n+this.b*e,this.c=s*e-this.d*n,this.d=s*n+this.d*e,this.tx=o*e-this.ty*n,this.ty=o*n+this.ty*e,this}append(t){const e=this.a,n=this.b,r=this.c,s=this.d;return this.a=t.a*e+t.b*r,this.b=t.a*n+t.b*s,this.c=t.c*e+t.d*r,this.d=t.c*n+t.d*s,this.tx=t.tx*e+t.ty*r+this.tx,this.ty=t.tx*n+t.ty*s+this.ty,this}appendFrom(t,e){const n=t.a,r=t.b,s=t.c,o=t.d,a=t.tx,l=t.ty,u=e.a,h=e.b,c=e.c,f=e.d;return this.a=n*u+r*c,this.b=n*h+r*f,this.c=s*u+o*c,this.d=s*h+o*f,this.tx=a*u+l*c+e.tx,this.ty=a*h+l*f+e.ty,this}setTransform(t,e,n,r,s,o,a,l,u){return this.a=Math.cos(a+u)*s,this.b=Math.sin(a+u)*s,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=t-(n*this.a+r*this.c),this.ty=e-(n*this.b+r*this.d),this}prepend(t){const e=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const n=this.a,r=this.c;this.a=n*t.a+this.b*t.c,this.b=n*t.b+this.b*t.d,this.c=r*t.a+this.d*t.c,this.d=r*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this}decompose(t){const e=this.a,n=this.b,r=this.c,s=this.d,o=t.pivot,a=-Math.atan2(-r,s),l=Math.atan2(n,e),u=Math.abs(a+l);return u<1e-5||Math.abs(fh-u)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=a,t.skew.y=l),t.scale.x=Math.sqrt(e*e+n*n),t.scale.y=Math.sqrt(r*r+s*s),t.position.x=this.tx+(o.x*e+o.y*r),t.position.y=this.ty+(o.x*n+o.y*s),t}invert(){const t=this.a,e=this.b,n=this.c,r=this.d,s=this.tx,o=t*r-e*n;return this.a=r/o,this.b=-e/o,this.c=-n/o,this.d=t/o,this.tx=(n*this.ty-r*s)/o,this.ty=-(t*this.ty-e*s)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new H;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return mh.identity()}static get shared(){return ph.identity()}}const ph=new H,mh=new H,fe=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],de=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],pe=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],me=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Rr=[],Aa=[],Ni=Math.sign;function gh(){for(let i=0;i<16;i++){const t=[];Rr.push(t);for(let e=0;e<16;e++){const n=Ni(fe[i]*fe[e]+pe[i]*de[e]),r=Ni(de[i]*fe[e]+me[i]*de[e]),s=Ni(fe[i]*pe[e]+pe[i]*me[e]),o=Ni(de[i]*pe[e]+me[i]*me[e]);for(let a=0;a<16;a++)if(fe[a]===n&&de[a]===r&&pe[a]===s&&me[a]===o){t.push(a);break}}}for(let i=0;i<16;i++){const t=new H;t.set(fe[i],de[i],pe[i],me[i],0,0),Aa.push(t)}}gh();const it={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:i=>fe[i],uY:i=>de[i],vX:i=>pe[i],vY:i=>me[i],inv:i=>i&8?i&15:-i&7,add:(i,t)=>Rr[i][t],sub:(i,t)=>Rr[i][it.inv(t)],rotate180:i=>i^4,isVertical:i=>(i&3)===2,byDirection:(i,t)=>Math.abs(i)*2<=Math.abs(t)?t>=0?it.S:it.N:Math.abs(t)*2<=Math.abs(i)?i>0?it.E:it.W:t>0?i>0?it.SE:it.SW:i>0?it.NE:it.NW,matrixAppendRotationInv:(i,t,e=0,n=0)=>{const r=Aa[it.inv(t)];r.tx=e,r.ty=n,i.append(r)}},$i=[new yt,new yt,new yt,new yt];class lt{constructor(t=0,e=0,n=0,r=0){this.type="rectangle",this.x=Number(t),this.y=Number(e),this.width=Number(n),this.height=Number(r)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new lt(0,0,0,0)}clone(){return new lt(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height}strokeContains(t,e,n){const{width:r,height:s}=this;if(r<=0||s<=0)return!1;const o=this.x,a=this.y,l=o-n/2,u=o+r+n/2,h=a-n/2,c=a+s+n/2,f=o+n/2,d=o+r-n/2,p=a+n/2,g=a+s-n/2;return t>=l&&t<=u&&e>=h&&e<=c&&!(t>f&&t<d&&e>p&&e<g)}intersects(t,e){if(!e){const R=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=R)return!1;const w=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>w}const n=this.left,r=this.right,s=this.top,o=this.bottom;if(r<=n||o<=s)return!1;const a=$i[0].set(t.left,t.top),l=$i[1].set(t.left,t.bottom),u=$i[2].set(t.right,t.top),h=$i[3].set(t.right,t.bottom);if(u.x<=a.x||l.y<=a.y)return!1;const c=Math.sign(e.a*e.d-e.b*e.c);if(c===0||(e.apply(a,a),e.apply(l,l),e.apply(u,u),e.apply(h,h),Math.max(a.x,l.x,u.x,h.x)<=n||Math.min(a.x,l.x,u.x,h.x)>=r||Math.max(a.y,l.y,u.y,h.y)<=s||Math.min(a.y,l.y,u.y,h.y)>=o))return!1;const f=c*(l.y-a.y),d=c*(a.x-l.x),p=f*n+d*s,g=f*r+d*s,m=f*n+d*o,x=f*r+d*o;if(Math.max(p,g,m,x)<=f*a.x+d*a.y||Math.min(p,g,m,x)>=f*h.x+d*h.y)return!1;const v=c*(a.y-u.y),y=c*(u.x-a.x),_=v*n+y*s,A=v*r+y*s,L=v*n+y*o,M=v*r+y*o;return!(Math.max(_,A,L,M)<=v*a.x+y*a.y||Math.min(_,A,L,M)>=v*h.x+y*h.y)}pad(t=0,e=t){return this.x-=t,this.y-=e,this.width+=t*2,this.height+=e*2,this}fit(t){const e=Math.max(this.x,t.x),n=Math.min(this.x+this.width,t.x+t.width),r=Math.max(this.y,t.y),s=Math.min(this.y+this.height,t.y+t.height);return this.x=e,this.width=Math.max(n-e,0),this.y=r,this.height=Math.max(s-r,0),this}ceil(t=1,e=.001){const n=Math.ceil((this.x+this.width-e)*t)/t,r=Math.ceil((this.y+this.height-e)*t)/t;return this.x=Math.floor((this.x+e)*t)/t,this.y=Math.floor((this.y+e)*t)/t,this.width=n-this.x,this.height=r-this.y,this}enlarge(t){const e=Math.min(this.x,t.x),n=Math.max(this.x+this.width,t.x+t.width),r=Math.min(this.y,t.y),s=Math.max(this.y+this.height,t.y+t.height);return this.x=e,this.width=n-e,this.y=r,this.height=s-r,this}getBounds(t){return t=t||new lt,t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const Yn={default:-1};function ut(i="default"){return Yn[i]===void 0&&(Yn[i]=-1),++Yn[i]}const js={},Y="8.0.0",xh="8.3.4";function F(i,t,e=3){if(js[t])return;let n=new Error().stack;typeof n>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${i}`):(n=n.split(`
`).splice(e).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${i}`),console.warn(n),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${i}`),console.warn(n))),js[t]=!0}const Ta=()=>{};function Cn(i){return i+=i===0?1:0,--i,i|=i>>>1,i|=i>>>2,i|=i>>>4,i|=i>>>8,i|=i>>>16,i+1}function qs(i){return!(i&i-1)&&!!i}function vh(i){const t={};for(const e in i)i[e]!==void 0&&(t[e]=i[e]);return t}const Ks=Object.create(null);function yh(i){const t=Ks[i];return t===void 0&&(Ks[i]=ut("resource")),t}const Pa=class Ia extends xt{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...Ia.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){F(Y,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=yh(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};Pa.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let _h=Pa;const Ma=class Fa extends xt{constructor(t={}){super(),this.options=t,this.uid=ut("textureSource"),this._resourceType="textureSource",this._resourceId=ut("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...Fa.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new _h(vh(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){var e,n;this.style!==t&&((e=this._style)==null||e.off("change",this._onStyleChange,this),this._style=t,(n=this._style)==null||n.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=ut("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,e,n){n=n||this._resolution,t=t||this.width,e=e||this.height;const r=Math.round(t*n),s=Math.round(e*n);return this.width=r/n,this.height=s/n,this._resolution=n,this.pixelWidth===r&&this.pixelHeight===s?!1:(this._refreshPOT(),this.pixelWidth=r,this.pixelHeight=s,this.emit("resize",this),this._resourceId=ut("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=qs(this.pixelWidth)&&qs(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};Ma.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let Tt=Ma;class xs extends Tt{constructor(t){const e=t.resource||new Float32Array(t.width*t.height*4);let n=t.format;n||(e instanceof Float32Array?n="rgba32float":e instanceof Int32Array||e instanceof Uint32Array?n="rgba32uint":e instanceof Int16Array||e instanceof Uint16Array?n="rgba16uint":(e instanceof Int8Array,n="bgra8unorm")),super({...t,resource:e,format:n}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}xs.extension=I.TextureSource;const Zs=new H;class bh{constructor(t,e){this.mapCoord=new H,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof e>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=e,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){var e;this.texture!==t&&((e=this._texture)==null||e.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,e){e===void 0&&(e=t);const n=this.mapCoord;for(let r=0;r<t.length;r+=2){const s=t[r],o=t[r+1];e[r]=s*n.a+o*n.c+n.tx,e[r+1]=s*n.b+o*n.d+n.ty}return e}update(){const t=this._texture;this._updateID++;const e=t.uvs;this.mapCoord.set(e.x1-e.x0,e.y1-e.y0,e.x3-e.x0,e.y3-e.y0,e.x0,e.y0);const n=t.orig,r=t.trim;r&&(Zs.set(n.width/r.width,0,0,n.height/r.height,-r.x/r.width,-r.y/r.height),this.mapCoord.append(Zs));const s=t.source,o=this.uClampFrame,a=this.clampMargin/s._resolution,l=this.clampOffset/s._resolution;return o[0]=(t.frame.x+a+l)/s.width,o[1]=(t.frame.y+a+l)/s.height,o[2]=(t.frame.x+t.frame.width-a+l)/s.width,o[3]=(t.frame.y+t.frame.height-a+l)/s.height,this.uClampOffset[0]=this.clampOffset/s.pixelWidth,this.uClampOffset[1]=this.clampOffset/s.pixelHeight,this.isSimple=t.frame.width===s.width&&t.frame.height===s.height&&t.rotate===0,!0}}class E extends xt{constructor({source:t,label:e,frame:n,orig:r,trim:s,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:u}={}){if(super(),this.uid=ut("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new lt,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=e,this.source=(t==null?void 0:t.source)??new Tt,this.noFrame=!n,n)this.frame.copyFrom(n);else{const{width:h,height:c}=this._source;this.frame.width=h,this.frame.height=c}this.orig=r||this.frame,this.trim=s,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new bh(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:e}=this,{width:n,height:r}=this._source,s=e.x/n,o=e.y/r,a=e.width/n,l=e.height/r;let u=this.rotate;if(u){const h=a/2,c=l/2,f=s+h,d=o+c;u=it.add(u,it.NW),t.x0=f+h*it.uX(u),t.y0=d+c*it.uY(u),u=it.add(u,2),t.x1=f+h*it.uX(u),t.y1=d+c*it.uY(u),u=it.add(u,2),t.x2=f+h*it.uX(u),t.y2=d+c*it.uY(u),u=it.add(u,2),t.x3=f+h*it.uX(u),t.y3=d+c*it.uY(u)}else t.x0=s,t.y0=o,t.x1=s+a,t.y1=o,t.x2=s+a,t.y2=o+l,t.x3=s,t.y3=o+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return F(Y,"Texture.baseTexture is now Texture.source"),this._source}}E.EMPTY=new E({label:"EMPTY",source:new Tt({label:"EMPTY"})});E.EMPTY.destroy=Ta;E.WHITE=new E({source:new xs({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});E.WHITE.destroy=Ta;function Sh(i,t,e,n){const{width:r,height:s}=e.orig,o=e.trim;if(o){const a=o.width,l=o.height;i.minX=o.x-t._x*r-n,i.maxX=i.minX+a,i.minY=o.y-t._y*s-n,i.maxY=i.minY+l}else i.minX=-t._x*r-n,i.maxX=i.minX+r,i.minY=-t._y*s-n,i.maxY=i.minY+s}const Qs=new H;class Xt{constructor(t=1/0,e=1/0,n=-1/0,r=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Qs,this.minX=t,this.minY=e,this.maxX=n,this.maxY=r}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new lt);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Qs,this}set(t,e,n,r){this.minX=t,this.minY=e,this.maxX=n,this.maxY=r}addFrame(t,e,n,r,s){s||(s=this.matrix);const o=s.a,a=s.b,l=s.c,u=s.d,h=s.tx,c=s.ty;let f=this.minX,d=this.minY,p=this.maxX,g=this.maxY,m=o*t+l*e+h,x=a*t+u*e+c;m<f&&(f=m),x<d&&(d=x),m>p&&(p=m),x>g&&(g=x),m=o*n+l*e+h,x=a*n+u*e+c,m<f&&(f=m),x<d&&(d=x),m>p&&(p=m),x>g&&(g=x),m=o*t+l*r+h,x=a*t+u*r+c,m<f&&(f=m),x<d&&(d=x),m>p&&(p=m),x>g&&(g=x),m=o*n+l*r+h,x=a*n+u*r+c,m<f&&(f=m),x<d&&(d=x),m>p&&(p=m),x>g&&(g=x),this.minX=f,this.minY=d,this.maxX=p,this.maxY=g}addRect(t,e){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,e)}addBounds(t,e){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,e)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const e=this.minX,n=this.minY,r=this.maxX,s=this.maxY,{a:o,b:a,c:l,d:u,tx:h,ty:c}=t;let f=o*e+l*n+h,d=a*e+u*n+c;this.minX=f,this.minY=d,this.maxX=f,this.maxY=d,f=o*r+l*n+h,d=a*r+u*n+c,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*e+l*s+h,d=a*e+u*s+c,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*r+l*s+h,d=a*r+u*s+c,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,e,n,r){return this.minX<t&&(this.minX=t),this.maxX>e&&(this.maxX=e),this.minY<n&&(this.minY=n),this.maxY>r&&(this.maxY=r),this}pad(t,e=t){return this.minX-=t,this.maxX+=t,this.minY-=e,this.maxY+=e,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Xt(this.minX,this.minY,this.maxX,this.maxY)}scale(t,e=t){return this.minX*=t,this.minY*=e,this.maxX*=t,this.maxY*=e,this}get x(){return this.minX}set x(t){const e=this.maxX-this.minX;this.minX=t,this.maxX=t+e}get y(){return this.minY}set y(t){const e=this.maxY-this.minY;this.minY=t,this.maxY=t+e}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,e,n,r){let s=this.minX,o=this.minY,a=this.maxX,l=this.maxY;r||(r=this.matrix);const u=r.a,h=r.b,c=r.c,f=r.d,d=r.tx,p=r.ty;for(let g=e;g<n;g+=2){const m=t[g],x=t[g+1],v=u*m+c*x+d,y=h*m+f*x+p;s=v<s?v:s,o=y<o?y:o,a=v>a?v:a,l=y>l?y:l}this.minX=s,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(t,e){return this.minX<=t&&this.minY<=e&&this.maxX>=t&&this.maxY>=e}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}}var wh={grad:.9,turn:360,rad:360/(2*Math.PI)},Yt=function(i){return typeof i=="string"?i.length>0:typeof i=="number"},dt=function(i,t,e){return t===void 0&&(t=0),e===void 0&&(e=Math.pow(10,t)),Math.round(e*i)/e+0},Ot=function(i,t,e){return t===void 0&&(t=0),e===void 0&&(e=1),i>e?e:i>t?i:t},za=function(i){return(i=isFinite(i)?i%360:0)>0?i:i+360},Js=function(i){return{r:Ot(i.r,0,255),g:Ot(i.g,0,255),b:Ot(i.b,0,255),a:Ot(i.a)}},jn=function(i){return{r:dt(i.r),g:dt(i.g),b:dt(i.b),a:dt(i.a,3)}},Ch=/^#([0-9a-f]{3,8})$/i,Vi=function(i){var t=i.toString(16);return t.length<2?"0"+t:t},ka=function(i){var t=i.r,e=i.g,n=i.b,r=i.a,s=Math.max(t,e,n),o=s-Math.min(t,e,n),a=o?s===t?(e-n)/o:s===e?2+(n-t)/o:4+(t-e)/o:0;return{h:60*(a<0?a+6:a),s:s?o/s*100:0,v:s/255*100,a:r}},Ra=function(i){var t=i.h,e=i.s,n=i.v,r=i.a;t=t/360*6,e/=100,n/=100;var s=Math.floor(t),o=n*(1-e),a=n*(1-(t-s)*e),l=n*(1-(1-t+s)*e),u=s%6;return{r:255*[n,a,o,o,l,n][u],g:255*[l,n,n,a,o,o][u],b:255*[o,o,l,n,n,a][u],a:r}},to=function(i){return{h:za(i.h),s:Ot(i.s,0,100),l:Ot(i.l,0,100),a:Ot(i.a)}},eo=function(i){return{h:dt(i.h),s:dt(i.s),l:dt(i.l),a:dt(i.a,3)}},io=function(i){return Ra((e=(t=i).s,{h:t.h,s:(e*=((n=t.l)<50?n:100-n)/100)>0?2*e/(n+e)*100:0,v:n+e,a:t.a}));var t,e,n},vi=function(i){return{h:(t=ka(i)).h,s:(r=(200-(e=t.s))*(n=t.v)/100)>0&&r<200?e*n/100/(r<=100?r:200-r)*100:0,l:r/2,a:t.a};var t,e,n,r},Ah=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Th=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ph=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ih=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Or={string:[[function(i){var t=Ch.exec(i);return t?(i=t[1]).length<=4?{r:parseInt(i[0]+i[0],16),g:parseInt(i[1]+i[1],16),b:parseInt(i[2]+i[2],16),a:i.length===4?dt(parseInt(i[3]+i[3],16)/255,2):1}:i.length===6||i.length===8?{r:parseInt(i.substr(0,2),16),g:parseInt(i.substr(2,2),16),b:parseInt(i.substr(4,2),16),a:i.length===8?dt(parseInt(i.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(i){var t=Ph.exec(i)||Ih.exec(i);return t?t[2]!==t[4]||t[4]!==t[6]?null:Js({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(i){var t=Ah.exec(i)||Th.exec(i);if(!t)return null;var e,n,r=to({h:(e=t[1],n=t[2],n===void 0&&(n="deg"),Number(e)*(wh[n]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return io(r)},"hsl"]],object:[[function(i){var t=i.r,e=i.g,n=i.b,r=i.a,s=r===void 0?1:r;return Yt(t)&&Yt(e)&&Yt(n)?Js({r:Number(t),g:Number(e),b:Number(n),a:Number(s)}):null},"rgb"],[function(i){var t=i.h,e=i.s,n=i.l,r=i.a,s=r===void 0?1:r;if(!Yt(t)||!Yt(e)||!Yt(n))return null;var o=to({h:Number(t),s:Number(e),l:Number(n),a:Number(s)});return io(o)},"hsl"],[function(i){var t=i.h,e=i.s,n=i.v,r=i.a,s=r===void 0?1:r;if(!Yt(t)||!Yt(e)||!Yt(n))return null;var o=function(a){return{h:za(a.h),s:Ot(a.s,0,100),v:Ot(a.v,0,100),a:Ot(a.a)}}({h:Number(t),s:Number(e),v:Number(n),a:Number(s)});return Ra(o)},"hsv"]]},no=function(i,t){for(var e=0;e<t.length;e++){var n=t[e][0](i);if(n)return[n,t[e][1]]}return[null,void 0]},Mh=function(i){return typeof i=="string"?no(i.trim(),Or.string):typeof i=="object"&&i!==null?no(i,Or.object):[null,void 0]},qn=function(i,t){var e=vi(i);return{h:e.h,s:Ot(e.s+100*t,0,100),l:e.l,a:e.a}},Kn=function(i){return(299*i.r+587*i.g+114*i.b)/1e3/255},ro=function(i,t){var e=vi(i);return{h:e.h,s:e.s,l:Ot(e.l+100*t,0,100),a:e.a}},Br=function(){function i(t){this.parsed=Mh(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return i.prototype.isValid=function(){return this.parsed!==null},i.prototype.brightness=function(){return dt(Kn(this.rgba),2)},i.prototype.isDark=function(){return Kn(this.rgba)<.5},i.prototype.isLight=function(){return Kn(this.rgba)>=.5},i.prototype.toHex=function(){return t=jn(this.rgba),e=t.r,n=t.g,r=t.b,o=(s=t.a)<1?Vi(dt(255*s)):"","#"+Vi(e)+Vi(n)+Vi(r)+o;var t,e,n,r,s,o},i.prototype.toRgb=function(){return jn(this.rgba)},i.prototype.toRgbString=function(){return t=jn(this.rgba),e=t.r,n=t.g,r=t.b,(s=t.a)<1?"rgba("+e+", "+n+", "+r+", "+s+")":"rgb("+e+", "+n+", "+r+")";var t,e,n,r,s},i.prototype.toHsl=function(){return eo(vi(this.rgba))},i.prototype.toHslString=function(){return t=eo(vi(this.rgba)),e=t.h,n=t.s,r=t.l,(s=t.a)<1?"hsla("+e+", "+n+"%, "+r+"%, "+s+")":"hsl("+e+", "+n+"%, "+r+"%)";var t,e,n,r,s},i.prototype.toHsv=function(){return t=ka(this.rgba),{h:dt(t.h),s:dt(t.s),v:dt(t.v),a:dt(t.a,3)};var t},i.prototype.invert=function(){return Vt({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},i.prototype.saturate=function(t){return t===void 0&&(t=.1),Vt(qn(this.rgba,t))},i.prototype.desaturate=function(t){return t===void 0&&(t=.1),Vt(qn(this.rgba,-t))},i.prototype.grayscale=function(){return Vt(qn(this.rgba,-1))},i.prototype.lighten=function(t){return t===void 0&&(t=.1),Vt(ro(this.rgba,t))},i.prototype.darken=function(t){return t===void 0&&(t=.1),Vt(ro(this.rgba,-t))},i.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},i.prototype.alpha=function(t){return typeof t=="number"?Vt({r:(e=this.rgba).r,g:e.g,b:e.b,a:t}):dt(this.rgba.a,3);var e},i.prototype.hue=function(t){var e=vi(this.rgba);return typeof t=="number"?Vt({h:t,s:e.s,l:e.l,a:e.a}):dt(e.h)},i.prototype.isEqual=function(t){return this.toHex()===Vt(t).toHex()},i}(),Vt=function(i){return i instanceof Br?i:new Br(i)},so=[],Fh=function(i){i.forEach(function(t){so.indexOf(t)<0&&(t(Br,Or),so.push(t))})};function zh(i,t){var e={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},n={};for(var r in e)n[e[r]]=r;var s={};i.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,u=n[this.toHex()];if(u)return u;if(o!=null&&o.closest){var h=this.toRgb(),c=1/0,f="black";if(!s.length)for(var d in e)s[d]=new i(e[d]).toRgb();for(var p in e){var g=(a=h,l=s[p],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));g<c&&(c=g,f=p)}return f}},t.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":e[a];return l?new i(l).toRgb():null},"name"])}Fh([zh]);const He=class fi{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof fi)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._value=this._cloneSource(t),this._normalize(this._value))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,e){const n=typeof t;if(n!==typeof e)return!1;if(n==="number"||n==="string"||t instanceof Number)return t===e;if(Array.isArray(t)&&Array.isArray(e)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(e))return t.length!==e.length?!1:t.every((s,o)=>s===e[o]);if(t!==null&&e!==null){const s=Object.keys(t),o=Object.keys(e);return s.length!==o.length?!1:s.every(a=>t[a]===e[a])}return t===e}toRgba(){const[t,e,n,r]=this._components;return{r:t,g:e,b:n,a:r}}toRgb(){const[t,e,n]=this._components;return{r:t,g:e,b:n}}toRgbaString(){const[t,e,n]=this.toUint8RgbArray();return`rgba(${t},${e},${n},${this.alpha})`}toUint8RgbArray(t){const[e,n,r]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb,t[0]=Math.round(e*255),t[1]=Math.round(n*255),t[2]=Math.round(r*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t=t||this._arrayRgba;const[e,n,r,s]=this._components;return t[0]=e,t[1]=n,t[2]=r,t[3]=s,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb;const[e,n,r]=this._components;return t[0]=e,t[1]=n,t[2]=r,t}toNumber(){return this._int}toBgrNumber(){const[t,e,n]=this.toUint8RgbArray();return(n<<16)+(e<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[e,n,r,s]=fi._temp.setValue(t)._components;return this._components[0]*=e,this._components[1]*=n,this._components[2]*=r,this._components[3]*=s,this._refreshInt(),this._value=null,this}premultiply(t,e=!0){return e&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,e=!0){if(t===1)return(255<<24)+this._int;if(t===0)return e?0:this._int;let n=this._int>>16&255,r=this._int>>8&255,s=this._int&255;return e&&(n=n*t+.5|0,r=r*t+.5|0,s=s*t+.5|0),(t*255<<24)+(n<<16)+(r<<8)+s}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const e=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-e.length)+e}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let e,n,r,s;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const o=t;e=(o>>16&255)/255,n=(o>>8&255)/255,r=(o&255)/255,s=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[e,n,r,s=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[e,n,r,s=255]=t,e/=255,n/=255,r/=255,s/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const a=fi.HEX_PATTERN.exec(t);a&&(t=`#${a[2]}`)}const o=Vt(t);o.isValid()&&({r:e,g:n,b:r,a:s}=o.rgba,e/=255,n/=255,r/=255)}if(e!==void 0)this._components[0]=e,this._components[1]=n,this._components[2]=r,this._components[3]=s,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,e,n]=this._components;this._int=(t*255<<16)+(e*255<<8)+(n*255|0)}_clamp(t,e=0,n=1){return typeof t=="number"?Math.min(Math.max(t,e),n):(t.forEach((r,s)=>{t[s]=Math.min(Math.max(r,e),n)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof fi||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};He.shared=new He;He._temp=new He;He.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let V=He;const kh={cullArea:null,cullable:!1,cullableChildren:!0};class vs{constructor(t,e){this._pool=[],this._count=0,this._index=0,this._classType=t,e&&this.prepopulate(e)}prepopulate(t){for(let e=0;e<t;e++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){var n;let e;return this._index>0?e=this._pool[--this._index]:e=new this._classType,(n=e.init)==null||n.call(e,t),e}return(t){var e;(e=t.reset)==null||e.call(t),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class Rh{constructor(){this._poolsByClass=new Map}prepopulate(t,e){this.getPool(t).prepopulate(e)}get(t,e){return this.getPool(t).get(e)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new vs(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(e=>{const n=t[e._classType.name]?e._classType.name+e._classType.ID:e._classType.name;t[n]={free:e.totalFree,used:e.totalUsed,size:e.totalSize}}),t}}const qt=new Rh;function Oh(i,t,e){const n=i.length;let r;if(t>=n||e===0)return;e=t+e>n?n-t:e;const s=n-e;for(r=t;r<s;++r)i[r]=i[r+e];i.length=s}const Bh={allowChildren:!0,removeChildren(i=0,t){const e=t??this.children.length,n=e-i,r=[];if(n>0&&n<=e){for(let o=e-1;o>=i;o--){const a=this.children[o];a&&(r.push(a),a.parent=null)}Oh(this.children,i,e);const s=this.renderGroup||this.parentRenderGroup;s&&s.removeChildren(r);for(let o=0;o<r.length;++o)this.emit("childRemoved",r[o],this,o),r[o].emit("removed",this);return r}else if(n===0&&this.children.length===0)return r;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(i){const t=this.getChildAt(i);return this.removeChild(t)},getChildAt(i){if(i<0||i>=this.children.length)throw new Error(`getChildAt: Index (${i}) does not exist.`);return this.children[i]},setChildIndex(i,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(i),this.addChildAt(i,t)},getChildIndex(i){const t=this.children.indexOf(i);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(i,t){this.allowChildren||F(Y,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:e}=this;if(t<0||t>e.length)throw new Error(`${i}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);if(i.parent){const r=i.parent.children.indexOf(i);if(i.parent===this&&r===t)return i;r!==-1&&i.parent.children.splice(r,1)}t===e.length?e.push(i):e.splice(t,0,i),i.parent=this,i.didChange=!0,i._updateFlags=15;const n=this.renderGroup||this.parentRenderGroup;return n&&n.addChild(i),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",i,this,t),i.emit("added",this),i},swapChildren(i,t){if(i===t)return;const e=this.getChildIndex(i),n=this.getChildIndex(t);this.children[e]=t,this.children[n]=i;const r=this.renderGroup||this.parentRenderGroup;r&&(r.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){var i;(i=this.parent)==null||i.removeChild(this)},reparentChild(...i){return i.length===1?this.reparentChildAt(i[0],this.children.length):(i.forEach(t=>this.reparentChildAt(t,this.children.length)),i[0])},reparentChildAt(i,t){if(i.parent===this)return this.setChildIndex(i,t),i;const e=i.worldTransform.clone();i.removeFromParent(),this.addChildAt(i,t);const n=this.worldTransform.clone();return n.invert(),e.prepend(n),i.setFromMatrix(e),i}};class oo{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class Eh{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let e=0;e<this._tests.length;e++){const n=this._tests[e];if(n.test(t))return qt.get(n.maskClass,t)}return t}returnMaskEffect(t){qt.return(t)}}const Er=new Eh;_t.handleByList(I.MaskEffect,Er._effectClasses);const Uh={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],addEffect(i){if(this.effects.indexOf(i)!==-1)return;this.effects.push(i),this.effects.sort((n,r)=>n.priority-r.priority);const e=this.renderGroup||this.parentRenderGroup;e&&(e.structureDidChange=!0),this._updateIsSimple()},removeEffect(i){const t=this.effects.indexOf(i);t!==-1&&(this.effects.splice(t,1),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateIsSimple())},set mask(i){const t=this._maskEffect;(t==null?void 0:t.mask)!==i&&(t&&(this.removeEffect(t),Er.returnMaskEffect(t),this._maskEffect=null),i!=null&&(this._maskEffect=Er.getMaskEffect(i),this.addEffect(this._maskEffect)))},setMask(i){this._maskOptions={...this._maskOptions,...i},i.mask&&(this.mask=i.mask)},get mask(){var i;return(i=this._maskEffect)==null?void 0:i.mask},set filters(i){var s;!Array.isArray(i)&&i&&(i=[i]);const t=this._filterEffect||(this._filterEffect=new oo);i=i;const e=(i==null?void 0:i.length)>0,n=((s=t.filters)==null?void 0:s.length)>0,r=e!==n;i=Array.isArray(i)?i.slice(0):i,t.filters=Object.freeze(i),r&&(e?this.addEffect(t):(this.removeEffect(t),t.filters=i??null))},get filters(){var i;return(i=this._filterEffect)==null?void 0:i.filters},set filterArea(i){this._filterEffect||(this._filterEffect=new oo),this._filterEffect.filterArea=i},get filterArea(){var i;return(i=this._filterEffect)==null?void 0:i.filterArea}},Lh={label:null,get name(){return F(Y,"Container.name property has been removed, use Container.label instead"),this.label},set name(i){F(Y,"Container.name property has been removed, use Container.label instead"),this.label=i},getChildByName(i,t=!1){return this.getChildByLabel(i,t)},getChildByLabel(i,t=!1){const e=this.children;for(let n=0;n<e.length;n++){const r=e[n];if(r.label===i||i instanceof RegExp&&i.test(r.label))return r}if(t)for(let n=0;n<e.length;n++){const s=e[n].getChildByLabel(i,!0);if(s)return s}return null},getChildrenByLabel(i,t=!1,e=[]){const n=this.children;for(let r=0;r<n.length;r++){const s=n[r];(s.label===i||i instanceof RegExp&&i.test(s.label))&&e.push(s)}if(t)for(let r=0;r<n.length;r++)n[r].getChildrenByLabel(i,!0,e);return e}},Kt=new vs(H),Xe=new vs(Xt);function Oa(i,t,e){e.clear();let n,r;return i.parent?t?n=i.parent.worldTransform:(r=Kt.get().identity(),n=An(i,r)):n=H.IDENTITY,Ba(i,e,n,t),r&&Kt.return(r),e.isValid||e.set(0,0,0,0),e}function Ba(i,t,e,n){var a,l;if(!i.visible||!i.measurable)return;let r;n?r=i.worldTransform:(i.updateLocalTransform(),r=Kt.get(),r.appendFrom(i.localTransform,e));const s=t,o=!!i.effects.length;if(o&&(t=Xe.get().clear()),i.boundsArea)t.addRect(i.boundsArea,r);else{i.addBounds&&(t.matrix=r,i.addBounds(t));for(let u=0;u<i.children.length;u++)Ba(i.children[u],t,r,n)}if(o){for(let u=0;u<i.effects.length;u++)(l=(a=i.effects[u]).addBounds)==null||l.call(a,t);s.addBounds(t,H.IDENTITY),Xe.return(t)}n||Kt.return(r)}function An(i,t){const e=i.parent;return e&&(An(e,t),e.updateLocalTransform(),t.append(e.localTransform)),t}let Zn=0;const ao=500;function ht(...i){Zn!==ao&&(Zn++,Zn===ao?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...i))}function Ea(i,t,e){return t.clear(),e||(e=H.IDENTITY),Ua(i,t,e,i,!0),t.isValid||t.set(0,0,0,0),t}function Ua(i,t,e,n,r){var l,u;let s;if(r)s=Kt.get(),s=e.copyTo(s);else{if(!i.visible||!i.measurable)return;i.updateLocalTransform();const h=i.localTransform;s=Kt.get(),s.appendFrom(h,e)}const o=t,a=!!i.effects.length;if(a&&(t=Xe.get().clear()),i.boundsArea)t.addRect(i.boundsArea,s);else{i.renderPipeId&&(t.matrix=s,i.addBounds(t));const h=i.children;for(let c=0;c<h.length;c++)Ua(h[c],t,s,n,!1)}if(a){for(let h=0;h<i.effects.length;h++)(u=(l=i.effects[h]).addLocalBounds)==null||u.call(l,t,n);o.addBounds(t,H.IDENTITY),Xe.return(t)}Kt.return(s)}function La(i,t){const e=i.children;for(let n=0;n<e.length;n++){const r=e[n],s=r.uid,o=(r._didViewChangeTick&65535)<<16|r._didContainerChangeTick&65535,a=t.index;(t.data[a]!==s||t.data[a+1]!==o)&&(t.data[t.index]=s,t.data[t.index+1]=o,t.didChange=!0),t.index=a+2,r.children.length&&La(r,t)}return t.didChange}const Dh=new H,Gh={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(i,t){const e=Math.sign(this.scale.x)||1;t!==0?this.scale.x=i/t*e:this.scale.x=e},_setHeight(i,t){const e=Math.sign(this.scale.y)||1;t!==0?this.scale.y=i/t*e:this.scale.y=e},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Xt});const i=this._localBoundsCacheData;return i.index=1,i.didChange=!1,i.data[0]!==this._didViewChangeTick&&(i.didChange=!0,i.data[0]=this._didViewChangeTick),La(this,i),i.didChange&&Ea(this,i.localBounds,Dh),i.localBounds},getBounds(i,t){return Oa(this,i,t||new Xt)}},Nh={_onRender:null,set onRender(i){const t=this.renderGroup||this.parentRenderGroup;if(!i){this._onRender&&(t==null||t.removeOnRender(this)),this._onRender=null;return}this._onRender||t==null||t.addOnRender(this),this._onRender=i},get onRender(){return this._onRender}},$h={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(i){this._zIndex!==i&&(this._zIndex=i,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(Vh))}};function Vh(i,t){return i._zIndex-t._zIndex}const Wh={getGlobalPosition(i=new yt,t=!1){return this.parent?this.parent.toGlobal(this._position,i,t):(i.x=this._position.x,i.y=this._position.y),i},toGlobal(i,t,e=!1){if(!e){this.updateLocalTransform();const n=An(this,new H);return n.append(this.localTransform),n.apply(i,t)}return this.worldTransform.apply(i,t)},toLocal(i,t,e,n){if(t&&(i=t.toGlobal(i,e,n)),!n){this.updateLocalTransform();const r=An(this,new H);return r.append(this.localTransform),r.applyInverse(i,e)}return this.worldTransform.applyInverse(i,e)}};let Hh=0;class Da{constructor(){this.uid=ut("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.tick=0}reset(){this.instructionSize=0,this.tick=Hh++}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}class Xh{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new H,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new Da,this._onRenderContainers=[]}init(t){this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const e=t.children;for(let n=0;n<e.length;n++)this.addChild(e[n])}reset(){this.renderGroupChildren.length=0;for(const t in this.childrenToUpdate){const e=this.childrenToUpdate[t];e.list.fill(null),e.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const e=this.renderGroupChildren.indexOf(t);e>-1&&this.renderGroupChildren.splice(e,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const e=t.children;for(let n=0;n<e.length;n++)this.addChild(e[n])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const e=t.children;for(let n=0;n<e.length;n++)this.removeChild(e[n])}removeChildren(t){for(let e=0;e<t.length;e++)this.removeChild(t[e])}onChildUpdate(t){let e=this.childrenToUpdate[t.relativeRenderGroupDepth];e||(e=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),e.list[e.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t),t.didViewUpdate=!1)}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}destroy(){this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const e=this.root.children;for(let n=0;n<e.length;n++)this._getChildren(e[n],t);return t}_getChildren(t,e=[]){if(e.push(t),t.renderGroup)return e;const n=t.children;for(let r=0;r<n.length;r++)this._getChildren(n[r],e);return e}}function Yh(i,t,e={}){for(const n in t)!e[n]&&t[n]!==void 0&&(i[n]=t[n])}const Qn=new at(null),Jn=new at(null),tr=new at(null,1,1),lo=1,jh=2,er=4;class Z extends xt{constructor(t={}){var e,n;super(),this.uid=ut("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new H,this.relativeGroupTransform=new H,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new at(this,0,0),this._scale=tr,this._pivot=Jn,this._skew=Qn,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],Yh(this,t,{children:!0,parent:!0,effects:!0}),(e=t.children)==null||e.forEach(r=>this.addChild(r)),(n=t.parent)==null||n.addChild(this)}static mixin(t){Object.defineProperties(Z.prototype,Object.getOwnPropertyDescriptors(t))}set _didChangeId(t){this._didViewChangeTick=t>>12&4095,this._didContainerChangeTick=t&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...t){if(this.allowChildren||F(Y,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let r=0;r<t.length;r++)this.addChild(t[r]);return t[0]}const e=t[0];if(e.parent===this)return this.children.splice(this.children.indexOf(e),1),this.children.push(e),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),e;e.parent&&e.parent.removeChild(e),this.children.push(e),this.sortableChildren&&(this.sortDirty=!0),e.parent=this,e.didChange=!0,e._updateFlags=15;const n=this.renderGroup||this.parentRenderGroup;return n&&n.addChild(e),this.emit("childAdded",e,this,this.children.length-1),e.emit("added",this),this._didViewChangeTick++,e._zIndex!==0&&e.depthOfChildModified(),e}removeChild(...t){if(t.length>1){for(let r=0;r<t.length;r++)this.removeChild(t[r]);return t[0]}const e=t[0],n=this.children.indexOf(e);return n>-1&&(this._didViewChangeTick++,this.children.splice(n,1),this.renderGroup?this.renderGroup.removeChild(e):this.parentRenderGroup&&this.parentRenderGroup.removeChild(e),e.parent=null,this.emit("childRemoved",e,this,n),e.emit("removed",this)),e}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){!!this.renderGroup!==t&&(t?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t==null||t.removeChild(this),this.renderGroup=qt.get(Xh,this),this.groupTransform=H.IDENTITY,t==null||t.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const t=this.parentRenderGroup;t==null||t.removeChild(this),qt.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,t==null||t.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new H),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*dh}set angle(t){this.rotation=t*We}get pivot(){return this._pivot===Jn&&(this._pivot=new at(this,0,0)),this._pivot}set pivot(t){this._pivot===Jn&&(this._pivot=new at(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===Qn&&(this._skew=new at(this,0,0)),this._skew}set skew(t){this._skew===Qn&&(this._skew=new at(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===tr&&(this._scale=new at(this,1,1)),this._scale}set scale(t){this._scale===tr&&(this._scale=new at(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const e=this.getLocalBounds().width;this._setWidth(t,e)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const e=this.getLocalBounds().height;this._setHeight(t,e)}getSize(t){t||(t={});const e=this.getLocalBounds();return t.width=Math.abs(this.scale.x*e.width),t.height=Math.abs(this.scale.y*e.height),t}setSize(t,e){const n=this.getLocalBounds();typeof t=="object"?(e=t.height??t.width,t=t.width):e??(e=t),t!==void 0&&this._setWidth(t,n.width),e!==void 0&&this._setHeight(e,n.height)}_updateSkew(){const t=this._rotation,e=this._skew;this._cx=Math.cos(t+e._y),this._sx=Math.sin(t+e._y),this._cy=-Math.sin(t-e._x),this._sy=Math.cos(t-e._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){const t=this._didContainerChangeTick;if(this._didLocalTransformChangeId===t)return;this._didLocalTransformChangeId=t;const e=this.localTransform,n=this._scale,r=this._pivot,s=this._position,o=n._x,a=n._y,l=r._x,u=r._y;e.a=this._cx*o,e.b=this._sx*o,e.c=this._cy*a,e.d=this._sy*a,e.tx=s._x-(l*e.a+u*e.c),e.ty=s._y-(l*e.b+u*e.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=lo,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const n=V.shared.setValue(t??16777215).toBgrNumber();n!==this.localColor&&(this.localColor=n,this._updateFlags|=lo,this._onUpdate())}get tint(){const t=this.localColor;return((t&255)<<16)+(t&65280)+(t>>16&255)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=jh,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const e=t?2:0;(this.localDisplayStatus&2)!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=er,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const e=t?0:4;(this.localDisplayStatus&4)!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=er,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const e=t?1:0;(this.localDisplayStatus&1)!==e&&(this._updateFlags|=er,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){var r;if(this.destroyed)return;this.destroyed=!0;let e;if(this.children.length&&(e=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof t=="boolean"?t:t==null?void 0:t.children)&&e)for(let s=0;s<e.length;++s)e[s].destroy(t);(r=this.renderGroup)==null||r.destroy(),this.renderGroup=null}}Z.mixin(Bh);Z.mixin(Wh);Z.mixin(Nh);Z.mixin(Gh);Z.mixin(Uh);Z.mixin(Lh);Z.mixin($h);Z.mixin(kh);class Ln extends Z{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=0,this._lastInstructionTick=-1,this._bounds=new Xt(0,1,0,0),this._boundsDirty=!0}_updateBounds(){}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}containsPoint(t){const e=this.bounds,{x:n,y:r}=t;return n>=e.minX&&n<=e.maxX&&r>=e.minY&&r<=e.maxY}onViewUpdate(){if(this._didViewChangeTick++,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){super.destroy(t),this._bounds=null}}class ot extends Ln{constructor(t=E.EMPTY){t instanceof E&&(t={texture:t});const{texture:e=E.EMPTY,anchor:n,roundPixels:r,width:s,height:o,...a}=t;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._sourceBounds={minX:0,maxX:1,minY:0,maxY:0},this._sourceBoundsDirty=!0,this._anchor=new at({_onUpdate:()=>{this.onViewUpdate()}}),n?this.anchor=n:e.defaultAnchor&&(this.anchor=e.defaultAnchor),this.texture=e,this.allowChildren=!1,this.roundPixels=r??!1,s!==void 0&&(this.width=s),o!==void 0&&(this.height=o)}static from(t,e=!1){return t instanceof E?new ot(t):new ot(E.from(t,e))}set texture(t){t||(t=E.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get sourceBounds(){return this._sourceBoundsDirty&&(this._updateSourceBounds(),this._sourceBoundsDirty=!1),this._sourceBounds}containsPoint(t){const e=this.sourceBounds;return t.x>=e.maxX&&t.x<=e.minX&&t.y>=e.maxY&&t.y<=e.minY}addBounds(t){const e=this._texture.trim?this.sourceBounds:this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}onViewUpdate(){this._sourceBoundsDirty=this._boundsDirty=!0,super.onViewUpdate()}_updateBounds(){Sh(this._bounds,this._anchor,this._texture,0)}_updateSourceBounds(){const t=this._anchor,e=this._texture,n=this._sourceBounds,{width:r,height:s}=e.orig;n.maxX=-t._x*r,n.minX=n.maxX+r,n.maxY=-t._y*s,n.minY=n.maxY+s}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const n=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(n)}this._texture=null,this._bounds=null,this._sourceBounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,e){typeof t=="object"?(e=t.height??t.width,t=t.width):e??(e=t),t!==void 0&&this._setWidth(t,this._texture.orig.width),e!==void 0&&this._setHeight(e,this._texture.orig.height)}}const qh=new Xt;function Ga(i,t,e){const n=qh;i.measurable=!0,Oa(i,e,n),t.addBoundsMask(n),i.measurable=!1}function Na(i,t,e){const n=Xe.get();i.measurable=!0;const r=Kt.get().identity(),s=$a(i,e,r);Ea(i,n,s),i.measurable=!1,t.addBoundsMask(n),Kt.return(r),Xe.return(n)}function $a(i,t,e){return i?(i!==t&&($a(i.parent,t,e),i.updateLocalTransform(),e.append(i.localTransform)),e):(ht("Mask bounds, renderable is not inside the root container"),e)}class Va{constructor(t){this.priority=0,this.inverse=!1,this.pipe="alphaMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof ot),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,e){this.inverse||Ga(this.mask,t,e)}addLocalBounds(t,e){Na(this.mask,t,e)}containsPoint(t,e){const n=this.mask;return e(n,t)}destroy(){this.reset()}static test(t){return t instanceof ot}}Va.extension=I.MaskEffect;class Wa{constructor(t){this.priority=0,this.pipe="colorMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}Wa.extension=I.MaskEffect;class Ha{constructor(t){this.priority=0,this.pipe="stencilMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,e){Ga(this.mask,t,e)}addLocalBounds(t,e){Na(this.mask,t,e)}containsPoint(t,e){const n=this.mask;return e(n,t)}destroy(){this.reset()}static test(t){return t instanceof Z}}Ha.extension=I.MaskEffect;const Kh={createCanvas:(i,t)=>{const e=document.createElement("canvas");return e.width=i,e.height=t,e},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(i,t)=>fetch(i,t),parseXML:i=>new DOMParser().parseFromString(i,"text/xml")};let uo=Kh;const tt={get(){return uo},set(i){uo=i}};class ys extends Tt{constructor(t){t.resource||(t.resource=tt.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity;const e=t.resource;(this.pixelWidth!==e.width||this.pixelWidth!==e.height)&&this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,e=this.height,n=this._resolution){const r=super.resize(t,e,n);return r&&this.resizeCanvas(),r}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}ys.extension=I.TextureSource;class Ae extends Tt{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const e=tt.get().createCanvas(t.resource.width,t.resource.height);e.getContext("2d").drawImage(t.resource,0,0,t.resource.width,t.resource.height),t.resource=e,ht("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||globalThis.VideoFrame&&t instanceof VideoFrame}}Ae.extension=I.TextureSource;var Tn=(i=>(i[i.INTERACTION=50]="INTERACTION",i[i.HIGH=25]="HIGH",i[i.NORMAL=0]="NORMAL",i[i.LOW=-25]="LOW",i[i.UTILITY=-50]="UTILITY",i))(Tn||{});class ir{constructor(t,e=null,n=0,r=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=e,this.priority=n,this._once=r}match(t,e=null){return this._fn===t&&this._context===e}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const e=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),e}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const e=this.next;return this.next=t?null:e,this.previous=null,e}}const Xa=class It{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new ir(null,null,1/0),this.deltaMS=1/It.targetFPMS,this.elapsedMS=1/It.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,e,n=Tn.NORMAL){return this._addListener(new ir(t,e,n))}addOnce(t,e,n=Tn.NORMAL){return this._addListener(new ir(t,e,n,!0))}_addListener(t){let e=this._head.next,n=this._head;if(!e)t.connect(n);else{for(;e;){if(t.priority>e.priority){t.connect(n);break}n=e,e=e.next}t.previous||t.connect(n)}return this._startIfPossible(),this}remove(t,e){let n=this._head.next;for(;n;)n.match(t,e)?n=n.destroy():n=n.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,e=this._head;for(;e=e.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let e;if(t>this.lastTime){if(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){const s=t-this._lastFrame|0;if(s<this._minElapsedMS)return;this._lastFrame=t-s%this._minElapsedMS}this.deltaMS=e,this.deltaTime=this.deltaMS*It.targetFPMS;const n=this._head;let r=n.next;for(;r;)r=r.emit(this);n.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const e=Math.min(this.maxFPS,t),n=Math.min(Math.max(0,e)/1e3,It.targetFPMS);this._maxElapsedMS=1/n}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const e=Math.max(this.minFPS,t);this._minElapsedMS=1/(e/1e3)}}static get shared(){if(!It._shared){const t=It._shared=new It;t.autoStart=!0,t._protected=!0}return It._shared}static get system(){if(!It._system){const t=It._system=new It;t.autoStart=!0,t._protected=!0}return It._system}};Xa.targetFPMS=.06;let zt=Xa,nr;async function Ya(){return nr??(nr=(async()=>{var o;const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const e=await new Promise(a=>{const l=document.createElement("video");l.onloadeddata=()=>a(l),l.onerror=()=>a(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!e)return"premultiply-alpha-on-upload";const n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n);const r=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,r),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e);const s=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,s),t.deleteFramebuffer(r),t.deleteTexture(n),(o=t.getExtension("WEBGL_lose_context"))==null||o.loseContext(),s[0]<=s[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),nr}const Dn=class ja extends Tt{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...ja.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=zt.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,e=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(e.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await Ya(),this._load=new Promise((n,r)=>{this.isValid?n(this):(this._resolve=n,this._reject=r,e.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(zt.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(zt.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(zt.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement}};Dn.extension=I.TextureSource;Dn.defaultOptions={...Tt.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};Dn.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let ln=Dn;const Lt=(i,t,e=!1)=>(Array.isArray(i)||(i=[i]),t?i.map(n=>typeof n=="string"||e?t(n):n):i);class Zh{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const e=this._cache.get(t);return e||ht(`[Assets] Asset id ${t} was not found in the Cache`),e}set(t,e){const n=Lt(t);let r;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(e)){r=u.getCacheableAssets(n,e);break}}const s=new Map(Object.entries(r||{}));r||n.forEach(l=>{s.set(l,e)});const o=[...s.keys()],a={cacheKeys:o,keys:n};n.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const u=r?r[l]:e;this._cache.has(l)&&this._cache.get(l)!==u&&ht("[Cache] already has key:",l),this._cache.set(l,s.get(l))})}remove(t){if(!this._cacheMap.has(t)){ht(`[Assets] Asset id ${t} was not found in the Cache`);return}const e=this._cacheMap.get(t);e.cacheKeys.forEach(r=>{this._cache.delete(r)}),e.keys.forEach(r=>{this._cacheMap.delete(r)})}get parsers(){return this._parsers}}const nt=new Zh,Ur=[];_t.handleByList(I.TextureSource,Ur);function qa(i={}){const t=i&&i.resource,e=t?i.resource:i,n=t?i:{resource:i};for(let r=0;r<Ur.length;r++){const s=Ur[r];if(s.test(e))return new s(n)}throw new Error(`Could not find a source type for resource: ${n.resource}`)}function Qh(i={},t=!1){const e=i&&i.resource,n=e?i.resource:i,r=e?i:{resource:i};if(!t&&nt.has(n))return nt.get(n);const s=new E({source:qa(r)});return s.on("destroy",()=>{nt.has(n)&&nt.remove(n)}),t||nt.set(n,s),s}function Jh(i,t=!1){return typeof i=="string"?nt.get(i):i instanceof Tt?new E({source:i}):Qh(i,t)}E.from=Jh;Tt.from=qa;_t.add(Va,Wa,Ha,ln,Ae,ys,xs);var Zt=(i=>(i[i.Low=0]="Low",i[i.Normal=1]="Normal",i[i.High=2]="High",i))(Zt||{});function Ut(i){if(typeof i!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(i)}`)}function ri(i){return i.split("?")[0].split("#")[0]}function tc(i){return i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ec(i,t,e){return i.replace(new RegExp(tc(t),"g"),e)}function ic(i,t){let e="",n=0,r=-1,s=0,o=-1;for(let a=0;a<=i.length;++a){if(a<i.length)o=i.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(r===a-1||s===1))if(r!==a-1&&s===2){if(e.length<2||n!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){const l=e.lastIndexOf("/");if(l!==e.length-1){l===-1?(e="",n=0):(e=e.slice(0,l),n=e.length-1-e.lastIndexOf("/")),r=a,s=0;continue}}else if(e.length===2||e.length===1){e="",n=0,r=a,s=0;continue}}}else e.length>0?e+=`/${i.slice(r+1,a)}`:e=i.slice(r+1,a),n=a-r-1;r=a,s=0}else o===46&&s!==-1?++s:s=-1}return e}const gt={toPosix(i){return ec(i,"\\","/")},isUrl(i){return/^https?:/.test(this.toPosix(i))},isDataUrl(i){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(i)},isBlobUrl(i){return i.startsWith("blob:")},hasProtocol(i){return/^[^/:]+:/.test(this.toPosix(i))},getProtocol(i){Ut(i),i=this.toPosix(i);const t=/^file:\/\/\//.exec(i);if(t)return t[0];const e=/^[^/:]+:\/{0,2}/.exec(i);return e?e[0]:""},toAbsolute(i,t,e){if(Ut(i),this.isDataUrl(i)||this.isBlobUrl(i))return i;const n=ri(this.toPosix(t??tt.get().getBaseUrl())),r=ri(this.toPosix(e??this.rootname(n)));return i=this.toPosix(i),i.startsWith("/")?gt.join(r,i.slice(1)):this.isAbsolute(i)?i:this.join(n,i)},normalize(i){if(Ut(i),i.length===0)return".";if(this.isDataUrl(i)||this.isBlobUrl(i))return i;i=this.toPosix(i);let t="";const e=i.startsWith("/");this.hasProtocol(i)&&(t=this.rootname(i),i=i.slice(t.length));const n=i.endsWith("/");return i=ic(i),i.length>0&&n&&(i+="/"),e?`/${i}`:t+i},isAbsolute(i){return Ut(i),i=this.toPosix(i),this.hasProtocol(i)?!0:i.startsWith("/")},join(...i){if(i.length===0)return".";let t;for(let e=0;e<i.length;++e){const n=i[e];if(Ut(n),n.length>0)if(t===void 0)t=n;else{const r=i[e-1]??"";this.joinExtensions.includes(this.extname(r).toLowerCase())?t+=`/../${n}`:t+=`/${n}`}}return t===void 0?".":this.normalize(t)},dirname(i){if(Ut(i),i.length===0)return".";i=this.toPosix(i);let t=i.charCodeAt(0);const e=t===47;let n=-1,r=!0;const s=this.getProtocol(i),o=i;i=i.slice(s.length);for(let a=i.length-1;a>=1;--a)if(t=i.charCodeAt(a),t===47){if(!r){n=a;break}}else r=!1;return n===-1?e?"/":this.isUrl(o)?s+i:s:e&&n===1?"//":s+i.slice(0,n)},rootname(i){Ut(i),i=this.toPosix(i);let t="";if(i.startsWith("/")?t="/":t=this.getProtocol(i),this.isUrl(i)){const e=i.indexOf("/",t.length);e!==-1?t=i.slice(0,e):t=i,t.endsWith("/")||(t+="/")}return t},basename(i,t){Ut(i),t&&Ut(t),i=ri(this.toPosix(i));let e=0,n=-1,r=!0,s;if(t!==void 0&&t.length>0&&t.length<=i.length){if(t.length===i.length&&t===i)return"";let o=t.length-1,a=-1;for(s=i.length-1;s>=0;--s){const l=i.charCodeAt(s);if(l===47){if(!r){e=s+1;break}}else a===-1&&(r=!1,a=s+1),o>=0&&(l===t.charCodeAt(o)?--o===-1&&(n=s):(o=-1,n=a))}return e===n?n=a:n===-1&&(n=i.length),i.slice(e,n)}for(s=i.length-1;s>=0;--s)if(i.charCodeAt(s)===47){if(!r){e=s+1;break}}else n===-1&&(r=!1,n=s+1);return n===-1?"":i.slice(e,n)},extname(i){Ut(i),i=ri(this.toPosix(i));let t=-1,e=0,n=-1,r=!0,s=0;for(let o=i.length-1;o>=0;--o){const a=i.charCodeAt(o);if(a===47){if(!r){e=o+1;break}continue}n===-1&&(r=!1,n=o+1),a===46?t===-1?t=o:s!==1&&(s=1):t!==-1&&(s=-1)}return t===-1||n===-1||s===0||s===1&&t===n-1&&t===e+1?"":i.slice(t,n)},parse(i){Ut(i);const t={root:"",dir:"",base:"",ext:"",name:""};if(i.length===0)return t;i=ri(this.toPosix(i));let e=i.charCodeAt(0);const n=this.isAbsolute(i);let r;t.root=this.rootname(i),n||this.hasProtocol(i)?r=1:r=0;let s=-1,o=0,a=-1,l=!0,u=i.length-1,h=0;for(;u>=r;--u){if(e=i.charCodeAt(u),e===47){if(!l){o=u+1;break}continue}a===-1&&(l=!1,a=u+1),e===46?s===-1?s=u:h!==1&&(h=1):s!==-1&&(h=-1)}return s===-1||a===-1||h===0||h===1&&s===a-1&&s===o+1?a!==-1&&(o===0&&n?t.base=t.name=i.slice(1,a):t.base=t.name=i.slice(o,a)):(o===0&&n?(t.name=i.slice(1,s),t.base=i.slice(1,a)):(t.name=i.slice(o,s),t.base=i.slice(o,a)),t.ext=i.slice(s,a)),t.dir=this.dirname(i),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function Ka(i,t,e,n,r){const s=t[e];for(let o=0;o<s.length;o++){const a=s[o];e<t.length-1?Ka(i.replace(n[e],a),t,e+1,n,r):r.push(i.replace(n[e],a))}}function nc(i){const t=/\{(.*?)\}/g,e=i.match(t),n=[];if(e){const r=[];e.forEach(s=>{const o=s.substring(1,s.length-1).split(",");r.push(o)}),Ka(i,r,0,e,n)}else n.push(i);return n}const Pn=i=>!Array.isArray(i);class Ze{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,e)=>`${t}${this._bundleIdConnector}${e}`,extractAssetIdFromBundle:(t,e)=>e.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(e=>{this._preferredOrder.push(e),e.priority||(e.priority=Object.keys(e.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const e=t;this._defaultSearchParams=Object.keys(e).map(n=>`${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`).join("&")}}getAlias(t){const{alias:e,src:n}=t;return Lt(e||n,s=>typeof s=="string"?s:Array.isArray(s)?s.map(o=>(o==null?void 0:o.src)??o):s!=null&&s.src?s.src:s,!0)}addManifest(t){this._manifest&&ht("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(e=>{this.addBundle(e.name,e.assets)})}addBundle(t,e){const n=[];let r=e;Array.isArray(e)||(r=Object.entries(e).map(([s,o])=>typeof o=="string"||Array.isArray(o)?{alias:s,src:o}:{alias:s,...o})),r.forEach(s=>{const o=s.src,a=s.alias;let l;if(typeof a=="string"){const u=this._createBundleAssetId(t,a);n.push(u),l=[a,u]}else{const u=a.map(h=>this._createBundleAssetId(t,h));n.push(...u),l=[...a,...u]}this.add({...s,alias:l,src:o})}),this._bundles[t]=n}add(t){const e=[];Array.isArray(t)?e.push(...t):e.push(t);let n;n=s=>{this.hasKey(s)&&ht(`[Resolver] already has key: ${s} overwriting`)},Lt(e).forEach(s=>{const{src:o}=s;let{data:a,format:l,loadParser:u}=s;const h=Lt(o).map(d=>typeof d=="string"?nc(d):Array.isArray(d)?d:[d]),c=this.getAlias(s);Array.isArray(c)?c.forEach(n):n(c);const f=[];h.forEach(d=>{d.forEach(p=>{let g={};if(typeof p!="object"){g.src=p;for(let m=0;m<this._parsers.length;m++){const x=this._parsers[m];if(x.test(p)){g=x.parse(p);break}}}else a=p.data??a,l=p.format??l,u=p.loadParser??u,g={...g,...p};if(!c)throw new Error(`[Resolver] alias is undefined for this asset: ${g.src}`);g=this._buildResolvedAsset(g,{aliases:c,data:a,format:l,loadParser:u}),f.push(g)})}),c.forEach(d=>{this._assetMap[d]=f})})}resolveBundle(t){const e=Pn(t);t=Lt(t);const n={};return t.forEach(r=>{const s=this._bundles[r];if(s){const o=this.resolve(s),a={};for(const l in o){const u=o[l];a[this._extractAssetIdFromBundle(r,l)]=u}n[r]=a}}),e?n[t[0]]:n}resolveUrl(t){const e=this.resolve(t);if(typeof t!="string"){const n={};for(const r in e)n[r]=e[r].src;return n}return e.src}resolve(t){const e=Pn(t);t=Lt(t);const n={};return t.forEach(r=>{if(!this._resolverHash[r])if(this._assetMap[r]){let s=this._assetMap[r];const o=this._getPreferredOrder(s);o==null||o.priority.forEach(a=>{o.params[a].forEach(l=>{const u=s.filter(h=>h[a]?h[a]===l:!1);u.length&&(s=u)})}),this._resolverHash[r]=s[0]}else this._resolverHash[r]=this._buildResolvedAsset({alias:[r],src:r},{});n[r]=this._resolverHash[r]}),e?n[t[0]]:n}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let e=0;e<t.length;e++){const n=t[0],r=this._preferredOrder.find(s=>s.params.format.includes(n.format));if(r)return r}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const e=/\?/.test(t)?"&":"?";return`${t}${e}${this._defaultSearchParams}`}_buildResolvedAsset(t,e){const{aliases:n,data:r,loadParser:s,format:o}=e;return(this._basePath||this._rootPath)&&(t.src=gt.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=n??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...r||{},...t.data},t.loadParser=s??t.loadParser,t.format=o??t.format??rc(t.src),t}}Ze.RETINA_PREFIX=/@([0-9\.]+)x/;function rc(i){return i.split(".").pop().split("?").shift().split("#").shift()}const Lr=(i,t)=>{const e=t.split("?")[1];return e&&(i+=`?${e}`),i},Za=class di{constructor(t,e){this.linkedSheets=[],this._texture=t instanceof E?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=e;const n=parseFloat(e.meta.scale);n?(this.resolution=n,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=di.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let e=t;const n=di.BATCH_SIZE;for(;e-t<n&&e<this._frameKeys.length;){const r=this._frameKeys[e],s=this._frames[r],o=s.frame;if(o){let a=null,l=null;const u=s.trimmed!==!1&&s.sourceSize?s.sourceSize:s.frame,h=new lt(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);s.rotated?a=new lt(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new lt(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),s.trimmed!==!1&&s.spriteSourceSize&&(l=new lt(Math.floor(s.spriteSourceSize.x)/this.resolution,Math.floor(s.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[r]=new E({source:this.textureSource,frame:a,orig:h,trim:l,rotate:s.rotated?2:0,defaultAnchor:s.anchor,defaultBorders:s.borders,label:r.toString()})}e++}}_processAnimations(){const t=this.data.animations||{};for(const e in t){this.animations[e]=[];for(let n=0;n<t[e].length;n++){const r=t[e][n];this.animations[e].push(this.textures[r])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*di.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*di.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){var e;for(const n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&((e=this._texture)==null||e.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};Za.BATCH_SIZE=1e3;let ho=Za;const sc=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function Qa(i,t,e){const n={};if(i.forEach(r=>{n[r]=t}),Object.keys(t.textures).forEach(r=>{n[r]=t.textures[r]}),!e){const r=gt.dirname(i[0]);t.linkedSheets.forEach((s,o)=>{const a=Qa([`${r}/${t.data.meta.related_multi_packs[o]}`],s,!0);Object.assign(n,a)})}return n}const oc={extension:I.Asset,cache:{test:i=>i instanceof ho,getCacheableAssets:(i,t)=>Qa(i,t,!1)},resolver:{extension:{type:I.ResolveParser,name:"resolveSpritesheet"},test:i=>{const e=i.split("?")[0].split("."),n=e.pop(),r=e.pop();return n==="json"&&sc.includes(r)},parse:i=>{var e;const t=i.split(".");return{resolution:parseFloat(((e=Ze.RETINA_PREFIX.exec(i))==null?void 0:e[1])??"1"),format:t[t.length-2],src:i}}},loader:{name:"spritesheetLoader",extension:{type:I.LoadParser,priority:Zt.Normal,name:"spritesheetLoader"},async testParse(i,t){return gt.extname(t.src).toLowerCase()===".json"&&!!i.frames},async parse(i,t,e){var u,h;const{texture:n,imageFilename:r}=(t==null?void 0:t.data)??{};let s=gt.dirname(t.src);s&&s.lastIndexOf("/")!==s.length-1&&(s+="/");let o;if(n instanceof E)o=n;else{const c=Lr(s+(r??i.meta.image),t.src);o=(await e.load([c]))[c]}const a=new ho(o.source,i);await a.parse();const l=(u=i==null?void 0:i.meta)==null?void 0:u.related_multi_packs;if(Array.isArray(l)){const c=[];for(const d of l){if(typeof d!="string")continue;let p=s+d;(h=t.data)!=null&&h.ignoreMultiPack||(p=Lr(p,t.src),c.push(e.load({src:p,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(c);a.linkedSheets=f,f.forEach(d=>{d.linkedSheets=[a].concat(a.linkedSheets.filter(p=>p!==d))})}return a},async unload(i,t,e){await e.unload(i.textureSource._sourceOrigin),i.destroy(!1)}}};_t.add(oc);const rr=Object.create(null),co=Object.create(null);function _s(i,t){let e=co[i];return e===void 0&&(rr[t]===void 0&&(rr[t]=1),co[i]=e=rr[t]++),e}let Pe;function Ja(){return(!Pe||Pe!=null&&Pe.isContextLost())&&(Pe=tt.get().createCanvas().getContext("webgl",{})),Pe}let Wi;function ac(){if(!Wi){Wi="mediump";const i=Ja();i&&i.getShaderPrecisionFormat&&(Wi=i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision?"highp":"mediump")}return Wi}function lc(i,t,e){return t?i:e?(i=i.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${i}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${i}
        `}function uc(i,t,e){const n=e?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(i.substring(0,9)!=="precision"){let r=e?t.requestedFragmentPrecision:t.requestedVertexPrecision;return r==="highp"&&n!=="highp"&&(r="mediump"),`precision ${r} float;
${i}`}else if(n!=="highp"&&i.substring(0,15)==="precision highp")return i.replace("precision highp","precision mediump");return i}function hc(i,t){return t?`#version 300 es
${i}`:i}const cc={},fc={};function dc(i,{name:t="pixi-program"},e=!0){t=t.replace(/\s+/g,"-"),t+=e?"-fragment":"-vertex";const n=e?cc:fc;return n[t]?(n[t]++,t+=`-${n[t]}`):n[t]=1,i.indexOf("#define SHADER_NAME")!==-1?i:`${`#define SHADER_NAME ${t}`}
${i}`}function pc(i,t){return t?i.replace("#version 300 es",""):i}const sr={stripVersion:pc,ensurePrecision:uc,addProgramDefines:lc,setProgramName:dc,insertVersion:hc},or=Object.create(null),tl=class Dr{constructor(t){t={...Dr.defaultOptions,...t};const e=t.fragment.indexOf("#version 300 es")!==-1,n={stripVersion:e,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:ac()},setProgramName:{name:t.name},addProgramDefines:e,insertVersion:e};let r=t.fragment,s=t.vertex;Object.keys(sr).forEach(o=>{const a=n[o];r=sr[o](r,a,!0),s=sr[o](s,a,!1)}),this.fragment=r,this.vertex=s,this._key=_s(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const e=`${t.vertex}:${t.fragment}`;return or[e]||(or[e]=new Dr(t)),or[e]}};tl.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let N=tl;const fo={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function mc(i){return fo[i]??fo.float32}const gc={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function xc({source:i,entryPoint:t}){const e={},n=i.indexOf(`fn ${t}`);if(n!==-1){const r=i.indexOf("->",n);if(r!==-1){const s=i.substring(n,r),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(s))!==null;){const l=gc[a[3]]??"float32";e[a[2]]={location:parseInt(a[1],10),format:l,stride:mc(l).stride,offset:0,instance:!1,start:0}}}}return e}function ar(i){var c,f;const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,e=/@group\((\d+)\)/,n=/@binding\((\d+)\)/,r=/var(<[^>]+>)? (\w+)/,s=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=(c=i.match(t))==null?void 0:c.map(d=>({group:parseInt(d.match(e)[1],10),binding:parseInt(d.match(n)[1],10),name:d.match(r)[2],isUniform:d.match(r)[1]==="<uniform>",type:d.match(s)[1]}));if(!u)return{groups:[],structs:[]};const h=((f=i.match(o))==null?void 0:f.map(d=>{const p=d.match(l)[1],g=d.match(a).reduce((m,x)=>{const[v,y]=x.split(":");return m[v.trim()]=y.trim(),m},{});return g?{name:p,members:g}:null}).filter(({name:d})=>u.some(p=>p.type===d)))??[];return{groups:u,structs:h}}var pi=(i=>(i[i.VERTEX=1]="VERTEX",i[i.FRAGMENT=2]="FRAGMENT",i[i.COMPUTE=4]="COMPUTE",i))(pi||{});function vc({groups:i}){const t=[];for(let e=0;e<i.length;e++){const n=i[e];t[n.group]||(t[n.group]=[]),n.isUniform?t[n.group].push({binding:n.binding,visibility:pi.VERTEX|pi.FRAGMENT,buffer:{type:"uniform"}}):n.type==="sampler"?t[n.group].push({binding:n.binding,visibility:pi.FRAGMENT,sampler:{type:"filtering"}}):n.type==="texture_2d"&&t[n.group].push({binding:n.binding,visibility:pi.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function yc({groups:i}){const t=[];for(let e=0;e<i.length;e++){const n=i[e];t[n.group]||(t[n.group]={}),t[n.group][n.name]=n.binding}return t}function _c(i,t){const e=new Set,n=new Set,r=[...i.structs,...t.structs].filter(o=>e.has(o.name)?!1:(e.add(o.name),!0)),s=[...i.groups,...t.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return n.has(a)?!1:(n.add(a),!0)});return{structs:r,groups:s}}const lr=Object.create(null);class D{constructor(t){var a,l;this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:e,vertex:n,layout:r,gpuLayout:s,name:o}=t;if(this.name=o,this.fragment=e,this.vertex=n,e.source===n.source){const u=ar(e.source);this.structsAndGroups=u}else{const u=ar(n.source),h=ar(e.source);this.structsAndGroups=_c(u,h)}this.layout=r??yc(this.structsAndGroups),this.gpuLayout=s??vc(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:e}=this,n=t.source+e.source+t.entryPoint+e.entryPoint;this._layoutKey=_s(n,"program")}get attributeData(){return this._attributeData??(this._attributeData=xc(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const e=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return lr[e]||(lr[e]=new D(t)),lr[e]}}const el=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],bc=el.reduce((i,t)=>(i[t]=!0,i),{});function Sc(i,t){switch(i){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const il=class nl{constructor(t,e){this._touched=0,this.uid=ut("uniform"),this._resourceType="uniformGroup",this._resourceId=ut("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,e={...nl.defaultOptions,...e},this.uniformStructures=t;const n={};for(const r in t){const s=t[r];if(s.name=r,s.size=s.size??1,!bc[s.type])throw new Error(`Uniform type ${s.type} is not supported. Supported uniform types are: ${el.join(", ")}`);s.value??(s.value=Sc(s.type,s.size)),n[r]=s.value}this.uniforms=n,this._dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this._signature=_s(Object.keys(n).map(r=>`${r}-${t[r].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};il.defaultOptions={ubo:!1,isStatic:!1};let bs=il;class un{constructor(t){this.resources=Object.create(null),this._dirty=!0;let e=0;for(const n in t){const r=t[n];this.setResource(r,e++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let e=0;for(const n in this.resources)t[e++]=this.resources[n]._resourceId;this._key=t.join("|")}setResource(t,e){var r,s;const n=this.resources[e];t!==n&&(n&&((r=t.off)==null||r.call(t,"change",this.onResourceChange,this)),(s=t.on)==null||s.call(t,"change",this.onResourceChange,this),this.resources[e]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const e=this.resources;for(const n in e)e[n]._touched=t}destroy(){var e;const t=this.resources;for(const n in t){const r=t[n];(e=r.off)==null||e.call(r,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const e=this.resources;for(const n in e)e[n]===t&&(e[n]=null)}else this._updateKey()}}var In=(i=>(i[i.WEBGL=1]="WEBGL",i[i.WEBGPU=2]="WEBGPU",i[i.BOTH=3]="BOTH",i))(In||{});class Gn extends xt{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:e,glProgram:n,groups:r,resources:s,compatibleRenderers:o,groupMap:a}=t;this.gpuProgram=e,this.glProgram=n,o===void 0&&(o=0,e&&(o|=In.WEBGPU),n&&(o|=In.WEBGL)),this.compatibleRenderers=o;const l={};if(!s&&!r&&(s={}),s&&r)throw new Error("[Shader] Cannot have both resources and groups");if(!e&&r&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&r&&a)for(const u in a)for(const h in a[u]){const c=a[u][h];l[c]={group:u,binding:h,name:c}}else if(e&&r&&!a){const u=e.structsAndGroups.groups;a={},u.forEach(h=>{a[h.group]=a[h.group]||{},a[h.group][h.binding]=h.name,l[h.name]=h})}else if(s){r={},a={},e&&e.structsAndGroups.groups.forEach(c=>{a[c.group]=a[c.group]||{},a[c.group][c.binding]=c.name,l[c.name]=c});let u=0;for(const h in s)l[h]||(r[99]||(r[99]=new un,this._ownedBindGroups.push(r[99])),l[h]={group:99,binding:u,name:h},a[99]=a[99]||{},a[99][u]=h,u++);for(const h in s){const c=h;let f=s[h];!f.source&&!f._resourceType&&(f=new bs(f));const d=l[c];d&&(r[d.group]||(r[d.group]=new un,this._ownedBindGroups.push(r[d.group])),r[d.group].setResource(f,d.binding))}}this.groups=r,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(r,l)}addResource(t,e,n){var r,s;(r=this._uniformBindMap)[e]||(r[e]={}),(s=this._uniformBindMap[e])[n]||(s[n]=t),this.groups[e]||(this.groups[e]=new un,this._ownedBindGroups.push(this.groups[e]))}_buildResourceAccessor(t,e){const n={};for(const r in e){const s=e[r];Object.defineProperty(n,s.name,{get(){return t[s.group].getResource(s.binding)},set(o){t[s.group].setResource(o,s.binding)}})}return n}destroy(t=!1){var e,n;this.emit("destroy",this),t&&((e=this.gpuProgram)==null||e.destroy(),(n=this.glProgram)==null||n.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(r=>{r.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:e,gl:n,...r}=t;let s,o;return e&&(s=D.from(e)),n&&(o=N.from(n)),new Gn({gpuProgram:s,glProgram:o,...r})}}const wc={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},ur=0,hr=1,cr=2,fr=3,dr=4,pr=5,Gr=class rl{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<ur)}set blend(t){!!(this.data&1<<ur)!==t&&(this.data^=1<<ur)}get offsets(){return!!(this.data&1<<hr)}set offsets(t){!!(this.data&1<<hr)!==t&&(this.data^=1<<hr)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<cr)}set culling(t){!!(this.data&1<<cr)!==t&&(this.data^=1<<cr)}get depthTest(){return!!(this.data&1<<fr)}set depthTest(t){!!(this.data&1<<fr)!==t&&(this.data^=1<<fr)}get depthMask(){return!!(this.data&1<<pr)}set depthMask(t){!!(this.data&1<<pr)!==t&&(this.data^=1<<pr)}get clockwiseFrontFace(){return!!(this.data&1<<dr)}set clockwiseFrontFace(t){!!(this.data&1<<dr)!==t&&(this.data^=1<<dr)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=wc[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new rl;return t.depthTest=!1,t.blend=!0,t}};Gr.default2d=Gr.for2d();let Cc=Gr;const sl=class Nr extends Gn{constructor(t){t={...Nr.defaultOptions,...t},super(t),this.enabled=!0,this._state=Cc.for2d(),this.blendMode=t.blendMode,this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.clipToViewport=t.clipToViewport,this.addResource("uTexture",0,1)}apply(t,e,n,r){t.applyFilter(this,e,n,r)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:e,gl:n,...r}=t;let s,o;return e&&(s=D.from(e)),n&&(o=N.from(n)),new Nr({gpuProgram:s,glProgram:o,...r})}};sl.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};let $=sl;const $r=[];_t.handleByNamedList(I.Environment,$r);async function Ac(i){if(!i)for(let t=0;t<$r.length;t++){const e=$r[t];if(e.value.test()){await e.value.load();return}}}let si;function Tc(){if(typeof si=="boolean")return si;try{si=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{si=!1}return si}var Ss={exports:{}};Ss.exports=Nn;Ss.exports.default=Nn;function Nn(i,t,e){e=e||2;var n=t&&t.length,r=n?t[0]*e:i.length,s=ol(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,u,h,c,f,d;if(n&&(s=zc(i,t,s,e)),i.length>80*e){a=u=i[0],l=h=i[1];for(var p=e;p<r;p+=e)c=i[p],f=i[p+1],c<a&&(a=c),f<l&&(l=f),c>u&&(u=c),f>h&&(h=f);d=Math.max(u-a,h-l),d=d!==0?32767/d:0}return Si(s,o,e,a,l,d,0),o}function ol(i,t,e,n,r){var s,o;if(r===Hr(i,t,e,n)>0)for(s=t;s<e;s+=n)o=po(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=po(s,i[s],i[s+1],o);return o&&$n(o,o.next)&&(Ci(o),o=o.next),o}function Ce(i,t){if(!i)return i;t||(t=i);var e=i,n;do if(n=!1,!e.steiner&&($n(e,e.next)||rt(e.prev,e,e.next)===0)){if(Ci(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Si(i,t,e,n,r,s,o){if(i){!o&&s&&Ec(i,n,r,s);for(var a=i,l,u;i.prev!==i.next;){if(l=i.prev,u=i.next,s?Ic(i,n,r,s):Pc(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(u.i/e|0),Ci(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=Mc(Ce(i),t,e),Si(i,t,e,n,r,s,2)):o===2&&Fc(i,t,e,n,r,s):Si(Ce(i),t,e,n,r,s,1);break}}}}function Pc(i){var t=i.prev,e=i,n=i.next;if(rt(t,e,n)>=0)return!1;for(var r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,u=n.y,h=r<s?r<o?r:o:s<o?s:o,c=a<l?a<u?a:u:l<u?l:u,f=r>s?r>o?r:o:s>o?s:o,d=a>l?a>u?a:u:l>u?l:u,p=n.next;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=c&&p.y<=d&&Ge(r,a,s,l,o,u,p.x,p.y)&&rt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ic(i,t,e,n){var r=i.prev,s=i,o=i.next;if(rt(r,s,o)>=0)return!1;for(var a=r.x,l=s.x,u=o.x,h=r.y,c=s.y,f=o.y,d=a<l?a<u?a:u:l<u?l:u,p=h<c?h<f?h:f:c<f?c:f,g=a>l?a>u?a:u:l>u?l:u,m=h>c?h>f?h:f:c>f?c:f,x=Vr(d,p,t,e,n),v=Vr(g,m,t,e,n),y=i.prevZ,_=i.nextZ;y&&y.z>=x&&_&&_.z<=v;){if(y.x>=d&&y.x<=g&&y.y>=p&&y.y<=m&&y!==r&&y!==o&&Ge(a,h,l,c,u,f,y.x,y.y)&&rt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=g&&_.y>=p&&_.y<=m&&_!==r&&_!==o&&Ge(a,h,l,c,u,f,_.x,_.y)&&rt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=x;){if(y.x>=d&&y.x<=g&&y.y>=p&&y.y<=m&&y!==r&&y!==o&&Ge(a,h,l,c,u,f,y.x,y.y)&&rt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=g&&_.y>=p&&_.y<=m&&_!==r&&_!==o&&Ge(a,h,l,c,u,f,_.x,_.y)&&rt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Mc(i,t,e){var n=i;do{var r=n.prev,s=n.next.next;!$n(r,s)&&al(r,n,n.next,s)&&wi(r,s)&&wi(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ci(n),Ci(n.next),n=i=s),n=n.next}while(n!==i);return Ce(n)}function Fc(i,t,e,n,r,s){var o=i;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&Dc(o,a)){var l=ll(o,a);o=Ce(o,o.next),l=Ce(l,l.next),Si(o,t,e,n,r,s,0),Si(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function zc(i,t,e,n){var r=[],s,o,a,l,u;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,u=ol(i,a,l,n,!1),u===u.next&&(u.steiner=!0),r.push(Lc(u));for(r.sort(kc),s=0;s<r.length;s++)e=Rc(r[s],e);return e}function kc(i,t){return i.x-t.x}function Rc(i,t){var e=Oc(i,t);if(!e)return t;var n=ll(e,i);return Ce(n,n.next),Ce(e,e.next)}function Oc(i,t){var e=t,n=i.x,r=i.y,s=-1/0,o;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){var a=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(a<=n&&a>s&&(s=a,o=e.x<e.next.x?e:e.next,a===n))return o}e=e.next}while(e!==t);if(!o)return null;var l=o,u=o.x,h=o.y,c=1/0,f;e=o;do n>=e.x&&e.x>=u&&n!==e.x&&Ge(r<h?n:s,r,u,h,r<h?s:n,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(n-e.x),wi(e,i)&&(f<c||f===c&&(e.x>o.x||e.x===o.x&&Bc(o,e)))&&(o=e,c=f)),e=e.next;while(e!==l);return o}function Bc(i,t){return rt(i.prev,i,t.prev)<0&&rt(t.next,i,i.next)<0}function Ec(i,t,e,n){var r=i;do r.z===0&&(r.z=Vr(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Uc(r)}function Uc(i){var t,e,n,r,s,o,a,l,u=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<u&&(a++,n=n.nextZ,!!n);t++);for(l=u;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,u*=2}while(o>1);return i}function Vr(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Lc(i){var t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ge(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Dc(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Gc(i,t)&&(wi(i,t)&&wi(t,i)&&Nc(i,t)&&(rt(i.prev,i,t.prev)||rt(i,t.prev,t))||$n(i,t)&&rt(i.prev,i,i.next)>0&&rt(t.prev,t,t.next)>0)}function rt(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $n(i,t){return i.x===t.x&&i.y===t.y}function al(i,t,e,n){var r=Xi(rt(i,t,e)),s=Xi(rt(i,t,n)),o=Xi(rt(e,n,i)),a=Xi(rt(e,n,t));return!!(r!==s&&o!==a||r===0&&Hi(i,e,t)||s===0&&Hi(i,n,t)||o===0&&Hi(e,i,n)||a===0&&Hi(e,t,n))}function Hi(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Xi(i){return i>0?1:i<0?-1:0}function Gc(i,t){var e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&al(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function wi(i,t){return rt(i.prev,i,i.next)<0?rt(i,t,i.next)>=0&&rt(i,i.prev,t)>=0:rt(i,t,i.prev)<0||rt(i,i.next,t)<0}function Nc(i,t){var e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ll(i,t){var e=new Wr(i.i,i.x,i.y),n=new Wr(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function po(i,t,e,n){var r=new Wr(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ci(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wr(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Nn.deviation=function(i,t,e,n){var r=t&&t.length,s=r?t[0]*e:i.length,o=Math.abs(Hr(i,0,s,e));if(r)for(var a=0,l=t.length;a<l;a++){var u=t[a]*e,h=a<l-1?t[a+1]*e:i.length;o-=Math.abs(Hr(i,u,h,e))}var c=0;for(a=0;a<n.length;a+=3){var f=n[a]*e,d=n[a+1]*e,p=n[a+2]*e;c+=Math.abs((i[f]-i[p])*(i[d+1]-i[f+1])-(i[f]-i[d])*(i[p+1]-i[f+1]))}return o===0&&c===0?0:Math.abs((c-o)/o)};function Hr(i,t,e,n){for(var r=0,s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}Nn.flatten=function(i){for(var t=i[0][0].length,e={vertices:[],holes:[],dimensions:t},n=0,r=0;r<i.length;r++){for(var s=0;s<i[r].length;s++)for(var o=0;o<t;o++)e.vertices.push(i[r][s][o]);r>0&&(n+=i[r-1].length,e.holes.push(n))}return e};var $c=Ss.exports;const Vc=gs($c);var ul=(i=>(i[i.NONE=0]="NONE",i[i.COLOR=16384]="COLOR",i[i.STENCIL=1024]="STENCIL",i[i.DEPTH=256]="DEPTH",i[i.COLOR_DEPTH=16640]="COLOR_DEPTH",i[i.COLOR_STENCIL=17408]="COLOR_STENCIL",i[i.DEPTH_STENCIL=1280]="DEPTH_STENCIL",i[i.ALL=17664]="ALL",i))(ul||{});class Wc{constructor(t){this.items=[],this._name=t}emit(t,e,n,r,s,o,a,l){const{name:u,items:h}=this;for(let c=0,f=h.length;c<f;c++)h[c][u](t,e,n,r,s,o,a,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const e=this.items.indexOf(t);return e!==-1&&this.items.splice(e,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Hc=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],hl=class cl extends xt{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const e=[...Hc,...this.config.runners??[]];this._addRunners(...e),this._unsafeEvalCheck()}async init(t={}){const e=t.skipExtensionImports===!0?!0:t.manageImports===!1;await Ac(e),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const n in this._systemsHash)t={...this._systemsHash[n].constructor.defaultOptions,...t};t={...cl.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let n=0;n<this.runners.init.items.length;n++)await this.runners.init.items[n].init(t);this._initOptions=t}render(t,e){let n=t;if(n instanceof Z&&(n={container:n},e&&(F(Y,"passing a second argument is deprecated, please use render options instead"),n.target=e.renderTexture)),n.target||(n.target=this.view.renderTarget),n.target===this.view.renderTarget&&(this._lastObjectRendered=n.container,n.clearColor=this.background.colorRgba),n.clearColor){const r=Array.isArray(n.clearColor)&&n.clearColor.length===4;n.clearColor=r?n.clearColor:V.shared.setValue(n.clearColor).toArray()}n.transform||(n.container.updateLocalTransform(),n.transform=n.container.localTransform),this.runners.prerender.emit(n),this.runners.renderStart.emit(n),this.runners.render.emit(n),this.runners.renderEnd.emit(n),this.runners.postrender.emit(n)}resize(t,e,n){const r=this.view.resolution;this.view.resize(t,e,n),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),n!==void 0&&n!==r&&this.runners.resolutionChange.emit(n)}clear(t={}){const e=this;t.target||(t.target=e.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=ul.ALL);const{clear:n,clearColor:r,target:s}=t;V.shared.setValue(r??this.background.colorRgba),e.renderTarget.clear(s,n,V.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(e=>{this.runners[e]=new Wc(e)})}_addSystems(t){let e;for(e in t){const n=t[e];this._addSystem(n.value,n.name)}}_addSystem(t,e){const n=new t(this);if(this[e])throw new Error(`Whoops! The name "${e}" is already in use`);this[e]=n,this._systemsHash[e]=n;for(const r in this.runners)this.runners[r].add(n);return this}_addPipes(t,e){const n=e.reduce((r,s)=>(r[s.name]=s.value,r),{});t.forEach(r=>{const s=r.value,o=r.name,a=n[o];this.renderPipes[o]=new s(this,a?new a:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(e=>{e.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Tc())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};hl.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let fl=hl,Yi;function Xc(i){return Yi!==void 0||(Yi=(()=>{var e;const t={stencil:!0,failIfMajorPerformanceCaveat:i??fl.defaultOptions.failIfMajorPerformanceCaveat};try{if(!tt.get().getWebGLRenderingContext())return!1;let r=tt.get().createCanvas().getContext("webgl",t);const s=!!((e=r==null?void 0:r.getContextAttributes())!=null&&e.stencil);if(r){const o=r.getExtension("WEBGL_lose_context");o&&o.loseContext()}return r=null,s}catch{return!1}})()),Yi}let ji;async function Yc(i={}){return ji!==void 0||(ji=await(async()=>{const t=tt.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(i)).requestDevice(),!0}catch{return!1}})()),ji}const mo=["webgl","webgpu","canvas"];async function jc(i){let t=[];i.preference?(t.push(i.preference),mo.forEach(s=>{s!==i.preference&&t.push(s)})):t=mo.slice();let e,n={};for(let s=0;s<t.length;s++){const o=t[s];if(o==="webgpu"&&await Yc()){const{WebGPURenderer:a}=await wn(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-Di3rdxA7.js");return{WebGPURenderer:l}},__vite__mapDeps([3,2,4]),import.meta.url);e=a,n={...i,...i.webgpu};break}else if(o==="webgl"&&Xc(i.failIfMajorPerformanceCaveat??fl.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await wn(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-B7l2gyCd.js");return{WebGLRenderer:l}},__vite__mapDeps([5,2,4]),import.meta.url);e=a,n={...i,...i.webgl};break}else if(o==="canvas")throw n={...i},new Error("CanvasRenderer is not yet implemented")}if(delete n.webgpu,delete n.webgl,!e)throw new Error("No available renderer for the current environment");const r=new e;return await r.init(n),r}const dl="8.5.2";class pl{static init(){var t;(t=globalThis.__PIXI_APP_INIT__)==null||t.call(globalThis,this,dl)}static destroy(){}}pl.extension=I.Application;class qc{constructor(t){this._renderer=t}init(){var t;(t=globalThis.__PIXI_RENDERER_INIT__)==null||t.call(globalThis,this._renderer,dl)}destroy(){this._renderer=null}}qc.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"initHook",priority:-10};const ml=class Xr{constructor(...t){this.stage=new Z,t[0]!==void 0&&F(Y,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await jc(t),Xr._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return F(Y,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,e=!1){const n=Xr._plugins.slice(0);n.reverse(),n.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(e),this.stage=null,this.renderer.destroy(t),this.renderer=null}};ml._plugins=[];let gl=ml;_t.handleByList(I.Application,gl._plugins);_t.add(pl);class xl extends xt{constructor(){super(...arguments),this.chars=Object.create(null),this.lineHeight=0,this.fontFamily="",this.fontMetrics={fontSize:0,ascent:0,descent:0},this.baseLineOffset=0,this.distanceField={type:"none",range:0},this.pages=[],this.applyFillAsTint=!0,this.baseMeasurementFontSize=100,this.baseRenderedFontSize=100}get font(){return F(Y,"BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."),this.fontFamily}get pageTextures(){return F(Y,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}get size(){return F(Y,"BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."),this.fontMetrics.fontSize}get distanceFieldRange(){return F(Y,"BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."),this.distanceField.range}get distanceFieldType(){return F(Y,"BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."),this.distanceField.type}destroy(t=!1){var e;this.emit("destroy",this),this.removeAllListeners();for(const n in this.chars)(e=this.chars[n].texture)==null||e.destroy();this.chars=null,t&&(this.pages.forEach(n=>n.texture.destroy(!0)),this.pages=null)}}const vl=class Yr{constructor(t,e,n,r){this.uid=ut("fillGradient"),this.type="linear",this.gradientStops=[],this._styleKey=null,this.x0=t,this.y0=e,this.x1=n,this.y1=r}addColorStop(t,e){return this.gradientStops.push({offset:t,color:V.shared.setValue(e).toHexa()}),this._styleKey=null,this}buildLinearGradient(){const t=Yr.defaultTextureSize,{gradientStops:e}=this,n=tt.get().createCanvas();n.width=t,n.height=t;const r=n.getContext("2d"),s=r.createLinearGradient(0,0,Yr.defaultTextureSize,1);for(let g=0;g<e.length;g++){const m=e[g];s.addColorStop(m.offset,m.color)}r.fillStyle=s,r.fillRect(0,0,t,t),this.texture=new E({source:new Ae({resource:n,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:l,y1:u}=this,h=new H,c=l-o,f=u-a,d=Math.sqrt(c*c+f*f),p=Math.atan2(f,c);h.translate(-o,-a),h.scale(1/t,1/t),h.rotate(-p),h.scale(256/d,1),this.transform=h,this._styleKey=null}get styleKey(){if(this._styleKey)return this._styleKey;const t=this.gradientStops.map(r=>`${r.offset}-${r.color}`).join("-"),e=this.texture.uid,n=this.transform.toArray().join("-");return`fill-gradient-${this.uid}-${t}-${e}-${n}-${this.x0}-${this.y0}-${this.x1}-${this.y1}`}};vl.defaultTextureSize=256;let Ai=vl;const go={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class Vn{constructor(t,e){this.uid=ut("fillPattern"),this.transform=new H,this._styleKey=null,this.texture=t,this.transform.scale(1/t.frame.width,1/t.frame.height),e&&(t.source.style.addressModeU=go[e].addressModeU,t.source.style.addressModeV=go[e].addressModeV)}setTransform(t){const e=this.texture;this.transform.copyFrom(t),this.transform.invert(),this.transform.scale(1/e.frame.width,1/e.frame.height),this._styleKey=null}get styleKey(){return this._styleKey?this._styleKey:(this._styleKey=`fill-pattern-${this.uid}-${this.texture.uid}-${this.transform.toArray().join("-")}`,this._styleKey)}}var Kc=Qc,mr={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},Zc=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function Qc(i){var t=[];return i.replace(Zc,function(e,n,r){var s=n.toLowerCase();for(r=tf(r),s=="m"&&r.length>2&&(t.push([n].concat(r.splice(0,2))),s="l",n=n=="m"?"l":"L");;){if(r.length==mr[s])return r.unshift(n),t.push(r);if(r.length<mr[s])throw new Error("malformed path data");t.push([n].concat(r.splice(0,mr[s])))}}),t}var Jc=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function tf(i){var t=i.match(Jc);return t?t.map(Number):[]}const ef=gs(Kc);function nf(i,t){const e=ef(i),n=[];let r=null,s=0,o=0;for(let a=0;a<e.length;a++){const l=e[a],u=l[0],h=l;switch(u){case"M":s=h[1],o=h[2],t.moveTo(s,o);break;case"m":s+=h[1],o+=h[2],t.moveTo(s,o);break;case"H":s=h[1],t.lineTo(s,o);break;case"h":s+=h[1],t.lineTo(s,o);break;case"V":o=h[1],t.lineTo(s,o);break;case"v":o+=h[1],t.lineTo(s,o);break;case"L":s=h[1],o=h[2],t.lineTo(s,o);break;case"l":s+=h[1],o+=h[2],t.lineTo(s,o);break;case"C":s=h[5],o=h[6],t.bezierCurveTo(h[1],h[2],h[3],h[4],s,o);break;case"c":t.bezierCurveTo(s+h[1],o+h[2],s+h[3],o+h[4],s+h[5],o+h[6]),s+=h[5],o+=h[6];break;case"S":s=h[3],o=h[4],t.bezierCurveToShort(h[1],h[2],s,o);break;case"s":t.bezierCurveToShort(s+h[1],o+h[2],s+h[3],o+h[4]),s+=h[3],o+=h[4];break;case"Q":s=h[3],o=h[4],t.quadraticCurveTo(h[1],h[2],s,o);break;case"q":t.quadraticCurveTo(s+h[1],o+h[2],s+h[3],o+h[4]),s+=h[3],o+=h[4];break;case"T":s=h[1],o=h[2],t.quadraticCurveToShort(s,o);break;case"t":s+=h[1],o+=h[2],t.quadraticCurveToShort(s,o);break;case"A":s=h[6],o=h[7],t.arcToSvg(h[1],h[2],h[3],h[4],h[5],s,o);break;case"a":s+=h[6],o+=h[7],t.arcToSvg(h[1],h[2],h[3],h[4],h[5],s,o);break;case"Z":case"z":t.closePath(),n.length>0&&(r=n.pop(),r?(s=r.startX,o=r.startY):(s=0,o=0)),r=null;break;default:ht(`Unknown SVG path command: ${u}`)}u!=="Z"&&u!=="z"&&r===null&&(r={startX:s,startY:o},n.push(r))}return t}class ws{constructor(t=0,e=0,n=0){this.type="circle",this.x=t,this.y=e,this.radius=n}clone(){return new ws(this.x,this.y,this.radius)}contains(t,e){if(this.radius<=0)return!1;const n=this.radius*this.radius;let r=this.x-t,s=this.y-e;return r*=r,s*=s,r+s<=n}strokeContains(t,e,n){if(this.radius===0)return!1;const r=this.x-t,s=this.y-e,o=this.radius,a=n/2,l=Math.sqrt(r*r+s*s);return l<o+a&&l>o-a}getBounds(t){return t=t||new lt,t.x=this.x-this.radius,t.y=this.y-this.radius,t.width=this.radius*2,t.height=this.radius*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.radius=t.radius,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class Cs{constructor(t=0,e=0,n=0,r=0){this.type="ellipse",this.x=t,this.y=e,this.halfWidth=n,this.halfHeight=r}clone(){return new Cs(this.x,this.y,this.halfWidth,this.halfHeight)}contains(t,e){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let n=(t-this.x)/this.halfWidth,r=(e-this.y)/this.halfHeight;return n*=n,r*=r,n+r<=1}strokeContains(t,e,n){const{halfWidth:r,halfHeight:s}=this;if(r<=0||s<=0)return!1;const o=n/2,a=r-o,l=s-o,u=r+o,h=s+o,c=t-this.x,f=e-this.y,d=c*c/(a*a)+f*f/(l*l),p=c*c/(u*u)+f*f/(h*h);return d>1&&p<=1}getBounds(t){return t=t||new lt,t.x=this.x-this.halfWidth,t.y=this.y-this.halfHeight,t.width=this.halfWidth*2,t.height=this.halfHeight*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.halfWidth=t.halfWidth,this.halfHeight=t.halfHeight,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function rf(i,t,e,n,r,s){const o=i-e,a=t-n,l=r-e,u=s-n,h=o*l+a*u,c=l*l+u*u;let f=-1;c!==0&&(f=h/c);let d,p;f<0?(d=e,p=n):f>1?(d=r,p=s):(d=e+f*l,p=n+f*u);const g=i-d,m=t-p;return g*g+m*m}class yi{constructor(...t){this.type="polygon";let e=Array.isArray(t[0])?t[0]:t;if(typeof e[0]!="number"){const n=[];for(let r=0,s=e.length;r<s;r++)n.push(e[r].x,e[r].y);e=n}this.points=e,this.closePath=!0}clone(){const t=this.points.slice(),e=new yi(t);return e.closePath=this.closePath,e}contains(t,e){let n=!1;const r=this.points.length/2;for(let s=0,o=r-1;s<r;o=s++){const a=this.points[s*2],l=this.points[s*2+1],u=this.points[o*2],h=this.points[o*2+1];l>e!=h>e&&t<(u-a)*((e-l)/(h-l))+a&&(n=!n)}return n}strokeContains(t,e,n){const r=n/2,s=r*r,{points:o}=this,a=o.length-(this.closePath?0:2);for(let l=0;l<a;l+=2){const u=o[l],h=o[l+1],c=o[(l+2)%o.length],f=o[(l+3)%o.length];if(rf(t,e,u,h,c,f)<=s)return!0}return!1}getBounds(t){t=t||new lt;const e=this.points;let n=1/0,r=-1/0,s=1/0,o=-1/0;for(let a=0,l=e.length;a<l;a+=2){const u=e[a],h=e[a+1];n=u<n?u:n,r=u>r?u:r,s=h<s?h:s,o=h>o?h:o}return t.x=n,t.width=r-n,t.y=s,t.height=o-s,t}copyFrom(t){return this.points=t.points.slice(),this.closePath=t.closePath,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t,e)=>`${t}, ${e}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const qi=(i,t,e,n,r,s)=>{const o=i-e,a=t-n,l=Math.sqrt(o*o+a*a);return l>=r-s&&l<=r+s};class As{constructor(t=0,e=0,n=0,r=0,s=20){this.type="roundedRectangle",this.x=t,this.y=e,this.width=n,this.height=r,this.radius=s}getBounds(t){return t=t||new lt,t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}clone(){return new As(this.x,this.y,this.width,this.height,this.radius)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){const n=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(e>=this.y+n&&e<=this.y+this.height-n||t>=this.x+n&&t<=this.x+this.width-n)return!0;let r=t-(this.x+n),s=e-(this.y+n);const o=n*n;if(r*r+s*s<=o||(r=t-(this.x+this.width-n),r*r+s*s<=o)||(s=e-(this.y+this.height-n),r*r+s*s<=o)||(r=t-(this.x+n),r*r+s*s<=o))return!0}return!1}strokeContains(t,e,n){const{x:r,y:s,width:o,height:a,radius:l}=this,u=n/2,h=r+l,c=s+l,f=o-l*2,d=a-l*2,p=r+o,g=s+a;return(t>=r-u&&t<=r+u||t>=p-u&&t<=p+u)&&e>=c&&e<=c+d||(e>=s-u&&e<=s+u||e>=g-u&&e<=g+u)&&t>=h&&t<=h+f?!0:t<h&&e<c&&qi(t,e,h,c,l,u)||t>p-l&&e<c&&qi(t,e,p-l,c,l,u)||t>p-l&&e>g-l&&qi(t,e,p-l,g-l,l,u)||t<h&&e>g-l&&qi(t,e,h,g-l,l,u)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}const sf=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function of(i){let t="";for(let e=0;e<i;++e)e>0&&(t+=`
else `),e<i-1&&(t+=`if(test == ${e}.0){}`);return t}function af(i,t){if(i===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const e=t.createShader(t.FRAGMENT_SHADER);try{for(;;){const n=sf.replace(/%forloop%/gi,of(i));if(t.shaderSource(e,n),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))i=i/2|0;else break}}finally{t.deleteShader(e)}return i}let Ie=null;function yl(){var t;if(Ie)return Ie;const i=Ja();return Ie=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),Ie=af(Ie,i),(t=i.getExtension("WEBGL_lose_context"))==null||t.loseContext(),Ie}const _l={};function lf(i,t){let e=2166136261;for(let n=0;n<t;n++)e^=i[n].uid,e=Math.imul(e,16777619),e>>>=0;return _l[e]||uf(i,t,e)}let gr=0;function uf(i,t,e){const n={};let r=0;gr||(gr=yl());for(let o=0;o<gr;o++){const a=o<t?i[o]:E.EMPTY.source;n[r++]=a.source,n[r++]=a.style}const s=new un(n);return _l[e]=s,s}class xo{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function vo(i,t){const e=i.byteLength/8|0,n=new Float64Array(i,0,e);new Float64Array(t,0,e).set(n);const s=i.byteLength-e*8;if(s>0){const o=new Uint8Array(i,e*8,s);new Uint8Array(t,e*8,s).set(o)}}const hf={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var cf=(i=>(i[i.DISABLED=0]="DISABLED",i[i.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",i[i.MASK_ACTIVE=2]="MASK_ACTIVE",i[i.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",i[i.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",i[i.NONE=5]="NONE",i))(cf||{});function yo(i,t){return t.alphaMode==="no-premultiply-alpha"&&hf[i]||i}class ff{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null}this.count=0}}class df{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new ff,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}const bl=[];let jr=0;function _o(){return jr>0?bl[--jr]:new df}function bo(i){bl[jr++]=i}let oi=0;const Sl=class hn{constructor(t={}){this.uid=ut("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],hn.defaultOptions.maxTextures=hn.defaultOptions.maxTextures??yl(),t={...hn.defaultOptions,...t};const{maxTextures:e,attributesInitialSize:n,indicesInitialSize:r}=t;this.attributeBuffer=new xo(n*4),this.indexBuffer=new Uint16Array(r),this.maxTextures=e}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let t=0;t<this.batchIndex;t++)bo(this.batches[t]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t._indexStart=this.indexSize,t._attributeStart=this.attributeSize,t._batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.attributeSize*this.vertexSize}checkAndUpdateTexture(t,e){const n=t._batch.textures.ids[e._source.uid];return!n&&n!==0?!1:(t._textureId=n,t.texture=e,!0)}updateElement(t){this.dirty=!0;const e=this.attributeBuffer;t.packAsQuad?this.packQuadAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId):this.packAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId)}break(t){const e=this._elements;if(!e[this.elementStart])return;let n=_o(),r=n.textures;r.clear();const s=e[this.elementStart];let o=yo(s.blendMode,s.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const a=this.attributeBuffer.float32View,l=this.attributeBuffer.uint32View,u=this.indexBuffer;let h=this._batchIndexSize,c=this._batchIndexStart,f="startBatch";const d=this.maxTextures;for(let p=this.elementStart;p<this.elementSize;++p){const g=e[p];e[p]=null;const x=g.texture._source,v=yo(g.blendMode,x),y=o!==v;if(x._batchTick===oi&&!y){g._textureId=x._textureBindLocation,h+=g.indexSize,g.packAsQuad?(this.packQuadAttributes(g,a,l,g._attributeStart,g._textureId),this.packQuadIndex(u,g._indexStart,g._attributeStart/this.vertexSize)):(this.packAttributes(g,a,l,g._attributeStart,g._textureId),this.packIndex(g,u,g._indexStart,g._attributeStart/this.vertexSize)),g._batch=n;continue}x._batchTick=oi,(r.count>=d||y)&&(this._finishBatch(n,c,h-c,r,o,t,f),f="renderBatch",c=h,o=v,n=_o(),r=n.textures,r.clear(),++oi),g._textureId=x._textureBindLocation=r.count,r.ids[x.uid]=r.count,r.textures[r.count++]=x,g._batch=n,h+=g.indexSize,g.packAsQuad?(this.packQuadAttributes(g,a,l,g._attributeStart,g._textureId),this.packQuadIndex(u,g._indexStart,g._attributeStart/this.vertexSize)):(this.packAttributes(g,a,l,g._attributeStart,g._textureId),this.packIndex(g,u,g._indexStart,g._attributeStart/this.vertexSize))}r.count>0&&(this._finishBatch(n,c,h-c,r,o,t,f),c=h,++oi),this.elementStart=this.elementSize,this._batchIndexStart=c,this._batchIndexSize=h}_finishBatch(t,e,n,r,s,o,a){t.gpuBindGroup=null,t.bindGroup=null,t.action=a,t.batcher=this,t.textures=r,t.blendMode=s,t.start=e,t.size=n,++oi,this.batches[this.batchIndex++]=t,o.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),n=new xo(e);vo(this.attributeBuffer.rawBinaryData,n.rawBinaryData),this.attributeBuffer=n}_resizeIndexBuffer(t){const e=this.indexBuffer;let n=Math.max(t,e.length*1.5);n+=n%2;const r=n>65535?new Uint32Array(n):new Uint16Array(n);if(r.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let s=0;s<e.length;s++)r[s]=e[s];else vo(e.buffer,r.buffer);this.indexBuffer=r}packQuadIndex(t,e,n){t[e]=n+0,t[e+1]=n+1,t[e+2]=n+2,t[e+3]=n+0,t[e+4]=n+2,t[e+5]=n+3}packIndex(t,e,n,r){const s=t.indices,o=t.indexSize,a=t.indexOffset,l=t.attributeOffset;for(let u=0;u<o;u++)e[n++]=r+s[u+a]-l}destroy(){for(let t=0;t<this.batches.length;t++)bo(this.batches[t]);this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t]._batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};Sl.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};let pf=Sl;var At=(i=>(i[i.MAP_READ=1]="MAP_READ",i[i.MAP_WRITE=2]="MAP_WRITE",i[i.COPY_SRC=4]="COPY_SRC",i[i.COPY_DST=8]="COPY_DST",i[i.INDEX=16]="INDEX",i[i.VERTEX=32]="VERTEX",i[i.UNIFORM=64]="UNIFORM",i[i.STORAGE=128]="STORAGE",i[i.INDIRECT=256]="INDIRECT",i[i.QUERY_RESOLVE=512]="QUERY_RESOLVE",i[i.STATIC=1024]="STATIC",i))(At||{});class Ti extends xt{constructor(t){let{data:e,size:n}=t;const{usage:r,label:s,shrinkToFit:o}=t;super(),this.uid=ut("buffer"),this._resourceType="buffer",this._resourceId=ut("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,e instanceof Array&&(e=new Float32Array(e)),this._data=e,n=n??(e==null?void 0:e.byteLength);const a=!!e;this.descriptor={size:n,usage:r,mappedAtCreation:a,label:s},this.shrinkToFit=o??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get static(){return!!(this.descriptor.usage&At.STATIC)}set static(t){t?this.descriptor.usage|=At.STATIC:this.descriptor.usage&=~At.STATIC}setDataWithSize(t,e,n){if(this._updateID++,this._updateSize=e*t.BYTES_PER_ELEMENT,this._data===t){n&&this.emit("update",this);return}const r=this._data;if(this._data=t,r.length!==t.length){!this.shrinkToFit&&t.byteLength<r.byteLength?n&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=ut("resource"),this.emit("change",this));return}n&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function wl(i,t){if(!(i instanceof Ti)){let e=t?At.INDEX:At.VERTEX;i instanceof Array&&(t?(i=new Uint32Array(i),e=At.INDEX|At.COPY_DST):(i=new Float32Array(i),e=At.VERTEX|At.COPY_DST)),i=new Ti({data:i,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:e})}return i}function mf(i,t,e){const n=i.getAttribute(t);if(!n)return e.minX=0,e.minY=0,e.maxX=0,e.maxY=0,e;const r=n.buffer.data;let s=1/0,o=1/0,a=-1/0,l=-1/0;const u=r.BYTES_PER_ELEMENT,h=(n.offset||0)/u,c=(n.stride||2*4)/u;for(let f=h;f<r.length;f+=c){const d=r[f],p=r[f+1];d>a&&(a=d),p>l&&(l=p),d<s&&(s=d),p<o&&(o=p)}return e.minX=s,e.minY=o,e.maxX=a,e.maxY=l,e}function gf(i){return(i instanceof Ti||Array.isArray(i)||i.BYTES_PER_ELEMENT)&&(i={buffer:i}),i.buffer=wl(i.buffer,!1),i}class xf extends xt{constructor(t={}){super(),this.uid=ut("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Xt,this._boundsDirty=!0;const{attributes:e,indexBuffer:n,topology:r}=t;if(this.buffers=[],this.attributes={},e)for(const s in e)this.addAttribute(s,e[s]);this.instanceCount=t.instanceCount||1,n&&this.addIndex(n),this.topology=r||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const e=this.attributes[t];return e.buffer.data.length/(e.stride/4||e.size)}return 0}addAttribute(t,e){const n=gf(e);this.buffers.indexOf(n.buffer)===-1&&(this.buffers.push(n.buffer),n.buffer.on("update",this.onBufferUpdate,this),n.buffer.on("change",this.onBufferUpdate,this)),this.attributes[t]=n}addIndex(t){this.indexBuffer=wl(t,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,mf(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(e=>e.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const vf=new Float32Array(1),yf=new Uint32Array(1);class _f extends xf{constructor(){const e=new Ti({data:vf,label:"attribute-batch-buffer",usage:At.VERTEX|At.COPY_DST,shrinkToFit:!1}),n=new Ti({data:yf,label:"index-batch-buffer",usage:At.INDEX|At.COPY_DST,shrinkToFit:!1}),r=6*4;super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:r,offset:0},aUV:{buffer:e,format:"float32x2",stride:r,offset:2*4},aColor:{buffer:e,format:"unorm8x4",stride:r,offset:4*4},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:r,offset:5*4}},indexBuffer:n})}}function So(i,t,e){if(i)for(const n in i){const r=n.toLocaleLowerCase(),s=t[r];if(s){let o=i[n];n==="header"&&(o=o.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),e&&s.push(`//----${e}----//`),s.push(o)}else ht(`${n} placement hook does not exist in shader`)}}const bf=/\{\{(.*?)\}\}/g;function wo(i){var n;const t={};return(((n=i.match(bf))==null?void 0:n.map(r=>r.replace(/[{()}]/g,"")))??[]).forEach(r=>{t[r]=[]}),t}function Co(i,t){let e;const n=/@in\s+([^;]+);/g;for(;(e=n.exec(i))!==null;)t.push(e[1])}function Ao(i,t,e=!1){const n=[];Co(t,n),i.forEach(a=>{a.header&&Co(a.header,n)});const r=n;e&&r.sort();const s=r.map((a,l)=>`       @location(${l}) ${a},`).join(`
`);let o=t.replace(/@in\s+[^;]+;\s*/g,"");return o=o.replace("{{in}}",`
${s}
`),o}function To(i,t){let e;const n=/@out\s+([^;]+);/g;for(;(e=n.exec(i))!==null;)t.push(e[1])}function Sf(i){const e=/\b(\w+)\s*:/g.exec(i);return e?e[1]:""}function wf(i){const t=/@.*?\s+/g;return i.replace(t,"")}function Cf(i,t){const e=[];To(t,e),i.forEach(l=>{l.header&&To(l.header,e)});let n=0;const r=e.sort().map(l=>l.indexOf("builtin")>-1?l:`@location(${n++}) ${l}`).join(`,
`),s=e.sort().map(l=>`       var ${wf(l)};`).join(`
`),o=`return VSOutput(
                ${e.sort().map(l=>` ${Sf(l)}`).join(`,
`)});`;let a=t.replace(/@out\s+[^;]+;\s*/g,"");return a=a.replace("{{struct}}",`
${r}
`),a=a.replace("{{start}}",`
${s}
`),a=a.replace("{{return}}",`
${o}
`),a}function Po(i,t){let e=i;for(const n in t){const r=t[n];r.join(`
`).length?e=e.replace(`{{${n}}}`,`//-----${n} START-----//
${r.join(`
`)}
//----${n} FINISH----//`):e=e.replace(`{{${n}}}`,"")}return e}const ne=Object.create(null),xr=new Map;let Af=0;function Tf({template:i,bits:t}){const e=Cl(i,t);if(ne[e])return ne[e];const{vertex:n,fragment:r}=If(i,t);return ne[e]=Al(n,r,t),ne[e]}function Pf({template:i,bits:t}){const e=Cl(i,t);return ne[e]||(ne[e]=Al(i.vertex,i.fragment,t)),ne[e]}function If(i,t){const e=t.map(o=>o.vertex).filter(o=>!!o),n=t.map(o=>o.fragment).filter(o=>!!o);let r=Ao(e,i.vertex,!0);r=Cf(e,r);const s=Ao(n,i.fragment,!0);return{vertex:r,fragment:s}}function Cl(i,t){return t.map(e=>(xr.has(e)||xr.set(e,Af++),xr.get(e))).sort((e,n)=>e-n).join("-")+i.vertex+i.fragment}function Al(i,t,e){const n=wo(i),r=wo(t);return e.forEach(s=>{So(s.vertex,n,s.name),So(s.fragment,r,s.name)}),{vertex:Po(i,n),fragment:Po(t,r)}}const Mf=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,Ff=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,zf=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,kf=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
        
        {{end}}
    }
`,Rf={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},Of={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function Bf({bits:i,name:t}){const e=Tf({template:{fragment:Ff,vertex:Mf},bits:[Rf,...i]});return D.from({name:t,vertex:{source:e.vertex,entryPoint:"main"},fragment:{source:e.fragment,entryPoint:"main"}})}function Ef({bits:i,name:t}){return new N({name:t,...Pf({template:{vertex:zf,fragment:kf},bits:[Of,...i]})})}const Uf={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},Lf={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},vr={};function Df(i){const t=[];if(i===1)t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),t.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let e=0;for(let n=0;n<i;n++)t.push(`@group(1) @binding(${e++}) var textureSource${n+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${e++}) var textureSampler${n+1}: sampler;`)}return t.join(`
`)}function Gf(i){const t=[];if(i===1)t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{t.push("switch vTextureId {");for(let e=0;e<i;e++)e===i-1?t.push("  default:{"):t.push(`  case ${e}:{`),t.push(`      outColor = textureSampleGrad(textureSource${e+1}, textureSampler${e+1}, vUV, uvDx, uvDy);`),t.push("      break;}");t.push("}")}return t.join(`
`)}function Nf(i){return vr[i]||(vr[i]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${Df(i)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${Gf(i)}
            `}}),vr[i]}const yr={};function $f(i){const t=[];for(let e=0;e<i;e++)e>0&&t.push("else"),e<i-1&&t.push(`if(vTextureId < ${e}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${e}], vUV);`),t.push("}");return t.join(`
`)}function Vf(i){return yr[i]||(yr[i]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${i}];

            `,main:`

                ${$f(i)}
            `}}),yr[i]}const Wf={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Hf={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Io={};function Xf(i){let t=Io[i];if(t)return t;const e=new Int32Array(i);for(let n=0;n<i;n++)e[n]=n;return t=Io[i]=new bs({uTextures:{value:e,type:"i32",size:i}},{isStatic:!0}),t}class Yf extends Gn{constructor(t){const e=Ef({name:"batch",bits:[Lf,Vf(t),Hf]}),n=Bf({name:"batch",bits:[Uf,Nf(t),Wf]});super({glProgram:e,gpuProgram:n,resources:{batchSamplers:Xf(t)}})}}let Mo=null;const Tl=class Pl extends pf{constructor(){super(...arguments),this.geometry=new _f,this.shader=Mo||(Mo=new Yf(this.maxTextures)),this.name=Pl.extension.name,this.vertexSize=6}packAttributes(t,e,n,r,s){const o=s<<16|t.roundPixels&65535,a=t.transform,l=a.a,u=a.b,h=a.c,c=a.d,f=a.tx,d=a.ty,{positions:p,uvs:g}=t,m=t.color,x=t.attributeOffset,v=x+t.attributeSize;for(let y=x;y<v;y++){const _=y*2,A=p[_],L=p[_+1];e[r++]=l*A+h*L+f,e[r++]=c*L+u*A+d,e[r++]=g[_],e[r++]=g[_+1],n[r++]=m,n[r++]=o}}packQuadAttributes(t,e,n,r,s){const o=t.texture,a=t.transform,l=a.a,u=a.b,h=a.c,c=a.d,f=a.tx,d=a.ty,p=t.bounds,g=p.maxX,m=p.minX,x=p.maxY,v=p.minY,y=o.uvs,_=t.color,A=s<<16|t.roundPixels&65535;e[r+0]=l*m+h*v+f,e[r+1]=c*v+u*m+d,e[r+2]=y.x0,e[r+3]=y.y0,n[r+4]=_,n[r+5]=A,e[r+6]=l*g+h*v+f,e[r+7]=c*v+u*g+d,e[r+8]=y.x1,e[r+9]=y.y1,n[r+10]=_,n[r+11]=A,e[r+12]=l*g+h*x+f,e[r+13]=c*x+u*g+d,e[r+14]=y.x2,e[r+15]=y.y2,n[r+16]=_,n[r+17]=A,e[r+18]=l*m+h*x+f,e[r+19]=c*x+u*m+d,e[r+20]=y.x3,e[r+21]=y.y3,n[r+22]=_,n[r+23]=A}};Tl.extension={type:[I.Batcher],name:"default"};let jf=Tl;function qf(i,t,e,n,r,s,o,a=null){let l=0;e*=t,r*=s;const u=a.a,h=a.b,c=a.c,f=a.d,d=a.tx,p=a.ty;for(;l<o;){const g=i[e],m=i[e+1];n[r]=u*g+c*m+d,n[r+1]=h*g+f*m+p,r+=s,e+=t,l++}}function Kf(i,t,e,n){let r=0;for(t*=e;r<n;)i[t]=0,i[t+1]=0,t+=e,r++}function Il(i,t,e,n,r){const s=t.a,o=t.b,a=t.c,l=t.d,u=t.tx,h=t.ty;e=e||0,n=n||2,r=r||i.length/n-e;let c=e*n;for(let f=0;f<r;f++){const d=i[c],p=i[c+1];i[c]=s*d+a*p+u,i[c+1]=o*d+l*p+h,c+=n}}function Zf(i,t){if(i===16777215||!t)return t;if(t===16777215||!i)return i;const e=i>>16&255,n=i>>8&255,r=i&255,s=t>>16&255,o=t>>8&255,a=t&255,l=e*s/255,u=n*o/255,h=r*a/255;return(l<<16)+(u<<8)+h}const Qf=new H;class Ml{constructor(){this.packAsQuad=!1,this.batcherName="default",this.applyTransform=!0,this.roundPixels=0,this._batcher=null,this._batch=null}get uvs(){return this.geometryData.uvs}get positions(){return this.geometryData.vertices}get indices(){return this.geometryData.indices}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}get color(){const t=this.baseColor,e=t>>16|t&65280|(t&255)<<16,n=this.renderable;return n?Zf(e,n.groupColor)+(this.alpha*n.groupAlpha*255<<24):e+(this.alpha*255<<24)}get transform(){var t;return((t=this.renderable)==null?void 0:t.groupTransform)||Qf}copyTo(t){t.indexOffset=this.indexOffset,t.indexSize=this.indexSize,t.attributeOffset=this.attributeOffset,t.attributeSize=this.attributeSize,t.baseColor=this.baseColor,t.alpha=this.alpha,t.texture=this.texture,t.geometryData=this.geometryData}reset(){this.applyTransform=!0,this.renderable=null}}const Pi={extension:{type:I.ShapeBuilder,name:"circle"},build(i,t){let e,n,r,s,o,a;if(i.type==="circle"){const _=i;e=_.x,n=_.y,o=a=_.radius,r=s=0}else if(i.type==="ellipse"){const _=i;e=_.x,n=_.y,o=_.halfWidth,a=_.halfHeight,r=s=0}else{const _=i,A=_.width/2,L=_.height/2;e=_.x+A,n=_.y+L,o=a=Math.max(0,Math.min(_.radius,Math.min(A,L))),r=A-o,s=L-a}if(!(o>=0&&a>=0&&r>=0&&s>=0))return t;const l=Math.ceil(2.3*Math.sqrt(o+a)),u=l*8+(r?4:0)+(s?4:0);if(u===0)return t;if(l===0)return t[0]=t[6]=e+r,t[1]=t[3]=n+s,t[2]=t[4]=e-r,t[5]=t[7]=n-s,t;let h=0,c=l*4+(r?2:0)+2,f=c,d=u,p=r+o,g=s,m=e+p,x=e-p,v=n+g;if(t[h++]=m,t[h++]=v,t[--c]=v,t[--c]=x,s){const _=n-g;t[f++]=x,t[f++]=_,t[--d]=_,t[--d]=m}for(let _=1;_<l;_++){const A=Math.PI/2*(_/l),L=r+Math.cos(A)*o,M=s+Math.sin(A)*a,R=e+L,b=e-L,w=n+M,K=n-M;t[h++]=R,t[h++]=w,t[--c]=w,t[--c]=b,t[f++]=b,t[f++]=K,t[--d]=K,t[--d]=R}p=r,g=s+a,m=e+p,x=e-p,v=n+g;const y=n-g;return t[h++]=m,t[h++]=v,t[--d]=y,t[--d]=m,r&&(t[h++]=x,t[h++]=v,t[--d]=y,t[--d]=x),t},triangulate(i,t,e,n,r,s){if(i.length===0)return;let o=0,a=0;for(let h=0;h<i.length;h+=2)o+=i[h],a+=i[h+1];o/=i.length/2,a/=i.length/2;let l=n;t[l*e]=o,t[l*e+1]=a;const u=l++;for(let h=0;h<i.length;h+=2)t[l*e]=i[h],t[l*e+1]=i[h+1],h>0&&(r[s++]=l,r[s++]=u,r[s++]=l-1),l++;r[s++]=u+1,r[s++]=u,r[s++]=l-1}},Jf={...Pi,extension:{...Pi.extension,name:"ellipse"}},td={...Pi,extension:{...Pi.extension,name:"roundedRectangle"}},ed=1e-4,Fo=1e-4;function id(i){const t=i.length;if(t<6)return 1;let e=0;for(let n=0,r=i[t-2],s=i[t-1];n<t;n+=2){const o=i[n],a=i[n+1];e+=(o-r)*(a+s),r=o,s=a}return e<0?-1:1}function zo(i,t,e,n,r,s,o,a){const l=i-e*r,u=t-n*r,h=i+e*s,c=t+n*s;let f,d;o?(f=n,d=-e):(f=-n,d=e);const p=l+f,g=u+d,m=h+f,x=c+d;return a.push(p,g),a.push(m,x),2}function ue(i,t,e,n,r,s,o,a){const l=e-i,u=n-t;let h=Math.atan2(l,u),c=Math.atan2(r-i,s-t);a&&h<c?h+=Math.PI*2:!a&&h>c&&(c+=Math.PI*2);let f=h;const d=c-h,p=Math.abs(d),g=Math.sqrt(l*l+u*u),m=(15*p*Math.sqrt(g)/Math.PI>>0)+1,x=d/m;if(f+=x,a){o.push(i,t),o.push(e,n);for(let v=1,y=f;v<m;v++,y+=x)o.push(i,t),o.push(i+Math.sin(y)*g,t+Math.cos(y)*g);o.push(i,t),o.push(r,s)}else{o.push(e,n),o.push(i,t);for(let v=1,y=f;v<m;v++,y+=x)o.push(i+Math.sin(y)*g,t+Math.cos(y)*g),o.push(i,t);o.push(r,s),o.push(i,t)}return m*2}function nd(i,t,e,n,r,s,o,a,l){const u=ed;if(i.length===0)return;const h=t;let c=h.alignment;if(t.alignment!==.5){let Q=id(i);c=(c-.5)*Q+.5}const f=new yt(i[0],i[1]),d=new yt(i[i.length-2],i[i.length-1]),p=n,g=Math.abs(f.x-d.x)<u&&Math.abs(f.y-d.y)<u;if(p){i=i.slice(),g&&(i.pop(),i.pop(),d.set(i[i.length-2],i[i.length-1]));const Q=(f.x+d.x)*.5,Qt=(d.y+f.y)*.5;i.unshift(Q,Qt),i.push(Q,Qt)}const m=r,x=i.length/2;let v=i.length;const y=m.length/2,_=h.width/2,A=_*_,L=h.miterLimit*h.miterLimit;let M=i[0],R=i[1],b=i[2],w=i[3],K=0,Et=0,U=-(R-w),k=M-b,W=0,et=0,P=Math.sqrt(U*U+k*k);U/=P,k/=P,U*=_,k*=_;const X=c,T=(1-X)*2,B=X*2;p||(h.cap==="round"?v+=ue(M-U*(T-B)*.5,R-k*(T-B)*.5,M-U*T,R-k*T,M+U*B,R+k*B,m,!0)+2:h.cap==="square"&&(v+=zo(M,R,U,k,T,B,!0,m))),m.push(M-U*T,R-k*T),m.push(M+U*B,R+k*B);for(let Q=1;Q<x-1;++Q){M=i[(Q-1)*2],R=i[(Q-1)*2+1],b=i[Q*2],w=i[Q*2+1],K=i[(Q+1)*2],Et=i[(Q+1)*2+1],U=-(R-w),k=M-b,P=Math.sqrt(U*U+k*k),U/=P,k/=P,U*=_,k*=_,W=-(w-Et),et=b-K,P=Math.sqrt(W*W+et*et),W/=P,et/=P,W*=_,et*=_;const Qt=b-M,ti=R-w,ei=b-K,ii=Et-w,Vs=Qt*ei+ti*ii,Ui=ti*ei-ii*Qt,ni=Ui<0;if(Math.abs(Ui)<.001*Math.abs(Vs)){m.push(b-U*T,w-k*T),m.push(b+U*B,w+k*B),Vs>=0&&(h.join==="round"?v+=ue(b,w,b-U*T,w-k*T,b-W*T,w-et*T,m,!1)+4:v+=2,m.push(b-W*B,w-et*B),m.push(b+W*T,w+et*T));continue}const Ws=(-U+M)*(-k+w)-(-U+b)*(-k+R),Hs=(-W+K)*(-et+w)-(-W+b)*(-et+Et),Li=(Qt*Hs-ei*Ws)/Ui,Di=(ii*Ws-ti*Hs)/Ui,Hn=(Li-b)*(Li-b)+(Di-w)*(Di-w),se=b+(Li-b)*T,oe=w+(Di-w)*T,ae=b-(Li-b)*B,le=w-(Di-w)*B,sh=Math.min(Qt*Qt+ti*ti,ei*ei+ii*ii),Xs=ni?T:B,oh=sh+Xs*Xs*A;Hn<=oh?h.join==="bevel"||Hn/A>L?(ni?(m.push(se,oe),m.push(b+U*B,w+k*B),m.push(se,oe),m.push(b+W*B,w+et*B)):(m.push(b-U*T,w-k*T),m.push(ae,le),m.push(b-W*T,w-et*T),m.push(ae,le)),v+=2):h.join==="round"?ni?(m.push(se,oe),m.push(b+U*B,w+k*B),v+=ue(b,w,b+U*B,w+k*B,b+W*B,w+et*B,m,!0)+4,m.push(se,oe),m.push(b+W*B,w+et*B)):(m.push(b-U*T,w-k*T),m.push(ae,le),v+=ue(b,w,b-U*T,w-k*T,b-W*T,w-et*T,m,!1)+4,m.push(b-W*T,w-et*T),m.push(ae,le)):(m.push(se,oe),m.push(ae,le)):(m.push(b-U*T,w-k*T),m.push(b+U*B,w+k*B),h.join==="round"?ni?v+=ue(b,w,b+U*B,w+k*B,b+W*B,w+et*B,m,!0)+2:v+=ue(b,w,b-U*T,w-k*T,b-W*T,w-et*T,m,!1)+2:h.join==="miter"&&Hn/A<=L&&(ni?(m.push(ae,le),m.push(ae,le)):(m.push(se,oe),m.push(se,oe)),v+=2),m.push(b-W*T,w-et*T),m.push(b+W*B,w+et*B),v+=2)}M=i[(x-2)*2],R=i[(x-2)*2+1],b=i[(x-1)*2],w=i[(x-1)*2+1],U=-(R-w),k=M-b,P=Math.sqrt(U*U+k*k),U/=P,k/=P,U*=_,k*=_,m.push(b-U*T,w-k*T),m.push(b+U*B,w+k*B),p||(h.cap==="round"?v+=ue(b-U*(T-B)*.5,w-k*(T-B)*.5,b-U*T,w-k*T,b+U*B,w+k*B,m,!1)+2:h.cap==="square"&&(v+=zo(b,w,U,k,T,B,!1,m)));const Ei=Fo*Fo;for(let Q=y;Q<v+y-2;++Q)M=m[Q*2],R=m[Q*2+1],b=m[(Q+1)*2],w=m[(Q+1)*2+1],K=m[(Q+2)*2],Et=m[(Q+2)*2+1],!(Math.abs(M*(w-Et)+b*(Et-R)+K*(R-w))<Ei)&&a.push(Q,Q+1,Q+2)}function Fl(i,t,e,n,r,s,o){const a=Vc(i,t,2);if(!a)return;for(let u=0;u<a.length;u+=3)s[o++]=a[u]+r,s[o++]=a[u+1]+r,s[o++]=a[u+2]+r;let l=r*n;for(let u=0;u<i.length;u+=2)e[l]=i[u],e[l+1]=i[u+1],l+=n}const rd=[],sd={extension:{type:I.ShapeBuilder,name:"polygon"},build(i,t){for(let e=0;e<i.points.length;e++)t[e]=i.points[e];return t},triangulate(i,t,e,n,r,s){Fl(i,rd,t,e,n,r,s)}},od={extension:{type:I.ShapeBuilder,name:"rectangle"},build(i,t){const e=i,n=e.x,r=e.y,s=e.width,o=e.height;return s>=0&&o>=0&&(t[0]=n,t[1]=r,t[2]=n+s,t[3]=r,t[4]=n+s,t[5]=r+o,t[6]=n,t[7]=r+o),t},triangulate(i,t,e,n,r,s){let o=0;n*=e,t[n+o]=i[0],t[n+o+1]=i[1],o+=e,t[n+o]=i[2],t[n+o+1]=i[3],o+=e,t[n+o]=i[6],t[n+o+1]=i[7],o+=e,t[n+o]=i[4],t[n+o+1]=i[5],o+=e;const a=n/e;r[s++]=a,r[s++]=a+1,r[s++]=a+2,r[s++]=a+1,r[s++]=a+3,r[s++]=a+2}},ad={extension:{type:I.ShapeBuilder,name:"triangle"},build(i,t){return t[0]=i.x,t[1]=i.y,t[2]=i.x2,t[3]=i.y2,t[4]=i.x3,t[5]=i.y3,t},triangulate(i,t,e,n,r,s){let o=0;n*=e,t[n+o]=i[0],t[n+o+1]=i[1],o+=e,t[n+o]=i[2],t[n+o+1]=i[3],o+=e,t[n+o]=i[4],t[n+o+1]=i[5];const a=n/e;r[s++]=a,r[s++]=a+1,r[s++]=a+2}},Wn={};_t.handleByMap(I.ShapeBuilder,Wn);_t.add(od,sd,ad,Pi,Jf,td);const ld=new lt;function ud(i,t){const{geometryData:e,batches:n}=t;n.length=0,e.indices.length=0,e.vertices.length=0,e.uvs.length=0;for(let r=0;r<i.instructions.length;r++){const s=i.instructions[r];if(s.action==="texture")hd(s.data,n,e);else if(s.action==="fill"||s.action==="stroke"){const o=s.action==="stroke",a=s.data.path.shapePath,l=s.data.style,u=s.data.hole;o&&u&&ko(u.shapePath,l,null,!0,n,e),ko(a,l,u,o,n,e)}}}function hd(i,t,e){const{vertices:n,uvs:r,indices:s}=e,o=s.length,a=n.length/2,l=[],u=Wn.rectangle,h=ld,c=i.image;h.x=i.dx,h.y=i.dy,h.width=i.dw,h.height=i.dh;const f=i.transform;u.build(h,l),f&&Il(l,f),u.triangulate(l,n,2,a,s,o);const d=c.uvs;r.push(d.x0,d.y0,d.x1,d.y1,d.x3,d.y3,d.x2,d.y2);const p=qt.get(Ml);p.indexOffset=o,p.indexSize=s.length-o,p.attributeOffset=a,p.attributeSize=n.length/2-a,p.baseColor=i.style,p.alpha=i.alpha,p.texture=c,p.geometryData=e,t.push(p)}function ko(i,t,e,n,r,s){const{vertices:o,uvs:a,indices:l}=s,u=i.shapePrimitives.length-1;i.shapePrimitives.forEach(({shape:h,transform:c},f)=>{const d=l.length,p=o.length/2,g=[],m=Wn[h.type];if(m.build(h,g),c&&Il(g,c),n){const _=h.closePath??!0;nd(g,t,!1,_,o,2,p,l)}else if(e&&u===f){u!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const _=[],A=g.slice();cd(e.shapePath).forEach(M=>{_.push(A.length/2),A.push(...M)}),Fl(A,_,o,2,p,l,d)}else m.triangulate(g,o,2,p,l,d);const x=a.length/2,v=t.texture;if(v!==E.WHITE){const _=t.matrix;_&&(c&&_.append(c.clone().invert()),qf(o,2,p,a,x,2,o.length/2-p,_))}else Kf(a,x,2,o.length/2-p);const y=qt.get(Ml);y.indexOffset=d,y.indexSize=l.length-d,y.attributeOffset=p,y.attributeSize=o.length/2-p,y.baseColor=t.color,y.alpha=t.alpha,y.texture=v,y.geometryData=s,r.push(y)})}function cd(i){if(!i)return[];const t=i.shapePrimitives,e=[];for(let n=0;n<t.length;n++){const r=t[n].shape,s=[];Wn[r.type].build(r,s),e.push(s)}return e}class fd{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class dd{constructor(){this.batcher=new jf,this.instructions=new Da}init(){this.instructions.reset()}get geometry(){return F(xh,"GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."),this.batcher.geometry}}const Ts=class qr{constructor(t){this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null),t.renderableGC.addManagedHash(this,"_gpuContextHash"),t.renderableGC.addManagedHash(this,"_graphicsDataContextHash")}init(t){qr.defaultOptions.bezierSmoothness=(t==null?void 0:t.bezierSmoothness)??qr.defaultOptions.bezierSmoothness}getContextRenderData(t){return this._graphicsDataContextHash[t.uid]||this._initContextRenderData(t)}updateGpuContext(t){let e=this._gpuContextHash[t.uid]||this._initContext(t);if(t.dirty){e?this._cleanGraphicsContextData(t):e=this._initContext(t),ud(t,e);const n=t.batchMode;t.customShader||n==="no-batch"?e.isBatchable=!1:n==="auto"&&(e.isBatchable=e.geometryData.vertices.length<400),t.dirty=!1}return e}getGpuContext(t){return this._gpuContextHash[t.uid]||this._initContext(t)}_initContextRenderData(t){const e=qt.get(dd),{batches:n,geometryData:r}=this._gpuContextHash[t.uid],s=r.vertices.length,o=r.indices.length;for(let h=0;h<n.length;h++)n[h].applyTransform=!1;const a=e.batcher;a.ensureAttributeBuffer(s),a.ensureIndexBuffer(o),a.begin();for(let h=0;h<n.length;h++){const c=n[h];a.add(c)}a.finish(e.instructions);const l=a.geometry;l.indexBuffer.setDataWithSize(a.indexBuffer,a.indexSize,!0),l.buffers[0].setDataWithSize(a.attributeBuffer.float32View,a.attributeSize,!0);const u=a.batches;for(let h=0;h<u.length;h++){const c=u[h];c.bindGroup=lf(c.textures.textures,c.textures.count)}return this._graphicsDataContextHash[t.uid]=e,e}_initContext(t){const e=new fd;return e.context=t,this._gpuContextHash[t.uid]=e,t.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]}onGraphicsContextDestroy(t){this._cleanGraphicsContextData(t),t.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]=null}_cleanGraphicsContextData(t){const e=this._gpuContextHash[t.uid];e.isBatchable||this._graphicsDataContextHash[t.uid]&&(qt.return(this.getContextRenderData(t)),this._graphicsDataContextHash[t.uid]=null),e.batches&&e.batches.forEach(n=>{qt.return(n)})}destroy(){for(const t in this._gpuContextHash)this._gpuContextHash[t]&&this.onGraphicsContextDestroy(this._gpuContextHash[t].context)}};Ts.extension={type:[I.WebGLSystem,I.WebGPUSystem,I.CanvasSystem],name:"graphicsContext"};Ts.defaultOptions={bezierSmoothness:.5};let zl=Ts;const pd=8,Ki=11920929e-14,md=1;function kl(i,t,e,n,r,s,o,a,l,u){const c=Math.min(.99,Math.max(0,u??zl.defaultOptions.bezierSmoothness));let f=(md-c)/1;return f*=f,gd(t,e,n,r,s,o,a,l,i,f),i}function gd(i,t,e,n,r,s,o,a,l,u){Kr(i,t,e,n,r,s,o,a,l,u,0),l.push(o,a)}function Kr(i,t,e,n,r,s,o,a,l,u,h){if(h>pd)return;const c=(i+e)/2,f=(t+n)/2,d=(e+r)/2,p=(n+s)/2,g=(r+o)/2,m=(s+a)/2,x=(c+d)/2,v=(f+p)/2,y=(d+g)/2,_=(p+m)/2,A=(x+y)/2,L=(v+_)/2;if(h>0){let M=o-i,R=a-t;const b=Math.abs((e-o)*R-(n-a)*M),w=Math.abs((r-o)*R-(s-a)*M);if(b>Ki&&w>Ki){if((b+w)*(b+w)<=u*(M*M+R*R)){l.push(A,L);return}}else if(b>Ki){if(b*b<=u*(M*M+R*R)){l.push(A,L);return}}else if(w>Ki){if(w*w<=u*(M*M+R*R)){l.push(A,L);return}}else if(M=A-(i+o)/2,R=L-(t+a)/2,M*M+R*R<=u){l.push(A,L);return}}Kr(i,t,c,f,x,v,A,L,l,u,h+1),Kr(A,L,y,_,g,m,o,a,l,u,h+1)}const xd=8,vd=11920929e-14,yd=1;function _d(i,t,e,n,r,s,o,a){const u=Math.min(.99,Math.max(0,a??zl.defaultOptions.bezierSmoothness));let h=(yd-u)/1;return h*=h,bd(t,e,n,r,s,o,i,h),i}function bd(i,t,e,n,r,s,o,a){Zr(o,i,t,e,n,r,s,a,0),o.push(r,s)}function Zr(i,t,e,n,r,s,o,a,l){if(l>xd)return;const u=(t+n)/2,h=(e+r)/2,c=(n+s)/2,f=(r+o)/2,d=(u+c)/2,p=(h+f)/2;let g=s-t,m=o-e;const x=Math.abs((n-s)*m-(r-o)*g);if(x>vd){if(x*x<=a*(g*g+m*m)){i.push(d,p);return}}else if(g=d-(t+s)/2,m=p-(e+o)/2,g*g+m*m<=a){i.push(d,p);return}Zr(i,t,e,u,h,d,p,a,l+1),Zr(i,d,p,c,f,s,o,a,l+1)}function Rl(i,t,e,n,r,s,o,a){let l=Math.abs(r-s);(!o&&r>s||o&&s>r)&&(l=2*Math.PI-l),a=a||Math.max(6,Math.floor(6*Math.pow(n,1/3)*(l/Math.PI))),a=Math.max(a,3);let u=l/a,h=r;u*=o?-1:1;for(let c=0;c<a+1;c++){const f=Math.cos(h),d=Math.sin(h),p=t+f*n,g=e+d*n;i.push(p,g),h+=u}}function Sd(i,t,e,n,r,s){const o=i[i.length-2],l=i[i.length-1]-e,u=o-t,h=r-e,c=n-t,f=Math.abs(l*c-u*h);if(f<1e-8||s===0){(i[i.length-2]!==t||i[i.length-1]!==e)&&i.push(t,e);return}const d=l*l+u*u,p=h*h+c*c,g=l*h+u*c,m=s*Math.sqrt(d)/f,x=s*Math.sqrt(p)/f,v=m*g/d,y=x*g/p,_=m*c+x*u,A=m*h+x*l,L=u*(x+v),M=l*(x+v),R=c*(m+y),b=h*(m+y),w=Math.atan2(M-A,L-_),K=Math.atan2(b-A,R-_);Rl(i,_+t,A+e,s,w,K,u*h>c*l)}const _i=Math.PI*2,_r={centerX:0,centerY:0,ang1:0,ang2:0},br=({x:i,y:t},e,n,r,s,o,a,l)=>{i*=e,t*=n;const u=r*i-s*t,h=s*i+r*t;return l.x=u+o,l.y=h+a,l};function wd(i,t){const e=t===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(t/4),n=t===1.5707963267948966?.551915024494:e,r=Math.cos(i),s=Math.sin(i),o=Math.cos(i+t),a=Math.sin(i+t);return[{x:r-s*n,y:s+r*n},{x:o+a*n,y:a-o*n},{x:o,y:a}]}const Ro=(i,t,e,n)=>{const r=i*n-t*e<0?-1:1;let s=i*e+t*n;return s>1&&(s=1),s<-1&&(s=-1),r*Math.acos(s)},Cd=(i,t,e,n,r,s,o,a,l,u,h,c,f)=>{const d=Math.pow(r,2),p=Math.pow(s,2),g=Math.pow(h,2),m=Math.pow(c,2);let x=d*p-d*m-p*g;x<0&&(x=0),x/=d*m+p*g,x=Math.sqrt(x)*(o===a?-1:1);const v=x*r/s*c,y=x*-s/r*h,_=u*v-l*y+(i+e)/2,A=l*v+u*y+(t+n)/2,L=(h-v)/r,M=(c-y)/s,R=(-h-v)/r,b=(-c-y)/s,w=Ro(1,0,L,M);let K=Ro(L,M,R,b);a===0&&K>0&&(K-=_i),a===1&&K<0&&(K+=_i),f.centerX=_,f.centerY=A,f.ang1=w,f.ang2=K};function Ad(i,t,e,n,r,s,o,a=0,l=0,u=0){if(s===0||o===0)return;const h=Math.sin(a*_i/360),c=Math.cos(a*_i/360),f=c*(t-n)/2+h*(e-r)/2,d=-h*(t-n)/2+c*(e-r)/2;if(f===0&&d===0)return;s=Math.abs(s),o=Math.abs(o);const p=Math.pow(f,2)/Math.pow(s,2)+Math.pow(d,2)/Math.pow(o,2);p>1&&(s*=Math.sqrt(p),o*=Math.sqrt(p)),Cd(t,e,n,r,s,o,l,u,h,c,f,d,_r);let{ang1:g,ang2:m}=_r;const{centerX:x,centerY:v}=_r;let y=Math.abs(m)/(_i/4);Math.abs(1-y)<1e-7&&(y=1);const _=Math.max(Math.ceil(y),1);m/=_;let A=i[i.length-2],L=i[i.length-1];const M={x:0,y:0};for(let R=0;R<_;R++){const b=wd(g,m),{x:w,y:K}=br(b[0],s,o,c,h,x,v,M),{x:Et,y:U}=br(b[1],s,o,c,h,x,v,M),{x:k,y:W}=br(b[2],s,o,c,h,x,v,M);kl(i,A,L,w,K,Et,U,k,W),A=k,L=W,g+=m}}function Td(i,t,e){const n=(o,a)=>{const l=a.x-o.x,u=a.y-o.y,h=Math.sqrt(l*l+u*u),c=l/h,f=u/h;return{len:h,nx:c,ny:f}},r=(o,a)=>{o===0?i.moveTo(a.x,a.y):i.lineTo(a.x,a.y)};let s=t[t.length-1];for(let o=0;o<t.length;o++){const a=t[o%t.length],l=a.radius??e;if(l<=0){r(o,a),s=a;continue}const u=t[(o+1)%t.length],h=n(a,s),c=n(a,u);if(h.len<1e-4||c.len<1e-4){r(o,a),s=a;continue}let f=Math.asin(h.nx*c.ny-h.ny*c.nx),d=1,p=!1;h.nx*c.nx-h.ny*-c.ny<0?f<0?f=Math.PI+f:(f=Math.PI-f,d=-1,p=!0):f>0&&(d=-1,p=!0);const g=f/2;let m,x=Math.abs(Math.cos(g)*l/Math.sin(g));x>Math.min(h.len/2,c.len/2)?(x=Math.min(h.len/2,c.len/2),m=Math.abs(x*Math.sin(g)/Math.cos(g))):m=l;const v=a.x+c.nx*x+-c.ny*m*d,y=a.y+c.ny*x+c.nx*m*d,_=Math.atan2(h.ny,h.nx)+Math.PI/2*d,A=Math.atan2(c.ny,c.nx)-Math.PI/2*d;o===0&&i.moveTo(v+Math.cos(_)*m,y+Math.sin(_)*m),i.arc(v,y,m,_,A,p),s=a}}function Pd(i,t,e,n){const r=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),s=(a,l,u)=>({x:a.x+(l.x-a.x)*u,y:a.y+(l.y-a.y)*u}),o=t.length;for(let a=0;a<o;a++){const l=t[(a+1)%o],u=l.radius??e;if(u<=0){a===0?i.moveTo(l.x,l.y):i.lineTo(l.x,l.y);continue}const h=t[a],c=t[(a+2)%o],f=r(h,l);let d;if(f<1e-4)d=l;else{const m=Math.min(f/2,u);d=s(l,h,m/f)}const p=r(c,l);let g;if(p<1e-4)g=l;else{const m=Math.min(p/2,u);g=s(l,c,m/p)}a===0?i.moveTo(d.x,d.y):i.lineTo(d.x,d.y),i.quadraticCurveTo(l.x,l.y,g.x,g.y,n)}}const Id=new lt;class Md{constructor(t){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new Xt,this._graphicsPath2D=t}moveTo(t,e){return this.startPoly(t,e),this}lineTo(t,e){this._ensurePoly();const n=this._currentPoly.points,r=n[n.length-2],s=n[n.length-1];return(r!==t||s!==e)&&n.push(t,e),this}arc(t,e,n,r,s,o){this._ensurePoly(!1);const a=this._currentPoly.points;return Rl(a,t,e,n,r,s,o),this}arcTo(t,e,n,r,s){this._ensurePoly();const o=this._currentPoly.points;return Sd(o,t,e,n,r,s),this}arcToSvg(t,e,n,r,s,o,a){const l=this._currentPoly.points;return Ad(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,t,e,n,r,s),this}bezierCurveTo(t,e,n,r,s,o,a){this._ensurePoly();const l=this._currentPoly;return kl(this._currentPoly.points,l.lastX,l.lastY,t,e,n,r,s,o,a),this}quadraticCurveTo(t,e,n,r,s){this._ensurePoly();const o=this._currentPoly;return _d(this._currentPoly.points,o.lastX,o.lastY,t,e,n,r,s),this}closePath(){return this.endPoly(!0),this}addPath(t,e){this.endPoly(),e&&!e.isIdentity()&&(t=t.clone(!0),t.transform(e));for(let n=0;n<t.instructions.length;n++){const r=t.instructions[n];this[r.action](...r.data)}return this}finish(t=!1){this.endPoly(t)}rect(t,e,n,r,s){return this.drawShape(new lt(t,e,n,r),s),this}circle(t,e,n,r){return this.drawShape(new ws(t,e,n),r),this}poly(t,e,n){const r=new yi(t);return r.closePath=e,this.drawShape(r,n),this}regularPoly(t,e,n,r,s=0,o){r=Math.max(r|0,3);const a=-1*Math.PI/2+s,l=Math.PI*2/r,u=[];for(let h=0;h<r;h++){const c=h*l+a;u.push(t+n*Math.cos(c),e+n*Math.sin(c))}return this.poly(u,!0,o),this}roundPoly(t,e,n,r,s,o=0,a){if(r=Math.max(r|0,3),s<=0)return this.regularPoly(t,e,n,r,o);const l=n*Math.sin(Math.PI/r)-.001;s=Math.min(s,l);const u=-1*Math.PI/2+o,h=Math.PI*2/r,c=(r-2)*Math.PI/r/2;for(let f=0;f<r;f++){const d=f*h+u,p=t+n*Math.cos(d),g=e+n*Math.sin(d),m=d+Math.PI+c,x=d-Math.PI-c,v=p+s*Math.cos(m),y=g+s*Math.sin(m),_=p+s*Math.cos(x),A=g+s*Math.sin(x);f===0?this.moveTo(v,y):this.lineTo(v,y),this.quadraticCurveTo(p,g,_,A,a)}return this.closePath()}roundShape(t,e,n=!1,r){return t.length<3?this:(n?Pd(this,t,e,r):Td(this,t,e),this.closePath())}filletRect(t,e,n,r,s){if(s===0)return this.rect(t,e,n,r);const o=Math.min(n,r)/2,a=Math.min(o,Math.max(-o,s)),l=t+n,u=e+r,h=a<0?-a:0,c=Math.abs(a);return this.moveTo(t,e+c).arcTo(t+h,e+h,t+c,e,c).lineTo(l-c,e).arcTo(l-h,e+h,l,e+c,c).lineTo(l,u-c).arcTo(l-h,u-h,t+n-c,u,c).lineTo(t+c,u).arcTo(t+h,u-h,t,u-c,c).closePath()}chamferRect(t,e,n,r,s,o){if(s<=0)return this.rect(t,e,n,r);const a=Math.min(s,Math.min(n,r)/2),l=t+n,u=e+r,h=[t+a,e,l-a,e,l,e+a,l,u-a,l-a,u,t+a,u,t,u-a,t,e+a];for(let c=h.length-1;c>=2;c-=2)h[c]===h[c-2]&&h[c-1]===h[c-3]&&h.splice(c-1,2);return this.poly(h,!0,o)}ellipse(t,e,n,r,s){return this.drawShape(new Cs(t,e,n,r),s),this}roundRect(t,e,n,r,s,o){return this.drawShape(new As(t,e,n,r,s),o),this}drawShape(t,e){return this.endPoly(),this.shapePrimitives.push({shape:t,transform:e}),this}startPoly(t,e){let n=this._currentPoly;return n&&this.endPoly(),n=new yi,n.points.push(t,e),this._currentPoly=n,this}endPoly(t=!1){const e=this._currentPoly;return e&&e.points.length>2&&(e.closePath=t,this.shapePrimitives.push({shape:e})),this._currentPoly=null,this}_ensurePoly(t=!0){if(!this._currentPoly&&(this._currentPoly=new yi,t)){const e=this.shapePrimitives[this.shapePrimitives.length-1];if(e){let n=e.shape.x,r=e.shape.y;if(e.transform&&!e.transform.isIdentity()){const s=e.transform,o=n;n=s.a*n+s.c*r+s.tx,r=s.b*o+s.d*r+s.ty}this._currentPoly.points.push(n,r)}else this._currentPoly.points.push(0,0)}}buildPath(){const t=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let e=0;e<t.instructions.length;e++){const n=t.instructions[e];this[n.action](...n.data)}this.finish()}get bounds(){const t=this._bounds;t.clear();const e=this.shapePrimitives;for(let n=0;n<e.length;n++){const r=e[n],s=r.shape.getBounds(Id);r.transform?t.addRect(s,r.transform):t.addRect(s)}return t}}class Ye{constructor(t){this.instructions=[],this.uid=ut("graphicsPath"),this._dirty=!0,typeof t=="string"?nf(t,this):this.instructions=(t==null?void 0:t.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new Md(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(t,e){return t=t.clone(),this.instructions.push({action:"addPath",data:[t,e]}),this._dirty=!0,this}arc(...t){return this.instructions.push({action:"arc",data:t}),this._dirty=!0,this}arcTo(...t){return this.instructions.push({action:"arcTo",data:t}),this._dirty=!0,this}arcToSvg(...t){return this.instructions.push({action:"arcToSvg",data:t}),this._dirty=!0,this}bezierCurveTo(...t){return this.instructions.push({action:"bezierCurveTo",data:t}),this._dirty=!0,this}bezierCurveToShort(t,e,n,r,s){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(yt.shared);let l=0,u=0;if(!o||o.action!=="bezierCurveTo")l=a.x,u=a.y;else{l=o.data[2],u=o.data[3];const h=a.x,c=a.y;l=h+(h-l),u=c+(c-u)}return this.instructions.push({action:"bezierCurveTo",data:[l,u,t,e,n,r,s]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...t){return this.instructions.push({action:"ellipse",data:t}),this._dirty=!0,this}lineTo(...t){return this.instructions.push({action:"lineTo",data:t}),this._dirty=!0,this}moveTo(...t){return this.instructions.push({action:"moveTo",data:t}),this}quadraticCurveTo(...t){return this.instructions.push({action:"quadraticCurveTo",data:t}),this._dirty=!0,this}quadraticCurveToShort(t,e,n){const r=this.instructions[this.instructions.length-1],s=this.getLastPoint(yt.shared);let o=0,a=0;if(!r||r.action!=="quadraticCurveTo")o=s.x,a=s.y;else{o=r.data[0],a=r.data[1];const l=s.x,u=s.y;o=l+(l-o),a=u+(u-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,t,e,n]}),this._dirty=!0,this}rect(t,e,n,r,s){return this.instructions.push({action:"rect",data:[t,e,n,r,s]}),this._dirty=!0,this}circle(t,e,n,r){return this.instructions.push({action:"circle",data:[t,e,n,r]}),this._dirty=!0,this}roundRect(...t){return this.instructions.push({action:"roundRect",data:t}),this._dirty=!0,this}poly(...t){return this.instructions.push({action:"poly",data:t}),this._dirty=!0,this}regularPoly(...t){return this.instructions.push({action:"regularPoly",data:t}),this._dirty=!0,this}roundPoly(...t){return this.instructions.push({action:"roundPoly",data:t}),this._dirty=!0,this}roundShape(...t){return this.instructions.push({action:"roundShape",data:t}),this._dirty=!0,this}filletRect(...t){return this.instructions.push({action:"filletRect",data:t}),this._dirty=!0,this}chamferRect(...t){return this.instructions.push({action:"chamferRect",data:t}),this._dirty=!0,this}star(t,e,n,r,s,o,a){s=s||r/2;const l=-1*Math.PI/2+o,u=n*2,h=Math.PI*2/u,c=[];for(let f=0;f<u;f++){const d=f%2?s:r,p=f*h+l;c.push(t+d*Math.cos(p),e+d*Math.sin(p))}return this.poly(c,!0,a),this}clone(t=!1){const e=new Ye;if(!t)e.instructions=this.instructions.slice();else for(let n=0;n<this.instructions.length;n++){const r=this.instructions[n];e.instructions.push({action:r.action,data:r.data.slice()})}return e}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(t){if(t.isIdentity())return this;const e=t.a,n=t.b,r=t.c,s=t.d,o=t.tx,a=t.ty;let l=0,u=0,h=0,c=0,f=0,d=0,p=0,g=0;for(let m=0;m<this.instructions.length;m++){const x=this.instructions[m],v=x.data;switch(x.action){case"moveTo":case"lineTo":l=v[0],u=v[1],v[0]=e*l+r*u+o,v[1]=n*l+s*u+a;break;case"bezierCurveTo":h=v[0],c=v[1],f=v[2],d=v[3],l=v[4],u=v[5],v[0]=e*h+r*c+o,v[1]=n*h+s*c+a,v[2]=e*f+r*d+o,v[3]=n*f+s*d+a,v[4]=e*l+r*u+o,v[5]=n*l+s*u+a;break;case"quadraticCurveTo":h=v[0],c=v[1],l=v[2],u=v[3],v[0]=e*h+r*c+o,v[1]=n*h+s*c+a,v[2]=e*l+r*u+o,v[3]=n*l+s*u+a;break;case"arcToSvg":l=v[5],u=v[6],p=v[0],g=v[1],v[0]=e*p+r*g,v[1]=n*p+s*g,v[5]=e*l+r*u+o,v[6]=n*l+s*u+a;break;case"circle":v[4]=ai(v[3],t);break;case"rect":v[4]=ai(v[4],t);break;case"ellipse":v[8]=ai(v[8],t);break;case"roundRect":v[5]=ai(v[5],t);break;case"addPath":v[0].transform(t);break;case"poly":v[2]=ai(v[2],t);break;default:ht("unknown transform action",x.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(t){let e=this.instructions.length-1,n=this.instructions[e];if(!n)return t.x=0,t.y=0,t;for(;n.action==="closePath";){if(e--,e<0)return t.x=0,t.y=0,t;n=this.instructions[e]}switch(n.action){case"moveTo":case"lineTo":t.x=n.data[0],t.y=n.data[1];break;case"quadraticCurveTo":t.x=n.data[2],t.y=n.data[3];break;case"bezierCurveTo":t.x=n.data[4],t.y=n.data[5];break;case"arc":case"arcToSvg":t.x=n.data[5],t.y=n.data[6];break;case"addPath":n.data[0].getLastPoint(t);break}return t}}function ai(i,t){return i?i.prepend(t):t.clone()}function Fd(i,t){if(typeof i=="string"){const n=document.createElement("div");n.innerHTML=i.trim(),i=n.querySelector("svg")}const e={context:t,path:new Ye};return Ol(i,e,null,null),t}function Ol(i,t,e,n){const r=i.children,{fillStyle:s,strokeStyle:o}=zd(i);s&&e?e={...e,...s}:s&&(e=s),o&&n?n={...n,...o}:o&&(n=o),t.context.fillStyle=e,t.context.strokeStyle=n;let a,l,u,h,c,f,d,p,g,m,x,v,y,_,A,L,M;switch(i.nodeName.toLowerCase()){case"path":_=i.getAttribute("d"),A=new Ye(_),t.context.path(A),e&&t.context.fill(),n&&t.context.stroke();break;case"circle":d=ft(i,"cx",0),p=ft(i,"cy",0),g=ft(i,"r",0),t.context.ellipse(d,p,g,g),e&&t.context.fill(),n&&t.context.stroke();break;case"rect":a=ft(i,"x",0),l=ft(i,"y",0),L=ft(i,"width",0),M=ft(i,"height",0),m=ft(i,"rx",0),x=ft(i,"ry",0),m||x?t.context.roundRect(a,l,L,M,m||x):t.context.rect(a,l,L,M),e&&t.context.fill(),n&&t.context.stroke();break;case"ellipse":d=ft(i,"cx",0),p=ft(i,"cy",0),m=ft(i,"rx",0),x=ft(i,"ry",0),t.context.beginPath(),t.context.ellipse(d,p,m,x),e&&t.context.fill(),n&&t.context.stroke();break;case"line":u=ft(i,"x1",0),h=ft(i,"y1",0),c=ft(i,"x2",0),f=ft(i,"y2",0),t.context.beginPath(),t.context.moveTo(u,h),t.context.lineTo(c,f),n&&t.context.stroke();break;case"polygon":y=i.getAttribute("points"),v=y.match(/\d+/g).map(R=>parseInt(R,10)),t.context.poly(v,!0),e&&t.context.fill(),n&&t.context.stroke();break;case"polyline":y=i.getAttribute("points"),v=y.match(/\d+/g).map(R=>parseInt(R,10)),t.context.poly(v,!1),n&&t.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${i.nodeName}> elements unsupported`);break}}for(let R=0;R<r.length;R++)Ol(r[R],t,e,n)}function ft(i,t,e){const n=i.getAttribute(t);return n?Number(n):e}function zd(i){const t=i.getAttribute("style"),e={},n={};let r=!1,s=!1;if(t){const o=t.split(";");for(let a=0;a<o.length;a++){const l=o[a],[u,h]=l.split(":");switch(u){case"stroke":h!=="none"&&(e.color=V.shared.setValue(h).toNumber(),s=!0);break;case"stroke-width":e.width=Number(h);break;case"fill":h!=="none"&&(r=!0,n.color=V.shared.setValue(h).toNumber());break;case"fill-opacity":n.alpha=Number(h);break;case"stroke-opacity":e.alpha=Number(h);break;case"opacity":n.alpha=Number(h),e.alpha=Number(h);break}}}else{const o=i.getAttribute("stroke");o&&o!=="none"&&(s=!0,e.color=V.shared.setValue(o).toNumber(),e.width=ft(i,"stroke-width",1));const a=i.getAttribute("fill");a&&a!=="none"&&(r=!0,n.color=V.shared.setValue(a).toNumber())}return{strokeStyle:s?e:null,fillStyle:r?n:null}}function kd(i){return V.isColorLike(i)}function Oo(i){return i instanceof Vn}function Bo(i){return i instanceof Ai}function Rd(i,t,e){const n=V.shared.setValue(t??0);return i.color=n.toNumber(),i.alpha=n.alpha===1?e.alpha:n.alpha,i.texture=E.WHITE,{...e,...i}}function Eo(i,t,e){return i.fill=t,i.color=16777215,i.texture=t.texture,i.matrix=t.transform,{...e,...i}}function Uo(i,t,e){return t.buildLinearGradient(),i.fill=t,i.color=16777215,i.texture=t.texture,i.matrix=t.transform,{...e,...i}}function Od(i,t){var r;const e={...t,...i};if(e.texture){if(e.texture!==E.WHITE){const o=((r=e.matrix)==null?void 0:r.invert())||new H;o.translate(e.texture.frame.x,e.texture.frame.y),o.scale(1/e.texture.source.width,1/e.texture.source.height),e.matrix=o}const s=e.texture.source.style;s.addressMode==="clamp-to-edge"&&(s.addressMode="repeat",s.update())}const n=V.shared.setValue(e.color);return e.alpha*=n.alpha,e.color=n.toNumber(),e.matrix=e.matrix?e.matrix.clone():null,e}function ve(i,t){if(i==null)return null;const e={},n=i;return kd(i)?Rd(e,i,t):Oo(i)?Eo(e,i,t):Bo(i)?Uo(e,i,t):n.fill&&Oo(n.fill)?Eo(n,n.fill,t):n.fill&&Bo(n.fill)?Uo(n,n.fill,t):Od(n,t)}function Mn(i,t){const{width:e,alignment:n,miterLimit:r,cap:s,join:o,...a}=t,l=ve(i,a);return l?{width:e,alignment:n,miterLimit:r,cap:s,join:o,...l}:null}const Bd=new yt,Lo=new H,Ps=class Wt extends xt{constructor(){super(...arguments),this.uid=ut("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new Ye,this._transform=new H,this._fillStyle={...Wt.defaultFillStyle},this._strokeStyle={...Wt.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new Xt,this._boundsDirty=!0}clone(){const t=new Wt;return t.batchMode=this.batchMode,t.instructions=this.instructions.slice(),t._activePath=this._activePath.clone(),t._transform=this._transform.clone(),t._fillStyle={...this._fillStyle},t._strokeStyle={...this._strokeStyle},t._stateStack=this._stateStack.slice(),t._bounds=this._bounds.clone(),t._boundsDirty=!0,t}get fillStyle(){return this._fillStyle}set fillStyle(t){this._fillStyle=ve(t,Wt.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(t){this._strokeStyle=Mn(t,Wt.defaultStrokeStyle)}setFillStyle(t){return this._fillStyle=ve(t,Wt.defaultFillStyle),this}setStrokeStyle(t){return this._strokeStyle=ve(t,Wt.defaultStrokeStyle),this}texture(t,e,n,r,s,o){return this.instructions.push({action:"texture",data:{image:t,dx:n||0,dy:r||0,dw:s||t.frame.width,dh:o||t.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:e?V.shared.setValue(e).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new Ye,this}fill(t,e){let n;const r=this.instructions[this.instructions.length-1];return this._tick===0&&r&&r.action==="stroke"?n=r.data.path:n=this._activePath.clone(),n?(t!=null&&(e!==void 0&&typeof t=="number"&&(F(Y,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),t={color:t,alpha:e}),this._fillStyle=ve(t,Wt.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:n}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:t,y:e}=this._activePath.getLastPoint(yt.shared);this._activePath.clear(),this._activePath.moveTo(t,e)}stroke(t){let e;const n=this.instructions[this.instructions.length-1];return this._tick===0&&n&&n.action==="fill"?e=n.data.path:e=this._activePath.clone(),e?(t!=null&&(this._strokeStyle=Mn(t,Wt.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:e}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let t=0;t<2;t++){const e=this.instructions[this.instructions.length-1-t],n=this._activePath.clone();if(e&&(e.action==="stroke"||e.action==="fill"))if(e.data.hole)e.data.hole.addPath(n);else{e.data.hole=n;break}}return this._initNextPathLocation(),this}arc(t,e,n,r,s,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*t+a.c*e+a.tx,a.b*t+a.d*e+a.ty,n,r,s,o),this}arcTo(t,e,n,r,s){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*n+o.c*r+o.tx,o.b*n+o.d*r+o.ty,s),this}arcToSvg(t,e,n,r,s,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(t,e,n,r,s,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(t,e,n,r,s,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*t+l.c*e+l.tx,l.b*t+l.d*e+l.ty,l.a*n+l.c*r+l.tx,l.b*n+l.d*r+l.ty,l.a*s+l.c*o+l.tx,l.b*s+l.d*o+l.ty,a),this}closePath(){var t;return this._tick++,(t=this._activePath)==null||t.closePath(),this}ellipse(t,e,n,r){return this._tick++,this._activePath.ellipse(t,e,n,r,this._transform.clone()),this}circle(t,e,n){return this._tick++,this._activePath.circle(t,e,n,this._transform.clone()),this}path(t){return this._tick++,this._activePath.addPath(t,this._transform.clone()),this}lineTo(t,e){this._tick++;const n=this._transform;return this._activePath.lineTo(n.a*t+n.c*e+n.tx,n.b*t+n.d*e+n.ty),this}moveTo(t,e){this._tick++;const n=this._transform,r=this._activePath.instructions,s=n.a*t+n.c*e+n.tx,o=n.b*t+n.d*e+n.ty;return r.length===1&&r[0].action==="moveTo"?(r[0].data[0]=s,r[0].data[1]=o,this):(this._activePath.moveTo(s,o),this)}quadraticCurveTo(t,e,n,r,s){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*n+o.c*r+o.tx,o.b*n+o.d*r+o.ty,s),this}rect(t,e,n,r){return this._tick++,this._activePath.rect(t,e,n,r,this._transform.clone()),this}roundRect(t,e,n,r,s){return this._tick++,this._activePath.roundRect(t,e,n,r,s,this._transform.clone()),this}poly(t,e){return this._tick++,this._activePath.poly(t,e,this._transform.clone()),this}regularPoly(t,e,n,r,s=0,o){return this._tick++,this._activePath.regularPoly(t,e,n,r,s,o),this}roundPoly(t,e,n,r,s,o){return this._tick++,this._activePath.roundPoly(t,e,n,r,s,o),this}roundShape(t,e,n,r){return this._tick++,this._activePath.roundShape(t,e,n,r),this}filletRect(t,e,n,r,s){return this._tick++,this._activePath.filletRect(t,e,n,r,s),this}chamferRect(t,e,n,r,s,o){return this._tick++,this._activePath.chamferRect(t,e,n,r,s,o),this}star(t,e,n,r,s=0,o=0){return this._tick++,this._activePath.star(t,e,n,r,s,o,this._transform.clone()),this}svg(t){return this._tick++,Fd(t,this),this}restore(){const t=this._stateStack.pop();return t&&(this._transform=t.transform,this._fillStyle=t.fillStyle,this._strokeStyle=t.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(t){return this._transform.rotate(t),this}scale(t,e=t){return this._transform.scale(t,e),this}setTransform(t,e,n,r,s,o){return t instanceof H?(this._transform.set(t.a,t.b,t.c,t.d,t.tx,t.ty),this):(this._transform.set(t,e,n,r,s,o),this)}transform(t,e,n,r,s,o){return t instanceof H?(this._transform.append(t),this):(Lo.set(t,e,n,r,s,o),this._transform.append(Lo),this)}translate(t,e=t){return this._transform.translate(t,e),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const t=this._bounds;t.clear();for(let e=0;e<this.instructions.length;e++){const n=this.instructions[e],r=n.action;if(r==="fill"){const s=n.data;t.addBounds(s.path.bounds)}else if(r==="texture"){const s=n.data;t.addFrame(s.dx,s.dy,s.dx+s.dw,s.dy+s.dh,s.transform)}if(r==="stroke"){const s=n.data,o=s.style.width/2,a=s.path.bounds;t.addFrame(a.minX-o,a.minY-o,a.maxX+o,a.maxY+o)}}return t}containsPoint(t){var r;if(!this.bounds.containsPoint(t.x,t.y))return!1;const e=this.instructions;let n=!1;for(let s=0;s<e.length;s++){const o=e[s],a=o.data,l=a.path;if(!o.action||!l)continue;const u=a.style,h=l.shapePath.shapePrimitives;for(let c=0;c<h.length;c++){const f=h[c].shape;if(!u||!f)continue;const d=h[c].transform,p=d?d.applyInverse(t,Bd):t;o.action==="fill"?n=f.contains(p.x,p.y):n=f.strokeContains(p.x,p.y,u.width);const g=a.hole;if(g){const m=(r=g.shapePath)==null?void 0:r.shapePrimitives;if(m)for(let x=0;x<m.length;x++)m[x].shape.contains(p.x,p.y)&&(n=!1)}if(n)return!0}}return n}destroy(t=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const n=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(n),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(n)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};Ps.defaultFillStyle={color:16777215,alpha:1,texture:E.WHITE,matrix:null,fill:null};Ps.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:E.WHITE,matrix:null,fill:null};let kt=Ps;const Do=["align","breakWords","cssOverrides","fontVariant","fontWeight","leading","letterSpacing","lineHeight","padding","textBaseline","trim","whiteSpace","wordWrap","wordWrapWidth","fontFamily","fontStyle","fontSize"];function Ed(i){const t=[];let e=0;for(let n=0;n<Do.length;n++){const r=`_${Do[n]}`;t[e++]=i[r]}return e=Bl(i._fill,t,e),e=Ud(i._stroke,t,e),e=Ld(i.dropShadow,t,e),t.join("-")}function Bl(i,t,e){var n;return i&&(t[e++]=i.color,t[e++]=i.alpha,t[e++]=(n=i.fill)==null?void 0:n.styleKey),e}function Ud(i,t,e){return i&&(e=Bl(i,t,e),t[e++]=i.width,t[e++]=i.alignment,t[e++]=i.cap,t[e++]=i.join,t[e++]=i.miterLimit),e}function Ld(i,t,e){return i&&(t[e++]=i.alpha,t[e++]=i.angle,t[e++]=i.blur,t[e++]=i.distance,t[e++]=V.shared.setValue(i.color).toNumber()),e}const Is=class Oe extends xt{constructor(t={}){super(),Dd(t);const e={...Oe.defaultTextStyle,...t};for(const n in e){const r=n;this[r]=e[n]}this.update()}get align(){return this._align}set align(t){this._align=t,this.update()}get breakWords(){return this._breakWords}set breakWords(t){this._breakWords=t,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(t){t!==null&&typeof t=="object"?this._dropShadow=this._createProxy({...Oe.defaultDropShadow,...t}):this._dropShadow=t?this._createProxy({...Oe.defaultDropShadow}):null,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(t){this._fontFamily=t,this.update()}get fontSize(){return this._fontSize}set fontSize(t){typeof t=="string"?this._fontSize=parseInt(t,10):this._fontSize=t,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle=t.toLowerCase(),this.update()}get fontVariant(){return this._fontVariant}set fontVariant(t){this._fontVariant=t,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight=t,this.update()}get leading(){return this._leading}set leading(t){this._leading=t,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing=t,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight=t,this.update()}get padding(){return this._padding}set padding(t){this._padding=t,this.update()}get trim(){return this._trim}set trim(t){this._trim=t,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(t){this._textBaseline=t,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(t){this._whiteSpace=t,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(t){this._wordWrap=t,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(t){this._wordWrapWidth=t,this.update()}get fill(){return this._originalFill}set fill(t){t!==this._originalFill&&(this._originalFill=t,this._isFillStyle(t)&&(this._originalFill=this._createProxy({...kt.defaultFillStyle,...t},()=>{this._fill=ve({...this._originalFill},kt.defaultFillStyle)})),this._fill=ve(t===0?"black":t,kt.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(t){t!==this._originalStroke&&(this._originalStroke=t,this._isFillStyle(t)&&(this._originalStroke=this._createProxy({...kt.defaultStrokeStyle,...t},()=>{this._stroke=Mn({...this._originalStroke},kt.defaultStrokeStyle)})),this._stroke=Mn(t,kt.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=Ed(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}reset(){const t=Oe.defaultTextStyle;for(const e in t)this[e]=t[e]}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new Oe({align:this.align,breakWords:this.breakWords,dropShadow:this._dropShadow?{...this._dropShadow}:null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(t=!1){var n,r,s,o;if(this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const a=typeof t=="boolean"?t:t==null?void 0:t.textureSource;(n=this._fill)!=null&&n.texture&&this._fill.texture.destroy(a),(r=this._originalFill)!=null&&r.texture&&this._originalFill.texture.destroy(a),(s=this._stroke)!=null&&s.texture&&this._stroke.texture.destroy(a),(o=this._originalStroke)!=null&&o.texture&&this._originalStroke.texture.destroy(a)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}_createProxy(t,e){return new Proxy(t,{set:(n,r,s)=>(n[r]=s,e==null||e(r,s),this.update(),!0)})}_isFillStyle(t){return(t??null)!==null&&!(V.isColorLike(t)||t instanceof Ai||t instanceof Vn)}};Is.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};Is.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let vt=Is;function Dd(i){const t=i;if(typeof t.dropShadow=="boolean"&&t.dropShadow){const e=vt.defaultDropShadow;i.dropShadow={alpha:t.dropShadowAlpha??e.alpha,angle:t.dropShadowAngle??e.angle,blur:t.dropShadowBlur??e.blur,color:t.dropShadowColor??e.color,distance:t.dropShadowDistance??e.distance}}if(t.strokeThickness!==void 0){F(Y,"strokeThickness is now a part of stroke");const e=t.stroke;let n={};if(V.isColorLike(e))n.color=e;else if(e instanceof Ai||e instanceof Vn)n.fill=e;else if(Object.hasOwnProperty.call(e,"color")||Object.hasOwnProperty.call(e,"fill"))n=e;else throw new Error("Invalid stroke value.");i.stroke={...n,width:t.strokeThickness}}if(Array.isArray(t.fillGradientStops)){F(Y,"gradient fill is now a fill pattern: `new FillGradient(...)`");let e;i.fontSize==null?i.fontSize=vt.defaultTextStyle.fontSize:typeof i.fontSize=="string"?e=parseInt(i.fontSize,10):e=i.fontSize;const n=new Ai(0,0,0,e*1.7),r=t.fillGradientStops.map(s=>V.shared.setValue(s).toNumber());r.forEach((s,o)=>{const a=o/(r.length-1);n.addColorStop(a,s)}),i.fill={fill:n}}}class Gd{constructor(t){this._canvasPool=Object.create(null),this.canvasOptions=t||{},this.enableFullScreen=!1}_createCanvasAndContext(t,e){const n=tt.get().createCanvas();n.width=t,n.height=e;const r=n.getContext("2d");return{canvas:n,context:r}}getOptimalCanvasAndContext(t,e,n=1){t=Math.ceil(t*n-1e-6),e=Math.ceil(e*n-1e-6),t=Cn(t),e=Cn(e);const r=(t<<17)+(e<<1);this._canvasPool[r]||(this._canvasPool[r]=[]);let s=this._canvasPool[r].pop();return s||(s=this._createCanvasAndContext(t,e)),s}returnCanvasAndContext(t){const e=t.canvas,{width:n,height:r}=e,s=(n<<17)+(r<<1);t.context.clearRect(0,0,n,r),this._canvasPool[s].push(t)}clear(){this._canvasPool={}}}const Go=new Gd,Nd=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function Qr(i){const t=typeof i.fontSize=="number"?`${i.fontSize}px`:i.fontSize;let e=i.fontFamily;Array.isArray(i.fontFamily)||(e=i.fontFamily.split(","));for(let n=e.length-1;n>=0;n--){let r=e[n].trim();!/([\"\'])[^\'\"]+\1/.test(r)&&!Nd.includes(r)&&(r=`"${r}"`),e[n]=r}return`${i.fontStyle} ${i.fontVariant} ${i.fontWeight} ${t} ${e.join(",")}`}const Sr={willReadFrequently:!0},$t=class z{static get experimentalLetterSpacingSupported(){let t=z._experimentalLetterSpacingSupported;if(t!==void 0){const e=tt.get().getCanvasRenderingContext2D().prototype;t=z._experimentalLetterSpacingSupported="letterSpacing"in e||"textLetterSpacing"in e}return t}constructor(t,e,n,r,s,o,a,l,u){this.text=t,this.style=e,this.width=n,this.height=r,this.lines=s,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=l,this.fontProperties=u}static measureText(t=" ",e,n=z._canvas,r=e.wordWrap){var v;const s=`${t}:${e.styleKey}`;if(z._measurementCache[s])return z._measurementCache[s];const o=Qr(e),a=z.measureFont(o);a.fontSize===0&&(a.fontSize=e.fontSize,a.ascent=e.fontSize);const l=z.__context;l.font=o;const h=(r?z._wordWrap(t,e,n):t).split(/(?:\r\n|\r|\n)/),c=new Array(h.length);let f=0;for(let y=0;y<h.length;y++){const _=z._measureText(h[y],e.letterSpacing,l);c[y]=_,f=Math.max(f,_)}const d=((v=e._stroke)==null?void 0:v.width)||0;let p=f+d;e.dropShadow&&(p+=e.dropShadow.distance);const g=e.lineHeight||a.fontSize;let m=Math.max(g,a.fontSize+d)+(h.length-1)*(g+e.leading);return e.dropShadow&&(m+=e.dropShadow.distance),new z(t,e,p,m,h,c,g+e.leading,f,a)}static _measureText(t,e,n){let r=!1;z.experimentalLetterSpacingSupported&&(z.experimentalLetterSpacing?(n.letterSpacing=`${e}px`,n.textLetterSpacing=`${e}px`,r=!0):(n.letterSpacing="0px",n.textLetterSpacing="0px"));const s=n.measureText(t);let o=s.width;const a=-s.actualBoundingBoxLeft;let u=s.actualBoundingBoxRight-a;if(o>0)if(r)o-=e,u-=e;else{const h=(z.graphemeSegmenter(t).length-1)*e;o+=h,u+=h}return Math.max(o,u)}static _wordWrap(t,e,n=z._canvas){const r=n.getContext("2d",Sr);let s=0,o="",a="";const l=Object.create(null),{letterSpacing:u,whiteSpace:h}=e,c=z._collapseSpaces(h),f=z._collapseNewlines(h);let d=!c;const p=e.wordWrapWidth+u,g=z._tokenize(t);for(let m=0;m<g.length;m++){let x=g[m];if(z._isNewline(x)){if(!f){a+=z._addLine(o),d=!c,o="",s=0;continue}x=" "}if(c){const y=z.isBreakingSpace(x),_=z.isBreakingSpace(o[o.length-1]);if(y&&_)continue}const v=z._getFromCache(x,u,l,r);if(v>p)if(o!==""&&(a+=z._addLine(o),o="",s=0),z.canBreakWords(x,e.breakWords)){const y=z.wordWrapSplit(x);for(let _=0;_<y.length;_++){let A=y[_],L=A,M=1;for(;y[_+M];){const b=y[_+M];if(!z.canBreakChars(L,b,x,_,e.breakWords))A+=b;else break;L=b,M++}_+=M-1;const R=z._getFromCache(A,u,l,r);R+s>p&&(a+=z._addLine(o),d=!1,o="",s=0),o+=A,s+=R}}else{o.length>0&&(a+=z._addLine(o),o="",s=0);const y=m===g.length-1;a+=z._addLine(x,!y),d=!1,o="",s=0}else v+s>p&&(d=!1,a+=z._addLine(o),o="",s=0),(o.length>0||!z.isBreakingSpace(x)||d)&&(o+=x,s+=v)}return a+=z._addLine(o,!1),a}static _addLine(t,e=!0){return t=z._trimRight(t),t=e?`${t}
`:t,t}static _getFromCache(t,e,n,r){let s=n[t];return typeof s!="number"&&(s=z._measureText(t,e,r)+e,n[t]=s),s}static _collapseSpaces(t){return t==="normal"||t==="pre-line"}static _collapseNewlines(t){return t==="normal"}static _trimRight(t){if(typeof t!="string")return"";for(let e=t.length-1;e>=0;e--){const n=t[e];if(!z.isBreakingSpace(n))break;t=t.slice(0,-1)}return t}static _isNewline(t){return typeof t!="string"?!1:z._newlines.includes(t.charCodeAt(0))}static isBreakingSpace(t,e){return typeof t!="string"?!1:z._breakingSpaces.includes(t.charCodeAt(0))}static _tokenize(t){const e=[];let n="";if(typeof t!="string")return e;for(let r=0;r<t.length;r++){const s=t[r],o=t[r+1];if(z.isBreakingSpace(s,o)||z._isNewline(s)){n!==""&&(e.push(n),n=""),e.push(s);continue}n+=s}return n!==""&&e.push(n),e}static canBreakWords(t,e){return e}static canBreakChars(t,e,n,r,s){return!0}static wordWrapSplit(t){return z.graphemeSegmenter(t)}static measureFont(t){if(z._fonts[t])return z._fonts[t];const e=z._context;e.font=t;const n=e.measureText(z.METRICS_STRING+z.BASELINE_SYMBOL),r={ascent:n.actualBoundingBoxAscent,descent:n.actualBoundingBoxDescent,fontSize:n.actualBoundingBoxAscent+n.actualBoundingBoxDescent};return z._fonts[t]=r,r}static clearMetrics(t=""){t?delete z._fonts[t]:z._fonts={}}static get _canvas(){if(!z.__canvas){let t;try{const e=new OffscreenCanvas(0,0),n=e.getContext("2d",Sr);if(n!=null&&n.measureText)return z.__canvas=e,e;t=tt.get().createCanvas()}catch{t=tt.get().createCanvas()}t.width=t.height=10,z.__canvas=t}return z.__canvas}static get _context(){return z.__context||(z.__context=z._canvas.getContext("2d",Sr)),z.__context}};$t.METRICS_STRING="|ÉqÅ";$t.BASELINE_SYMBOL="M";$t.BASELINE_MULTIPLIER=1.4;$t.HEIGHT_MULTIPLIER=2;$t.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const i=new Intl.Segmenter;return t=>[...i.segment(t)].map(e=>e.segment)}return i=>[...i]})();$t.experimentalLetterSpacing=!1;$t._fonts={};$t._newlines=[10,13];$t._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];$t._measurementCache={};let Jr=$t;function No(i,t){if(i.texture===E.WHITE&&!i.fill)return V.shared.setValue(i.color).setAlpha(i.alpha??1).toHexa();if(i.fill){if(i.fill instanceof Vn){const e=i.fill,n=t.createPattern(e.texture.source.resource,"repeat"),r=e.transform.copyTo(H.shared);return r.scale(e.texture.frame.width,e.texture.frame.height),n.setTransform(r),n}else if(i.fill instanceof Ai){const e=i.fill;if(e.type==="linear"){const n=t.createLinearGradient(e.x0,e.y0,e.x1,e.y1);return e.gradientStops.forEach(r=>{n.addColorStop(r.offset,V.shared.setValue(r.color).toHex())}),n}}}else{const e=t.createPattern(i.texture.source.resource,"repeat"),n=i.matrix.copyTo(H.shared);return n.scale(i.texture.frame.width,i.texture.frame.height),e.setTransform(n),e}return ht("FillStyle not recognised",i),"red"}function El(i){if(i==="")return[];typeof i=="string"&&(i=[i]);const t=[];for(let e=0,n=i.length;e<n;e++){const r=i[e];if(Array.isArray(r)){if(r.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${r.length}.`);if(r[0].length===0||r[1].length===0)throw new Error("[BitmapFont]: Invalid character delimiter.");const s=r[0].charCodeAt(0),o=r[1].charCodeAt(0);if(o<s)throw new Error("[BitmapFont]: Invalid character range.");for(let a=s,l=o;a<=l;a++)t.push(String.fromCharCode(a))}else t.push(...Array.from(r))}if(t.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return t}const Ul=class Ll extends xl{constructor(t){super(),this.resolution=1,this.pages=[],this._padding=0,this._measureCache=Object.create(null),this._currentChars=[],this._currentX=0,this._currentY=0,this._currentPageIndex=-1,this._skipKerning=!1;const e={...Ll.defaultOptions,...t};this._textureSize=e.textureSize,this._mipmap=e.mipmap;const n=e.style.clone();e.overrideFill&&(n._fill.color=16777215,n._fill.alpha=1,n._fill.texture=E.WHITE,n._fill.fill=null),this.applyFillAsTint=e.overrideFill;const r=n.fontSize;n.fontSize=this.baseMeasurementFontSize;const s=Qr(n);e.overrideSize?n._stroke&&(n._stroke.width*=this.baseRenderedFontSize/r):n.fontSize=this.baseRenderedFontSize=r,this._style=n,this._skipKerning=e.skipKerning??!1,this.resolution=e.resolution??1,this._padding=e.padding??4,this.fontMetrics=Jr.measureFont(s),this.lineHeight=n.lineHeight||this.fontMetrics.fontSize||n.fontSize}ensureCharacters(t){var p,g;const e=El(t).filter(m=>!this._currentChars.includes(m)).filter((m,x,v)=>v.indexOf(m)===x);if(!e.length)return;this._currentChars=[...this._currentChars,...e];let n;this._currentPageIndex===-1?n=this._nextPage():n=this.pages[this._currentPageIndex];let{canvas:r,context:s}=n.canvasAndContext,o=n.texture.source;const a=this._style;let l=this._currentX,u=this._currentY;const h=this.baseRenderedFontSize/this.baseMeasurementFontSize,c=this._padding*h;let f=0,d=!1;for(let m=0;m<e.length;m++){const x=e[m],v=Jr.measureText(x,a,r,!1),y=Math.ceil((a.fontStyle==="italic"?2:1)*v.width);v.lineHeight=v.height;const _=v.width*h,A=v.height*h,L=y+c*2,M=A+c*2;if(d=!1,x!==`
`&&x!=="\r"&&x!=="	"&&x!==" "&&(d=!0,f=Math.ceil(Math.max(M,f))),l+L>this._textureSize&&(u+=f,f=M,l=0,u+f>this._textureSize)){o.update();const b=this._nextPage();r=b.canvasAndContext.canvas,s=b.canvasAndContext.context,o=b.texture.source,u=0}const R=_/h-(((p=a.dropShadow)==null?void 0:p.distance)??0)-(((g=a._stroke)==null?void 0:g.width)??0);if(this.chars[x]={id:x.codePointAt(0),xOffset:-this._padding,yOffset:-this._padding,xAdvance:R,kerning:{}},d){this._drawGlyph(s,v,l+c,u+c,h,a);const b=o.width*h,w=o.height*h,K=new lt(l/b*o.width,u/w*o.height,L/b*o.width,M/w*o.height);this.chars[x].texture=new E({source:o,frame:K}),l+=Math.ceil(L)}}o.update(),this._currentX=l,this._currentY=u,this._skipKerning&&this._applyKerning(e,s)}get pageTextures(){return F(Y,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}_applyKerning(t,e){const n=this._measureCache;for(let r=0;r<t.length;r++){const s=t[r];for(let o=0;o<this._currentChars.length;o++){const a=this._currentChars[o];let l=n[s];l||(l=n[s]=e.measureText(s).width);let u=n[a];u||(u=n[a]=e.measureText(a).width);let h=e.measureText(s+a).width,c=h-(l+u);c&&(this.chars[s].kerning[a]=c),h=e.measureText(s+a).width,c=h-(l+u),c&&(this.chars[a].kerning[s]=c)}}}_nextPage(){this._currentPageIndex++;const t=this.resolution,e=Go.getOptimalCanvasAndContext(this._textureSize,this._textureSize,t);this._setupContext(e.context,this._style,t);const n=t*(this.baseRenderedFontSize/this.baseMeasurementFontSize),r=new E({source:new Ae({resource:e.canvas,resolution:n,alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:this._mipmap})}),s={canvasAndContext:e,texture:r};return this.pages[this._currentPageIndex]=s,s}_setupContext(t,e,n){e.fontSize=this.baseRenderedFontSize,t.scale(n,n),t.font=Qr(e),e.fontSize=this.baseMeasurementFontSize,t.textBaseline=e.textBaseline;const r=e._stroke,s=(r==null?void 0:r.width)??0;if(r&&(t.lineWidth=s,t.lineJoin=r.join,t.miterLimit=r.miterLimit,t.strokeStyle=No(r,t)),e._fill&&(t.fillStyle=No(e._fill,t)),e.dropShadow){const o=e.dropShadow,a=V.shared.setValue(o.color).toArray(),l=o.blur*n,u=o.distance*n;t.shadowColor=`rgba(${a[0]*255},${a[1]*255},${a[2]*255},${o.alpha})`,t.shadowBlur=l,t.shadowOffsetX=Math.cos(o.angle)*u,t.shadowOffsetY=Math.sin(o.angle)*u}else t.shadowColor="black",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0}_drawGlyph(t,e,n,r,s,o){const a=e.text,l=e.fontProperties,u=o._stroke,h=((u==null?void 0:u.width)??0)*s,c=n+h/2,f=r-h/2,d=l.descent*s,p=e.lineHeight*s;o.stroke&&h&&t.strokeText(a,c,f+p-d),o._fill&&t.fillText(a,c,f+p-d)}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){const{canvasAndContext:e,texture:n}=this.pages[t];Go.returnCanvasAndContext(e),n.destroy(!0)}this.pages=null}};Ul.defaultOptions={textureSize:512,style:new vt,mipmap:!0};let $o=Ul;function $d(i,t,e,n){const r={width:0,height:0,offsetY:0,scale:t.fontSize/e.baseMeasurementFontSize,lines:[{width:0,charPositions:[],spaceWidth:0,spacesIndex:[],chars:[]}]};r.offsetY=e.baseLineOffset;let s=r.lines[0],o=null,a=!0;const l={spaceWord:!1,width:0,start:0,index:0,positions:[],chars:[]},u=p=>{const g=s.width;for(let m=0;m<l.index;m++){const x=p.positions[m];s.chars.push(p.chars[m]),s.charPositions.push(x+g)}s.width+=p.width,a=!1,l.width=0,l.index=0,l.chars.length=0},h=()=>{let p=s.chars.length-1;if(n){let g=s.chars[p];for(;g===" ";)s.width-=e.chars[g].xAdvance,g=s.chars[--p]}r.width=Math.max(r.width,s.width),s={width:0,charPositions:[],chars:[],spaceWidth:0,spacesIndex:[]},a=!0,r.lines.push(s),r.height+=e.lineHeight},c=e.baseMeasurementFontSize/t.fontSize,f=t.letterSpacing*c,d=t.wordWrapWidth*c;for(let p=0;p<i.length+1;p++){let g;const m=p===i.length;m||(g=i[p]);const x=e.chars[g]||e.chars[" "];if(/(?:\s)/.test(g)||g==="\r"||g===`
`||m){if(!a&&t.wordWrap&&s.width+l.width-f>d?(h(),u(l),m||s.charPositions.push(0)):(l.start=s.width,u(l),m||s.charPositions.push(0)),g==="\r"||g===`
`)s.width!==0&&h();else if(!m){const A=x.xAdvance+(x.kerning[o]||0)+f;s.width+=A,s.spaceWidth=A,s.spacesIndex.push(s.charPositions.length),s.chars.push(g)}}else{const _=x.kerning[o]||0,A=x.xAdvance+_+f;l.positions[l.index++]=l.width+_,l.chars.push(g),l.width+=A}o=g}return h(),t.align==="center"?Vd(r):t.align==="right"?Wd(r):t.align==="justify"&&Hd(r),r}function Vd(i){for(let t=0;t<i.lines.length;t++){const e=i.lines[t],n=i.width/2-e.width/2;for(let r=0;r<e.charPositions.length;r++)e.charPositions[r]+=n}}function Wd(i){for(let t=0;t<i.lines.length;t++){const e=i.lines[t],n=i.width-e.width;for(let r=0;r<e.charPositions.length;r++)e.charPositions[r]+=n}}function Hd(i){const t=i.width;for(let e=0;e<i.lines.length;e++){const n=i.lines[e];let r=0,s=n.spacesIndex[r++],o=0;const a=n.spacesIndex.length,u=(t-n.width)/a;for(let h=0;h<n.charPositions.length;h++)h===s&&(s=n.spacesIndex[r++],o+=u),n.charPositions[h]+=o}}let Zi=0;class Xd{constructor(){this.ALPHA=[["a","z"],["A","Z"]," "],this.NUMERIC=[["0","9"]],this.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],this.ASCII=[[" ","~"]],this.defaultOptions={chars:this.ALPHANUMERIC,resolution:1,padding:4,skipKerning:!1}}getFont(t,e){var o;let n=`${e.fontFamily}-bitmap`,r=!0;if(e._fill.fill&&!e._stroke)n+=e._fill.fill.styleKey,r=!1;else if(e._stroke||e.dropShadow){let a=e.styleKey;a=a.substring(0,a.lastIndexOf("-")),n=`${a}-bitmap`,r=!1}if(!nt.has(n)){const a=new $o({style:e,overrideFill:r,overrideSize:!0,...this.defaultOptions});Zi++,Zi>50&&ht("BitmapText",`You have dynamically created ${Zi} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``),a.once("destroy",()=>{Zi--,nt.remove(n)}),nt.set(n,a)}const s=nt.get(n);return(o=s.ensureCharacters)==null||o.call(s,t),s}getLayout(t,e,n=!0){const r=this.getFont(t,e);return $d([...t],e,r,n)}measureText(t,e,n=!0){return this.getLayout(t,e,n)}install(...t){var u,h,c,f;let e=t[0];typeof e=="string"&&(e={name:e,style:t[1],chars:(u=t[2])==null?void 0:u.chars,resolution:(h=t[2])==null?void 0:h.resolution,padding:(c=t[2])==null?void 0:c.padding,skipKerning:(f=t[2])==null?void 0:f.skipKerning},F(Y,"BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));const n=e==null?void 0:e.name;if(!n)throw new Error("[BitmapFontManager] Property `name` is required.");e={...this.defaultOptions,...e};const r=e.style,s=r instanceof vt?r:new vt(r),o=s._fill.fill!==null&&s._fill.fill!==void 0,a=new $o({style:s,overrideFill:o,skipKerning:e.skipKerning,padding:e.padding,resolution:e.resolution,overrideSize:!1}),l=El(e.chars);return a.ensureCharacters(l.join("")),nt.set(`${n}-bitmap`,a),a.once("destroy",()=>nt.remove(`${n}-bitmap`)),a}uninstall(t){const e=`${t}-bitmap`,n=nt.get(e);n&&n.destroy()}}const Vo=new Xd;class Dl extends xl{constructor(t,e){super();const{textures:n,data:r}=t;Object.keys(r.pages).forEach(s=>{const o=r.pages[parseInt(s,10)],a=n[o.id];this.pages.push({texture:a})}),Object.keys(r.chars).forEach(s=>{const o=r.chars[s],{frame:a,source:l}=n[o.page],u=new lt(o.x+a.x,o.y+a.y,o.width,o.height),h=new E({source:l,frame:u});this.chars[s]={id:s.codePointAt(0),xOffset:o.xOffset,yOffset:o.yOffset,xAdvance:o.xAdvance,kerning:o.kerning??{},texture:h}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=e}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){const{texture:e}=this.pages[t];e.destroy(!0)}this.pages=null}static install(t){Vo.install(t)}static uninstall(t){Vo.uninstall(t)}}const wr={test(i){return typeof i=="string"&&i.startsWith("info face=")},parse(i){const t=i.match(/^[a-z]+\s+.+$/gm),e={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const c in t){const f=t[c].match(/^[a-z]+/gm)[0],d=t[c].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),p={};for(const g in d){const m=d[g].split("="),x=m[0],v=m[1].replace(/"/gm,""),y=parseFloat(v),_=isNaN(y)?v:y;p[x]=_}e[f].push(p)}const n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=e.info,[s]=e.common,[o]=e.distanceField??[];o&&(n.distanceField={range:parseInt(o.distanceRange,10),type:o.fieldType}),n.fontSize=parseInt(r.size,10),n.fontFamily=r.face,n.lineHeight=parseInt(s.lineHeight,10);const a=e.page;for(let c=0;c<a.length;c++)n.pages.push({id:parseInt(a[c].id,10)||0,file:a[c].file});const l={};n.baseLineOffset=n.lineHeight-parseInt(s.base,10);const u=e.char;for(let c=0;c<u.length;c++){const f=u[c],d=parseInt(f.id,10);let p=f.letter??f.char??String.fromCharCode(d);p==="space"&&(p=" "),l[d]=p,n.chars[p]={id:d,page:parseInt(f.page,10)||0,x:parseInt(f.x,10),y:parseInt(f.y,10),width:parseInt(f.width,10),height:parseInt(f.height,10),xOffset:parseInt(f.xoffset,10),yOffset:parseInt(f.yoffset,10),xAdvance:parseInt(f.xadvance,10),kerning:{}}}const h=e.kerning||[];for(let c=0;c<h.length;c++){const f=parseInt(h[c].first,10),d=parseInt(h[c].second,10),p=parseInt(h[c].amount,10);n.chars[l[d]].kerning[l[f]]=p}return n}},Wo={test(i){const t=i;return typeof t!="string"&&"getElementsByTagName"in t&&t.getElementsByTagName("page").length&&t.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(i){const t={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},e=i.getElementsByTagName("info")[0],n=i.getElementsByTagName("common")[0],r=i.getElementsByTagName("distanceField")[0];r&&(t.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const s=i.getElementsByTagName("page"),o=i.getElementsByTagName("char"),a=i.getElementsByTagName("kerning");t.fontSize=parseInt(e.getAttribute("size"),10),t.fontFamily=e.getAttribute("face"),t.lineHeight=parseInt(n.getAttribute("lineHeight"),10);for(let u=0;u<s.length;u++)t.pages.push({id:parseInt(s[u].getAttribute("id"),10)||0,file:s[u].getAttribute("file")});const l={};t.baseLineOffset=t.lineHeight-parseInt(n.getAttribute("base"),10);for(let u=0;u<o.length;u++){const h=o[u],c=parseInt(h.getAttribute("id"),10);let f=h.getAttribute("letter")??h.getAttribute("char")??String.fromCharCode(c);f==="space"&&(f=" "),l[c]=f,t.chars[f]={id:c,page:parseInt(h.getAttribute("page"),10)||0,x:parseInt(h.getAttribute("x"),10),y:parseInt(h.getAttribute("y"),10),width:parseInt(h.getAttribute("width"),10),height:parseInt(h.getAttribute("height"),10),xOffset:parseInt(h.getAttribute("xoffset"),10),yOffset:parseInt(h.getAttribute("yoffset"),10),xAdvance:parseInt(h.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<a.length;u++){const h=parseInt(a[u].getAttribute("first"),10),c=parseInt(a[u].getAttribute("second"),10),f=parseInt(a[u].getAttribute("amount"),10);t.chars[l[c]].kerning[l[h]]=f}return t}},Ho={test(i){return typeof i=="string"&&i.includes("<font>")?Wo.test(tt.get().parseXML(i)):!1},parse(i){return Wo.parse(tt.get().parseXML(i))}},Yd=[".xml",".fnt"],jd={extension:{type:I.CacheParser,name:"cacheBitmapFont"},test:i=>i instanceof Dl,getCacheableAssets(i,t){const e={};return i.forEach(n=>{e[n]=t,e[`${n}-bitmap`]=t}),e[`${t.fontFamily}-bitmap`]=t,e}},qd={extension:{type:I.LoadParser,priority:Zt.Normal},name:"loadBitmapFont",test(i){return Yd.includes(gt.extname(i).toLowerCase())},async testParse(i){return wr.test(i)||Ho.test(i)},async parse(i,t,e){const n=wr.test(i)?wr.parse(i):Ho.parse(i),{src:r}=t,{pages:s}=n,o=[],a=n.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let c=0;c<s.length;++c){const f=s[c].file;let d=gt.join(gt.dirname(r),f);d=Lr(d,r),o.push({src:d,data:a})}const l=await e.load(o),u=o.map(c=>l[c.src]);return new Dl({data:n,textures:u},r)},async load(i,t){return await(await tt.get().fetch(i)).text()},async unload(i,t,e){await Promise.all(i.pages.map(n=>e.unload(n.texture.source._sourceOrigin))),i.destroy()}};class Kd{constructor(t,e=!1){this._loader=t,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(t){t.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const t=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let n=0;n<e;n++)t.push(this._assetList.pop());await this._loader.load(t),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(t){this._isActive!==t&&(this._isActive=t,t&&!this._isLoading&&this._next())}}const Zd={extension:{type:I.CacheParser,name:"cacheTextureArray"},test:i=>Array.isArray(i)&&i.every(t=>t instanceof E),getCacheableAssets:(i,t)=>{const e={};return i.forEach(n=>{t.forEach((r,s)=>{e[n+(s===0?"":s+1)]=r})}),e}};async function Gl(i){if("Image"in globalThis)return new Promise(t=>{const e=new Image;e.onload=()=>{t(!0)},e.onerror=()=>{t(!1)},e.src=i});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const t=await(await fetch(i)).blob();await createImageBitmap(t)}catch{return!1}return!0}return!1}const Qd={extension:{type:I.DetectionParser,priority:1},test:async()=>Gl("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async i=>[...i,"avif"],remove:async i=>i.filter(t=>t!=="avif")},Xo=["png","jpg","jpeg"],Jd={extension:{type:I.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async i=>[...i,...Xo],remove:async i=>i.filter(t=>!Xo.includes(t))},tp="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Ms(i){return tp?!1:document.createElement("video").canPlayType(i)!==""}const ep={extension:{type:I.DetectionParser,priority:0},test:async()=>Ms("video/mp4"),add:async i=>[...i,"mp4","m4v"],remove:async i=>i.filter(t=>t!=="mp4"&&t!=="m4v")},ip={extension:{type:I.DetectionParser,priority:0},test:async()=>Ms("video/ogg"),add:async i=>[...i,"ogv"],remove:async i=>i.filter(t=>t!=="ogv")},np={extension:{type:I.DetectionParser,priority:0},test:async()=>Ms("video/webm"),add:async i=>[...i,"webm"],remove:async i=>i.filter(t=>t!=="webm")},rp={extension:{type:I.DetectionParser,priority:0},test:async()=>Gl("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async i=>[...i,"webp"],remove:async i=>i.filter(t=>t!=="webp")};class sp{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(t,e,n)=>(this._parsersValidated=!1,t[e]=n,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(t,e){const n={promise:null,parser:null};return n.promise=(async()=>{var o,a;let r=null,s=null;if(e.loadParser&&(s=this._parserHash[e.loadParser],s||ht(`[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`)),!s){for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.load&&((o=u.test)!=null&&o.call(u,t,e,this))){s=u;break}}if(!s)return ht(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await s.load(t,e,this),n.parser=s;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];u.parse&&u.parse&&await((a=u.testParse)==null?void 0:a.call(u,r,e,this))&&(r=await u.parse(r,e,this)||r,n.parser=u)}return r})(),n}async load(t,e){this._parsersValidated||this._validateParsers();let n=0;const r={},s=Pn(t),o=Lt(t,u=>({alias:[u],src:u,data:{}})),a=o.length,l=o.map(async u=>{const h=gt.toAbsolute(u.src);if(!r[u.src])try{this.promiseCache[h]||(this.promiseCache[h]=this._getLoadPromiseAndParser(h,u)),r[u.src]=await this.promiseCache[h].promise,e&&e(++n/a)}catch(c){throw delete this.promiseCache[h],delete r[u.src],new Error(`[Loader.load] Failed to load ${h}.
${c}`)}});return await Promise.all(l),s?r[o[0].src]:r}async unload(t){const n=Lt(t,r=>({alias:[r],src:r})).map(async r=>{var a,l;const s=gt.toAbsolute(r.src),o=this.promiseCache[s];if(o){const u=await o.promise;delete this.promiseCache[s],await((l=(a=o.parser)==null?void 0:a.unload)==null?void 0:l.call(a,u,r,this))}});await Promise.all(n)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(t=>t.name).reduce((t,e)=>(e.name?t[e.name]&&ht(`[Assets] loadParser name conflict "${e.name}"`):ht("[Assets] loadParser should have a name"),{...t,[e.name]:e}),{})}}function Qe(i,t){if(Array.isArray(t)){for(const e of t)if(i.startsWith(`data:${e}`))return!0;return!1}return i.startsWith(`data:${t}`)}function Je(i,t){const e=i.split("?")[0],n=gt.extname(e).toLowerCase();return Array.isArray(t)?t.includes(n):n===t}const op=".json",ap="application/json",lp={extension:{type:I.LoadParser,priority:Zt.Low},name:"loadJson",test(i){return Qe(i,ap)||Je(i,op)},async load(i){return await(await tt.get().fetch(i)).json()}},up=".txt",hp="text/plain",cp={name:"loadTxt",extension:{type:I.LoadParser,priority:Zt.Low,name:"loadTxt"},test(i){return Qe(i,hp)||Je(i,up)},async load(i){return await(await tt.get().fetch(i)).text()}},fp=["normal","bold","100","200","300","400","500","600","700","800","900"],dp=[".ttf",".otf",".woff",".woff2"],pp=["font/ttf","font/otf","font/woff","font/woff2"],mp=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function gp(i){const t=gt.extname(i),r=gt.basename(i,t).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1));let s=r.length>0;for(const a of r)if(!a.match(mp)){s=!1;break}let o=r.join(" ");return s||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const xp=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function vp(i){return xp.test(i)?i:encodeURI(i)}const yp={extension:{type:I.LoadParser,priority:Zt.Low},name:"loadWebFont",test(i){return Qe(i,pp)||Je(i,dp)},async load(i,t){var n,r,s;const e=tt.get().getFontFaceSet();if(e){const o=[],a=((n=t.data)==null?void 0:n.family)??gp(i),l=((s=(r=t.data)==null?void 0:r.weights)==null?void 0:s.filter(h=>fp.includes(h)))??["normal"],u=t.data??{};for(let h=0;h<l.length;h++){const c=l[h],f=new FontFace(a,`url(${vp(i)})`,{...u,weight:c});await f.load(),e.add(f),o.push(f)}return nt.set(`${a}-and-url`,{url:i,fontFaces:o}),o.length===1?o[0]:o}return ht("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(i){(Array.isArray(i)?i:[i]).forEach(t=>{nt.remove(t.family),tt.get().getFontFaceSet().delete(t)})}};function Fs(i,t=1){var n;const e=(n=Ze.RETINA_PREFIX)==null?void 0:n.exec(i);return e?parseFloat(e[1]):t}function zs(i,t,e){i.label=e,i._sourceOrigin=e;const n=new E({source:i,label:e}),r=()=>{delete t.promiseCache[e],nt.has(e)&&nt.remove(e)};return n.source.once("destroy",()=>{t.promiseCache[e]&&(ht("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),n.once("destroy",()=>{i.destroyed||(ht("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),n}const _p=".svg",bp="image/svg+xml",Sp={extension:{type:I.LoadParser,priority:Zt.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(i){return Qe(i,bp)||Je(i,_p)},async load(i,t,e){return t.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?Cp(i):wp(i,t,e,this.config.crossOrigin)},unload(i){i.destroy(!0)}};async function wp(i,t,e,n){var m,x,v;const s=await(await tt.get().fetch(i)).blob(),o=URL.createObjectURL(s),a=new Image;a.src=o,a.crossOrigin=n,await a.decode(),URL.revokeObjectURL(o);const l=document.createElement("canvas"),u=l.getContext("2d"),h=((m=t.data)==null?void 0:m.resolution)||Fs(i),c=((x=t.data)==null?void 0:x.width)??a.width,f=((v=t.data)==null?void 0:v.height)??a.height;l.width=c*h,l.height=f*h,u.drawImage(a,0,0,c*h,f*h);const{parseAsGraphicsContext:d,...p}=t.data,g=new Ae({resource:l,alphaMode:"premultiply-alpha-on-upload",resolution:h,...p});return zs(g,e,i)}async function Cp(i){const e=await(await tt.get().fetch(i)).text(),n=new kt;return n.svg(e),n}const Ap=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;let Ne=null,ts=class{constructor(){Ne||(Ne=URL.createObjectURL(new Blob([Ap],{type:"application/javascript"}))),this.worker=new Worker(Ne)}};ts.revokeObjectURL=function(){Ne&&(URL.revokeObjectURL(Ne),Ne=null)};const Tp=`(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;let $e=null;class Nl{constructor(){$e||($e=URL.createObjectURL(new Blob([Tp],{type:"application/javascript"}))),this.worker=new Worker($e)}}Nl.revokeObjectURL=function(){$e&&(URL.revokeObjectURL($e),$e=null)};let Yo=0,Cr;class Pp{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(t=>{const{worker:e}=new ts;e.addEventListener("message",n=>{e.terminate(),ts.revokeObjectURL(),t(n.data)})}),this._isImageBitmapSupported)}loadImageBitmap(t,e){var n;return this._run("loadImageBitmap",[t,(n=e==null?void 0:e.data)==null?void 0:n.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Cr===void 0&&(Cr=navigator.hardwareConcurrency||4);let t=this._workerPool.pop();return!t&&this._createdWorkers<Cr&&(this._createdWorkers++,t=new Nl().worker,t.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),t}_returnWorker(t){this._workerPool.push(t)}_complete(t){t.error!==void 0?this._resolveHash[t.uuid].reject(t.error):this._resolveHash[t.uuid].resolve(t.data),this._resolveHash[t.uuid]=null}async _run(t,e){await this._initWorkers();const n=new Promise((r,s)=>{this._queue.push({id:t,arguments:e,resolve:r,reject:s})});return this._next(),n}_next(){if(!this._queue.length)return;const t=this._getWorker();if(!t)return;const e=this._queue.pop(),n=e.id;this._resolveHash[Yo]={resolve:e.resolve,reject:e.reject},t.postMessage({data:e.arguments,uuid:Yo++,id:n})}}const jo=new Pp,Ip=[".jpeg",".jpg",".png",".webp",".avif"],Mp=["image/jpeg","image/png","image/webp","image/avif"];async function Fp(i,t){var r;const e=await tt.get().fetch(i);if(!e.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${i}: ${e.status} ${e.statusText}`);const n=await e.blob();return((r=t==null?void 0:t.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(n,{premultiplyAlpha:"none"}):createImageBitmap(n)}const $l={name:"loadTextures",extension:{type:I.LoadParser,priority:Zt.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(i){return Qe(i,Mp)||Je(i,Ip)},async load(i,t,e){var s;let n=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await jo.isImageBitmapSupported()?n=await jo.loadImageBitmap(i,t):n=await Fp(i,t):n=await new Promise(o=>{n=new Image,n.crossOrigin=this.config.crossOrigin,n.src=i,n.complete?o(n):n.onload=()=>{o(n)}});const r=new Ae({resource:n,alphaMode:"premultiply-alpha-on-upload",resolution:((s=t.data)==null?void 0:s.resolution)||Fs(i),...t.data});return zs(r,e,i)},unload(i){i.destroy(!0)}},Vl=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],zp=Vl.map(i=>`video/${i.substring(1)}`);function kp(i,t,e){e===void 0&&!t.startsWith("data:")?i.crossOrigin=Op(t):e!==!1&&(i.crossOrigin=typeof e=="string"?e:"anonymous")}function Rp(i){return new Promise((t,e)=>{i.addEventListener("canplaythrough",n),i.addEventListener("error",r),i.load();function n(){s(),t()}function r(o){s(),e(o)}function s(){i.removeEventListener("canplaythrough",n),i.removeEventListener("error",r)}})}function Op(i,t=globalThis.location){if(i.startsWith("data:"))return"";t=t||globalThis.location;const e=new URL(i,document.baseURI);return e.hostname!==t.hostname||e.port!==t.port||e.protocol!==t.protocol?"anonymous":""}const Bp={name:"loadVideo",extension:{type:I.LoadParser,name:"loadVideo"},test(i){const t=Qe(i,zp),e=Je(i,Vl);return t||e},async load(i,t,e){var l,u;const n={...ln.defaultOptions,resolution:((l=t.data)==null?void 0:l.resolution)||Fs(i),alphaMode:((u=t.data)==null?void 0:u.alphaMode)||await Ya(),...t.data},r=document.createElement("video"),s={preload:n.autoLoad!==!1?"auto":void 0,"webkit-playsinline":n.playsinline!==!1?"":void 0,playsinline:n.playsinline!==!1?"":void 0,muted:n.muted===!0?"":void 0,loop:n.loop===!0?"":void 0,autoplay:n.autoPlay!==!1?"":void 0};Object.keys(s).forEach(h=>{const c=s[h];c!==void 0&&r.setAttribute(h,c)}),n.muted===!0&&(r.muted=!0),kp(r,i,n.crossorigin);const o=document.createElement("source");let a;if(i.startsWith("data:"))a=i.slice(5,i.indexOf(";"));else if(!i.startsWith("blob:")){const h=i.split("?")[0].slice(i.lastIndexOf(".")+1).toLowerCase();a=ln.MIME_TYPES[h]||`video/${h}`}return o.src=i,a&&(o.type=a),new Promise(h=>{const c=async()=>{const f=new ln({...n,resource:r});r.removeEventListener("canplay",c),t.data.preload&&await Rp(r),h(zs(f,e,i))};r.addEventListener("canplay",c),r.appendChild(o)})},unload(i){i.destroy(!0)}},Wl={extension:{type:I.ResolveParser,name:"resolveTexture"},test:$l.test,parse:i=>{var t;return{resolution:parseFloat(((t=Ze.RETINA_PREFIX.exec(i))==null?void 0:t[1])??"1"),format:i.split(".").pop(),src:i}}},Ep={extension:{type:I.ResolveParser,priority:-2,name:"resolveJson"},test:i=>Ze.RETINA_PREFIX.test(i)&&i.endsWith(".json"),parse:Wl.parse};class Up{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Ze,this.loader=new sp,this.cache=nt,this._backgroundLoader=new Kd(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(t={}){var s,o;if(this._initialized){ht("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,t.defaultSearchParams&&this.resolver.setDefaultSearchParams(t.defaultSearchParams),t.basePath&&(this.resolver.basePath=t.basePath),t.bundleIdentifier&&this.resolver.setBundleIdentifier(t.bundleIdentifier),t.manifest){let a=t.manifest;typeof a=="string"&&(a=await this.load(a)),this.resolver.addManifest(a)}const e=((s=t.texturePreference)==null?void 0:s.resolution)??1,n=typeof e=="number"?[e]:e,r=await this._detectFormats({preferredFormats:(o=t.texturePreference)==null?void 0:o.format,skipDetections:t.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:n}}),t.preferences&&this.setPreferences(t.preferences)}add(t){this.resolver.add(t)}async load(t,e){this._initialized||await this.init();const n=Pn(t),r=Lt(t).map(a=>{if(typeof a!="string"){const l=this.resolver.getAlias(a);return l.some(u=>!this.resolver.hasKey(u))&&this.add(a),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),s=this.resolver.resolve(r),o=await this._mapLoadToResolve(s,e);return n?o[r[0]]:o}addBundle(t,e){this.resolver.addBundle(t,e)}async loadBundle(t,e){this._initialized||await this.init();let n=!1;typeof t=="string"&&(n=!0,t=[t]);const r=this.resolver.resolveBundle(t),s={},o=Object.keys(r);let a=0,l=0;const u=()=>{e==null||e(++a/l)},h=o.map(c=>{const f=r[c];return l+=Object.keys(f).length,this._mapLoadToResolve(f,u).then(d=>{s[c]=d})});return await Promise.all(h),n?s[t[0]]:s}async backgroundLoad(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolve(t);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolveBundle(t);Object.values(e).forEach(n=>{this._backgroundLoader.add(Object.values(n))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(t){if(typeof t=="string")return nt.get(t);const e={};for(let n=0;n<t.length;n++)e[n]=nt.get(t[n]);return e}async _mapLoadToResolve(t,e){const n=[...new Set(Object.values(t))];this._backgroundLoader.active=!1;const r=await this.loader.load(n,e);this._backgroundLoader.active=!0;const s={};return n.forEach(o=>{const a=r[o.src],l=[o.src];o.alias&&l.push(...o.alias),l.forEach(u=>{s[u]=a}),nt.set(l,a)}),s}async unload(t){this._initialized||await this.init();const e=Lt(t).map(r=>typeof r!="string"?r.src:r),n=this.resolver.resolve(e);await this._unloadFromResolved(n)}async unloadBundle(t){this._initialized||await this.init(),t=Lt(t);const e=this.resolver.resolveBundle(t),n=Object.keys(e).map(r=>this._unloadFromResolved(e[r]));await Promise.all(n)}async _unloadFromResolved(t){const e=Object.values(t);e.forEach(n=>{nt.remove(n.src)}),await this.loader.unload(e)}async _detectFormats(t){let e=[];t.preferredFormats&&(e=Array.isArray(t.preferredFormats)?t.preferredFormats:[t.preferredFormats]);for(const n of t.detections)t.skipDetections||await n.test()?e=await n.add(e):t.skipDetections||(e=await n.remove(e));return e=e.filter((n,r)=>e.indexOf(n)===r),e}get detections(){return this._detections}setPreferences(t){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(n=>n in t).forEach(n=>{e.config[n]=t[n]})})}}const Rt=new Up;_t.handleByList(I.LoadParser,Rt.loader.parsers).handleByList(I.ResolveParser,Rt.resolver.parsers).handleByList(I.CacheParser,Rt.cache.parsers).handleByList(I.DetectionParser,Rt.detections);_t.add(Zd,Jd,Qd,rp,ep,ip,np,lp,cp,yp,Sp,$l,Bp,qd,jd,Wl,Ep);const qo={loader:I.LoadParser,resolver:I.ResolveParser,cache:I.CacheParser,detection:I.DetectionParser};_t.handle(I.Asset,i=>{const t=i.ref;Object.entries(qo).filter(([e])=>!!t[e]).forEach(([e,n])=>_t.add(Object.assign(t[e],{extension:t[e].extension??n})))},i=>{const t=i.ref;Object.keys(qo).filter(e=>!!t[e]).forEach(e=>_t.remove(t[e]))});var Lp=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,Dp=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,Ko=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;const Hl=class Xl extends ${constructor(t){t={...Xl.defaultOptions,...t};const e=D.from({vertex:{source:Ko,entryPoint:"mainVertex"},fragment:{source:Ko,entryPoint:"mainFragment"}}),n=N.from({vertex:Lp,fragment:Dp,name:"alpha-filter"}),{alpha:r,...s}=t,o=new bs({uAlpha:{value:r,type:"f32"}});super({...s,gpuProgram:e,glProgram:n,resources:{alphaUniforms:o}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};Hl.defaultOptions={alpha:1};let Gp=Hl,Np=0;class $p{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,e,n){const r=new Tt({...this.textureOptions,width:t,height:e,resolution:1,antialias:n,autoGarbageCollect:!0});return new E({source:r,label:`texturePool_${Np++}`})}getOptimalTexture(t,e,n=1,r){let s=Math.ceil(t*n-1e-6),o=Math.ceil(e*n-1e-6);s=Cn(s),o=Cn(o);const a=(s<<17)+(o<<1)+(r?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(s,o,r)),l.source._resolution=n,l.source.width=s/n,l.source.height=o/n,l.source.pixelWidth=s,l.source.pixelHeight=o,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=e,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(t,e=!1){const n=t.source;return this.getOptimalTexture(t.width,t.height,n._resolution,e)}returnTexture(t){const e=this._poolKeyHash[t.uid];this._texturePool[e].push(t)}clear(t){if(t=t!==!1,t)for(const e in this._texturePool){const n=this._texturePool[e];if(n)for(let r=0;r<n.length;r++)n[r].destroy(!0)}this._texturePool={}}}const Bt=new $p,Yl={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},Vp=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function Wp(i){const t=Yl[i],e=t.length;let n=Vp,r="";const s="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let o;for(let a=0;a<i;a++){let l=s.replace("%index%",a.toString());o=a,a>=e&&(o=i-a-1),l=l.replace("%value%",t[o].toString()),r+=l,r+=`
`}return n=n.replace("%blur%",r),n=n.replace("%size%",i.toString()),n}const Hp=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function Xp(i,t){const e=Math.ceil(i/2);let n=Hp,r="",s;t?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let o=0;o<i;o++){let a=s.replace("%index%",o.toString());a=a.replace("%sampleIndex%",`${o-(e-1)}.0`),r+=a,r+=`
`}return n=n.replace("%blur%",r),n=n.replace("%size%",i.toString()),n=n.replace("%dimension%",t?"z":"w"),n}function Yp(i,t){const e=Xp(t,i),n=Wp(t);return N.from({vertex:e,fragment:n,name:`blur-${i?"horizontal":"vertical"}-pass-filter`})}var jp=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function qp(i,t){const e=Yl[t],n=e.length,r=[],s=[],o=[];for(let c=0;c<t;c++){r[c]=`@location(${c}) offset${c}: vec2<f32>,`,i?s[c]=`filteredCord + vec2(${c-n+1} * pixelStrength, 0.0),`:s[c]=`filteredCord + vec2(0.0, ${c-n+1} * pixelStrength),`;const f=c<n?c:t-c-1,d=e[f].toString();o[c]=`finalColor += textureSample(uTexture, uSampler, offset${c}) * ${d};`}const a=r.join(`
`),l=s.join(`
`),u=o.join(`
`),h=jp.replace("%blur-struct%",a).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",a).replace("%blur-sampling%",u).replace("%dimension%",i?"z":"w");return D.from({vertex:{source:h,entryPoint:"mainVertex"},fragment:{source:h,entryPoint:"mainFragment"}})}const jl=class ql extends ${constructor(t){t={...ql.defaultOptions,...t};const e=Yp(t.horizontal,t.kernelSize),n=qp(t.horizontal,t.kernelSize);super({glProgram:e,gpuProgram:n,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,e,n,r){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,e,n,r);else{const s=Bt.getSameSizeTexture(e);let o=e,a=s;this._state.blend=!1;const l=t.renderer.type===In.WEBGPU;for(let u=0;u<this.passes-1;u++){t.applyFilter(this,o,a,u===0?!0:l);const h=a;a=o,o=h}this._state.blend=!0,t.applyFilter(this,o,n,r),Bt.returnTexture(s)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};jl.defaultOptions={strength:8,quality:4,kernelSize:5};let Zo=jl;class Pt extends Ln{constructor(t){t instanceof kt&&(t={context:t});const{context:e,roundPixels:n,...r}=t||{};super({label:"Graphics",...r}),this.renderPipeId="graphics",e?this._context=e:this._context=this._ownedContext=new kt,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=n??!1}set context(t){t!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=t,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}addBounds(t){t.addBounds(this._context.bounds)}containsPoint(t){return this._context.containsPoint(t)}destroy(t){this._ownedContext&&!t?this._ownedContext.destroy(t):(t===!0||(t==null?void 0:t.context)===!0)&&this._context.destroy(t),this._ownedContext=null,this._context=null,super.destroy(t)}_callContextMethod(t,e){return this.context[t](...e),this}setFillStyle(...t){return this._callContextMethod("setFillStyle",t)}setStrokeStyle(...t){return this._callContextMethod("setStrokeStyle",t)}fill(...t){return this._callContextMethod("fill",t)}stroke(...t){return this._callContextMethod("stroke",t)}texture(...t){return this._callContextMethod("texture",t)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...t){return this._callContextMethod("arc",t)}arcTo(...t){return this._callContextMethod("arcTo",t)}arcToSvg(...t){return this._callContextMethod("arcToSvg",t)}bezierCurveTo(...t){return this._callContextMethod("bezierCurveTo",t)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...t){return this._callContextMethod("ellipse",t)}circle(...t){return this._callContextMethod("circle",t)}path(...t){return this._callContextMethod("path",t)}lineTo(...t){return this._callContextMethod("lineTo",t)}moveTo(...t){return this._callContextMethod("moveTo",t)}quadraticCurveTo(...t){return this._callContextMethod("quadraticCurveTo",t)}rect(...t){return this._callContextMethod("rect",t)}roundRect(...t){return this._callContextMethod("roundRect",t)}poly(...t){return this._callContextMethod("poly",t)}regularPoly(...t){return this._callContextMethod("regularPoly",t)}roundPoly(...t){return this._callContextMethod("roundPoly",t)}roundShape(...t){return this._callContextMethod("roundShape",t)}filletRect(...t){return this._callContextMethod("filletRect",t)}chamferRect(...t){return this._callContextMethod("chamferRect",t)}star(...t){return this._callContextMethod("star",t)}svg(...t){return this._callContextMethod("svg",t)}restore(...t){return this._callContextMethod("restore",t)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...t){return this._callContextMethod("rotate",t)}scaleTransform(...t){return this._callContextMethod("scale",t)}setTransform(...t){return this._callContextMethod("setTransform",t)}transform(...t){return this._callContextMethod("transform",t)}translateTransform(...t){return this._callContextMethod("translate",t)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(t){this._context.fillStyle=t}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(t){this._context.strokeStyle=t}clone(t=!1){return t?new Pt(this._context.clone()):(this._ownedContext=null,new Pt(this._context))}lineStyle(t,e,n){F(Y,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const r={};return t&&(r.width=t),e&&(r.color=e),n&&(r.alpha=n),this.context.strokeStyle=r,this}beginFill(t,e){F(Y,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const n={};return t&&(n.color=t),e&&(n.alpha=e),this.context.fillStyle=n,this}endFill(){F(Y,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const t=this.context.strokeStyle;return(t.width!==kt.defaultStrokeStyle.width||t.color!==kt.defaultStrokeStyle.color||t.alpha!==kt.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...t){return F(Y,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",t)}drawEllipse(...t){return F(Y,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",t)}drawPolygon(...t){return F(Y,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",t)}drawRect(...t){return F(Y,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",t)}drawRoundedRect(...t){return F(Y,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",t)}drawStar(...t){return F(Y,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",t)}}class pt extends ot{constructor(...t){let e=t[0];Array.isArray(t[0])&&(e={textures:t[0],autoUpdate:t[1]});const{textures:n,autoUpdate:r,...s}=e,[o]=n;super({...s,texture:o instanceof E?o:o.texture}),this._textures=null,this._durations=null,this._autoUpdate=r??!0,this._isConnectedToTicker=!1,this.animationSpeed=1,this.loop=!0,this.updateAnchor=!1,this.onComplete=null,this.onFrameChange=null,this.onLoop=null,this._currentTime=0,this._playing=!1,this._previousFrame=null,this.textures=n}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(zt.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(zt.shared.add(this.update,this,Tn.HIGH),this._isConnectedToTicker=!0))}gotoAndStop(t){this.stop(),this.currentFrame=t}gotoAndPlay(t){this.currentFrame=t,this.play()}update(t){if(!this._playing)return;const e=t.deltaTime,n=this.animationSpeed*e,r=this.currentFrame;if(this._durations!==null){let s=this._currentTime%1*this._durations[this.currentFrame];for(s+=n/60*1e3;s<0;)this._currentTime--,s+=this._durations[this.currentFrame];const o=Math.sign(this.animationSpeed*e);for(this._currentTime=Math.floor(this._currentTime);s>=this._durations[this.currentFrame];)s-=this._durations[this.currentFrame]*o,this._currentTime+=o;this._currentTime+=s/this._durations[this.currentFrame]}else this._currentTime+=n;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):r!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<r||this.animationSpeed<0&&this.currentFrame>r)&&this.onLoop(),this._updateTexture())}_updateTexture(){const t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this.texture=this._textures[t],this.updateAnchor&&this.anchor.copyFrom(this.texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))}destroy(){this.stop(),super.destroy(),this.onComplete=null,this.onFrameChange=null,this.onLoop=null}static fromFrames(t){const e=[];for(let n=0;n<t.length;++n)e.push(E.from(t[n]));return new pt(e)}static fromImages(t){const e=[];for(let n=0;n<t.length;++n)e.push(E.from(t[n]));return new pt(e)}get totalFrames(){return this._textures.length}get textures(){return this._textures}set textures(t){if(t[0]instanceof E)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(let e=0;e<t.length;e++)this._textures.push(t[e].texture),this._durations.push(t[e].time)}this._previousFrame=null,this.gotoAndStop(0),this._updateTexture()}get currentFrame(){let t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t}set currentFrame(t){if(t<0||t>this.totalFrames-1)throw new Error(`[AnimatedSprite]: Invalid frame index value ${t}, expected to be between 0 and totalFrames ${this.totalFrames}.`);const e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this._updateTexture()}get playing(){return this._playing}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(zt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(zt.shared.add(this.update,this),this._isConnectedToTicker=!0))}}class Kp{constructor({matrix:t,observer:e}={}){this.dirty=!0,this._matrix=t??new H,this.observer=e,this.position=new at(this,0,0),this.scale=new at(this,1,1),this.pivot=new at(this,0,0),this.skew=new at(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const t=this._matrix;return this.dirty&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this.dirty=!1),t}_onUpdate(t){var e;this.dirty=!0,t===this.skew&&this.updateSkew(),(e=this.observer)==null||e._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(t){t.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this.skew))}}const Kl=class cn extends Ln{constructor(...t){let e=t[0]||{};e instanceof E&&(e={texture:e}),t.length>1&&(F(Y,"use new TilingSprite({ texture, width:100, height:100 }) instead"),e.width=t[1],e.height=t[2]),e={...cn.defaultOptions,...e};const{texture:n,anchor:r,tilePosition:s,tileScale:o,tileRotation:a,width:l,height:u,applyAnchorToTexture:h,roundPixels:c,...f}=e??{};super({label:"TilingSprite",...f}),this.renderPipeId="tilingSprite",this.batched=!0,this.allowChildren=!1,this._anchor=new at({_onUpdate:()=>{this.onViewUpdate()}}),this._applyAnchorToTexture=h,this.texture=n,this._width=l??n.width,this._height=u??n.height,this._tileTransform=new Kp({observer:{_onUpdate:()=>this.onViewUpdate()}}),r&&(this.anchor=r),this.tilePosition=s,this.tileScale=o,this.tileRotation=a,this.roundPixels=c??!1}static from(t,e={}){return typeof t=="string"?new cn({texture:nt.get(t),...e}):new cn({texture:t,...e})}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(t){this._texture.textureMatrix.clampMargin=t}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get tilePosition(){return this._tileTransform.position}set tilePosition(t){this._tileTransform.position.copyFrom(t)}get tileScale(){return this._tileTransform.scale}set tileScale(t){typeof t=="number"?this._tileTransform.scale.set(t):this._tileTransform.scale.copyFrom(t)}set tileRotation(t){this._tileTransform.rotation=t}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}set texture(t){t||(t=E.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}set width(t){this._width=t,this.onViewUpdate()}get width(){return this._width}set height(t){this._height=t,this.onViewUpdate()}get height(){return this._height}setSize(t,e){typeof t=="object"&&(e=t.height??t.width,t=t.width),this._width=t,this._height=e??t,this.onViewUpdate()}getSize(t){return t||(t={}),t.width=this._width,t.height=this._height,t}_updateBounds(){const t=this._bounds,e=this._anchor,n=this._width,r=this._height;t.maxX=-e._x*n,t.minX=t.maxX+n,t.maxY=-e._y*r,t.minY=t.maxY+r}addBounds(t){const e=this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}containsPoint(t){const e=this._width,n=this._height,r=-e*this._anchor._x;let s=0;return t.x>=r&&t.x<=r+e&&(s=-n*this._anchor._y,t.y>=s&&t.y<=s+n)}onViewUpdate(){this._boundsDirty=!0,super.onViewUpdate()}destroy(t=!1){if(super.destroy(t),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof t=="boolean"?t:t==null?void 0:t.texture){const n=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(n)}this._texture=null}};Kl.defaultOptions={texture:E.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let Zp=Kl;class Qp extends Ln{constructor(t,e){const{text:n,resolution:r,style:s,anchor:o,width:a,height:l,roundPixels:u,...h}=t;super({...h}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=e,this.text=n??"",this.style=s,this.resolution=r??null,this.allowChildren=!1,this._anchor=new at({_onUpdate:()=>{this.onViewUpdate()}}),o&&(this.anchor=o),this.roundPixels=u??!1,a!==void 0&&(this.width=a),l!==void 0&&(this.height=l)}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}set text(t){t=t.toString(),this._text!==t&&(this._text=t,this.onViewUpdate())}get text(){return this._text}set resolution(t){this._autoResolution=t===null,this._resolution=t,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(t){var e;t=t||{},(e=this._style)==null||e.off("update",this.onViewUpdate,this),t instanceof this._styleClass?this._style=t:this._style=new this._styleClass(t),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(t){this._setWidth(t,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(t){this._setHeight(t,this.bounds.height)}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this.bounds.width,t.height=Math.abs(this.scale.y)*this.bounds.height,t}setSize(t,e){typeof t=="object"?(e=t.height??t.width,t=t.width):e??(e=t),t!==void 0&&this._setWidth(t,this.bounds.width),e!==void 0&&this._setHeight(e,this.bounds.height)}addBounds(t){const e=this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}containsPoint(t){const e=this.bounds.width,n=this.bounds.height,r=-e*this.anchor.x;let s=0;return t.x>=r&&t.x<=r+e&&(s=-n*this.anchor.y,t.y>=s&&t.y<=s+n)}onViewUpdate(){this._boundsDirty=!0,this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(t=!1){super.destroy(t),this.owner=null,this._bounds=null,this._anchor=null,(typeof t=="boolean"?t:t!=null&&t.style)&&this._style.destroy(t),this._style=null,this._text=null}}function Jp(i,t){let e=i[0]??{};return(typeof e=="string"||i[1])&&(F(Y,`use new ${t}({ text: "hi!", style }) instead`),e={text:e,style:i[1]}),e}class st extends Qp{constructor(...t){const e=Jp(t,"Text");super(e,vt),this.renderPipeId="text"}_updateBounds(){const t=this._bounds,e=this._anchor,n=Jr.measureText(this._text,this._style),{width:r,height:s}=n;t.minX=-e._x*r,t.maxX=t.minX+r,t.minY=-e._y*s,t.maxY=t.minY+s}}const li=new Map;function tm(i,t){if(!li.has(i)){const e=new E({source:new ys({resource:i,...t})}),n=()=>{li.get(i)===e&&li.delete(i)};e.once("destroy",n),e.source.once("destroy",n),li.set(i,e)}return li.get(i)}const Zl=class Ql{constructor(t={}){if(this.uid=ut("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,t={...Ql.defaultOptions,...t},this.stencil=t.stencil,this.depth=t.depth,this.isRoot=t.isRoot,typeof t.colorTextures=="number"){this._managedColorTextures=!0;for(let e=0;e<t.colorTextures;e++)this.colorTextures.push(new Tt({width:t.width,height:t.height,resolution:t.resolution,antialias:t.antialias}))}else{this.colorTextures=[...t.colorTextures.map(n=>n.source)];const e=this.colorTexture.source;this.resize(e.width,e.height,e._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(t.depthStencilTexture||this.stencil)&&(t.depthStencilTexture instanceof E||t.depthStencilTexture instanceof Tt?this.depthStencilTexture=t.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){const t=this._size;return t[0]=this.pixelWidth,t[1]=this.pixelHeight,t}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(t){this.resize(t.width,t.height,t._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new Tt({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(t,e,n=this.resolution,r=!1){this.dirtyId++,this.colorTextures.forEach((s,o)=>{r&&o===0||s.source.resize(t,e,n)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(t,e,n)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(t=>{t.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};Zl.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let em=Zl;const ks=class Jl{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(t){this.texture.source.autoDensity=t}get resolution(){return this.texture.source._resolution}set resolution(t){this.texture.source.resize(this.texture.source.width,this.texture.source.height,t)}init(t){t={...Jl.defaultOptions,...t},t.view&&(F(Y,"ViewSystem.view has been renamed to ViewSystem.canvas"),t.canvas=t.view),this.screen=new lt(0,0,t.width,t.height),this.canvas=t.canvas||tt.get().createCanvas(),this.antialias=!!t.antialias,this.texture=tm(this.canvas,t),this.renderTarget=new em({colorTextures:[this.texture],depth:!!t.depth,isRoot:!0}),this.texture.source.transparent=t.backgroundAlpha<1,this.resolution=t.resolution}resize(t,e,n){this.texture.source.resize(t,e,n),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(t=!1){(typeof t=="boolean"?t:!!(t!=null&&t.removeView))&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};ks.extension={type:[I.WebGLSystem,I.WebGPUSystem,I.CanvasSystem],name:"view",priority:0};ks.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let im=ks;_t.add(uh,hh);let J=null;function nm(){J={loading:new vt({fontFamily:bt.light,fontSize:80,fill:"#00ff00",dropShadow:!0,dropShadowColor:"#777777",dropShadowBlur:4,dropShadowAngle:0,dropShadowDistance:0}),level:new vt({fontFamily:bt.normal,fontSize:32,fill:"#ffff00",align:"center"}),score:new vt({fontFamily:bt.normal,fontSize:38,fill:"#00ff00",align:"center"}),infoBonus:new vt({fontFamily:bt.normal,fontSize:24,fill:"#00ff00",align:"center"}),label:new vt({fontFamily:bt.light,fontSize:26,fill:"#ffff00",align:"center"}),infoPrice:new vt({fontFamily:bt.normal,fontSize:20,fill:"#ffffff",align:"center"}),message:new vt({fontFamily:bt.normal,fontSize:36,fill:"#ff0000",align:"center",dropShadow:!0,dropShadowColor:"#000000",dropShadowBlur:6,dropShadowAngle:0,dropShadowDistance:0}),mobileMessage:new vt({fontFamily:bt.normal,fontSize:32,fill:"#ff0000",align:"center",dropShadow:!0,dropShadowColor:"#000000",dropShadowBlur:4,dropShadowAngle:0,dropShadowDistance:0}),adTypeOn:new vt({fontFamily:bt.normal,fontSize:24,fill:"#00ff00",align:"center",dropShadow:!0,dropShadowColor:"#000000",dropShadowBlur:6,dropShadowAngle:0,dropShadowDistance:0,wordWrap:!0,wordWrapWidth:300}),adTypeOff:new vt({fontFamily:bt.normal,fontSize:24,fill:"#ffff00",align:"center",dropShadow:!0,dropShadowColor:"#000000",dropShadowBlur:6,dropShadowAngle:0,dropShadowDistance:0,wordWrap:!0,wordWrapWidth:300})}}let tu;function rm(i){return tu=i,i}function Ii(){return tu}class es{static setParamValue(t,e){if(t.setValueAtTime){const n=Ii().context;t.setValueAtTime(e,n.audioContext.currentTime)}else t.value=e;return e}}class sm extends xt{constructor(){super(...arguments),this.speed=1,this.muted=!1,this.volume=1,this.paused=!1}refresh(){this.emit("refresh")}refreshPaused(){this.emit("refreshPaused")}get filters(){return console.warn("HTML Audio does not support filters"),null}set filters(t){console.warn("HTML Audio does not support filters")}get audioContext(){return console.warn("HTML Audio does not support audioContext"),null}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this.paused}destroy(){this.removeAllListeners()}}let om=0;const is=class extends xt{constructor(i){super(),this.id=om++,this.init(i)}set(i,t){if(this[i]===void 0)throw new Error(`Property with name ${i} does not exist.`);switch(i){case"speed":this.speed=t;break;case"volume":this.volume=t;break;case"paused":this.paused=t;break;case"loop":this.loop=t;break;case"muted":this.muted=t;break}return this}get progress(){const{currentTime:i}=this._source;return i/this._duration}get paused(){return this._paused}set paused(i){this._paused=i,this.refreshPaused()}_onPlay(){this._playing=!0}_onPause(){this._playing=!1}init(i){this._playing=!1,this._duration=i.source.duration;const t=this._source=i.source.cloneNode(!1);t.src=i.parent.url,t.onplay=this._onPlay.bind(this),t.onpause=this._onPause.bind(this),i.context.on("refresh",this.refresh,this),i.context.on("refreshPaused",this.refreshPaused,this),this._media=i}_internalStop(){this._source&&this._playing&&(this._source.onended=null,this._source.pause())}stop(){this._internalStop(),this._source&&this.emit("stop")}get speed(){return this._speed}set speed(i){this._speed=i,this.refresh()}get volume(){return this._volume}set volume(i){this._volume=i,this.refresh()}get loop(){return this._loop}set loop(i){this._loop=i,this.refresh()}get muted(){return this._muted}set muted(i){this._muted=i,this.refresh()}get filters(){return console.warn("HTML Audio does not support filters"),null}set filters(i){console.warn("HTML Audio does not support filters")}refresh(){const i=this._media.context,t=this._media.parent;this._source.loop=this._loop||t.loop;const e=i.volume*(i.muted?0:1),n=t.volume*(t.muted?0:1),r=this._volume*(this._muted?0:1);this._source.volume=r*e*n,this._source.playbackRate=this._speed*i.speed*t.speed}refreshPaused(){const i=this._media.context,t=this._media.parent,e=this._paused||t.paused||i.paused;e!==this._pausedReal&&(this._pausedReal=e,e?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._source.currentTime,end:this._end,volume:this._volume,speed:this._speed,loop:this._loop})),this.emit("pause",e))}play(i){const{start:t,end:e,speed:n,loop:r,volume:s,muted:o}=i;e&&console.assert(e>t,"End time is before start time"),this._speed=n,this._volume=s,this._loop=!!r,this._muted=o,this.refresh(),this.loop&&e!==null&&(console.warn('Looping not support when specifying an "end" time'),this.loop=!1),this._start=t,this._end=e||this._duration,this._start=Math.max(0,this._start-is.PADDING),this._end=Math.min(this._end+is.PADDING,this._duration),this._source.onloadedmetadata=()=>{this._source&&(this._source.currentTime=t,this._source.onloadedmetadata=null,this.emit("progress",t/this._duration,this._duration),zt.shared.add(this._onUpdate,this))},this._source.onended=this._onComplete.bind(this),this._source.play(),this.emit("start")}_onUpdate(){this.emit("progress",this.progress,this._duration),this._source.currentTime>=this._end&&!this._source.loop&&this._onComplete()}_onComplete(){zt.shared.remove(this._onUpdate,this),this._internalStop(),this.emit("progress",1,this._duration),this.emit("end",this)}destroy(){zt.shared.remove(this._onUpdate,this),this.removeAllListeners();const i=this._source;i&&(i.onended=null,i.onplay=null,i.onpause=null,this._internalStop()),this._source=null,this._speed=1,this._volume=1,this._loop=!1,this._end=null,this._start=0,this._duration=0,this._playing=!1,this._pausedReal=!1,this._paused=!1,this._muted=!1,this._media&&(this._media.context.off("refresh",this.refresh,this),this._media.context.off("refreshPaused",this.refreshPaused,this),this._media=null)}toString(){return`[HTMLAudioInstance id=${this.id}]`}};let eu=is;eu.PADDING=.1;class am extends xt{init(t){this.parent=t,this._source=t.options.source||new Audio,t.url&&(this._source.src=t.url)}create(){return new eu(this)}get isPlayable(){return!!this._source&&this._source.readyState===4}get duration(){return this._source.duration}get context(){return this.parent.context}get filters(){return null}set filters(t){console.warn("HTML Audio does not support filters")}destroy(){this.removeAllListeners(),this.parent=null,this._source&&(this._source.src="",this._source.load(),this._source=null)}get source(){return this._source}load(t){const e=this._source,n=this.parent;if(e.readyState===4){n.isLoaded=!0;const l=n.autoPlayStart();t&&setTimeout(()=>{t(null,n,l)},0);return}if(!n.url){t(new Error("sound.url or sound.source must be set"));return}e.src=n.url;const r=()=>{a(),n.isLoaded=!0;const l=n.autoPlayStart();t&&t(null,n,l)},s=()=>{a(),t&&t(new Error("Sound loading has been aborted"))},o=()=>{a();const l=`Failed to load audio element (code: ${e.error.code})`;t?t(new Error(l)):console.error(l)},a=()=>{e.removeEventListener("canplaythrough",r),e.removeEventListener("load",r),e.removeEventListener("abort",s),e.removeEventListener("error",o)};e.addEventListener("canplaythrough",r,!1),e.addEventListener("load",r,!1),e.addEventListener("abort",s,!1),e.addEventListener("error",o,!1),e.load()}}class lm{constructor(t,e){this.parent=t,Object.assign(this,e),this.duration=this.end-this.start,console.assert(this.duration>0,"End time must be after start time")}play(t){return this.parent.play({complete:t,speed:this.speed||this.parent.speed,end:this.end,start:this.start,loop:this.loop})}destroy(){this.parent=null}}const Fn=["ogg","oga","opus","m4a","mp3","mpeg","wav","aiff","wma","mid","caf"],um=["audio/mpeg","audio/ogg"],zn={};function hm(i){const t={m4a:"audio/mp4",oga:"audio/ogg",opus:'audio/ogg; codecs="opus"',caf:'audio/x-caf; codecs="opus"'},e=document.createElement("audio"),n={},r=/^no$/;Fn.forEach(s=>{const o=e.canPlayType(`audio/${s}`).replace(r,""),a=t[s]?e.canPlayType(t[s]).replace(r,""):"";n[s]=!!o||!!a}),Object.assign(zn,n)}hm();let cm=0;class fm extends xt{constructor(t){super(),this.id=cm++,this._media=null,this._paused=!1,this._muted=!1,this._elapsed=0,this.init(t)}set(t,e){if(this[t]===void 0)throw new Error(`Property with name ${t} does not exist.`);switch(t){case"speed":this.speed=e;break;case"volume":this.volume=e;break;case"muted":this.muted=e;break;case"loop":this.loop=e;break;case"paused":this.paused=e;break}return this}stop(){this._source&&(this._internalStop(),this.emit("stop"))}get speed(){return this._speed}set speed(t){this._speed=t,this.refresh(),this._update(!0)}get volume(){return this._volume}set volume(t){this._volume=t,this.refresh()}get muted(){return this._muted}set muted(t){this._muted=t,this.refresh()}get loop(){return this._loop}set loop(t){this._loop=t,this.refresh()}get filters(){return this._filters}set filters(t){var e;this._filters&&((e=this._filters)==null||e.filter(n=>n).forEach(n=>n.disconnect()),this._filters=null,this._source.connect(this._gain)),this._filters=t!=null&&t.length?t.slice(0):null,this.refresh()}refresh(){if(!this._source)return;const t=this._media.context,e=this._media.parent;this._source.loop=this._loop||e.loop;const n=t.volume*(t.muted?0:1),r=e.volume*(e.muted?0:1),s=this._volume*(this._muted?0:1);es.setParamValue(this._gain.gain,s*r*n),es.setParamValue(this._source.playbackRate,this._speed*e.speed*t.speed),this.applyFilters()}applyFilters(){var t;if((t=this._filters)!=null&&t.length){this._source.disconnect();let e=this._source;this._filters.forEach(n=>{e.connect(n.destination),e=n}),e.connect(this._gain)}}refreshPaused(){const t=this._media.context,e=this._media.parent,n=this._paused||e.paused||t.paused;n!==this._pausedReal&&(this._pausedReal=n,n?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._elapsed%this._duration,end:this._end,speed:this._speed,loop:this._loop,volume:this._volume})),this.emit("pause",n))}play(t){const{start:e,end:n,speed:r,loop:s,volume:o,muted:a,filters:l}=t;n&&console.assert(n>e,"End time is before start time"),this._paused=!1;const{source:u,gain:h}=this._media.nodes.cloneBufferSource();this._source=u,this._gain=h,this._speed=r,this._volume=o,this._loop=!!s,this._muted=a,this._filters=l,this.refresh();const c=this._source.buffer.duration;this._duration=c,this._end=n,this._lastUpdate=this._now(),this._elapsed=e,this._source.onended=this._onComplete.bind(this),this._loop?(this._source.loopEnd=n,this._source.loopStart=e,this._source.start(0,e)):n?this._source.start(0,e,n-e):this._source.start(0,e),this.emit("start"),this._update(!0),this.enableTicker(!0)}enableTicker(t){zt.shared.remove(this._updateListener,this),t&&zt.shared.add(this._updateListener,this)}get progress(){return this._progress}get paused(){return this._paused}set paused(t){this._paused=t,this.refreshPaused()}destroy(){var t;this.removeAllListeners(),this._internalStop(),this._gain&&(this._gain.disconnect(),this._gain=null),this._media&&(this._media.context.events.off("refresh",this.refresh,this),this._media.context.events.off("refreshPaused",this.refreshPaused,this),this._media=null),(t=this._filters)==null||t.forEach(e=>e.disconnect()),this._filters=null,this._end=null,this._speed=1,this._volume=1,this._loop=!1,this._elapsed=0,this._duration=0,this._paused=!1,this._muted=!1,this._pausedReal=!1}toString(){return`[WebAudioInstance id=${this.id}]`}_now(){return this._media.context.audioContext.currentTime}_updateListener(){this._update()}_update(t=!1){if(this._source){const e=this._now(),n=e-this._lastUpdate;if(n>0||t){const r=this._source.playbackRate.value;this._elapsed+=n*r,this._lastUpdate=e;const s=this._duration;let o;if(this._source.loopStart){const a=this._source.loopEnd-this._source.loopStart;o=(this._source.loopStart+this._elapsed%a)/s}else o=this._elapsed%s/s;this._progress=o,this.emit("progress",this._progress,s)}}}init(t){this._media=t,t.context.events.on("refresh",this.refresh,this),t.context.events.on("refreshPaused",this.refreshPaused,this)}_internalStop(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.stop(0),this._source.disconnect();try{this._source.buffer=null}catch(t){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",t)}this._source=null}}_onComplete(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.disconnect();try{this._source.buffer=null}catch(t){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",t)}}this._source=null,this._progress=1,this.emit("progress",1,this._duration),this.emit("end",this)}}class iu{constructor(t,e){this._output=e,this._input=t}get destination(){return this._input}get filters(){return this._filters}set filters(t){if(this._filters&&(this._filters.forEach(e=>{e&&e.disconnect()}),this._filters=null,this._input.connect(this._output)),t&&t.length){this._filters=t.slice(0),this._input.disconnect();let e=null;t.forEach(n=>{e===null?this._input.connect(n.destination):e.connect(n.destination),e=n}),e.connect(this._output)}}destroy(){this.filters=null,this._input=null,this._output=null}}const nu=class extends iu{constructor(i){const t=i.audioContext,e=t.createBufferSource(),n=t.createGain(),r=t.createAnalyser();e.connect(r),r.connect(n),n.connect(i.destination),super(r,n),this.context=i,this.bufferSource=e,this.gain=n,this.analyser=r}get script(){return this._script||(this._script=this.context.audioContext.createScriptProcessor(nu.BUFFER_SIZE),this._script.connect(this.context.destination)),this._script}destroy(){super.destroy(),this.bufferSource.disconnect(),this._script&&this._script.disconnect(),this.gain.disconnect(),this.analyser.disconnect(),this.bufferSource=null,this._script=null,this.gain=null,this.analyser=null,this.context=null}cloneBufferSource(){const i=this.bufferSource,t=this.context.audioContext.createBufferSource();t.buffer=i.buffer,es.setParamValue(t.playbackRate,i.playbackRate.value),t.loop=i.loop;const e=this.context.audioContext.createGain();return t.connect(e),e.connect(this.destination),{source:t,gain:e}}get bufferSize(){return this.script.bufferSize}};let ru=nu;ru.BUFFER_SIZE=0;class dm{init(t){this.parent=t,this._nodes=new ru(this.context),this._source=this._nodes.bufferSource,this.source=t.options.source}destroy(){this.parent=null,this._nodes.destroy(),this._nodes=null;try{this._source.buffer=null}catch(t){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",t)}this._source=null,this.source=null}create(){return new fm(this)}get context(){return this.parent.context}get isPlayable(){return!!this._source&&!!this._source.buffer}get filters(){return this._nodes.filters}set filters(t){this._nodes.filters=t}get duration(){return console.assert(this.isPlayable,"Sound not yet playable, no duration"),this._source.buffer.duration}get buffer(){return this._source.buffer}set buffer(t){this._source.buffer=t}get nodes(){return this._nodes}load(t){this.source?this._decode(this.source,t):this.parent.url?this._loadUrl(t):t?t(new Error("sound.url or sound.source must be set")):console.error("sound.url or sound.source must be set")}async _loadUrl(t){const e=this.parent.url,n=await tt.get().fetch(e);this._decode(await n.arrayBuffer(),t)}_decode(t,e){const n=(r,s)=>{if(r)e&&e(r);else{this.parent.isLoaded=!0,this.buffer=s;const o=this.parent.autoPlayStart();e&&e(null,this.parent,o)}};t instanceof AudioBuffer?n(null,t):this.parent.context.decode(t,n)}}const Be=class{static from(i){let t={};typeof i=="string"?t.url=i:i instanceof ArrayBuffer||i instanceof AudioBuffer||i instanceof HTMLAudioElement?t.source=i:Array.isArray(i)?t.url=i:t=i,t={autoPlay:!1,singleInstance:!1,url:null,source:null,preload:!1,volume:1,speed:1,complete:null,loaded:null,loop:!1,...t},Object.freeze(t);const e=Ii().useLegacy?new am:new dm;return new Be(e,t)}constructor(i,t){this.media=i,this.options=t,this._instances=[],this._sprites={},this.media.init(this);const e=t.complete;this._autoPlayOptions=e?{complete:e}:null,this.isLoaded=!1,this._preloadQueue=null,this.isPlaying=!1,this.autoPlay=t.autoPlay,this.singleInstance=t.singleInstance,this.preload=t.preload||this.autoPlay,this.url=Array.isArray(t.url)?this.preferUrl(t.url):t.url,this.speed=t.speed,this.volume=t.volume,this.loop=t.loop,t.sprites&&this.addSprites(t.sprites),this.preload&&this._preload(t.loaded)}preferUrl(i){const[t]=i.map(e=>({url:e,ext:gt.extname(e).slice(1)})).filter(({ext:e})=>zn[e]).sort((e,n)=>Fn.indexOf(e.ext)-Fn.indexOf(n.ext));if(!t)throw new Error("No supported file type found");return t.url}get context(){return Ii().context}pause(){return this.isPlaying=!1,this.paused=!0,this}resume(){return this.isPlaying=this._instances.length>0,this.paused=!1,this}get paused(){return this._paused}set paused(i){this._paused=i,this.refreshPaused()}get speed(){return this._speed}set speed(i){this._speed=i,this.refresh()}get filters(){return this.media.filters}set filters(i){this.media.filters=i}addSprites(i,t){if(typeof i=="object"){const n={};for(const r in i)n[r]=this.addSprites(r,i[r]);return n}console.assert(!this._sprites[i],`Alias ${i} is already taken`);const e=new lm(this,t);return this._sprites[i]=e,e}destroy(){this._removeInstances(),this.removeSprites(),this.media.destroy(),this.media=null,this._sprites=null,this._instances=null}removeSprites(i){if(i){const t=this._sprites[i];t!==void 0&&(t.destroy(),delete this._sprites[i])}else for(const t in this._sprites)this.removeSprites(t);return this}get isPlayable(){return this.isLoaded&&this.media&&this.media.isPlayable}stop(){if(!this.isPlayable)return this.autoPlay=!1,this._autoPlayOptions=null,this;this.isPlaying=!1;for(let i=this._instances.length-1;i>=0;i--)this._instances[i].stop();return this}play(i,t){let e;if(typeof i=="string"?e={sprite:i,loop:this.loop,complete:t}:typeof i=="function"?(e={},e.complete=i):e=i,e={complete:null,loaded:null,sprite:null,end:null,start:0,volume:1,speed:1,muted:!1,loop:!1,...e||{}},e.sprite){const r=e.sprite;console.assert(!!this._sprites[r],`Alias ${r} is not available`);const s=this._sprites[r];e.start=s.start+(e.start||0),e.end=s.end,e.speed=s.speed||1,e.loop=s.loop||e.loop,delete e.sprite}if(e.offset&&(e.start=e.offset),!this.isLoaded)return this._preloadQueue?new Promise(r=>{this._preloadQueue.push(()=>{r(this.play(e))})}):(this._preloadQueue=[],this.autoPlay=!0,this._autoPlayOptions=e,new Promise((r,s)=>{this._preload((o,a,l)=>{this._preloadQueue.forEach(u=>u()),this._preloadQueue=null,o?s(o):(e.loaded&&e.loaded(o,a,l),r(l))})}));(this.singleInstance||e.singleInstance)&&this._removeInstances();const n=this._createInstance();return this._instances.push(n),this.isPlaying=!0,n.once("end",()=>{e.complete&&e.complete(this),this._onComplete(n)}),n.once("stop",()=>{this._onComplete(n)}),n.play(e),n}refresh(){const i=this._instances.length;for(let t=0;t<i;t++)this._instances[t].refresh()}refreshPaused(){const i=this._instances.length;for(let t=0;t<i;t++)this._instances[t].refreshPaused()}get volume(){return this._volume}set volume(i){this._volume=i,this.refresh()}get muted(){return this._muted}set muted(i){this._muted=i,this.refresh()}get loop(){return this._loop}set loop(i){this._loop=i,this.refresh()}_preload(i){this.media.load(i)}get instances(){return this._instances}get sprites(){return this._sprites}get duration(){return this.media.duration}autoPlayStart(){let i;return this.autoPlay&&(i=this.play(this._autoPlayOptions)),i}_removeInstances(){for(let i=this._instances.length-1;i>=0;i--)this._poolInstance(this._instances[i]);this._instances.length=0}_onComplete(i){if(this._instances){const t=this._instances.indexOf(i);t>-1&&this._instances.splice(t,1),this.isPlaying=this._instances.length>0}this._poolInstance(i)}_createInstance(){if(Be._pool.length>0){const i=Be._pool.pop();return i.init(this.media),i}return this.media.create()}_poolInstance(i){i.destroy(),Be._pool.indexOf(i)<0&&Be._pool.push(i)}};let kn=Be;kn._pool=[];class Mi extends iu{constructor(){const t=window,e=new Mi.AudioContext,n=e.createDynamicsCompressor(),r=e.createAnalyser();r.connect(n),n.connect(e.destination),super(r,n),this.autoPause=!0,this._ctx=e,this._offlineCtx=new Mi.OfflineAudioContext(1,2,t.OfflineAudioContext?Math.max(8e3,Math.min(96e3,e.sampleRate)):44100),this.compressor=n,this.analyser=r,this.events=new xt,this.volume=1,this.speed=1,this.muted=!1,this.paused=!1,this._locked=e.state==="suspended"&&("ontouchstart"in globalThis||"onclick"in globalThis),this._locked&&(this._unlock(),this._unlock=this._unlock.bind(this),document.addEventListener("mousedown",this._unlock,!0),document.addEventListener("touchstart",this._unlock,!0),document.addEventListener("touchend",this._unlock,!0)),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),globalThis.addEventListener("focus",this.onFocus),globalThis.addEventListener("blur",this.onBlur)}onFocus(){if(!this.autoPause)return;const t=this._ctx.state;(t==="suspended"||t==="interrupted"||!this._locked)&&(this.paused=this._pausedOnBlur,this.refreshPaused())}onBlur(){this.autoPause&&(this._locked||(this._pausedOnBlur=this._paused,this.paused=!0,this.refreshPaused()))}_unlock(){this._locked&&(this.playEmptySound(),this._ctx.state==="running"&&(document.removeEventListener("mousedown",this._unlock,!0),document.removeEventListener("touchend",this._unlock,!0),document.removeEventListener("touchstart",this._unlock,!0),this._locked=!1))}playEmptySound(){const t=this._ctx.createBufferSource();t.buffer=this._ctx.createBuffer(1,1,22050),t.connect(this._ctx.destination),t.start(0,0,0),t.context.state==="suspended"&&t.context.resume()}static get AudioContext(){const t=window;return t.AudioContext||t.webkitAudioContext||null}static get OfflineAudioContext(){const t=window;return t.OfflineAudioContext||t.webkitOfflineAudioContext||null}destroy(){super.destroy();const t=this._ctx;typeof t.close<"u"&&t.close(),globalThis.removeEventListener("focus",this.onFocus),globalThis.removeEventListener("blur",this.onBlur),this.events.removeAllListeners(),this.analyser.disconnect(),this.compressor.disconnect(),this.analyser=null,this.compressor=null,this.events=null,this._offlineCtx=null,this._ctx=null}get audioContext(){return this._ctx}get offlineContext(){return this._offlineCtx}set paused(t){t&&this._ctx.state==="running"?this._ctx.suspend():!t&&this._ctx.state==="suspended"&&this._ctx.resume(),this._paused=t}get paused(){return this._paused}refresh(){this.events.emit("refresh")}refreshPaused(){this.events.emit("refreshPaused")}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this._paused}decode(t,e){const n=s=>{e(new Error((s==null?void 0:s.message)||"Unable to decode file"))},r=this._offlineCtx.decodeAudioData(t,s=>{e(null,s)},n);r&&r.catch(n)}}class pm{constructor(){this.init()}init(){return this.supported&&(this._webAudioContext=new Mi),this._htmlAudioContext=new sm,this._sounds={},this.useLegacy=!this.supported,this}get context(){return this._context}get filtersAll(){return this.useLegacy?[]:this._context.filters}set filtersAll(t){this.useLegacy||(this._context.filters=t)}get supported(){return Mi.AudioContext!==null}add(t,e){if(typeof t=="object"){const s={};for(const o in t){const a=this._getOptions(t[o],e);s[o]=this.add(o,a)}return s}if(console.assert(!this._sounds[t],`Sound with alias ${t} already exists.`),e instanceof kn)return this._sounds[t]=e,e;const n=this._getOptions(e),r=kn.from(n);return this._sounds[t]=r,r}_getOptions(t,e){let n;return typeof t=="string"?n={url:t}:Array.isArray(t)?n={url:t}:t instanceof ArrayBuffer||t instanceof AudioBuffer||t instanceof HTMLAudioElement?n={source:t}:n=t,n={...n,...e||{}},n}get useLegacy(){return this._useLegacy}set useLegacy(t){this._useLegacy=t,this._context=!t&&this.supported?this._webAudioContext:this._htmlAudioContext}get disableAutoPause(){return!this._webAudioContext.autoPause}set disableAutoPause(t){this._webAudioContext.autoPause=!t}remove(t){return this.exists(t,!0),this._sounds[t].destroy(),delete this._sounds[t],this}get volumeAll(){return this._context.volume}set volumeAll(t){this._context.volume=t,this._context.refresh()}get speedAll(){return this._context.speed}set speedAll(t){this._context.speed=t,this._context.refresh()}togglePauseAll(){return this._context.togglePause()}pauseAll(){return this._context.paused=!0,this._context.refreshPaused(),this}resumeAll(){return this._context.paused=!1,this._context.refreshPaused(),this}toggleMuteAll(){return this._context.toggleMute()}muteAll(){return this._context.muted=!0,this._context.refresh(),this}unmuteAll(){return this._context.muted=!1,this._context.refresh(),this}removeAll(){for(const t in this._sounds)this._sounds[t].destroy(),delete this._sounds[t];return this}stopAll(){for(const t in this._sounds)this._sounds[t].stop();return this}exists(t,e=!1){const n=!!this._sounds[t];return e&&console.assert(n,`No sound matching alias '${t}'.`),n}isPlaying(){for(const t in this._sounds)if(this._sounds[t].isPlaying)return!0;return!1}find(t){return this.exists(t,!0),this._sounds[t]}play(t,e){return this.find(t).play(e)}stop(t){return this.find(t).stop()}pause(t){return this.find(t).pause()}resume(t){return this.find(t).resume()}volume(t,e){const n=this.find(t);return e!==void 0&&(n.volume=e),n.volume}speed(t,e){const n=this.find(t);return e!==void 0&&(n.speed=e),n.speed}duration(t){return this.find(t).duration}close(){return this.removeAll(),this._sounds=null,this._webAudioContext&&(this._webAudioContext.destroy(),this._webAudioContext=null),this._htmlAudioContext&&(this._htmlAudioContext.destroy(),this._htmlAudioContext=null),this._context=null,this}}const Qo=i=>{var n;const t=i.src;let e=(n=i==null?void 0:i.alias)==null?void 0:n[0];return(!e||i.src===e)&&(e=gt.basename(t,gt.extname(t))),e},mm={extension:I.Asset,detection:{test:async()=>!0,add:async i=>[...i,...Fn.filter(t=>zn[t])],remove:async i=>i.filter(t=>i.includes(t))},loader:{name:"sound",extension:{type:[I.LoadParser],priority:Zt.High},test(i){const t=gt.extname(i).slice(1);return!!zn[t]||um.some(e=>i.startsWith(`data:${e}`))},async load(i,t){const e=await new Promise((n,r)=>kn.from({...t.data,url:i,preload:!0,loaded(s,o){var a,l;s?r(s):n(o),(l=(a=t.data)==null?void 0:a.loaded)==null||l.call(a,s,o)}}));return Ii().add(Qo(t),e),e},async unload(i,t){Ii().remove(Qo(t))}}};_t.add(mm);const su=rm(new pm);let Ri=!0,Jo=!0;function ta(){Ri=!0,Rs=!0}function gm(){Ri=!1,Rs=!1}function xm(){return Ri}const mi=new Set;let ye=null;function ct(i){if(Ri){if(ye)return mi.add(i);ye=i.play(),ye.on("end",()=>{if(ye=null,mi.size===0)return;const t=mi.values().next().value;mi.delete(t),ct(t)})}}function vm(){ye&&ye.stop(),ye=null,mi.clear()}function Gt(i){Ri&&(i.stop(),i.play())}let Fi=null,bi=0,Se=null,Rs=!0;function Os(){Se&&Se.pause()}function zi(){if(Rs){if(Se)return Se.isPlaying?null:Se.resume();Fi||(Fi=Object.values(fn)),ou()}}function ou(){Jo&&(Jo=!1,bi=Math.floor(Math.random()*Fi.length)),Se=su.add("bgm",Fi[bi]),Se.play({volume:.36}).then(i=>i.on("end",ym))}function ym(){bi++,bi===Fi.length&&(bi=0),su.remove("bgm"),ou()}const C=new xt,S={screenResize:"screenResize",clearSnow:"clearSnow",needVoiceDoIt:"needVoiceDoIt",getClick:"getClick",setAutoCharge:"setAutoCharge",setTurboCharge:"setTurboCharge",requestAD:"requestAD",requestUpgradeClick:"requestUpgradeClick",requestUpgradeAuto:"requestUpgradeAuto",requestStartTurbo:"requestStartTurbo",responseStopTurbo:"responseStopTurbo",updateUILevel:"updateUILevel",updateUIPoints:"updateUIPoints",updateUIClickPanel:"updateUIClickPanel",updateUIAutoPanel:"updateUIAutoPanel",updateUITurboPanel:"updateUITurboPanel",updateUITurboTimeout:"updateUITurboTimeout",updateBuildingAuto:"updateBuildingAuto",updateBuildingTurbo:"updateBuildingTurbo",updateTowerTurbo:"updateTowerTurbo",updateTowerAuto:"updateTowerAuto",updateTowerClick:"updateTowerClick",spyBotGetDamage:"spyBotGetDamage",showBonusUI:"showBonusUI",drawCharge:"drawCharge",drawSkyCharge:"drawSkyCharge",timeAcceleration:"timeAcceleration",setAdButtonAvailable:"setAdButtonAvailable",getADBonusUI:"getADBonusUI"};function _m(i){C.emit(S.screenResize,i)}function bm(){C.emit(S.clearSnow)}function Sm(){C.emit(S.needVoiceDoIt)}function wm(){C.emit(S.getClick)}function Cm(){C.emit(S.setAutoCharge)}function Am(){C.emit(S.setTurboCharge)}function Tm(i){C.emit(S.requestAD,i)}function Pm(){C.emit(S.requestUpgradeClick)}function Im(){C.emit(S.requestUpgradeAuto)}function Mm(){C.emit(S.requestStartTurbo)}function ea(){C.emit(S.responseStopTurbo)}function Fm(i){C.emit(S.updateUILevel,i)}function gi(i){C.emit(S.updateUIPoints,i)}function zm(){C.emit(S.updateUIClickPanel)}function km(){C.emit(S.updateUIAutoPanel)}function Rm(){C.emit(S.updateUITurboPanel)}function ns(i){C.emit(S.updateUITurboTimeout,i)}function ia(i){C.emit(S.updateBuildingAuto,i)}function na(i){C.emit(S.updateBuildingTurbo,i)}function Om(i){C.emit(S.updateTowerTurbo,i)}function Bm(i){C.emit(S.updateTowerAuto,i)}function Em(i){C.emit(S.updateTowerClick,i)}function ra(i){C.emit(S.spyBotGetDamage,i)}function ui(i){C.emit(S.showBonusUI,i)}function Bs(i){C.emit(S.drawCharge,i)}function Um(i){C.emit(S.drawSkyCharge,i)}function Ar(i){C.emit(S.timeAcceleration,i)}function sa(i){C.emit(S.setAdButtonAvailable,i)}function oa(i){C.emit(S.getADBonusUI,i)}const Ct=new gl,Lm={background:0,antialias:!0,resolution:2,resizeTo:window};Promise.all([Ct.init(Lm)]).then(Dm);function Dm(){Ct.ticker.add(i=>Wm(i)),document.body.append(Ct.canvas),Ct.canvas.oncontextmenu=i=>i.preventDefault(),Es()}let Rn=[];const Mt={};function Es(){Mt.width=Ct.screen.width,Mt.height=Ct.screen.height,Mt.centerX=Ct.screen.width/2,Mt.centerY=Ct.screen.height/2,Mt.minSize=Ct.screen.width>Ct.screen.height?Ct.screen.height:Ct.screen.width,Mt.offsetX=(Mt.width-Mt.minSize)/2,Mt.offsetY=(Mt.height-Mt.minSize)/2,_m(Mt)}function Oi(){return Mt}function re(i){Ct.stage.addChild(i)}function au(i){Ct.stage.removeChild(i)}let Gm=window.matchMedia("(orientation: portrait)");Gm.addEventListener("change",()=>setTimeout(Es,0));window.addEventListener("resize",()=>setTimeout(Es,0));let lu=!0;window.addEventListener("focus",zi);window.addEventListener("focus",bm);window.addEventListener("blur",Os);"hidden"in document&&document.addEventListener("visibilitychange",Nm);function Nm(i){i?Os():zi(),lu=!i}function $m(){return lu}let Us=!0;function Vm(){Us=!1}function aa(){Us=!0}function Wm(i){Us&&Rn.forEach(t=>t.tick(i))}function wt(i){"tick"in i?Rn.push(i):console.warn("TRY TO ADD ELEMENT IN TICKER WITHOUT .tick() METHOD:",i)}function Nt(i){Rn=Rn.filter(t=>t!==i)}class Hm extends Z{constructor(){super(),this.text=new st({text:"0 %",style:J.loading}),this.text.anchor.set(.5,1),this.text.position.y=10,this.addChild(this.text),this.screenResize(Oi()),re(this)}delete(){this.removeAllListeners(),au(this),this.destroy()}screenResize(t){this.position.x=t.centerX,this.position.y=t.centerY}update(t){const e=Math.round(t);this.text.text=e+" %"}}const Bi={sprites:"./sprites/",sounds:"./sounds/",music:"./music/",voices:"./voices/",fonts:"./fonts/"},O={finger:"finger_220x220px.webp",night_sky:"night_sky_400x400px.webp",moon:"moon_212x212px.webp",snow_bg:"snow_bg_2048x920.webp",close_button:"close_button_280x202px.webp",ad_screens:"ad_screens_360x480px_3x1_3frames.json",ad_button:"ad_button_84x144px_2x1_2frames.json",restart_button:"restart_button_84x124px.webp",top_screen:"top_screen_672x126px.webp",main_button:"main_button_178x168px_1x2_2frames.json",panel:"panel_394x164px_1x2_2frames.json",level_panel:"level_panel_188x236px.webp",turbo_switch:"turbo_switch_192x302px_3x3_9frames.json",wires_angle:"wires_angle_160x160px.webp",wires_line:"wires_line_160x160px.webp",building_box:"building_box_182x160px.webp",tesla_tower:"tesla_tower_214x476px_9x7_61frames.json",lightning_tower:"lightning_tower_204x490px_2x1_2frames.json",rotor_generator:"rotor_generator_168x200px_4x4_16frames.json",wind_generator:"wind_generator_256x268px_5x2_10frames.json",time_machine_base:"time_machine_base_200x220px_4x1_4frames.json",time_machine:"time_machine_200x562px_10x3_28frames.json",time_machine_lamps:"time_machine_lamps_98x84px_1x7_7frames.json",time_machine_progress:"time_machine_progress_98x84px_4x8_32frames.json",broken_car:"broken_car_250x166px.webp",truck:"truck_364x264px.webp",euro_cube:"euro_cube_152x260px.webp",transformer:"transformer_162x364px.webp",spy_bot:"spy_bot_154x114px_7x8_56_frames.json",energy:"energy_160x160px_10x7_70frames.json",smoke:"smoke_192x192px_25frames.json",sparks:"splash_192x192px_20frames.json",explosion:"explosion_192x192px_5x5_25frames.json",ball_lightning:"ball_lightning_156x156px_4x3_12frames.json"},Xm=Object.keys(O).length;for(let i in O)O[i]=Bi.sprites+O[i];const mt={upgrade:"se_upgrade.mp3",alarm:"se_alarm.mp3",charge:"se_charge.mp3",se_sparks:"se_sparks.mp3",sticks:"se_sticks.mp3",se_explosion:"se_explosion.mp3",se_time_acc:"se_time_acc.mp3"},Ym=Object.keys(mt).length;for(let i in mt)mt[i]=Bi.sounds+mt[i];const G={en_start_first:"voice_en_start_first.mp3",en_start_second:"voice_en_start_second.mp3",en_lets_do_it:"voice_en_lets_do_it.mp3",en_available_auto_upgrade:"voice_en_available_auto_upgrade.mp3",en_available_click_upgrade:"voice_en_available_click_upgrade.mp3",en_available_turbo:"voice_en_available_turbo.mp3",en_next_level:"voice_en_next_level.mp3",en_no_money:"voice_en_no_money.mp3",en_not_available:"voice_en_not_available.mp3",en_turbo_upgrade:"voice_en_turbo_upgrade.mp3",en_extra_electricity:"voice_en_extra_electricity.mp3",en_spy_kill:"voice_en_spy_kill.mp3",en_spy:"voice_en_spy.mp3",en_time_acc_build_1:"voice_en_time_acc_build_1.mp3",en_time_acc_build_2:"voice_en_time_acc_build_2.mp3",en_time_acc_start:"voice_en_time_acc_start.mp3",ru_start_first:"voice_ru_start_first.mp3",ru_start_second:"voice_ru_start_second.mp3",ru_lets_do_it:"voice_ru_lets_do_it.mp3",ru_available_auto_upgrade:"voice_ru_available_auto_upgrade.mp3",ru_available_click_upgrade:"voice_ru_available_click_upgrade.mp3",ru_available_turbo:"voice_ru_available_turbo.mp3",ru_next_level:"voice_ru_next_level.mp3",ru_no_money:"voice_ru_no_money.mp3",ru_not_available:"voice_ru_not_available.mp3",ru_turbo_upgrade:"voice_ru_turbo_upgrade.mp3",ru_extra_electricity:"voice_ru_extra_electricity.mp3",ru_spy_kill:"voice_ru_spy_kill.mp3",ru_spy:"voice_ru_spy.mp3",ru_time_acc_build_1:"voice_ru_time_acc_build_1.mp3",ru_time_acc_build_2:"voice_ru_time_acc_build_2.mp3",ru_time_acc_start:"voice_ru_time_acc_start.mp3"},jm=Object.keys(G).length;for(let i in G)G[i]=Bi.voices+G[i];const fn={bgm0:"bgm_0.mp3",bgm1:"bgm_1.mp3",bgm2:"bgm_2.mp3",bgm3:"bgm_3.mp3",bgm4:"bgm_2.mp3",bgm5:"bgm_3.mp3"};for(let i in fn)fn[i]=Bi.music+fn[i];const bt={light:"Handjet-Light.ttf",normal:"Handjet-Regular.ttf"};for(let i in bt)bt[i]=Bi.fonts+bt[i];function qm(i){const t=Xm+Ym+jm;let e=0,n=100/t;const r=new Hm,s=()=>{e++,r.update(n*e),e===t&&(r.delete(),i())};for(let o in O)Rt.add({alias:o,src:O[o]}),Rt.load(o).then(a=>{O[o]=a,s()});for(let o in mt)Rt.add({alias:o,src:mt[o]}),Rt.load(o).then(a=>{mt[o]=a,s()});for(let o in G)Rt.add({alias:o,src:G[o]}),Rt.load(o).then(a=>{G[o]=a,s()})}const Qi=.005,Tr=1,Km=1.051,Zm=.9515;class Qm extends ot{constructor(t){super(O.moon),this.anchor.set(0,1),this.speed=Qi,this.isAccelerated=!1,this.position.x=t.width,this.screenResize(t),C.on(S.screenResize,this.screenResize.bind(this)),C.on(S.timeAcceleration,this.timeAcceleration.bind(this)),wt(this)}screenResize(t){this.maxX=t.width-this.width,this.minY=t.height,this.position.x>this.maxX&&this.restart()}restart(){this.position.x=Math.floor(this.maxX*Math.random()),this.position.y=this.minY}tick(t){this.position.y-=this.speed*t.elapsedMS,this.position.y<=0&&this.restart(),this.isAccelerated?this.speed<Tr&&(this.speed*=Km*t.deltaTime,this.speed>Tr&&(this.speed=Tr)):this.speed>Qi&&(this.speed*=Zm*t.deltaTime,this.speed<Qi&&(this.speed=Qi))}timeAcceleration(t){this.isAccelerated=t}}const Ji=.002,Pr=.8,Jm=1.051,tg=.9515,la=400;class eg extends Zp{constructor(t){super(O.night_sky),this.speed=Ji,this.isAccelerated=!1,this.screenResize(t),C.on(S.screenResize,this.screenResize.bind(this)),C.on(S.timeAcceleration,this.timeAcceleration.bind(this)),wt(this)}screenResize(t){this.width=t.width,this.height=t.height,this.position.x=0,this.position.y=0}tick(t){this.position.y-=this.speed*t.elapsedMS,this.position.y<=-la&&(this.position.y+=la),this.isAccelerated?this.speed<Pr&&(this.speed*=Jm*t.deltaTime,this.speed>Pr&&(this.speed=Pr)):this.speed>Ji&&(this.speed*=tg*t.deltaTime,this.speed<Ji&&(this.speed=Ji))}timeAcceleration(t){this.isAccelerated=t}}var j=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,q=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,ig=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uGamma;
uniform float uContrast;
uniform float uSaturation;
uniform float uBrightness;
uniform vec4 uColor;

void main()
{
    vec4 c = texture(uTexture, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / uGamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, uSaturation), uContrast);
        rgb.r *= uColor.r;
        rgb.g *= uColor.g;
        rgb.b *= uColor.b;
        c.rgb = rgb * uBrightness;

        c.rgb *= c.a;
    }

    finalColor = c * uColor.a;
}
`,ng=`struct AdjustmentUniforms {
  uGamma: f32,
  uContrast: f32,
  uSaturation: f32,
  uBrightness: f32,
  uColor: vec4<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> adjustmentUniforms : AdjustmentUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  var sample = textureSample(uTexture, uSampler, uv);
  let color = adjustmentUniforms.uColor;

  if (sample.a > 0.0) 
  {
    sample = vec4<f32>(sample.rgb / sample.a, sample.a);
    var rgb: vec3<f32> = pow(sample.rgb, vec3<f32>(1. / adjustmentUniforms.uGamma));
    rgb = mix(vec3<f32>(.5), mix(vec3<f32>(dot(vec3<f32>(.2125, .7154, .0721), rgb)), rgb, adjustmentUniforms.uSaturation), adjustmentUniforms.uContrast);
    rgb.r *= color.r;
    rgb.g *= color.g;
    rgb.b *= color.b;
    sample = vec4<f32>(rgb.rgb * adjustmentUniforms.uBrightness, sample.a);
    sample = vec4<f32>(sample.rgb * sample.a, sample.a);
  }

  return sample * color.a;
}`,rg=Object.defineProperty,sg=(i,t,e)=>t in i?rg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,uu=(i,t,e)=>(sg(i,typeof t!="symbol"?t+"":t,e),e);const hu=class cu extends ${constructor(t){t={...cu.DEFAULT_OPTIONS,...t};const e=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:ng,entryPoint:"mainFragment"}}),n=N.from({vertex:j,fragment:ig,name:"adjustment-filter"});super({gpuProgram:e,glProgram:n,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),uu(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};uu(hu,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});let og=hu;var ag=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`,lg=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`,ug=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`,hg=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`,cg=Object.defineProperty,fg=(i,t,e)=>t in i?cg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,ge=(i,t,e)=>(fg(i,typeof t!="symbol"?t+"":t,e),e);const fu=class du extends ${constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e))&&(F("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),e={strength:e},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.clamp=t[2])),e={...du.DEFAULT_OPTIONS,...e};const n=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:e!=null&&e.clamp?hg:lg,entryPoint:"mainFragment"}}),r=N.from({vertex:j,fragment:e!=null&&e.clamp?ug:ag,name:"kawase-blur-filter"});super({gpuProgram:n,glProgram:r,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ge(this,"uniforms"),ge(this,"_pixelSize",{x:0,y:0}),ge(this,"_clamp"),ge(this,"_kernels",[]),ge(this,"_blur"),ge(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=e.pixelSize??{x:1,y:1},Array.isArray(e.strength)?this.kernels=e.strength:typeof e.strength=="number"&&(this._blur=e.strength,this.quality=e.quality??3),this._clamp=!!e.clamp}apply(t,e,n,r){const s=this.pixelSizeX/e.source.width,o=this.pixelSizeY/e.source.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,e,n,r);else{const l=Bt.getSameSizeTexture(e);let u=e,h=l,c;const f=this._quality-1;for(let d=0;d<f;d++)a=this._kernels[d]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,u,h,!0),c=u,u=h,h=c;a=this._kernels[f]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,u,n,r),Bt.returnTexture(l)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,e)=>t+e+.5,0))}_generateKernels(){const t=this._blur,e=this._quality,n=[t];if(t>0){let r=t;const s=t/e;for(let o=1;o<e;o++)r-=s,n.push(r)}this._kernels=n,this._updatePadding()}};ge(fu,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let pu=fu;var dg=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uBloomScale;
uniform float uBrightness;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.rgb *= uBrightness;
    vec4 bloomColor = vec4(texture(uMapTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= uBloomScale;
    finalColor = color + bloomColor;
}
`,pg=`struct AdvancedBloomUniforms {
  uBloomScale: f32,
  uBrightness: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> advancedBloomUniforms : AdvancedBloomUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color = textureSample(uTexture, uSampler, uv);
  color = vec4<f32>(color.rgb * advancedBloomUniforms.uBrightness, color.a);

  var bloomColor = vec4<f32>(textureSample(uMapTexture, uSampler, uv).rgb, 0.0);
  bloomColor = vec4<f32>(bloomColor.rgb * advancedBloomUniforms.uBloomScale, bloomColor.a);
  
  return color + bloomColor;
}
`,mg=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uThreshold;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > uThreshold) {
        finalColor = color;
    } else {
        finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,gg=`struct ExtractBrightnessUniforms {
  uThreshold: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> extractBrightnessUniforms : ExtractBrightnessUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // A simple & fast algorithm for getting brightness.
  // It's inaccurate, but good enough for this feature.
  let max: f32 = max(max(color.r, color.g), color.b);
  let min: f32 = min(min(color.r, color.g), color.b);
  let brightness: f32 = (max + min) * 0.5;

  return select(vec4<f32>(0.), color, brightness > extractBrightnessUniforms.uThreshold);
}
`,xg=Object.defineProperty,vg=(i,t,e)=>t in i?xg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,mu=(i,t,e)=>(vg(i,typeof t!="symbol"?t+"":t,e),e);const gu=class xu extends ${constructor(t){t={...xu.DEFAULT_OPTIONS,...t};const e=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:gg,entryPoint:"mainFragment"}}),n=N.from({vertex:j,fragment:mg,name:"extract-brightness-filter"});super({gpuProgram:e,glProgram:n,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),mu(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};mu(gu,"DEFAULT_OPTIONS",{threshold:.5});let yg=gu;var _g=Object.defineProperty,bg=(i,t,e)=>t in i?_g(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Ee=(i,t,e)=>(bg(i,typeof t!="symbol"?t+"":t,e),e);const Sg=class vu extends ${constructor(t){t={...vu.DEFAULT_OPTIONS,...t};const e=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:pg,entryPoint:"mainFragment"}}),n=N.from({vertex:j,fragment:dg,name:"advanced-bloom-filter"});super({gpuProgram:e,glProgram:n,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:E.WHITE}}),Ee(this,"uniforms"),Ee(this,"bloomScale",1),Ee(this,"brightness",1),Ee(this,"_extractFilter"),Ee(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new yg({threshold:t.threshold}),this._blurFilter=new pu({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,e,n,r){const s=Bt.getSameSizeTexture(e);this._extractFilter.apply(t,e,s,!0);const o=Bt.getSameSizeTexture(e);this._blurFilter.apply(t,s,o,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=o.source,t.applyFilter(this,e,n,r),Bt.returnTexture(o),Bt.returnTexture(s)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};Ee(Sg,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});var wg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSize;
uniform vec3 uColor;
uniform float uReplaceColor;

uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(uSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture(uTexture, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(uSize));

    finalColor = (uReplaceColor > 0.5 ? vec4(uColor, 1.) : color) * character( n, vec2(-1.0) + modd * 2.0);
}
`,Cg=`struct AsciiUniforms {
    uSize: f32,
    uColor: vec3<f32>,
    uReplaceColor: f32,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> asciiUniforms : AsciiUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let pixelSize: f32 = asciiUniforms.uSize;
    let coord: vec2<f32> = mapCoord(uv);

    // get the rounded color..
    var pixCoord: vec2<f32> = pixelate(coord, vec2<f32>(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    var color = textureSample(uTexture, uSampler, pixCoord);

    // determine the character to use
    let gray: f32 = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    
    var n: f32 = 65536.0; // .
    if (gray > 0.2) {
        n = 65600.0;    // :
    }
    if (gray > 0.3) {
        n = 332772.0;   // *
    }
    if (gray > 0.4) {
        n = 15255086.0; // o
    }
    if (gray > 0.5) {
        n = 23385164.0; // &
    }
    if (gray > 0.6) {
        n = 15252014.0; // 8
    }
    if (gray > 0.7) {
        n = 13199452.0; // @
    }
    if (gray > 0.8) {
        n = 11512810.0; // #
    }

    // get the mod..
    let modd: vec2<f32> = getMod(coord, vec2<f32>(pixelSize));
    return select(color, vec4<f32>(asciiUniforms.uColor, 1.), asciiUniforms.uReplaceColor > 0.5) * character(n, vec2<f32>(-1.0) + modd * 2.0);
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return floor( coord / size ) * size;
}

fn getMod(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return moduloVec2( coord , size) / size;
}

fn character(n: f32, p: vec2<f32>) -> f32
{
    var q: vec2<f32> = floor(p*vec2<f32>(4.0, 4.0) + 2.5);

    if (clamp(q.x, 0.0, 4.0) == q.x)
    {
        if (clamp(q.y, 0.0, 4.0) == q.y)
        {
        if (i32(modulo(n/exp2(q.x + 5.0*q.y), 2.0)) == 1)
        {
            return 1.0;
        }
        }
    }

    return 0.0;
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn moduloVec2(x: vec2<f32>, y: vec2<f32>) -> vec2<f32>
{
  return x - y * floor(x/y);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord *= gfu.uInputSize.xy;
    mappedCoord += gfu.uOutputFrame.xy;
    return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord -= gfu.uOutputFrame.xy;
    mappedCoord /= gfu.uInputSize.xy;
    return mappedCoord;
}`,Ag=Object.defineProperty,Tg=(i,t,e)=>t in i?Ag(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,rs=(i,t,e)=>(Tg(i,typeof t!="symbol"?t+"":t,e),e);const Pg=class yu extends ${constructor(...t){let e=t[0]??{};typeof e=="number"&&(F("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),e={size:e});const n=(e==null?void 0:e.color)&&e.replaceColor!==!1;e={...yu.DEFAULT_OPTIONS,...e};const r=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:Cg,entryPoint:"mainFragment"}}),s=N.from({vertex:j,fragment:wg,name:"ascii-filter"});super({gpuProgram:r,glProgram:s,resources:{asciiUniforms:{uSize:{value:e.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(n),type:"f32"}}}}),rs(this,"uniforms"),rs(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new V,this.color=e.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,n,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};rs(Pg,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var Ig=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTransform;
uniform vec3 uLightColor;
uniform float uLightAlpha;
uniform vec3 uShadowColor;
uniform float uShadowAlpha;

uniform vec4 uInputSize;

void main(void) {
    vec2 transform = vec2(1.0 / uInputSize) * vec2(uTransform.x, uTransform.y);
    vec4 color = texture(uTexture, vTextureCoord);
    float light = texture(uTexture, vTextureCoord - transform).a;
    float shadow = texture(uTexture, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, uLightColor, clamp((color.a - light) * uLightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, uShadowColor, clamp((color.a - shadow) * uShadowAlpha, 0.0, 1.0));
    finalColor = vec4(color.rgb * color.a, color.a);
}
`,Mg=`struct BevelUniforms {
  uLightColor: vec3<f32>,
  uLightAlpha: f32,
  uShadowColor: vec3<f32>,
  uShadowAlpha: f32,
  uTransform: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bevelUniforms : BevelUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let transform = vec2<f32>(1.0 / gfu.uInputSize.xy) * vec2<f32>(bevelUniforms.uTransform.x, bevelUniforms.uTransform.y);
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightSample: f32 = textureSample(uTexture, uSampler, uv - transform).a;
  let shadowSample: f32 = textureSample(uTexture, uSampler, uv + transform).a;

  let light = vec4<f32>(bevelUniforms.uLightColor, bevelUniforms.uLightAlpha);
  let shadow = vec4<f32>(bevelUniforms.uShadowColor, bevelUniforms.uShadowAlpha);

  color = vec4<f32>(mix(color.rgb, light.rgb, clamp((color.a - lightSample) * light.a, 0.0, 1.0)), color.a);
  color = vec4<f32>(mix(color.rgb, shadow.rgb, clamp((color.a - shadowSample) * shadow.a, 0.0, 1.0)), color.a);
  
  return vec4<f32>(color.rgb * color.a, color.a);
}`,Fg=Object.defineProperty,zg=(i,t,e)=>t in i?Fg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Ue=(i,t,e)=>(zg(i,typeof t!="symbol"?t+"":t,e),e);const kg=class _u extends ${constructor(t){t={..._u.DEFAULT_OPTIONS,...t};const e=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:Mg,entryPoint:"mainFragment"}}),n=N.from({vertex:j,fragment:Ig,name:"bevel-filter"});super({gpuProgram:e,glProgram:n,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),Ue(this,"uniforms"),Ue(this,"_thickness"),Ue(this,"_rotation"),Ue(this,"_lightColor"),Ue(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new V,this._shadowColor=new V,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/We}set rotation(t){this._rotation=t*We,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[e,n,r]=this._lightColor.toArray();this.uniforms.uLightColor[0]=e,this.uniforms.uLightColor[1]=n,this.uniforms.uLightColor[2]=r}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[e,n,r]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=e,this.uniforms.uShadowColor[1]=n,this.uniforms.uShadowColor[2]=r}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};Ue(kg,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var Rg=Object.defineProperty,Og=(i,t,e)=>t in i?Rg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,dn=(i,t,e)=>(Og(i,typeof t!="symbol"?t+"":t,e),e);const Bg=class bu extends Gp{constructor(...t){let e=t[0]??{};if(typeof e=="number"||Array.isArray(e)||"x"in e&&"y"in e){F("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let n=e;Array.isArray(n)&&(n={x:n[0],y:n[1]}),e={strength:n},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.resolution=t[2]),t[3]!==void 0&&(e.kernelSize=t[3])}e={...bu.DEFAULT_OPTIONS,...e},super(),dn(this,"_blurXFilter"),dn(this,"_blurYFilter"),dn(this,"_strength"),this._strength={x:2,y:2},e.strength&&(typeof e.strength=="number"?(this._strength.x=e.strength,this._strength.y=e.strength):(this._strength.x=e.strength.x,this._strength.y=e.strength.y)),this._blurXFilter=new Zo({...e,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new Zo({...e,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,e)}apply(t,e,n,r){const s=Bt.getSameSizeTexture(e);t.applyFilter(this,e,n,r),this._blurXFilter.apply(t,e,s,!0),this._blurYFilter.apply(t,s,n,!1),Bt.returnTexture(s)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return F("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){F("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return F("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){F("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return F("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){F("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};dn(Bg,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var Eg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

void main()
{
    vec2 coord = vTextureCoord * uInputSize.xy;
    coord -= uCenter * uDimensions.xy;
    float distance = length(coord);

    if (distance < uRadius) {
        float percent = distance / uRadius;
        if (uStrength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uStrength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + uStrength * 0.75) * uRadius / distance, 1.0 - percent);
        }
    }

    coord += uCenter * uDimensions.xy;
    coord /= uInputSize.xy;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);

    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    finalColor = color;
}
`,Ug=`struct BulgePinchUniforms {
  uDimensions: vec2<f32>,
  uCenter: vec2<f32>,
  uRadius: f32,
  uStrength: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bulgePinchUniforms : BulgePinchUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let dimensions: vec2<f32> = bulgePinchUniforms.uDimensions;
  let center: vec2<f32> = bulgePinchUniforms.uCenter;
  let radius: f32 = bulgePinchUniforms.uRadius;
  let strength: f32 = bulgePinchUniforms.uStrength;
  var coord: vec2<f32> = (uv * gfu.uInputSize.xy) - center * dimensions.xy;

  let distance: f32 = length(coord);

  if (distance < radius) {
      let percent: f32 = distance / radius;
      if (strength > 0.0) {
          coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
      } else {
          coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
      }
  }
    coord += (center * dimensions.xy);
    coord /= gfu.uInputSize.xy;

    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);
    var color: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    if (coord.x != clampedCoord.x && coord.y != clampedCoord.y) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    return color;
}

fn compareVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
  if (x.x == y.x && x.y == y.y)
  {
    return true;
  }

  return false;
}`,Lg=Object.defineProperty,Dg=(i,t,e)=>t in i?Lg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Su=(i,t,e)=>(Dg(i,typeof t!="symbol"?t+"":t,e),e);const Gg=class wu extends ${constructor(t){t={...wu.DEFAULT_OPTIONS,...t};const e=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:Ug,entryPoint:"mainFragment"}}),n=N.from({vertex:j,fragment:Eg,name:"bulge-pinch-filter"});super({gpuProgram:e,glProgram:n,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),Su(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,e,n,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,t.applyFilter(this,e,n,r)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};Su(Gg,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var Ng=`precision highp float;
in vec2 vTextureCoord;
in vec2 vFilterCoord;
out vec4 finalColor;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform sampler2D uTexture;
uniform vec4 uOptions;
uniform vec2 uCounts;
uniform vec3 uColors[MAX_STOPS];
uniform vec4 uStops[MAX_STOPS];

const float PI = 3.1415926538;
const float PI_2 = PI*2.;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(pos, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    int uType = int(uOptions[0]);
    float uAngle = uOptions[1];
    float uAlpha = uOptions[2];
    float uReplace = uOptions[3];

    int uNumStops = int(uCounts[0]);
    float uMaxColors = uCounts[1];

    // current/original color
    vec4 currentColor = texture(uTexture, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        finalColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, int(uType), radians(uAngle));

    // check gradient bounds
    float offsetMin = uStops[0][0];
    float offsetMax = 0.0;

    int numStops = int(uNumStops);

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == numStops-1){ // last index
            offsetMax = uStops[i][0];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        finalColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0.) {
        float stepSize = 1./uMaxColors;
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uStops[i][0]) {
            from = ColorStop(uStops[i][0], uColors[i], uStops[i][1]);
            to = ColorStop(uStops[i+1][0], uColors[i+1], uStops[i+1][1]);
        }

        if (i == numStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace < 0.5) {
        // mix resulting color with current color
        finalColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        finalColor = gradientColor;
    }
}
`,$g=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterCoord = vTextureCoord * uInputSize.xy / uOutputFrame.zw;
}
`,ua=`struct BaseUniforms {
  uOptions: vec4<f32>,
  uCounts: vec2<f32>,
};

struct StopsUniforms {
  uColors: array<vec3<f32>, MAX_STOPS>,
  uStops: array<vec4<f32>, MAX_STOPS>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> baseUniforms : BaseUniforms;
@group(1) @binding(1) var<uniform> stopsUniforms : StopsUniforms;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn filterCoord( vTextureCoord:vec2<f32> ) -> vec2<f32>
{
    return vTextureCoord * gfu.uInputSize.xy / gfu.uOutputFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  let vTextureCoord: vec2<f32> = filterTextureCoord(aPosition);
  return VSOutput(
   filterVertexPosition(aPosition),
   vTextureCoord,
   filterCoord(vTextureCoord),
  );
}

struct ColorStop {
  offset: f32,
  color: vec3<f32>,
  alpha: f32,
};

fn rotate2d(angle: f32) -> mat2x2<f32>{
  return mat2x2(cos(angle), -sin(angle),
  sin(angle), cos(angle));
}

fn projectLinearPosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = vec2<f32>(0.5);
  var result: vec2<f32> = pos - center;
  result = rotate2d(angle) * result;
  result = result + center;
  return clamp(result.x, 0.0, 1.0);
}

fn projectRadialPosition(pos: vec2<f32>) -> f32 {
  var r: f32 = distance(pos, vec2<f32>(0.5));
  return clamp(2.0 * r, 0.0, 1.0);
}

fn projectAnglePosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = pos - vec2<f32>(0.5, 0.5);
  var polarAngle: f32 = atan2(-center.y, center.x);
  return ((polarAngle + angle) % PI_2) / PI_2;
}

fn projectPosition(pos: vec2<f32>, gradientType: i32, angle: f32) -> f32 {
  if (gradientType == TYPE_LINEAR) {
      return projectLinearPosition(pos, angle);
  } else if (gradientType == TYPE_RADIAL) {
      return projectRadialPosition(pos);
  } else if (gradientType == TYPE_CONIC) {
      return projectAnglePosition(pos, angle);
  }

  return pos.y;
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
) -> @location(0) vec4<f32> {
  let uType: i32 = i32(baseUniforms.uOptions[0]);
  let uAngle: f32 = baseUniforms.uOptions[1];
  let uAlpha: f32 = baseUniforms.uOptions[2];
  let uReplace: f32 = baseUniforms.uOptions[3];

  let uNumStops: i32 = i32(baseUniforms.uCounts[0]);
  let uMaxColors: f32 = baseUniforms.uCounts[1];

  // current/original color
  var currentColor: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // skip calculations if gradient alpha is 0
  if (uAlpha == 0.0) { return currentColor; }

  // project position
  var y: f32 = projectPosition(coord, uType, radians(uAngle));

  // check gradient bounds
  var offsetMin: f32 = stopsUniforms.uStops[0][0];
  var offsetMax: f32 = 0.0;

  let numStops: i32 = uNumStops;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (i == numStops - 1) { // last index
          offsetMax = stopsUniforms.uStops[i][0];
      }
  }

  if (y  < offsetMin || y > offsetMax) { return currentColor; }

  // limit colors
  if (uMaxColors > 0.0) {
      var stepSize: f32 = 1.0 / uMaxColors;
      var stepNumber: f32 = floor(y / stepSize);
      y = stepSize * (stepNumber + 0.5); // offset by 0.5 to use color from middle of segment
  }

  // find color stops
  var stopFrom: ColorStop;
  var stopTo: ColorStop;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (y >= stopsUniforms.uStops[i][0]) {
          stopFrom = ColorStop(stopsUniforms.uStops[i][0], stopsUniforms.uColors[i], stopsUniforms.uStops[i][1]);
          stopTo = ColorStop(stopsUniforms.uStops[i + 1][0], stopsUniforms.uColors[i + 1], stopsUniforms.uStops[i + 1][1]);
      }

      if (i == numStops - 1) { // last index
          break;
      }
  }

  // mix colors from stops
  var colorFrom: vec4<f32> = vec4<f32>(stopFrom.color * stopFrom.alpha, stopFrom.alpha);
  var colorTo: vec4<f32> = vec4<f32>(stopTo.color * stopTo.alpha, stopTo.alpha);

  var segmentHeight: f32 = stopTo.offset - stopFrom.offset;
  var relativePos: f32 = y - stopFrom.offset; // position from 0 to [segmentHeight]
  var relativePercent: f32 = relativePos / segmentHeight; // position in percent between [from.offset] and [to.offset].

  var gradientAlpha: f32 = uAlpha * currentColor.a;
  var gradientColor: vec4<f32> = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

  if (uReplace < 0.5) {
      // mix resulting color with current color
      return gradientColor + currentColor * (1.0 - gradientColor.a);
  } else {
      // replace with gradient color
      return gradientColor;
  }
}

const PI: f32 = 3.14159265358979323846264;
const PI_2: f32 = PI * 2.0;

const TYPE_LINEAR: i32 = 0;
const TYPE_RADIAL: i32 = 1;
const TYPE_CONIC: i32 = 2;
const MAX_STOPS: i32 = 32;`,Te=Te||{};Te.stringify=function(){var i={"visit_linear-gradient":function(t){return i.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return i.visit_gradient(t)},"visit_radial-gradient":function(t){return i.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return i.visit_gradient(t)},visit_gradient:function(t){var e=i.visit(t.orientation);return e&&(e+=", "),t.type+"("+e+i.visit(t.colorStops)+")"},visit_shape:function(t){var e=t.value,n=i.visit(t.at),r=i.visit(t.style);return r&&(e+=" "+r),n&&(e+=" at "+n),e},"visit_default-radial":function(t){var e="",n=i.visit(t.at);return n&&(e+=n),e},"visit_extent-keyword":function(t){var e=t.value,n=i.visit(t.at);return n&&(e+=" at "+n),e},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return i.visit(t.value.x)+" "+i.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return i.visit_color(t.value,t)},visit_hex:function(t){return i.visit_color("#"+t.value,t)},visit_rgb:function(t){return i.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return i.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,e){var n=t,r=i.visit(e.length);return r&&(n+=" "+r),n},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var e="",n=t.length;return t.forEach(function(r,s){e+=i.visit(r),s<n-1&&(e+=", ")}),e},visit:function(t){if(!t)return"";var e="";if(t instanceof Array)return i.visit_array(t,e);if(t.type){var n=i["visit_"+t.type];if(n)return n(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return i.visit(t)}}();var Te=Te||{};Te.parse=function(){var i={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function e(P){var X=new Error(t+": "+P);throw X.source=t,X}function n(){var P=r();return t.length>0&&e("Invalid input not EOF"),P}function r(){return y(s)}function s(){return o("linear-gradient",i.linearGradient,l)||o("repeating-linear-gradient",i.repeatingLinearGradient,l)||o("radial-gradient",i.radialGradient,c)||o("repeating-radial-gradient",i.repeatingRadialGradient,c)}function o(P,X,T){return a(X,function(B){var Ei=T();return Ei&&(W(i.comma)||e("Missing comma before color stops")),{type:P,orientation:Ei,colorStops:y(_)}})}function a(P,X){var T=W(P);if(T){W(i.startCall)||e("Missing (");var B=X(T);return W(i.endCall)||e("Missing )"),B}}function l(){return u()||h()}function u(){return k("directional",i.sideOrCorner,1)}function h(){return k("angular",i.angleValue,1)}function c(){var P,X=f(),T;return X&&(P=[],P.push(X),T=t,W(i.comma)&&(X=f(),X?P.push(X):t=T)),P}function f(){var P=d()||p();if(P)P.at=m();else{var X=g();if(X){P=X;var T=m();T&&(P.at=T)}else{var B=x();B&&(P={type:"default-radial",at:B})}}return P}function d(){var P=k("shape",/^(circle)/i,0);return P&&(P.style=U()||g()),P}function p(){var P=k("shape",/^(ellipse)/i,0);return P&&(P.style=K()||g()),P}function g(){return k("extent-keyword",i.extentKeywords,1)}function m(){if(k("position",/^at/,0)){var P=x();return P||e("Missing positioning value"),P}}function x(){var P=v();if(P.x||P.y)return{type:"position",value:P}}function v(){return{x:K(),y:K()}}function y(P){var X=P(),T=[];if(X)for(T.push(X);W(i.comma);)X=P(),X?T.push(X):e("One extra comma");return T}function _(){var P=A();return P||e("Expected color definition"),P.length=K(),P}function A(){return M()||b()||R()||L()}function L(){return k("literal",i.literalColor,0)}function M(){return k("hex",i.hexColor,1)}function R(){return a(i.rgbColor,function(){return{type:"rgb",value:y(w)}})}function b(){return a(i.rgbaColor,function(){return{type:"rgba",value:y(w)}})}function w(){return W(i.number)[1]}function K(){return k("%",i.percentageValue,1)||Et()||U()}function Et(){return k("position-keyword",i.positionKeywords,1)}function U(){return k("px",i.pixelValue,1)||k("em",i.emValue,1)}function k(P,X,T){var B=W(X);if(B)return{type:P,value:B[T]}}function W(P){var X,T;return T=/^[\n\r\t\s]+/.exec(t),T&&et(T[0].length),X=P.exec(t),X&&et(X[0].length),X}function et(P){t=t.substr(P)}return function(P){return t=P.toString(),n()}}();var Vg=Te.parse;Te.stringify;function Wg(i){const t=Vg(Qg(i));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const e=t[0],n=Hg(e.type),r=Xg(e.colorStops),s=Kg(e.orientation);return{type:n,stops:r,angle:s}}function Hg(i){const t={"linear-gradient":0,"radial-gradient":1};if(!(i in t))throw new Error(`Unsupported gradient type "${i}"`);return t[i]}function Xg(i){const t=jg(i),e=[],n=new V;for(let r=0;r<i.length;r++){const s=Yg(i[r]),o=n.setValue(s).toArray();e.push({offset:t[r],color:o.slice(0,3),alpha:o[3]})}return e}function Yg(i){switch(i.type){case"hex":return`#${i.value}`;case"literal":return i.value;default:return`${i.type}(${i.value.join(",")})`}}function jg(i){const t=[];for(let s=0;s<i.length;s++){const o=i[s];let a=-1;o.type==="literal"&&o.length&&"type"in o.length&&o.length.type==="%"&&"value"in o.length&&(a=parseFloat(o.length.value)/100),t.push(a)}const n=s=>{for(let o=s;o<t.length;o++)if(t[o]!==-1)return{indexDelta:o-s,offset:t[o]};return{indexDelta:t.length-1-s,offset:1}};let r=0;for(let s=0;s<t.length;s++){const o=t[s];if(o!==-1)r=o;else if(s===0)t[s]=0;else if(s+1===t.length)t[s]=1;else{const a=n(s),u=(a.offset-r)/(1+a.indexDelta);for(let h=0;h<=a.indexDelta;h++)t[s+h]=r+(h+1)*u;s+=a.indexDelta,r=t[s]}}return t.map(qg)}function qg(i){return i.toString().length>6?parseFloat(i.toString().substring(0,6)):i}function Kg(i){if(typeof i>"u")return 0;if("type"in i&&"value"in i)switch(i.type){case"angular":return parseFloat(i.value);case"directional":return Zg(i.value)}return 0}function Zg(i){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(i in t))throw new Error(`Unsupported directional value "${i}"`);return t[i]}function Qg(i){let t=i.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var Jg=Object.defineProperty,tx=(i,t,e)=>t in i?Jg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,we=(i,t,e)=>(tx(i,typeof t!="symbol"?t+"":t,e),e);const Ir=90;function ex(i){return[...i].sort((t,e)=>t.offset-e.offset)}const ki=class pn extends ${constructor(t){if(t&&"css"in t?t={...Wg(t.css||""),alpha:t.alpha??pn.defaults.alpha,maxColors:t.maxColors??pn.defaults.maxColors}:t={...pn.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const e=D.from({vertex:{source:ua,entryPoint:"mainVertex"},fragment:{source:ua,entryPoint:"mainFragment"}}),n=N.from({vertex:$g,fragment:Ng,name:"color-gradient-filter"}),r=32;super({gpuProgram:e,glProgram:n,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??Ir,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(r*3),type:"vec3<f32>",size:r},uStops:{value:new Float32Array(r*4),type:"vec4<f32>",size:r}}}}),we(this,"baseUniforms"),we(this,"stopsUniforms"),we(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const e=ex(t),n=new V;let r,s,o;for(let a=0;a<e.length;a++){n.setValue(e[a].color);const l=a*3;[r,s,o]=n.toArray(),this.stopsUniforms.uColors[l]=r,this.stopsUniforms.uColors[l+1]=s,this.stopsUniforms.uColors[l+2]=o,this.stopsUniforms.uStops[a*4]=e[a].offset,this.stopsUniforms.uStops[a*4+1]=e[a].alpha}this.baseUniforms.uCounts[0]=e.length,this._stops=e}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+Ir}set angle(t){this.baseUniforms.uOptions[1]=t-Ir}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};we(ki,"LINEAR",0);we(ki,"RADIAL",1);we(ki,"CONIC",2);we(ki,"defaults",{type:ki.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var ix=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uMix;
uniform float uSize;
uniform float uSliceSize;
uniform float uSlicePixelSize;
uniform float uSliceInnerSize;

void main() {
    vec4 color = texture(uTexture, vTextureCoord.xy);
    vec4 adjusted;

    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = uSize - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = uSlicePixelSize * 0.5 + color.r * uSliceInnerSize;
        float s0 = xOffset + (zSlice0 * uSliceSize);
        float s1 = xOffset + (zSlice1 * uSliceSize);
        float yOffset = uSliceSize * 0.5 + color.g * (1.0 - uSliceSize);
        vec4 slice0Color = texture(uMapTexture, vec2(s0,yOffset));
        vec4 slice1Color = texture(uMapTexture, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }

    finalColor = vec4(mix(color, adjusted, uMix).rgb, color.a);

}`,nx=`struct ColorMapUniforms {
  uMix: f32,
  uSize: f32,
  uSliceSize: f32,
  uSlicePixelSize: f32,
  uSliceInnerSize: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : ColorMapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color:vec4<f32> = textureSample(uTexture, uSampler, uv);

  var adjusted: vec4<f32>;

  var altColor: vec4<f32> = vec4<f32>(color.rgb / color.a, color.a);
  let innerWidth: f32 = colorMapUniforms.uSize - 1.0;
  let zSlice0: f32 = min(floor(color.b * innerWidth), innerWidth);
  let zSlice1: f32 = min(zSlice0 + 1.0, innerWidth);
  let xOffset: f32 = colorMapUniforms.uSlicePixelSize * 0.5 + color.r * colorMapUniforms.uSliceInnerSize;
  let s0: f32 = xOffset + (zSlice0 * colorMapUniforms.uSliceSize);
  let s1: f32 = xOffset + (zSlice1 * colorMapUniforms.uSliceSize);
  let yOffset: f32 = colorMapUniforms.uSliceSize * 0.5 + color.g * (1.0 - colorMapUniforms.uSliceSize);
  let slice0Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s0,yOffset));
  let slice1Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s1,yOffset));
  let zOffset: f32 = fract(color.b * innerWidth);
  adjusted = mix(slice0Color, slice1Color, zOffset);
  altColor = vec4<f32>(color.rgb * color.a, color.a);

  let realColor: vec4<f32> = select(color, altColor, color.a > 0.0);

  return vec4<f32>(mix(realColor, adjusted, colorMapUniforms.uMix).rgb, realColor.a);
}`,rx=Object.defineProperty,sx=(i,t,e)=>t in i?rx(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,jt=(i,t,e)=>(sx(i,typeof t!="symbol"?t+"":t,e),e);const ox=class Cu extends ${constructor(...t){let e=t[0]??{};if((e instanceof E||e instanceof Tt)&&(F("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),e={colorMap:e},t[1]!==void 0&&(e.nearest=t[1]),t[2]!==void 0&&(e.mix=t[2])),e={...Cu.DEFAULT_OPTIONS,...e},!e.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const n=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:nx,entryPoint:"mainFragment"}}),r=N.from({vertex:j,fragment:ix,name:"color-map-filter"});super({gpuProgram:n,glProgram:r,resources:{colorMapUniforms:{uMix:{value:e.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:e.colorMap.source,uMapSampler:e.colorMap.source.style}}),jt(this,"uniforms"),jt(this,"_size",0),jt(this,"_sliceSize",0),jt(this,"_slicePixelSize",0),jt(this,"_sliceInnerSize",0),jt(this,"_nearest",!1),jt(this,"_scaleMode","linear"),jt(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,e)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const e=t instanceof E?t.source:t;e.style.scaleMode=this._scaleMode,e.autoGenerateMipmaps=!1,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=e,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const e=this._colorMap;e&&e.source&&(e.source.scaleMode=this._scaleMode,e.source.autoGenerateMipmaps=!1,e.source.style.update(),e.source.update())}updateColorMap(){const t=this._colorMap;t!=null&&t.source&&(t.source.update(),this.colorMap=t)}destroy(){var t;(t=this._colorMap)==null||t.destroy(),super.destroy()}};jt(ox,"DEFAULT_OPTIONS",{colorMap:E.WHITE,nearest:!1,mix:1});var ax=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,lx=`struct ColorOverlayUniforms {
    uColor: vec3<f32>,
    uAlpha: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorOverlayUniforms : ColorOverlayUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let c = textureSample(uTexture, uSampler, uv);
    return vec4<f32>(mix(c.rgb, colorOverlayUniforms.uColor.rgb, c.a * colorOverlayUniforms.uAlpha), c.a);
}
`,ux=Object.defineProperty,hx=(i,t,e)=>t in i?ux(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,ss=(i,t,e)=>(hx(i,typeof t!="symbol"?t+"":t,e),e);const cx=class Au extends ${constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e)||e instanceof Float32Array)&&(F("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),e={color:e},t[1]!==void 0&&(e.alpha=t[1])),e={...Au.DEFAULT_OPTIONS,...e};const n=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:lx,entryPoint:"mainFragment"}}),r=N.from({vertex:j,fragment:ax,name:"color-overlay-filter"});super({gpuProgram:n,glProgram:r,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"}}}}),ss(this,"uniforms"),ss(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new V,this.color=e.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,n,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};ss(cx,"DEFAULT_OPTIONS",{color:0,alpha:1});var fx=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uOriginalColor;
uniform vec3 uTargetColor;
uniform float uTolerance;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    vec3 colorDiff = uOriginalColor - (c.rgb / max(c.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, uTolerance);
    finalColor = vec4(mix(c.rgb, (uTargetColor + colorDiff) * c.a, doReplace), c.a);
}
`,dx=`struct ColorReplaceUniforms {
  uOriginalColor: vec3<f32>,
  uTargetColor: vec3<f32>,
  uTolerance: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorReplaceUniforms : ColorReplaceUniforms;

@fragment
fn mainFragment(
   @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sample: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let colorDiff: vec3<f32> = colorReplaceUniforms.uOriginalColor - (sample.rgb / max(sample.a, 0.0000000001));
  let colorDistance: f32 = length(colorDiff);
  let doReplace: f32 = step(colorDistance, colorReplaceUniforms.uTolerance);

  return vec4<f32>(mix(sample.rgb, (colorReplaceUniforms.uTargetColor + colorDiff) * sample.a, doReplace), sample.a);
}`,px=Object.defineProperty,mx=(i,t,e)=>t in i?px(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,mn=(i,t,e)=>(mx(i,typeof t!="symbol"?t+"":t,e),e);const gx=class Tu extends ${constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e)||e instanceof Float32Array)&&(F("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),e={originalColor:e},t[1]!==void 0&&(e.targetColor=t[1]),t[2]!==void 0&&(e.tolerance=t[2])),e={...Tu.DEFAULT_OPTIONS,...e};const n=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:dx,entryPoint:"mainFragment"}}),r=N.from({vertex:j,fragment:fx,name:"color-replace-filter"});super({gpuProgram:n,glProgram:r,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:e.tolerance,type:"f32"}}}}),mn(this,"uniforms"),mn(this,"_originalColor"),mn(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new V,this._targetColor=new V,this.originalColor=e.originalColor??16711680,this.targetColor=e.targetColor??0,Object.assign(this,e)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[e,n,r]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=e,this.uniforms.uOriginalColor[1]=n,this.uniforms.uOriginalColor[2]=r}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[e,n,r]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=e,this.uniforms.uTargetColor[1]=n,this.uniforms.uTargetColor[2]=r}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){F("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return F("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){F("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return F("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};mn(gx,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var xx=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
uniform mat3 uMatrix;

void main(void)
{
    vec4 c11 = texture(uTexture, vTextureCoord - uTexelSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uTexelSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y - uTexelSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y)); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y)); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y + uTexelSize.y)); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uTexelSize.y)); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uTexelSize); // bottom right

    finalColor =
        c11 * uMatrix[0][0] + c12 * uMatrix[0][1] + c13 * uMatrix[0][2] +
        c21 * uMatrix[1][0] + c22 * uMatrix[1][1] + c23 * uMatrix[1][2] +
        c31 * uMatrix[2][0] + c32 * uMatrix[2][1] + c33 * uMatrix[2][2];

    finalColor.a = c22.a;
}`,vx=`struct ConvolutionUniforms {
    uMatrix: mat3x3<f32>,
    uTexelSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> convolutionUniforms : ConvolutionUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let texelSize = convolutionUniforms.uTexelSize;
    let matrix = convolutionUniforms.uMatrix;

    let c11: vec4<f32> = textureSample(uTexture, uSampler, uv - texelSize); // top left
    let c12: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y - texelSize.y)); // top center
    let c13: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y - texelSize.y)); // top right

    let c21: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y)); // mid left
    let c22: vec4<f32> = textureSample(uTexture, uSampler, uv); // mid center
    let c23: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y)); // mid right

    let c31: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y + texelSize.y)); // bottom left
    let c32: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y + texelSize.y)); // bottom center
    let c33: vec4<f32> = textureSample(uTexture, uSampler, uv + texelSize); // bottom right

    var finalColor: vec4<f32> = vec4<f32>(
        c11 * matrix[0][0] + c12 * matrix[0][1] + c13 * matrix[0][2] +
        c21 * matrix[1][0] + c22 * matrix[1][1] + c23 * matrix[1][2] +
        c31 * matrix[2][0] + c32 * matrix[2][1] + c33 * matrix[2][2]
    );

    finalColor.a = c22.a;

    return finalColor;
}`,yx=Object.defineProperty,_x=(i,t,e)=>t in i?yx(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Pu=(i,t,e)=>(_x(i,typeof t!="symbol"?t+"":t,e),e);const bx=class Iu extends ${constructor(...t){let e=t[0]??{};Array.isArray(e)&&(F("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),e={matrix:e},t[1]!==void 0&&(e.width=t[1]),t[2]!==void 0&&(e.height=t[2])),e={...Iu.DEFAULT_OPTIONS,...e};const n=e.width??200,r=e.height??200,s=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:vx,entryPoint:"mainFragment"}}),o=N.from({vertex:j,fragment:xx,name:"convolution-filter"});super({gpuProgram:s,glProgram:o,resources:{convolutionUniforms:{uMatrix:{value:e.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/n,y:1/r},type:"vec2<f32>"}}}}),Pu(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=n,this.height=r}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((e,n)=>{this.uniforms.uMatrix[n]=e})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};Pu(bx,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var Sx=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`,wx=`struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`,Cx=Object.defineProperty,Ax=(i,t,e)=>t in i?Cx(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,gn=(i,t,e)=>(Ax(i,typeof t!="symbol"?t+"":t,e),e);const Tx=class Mu extends ${constructor(t){t={...Mu.DEFAULT_OPTIONS,...t};const e=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:wx,entryPoint:"mainFragment"}}),n=N.from({vertex:j,fragment:Sx,name:"crt-filter"});super({gpuProgram:e,glProgram:n,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),gn(this,"uniforms"),gn(this,"seed"),gn(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,e,n,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,e,n,r)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};gn(Tx,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var Px=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAngle;
uniform float uScale;
uniform bool uGrayScale;

uniform vec4 uInputSize;

float pattern()
{
    float s = sin(uAngle), c = cos(uAngle);
    vec2 tex = vTextureCoord * uInputSize.xy;
    vec2 point = vec2(
        c * tex.x - s * tex.y,
        s * tex.x + c * tex.y
    ) * uScale;
    return (sin(point.x) * sin(point.y)) * 4.0;
    }

    void main()
    {
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 colorRGB = vec3(color);

    if (uGrayScale)
    {
        colorRGB = vec3(color.r + color.g + color.b) / 3.0;
    }

    finalColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`,Ix=`struct DotUniforms {
  uScale:f32,
  uAngle:f32,
  uGrayScale:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dotUniforms : DotUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let gray: vec3<f32> = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)));
  // dotUniforms.uGrayScale == 1 doesn't ever pass so it is converted to a float and compared to 0.5 instead 
  let finalColor: vec3<f32> = select(color.rgb, gray, f32(dotUniforms.uGrayScale) >= 0.5);

  return vec4<f32>(finalColor * 10.0 - 5.0 + pattern(uv), color.a);
}

fn pattern(uv: vec2<f32>) -> f32
{
  let s: f32 = sin(dotUniforms.uAngle);
  let c: f32 = cos(dotUniforms.uAngle);
  
  let tex: vec2<f32> = uv * gfu.uInputSize.xy;
  
  let p: vec2<f32> = vec2<f32>(
      c * tex.x - s * tex.y,
      s * tex.x + c * tex.y
  ) * dotUniforms.uScale;

  return (sin(p.x) * sin(p.y)) * 4.0;
}`,Mx=Object.defineProperty,Fx=(i,t,e)=>t in i?Mx(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,zx=(i,t,e)=>(Fx(i,t+"",e),e);const kx=class Fu extends ${constructor(...t){let e=t[0]??{};typeof e=="number"&&(F("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),e={scale:e},t[1]!==void 0&&(e.angle=t[1]),t[2]!==void 0&&(e.grayscale=t[2])),e={...Fu.DEFAULT_OPTIONS,...e};const n={uScale:{value:e.scale,type:"f32"},uAngle:{value:e.angle,type:"f32"},uGrayScale:{value:e.grayscale?1:0,type:"f32"}},r=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:Ix,entryPoint:"mainFragment"}}),s=N.from({vertex:j,fragment:Px,name:"dot-filter"});super({gpuProgram:r,glProgram:s,resources:{dotUniforms:n}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};zx(kx,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var Rx=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`,Ox=`struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`,Bx=Object.defineProperty,Ex=(i,t,e)=>t in i?Bx(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Le=(i,t,e)=>(Ex(i,typeof t!="symbol"?t+"":t,e),e);const Ux=class zu extends ${constructor(t){t={...zu.DEFAULT_OPTIONS,...t};const e=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:Ox,entryPoint:"mainFragment"}}),n=N.from({vertex:j,fragment:Rx,name:"drop-shadow-filter"});super({gpuProgram:e,glProgram:n,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),Le(this,"uniforms"),Le(this,"shadowOnly",!1),Le(this,"_color"),Le(this,"_blurFilter"),Le(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new V,this.color=t.color??0,this._blurFilter=new pu({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new $({gpuProgram:D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:N.from({vertex:j,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,e,n,r){const s=Bt.getSameSizeTexture(e);t.applyFilter(this,e,s,!0),this._blurFilter.apply(t,s,n,r),this.shadowOnly||t.applyFilter(this._basePass,e,n,!1),Bt.returnTexture(s)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,n,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};Le(Ux,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var Lx=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uSeed;
uniform vec2 uDimensions;
uniform float uAspect;
uniform float uFillMode;
uniform float uOffset;
uniform float uDirection;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float sinDir = sin(uDirection);
    float cosDir = cos(uDirection);

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * uAspect;
    float ny = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture(uDisplacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * uAspect);

    int fillMode = int(uFillMode);

    if (fillMode == CLAMP) {
        coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
        if( coord.x > uInputClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = uInputClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < uInputClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -uInputClamp.z;
            }
        }

        if( coord.y > uInputClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = uInputClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < uInputClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -uInputClamp.w;
            }
        }
    }

    finalColor.r = texture(uTexture, coord + uRed * (1.0 - uSeed * 0.4) / uInputSize.xy).r;
    finalColor.g = texture(uTexture, coord + uGreen * (1.0 - uSeed * 0.3) / uInputSize.xy).g;
    finalColor.b = texture(uTexture, coord + uBlue * (1.0 - uSeed * 0.2) / uInputSize.xy).b;
    finalColor.a = texture(uTexture, coord).a;
}
`,Dx=`struct GlitchUniforms {
  uSeed: f32,
  uDimensions: vec2<f32>,
  uAspect: f32,
  uFillMode: f32,
  uOffset: f32,
  uDirection: f32,
  uRed: vec2<f32>,
  uGreen: vec2<f32>,
  uBlue: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glitchUniforms : GlitchUniforms;
@group(1) @binding(1) var uDisplacementMap: texture_2d<f32>; 
@group(1) @binding(2) var uDisplacementSampler: sampler; 

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uSeed: f32 = glitchUniforms.uSeed;
  let uDimensions: vec2<f32> = glitchUniforms.uDimensions;
  let uAspect: f32 = glitchUniforms.uAspect;
  let uOffset: f32 = glitchUniforms.uOffset;
  let uDirection: f32 = glitchUniforms.uDirection;
  let uRed: vec2<f32> = glitchUniforms.uRed;
  let uGreen: vec2<f32> = glitchUniforms.uGreen;
  let uBlue: vec2<f32> = glitchUniforms.uBlue;

  let uInputSize: vec4<f32> = gfu.uInputSize;
  let uInputClamp: vec4<f32> = gfu.uInputClamp;

  var discarded: bool = false;
  var coord: vec2<f32> = (uv * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
      discarded = true;
    }

    let sinDir: f32 = sin(uDirection);
    let cosDir: f32 = cos(uDirection);

    let cx: f32 = coord.x - 0.5;
    let cy: f32 = (coord.y - 0.5) * uAspect;
    var ny: f32 = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    ny = select(select(ny, -ny, ny < 0.0), 2.0 - ny, ny > 1.0);

    let dc: vec4<f32> = textureSample(uDisplacementMap, uDisplacementSampler, vec2<f32>(0.5, ny));

    let displacement: f32 = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = uv + vec2<f32>(cosDir * displacement, sinDir * displacement * uAspect);

    let fillMode: i32 = i32(glitchUniforms.uFillMode);

    if (fillMode == CLAMP) {
      coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
      if (coord.x > uInputClamp.z) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x - uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = uInputClamp.z * 2.0 - coord.x;
        }
      } else if (coord.x < uInputClamp.x) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x + uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = coord.x * -uInputClamp.z;
        }
      }

      if (coord.y > uInputClamp.w) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y - uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = uInputClamp.w * 2.0 - coord.y;
        }
      } else if (coord.y < uInputClamp.y) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y + uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = coord.y * -uInputClamp.w;
        }
      }
    }

    let seedR: f32 = 1.0 - uSeed * 0.4;
    let seedG: f32 = 1.0 - uSeed * 0.3;
    let seedB: f32 = 1.0 - uSeed * 0.2;

    let offsetR: vec2<f32> = vec2(uRed.x * seedR / uInputSize.x, uRed.y * seedR / uInputSize.y);
    let offsetG: vec2<f32> = vec2(uGreen.x * seedG / uInputSize.x, uGreen.y * seedG / uInputSize.y);
    let offsetB: vec2<f32> = vec2(uBlue.x * seedB / uInputSize.x, uBlue.y * seedB / uInputSize.y);

    let r = textureSample(uTexture, uSampler, coord + offsetR).r;
    let g = textureSample(uTexture, uSampler, coord + offsetG).g;
    let b = textureSample(uTexture, uSampler, coord + offsetB).b;
    let a = textureSample(uTexture, uSampler, coord).a;

    return select(vec4<f32>(r, g, b, a), vec4<f32>(0.0,0.0,0.0,0.0), discarded);
}

const TRANSPARENT: i32 = 0;
const ORIGINAL: i32 = 1;
const LOOP: i32 = 2;
const CLAMP: i32 = 3;
const MIRROR: i32 = 4;`,Gx=Object.defineProperty,Nx=(i,t,e)=>t in i?Gx(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Ht=(i,t,e)=>(Nx(i,typeof t!="symbol"?t+"":t,e),e);const $x=class ku extends ${constructor(t){t={...ku.defaults,...t};const e=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:Dx,entryPoint:"mainFragment"}}),n=N.from({vertex:j,fragment:Lx,name:"glitch-filter"}),r=document.createElement("canvas");r.width=4,r.height=t.sampleSize??512;const s=new E({source:new Ae({resource:r})});super({gpuProgram:e,glProgram:n,resources:{glitchUniforms:{uSeed:{value:(t==null?void 0:t.seed)??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:(t==null?void 0:t.fillMode)??0,type:"f32"},uOffset:{value:(t==null?void 0:t.offset)??100,type:"f32"},uDirection:{value:(t==null?void 0:t.direction)??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:s.source,uDisplacementSampler:s.source.style}}),Ht(this,"uniforms"),Ht(this,"average",!1),Ht(this,"minSize",8),Ht(this,"sampleSize",512),Ht(this,"_canvas"),Ht(this,"texture"),Ht(this,"_slices",0),Ht(this,"_sizes",new Float32Array(1)),Ht(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=r,this.texture=s,Object.assign(this,t)}apply(t,e,n,r){const{width:s,height:o}=e.frame;this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,t.applyFilter(this,e,n,r)}_randomizeSizes(){const t=this._sizes,e=this._slices-1,n=this.sampleSize,r=Math.min(this.minSize/n,.9/this._slices);if(this.average){const s=this._slices;let o=1;for(let a=0;a<e;a++){const l=o/(s-a),u=Math.max(l*(1-Math.random()*.6),r);t[a]=u,o-=u}t[e]=o}else{let s=1;const o=Math.sqrt(1/this._slices);for(let a=0;a<e;a++){const l=Math.max(o*s*Math.random(),r);t[a]=l,s-=l}t[e]=s}this.shuffle()}shuffle(){const t=this._sizes,e=this._slices-1;for(let n=e;n>0;n--){const r=Math.random()*n>>0,s=t[n];t[n]=t[r],t[r]=s}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,e=this.texture,n=this._canvas.getContext("2d");n.clearRect(0,0,8,t);let r,s=0;for(let o=0;o<this._slices;o++){r=Math.floor(this._offsets[o]*256);const a=this._sizes[o]*t,l=r>0?r:0,u=r<0?-r:0;n.fillStyle=`rgba(${l}, ${u}, 0, 1)`,n.fillRect(0,s>>0,t,a+1>>0),s+=a}e.source.update()}set sizes(t){const e=Math.min(this._slices,t.length);for(let n=0;n<e;n++)this._sizes[n]=t[n]}get sizes(){return this._sizes}set offsets(t){const e=Math.min(this._slices,t.length);for(let n=0;n<e;n++)this._offsets[n]=t[n]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/We}set direction(t){this.uniforms.uDirection=t*We}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){var t;(t=this.texture)==null||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};Ht($x,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var Vx=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,Wx=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,Hx=Object.defineProperty,Xx=(i,t,e)=>t in i?Hx(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,os=(i,t,e)=>(Xx(i,typeof t!="symbol"?t+"":t,e),e);const Yx=class Ru extends ${constructor(t){t={...Ru.DEFAULT_OPTIONS,...t};const e=t.distance??10,n=t.quality??.1,r=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:Wx,entryPoint:"mainFragment"}}),s=N.from({vertex:j,fragment:Vx.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/n/e).toFixed(7)}`).replace(/__DIST__/gi,`${e.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:r,glProgram:s,resources:{glowUniforms:{uDistance:{value:e,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:n,type:"f32"},uKnockout:{value:(t==null?void 0:t.knockout)??!1?1:0,type:"f32"}}},padding:e}),os(this,"uniforms"),os(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new V,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,n,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};os(Yx,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var jx=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform float uParallel;
uniform vec2 uLight;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRay;

uniform vec4 uInputSize;

\${PERLIN}

void main(void) {
    vec2 uDimensions = uDimensions;
    bool uParallel = uParallel > 0.5;
    vec2 uLight = uLight;
    float uAspect = uAspect;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    float d;

    if (uParallel) {
        float _cos = uLight.x;
        float _sin = uLight.y;
        d = (_cos * coord.x) + (_sin * coord.y * uAspect);
    } else {
        float dx = coord.x - uLight.x / uDimensions.x;
        float dy = (coord.y - uLight.y / uDimensions.y) * uAspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    float uTime = uTime;
    vec3 uRay = uRay;

    float gain = uRay[0];
    float lacunarity = uRay[1];
    float alpha = uRay[2];

    vec3 dir = vec3(d, d, 0.0);
    float noise = turb(dir + vec3(uTime, 0.0, 62.1 + uTime) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(vec3(noise), 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    finalColor = texture(uTexture, vTextureCoord) + mist;
}
`,qx=`struct GodrayUniforms {
  uLight: vec2<f32>,
  uParallel: f32,
  uAspect: f32,
  uTime: f32,
  uRay: vec3<f32>,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> godrayUniforms : GodrayUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = godrayUniforms.uDimensions;
  let uParallel: bool = godrayUniforms.uParallel > 0.5;
  let uLight: vec2<f32> = godrayUniforms.uLight;
  let uAspect: f32 = godrayUniforms.uAspect;

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / uDimensions;

  var d: f32;

  if (uParallel) {
    let _cos: f32 = uLight.x;
    let _sin: f32 = uLight.y;
    d = (_cos * coord.x) + (_sin * coord.y * uAspect);
  } else {
    let dx: f32 = coord.x - uLight.x / uDimensions.x;
    let dy: f32 = (coord.y - uLight.y / uDimensions.y) * uAspect;
    let dis: f32 = sqrt(dx * dx + dy * dy) + 0.00001;
    d = dy / dis;
  }

  let uTime: f32 = godrayUniforms.uTime;
  let uRay: vec3<f32> = godrayUniforms.uRay;
  
  let gain = uRay[0];
  let lacunarity = uRay[1];
  let alpha = uRay[2];

  let dir: vec3<f32> = vec3<f32>(d, d, 0.0);
  var noise: f32 = turb(dir + vec3<f32>(uTime, 0.0, 62.1 + uTime) * 0.05, vec3<f32>(480.0, 320.0, 480.0), lacunarity, gain);
  noise = mix(noise, 0.0, 0.3);
  //fade vertically.
  var mist: vec4<f32> = vec4<f32>(vec3<f32>(noise), 1.0) * (1.0 - coord.y);
  mist.a = 1.0;
  // apply user alpha
  mist *= alpha;
  return textureSample(uTexture, uSampler, uv) + mist;
}

\${PERLIN}`,Kx=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,Zx=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

fn moduloVec3(x: vec3<f32>, y: vec3<f32>) -> vec3<f32>
{
  return x - y * floor(x/y);
}
fn mod289Vec3(x: vec3<f32>) -> vec3<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn mod289Vec4(x: vec4<f32>) -> vec4<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn permute4(x: vec4<f32>) -> vec4<f32>
{
    return mod289Vec4(((x * 34.0) + 1.0) * x);
}
fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32>
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
fn fade3(t: vec3<f32>) -> vec3<f32>
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

// Classic Perlin noise, periodic variant
fn perlinNoise3(P: vec3<f32>, rep: vec3<f32>) -> f32
{
    var Pi0: vec3<f32> = moduloVec3(floor(P), rep); // Integer part, modulo period
    var Pi1: vec3<f32> = moduloVec3(Pi0 + vec3<f32>(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289Vec3(Pi0);
    Pi1 = mod289Vec3(Pi1);
    let Pf0: vec3<f32> = fract(P); // Fractional part for interpolation
    let Pf1: vec3<f32> = Pf0 - vec3<f32>(1.0); // Fractional part - 1.0
    let ix: vec4<f32> = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    let iy: vec4<f32> = vec4<f32>(Pi0.yy, Pi1.yy);
    let iz0: vec4<f32> = Pi0.zzzz;
    let iz1: vec4<f32> = Pi1.zzzz;
    let ixy: vec4<f32> = permute4(permute4(ix) + iy);
    let ixy0: vec4<f32> = permute4(ixy + iz0);
    let ixy1: vec4<f32> = permute4(ixy + iz1);
    var gx0: vec4<f32> = ixy0 * (1.0 / 7.0);
    var gy0: vec4<f32> = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    let gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);
    let sz0: vec4<f32> = step(gz0, vec4<f32>(0.0));
    gx0 -= sz0 * (step(vec4<f32>(0.0), gx0) - 0.5);
    gy0 -= sz0 * (step(vec4<f32>(0.0), gy0) - 0.5);
    var gx1: vec4<f32> = ixy1 * (1.0 / 7.0);
    var gy1: vec4<f32> = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    let gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);
    let sz1: vec4<f32> = step(gz1, vec4<f32>(0.0));
    gx1 -= sz1 * (step(vec4<f32>(0.0), gx1) - 0.5);
    gy1 -= sz1 * (step(vec4<f32>(0.0), gy1) - 0.5);
    var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);
    var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);
    var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);
    var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);
    var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);
    var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);
    var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);
    var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);
    let norm0: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    let norm1: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    let n000: f32 = dot(g000, Pf0);
    let n100: f32 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));
    let n010: f32 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));
    let n110: f32 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));
    let n001: f32 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));
    let n101: f32 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));
    let n011: f32 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));
    let n111: f32 = dot(g111, Pf1);
    let fade_xyz: vec3<f32> = fade3(Pf0);
    let n_z: vec4<f32> = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), fade_xyz.z);
    let n_yz: vec2<f32> = mix(n_z.xy, n_z.zw, fade_xyz.y);
    let n_xyz: f32 = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
fn turb(P: vec3<f32>, rep: vec3<f32>, lacunarity: f32, gain: f32) -> f32
{
    var sum: f32 = 0.0;
    var sc: f32 = 1.0;
    var totalgain: f32 = 1.0;
    for (var i = 0.0; i < 6.0; i += 1)
    {
        sum += totalgain * perlinNoise3(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}`,Qx=Object.defineProperty,Jx=(i,t,e)=>t in i?Qx(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,De=(i,t,e)=>(Jx(i,typeof t!="symbol"?t+"":t,e),e);const t0=class Ou extends ${constructor(t){t={...Ou.DEFAULT_OPTIONS,...t};const e=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:qx.replace("${PERLIN}",Zx),entryPoint:"mainFragment"}}),n=N.from({vertex:j,fragment:jx.replace("${PERLIN}",Kx),name:"god-ray-filter"});super({gpuProgram:e,glProgram:n,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),De(this,"uniforms"),De(this,"time",0),De(this,"_angleLight",[0,0]),De(this,"_angle",0),De(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,e,n,r){const s=e.frame.width,o=e.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,this.uniforms.uTime=this.time,t.applyFilter(this,e,n,r)}get angle(){return this._angle}set angle(t){this._angle=t;const e=t*We;this._angleLight[0]=Math.cos(e),this._angleLight[1]=Math.sin(e)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};De(t0,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var e0=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uHsl;
uniform float uAlpha;
uniform float uColorize;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 resultRGB = color.rgb;

    float hue = uHsl[0];
    float saturation = uHsl[1];
    float lightness = uHsl[2];

    // colorize
    if (uColorize > 0.5) {
        resultRGB = vec3(getWeightedAverage(resultRGB), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    finalColor = mix(color, vec4(resultRGB, color.a), uAlpha);
}
`,i0=`struct HslUniforms {
  uHsl:vec3<f32>,
  uColorize:f32,
  uAlpha:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> hslUniforms : HslUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
    var resultRGB: vec3<f32> = color.rgb;

    let hue: f32 = hslUniforms.uHsl[0];
    let saturation: f32 = hslUniforms.uHsl[1];
    let lightness: f32 = hslUniforms.uHsl[2];

    // colorize
    if (hslUniforms.uColorize > 0.5) {
        resultRGB = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    let average: f32 = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3<f32>(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    return mix(color, vec4<f32>(resultRGB, color.a), hslUniforms.uAlpha);
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const k: vec3<f32> = vec3(0.57735, 0.57735, 0.57735);

fn hueShift(color: vec3<f32>, angle: f32) -> vec3<f32> 
{
    let cosAngle: f32 = cos(angle);
    return vec3<f32>(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}`,n0=Object.defineProperty,r0=(i,t,e)=>t in i?n0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,as=(i,t,e)=>(r0(i,typeof t!="symbol"?t+"":t,e),e);const s0=class Bu extends ${constructor(t){t={...Bu.DEFAULT_OPTIONS,...t};const e=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:i0,entryPoint:"mainFragment"}}),n=N.from({vertex:j,fragment:e0,name:"hsl-adjustment-filter"});super({gpuProgram:e,glProgram:n,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),as(this,"uniforms"),as(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,Object.assign(this,t)}get hue(){return this._hue}set hue(t){this._hue=t,this.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.uniforms.uHsl[1]}set saturation(t){this.uniforms.uHsl[1]=t}get lightness(){return this.uniforms.uHsl[2]}set lightness(t){this.uniforms.uHsl[2]=t}get colorize(){return this.uniforms.uColorize===1}set colorize(t){this.uniforms.uColorize=t?1:0}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};as(s0,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var o0=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    vec2 velocity = uVelocity / uInputSize.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture(uTexture, vTextureCoord + bias);
    }
    finalColor = color / float(uKernelSize);
}
`,a0=`struct MotionBlurUniforms {
  uVelocity: vec2<f32>,
  uKernelSize: f32,
  uOffset: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> motionBlurUniforms : MotionBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uVelocity = motionBlurUniforms.uVelocity;
  let uKernelSize = motionBlurUniforms.uKernelSize;
  let uOffset = motionBlurUniforms.uOffset;

  let velocity: vec2<f32> = uVelocity / gfu.uInputSize.xy;
  let offset: f32 = -uOffset / length(uVelocity) - 0.5;
  let k: i32 = i32(min(uKernelSize - 1, MAX_KERNEL_SIZE - 1));

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  for(var i: i32 = 0; i < k; i += 1) {
    let bias: vec2<f32> = velocity * (f32(i) / f32(k) + offset);
    color += textureSample(uTexture, uSampler, uv + bias);
  }
  
  return select(color / f32(uKernelSize), textureSample(uTexture, uSampler, uv), uKernelSize == 0);
}

const MAX_KERNEL_SIZE: f32 = 2048;`,l0=Object.defineProperty,u0=(i,t,e)=>t in i?l0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,ls=(i,t,e)=>(u0(i,typeof t!="symbol"?t+"":t,e),e);const h0=class Eu extends ${constructor(...t){let e=t[0]??{};if(Array.isArray(e)||"x"in e&&"y"in e||e instanceof at){F("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const s="x"in e?e.x:e[0],o="y"in e?e.y:e[1];e={velocity:{x:s,y:o}},t[1]!==void 0&&(e.kernelSize=t[1]),t[2]!==void 0&&(e.offset=t[2])}e={...Eu.DEFAULT_OPTIONS,...e};const n=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:a0,entryPoint:"mainFragment"}}),r=N.from({vertex:j,fragment:o0,name:"motion-blur-filter"});super({gpuProgram:n,glProgram:r,resources:{motionBlurUniforms:{uVelocity:{value:e.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(e.kernelSize??5),type:"i32"},uOffset:{value:e.offset,type:"f32"}}}}),ls(this,"uniforms"),ls(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,e)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};ls(h0,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var c0=`in vec2 vTextureCoord;
out vec4 finalColor;

const int MAX_COLORS = \${MAX_COLORS};

uniform sampler2D uTexture;
uniform vec3 uOriginalColors[MAX_COLORS];
uniform vec3 uTargetColors[MAX_COLORS];
uniform float uTolerance;

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);

    float alpha = finalColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = finalColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < uTolerance)
      {
        vec3 targetColor = uTargetColors[i];
        finalColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`,f0=`struct MultiColorReplaceUniforms {
  uOriginalColors: array<vec3<f32>, MAX_COLORS>,
  uTargetColors: array<vec3<f32>, MAX_COLORS>,
  uTolerance:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> multiColorReplaceUniforms : MultiColorReplaceUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOriginalColors = multiColorReplaceUniforms.uOriginalColors;
  let uTargetColors = multiColorReplaceUniforms.uTargetColors;
  let uTolerance = multiColorReplaceUniforms.uTolerance;

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let alpha: f32 = color.a;

  if (alpha > 0.0001)
  {
    var modColor: vec3<f32> = vec3<f32>(color.rgb) / alpha;

    for(var i: i32 = 0; i < MAX_COLORS; i += 1)
    {
      let origColor: vec3<f32> = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      let colorDiff: vec3<f32> = origColor - modColor;
      
      if (length(colorDiff) < uTolerance)
      {
        let targetColor: vec3<f32> = uTargetColors[i];
        color = vec4((targetColor + colorDiff) * alpha, alpha);
        return color;
      }
    }
  }

  return color;
}

const MAX_COLORS: i32 = \${MAX_COLORS};`,d0=Object.defineProperty,p0=(i,t,e)=>t in i?d0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,xn=(i,t,e)=>(p0(i,typeof t!="symbol"?t+"":t,e),e);const m0=class Uu extends ${constructor(...t){let e=t[0]??{};Array.isArray(e)&&(F("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),e={replacements:e},t[1]&&(e.tolerance=t[1]),t[2]&&(e.maxColors=t[2])),e={...Uu.DEFAULT_OPTIONS,...e};const n=e.maxColors??e.replacements.length,r=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:f0.replace(/\$\{MAX_COLORS\}/g,n.toFixed(0)),entryPoint:"mainFragment"}}),s=N.from({vertex:j,fragment:c0.replace(/\$\{MAX_COLORS\}/g,n.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:r,glProgram:s,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*n),type:"vec3<f32>",size:n},uTargetColors:{value:new Float32Array(3*n),type:"vec3<f32>",size:n},uTolerance:{value:e.tolerance,type:"f32"}}}}),xn(this,"uniforms"),xn(this,"_replacements",[]),xn(this,"_maxColors"),this._maxColors=n,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=e.replacements}set replacements(t){const e=this.uniforms.uOriginalColors,n=this.uniforms.uTargetColors,r=t.length,s=new V;if(r>this._maxColors)throw new Error(`Length of replacements (${r}) exceeds the maximum colors length (${this._maxColors})`);e[r*3]=-1;let o,a,l;for(let u=0;u<r;u++){const h=t[u];s.setValue(h[0]),[o,a,l]=s.toArray(),e[u*3]=o,e[u*3+1]=a,e[u*3+2]=l,s.setValue(h[1]),[o,a,l]=s.toArray(),n[u*3]=o,n[u*3+1]=a,n[u*3+2]=l}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){F("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return F("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};xn(m0,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var g0=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSepia;
uniform vec2 uNoise;
uniform vec3 uScratch;
uniform vec3 uVignetting;
uniform float uSeed;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    if (uSepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + uSepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignette = uVignetting[0];
    float vignetteAlpha = uVignetting[1];
    float vignetteBlur = uVignetting[2];

    if (vignette > 0.0)
    {
        float outter = SQRT_2 - vignette * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= uDimensions.y / uDimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignetteBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignetteAlpha);
    }

    float scratch = uScratch[0];
    float scratchDensity = uScratch[1];
    float scratchWidth = uScratch[2];

    if (scratchDensity > uSeed && scratch != 0.0)
    {
        float phase = uSeed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(uSeed * dist, abs(s - uSeed * dist)));
        if (d < uSeed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / uDimensions.x * (0.75 + uSeed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    float noise = uNoise[0];
    float noiseSize = uNoise[1];

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + uSeed * 512.0, 1024.0 - uSeed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * uSeed) - 0.5;
        color += _noise * noise;
    }

    finalColor.rgb = color;
}`,x0=`struct OldFilmUniforms {
    uSepia: f32,
    uNoise: vec2<f32>,
    uScratch: vec3<f32>,
    uVignetting: vec3<f32>,
    uSeed: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> oldFilmUniforms : OldFilmUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  if (oldFilmUniforms.uSepia > 0.)
  {
    color = vec4<f32>(sepia(color.rgb), color.a);
  }

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / oldFilmUniforms.uDimensions;

  if (oldFilmUniforms.uVignetting[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  let uScratch = oldFilmUniforms.uScratch; 

  if (uScratch[1] > oldFilmUniforms.uSeed && uScratch[0] != 0.)
  {
    color = vec4<f32>(scratch(color.rgb, coord), color.a);
  }

  let uNoise = oldFilmUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  return color;
}

const SQRT_2: f32 = 1.414213;
const SEPIA_RGB: vec3<f32> = vec3<f32>(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn overlay(src: vec3<f32>, dst: vec3<f32>) -> vec3<f32>
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)

    return vec3<f32>(
      select((1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (2.0 * src.x * dst.x), (dst.x <= 0.5)), 
      select((1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (2.0 * src.y * dst.y), (dst.y <= 0.5)),
      select((1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)), (2.0 * src.z * dst.z), (dst.z <= 0.5))
    );
}

fn sepia(co: vec3<f32>) -> vec3<f32>
{
  let gray: f32 = (co.x + co.y + co.z) / 3.0;
  let grayscale: vec3<f32> = vec3<f32>(gray);
  let color = overlay(SEPIA_RGB, grayscale);
  return grayscale + oldFilmUniforms.uSepia * (color - grayscale);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignetting = oldFilmUniforms.uVignetting;
  let uDimensions = oldFilmUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignetting[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(vec2<f32>(0.5) - coord);
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetting[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignetting[1]);
}

fn scratch(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;
  let uScratch = oldFilmUniforms.uScratch;
  let uSeed = oldFilmUniforms.uSeed;
  let uDimensions = oldFilmUniforms.uDimensions;

  let phase: f32 = uSeed * 256.0;
  let s: f32 = modulo(floor(phase), 2.0);
  let dist: f32 = 1.0 / uScratch[1];
  let d: f32 = distance(coord, vec2<f32>(uSeed * dist, abs(s - uSeed * dist)));

  if (d < uSeed * 0.6 + 0.4)
  {
    let period: f32 = uScratch[1] * 10.0;

    let xx: f32 = coord.x * period + phase;
    let aa: f32 = abs(modulo(xx, 0.5) * 4.0);
    let bb: f32 = modulo(floor(xx / 0.5), 2.0);
    let yy: f32 = (1.0 - bb) * aa + bb * (2.0 - aa);

    let kk: f32 = 2.0 * period;
    let dw: f32 = uScratch[2] / uDimensions.x * (0.75 + uSeed);
    let dh: f32 = dw * kk;

    var tine: f32 = (yy - (2.0 - dh));

    if (tine > 0.0) {
        let _sign: f32 = sign(uScratch[0]);

        tine = s * tine / period + uScratch[0] + 0.1;
        tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

        color *= tine;
    }
  }

  return color;
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = oldFilmUniforms.uNoise;
  let uSeed = oldFilmUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}`,v0=Object.defineProperty,y0=(i,t,e)=>t in i?v0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,us=(i,t,e)=>(y0(i,typeof t!="symbol"?t+"":t,e),e);const _0=class Lu extends ${constructor(t){t={...Lu.DEFAULT_OPTIONS,...t};const e=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:x0,entryPoint:"mainFragment"}}),n=N.from({vertex:j,fragment:g0,name:"old-film-filter"});super({gpuProgram:e,glProgram:n,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),us(this,"uniforms"),us(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,e,n,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,e,n,r)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};us(_0,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var b0=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`,S0=`struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,w0=Object.defineProperty,C0=(i,t,e)=>t in i?w0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,_e=(i,t,e)=>(C0(i,typeof t!="symbol"?t+"":t,e),e);const Ls=class xe extends ${constructor(...t){let e=t[0]??{};typeof e=="number"&&(F("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),e={thickness:e},t[1]!==void 0&&(e.color=t[1]),t[2]!==void 0&&(e.quality=t[2]),t[3]!==void 0&&(e.alpha=t[3]),t[4]!==void 0&&(e.knockout=t[4])),e={...xe.DEFAULT_OPTIONS,...e};const n=e.quality??.1,r=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:S0,entryPoint:"mainFragment"}}),s=N.from({vertex:j,fragment:b0.replace(/\$\{ANGLE_STEP\}/,xe.getAngleStep(n).toFixed(7)),name:"outline-filter"});super({gpuProgram:r,glProgram:s,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:e.knockout?1:0,type:"f32"}}}}),_e(this,"uniforms"),_e(this,"_thickness"),_e(this,"_quality"),_e(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=xe.getAngleStep(n),this._color=new V,this.color=e.color??0,Object.assign(this,e)}apply(t,e,n,r){this.uniforms.uThickness[0]=this.thickness/e.source.width,this.uniforms.uThickness[1]=this.thickness/e.source.height,t.applyFilter(this,e,n,r)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*xe.MAX_SAMPLES,xe.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,n,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=xe.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};_e(Ls,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});_e(Ls,"MIN_SAMPLES",1);_e(Ls,"MAX_SAMPLES",100);var A0=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    float aspect = uInputSize.y / uInputSize.x;
    vec2 center = uCenter.xy / uInputSize.xy;
    float gradient = uRadius / uInputSize.x * 0.3;
    float radius = uRadius / uInputSize.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            finalColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture(uTexture, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    finalColor = color / float(uKernelSize);
}
`,T0=`struct RadialBlurUniforms {
  uRadian: f32,
  uCenter: vec2<f32>,
  uKernelSize: f32,
  uRadius: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> radialBlurUniforms : RadialBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uRadian = radialBlurUniforms.uRadian;
  let uCenter = radialBlurUniforms.uCenter;
  let uKernelSize = radialBlurUniforms.uKernelSize;
  let uRadius = radialBlurUniforms.uRadius;
  
  var returnColorOnly = false;

  if (uKernelSize == 0)
  {
    returnColorOnly = true;
  }

  let aspect: f32 = gfu.uInputSize.y / gfu.uInputSize.x;
  let center: vec2<f32> = uCenter.xy / gfu.uInputSize.xy;
  let gradient: f32 = uRadius / gfu.uInputSize.x * 0.3;
  let radius: f32 = uRadius / gfu.uInputSize.x - gradient * 0.5;
  let k: i32 = i32(uKernelSize - 1);

  var coord: vec2<f32> = uv;
  let dir: vec2<f32> = vec2<f32>(center - coord);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * aspect));

  var radianStep: f32 = uRadian;
  
  if (radius >= 0.0 && dist > radius)
  {
    let delta: f32 = dist - radius;
    let gap: f32 = gradient;
    let scale: f32 = 1.0 - abs(delta / gap);
    if (scale <= 0.0) {
      returnColorOnly = true;
    }
    radianStep *= scale;
  }

  radianStep /= f32(k);

  let s: f32 = sin(radianStep);
  let c: f32 = cos(radianStep);
  let rotationMatrix: mat2x2<f32> = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let baseColor = vec4<f32>(color);

  let minK: i32 = min(i32(uKernelSize) - 1, MAX_KERNEL_SIZE - 1);

  for(var i: i32 = 0; i < minK; i += 1) 
  {
    coord -= center;
    coord.y *= aspect;
    coord = rotationMatrix * coord;
    coord.y /= aspect;
    coord += center;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, coord);
    // switch to pre-multiplied alpha to correctly blur transparent images
    // sample.rgb *= sample.a;
    color += sample;
  }

  return select(color / f32(uKernelSize), baseColor, returnColorOnly);
}

const MAX_KERNEL_SIZE: i32 = 2048;`,P0=Object.defineProperty,I0=(i,t,e)=>t in i?P0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,vn=(i,t,e)=>(I0(i,typeof t!="symbol"?t+"":t,e),e);const M0=class Du extends ${constructor(...t){let e=t[0]??{};if(typeof e=="number"){if(F("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),e={angle:e},t[1]){const s="x"in t[1]?t[1].x:t[1][0],o="y"in t[1]?t[1].y:t[1][1];e.center={x:s,y:o}}t[2]&&(e.kernelSize=t[2]),t[3]&&(e.radius=t[3])}e={...Du.DEFAULT_OPTIONS,...e};const n=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:T0,entryPoint:"mainFragment"}}),r=N.from({vertex:j,fragment:A0,name:"radial-blur-filter"});super({gpuProgram:n,glProgram:r,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uKernelSize:{value:e.kernelSize,type:"i32"},uRadius:{value:e.radius,type:"f32"}}}}),vn(this,"uniforms"),vn(this,"_angle"),vn(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,e)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};vn(M0,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var F0=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uMirror;
uniform float uBoundary;
uniform vec2 uAmplitude;
uniform vec2 uWavelength;
uniform vec2 uAlpha;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
    vec2 coord = pixelCoord / uDimensions;

    if (coord.y < uBoundary) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    float k = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
    float areaY = uBoundary * uDimensions.y / uInputSize.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = uMirror > 0.5 ? v : vTextureCoord.y;

    float _amplitude = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / uInputSize.x;
    float _waveLength = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / uInputSize.y;
    float _alpha = (uAlpha.y - uAlpha.x) * k + uAlpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - uTime) * _amplitude;
    x = clamp(x, uInputClamp.x, uInputClamp.z);

    vec4 color = texture(uTexture, vec2(x, y));

    finalColor = color * _alpha;
}
`,z0=`struct ReflectionUniforms {
  uMirror: f32,
  uBoundary: f32,
  uAmplitude: vec2<f32>,
  uWavelength: vec2<f32>,
  uAlpha: vec2<f32>,
  uTime: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> reflectionUniforms : ReflectionUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = reflectionUniforms.uDimensions;
  let uBoundary: f32 = reflectionUniforms.uBoundary;
  let uMirror: bool = reflectionUniforms.uMirror > 0.5;
  let uAmplitude: vec2<f32> = reflectionUniforms.uAmplitude;
  let uWavelength: vec2<f32> = reflectionUniforms.uWavelength;
  let uAlpha: vec2<f32> = reflectionUniforms.uAlpha;
  let uTime: f32 = reflectionUniforms.uTime;

  let pixelCoord: vec2<f32> = uv * gfu.uInputSize.xy;
  let coord: vec2<f32> = pixelCoord /uDimensions;
  var returnColorOnly: bool = false;

  if (coord.y < uBoundary) {
    returnColorOnly = true;
  }

  let k: f32 = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
  let areaY: f32 = uBoundary * uDimensions.y / gfu.uInputSize.y;
  let v: f32 = areaY + areaY - uv.y;
  let y: f32 = select(uv.y, v, uMirror);

  let amplitude: f32 = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / gfu.uInputSize.x;
  let waveLength: f32 = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / gfu.uInputSize.y;
  let alpha: f32 = select((uAlpha.y - uAlpha.x) * k + uAlpha.x, 1., returnColorOnly);

  var x: f32 = uv.x + cos(v * 6.28 / waveLength - uTime) * amplitude;
  x = clamp(x, gfu.uInputClamp.x, gfu.uInputClamp.z);
  
  return textureSample(uTexture, uSampler, select(vec2<f32>(x, y), uv, returnColorOnly)) * alpha;
}

fn rand(co: vec2<f32>) -> f32 
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}`,k0=Object.defineProperty,R0=(i,t,e)=>t in i?k0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,hs=(i,t,e)=>(R0(i,typeof t!="symbol"?t+"":t,e),e);const O0=class Gu extends ${constructor(t){t={...Gu.DEFAULT_OPTIONS,...t};const e=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:z0,entryPoint:"mainFragment"}}),n=N.from({vertex:j,fragment:F0,name:"reflection-filter"});super({gpuProgram:e,glProgram:n,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),hs(this,"uniforms"),hs(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,e,n,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,e,n,r)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};hs(O0,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var B0=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`,E0=`struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`,U0=Object.defineProperty,L0=(i,t,e)=>t in i?U0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Nu=(i,t,e)=>(L0(i,typeof t!="symbol"?t+"":t,e),e);const D0=class $u extends ${constructor(...t){let e=t[0]??{};(Array.isArray(e)||"x"in e&&"y"in e)&&(F("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),e={red:e},t[1]!==void 0&&(e.green=t[1]),t[2]!==void 0&&(e.blue=t[2])),e={...$u.DEFAULT_OPTIONS,...e};const n=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:E0,entryPoint:"mainFragment"}}),r=N.from({vertex:j,fragment:B0,name:"rgb-split-filter"});super({gpuProgram:n,glProgram:r,resources:{rgbSplitUniforms:{uRed:{value:e.red,type:"vec2<f32>"},uGreen:{value:e.green,type:"vec2<f32>"},uBlue:{value:e.blue,type:"vec2<f32>"}}}}),Nu(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,e)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};Nu(D0,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var G0=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uCenter;
uniform float uTime;
uniform float uSpeed;
uniform vec4 uWave;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159;

void main()
{
    float uAmplitude = uWave[0];
    float uWavelength = uWave[1];
    float uBrightness = uWave[2];
    float uRadius = uWave[3];

    float halfWavelength = uWavelength * 0.5 / uInputSize.x;
    float maxRadius = uRadius / uInputSize.x;
    float currentRadius = uTime * uSpeed / uInputSize.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            finalColor = texture(uTexture, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - uCenter / uInputSize.xy);
    dir.y *= uInputSize.y / uInputSize.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );

    vec2 offset = diffUV * powDiff / uInputSize.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // finalColor = texture(uTexture, vTextureCoord + offset);

    color.rgb *= 1.0 + (uBrightness - 1.0) * p * fade;

    finalColor = color;
}
`,N0=`
struct ShockWaveUniforms {
    uTime: f32,
    uOffset: vec2<f32>,
    uSpeed: f32,
    uWave: vec4<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> shockwaveUniforms : ShockWaveUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {

    let uTime = shockwaveUniforms.uTime;
    let uOffset = shockwaveUniforms.uOffset;
    let uSpeed = shockwaveUniforms.uSpeed;
    let uAmplitude = shockwaveUniforms.uWave[0];
    let uWavelength = shockwaveUniforms.uWave[1];
    let uBrightness = shockwaveUniforms.uWave[2];
    let uRadius = shockwaveUniforms.uWave[3];
    let halfWavelength: f32 = uWavelength * 0.5 / gfu.uInputSize.x;
    let maxRadius: f32 = uRadius / gfu.uInputSize.x;
    let currentRadius: f32 = uTime * uSpeed / gfu.uInputSize.x;
    var fade: f32 = 1.0;
    var returnColorOnly: bool = false;
    
    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            returnColorOnly = true;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }
    var dir: vec2<f32> = vec2<f32>(uv - uOffset / gfu.uInputSize.xy);
    dir.y *= gfu.uInputSize.y / gfu.uInputSize.x;

    let dist:f32 = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        returnColorOnly = true;
    }

    let diffUV: vec2<f32> = normalize(dir);
    let diff: f32 = (dist - currentRadius) / halfWavelength;
    let p: f32 = 1.0 - pow(abs(diff), 2.0);
    let powDiff: f32 = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );
    let offset: vec2<f32> = diffUV * powDiff / gfu.uInputSize.xy;
    // Do clamp :
    let coord: vec2<f32> = uv + offset;
    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);

    var clampedColor: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    
    if (boolVec2(coord, clampedCoord)) 
    {
        clampedColor *= max(0.0, 1.0 - length(coord - clampedCoord));
    }
    // No clamp :
    var finalColor = clampedColor;

    return select(finalColor, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn boolVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
    if (x.x == y.x && x.y == y.y)
    {
        return true;
    }
    
    return false;
}

const PI: f32 = 3.14159265358979323846264;
`,$0=Object.defineProperty,V0=(i,t,e)=>t in i?$0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,cs=(i,t,e)=>(V0(i,typeof t!="symbol"?t+"":t,e),e);const W0=class Vu extends ${constructor(...t){let e=t[0]??{};(Array.isArray(e)||"x"in e&&"y"in e)&&(F("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),e={center:e,...t[1]},t[2]!==void 0&&(e.time=t[2])),e={...Vu.DEFAULT_OPTIONS,...e};const n=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:N0,entryPoint:"mainFragment"}}),r=N.from({vertex:j,fragment:G0,name:"shockwave-filter"});super({gpuProgram:n,glProgram:r,resources:{shockwaveUniforms:{uTime:{value:e.time,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uSpeed:{value:e.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),cs(this,"uniforms"),cs(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,e)}apply(t,e,n,r){this.uniforms.uTime=this.time,t.applyFilter(this,e,n,r)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};cs(W0,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var H0=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

void main() {
    vec4 diffuseColor = texture(uTexture, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * uInputSize.xy) / uDimensions;
    vec4 light = texture(uMapTexture, lightCoord);
    vec3 ambient = uColor.rgb * uAlpha;
    vec3 intensity = ambient + light.rgb;
    vec3 color = diffuseColor.rgb * intensity;
    finalColor = vec4(color, diffuseColor.a);
}
`,X0=`struct SimpleLightmapUniforms {
  uColor: vec3<f32>,
  uAlpha: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> simpleLightmapUniforms : SimpleLightmapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
) -> @location(0) vec4<f32> {
  let uColor = simpleLightmapUniforms.uColor;
  let uAlpha = simpleLightmapUniforms.uAlpha;
  let uDimensions = simpleLightmapUniforms.uDimensions;

  let diffuseColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightCoord: vec2<f32> = (uv * gfu.uInputSize.xy) / simpleLightmapUniforms.uDimensions;
  let light: vec4<f32> = textureSample(uMapTexture, uMapSampler, lightCoord);
  let ambient: vec3<f32> = uColor * uAlpha;
  let intensity: vec3<f32> = ambient + light.rgb;
  let finalColor: vec3<f32> = diffuseColor.rgb * intensity;
  return vec4<f32>(finalColor, diffuseColor.a);
}`,Y0=Object.defineProperty,j0=(i,t,e)=>t in i?Y0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,yn=(i,t,e)=>(j0(i,typeof t!="symbol"?t+"":t,e),e);const q0=class Wu extends ${constructor(...t){let e=t[0]??{};if(e instanceof E&&(F("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),e={lightMap:e},t[1]!==void 0&&(e.color=t[1]),t[2]!==void 0&&(e.alpha=t[2])),e={...Wu.DEFAULT_OPTIONS,...e},!e.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const n=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:X0,entryPoint:"mainFragment"}}),r=N.from({vertex:j,fragment:H0,name:"simple-lightmap-filter"});super({gpuProgram:n,glProgram:r,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:e.lightMap.source,uMapSampler:e.lightMap.source.style}}),yn(this,"uniforms"),yn(this,"_color"),yn(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new V,this.color=e.color??0,Object.assign(this,e)}apply(t,e,n,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,t.applyFilter(this,e,n,r)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,n,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};yn(q0,"DEFAULT_OPTIONS",{lightMap:E.WHITE,color:0,alpha:1});var K0=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uBlur;
uniform vec2 uStart;
uniform vec2 uEnd;
uniform vec2 uDelta;
uniform vec2 uDimensions;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float blur = uBlur[0];
    float gradientBlur = uBlur[1];

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(uStart.y - uEnd.y, uEnd.x - uStart.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * uDimensions - uStart, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture(uTexture, vTextureCoord + uDelta / uDimensions * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    finalColor = color;
}
`,Z0=`struct TiltShiftUniforms {
  uBlur: vec2<f32>,
  uStart: vec2<f32>,
  uEnd: vec2<f32>,
  uDelta: vec2<f32>,
  uDimensions: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> tiltShiftUniforms : TiltShiftUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uBlur = tiltShiftUniforms.uBlur[0];
  let uBlurGradient = tiltShiftUniforms.uBlur[1];
  let uStart = tiltShiftUniforms.uStart;
  let uEnd = tiltShiftUniforms.uEnd;
  let uDelta = tiltShiftUniforms.uDelta;
  let uDimensions = tiltShiftUniforms.uDimensions;

  var color: vec4<f32> = vec4<f32>(0.0);
  var total: f32 = 0.0;

  let offset: f32 = random(position, vec3<f32>(12.9898, 78.233, 151.7182), 0.0);
  let normal: vec2<f32> = normalize(vec2<f32>(uStart.y - uEnd.y, uEnd.x - uStart.x));
  let radius: f32 = smoothstep(0.0, 1.0, abs(dot(uv * uDimensions - uStart, normal)) / uBlurGradient) * uBlur;

  for (var t: f32 = -30.0; t <= 30.0; t += 1.0)
  {
    var percent: f32 = (t + offset - 0.5) / 30.0;
    var weight: f32 = 1.0 - abs(percent);
    var sample: vec4<f32> = textureSample(uTexture, uSampler, uv + uDelta / uDimensions * percent * radius);
    sample = vec4<f32>(sample.xyz * sample.a, sample.a); // multiply sample.rgb with sample.a
    color += sample * weight;
    total += weight;
  }

  color /= total;
  color = vec4<f32>(color.xyz / (color.a + 0.00001), color.a); // divide color.rgb by color.a + 0.00001

  return color;
}


fn random(position: vec4<f32>, scale: vec3<f32>, seed: f32) -> f32
{
  return fract(sin(dot(position.xyz + seed, scale)) * 43758.5453 + seed);
}`,Q0=Object.defineProperty,J0=(i,t,e)=>t in i?Q0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,fs=(i,t,e)=>(J0(i,typeof t!="symbol"?t+"":t,e),e);const tv=class Hu extends ${constructor(t){const{width:e,height:n}=im.defaultOptions;t={...Hu.DEFAULT_OPTIONS,start:{x:0,y:n/2},end:{x:e,y:n/2},...t};const r=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:Z0,entryPoint:"mainFragment"}}),s=N.from({vertex:j,fragment:K0,name:"tilt-shift-axis-filter"});super({gpuProgram:r,glProgram:s,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur,t.gradientBlur]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([0,0]),type:"vec2<f32>"},uDimensions:{value:new Float32Array([e,n]),type:"vec2<f32>"}}}}),fs(this,"uniforms"),fs(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis}updateDimensions(t){const{uDimensions:e}=this.uniforms;e[0]=t.frame.width,e[1]=t.frame.height}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,e=this.uniforms.uStart,n=t.x-e.x,r=t.y-e.y,s=Math.sqrt(n*n+r*r),o=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=o?-r/s:n/s,this.uniforms.uDelta[1]=o?n/s:r/s}};fs(tv,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600});var ev=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTwist;
uniform vec2 uOffset;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= uOffset;

    float dist = length(coord);
    float uRadius = uTwist[0];
    float uAngle = uTwist[1];

    if (dist < uRadius)
    {
        float ratioDist = (uRadius - dist) / uRadius;
        float angleMod = ratioDist * ratioDist * uAngle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += uOffset;

    return coord;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = twist(coord);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`,iv=`struct TwistUniforms {
  uTwist:vec2<f32>,
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> twistUniforms : TwistUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  return textureSample(uTexture, uSampler, unmapCoord(twist(mapCoord(uv))));
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn twist(coord: vec2<f32>) -> vec2<f32>
{
  var twistedCoord: vec2<f32> = coord;
  let uRadius = twistUniforms.uTwist[0];
  let uAngle = twistUniforms.uTwist[1];
  let uOffset = twistUniforms.uOffset;

  twistedCoord -= uOffset;
  
  let dist = length(twistedCoord);

  if (dist < uRadius)
  {
    let ratioDist: f32 = (uRadius - dist) / uRadius;
    let angleMod: f32 = ratioDist * ratioDist * uAngle;
    let s: f32 = sin(angleMod);
    let c: f32 = cos(angleMod);
    twistedCoord = vec2<f32>(twistedCoord.x * c - twistedCoord.y * s, twistedCoord.x * s + twistedCoord.y * c);
  }

  twistedCoord += uOffset;
  return twistedCoord;
}
`,nv=Object.defineProperty,rv=(i,t,e)=>t in i?nv(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Xu=(i,t,e)=>(rv(i,typeof t!="symbol"?t+"":t,e),e);const sv=class Yu extends ${constructor(t){t={...Yu.DEFAULT_OPTIONS,...t};const e=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:iv,entryPoint:"mainFragment"}}),n=N.from({vertex:j,fragment:ev,name:"twist-filter"});super({gpuProgram:e,glProgram:n,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),Xu(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};Xu(sv,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var ov=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uStrength;
uniform vec2 uCenter;
uniform vec2 uRadii;

uniform vec4 uInputSize;

const float MAX_KERNEL_SIZE = \${MAX_KERNEL_SIZE};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {
    float minGradient = uRadii[0] * 0.3;
    float innerRadius = (uRadii[0] + minGradient * 0.5) / uInputSize.x;

    float gradient = uRadii[1] * 0.3;
    float radius = (uRadii[1] - gradient * 0.5) / uInputSize.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / uInputSize.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * uInputSize.y / uInputSize.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / uInputSize.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture(uTexture, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture(uTexture, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,av=`struct ZoomBlurUniforms {
    uStrength:f32,
    uCenter:vec2<f32>,
    uRadii:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> zoomBlurUniforms : ZoomBlurUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uStrength = zoomBlurUniforms.uStrength;
  let uCenter = zoomBlurUniforms.uCenter;
  let uRadii = zoomBlurUniforms.uRadii;

  let minGradient: f32 = uRadii[0] * 0.3;
  let innerRadius: f32 = (uRadii[0] + minGradient * 0.5) / gfu.uInputSize.x;

  let gradient: f32 = uRadii[1] * 0.3;
  let radius: f32 = (uRadii[1] - gradient * 0.5) / gfu.uInputSize.x;

  let MAX_KERNEL_SIZE: f32 = \${MAX_KERNEL_SIZE};

  var countLimit: f32 = MAX_KERNEL_SIZE;

  var dir: vec2<f32> = vec2<f32>(uCenter / gfu.uInputSize.xy - uv);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * gfu.uInputSize.y / gfu.uInputSize.x));

  var strength: f32 = uStrength;

  var delta: f32 = 0.0;
  var gap: f32;

  if (dist < innerRadius) {
      delta = innerRadius - dist;
      gap = minGradient;
  } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
      delta = dist - radius;
      gap = gradient;
  }

  var returnColorOnly: bool = false;

  if (delta > 0.0) {
    let normalCount: f32 = gap / gfu.uInputSize.x;
    delta = (normalCount - delta) / normalCount;
    countLimit *= delta;
    strength *= delta;
    
    if (countLimit < 1.0)
    {
      returnColorOnly = true;;
    }
  }

  // randomize the lookup values to hide the fixed number of samples
  let offset: f32 = rand(uv, 0.0);

  var total: f32 = 0.0;
  var color: vec4<f32> = vec4<f32>(0.);

  dir *= strength;

  for (var t = 0.0; t < MAX_KERNEL_SIZE; t += 1.0) {
    let percent: f32 = (t + offset) / MAX_KERNEL_SIZE;
    let weight: f32 = 4.0 * (percent - percent * percent);
    let p: vec2<f32> = uv + dir * percent;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, p);
    
    if (t < countLimit)
    {
      color += sample * weight;
      total += weight;
    }
  }

  color /= total;

  return select(color, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
fn rand(co: vec2<f32>, seed: f32) -> f32
{
  let a: f32 = 12.9898;
  let b: f32 = 78.233;
  let c: f32 = 43758.5453;
  let dt: f32 = dot(co + seed, vec2<f32>(a, b));
  let sn: f32 = modulo(dt, 3.14159);
  return fract(sin(sn) * c + seed);
}`,lv=Object.defineProperty,uv=(i,t,e)=>t in i?lv(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,ju=(i,t,e)=>(uv(i,typeof t!="symbol"?t+"":t,e),e);const hv=class qu extends ${constructor(t){t={...qu.DEFAULT_OPTIONS,...t};const e=t.maxKernelSize??32,n=D.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:av.replace("${MAX_KERNEL_SIZE}",e.toFixed(1)),entryPoint:"mainFragment"}}),r=N.from({vertex:j,fragment:ov.replace("${MAX_KERNEL_SIZE}",e.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:n,glProgram:r,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ju(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};ju(hv,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});const cv=600,Dt=12,Ft=178,fv=32,Ds=192,Gs=302,_n=Ft*.5+Dt+Ds*.5,he=_n,be=394,Ku=164,Jt=Ft*.5+Ds+Dt*2+be*.5,te=24,Me=160,ha=160,je=Ft+Ds*2+be*2+Dt*10,qe=be*2+Dt*10,Zu=Gs,Qu=Gs+Ku-Dt*2,ee=(Gs+Ku)*.5-Dt*2,dv=2048,pv=920,Ju=.25,On=.25,Mr=.2,ca=4e-4;class mv extends Z{constructor(t){super(),this.timeEffectFilter=new og({brightness:1}),this.filters=[],this.isAccelerated=!1,this.image=new ot(O.snow_bg),this.image.anchor.set(.5,1),this.image.position.x=0,this.addChild(this.image),this.backRect=new Pt,this.addChild(this.backRect),this.screenResize(t),C.on(S.screenResize,this.screenResize.bind(this)),C.on(S.timeAcceleration,this.timeAcceleration.bind(this))}screenResize(t){this.position.x=t.centerX,this.position.y=t.height;let e=t.width/dv,n,r;t.width>t.height?(n=je>t.width?t.width/je:1,r=Zu*n):(n=qe>t.width?t.width/qe:1,r=Qu*n,e*=2),this.image.scale.set(e);const s=e*pv*.6;let o=Ju*t.width;const a=t.height*On;o>On&&(o=a),this.image.position.y=-r-o+s,this.backRect.clear(),this.backRect.rect(-t.centerX,this.image.position.y,t.width,-this.image.position.y),this.backRect.fill("#aab8c9")}timeAcceleration(t){this.isAccelerated=t,t&&(wt(this),this.isAccelerated=!0,this.filters=[this.timeEffectFilter])}tick(t){this.isAccelerated?this.timeEffectFilter.brightness>Mr&&(this.timeEffectFilter.brightness-=ca*t.elapsedMS,this.timeEffectFilter.brightness<Mr&&(this.timeEffectFilter.brightness=Mr)):(this.timeEffectFilter.brightness+=ca*t.elapsedMS,this.timeEffectFilter.brightness>=1&&(this.timeEffectFilter.brightness=1,this.filters=[],Nt(this)))}}class gv extends Z{constructor(t){super(),this.addChild(new eg(t)),this.addChild(new Qm(t)),this.addChild(new mv(t))}}class xv extends ot{constructor(){super(O.level_panel),this.anchor.set(.5,1)}}class vv extends Z{constructor(){super(),this.image=new ot(O.main_button.textures.off),this.image.anchor.set(.5,1),this.addChild(this.image),this.clickArea=new Pt,this.clickArea.circle(0,-90,50),this.clickArea.fill("rgba(0, 0, 0, 0.001)"),this.addChild(this.clickArea),this.clickArea.eventMode="static",this.clickArea.on("pointerdown",this.startClick.bind(this)),this.clickArea.on("pointerup",this.endClick.bind(this)),this.clickArea.on("pointerleave",this.endClick.bind(this))}startClick(){this.image.texture=O.main_button.textures.on,wm(),Gt(mt.charge)}endClick(){this.image.texture=O.main_button.textures.off}}class fa extends Z{constructor(t,e,n,r){super(),this.image=new ot(O.panel.textures[e?"on":"off"]),this.image.anchor.set(.5,1),this.addChild(this.image),this.action=t,this.isOn=e,this.readyVoice=n,this.disabledVoice=r,this.clickArea=new Pt,this.clickArea.rect(-152,-124,180,64),this.clickArea.fill("rgba(0, 0, 0, 0.001)"),this.addChild(this.clickArea),this.clickArea.eventMode="static",this.clickArea.on("pointerdown",this.getClick.bind(this))}activation(t){this.isOn!==t&&(this.isOn=t,this.image.texture=O.panel.textures[t?"on":"off"],this.isOn&&ct(this.readyVoice))}getClick(){if(!this.isOn){Gt(mt.sticks),ct(this.disabledVoice);return}this.isOn=!1,this.image.texture=O.panel.textures.off,this.action(),Gt(mt.upgrade)}}function da(i){let t="";for(let e=0;e<i.length;e++){let n=i.charCodeAt(e).toString(16);t+=("000"+n).slice(-4)}return t}function yv(i){let t=i.match(/.{1,4}/g)||[],e="";for(let n=0;n<t.length;n++)e+=String.fromCharCode(parseInt(t[n],16));return e}const _v=!0,bv="TeslaLeaderboard",hi=4e3;class Sv{constructor(){this.SDK=null,this.player=null,this.leaderboard=null,this.autoSaveCallback=null,this.lastSaveEncodedString="",this.requestTimeStamp=Date.now(),this.isReady=!1,this.isGetReword=!1,this.isLangRu=!0,this.isRealYandex=_v,this.isSoundOnBeforeAD=!0,this.initSDK()}initSDK(){if("YaGames"in window)YaGames.init().then(t=>{this.SDK=t,this.initPlayer(),this.SDK.getLeaderboards().then(e=>this.leaderboard=e),this.isLangRu=this.SDK.environment.i18n.lang==="ru"});else{setTimeout(this.initSDK.bind(this),100),console.warn("YaGames not ready");return}}initPlayer(){this.SDK.getPlayer().then(t=>{this.player=t,this.player.getData().then(e=>{"save"in e&&(this.lastSaveEncodedString=e.save),this.isReady=!0})})}getSave(){if(!this.lastSaveEncodedString)return null;let t;try{t=JSON.parse(yv(this.lastSaveEncodedString))}catch{console.warn("ERROR in state decode")}if(this.lastSaveEncodedString)return t}saveData(t){if(!this.player||this.autoSaveCallback)return;t&&(this.lastSaveEncodedString=da(JSON.stringify(t)));const e=Date.now();e-hi>this.requestTimeStamp?(this.requestTimeStamp=e,this.player.setData({save:this.lastSaveEncodedString})):setTimeout(()=>this.setData(),hi)}startAutoSave(t){this.autoSaveCallback=t,setTimeout(()=>this.autoSave(),hi)}stopAutoSave(){this.autoSaveCallback=null}autoSave(){if(!this.autoSaveCallback)return;const t=this.autoSaveCallback(),e=da(JSON.stringify(t));this.player.setData({save:e}),setTimeout(()=>this.autoSave(),hi)}clearSave(t){this.player.setData({save:null}),setTimeout(()=>t(),hi)}addDataToLeaderboard(t){this.leaderboard&&this.SDK.isAvailableMethod("leaderboards.setLeaderboardScore").then(e=>{e&&this.leaderboard.setLeaderboardScore(bv,t)})}showRewordAd(t){if(!this.SDK)return t(!1);this.isSoundOnBeforeAD=xm(),St.SDK.features.GameplayAPI.stop(),this.SDK.adv.showRewardedVideo({callbacks:{onOpen:()=>{Vm(),this.isSoundOnBeforeAD&&gm(),Os(),vm()},onRewarded:()=>{this.isGetReword=!0},onClose:()=>{aa(),this.isSoundOnBeforeAD&&ta(),zi(),this.isGetReword&&(this.isGetReword=!1,t(!0)),St.SDK.features.GameplayAPI.start()},onError:e=>{console.error("Error while open video ad:",e),aa(),this.isSoundOnBeforeAD&&ta(),zi(),t(!1),St.SDK.features.GameplayAPI.start()}}})}showBannerAd(t){if(!this.SDK)return t();this.SDK.adv.showFullscreenAdv({callbacks:{onClose:function(e){t()},onOffline:function(e){t()},onError:function(e){t()}}})}}let St=new Sv;class wv extends Z{constructor(t,e,n,r,s){super(),this.eventMode="static",this.disableVoice=s,this.isTurboAvailable=e,this.callback=r,this.bg=new Pt,this.bg.alpha=.85,this.addChild(this.bg),this.closeImage=new ot(O.close_button),this.closeImage.anchor.set(1,0),this.closeImage.scale.set(.5),this.closeImage.eventMode="static",this.closeImage.on("pointerdown",this.close,this),this.addChild(this.closeImage),this.energyImage=new ot(O.ad_screens.textures.energy),this.energyImage.anchor.set(.5),this.energyImage.scale.set(.5),this.energyImage.eventMode="static",this.energyImage.on("pointerdown",this.clickEnergy,this),this.addChild(this.energyImage);const o=t?`+ ${n}
Энергии
за просмотр
рекламы`:`+ ${n}
Energy
for watching
advertisements`;this.energyText=new st({text:o,style:J.adTypeOn}),this.energyText.anchor.set(.5),this.energyText.eventMode="none",this.addChild(this.energyText),this.turboImage=new ot(O.ad_screens.textures[e?"turbo-on":"turbo-off"]),this.turboImage.anchor.set(.5),this.turboImage.scale.set(.5),this.turboImage.eventMode="static",this.turboImage.on("pointerdown",this.clickTurbo,this),this.addChild(this.turboImage);const a=t?e?`+ 0.5 секунды
к турбо режиму
за просмотр
рекламы`:`Откроется
со 2-го уровня`:e?`+ 0.5 seconds
to turbo mode
for watching
advertisements`:`It opens
at level 2`;this.turboText=new st({text:a,style:e?J.adTypeOn:J.adTypeOff}),this.turboText.anchor.set(.5),this.turboText.eventMode="none",this.addChild(this.turboText),C.on(S.screenResize,this.screenResize,this),this.screenResize(Oi()),re(this)}screenResize(t){this.position.x=t.centerX,this.position.y=t.centerY,this.bg.clear(),this.bg.rect(-t.centerX,-t.centerY,t.width,t.height),this.bg.fill(0),this.closeImage.position.set(t.centerX,-t.centerY),this.energyImage.position.set(-95,0),this.energyText.position.set(-95,-26),this.turboImage.position.set(95,0),this.turboText.position.set(95,-26)}showAD(t,e){t&&Tm(e),this.close(t)}clickEnergy(){St.showRewordAd(t=>this.showAD(t,!0))}clickTurbo(){if(!this.isTurboAvailable)return ct(this.disableVoice);St.showRewordAd(t=>this.showAD(t,!1))}close(t=!1){this.callback(t),this.closeImage.off("pointerdown",this.close,this),this.energyImage.off("pointerdown",this.clickEnergy,this),this.turboImage.off("pointerdown",this.clickTurbo,this),C.removeListener(S.screenResize,this.screenResize,this),this.destroy()}}const Cv=30*1e3;class Av extends pt{constructor(t,e,n){super(O.ad_button.animations.go),this.animationSpeed=.05,this.play(),this.anchor.set(1,0),this.state=e,this.isLangRu=n,this.isActive=!0,this.isTurboOn=!1,this.isTimeMachineOn=!1,this.disableVoice=t,this.eventMode="static",this.on("pointerdown",this.getClick.bind(this)),C.on(S.requestStartTurbo,()=>this.changeTurboState(!0)),C.on(S.responseStopTurbo,()=>this.changeTurboState(!1)),C.on(S.setAdButtonAvailable,r=>this.changeTimeMachineState(r))}getClick(){if(!this.isActive)return ct(this.disableVoice);this.activation(!1);const t=(this.state.addPerClickPrice+this.state.addPerSecondPrice+this.state.turboPrice)/6n;new wv(this.isLangRu,this.state.level>1,t.toFormat(),this.getCallback.bind(this),this.disableVoice)}getCallback(t){t?setTimeout(()=>{this.activation(!this.isTimeMachineOn&&!this.isTurboOn)},Cv):this.activation(!0)}activation(t){this.isActive=t,this.isActive?this.play():this.gotoAndStop(0)}changeTurboState(t){this.isTurboOn=t,this.activation(!this.isTimeMachineOn&&!this.isTurboOn)}changeTimeMachineState(t){this.isTimeMachineOn=t,this.activation(!this.isTimeMachineOn&&!this.isTurboOn)}}class Tv extends Z{constructor(t,e,n){super(),this.bg=new Pt,this.bg.alpha=.85,this.addChild(this.bg),this.text=t,this.text.anchor.set(.5),this.addChild(this.text),this.eventMode="static",this.on("pointerdown",()=>n()),C.on(S.screenResize,this.screenResize,this),this.screenResize(Oi()),re(this),e&&setTimeout(()=>{this.destroy(),C.removeListener(S.screenResize,this.screenResize,this)},e)}screenResize(t){this.position.x=t.centerX,this.position.y=t.centerY,this.bg.clear(),this.bg.rect(-t.centerX,-t.centerY,t.width,t.height),this.bg.fill(0),this.text.width>t.width*.9?this.text.style.fontSize=22:this.text.style.fontSize=36}}class Pv extends ot{constructor(t){super(O.restart_button),this.anchor.set(0,0),this.isActive=!0,this.text=t,this.eventMode="static",this.on("pointerdown",this.getClick.bind(this))}getClick(){new Tv(new st({text:this.text,style:J.message}),6e3,this.restart.bind(this))}restart(){St.stopAutoSave(),St.clearSave(()=>location.reload())}}class Iv extends Z{constructor(t,e,n){super(),this.image=new pt(O.turbo_switch.animations[t]),this.image.animationSpeed=.5,this.image.play(),this.image.anchor.set(.5,1),this.addChild(this.image),this.state=t,this.readyVoice=e,this.disabledVoice=n,this.clickArea=new Pt,this.clickArea.rect(-64,-160,128,128),this.clickArea.fill("rgba(0, 0, 0, 0.001)"),this.addChild(this.clickArea),this.clickArea.eventMode="static",this.clickArea.on("pointerdown",this.getClick.bind(this)),C.on(S.responseStopTurbo,this.stopTurbo.bind(this))}updateState(t){if(t!==this.state)switch(this.state=t,t){case"ready":ct(this.readyVoice),this.image.textures=O.turbo_switch.animations[t],this.image.loop=!0,this.image.gotoAndPlay(0);break;case"idle":this.image.loop=!0,this.image.textures=O.turbo_switch.animations[this.state],this.image.gotoAndPlay(0);break;default:console.error(`TurboSwitch GET updateState WITH state: ${t}`)}}getClick(){if(this.state==="idle"&&ct(this.disabledVoice),this.state!=="ready")return Gt(mt.sticks);this.state="on",this.image.loop=!1,this.image.textures=O.turbo_switch.animations[this.state],this.image.gotoAndPlay(0),this.image.onComplete=()=>{this.state="active",this.playAlarm(),this.image.loop=!0,this.image.textures=O.turbo_switch.animations[this.state],this.image.gotoAndPlay(0)},Mm(),Gt(mt.upgrade)}playAlarm(){this.state==="active"&&(Gt(mt.alarm),setTimeout(()=>this.playAlarm(),1e3))}stopTurbo(){this.state="off",this.image.loop=!1,this.image.textures=O.turbo_switch.animations[this.state],this.image.gotoAndPlay(0),this.image.onComplete=()=>{this.state="idle",this.image.loop=!0,this.image.textures=O.turbo_switch.animations[this.state],this.image.gotoAndPlay(0)}}}class Fe extends ot{constructor(t,e=0,n=!1){super(O[t==="a"?"wires_angle":"wires_line"]),this.anchor.set(.5),this.angle=e,n&&(this.scale.x=-1)}}const Mv=240,Fv=60,zv=.75,pa=.0075,ma=.98;class Fr extends Pt{constructor(t){super(),this.drawWidth=Mv,this.drawHeight=Fv,this.drawAlpha=0,this.timeout=t,this.isOut=!1}draw(t){this.timeout-=t,!(this.timeout>0)&&(this.clear(),this.rect(-this.drawWidth*.5,-this.drawHeight*.5,this.drawWidth,this.drawHeight),this.stroke({width:3,color:"#00ff00",alpha:this.drawAlpha}),this.drawWidth*=ma,this.drawHeight*=ma,this.drawAlpha+=this.isOut?-pa:pa*10,this.drawAlpha>=zv&&(this.isOut=!0),this.drawAlpha<=0&&this.destroy())}}class ze extends Z{constructor(t){super(),this.addChild(new Fr(0)),this.addChild(new Fr(700)),this.addChild(new Fr(1200)),this.position.x=t.x,this.position.y=t.y,wt(this)}tick(t){this.children.forEach(e=>e.draw(t.elapsedMS)),this.children.length===0&&(Nt(this),this.destroy())}}const ke={minScale:.5,maxScale:.6,scaleStep:5e-4},kv=3.5*1e3;class Rv extends ot{constructor(t){super(O.finger),this.parentContainer=t,this.anchor.set(.1,.1),this.scale.set(.55),this.isScaleUp=!1,C.on(S.screenResize,()=>setTimeout(()=>this.screenResize.bind(this),100))}screenResize(){this.target&&(this.position.x=this.target.position.x,this.position.y=this.target.position.y-100)}showHelp(t){this.target=t,this.position.x=this.target.position.x,this.position.y=this.target.position.y-100,this.parentContainer.addChild(this),wt(this),setTimeout(()=>this.hideHelp(),kv)}hideHelp(){this.target=null,Nt(this),this.parentContainer.removeChild(this),this.scale.x=this.scale.y=ke.maxScale,this.isScaleUp=!1}tick(t){const e=t.deltaMS*ke.scaleStep;this.isScaleUp?(this.scale.x=this.scale.y=this.scale.x+e,this.scale.x>ke.maxScale&&(this.scale.x=this.scale.y=ke.maxScale,this.isScaleUp=!1)):(this.scale.x=this.scale.y=this.scale.x-e,this.scale.x<ke.minScale&&(this.scale.x=this.scale.y=ke.minScale,this.isScaleUp=!0))}}const Ns=16.66;function th(i,t){let e=t.position.x-i.position.x,n=t.position.y-i.position.y;return Math.sqrt(e*e+n*n)}function Ov(i,t){i.position.x+=Math.cos(i.rotation)*t,i.position.y+=Math.sin(i.rotation)*t}function Bv(i,t,e){const n=th(i,t);if(n<=e)return i.position.x=t.position.x,i.position.y=t.position.y,!0;const r=e/n;return i.position.x+=r*(t.position.x-i.position.x),i.position.y+=r*(t.position.y-i.position.y),!1}const ds=[16777215,16777164,6750207,15060223,10092543,16764159,16777113,13434879,13434828,15073228,16777062];let tn=Math.floor(Math.random()*ds.length);function ga(i,t,e){const n=ds[tn];tn++,tn===ds.length&&(tn=0);const r=th(i,t),s=9+Math.ceil(Math.random()*10),o=Math.ceil(r/s),a=Math.ceil(s*.75);let l=i.position.x,u=i.position.y,h=[{x:l,y:u}];for(let c=o;c>1;c--){let f=Math.sqrt((l-t.position.x)**2+(u-t.position.y)**2),d=Math.sin(f/r*Math.PI)*a;l+=(t.position.x-l)/c+Math.random()*d*2-d,u+=(t.position.y-u)/c+Math.random()*d*2-d,h.push({x:l,y:u})}h.forEach((c,f)=>{f===0?e.moveTo(c.x,c.y):e.lineTo(c.x,c.y)}),e.stroke({width:e.lineWidth,color:n})}const $s=45e3,Ev=.5/($s/2/Ns),Uv=$s/4,eh=1/(Uv/Ns),Lv=eh*2;class xa extends st{constructor(t){super(t),this.anchor.set(.5),this.scale.x=.5,this.scale.y=.5,this.alpha=0;const e=Oi();this.position.x=e.centerX,this.position.y=e.centerY;const n=e.centerY;this.halfPath=n/2,this.speed=n/($s/Ns),wt(this),re(this)}tick(t){this.position.y-=this.speed*t.elapsedMS,this.scale.x=this.scale.y=this.scale.x+=Ev*t.elapsedMS,this.position.y>this.halfPath?this.alpha+=eh*t.elapsedMS:(this.alpha-=Lv*t.elapsedMS,this.alpha<0&&(Nt(this),au(this),this.destroy()))}}class Dv extends pt{constructor(t,e,n){super(O.ball_lightning.animations.go),this.anchor.set(.5),this.scale.set(.75),this.position.x=e.x,this.position.y=e.y,this.target={position:{x:n.x,y:n.y}},this.speed=1,this.bonus=t,this.animationSpeed=.5,this.play(),wt(this)}tick(t){Bv(this,this.target,this.speed*t.elapsedMS)&&(this.bonus===0?ns(!0):gi(this.bonus),Nt(this),this.destroy())}}class Gv extends Z{constructor(t,e,n){super(),this.finger=new Rv(this);const r=n?G.ru_not_available:G.en_not_available;this.voices_next_level=n?G.ru_next_level:G.en_next_level,this.voice_extra_electricity=n?G.ru_extra_electricity:G.en_extra_electricity,this.voice_turbo_upgrade=n?G.ru_turbo_upgrade:G.en_turbo_upgrade,e.points===0n?ct(n?G.ru_start_first:G.en_start_first):ct(n?G.ru_start_second:G.en_start_second),this.voice_lets_do_it=n?G.ru_lets_do_it:G.en_lets_do_it,ct(this.voice_lets_do_it),this.LTXT=n?"Уровень:":"Level:",this.CTXT=n?"За клик":"Per click",this.ATXT=n?"В секунду":"Per second",this.TTXT=n?"ТУРБО":"TURBO",this.TtTXT=n?"Секунд":"Seconds",this.state=e,this.wireHL=new Fe("h",0,!1),this.wireHL.position.x=-Ft*.5,this.wireHL.position.y=-ha,this.addChild(this.wireHL),this.wireHR=new Fe("h",0,!1),this.wireHR.position.x=Ft*.5,this.wireHR.position.y=-ha,this.addChild(this.wireHR),this.wireAL=new Fe("a",90,!0),this.wireAL.position.y=-Me*.5,this.addChild(this.wireAL),this.wireAR=new Fe("a",-90,!1),this.wireAR.position.y=-Me*.5,this.addChild(this.wireAR),this.wireALL=new Fe("a",90,!0),this.addChild(this.wireALL),this.wireARR=new Fe("a",-90,!1),this.addChild(this.wireARR),this.levelState=new Pt,this.levelState.alpha=.4,this.addChild(this.levelState),this.topDisplay=new ot(O.top_screen),this.topDisplay.anchor.set(.5,0),this.topDisplay.position.x=0,this.addChild(this.topDisplay),this.textLevel=new st({text:`${this.LTXT} ${this.state.level.toFormat()}`,style:J.level}),this.textLevel.anchor.set(.5),this.textLevel.position.x=0,this.addChild(this.textLevel),this.textLevelPrice=new st({text:`${this.state.levelScored.toFormat()} / ${this.state.levelPrice.toFormat()}`,style:J.infoPrice}),this.textLevelPrice.anchor.set(.5),this.textLevelPrice.position.x=0,this.addChild(this.textLevelPrice),this.textScore=new st({text:this.state.points.toFormat(),style:J.score}),this.textScore.anchor.set(.5),this.textScore.position.x=0,this.addChild(this.textScore),this.adButton=new Av(r,e,n),this.addChild(this.adButton);const s=n?`Кликните по экрану
если желаете сбросить весь прогресс
и начать все сначала.

этот экран исчезнет
через несколько секунд`:`Click on the screen
if you wish to reset all progress
and start over.

this screen will disappear
after a few seconds`;this.restartButton=new Pv(s),this.addChild(this.restartButton),this.mainButton=new vv,this.mainButton.position.x=0,this.mainButton.position.y=-fv,this.addChild(this.mainButton);const o=this.state.points>=this.state.addPerClickPrice,a=n?G.ru_available_click_upgrade:G.en_available_click_upgrade,l=n?G.ru_no_money:G.en_no_money;this.clickPanel=new fa(Pm,o,a,l),this.addChild(this.clickPanel),this.textClickBonus=new st({text:"+ "+this.state.addPerClickNextValue.toFormat(),style:J.infoBonus}),this.textClickBonus.anchor.set(.5),this.addChild(this.textClickBonus),this.textClickIcons=new st({text:this.CTXT,style:J.label}),this.textClickIcons.anchor.set(.5),this.addChild(this.textClickIcons),this.textClickPrice=new st({text:this.state.addPerClickPrice.toFormat(),style:J.infoPrice}),this.textClickPrice.anchor.set(.5),this.addChild(this.textClickPrice);const u=this.state.points>=this.state.addPerSecondPrice,h=n?G.ru_available_auto_upgrade:G.en_available_auto_upgrade,c=n?G.ru_no_money:G.en_no_money;this.timePanel=new fa(Im,u,h,c),this.addChild(this.timePanel),this.textAutoBonus=new st({text:"+ "+this.state.addPerSecondNextValue.toFormat(),style:J.infoBonus}),this.textAutoBonus.anchor.set(.5),this.addChild(this.textAutoBonus),this.textAutoIcons=new st({text:this.ATXT,style:J.label}),this.textAutoIcons.anchor.set(.5),this.addChild(this.textAutoIcons),this.textAutoPrice=new st({text:this.state.addPerSecondPrice.toFormat(),style:J.infoPrice}),this.textAutoPrice.anchor.set(.5),this.addChild(this.textAutoPrice);const f=this.state.points>=this.state.turboPrice?"ready":"idle",d=n?G.ru_available_turbo:G.en_available_turbo;this.turboSwitch=new Iv(f,d,r),this.turboSwitch.position.x=-_n,this.turboSwitch.position.y=0,this.addChild(this.turboSwitch),this.textTurboTimer=new st({text:this.state.turboSeconds.toFixed(1),style:J.score}),this.textTurboTimer.anchor.set(.5),this.textTurboTimer.position.x=-_n,this.textTurboTimer.position.y=-90,this.addChild(this.textTurboTimer),this.textTurboLabel=new st({text:this.TtTXT,style:J.label}),this.textTurboLabel.anchor.set(.5),this.textTurboLabel.position.x=-_n,this.textTurboLabel.position.y=-62,this.addChild(this.textTurboLabel),this.levelPanel=new xv,this.levelPanel.position.x=he,this.levelPanel.position.y=0,this.addChild(this.levelPanel),this.textInfoClickIcon=new st({text:this.CTXT,style:J.label}),this.textInfoClickIcon.anchor.set(.5),this.textInfoClickIcon.position.x=he,this.textInfoClickIcon.position.y=-172,this.addChild(this.textInfoClickIcon),this.textInfoClickAdd=new st({text:"+ "+this.state.addPerClick.toFormat(),style:J.infoBonus}),this.textInfoClickAdd.anchor.set(.5),this.textInfoClickAdd.position.x=he,this.textInfoClickAdd.position.y=-150,this.addChild(this.textInfoClickAdd),this.textInfoAutoIcon=new st({text:this.ATXT,style:J.label}),this.textInfoAutoIcon.anchor.set(.5),this.textInfoAutoIcon.position.x=he,this.textInfoAutoIcon.position.y=-126,this.addChild(this.textInfoAutoIcon),this.textInfoAutoAdd=new st({text:"+ "+this.state.addPerSecond.toFormat(),style:J.infoBonus}),this.textInfoAutoAdd.anchor.set(.5),this.textInfoAutoAdd.position.x=he,this.textInfoAutoAdd.position.y=-102,this.addChild(this.textInfoAutoAdd),this.textInfoTurboBonus=new st({text:`${this.TTXT} x ${this.state.level.toFormat()}`,style:J.label}),this.textInfoTurboBonus.anchor.set(.5),this.textInfoTurboBonus.position.x=he,this.textInfoTurboBonus.position.y=-74,this.addChild(this.textInfoTurboBonus),this.textInfoTurboPrice=new st({text:this.state.turboPrice.toFormat(),style:J.infoPrice}),this.textInfoTurboPrice.anchor.set(.5),this.textInfoTurboPrice.position.x=he,this.textInfoTurboPrice.position.y=-54,this.addChild(this.textInfoTurboPrice),this.screenResize(t),C.on(S.screenResize,this.screenResize.bind(this)),C.on(S.updateUILevel,this.updateLevel.bind(this)),C.on(S.updateUIPoints,this.updatePoints.bind(this)),C.on(S.updateUIClickPanel,this.updateClickPanel.bind(this)),C.on(S.updateUIAutoPanel,this.updateAutoPanel.bind(this)),C.on(S.updateUITurboPanel,this.updateTurboPanel.bind(this)),C.on(S.updateUITurboTimeout,this.updateTurboTimeout.bind(this)),C.on(S.showBonusUI,this.showBonusText.bind(this)),C.on(S.getADBonusUI,this.getADBonus.bind(this)),C.on(S.needVoiceDoIt,()=>ct(this.voice_lets_do_it)),this.state.help.has("button")&&setTimeout(()=>{this.state.help.delete("button"),this.finger.showHelp(this.mainButton)},5e3)}screenResize(t){this.position.x=t.centerX,this.position.y=t.height;let e;t.width>t.height?(e=je>t.width?t.width/je:1,this.clickPanel.position.x=-Jt,this.clickPanel.position.y=-te,this.textClickBonus.position.x=-Jt+105,this.textClickBonus.position.y=-te-116,this.textClickIcons.position.x=-Jt+105,this.textClickIcons.position.y=-te-97,this.textClickPrice.position.x=-Jt+105,this.textClickPrice.position.y=-te-76,this.timePanel.position.x=Jt,this.timePanel.position.y=-te,this.textAutoBonus.position.x=Jt+105,this.textAutoBonus.position.y=-te-116,this.textAutoIcons.position.x=Jt+105,this.textAutoIcons.position.y=-te-97,this.textAutoPrice.position.x=Jt+105,this.textAutoPrice.position.y=-te-76,this.wireAL.position.x=-Ft*1.5,this.wireAR.position.x=Ft*1.5,this.wireALL.position.x=-Ft*1.5-be,this.wireALL.position.y=-Me*.5,this.wireALL.scale.x=-1,this.wireARR.position.x=Ft*1.5+be,this.wireARR.position.y=-Me*.5,this.wireARR.scale.x=1):(e=qe>t.width?t.width/qe:1,this.clickPanel.position.x=-be*.5-Dt*4,this.clickPanel.position.y=-ee,this.textClickBonus.position.x=this.clickPanel.position.x+105,this.textClickBonus.position.y=-ee-116,this.textClickIcons.position.x=this.clickPanel.position.x+105,this.textClickIcons.position.y=-ee-97,this.textClickPrice.position.x=this.clickPanel.position.x+105,this.textClickPrice.position.y=-ee-76,this.timePanel.position.x=be*.5+Dt*4,this.timePanel.position.y=-ee,this.textAutoBonus.position.x=this.timePanel.position.x+105,this.textAutoBonus.position.y=-ee-116,this.textAutoIcons.position.x=this.timePanel.position.x+105,this.textAutoIcons.position.y=-ee-97,this.textAutoPrice.position.x=this.timePanel.position.x+105,this.textAutoPrice.position.y=-ee-76,this.wireAL.position.x=-Ft*2,this.wireAR.position.x=Ft*2,this.wireALL.position.x=-Ft*1.5,this.wireALL.position.y=-Me,this.wireALL.scale.x=1,this.wireARR.position.x=Ft*1.5,this.wireARR.position.y=-Me,this.wireARR.scale.x=-1),this.scale.set(e),this.topDisplay.position.y=-t.height/e,this.textLevel.position.y=this.topDisplay.position.y+16,this.textLevelPrice.position.y=this.topDisplay.position.y+46,this.textScore.position.y=this.topDisplay.position.y+78,this.redrawLevelProgressRect();const n=-t.height/e;this.adButton.position.x=t.centerX/e-Dt,this.adButton.position.y=n,this.restartButton.position.x=-t.centerX/e+Dt,this.restartButton.position.y=n-Dt}redrawLevelProgressRect(){this.levelState.clear(),this.levelState.roundRect(this.topDisplay.position.x-293,this.topDisplay.position.y-8,cv/Number(this.state.levelPrice)*Number(this.state.levelScored),64,8),this.levelState.fill(16742263)}updateLevel(){this.redrawLevelProgressRect(),this.textLevel.text=`${this.LTXT} ${this.state.level.toFormat()}`,this.textLevelPrice.text=`${this.state.levelScored.toFormat()} / ${this.state.levelPrice.toFormat()}`,this.addChild(new ze(this.textLevel.position)),this.textInfoTurboBonus.text=`${this.TTXT} x ${this.state.level.toFormat()}`,this.addChild(new ze(this.textInfoTurboBonus.position)),ct(this.voices_next_level),St.addDataToLeaderboard(Number(this.state.level))}updatePoints(t){if(this.redrawLevelProgressRect(),this.textLevelPrice.text=`${this.state.levelScored.toFormat()} / ${this.state.levelPrice.toFormat()}`,this.textScore.text=this.state.points.toFormat(),t&&(ct(this.voice_extra_electricity),this.addChild(new ze(this.textScore.position)),new xa({text:"+ "+t.toFormat(),style:J.score})),this.clickPanel.activation(this.state.points>=this.state.addPerClickPrice),this.state.help.has("click")&&this.clickPanel.isOn&&(this.state.help.delete("click"),this.finger.showHelp(this.clickPanel)),this.timePanel.activation(this.state.points>=this.state.addPerSecondPrice),this.state.help.has("auto")&&this.timePanel.isOn&&(this.state.help.delete("auto"),this.finger.showHelp(this.timePanel)),this.turboSwitch.state==="ready"||this.turboSwitch.state==="idle"){const e=this.state.points>=this.state.turboPrice?"ready":"idle";this.turboSwitch.updateState(e),this.turboSwitch.state==="ready"&&this.state.help.has("turbo")&&(this.state.help.delete("turbo"),this.finger.showHelp(this.turboSwitch))}this.state.help.has("boost")&&(this.turboSwitch.state==="active"||this.turboSwitch.state==="on")&&(this.state.help.delete("boost"),this.finger.showHelp(this.mainButton))}getADBonus(t){const e={x:this.adButton.position.x-this.adButton.width*.5,y:this.adButton.position.y+this.adButton.height*.5},n=t===0?{x:this.turboSwitch.position.x,y:this.turboSwitch.position.y-this.turboSwitch.height*.5}:{x:this.topDisplay.position.x,y:this.topDisplay.position.y+this.topDisplay.height*.5};this.addChild(new Dv(t,e,n))}showBonusText(t){new xa({text:t,style:J.score})}updateClickPanel(){this.textClickBonus.text="+ "+this.state.addPerClickNextValue.toFormat(),this.textClickPrice.text=this.state.addPerClickPrice.toFormat(),this.textInfoClickAdd.text="+ "+this.state.addPerClick.toFormat(),this.addChild(new ze(this.textInfoClickAdd.position))}updateAutoPanel(){this.textAutoBonus.text="+ "+this.state.addPerSecondNextValue.toFormat(),this.textAutoPrice.text=this.state.addPerSecondPrice.toFormat(),this.textInfoAutoAdd.text="+ "+this.state.addPerSecond.toFormat(),this.addChild(new ze(this.textInfoAutoAdd.position))}updateTurboPanel(){this.textInfoTurboBonus.text=`${this.TTXT} x ${this.state.level.toFormat()}`,this.textInfoTurboPrice.text=this.state.turboPrice.toFormat()}updateTurboTimeout(t){this.textTurboTimer.text=this.state.turboTimeout.toFixed(1),t&&(this.addChild(new ze(this.textTurboTimer.position)),ct(this.voice_turbo_upgrade))}}const Nv=60;class ci extends ot{constructor(t){super(O.lightning_tower.textures[t.isActive?"on":"off"]),this.anchor.set(.5,1),this.lightning={position:{x:0,y:0},index:t.canvasIndex},this.isActive=t.isActive,this.lightningCount=t.lightningCount,this.sizeScale=t.scale,this.offsetRate={x:t.offsetRate.x,y:t.offsetRate.y},C.on(t.dischargeEventName,this.discharge.bind(this)),C.on(t.upgradeEventName,e=>this.lightningCount=e)}updateOnMap(t,e,n){this.drawScale=this.sizeScale*t,this.scale.set(this.drawScale),this.offsetRate.x<0&&(this.scale.x*=-1),this.position.set(this.offsetRate.x*e,this.offsetRate.y*n),this.lightning.position.x=this.position.x-34*this.scale.x,this.lightning.position.y=this.position.y-460*this.scale.y}discharge(){if(this.isActive){if(this.texture===O.lightning_tower.textures.on){this.texture=O.lightning_tower.textures.off;const t=Nv*this.lightningCount*this.lightningCount;setTimeout(()=>this.texture=O.lightning_tower.textures.on,t)}Bs({point:this.lightning,count:this.lightningCount,scale:this.drawScale})}}activate(){this.isActive=!0,this.texture=O.lightning_tower.textures.on}}class $v extends Z{constructor(t,e){super(),this.tower=new pt(O.tesla_tower.animations.go),this.tower.animationSpeed=1,this.tower.play(),this.tower.position.set(0,-232),this.addChild(this.tower),this.base=new ot(O.tesla_tower.textures.base),this.base.position.set(0,0),this.addChild(this.base),this.energy=new pt(O.energy.animations.go),this.energy.animationSpeed=1,this.energy.play(),this.energy.scale.set(1.5),this.energy.position.set(0,-360),this.addChild(this.energy),this.lightning={position:{x:0,y:0}},this.sizeScale=t,this.offsetRate={x:e.x,y:e.y}}updateOnMap(t,e,n){this.scale.set(this.sizeScale*t),this.position.set(this.offsetRate.x*e,this.offsetRate.y*n),this.lightning.position.x=this.position.x,this.lightning.position.y=this.position.y-320*t,this.globalPoint=this.getGlobalPosition(),this.globalPoint.x-=34*t,this.globalPoint.y-=534*t}}class Ke extends pt{constructor(t,e,n=!1){super(O.smoke.animations.smoke),this.upSpeed=2.5*e,this.animationSpeed=.5,this.loop=!1,this.scale.set(e),this.anchor.set(.5,n?.5:1),this.position.x=t.x,this.position.y=t.y,this.play(),this.onComplete=()=>{Nt(this),this.destroy()},wt(this)}tick(t){this.position.y-=t.deltaTime*this.upSpeed}}class en extends pt{constructor(t){super(O.wind_generator.animations.go),this.anchor.set(.5,1),this.position.set(t.x,t.y),this.scale.set(t.scale.x),this.animationSpeed=1,this.play(),this.sizeScale=t.sizeScale,this.offsetRate={x:t.offsetRate.x,y:t.offsetRate.y};const e=t.parent.getChildIndex(t);t.parent.addChildAt(this,e),t.parent.addChild(new Ke(t.position,t.scale.x*2,!0)),t.destroy()}updateOnMap(t,e,n){this.scale.set(this.sizeScale*t),this.position.set(this.offsetRate.x*e,this.offsetRate.y*n)}}class ie extends ot{constructor(t,e,n,r=!1){super(O[t]),this.anchor.set(.5,1),this.sizeScale=e,this.offsetRate={x:n.x,y:n.y},this.isReverse=r}updateOnMap(t,e,n){this.scale.set(this.sizeScale*t),this.isReverse&&(this.scale.x*=-1),this.position.set(this.offsetRate.x*e,this.offsetRate.y*n)}}class nn extends pt{constructor(t,e){super(O.rotor_generator.animations.go),this.anchor.set(.5,1),this.position.set(t.x,t.y),this.scale.set(t.scale.x),this.animationSpeed=1,e?this.play():this.stop(),this.sizeScale=t.sizeScale,this.offsetRate={x:t.offsetRate.x,y:t.offsetRate.y};const n=t.parent.getChildIndex(t);t.parent.addChildAt(this,n),t.parent.addChild(new Ke(t.position,t.scale.x*2,!0)),t.destroy(),C.on(S.requestStartTurbo,()=>this.play()),C.on(S.responseStopTurbo,()=>this.stop())}updateOnMap(t,e,n){this.scale.set(this.sizeScale*t),this.position.set(this.offsetRate.x*e,this.offsetRate.y*n)}}class Bn extends pt{constructor(t,e){super(O.sparks.animations.splash),this.anchor.set(.5),this.scale.set(e*.5),this.animationSpeed=.5,this.loop=!1,this.position.x=t.x,this.position.y=t.y,this.play(),this.onComplete=()=>{Nt(this),this.destroy()},wt(this),Gt(mt.se_sparks)}tick(t){this.position.y+=t.deltaTime*2}}const Vv=.25;class Wv extends pt{constructor(t,e){super(O.explosion.animations.go),this.anchor.set(.5),this.scale.set(e),this.position.x=t.x,this.position.y=t.y,this.animationSpeed=.5,this.loop=!1,this.play(),this.onComplete=()=>{Nt(this),this.destroy()},this.upSpeed=Vv*e,wt(this),Gt(mt.se_explosion)}tick(t){this.position.y-=t.elapsedMS*this.upSpeed}}const Hv=.35,zr=3*1e3,Re=45*1e3,va=.001,ya=4;class Xv extends pt{constructor(t,e,n,r){super(O.spy_bot.animations.go),this.anchor.set(.5,1),this.animationSpeed=.5,this.stop(),this.levelNumber=Number(r),this.hp=this.levelNumber,this.turnRate=Math.random()<.5?-1:1,this.offsetRateX=Hv*this.turnRate,this.offsetRateY=0,this.topPoint=0,this.distance=0,this.isVisible=!1,this.isActive=this.levelNumber>=ya,this.isSmoke=!1,this.halfHeight=this.height*.5,this.halfOffset=this.halfHeight,this.spyDetectedVoice=t,this.spyFirstVoice=e,this.stateHelpRemove=n,this.timeout=null,this.eventMode="static",this.on("pointerdown",this.getClick.bind(this)),C.on(S.updateUILevel,this.updateLevel.bind(this)),C.on(S.timeAcceleration,this.timeAcceleration.bind(this)),C.on(S.requestAD,this.requestAD.bind(this)),this.flyTimeout=zr,this.isActive&&(this.timeout=setTimeout(()=>this.showBot(),Re))}updateOnMap(t,e,n,r){this.scale.set(t),this.scale.x*=this.turnRate,this.topPoint=r,this.distance=n-r,this.halfOffset=this.halfHeight*t,this.position.x=this.offsetRateX*e,this.offsetRateY>0?this.position.y=this.topPoint+this.distance*this.offsetRateY:this.position.y=r}updateLevel(t){this.levelNumber=Number(t),this.hp=this.levelNumber,this.flyTimeout=zr+Math.floor(this.levelNumber*100),this.stateHelpRemove&&(this.flyTimeout*=3),!this.isActive&&this.levelNumber>=ya&&(this.isActive=!0,this.timeout=setTimeout(()=>this.showBot(),Re))}getClick(){Bs({point:{position:{x:this.position.x,y:this.position.y-this.halfOffset},index:0},count:3,scale:this.scale.y}),this.hp--,this.hp>0?(this.isSmoke=!this.isSmoke,this.isSmoke?this.parent.addChild(new Ke(this.position,this.scale.y*.5)):this.parent.addChild(new Bn({x:this.position.x,y:this.position.y-this.height*this.scale.y},this.scale.y)),ra(!1)):(Nt(this),this.parent.addChild(new Bn({x:this.position.x,y:this.position.y-this.height*this.scale.y},this.scale.y)),this.parent.addChild(new Wv(this.position,this.scale.y)),Gt(mt.se_explosion),this.offsetRateY=0,this.position.y=this.topPoint,this.isVisible=!1,this.timeout=setTimeout(()=>this.showBot(),Re),ra(!0))}showBot(){this.hp=this.levelNumber+5,this.turnRate*=-1,this.scale.x*=-1,this.offsetRateX*=-1,this.position.x*=-1,this.isVisible=!0,this.play(),this.timeout=setTimeout(()=>this.isVisible=!1,this.flyTimeout),wt(this),$m()&&ct(this.spyDetectedVoice),this.stateHelpRemove&&(ct(this.spyFirstVoice),this.stateHelpRemove(),this.stateHelpRemove=null,this.flyTimeout=zr)}tick(t){this.isVisible?this.offsetRateY<1&&(this.offsetRateY+=va*t.elapsedMS,this.position.y=this.topPoint+this.distance*this.offsetRateY):this.offsetRateY>0?(this.offsetRateY-=va*t.elapsedMS,this.position.y=this.topPoint+this.distance*this.offsetRateY):(this.stop(),Nt(this),this.timeout=setTimeout(()=>this.showBot(),Re))}timeAcceleration(t){this.isActive&&t&&(this.isVisible=!1,clearTimeout(this.timeout),this.timeout=setTimeout(()=>this.showBot(),Re))}requestAD(){!this.isActive||this.isVisible||(clearTimeout(this.timeout),this.timeout=setTimeout(()=>this.showBot(),Re))}}const Yv=7,jv=32,_a=5,qv=10*1e3;class Kv extends Z{constructor(t,e,n,r){super(),this.voiceBuild1=r.build1,this.voiceBuild2=r.build2,this.voiceStart=r.start,this.isOnBuild=n.level<_a,this.mainIndex=n.level<_a?n.level-1:0,this.lightningCount=n.lightnings,this.drawScale=t,this.activeLamps=n.lamps,this.isActive=!1,this.tower=new pt(O.time_machine.animations.on),this.tower.animationSpeed=0,this.tower.loop=!1,this.isOnBuild===!1&&(this.tower.gotoAndStop(0),this.addChild(this.tower)),this.lamps=new pt(O.time_machine_lamps.animations.go),this.lamps.position.set(-44,-88),this.lamps.animationSpeed=0,this.isOnBuild===!1&&(this.lamps.gotoAndStop(this.activeLamps),this.addChild(this.lamps)),this.progress=new pt(O.time_machine_progress.animations.go),this.progress.position.set(-44,-88),this.progress.animationSpeed=0,this.isOnBuild===!1&&(this.progress.gotoAndStop(0),this.addChild(this.progress)),this.isOnBuild&&(this.base=new pt(O.time_machine_base.animations.go),this.base.animationSpeed=0,this.base.gotoAndStop(this.mainIndex),this.base.position.set(0,0),this.addChild(this.base)),this.lightning={position:{x:0,y:0},index:1},this.sizeScale=t,this.offsetRate={x:e.x,y:e.y},C.on(S.updateUILevel,this.updateLevel.bind(this)),C.on(S.getClick,this.getClick.bind(this))}updateOnMap(t,e,n){this.drawScale=this.sizeScale*t,this.scale.set(this.drawScale),this.position.set(this.offsetRate.x*e,this.offsetRate.y*n),this.lightning.position.x=this.position.x+50*this.scale.x,this.lightning.position.y=this.position.y-518*this.scale.y}build(){this.parent.addChild(new Ke(this.position,this.scale.x*2,!0)),this.mainIndex++,this.mainIndex>3?(this.mainIndex=0,this.isOnBuild=!1,this.removeChild(this.base),this.tower.gotoAndStop(0),this.addChild(this.tower),this.lamps.gotoAndStop(0),this.addChild(this.lamps),this.progress.gotoAndStop(0),this.addChild(this.progress),ct(G[this.voiceBuild1]),ct(G[this.voiceBuild2])):this.base.gotoAndStop(this.mainIndex)}updateLevel(){this.isOnBuild&&this.build()}getClick(){this.isOnBuild||this.isActive||(this.mainIndex++,this.mainIndex===jv&&(this.mainIndex=0,this.activeLamps++,this.activeLamps===Yv&&(this.activeLamps=0,this.activation()),this.lamps.gotoAndStop(this.activeLamps)),this.progress.gotoAndStop(this.mainIndex),Bs({point:this.lightning,count:this.lightningCount,scale:this.drawScale}))}activation(){sa(!0),ct(G[this.voiceStart]),this.isActive=!0,this.tower.animationSpeed=.5,this.tower.gotoAndPlay(0),this.tower.onComplete=()=>{Ar(this.isActive),setTimeout(()=>this.deactivation(),qv),wt(this),Gt(mt.se_time_acc),setTimeout(()=>this.checkSound(),2e3)}}checkSound(){this.isActive&&(Gt(mt.se_time_acc),setTimeout(()=>this.checkSound(),2e3))}deactivation(){this.isActive=!1,Ar(this.isActive),Nt(this),this.tower.textures=O.time_machine.animations.off,this.tower.gotoAndPlay(0),this.tower.onComplete=()=>{sa(!1),Ar(this.isActive),this.tower.animationSpeed=0,this.tower.textures=O.time_machine.animations.on,this.tower.gotoAndStop(0)}}tick(t){Um({point:this.lightning,count:this.lightningCount,scale:this.drawScale})}}const En=Array(300).fill(0).fill(1,285).fill(2,295);En.sort(()=>Math.random()-.5);let rn=Math.floor(Math.random()*En.length);function ba(){return rn++,rn===En.length&&(rn=0),En[rn]}class Zv extends Z{constructor(t,e,n){super(),this.state=e,this.lightnings=[],this.rgReserve=e.turboOpenBuildings,this.wgReserve=e.autoOpenBuildings,this.car=new ie("broken_car",.45,{x:-.3,y:-.9},!0),this.addChild(this.car);const r={lightnings:1,lamps:e.timeMachineLamps,level:Number(e.level)},s={build1:n?"ru_time_acc_build_1":"en_time_acc_build_1",build2:n?"ru_time_acc_build_2":"en_time_acc_build_2",start:n?"ru_time_acc_start":"en_time_acc_start"};this.timeMachine=new Kv(.75,{x:-.4,y:-.75},r,s),this.addChild(this.timeMachine),this.cube=new ie("euro_cube",.75,{x:.1,y:-.8},!0),this.addChild(this.cube);const o={scale:.55,offsetRate:{x:.37,y:-.88},canvasIndex:1,dischargeEventName:S.setTurboCharge,upgradeEventName:S.updateTowerTurbo,isActive:e.turboOpenBuildings>0,lightningCount:e.turboLightnings};this.RG1LT=new ci(o),this.addChild(this.RG1LT),this.bbRG1=new ie("building_box",.6,{x:.3,y:-.8}),this.addChild(this.bbRG1),e.turboOpenBuildings>0&&(this.bbRG1=new nn(this.bbRG1,!1)),this.bbWG1=new ie("building_box",.75,{x:-.15,y:-.65}),this.addChild(this.bbWG1),e.autoOpenBuildings>0&&(this.bbWG1=new en(this.bbWG1));const a={scale:.7,offsetRate:{x:-.25,y:-.55},canvasIndex:1,dischargeEventName:S.setAutoCharge,upgradeEventName:S.updateTowerAuto,isActive:e.autoOpenBuildings>0,lightningCount:e.autoLightnings};this.WG1LT=new ci(a),this.addChild(this.WG1LT),this.bbWG2=new ie("building_box",.8,{x:.45,y:-.5}),this.addChild(this.bbWG2),e.autoOpenBuildings>1&&(this.bbWG2=new en(this.bbWG2));const l={scale:.8,offsetRate:{x:.55,y:-.4},canvasIndex:1,dischargeEventName:S.setAutoCharge,upgradeEventName:S.updateTowerAuto,isActive:e.autoOpenBuildings>1,lightningCount:e.autoLightnings};this.WG2LT=new ci(l),this.addChild(this.WG2LT),this.lightningCanvasSecond=new Pt,this.lightningCanvasSecond.lineWidth=1,this.addChild(this.lightningCanvasSecond),this.teslaTower=new $v(.9,{x:0,y:-.35}),this.addChild(this.teslaTower),this.transformer=new ie("transformer",1,{x:-.08,y:.1}),this.addChild(this.transformer),this.truck=new ie("truck",1,{x:.4,y:-.02},!0),this.addChild(this.truck),this.lightningCanvasFirst=new Pt,this.lightningCanvasFirst.lineWidth=2,this.addChild(this.lightningCanvasFirst),this.bbRG2=new ie("building_box",.9,{x:-.42,y:-.2}),this.addChild(this.bbRG2),e.turboOpenBuildings>1&&(this.bbRG2=new nn(this.bbRG2,!1));const u={scale:.85,offsetRate:{x:-.52,y:-.1},canvasIndex:0,dischargeEventName:S.setTurboCharge,upgradeEventName:S.updateTowerTurbo,isActive:e.turboOpenBuildings>1,lightningCount:e.turboLightnings};this.RG2LT=new ci(u),this.addChild(this.RG2LT);const h={scale:.9,offsetRate:{x:.2,y:.1},canvasIndex:0,dischargeEventName:S.getClick,upgradeEventName:S.updateTowerClick,isActive:!0,lightningCount:e.clickLightnings};this.mainButtonLT=new ci(h),this.addChild(this.mainButtonLT);const c=n?G.ru_spy:G.en_spy,f=n?G.ru_spy_kill:G.en_spy_kill,d=this.state.help.has("spy")?()=>this.state.help.delete("spy"):null;this.spyBot=new Xv(c,f,d,this.state.level),this.addChild(this.spyBot),this.screenResize(t),C.on(S.screenResize,this.screenResize.bind(this)),C.on(S.updateBuildingAuto,this.updateBuildingAuto.bind(this)),C.on(S.updateBuildingTurbo,this.updateBuildingTurbo.bind(this)),C.on(S.drawCharge,this.lightning.bind(this)),C.on(S.drawSkyCharge,this.skyLightning.bind(this)),this.canvases=[this.lightningCanvasFirst,this.lightningCanvasSecond],wt(this)}screenResize(t){let e,n,r,s,o,a;t.width>t.height?(e=je>t.width?t.width/je:1,n=Zu*e,this.position.x=t.centerX,this.position.y=t.height-n*.6,a=t.width/2024):(e=qe>t.width?t.width/qe:1,n=Qu*e,this.position.x=t.centerX,this.position.y=t.height-n*.75,a=t.width/1368),s=Ju*t.width;const l=t.height*On;s>On&&(s=l),o=a>1?1:a,s=s*1.2,r=t.width*.8,this.mainButtonLT.updateOnMap(o,r,s),this.teslaTower.updateOnMap(o,r,s),this.timeMachine.updateOnMap(o,r,s),this.car.updateOnMap(o,r,s),this.cube.updateOnMap(o,r,s),this.truck.updateOnMap(o,r,s),this.transformer.updateOnMap(o,r,s),this.bbRG1.updateOnMap(o,r,s),this.RG1LT.updateOnMap(o,r,s),this.bbRG2.updateOnMap(o,r,s),this.RG2LT.updateOnMap(o,r,s),this.bbWG1.updateOnMap(o,r,s),this.WG1LT.updateOnMap(o,r,s),this.bbWG2.updateOnMap(o,r,s),this.WG2LT.updateOnMap(o,r,s);const u=this.position.y-(this.position.y-s)*.5;this.spyBot.updateOnMap(o,r,-u,-this.position.y)}lightning(t){this.lightnings=this.lightnings.concat(Array(t.count).fill(t.point));const e=ba();e>0&&this.addChild(new Bn(t.point.position,t.scale)),e>1&&this.addChild(new Ke(t.point.position,t.scale))}skyLightning(t){const e={position:{x:t.point.position.x,y:-this.position.y}};ga(t.point,e,this.canvases[t.point.index]);const n=ba();n>0&&this.addChild(new Bn(t.point.position,t.scale)),n>1&&this.addChild(new Ke(t.point.position,t.scale))}tick(){for(this.lightningCanvasSecond.clear(),this.lightningCanvasFirst.clear();this.lightnings.length>0;){const t=this.lightnings.pop();ga(t,this.teslaTower.lightning,this.canvases[t.index])}}updateBuildingAuto(t){t===1?(this.bbWG1=new en(this.bbWG1),this.WG1LT.activate()):t===2&&(this.bbWG2=new en(this.bbWG2),this.WG2LT.activate())}updateBuildingTurbo(t){t===1?(this.bbRG1=new nn(this.bbRG1,this.state.addRate>1n),this.RG1LT.activate()):t===2&&(this.bbRG2=new nn(this.bbRG2,this.state.addRate>1n),this.RG2LT.activate())}}let ps=!0,ih=!1;const Sa=3e4;function nh(){ps=!ps,setTimeout(nh,Sa+Math.floor(Math.random()*Sa))}C.on(S.timeAcceleration,i=>ih=i);let Ve=[],Un=[];const Qv=1e-4,sn=1e-5,wa=5e-5;let bn=0,Sn=0;C.on(S.screenResize,i=>{bn=i.width,Sn=i.height});C.on(S.clearSnow,()=>{for(;Ve.length;)Un.push(Ve.pop())});class Jv{constructor(){this.init()}init(){this.isExist=!0,this.size=Qv,this.speed=sn+Math.random()*(wa-sn),this.increaseSpeed=sn+Math.random()*(wa-sn),this.position={x:bn*.4+Math.random()*(bn*.2),y:-Sn*.2-Math.random()*(Sn*.3)},this.rotation=Math.random()*Math.PI,Ve.push(this)}tick(t){const e=t.elapsedMS*this.increaseSpeed;Ov(this,t.elapsedMS*this.speed),this.speed+=e*.1,this.size+=e*2,(this.position.x>bn||this.position.x<0||this.position.y>Sn)&&(this.isExist=!1,Un.push(this)),ih&&(this.speed*=2)}}class ty extends Pt{constructor(){super(),nh(),wt(this)}addSnowflake(){Un.length?Un.pop().init():new Jv}tick(t){ps&&this.addSnowflake(),this.clear(),Ve.forEach(e=>{e.tick(t),this.circle(e.position.x,e.position.y,e.size),this.fill("white")}),Ve=Ve.filter(e=>e.isExist)}}BigInt.prototype.toFormat=function(){return this.toString().replace(/(\d)(?=(\d{3})+$)/g,"$1 ")};BigInt.prototype.x2=function(){return this+this};BigInt.prototype.x3=function(){return this.toString()[0]==="2"?this*25n/10n:this*2n};BigInt.prototype.x5=function(){return this.toString()[0]==="5"?this*4n:this*5n};const xi=77,ey=xi/1e3,ms=60*1e3;let on=ms;const ce=5;class iy{constructor(t=null,e){this.help=new Set(t?t.help:["button","auto","click","turbo","boost","spy"]),this.points=t?BigInt(t.points):0n,this.addRate=1n,this.level=t?BigInt(t.level):1n,this.levelScored=t?BigInt(t.levelScored):0n,this.levelPrice=t?BigInt(t.levelPrice):1000n,this.turboSeconds=t?t.turboSeconds:10,this.turboPrice=t?BigInt(t.turboPrice):1000n,this.turboTimeout=0,this.turboBonusText=e?"Бонус за клик x":"Bonus per click x",this.turboOpenBuildings=t?t.turboOpenBuildings:0,this.turboLightnings=t?t.turboLightnings:1,this.timeMachineLamps=t?t.timeMachineLamps:0,this.timeMachineRate=25n,this.isTimeMachineActivated=!1,this.timeMachineBonusText=e?"Бонус в секунду x":"Bonus per second x",this.addPerClick=t?BigInt(t.addPerClick):1n,this.addPerClickNextValue=t?BigInt(t.addPerClickNextValue):1n,this.addPerClickPrice=t?BigInt(t.addPerClickPrice):250n,this.clickLightnings=t?t.clickLightnings:1,this.addPerSecond=t?BigInt(t.addPerSecond):0n,this.addPerSecondNextValue=t?BigInt(t.addPerSecondNextValue):1n,this.addPerSecondPrice=t?BigInt(t.addPerSecondPrice):50n,this.autoOpenBuildings=t?t.autoOpenBuildings:0,this.autoLightnings=t?t.autoLightnings:1,C.on(S.getClick,this.getButtonClick.bind(this)),C.on(S.requestUpgradeClick,this.upgradeClick.bind(this)),C.on(S.requestUpgradeAuto,this.upgradeAuto.bind(this)),C.on(S.requestStartTurbo,this.startTurbo.bind(this)),C.on(S.timeAcceleration,n=>{this.isTimeMachineActivated=n,n&&ui(this.timeMachineBonusText+this.timeMachineRate.toString())}),C.on(S.requestAD,this.showAD.bind(this)),C.on(S.spyBotGetDamage,this.spyBotGetDamage.bind(this)),this.addPerTick=Number(this.addPerSecond)/1e3*xi,this.tickReserve=0,this.lastTimeStamp=0,wt(this)}getButtonClick(){on=ms,this.getPoints(this.addPerClick*this.addRate),this.addRate>1n&&(Am(),ui(`x ${this.addRate}`))}spyBotGetDamage(t){const e=t?this.addPerClick*25n:this.addPerClick*5n;this.getPoints(e),ui("+ "+(this.addRate*e).toFormat())}tick(t){if(on-=t.deltaMS,on<=0&&(on=ms,Sm()),this.lastTimeStamp+=t.deltaMS,this.lastTimeStamp>xi){if(this.lastTimeStamp-=xi,this.addPerSecond>0n&&(this.tickReserve+=this.addPerTick,this.tickReserve>1)){const e=Math.floor(this.tickReserve);this.tickReserve-=e,this.isTimeMachineActivated?this.getPoints(BigInt(e)*this.timeMachineRate):this.getPoints(BigInt(e)),Cm()}this.addRate>1n&&(this.turboTimeout-=ey,this.turboTimeout<=0?(this.turboTimeout=this.turboSeconds,this.addRate=1n,ea(),ns(),setTimeout(this.sendUpdates,300)):ns())}}getPoints(t){this.points+=t,this.levelScored+=t,this.checkLevel(),gi()}checkLevel(){this.levelScored<this.levelPrice||(this.level++,this.levelScored-=this.levelPrice,this.levelPrice=this.levelPrice.x5(),this.addRate>1n&&(this.addRate=this.level,ui(this.turboBonusText+this.level.toString())),Fm(this.level),this.updateTurboLightnings())}showAD(t){if(t){const e=(this.addPerClickPrice+this.addPerSecondPrice+this.turboPrice)/6n;this.points+=e,this.levelScored+=e,this.checkLevel(),oa(e)}else this.turboSeconds+=.5,this.turboTimeout=this.turboSeconds,oa(0)}increaseValue(t,e){const n=t.toString(),r=n.length-1;switch(n[0]){case"1":return updateCounter(e,1),BigInt(2*10**r);case"2":return updateCounter(e,1),BigInt(5*10**r);case"5":return updateCounter(e,2),BigInt(10*10**r)}}upgradeClick(){if(this.points<this.addPerClickPrice)return;switch(this.points-=this.addPerClickPrice,this.addPerClickPrice=this.addPerClickPrice.x2(),this.addPerClick.toString()[0]){case"1":this.addPerClick+=this.addPerClickNextValue;break;case"2":this.addPerClick+=this.addPerClickNextValue,this.addPerClickNextValue*=2n;break;case"3":case"5":this.addPerClick+=this.addPerClickNextValue,this.addPerClickNextValue=this.addPerClick;break;default:this.addPerClick=1n}gi(),zm();const t=this.addPerClick.toString().length,e=Math.ceil(t/2);e>this.clickLightnings&&e<ce&&(this.clickLightnings=e,Em(e))}upgradeAuto(){if(!(this.points<this.addPerSecondPrice)){switch(this.points-=this.addPerSecondPrice,this.addPerSecondPrice=this.addPerSecondPrice.x2(),this.addPerSecond.toString()[0]){case"1":this.addPerSecond+=this.addPerSecondNextValue;break;case"2":this.addPerSecond+=this.addPerSecondNextValue,this.addPerSecondNextValue*=2n;break;case"3":case"5":this.addPerSecond+=this.addPerSecondNextValue,this.addPerSecondNextValue=this.addPerSecond;break;default:this.addPerSecond=1n}this.addPerTick=Number(this.addPerSecond)/1e3*xi,gi(),km(),this.updateAutoLightnings()}}startTurbo(){if(this.points<this.turboPrice)return ea();this.addRate=this.level,this.turboTimeout=this.turboSeconds,this.points-=this.turboPrice,this.turboPrice=this.turboPrice.x3(),gi(),Rm(),ui(this.turboBonusText+this.level.toString())}updateAutoLightnings(){this.autoOpenBuildings===0?(this.autoOpenBuildings++,ia(this.autoOpenBuildings)):this.autoOpenBuildings===1?(this.autoLightnings++,this.autoLightnings>ce&&(this.autoLightnings=1,this.autoOpenBuildings++,ia(this.autoOpenBuildings))):this.autoLightnings<ce&&this.autoLightnings++,Bm(this.autoLightnings)}updateTurboLightnings(){this.turboOpenBuildings===0&&(this.turboOpenBuildings++,na(this.turboOpenBuildings)),this.turboOpenBuildings===1&&Number(this.level)>ce&&(this.turboOpenBuildings++,na(this.turboOpenBuildings)),this.turboLightnings=this.turboOpenBuildings===1?Number(this.level):Number(this.level)-ce,this.turboLightnings>ce&&(this.turboLightnings=ce),Om(this.turboLightnings)}getStateDataForSave(){return{help:Array.from(this.help),points:this.points.toString(),level:this.level.toString(),levelScored:this.levelScored.toString(),levelPrice:this.levelPrice.toString(),turboSeconds:this.turboSeconds,turboPrice:this.turboPrice.toString(),turboOpenBuildings:this.turboOpenBuildings,turboLightnings:this.turboLightnings,timeMachineLamps:this.timeMachineLamps,addPerClick:this.addPerClick.toString(),addPerClickNextValue:this.addPerClickNextValue.toString(),addPerClickPrice:this.addPerClickPrice.toString(),clickLightnings:this.clickLightnings,addPerSecond:this.addPerSecond.toString(),addPerSecondNextValue:this.addPerSecondNextValue.toString(),addPerSecondPrice:this.addPerSecondPrice.toString(),autoOpenBuildings:this.autoOpenBuildings,autoLightnings:this.autoLightnings}}}const ny=navigator.language||navigator.userLanguage;let an=!!~ny.indexOf("ru");function ry(){St.isRealYandex&&(an=St.isLangRu);const i=St?St.getSave():null,t=Oi(),e=new iy(i,an);St.startAutoSave(e.getStateDataForSave.bind(e)),re(new gv(t)),re(new Zv(t,e,an)),re(new ty),re(new Gv(t,e,an)),zi()}Rt.addBundle("fonts",bt);Rt.loadBundle("fonts").then(i=>{for(let t in i)bt[t]=i[t].family;nm(),qm(rh)});function rh(){var i;St.isReady?((i=St.SDK.features.LoadingAPI)==null||i.ready(),ry()):setTimeout(rh,200)}export{er as $,fl as A,At as B,Z as C,tt as D,I as E,$ as F,D as G,Oa as H,Bt as I,Xt as J,oo as K,ot as L,H as M,mc as N,Tc as O,yt as P,lt as Q,In as R,Cc as S,zt as T,Tn as U,Wc as V,tm as W,em as X,ut as Y,lo as Z,jh as _,xt as a,V as a0,Ea as a1,dl as a2,im as a3,qc as a4,xf as a5,Ef as a6,Lf as a7,Vf as a8,Hf as a9,Xf as aa,Xe as ab,F as ac,Y as ad,vt as ae,Ed as af,Ml as ag,yo as ah,xo as ai,_h as aj,Vo as ak,$d as al,Pt as am,nt as an,Sh as ao,Jr as ap,Qr as aq,No as ar,Cn as as,zl as at,cf as b,Ti as c,un as d,_t as e,vo as f,lf as g,_s as h,ul as i,ys as j,Tt as k,bs as l,Go as m,Bf as n,Uf as o,Nf as p,yl as q,Oh as r,Wf as s,Gn as t,E as u,bh as v,ht as w,N as x,jf as y,qt as z};
