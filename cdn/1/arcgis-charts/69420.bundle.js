"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[69420],{68577:(e,t,r)=>{r.d(t,{dp:()=>o,yZ:()=>a});var i=r(17321);const s=96;function a(e,t){const r=t||e.extent,a=e.width,o=(0,i.c9)(r&&r.spatialReference);return r&&a?r.width/a*o*i.hd*s:0}function o(e,t){return e/((0,i.c9)(t)*i.hd*s)}},69420:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var i=r(36663),s=r(66341),a=r(37956),o=r(70375),n=r(53280),l=r(63592),y=r(15842),p=r(78668),c=r(81977),h=r(7283),u=(r(7753),r(39994),r(34248)),d=r(40266),m=r(39835),b=r(65943),f=r(91772),g=r(68577),v=r(38481),S=r(91223),_=r(81432),x=r(87232),I=r(27668),C=r(63989),w=r(43330),O=r(18241),L=r(12478),E=r(95874),N=r(80002),P=r(2030),R=r(51599),D=r(24065),T=r(4452),F=r(23875),M=r(93698),J=r(76912),j=r(9593);let V=class extends((0,I.h)((0,P.n)((0,E.M)((0,N.x)((0,_.O)((0,x.Y)((0,w.q)((0,O.I)((0,y.R)((0,L.Q)((0,S.V)((0,C.N)((0,n.p)(v.Z)))))))))))))){constructor(...e){super(...e),this.dateFieldsTimeReference=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeReference=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(p.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,r,i){if(!this.loaded||!e)return;const s=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let a=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap?.supportsDynamicLayers){const e=(0,b.M9)(i.origin);if(e===b.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;a=(0,M.QV)(s,e,b.s3.SERVICE)}else if(e>b.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");a=(0,M.QV)(s,e.sublayers,(0,b.M9)(e.origin))}}const o=[],n={writeSublayerStructure:a,...i};let l=a;s.forEach((e=>{const t=e.write({},n);o.push(t),l=l||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(t.layers=o),l&&(t.visibleLayers=s.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,i){const s=i&&i.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new D.R({layer:this,floors:i?.floors,scale:(0,g.yZ)({extent:e,width:t})*s}),o=a.toJSON();a.destroy();const n=!i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},l=e&&e.spatialReference,y=l.wkid||JSON.stringify(l.toJSON());o.dpi*=s;const p={};if(i?.timeExtent){const{start:e,end:t}=i.timeExtent.toJSON();p.time=e&&t&&e===t?""+e:`${e??"null"},${t??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(p.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:t+","+r,...o,...n,...p}}async fetchImage(e,t,r,i){const{data:s}=await this._fetchImage("image",e,t,r,i);return s}async fetchImageBitmap(e,t,r,i){const{data:s,url:a}=await this._fetchImage("blob",e,t,r,i);return(0,T.g)(s,a,i?.signal)}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:r}=await(0,s.default)(this.url,t),{extent:i,fullExtent:o,timeExtent:n}=r,l=i||o;return{fullExtent:l&&f.Z.fromJSON(l),timeExtent:n&&a.Z.fromJSON({start:n[0],end:n[1]})}}loadAll(){return(0,l.G)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return(0,J.D)(this,e)}async _fetchImage(e,t,r,i,a){const n={responseType:e,signal:a?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(t,r,i,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(null!=n.query?.dynamicLayers&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new o.Z("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:e}=await(0,s.default)(l,n);return{data:e,url:l}}catch(e){if((0,p.D_)(e))throw e;throw new o.Z("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:e})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,s.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,i._)([(0,c.Cb)({type:j.Z})],V.prototype,"dateFieldsTimeReference",void 0),(0,i._)([(0,c.Cb)({type:Boolean})],V.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,c.Cb)()],V.prototype,"dpi",void 0),(0,i._)([(0,c.Cb)()],V.prototype,"gdbVersion",void 0),(0,i._)([(0,c.Cb)()],V.prototype,"imageFormat",void 0),(0,i._)([(0,u.r)("imageFormat",["supportedImageFormatTypes"])],V.prototype,"readImageFormat",null),(0,i._)([(0,c.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],V.prototype,"imageMaxHeight",void 0),(0,i._)([(0,c.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],V.prototype,"imageMaxWidth",void 0),(0,i._)([(0,c.Cb)()],V.prototype,"imageTransparency",void 0),(0,i._)([(0,c.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],V.prototype,"isReference",void 0),(0,i._)([(0,c.Cb)({json:{read:!1,write:!1}})],V.prototype,"labelsVisible",void 0),(0,i._)([(0,c.Cb)({type:["ArcGISMapServiceLayer"]})],V.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.Cb)({json:{read:!1,write:!1}})],V.prototype,"popupEnabled",void 0),(0,i._)([(0,c.Cb)({type:j.Z})],V.prototype,"preferredTimeReference",void 0),(0,i._)([(0,c.Cb)()],V.prototype,"sourceJSON",void 0),(0,i._)([(0,c.Cb)({json:{write:{ignoreOrigin:!0}}})],V.prototype,"sublayers",void 0),(0,i._)([(0,m.c)("sublayers",{layers:{type:[F.Z]},visibleLayers:{type:[h.z8]}})],V.prototype,"writeSublayers",null),(0,i._)([(0,c.Cb)({type:["show","hide","hide-children"]})],V.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],V.prototype,"type",void 0),(0,i._)([(0,c.Cb)(R.HQ)],V.prototype,"url",void 0),V=(0,i._)([(0,d.j)("esri.layers.MapImageLayer")],V);const k=V},24065:(e,t,r)=>{r.d(t,{R:()=>u});var i=r(36663),s=r(74396),a=r(53280),o=r(84684),n=r(81977),l=(r(7283),r(7753),r(39994),r(40266)),y=r(51599),p=r(21586),c=r(93698);const h={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let u=class extends((0,a.p)(s.Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,p.f)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,c.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(h[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,t=this.visibleSublayers.filter((t=>null!=t.definitionExpression||e&&null!=t.floorInfo));return t.length?JSON.stringify(t.reduce(((e,t)=>{const r=(0,p.f)(this.floors,t),i=(0,o._)(r,t.definitionExpression);return null!=i&&(e[t.id]=i),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=t=>{const i=this.scale,s=0===i,a=0===t.minScale||i<=t.minScale,o=0===t.maxScale||i>=t.maxScale;t.visible&&(s||a&&o)&&(t.sublayers?t.sublayers.forEach(r):e.unshift(t))};t&&t.forEach(r);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((t,r)=>e[r]!==t))?e:i}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,i._)([(0,n.Cb)({readOnly:!0})],u.prototype,"dynamicLayers",null),(0,i._)([(0,n.Cb)()],u.prototype,"floors",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],u.prototype,"hasDynamicLayers",null),(0,i._)([(0,n.Cb)()],u.prototype,"layer",null),(0,i._)([(0,n.Cb)({readOnly:!0})],u.prototype,"layers",null),(0,i._)([(0,n.Cb)({readOnly:!0})],u.prototype,"layerDefs",null),(0,i._)([(0,n.Cb)({type:Number})],u.prototype,"scale",void 0),(0,i._)([(0,n.Cb)(y.qG)],u.prototype,"timeExtent",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],u.prototype,"version",null),(0,i._)([(0,n.Cb)({readOnly:!0})],u.prototype,"visibleSublayers",null),u=(0,i._)([(0,l.j)("esri.layers.mixins.ExportImageParameters")],u)},21586:(e,t,r)=>{function i(e){const t=e.layer;return"floorInfo"in t&&t.floorInfo?.floorField&&"floors"in e.view?a(e.view.floors,t.floorInfo.floorField):null}function s(e,t){return"floorInfo"in t&&t.floorInfo?.floorField?a(e,t.floorInfo.floorField):null}function a(e,t){if(!e?.length)return null;const r=e.filter((e=>""!==e)).map((e=>`'${e}'`));return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}r.d(t,{c:()=>i,f:()=>s})}}]);