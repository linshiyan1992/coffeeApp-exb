"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[58434],{34344:(e,t,r)=>{function s(){return[1,0,0,0,1,0,0,0,1]}function i(e,t,r,s,i,n,o,a,l){return[e,t,r,s,i,n,o,a,l]}function n(e,t){return new Float64Array(e,t,9)}r.d(t,{a:()=>n,c:()=>s,f:()=>i}),Object.freeze(Object.defineProperty({__proto__:null,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:s,createView:n,fromValues:i},Symbol.toStringTag,{value:"Module"}))},11777:(e,t,r)=>{r.d(t,{E:()=>u,H:()=>d});var s=r(1662),i=r(34344),n=r(55709),o=r(6766);const a=(0,r(8909).c)(),l=(0,i.c)(),h=(0,i.c)(),c=(0,i.c)();function d(e,t,r){return(0,o.s)(a,t[0],t[1],1),(0,o.t)(a,a,(0,s.t)(l,r)),0===a[2]?(0,n.s)(e,a[0],a[1]):(0,n.s)(e,a[0]/a[2],a[1]/a[2])}function u(e,t,r){return p(h,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),p(c,r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]),(0,s.m)(e,(0,s.a)(h,h),c),0!==e[8]&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function p(e,t,r,i,n,h,c,d,u){(0,s.s)(e,t,i,h,r,n,c,1,1,1),(0,o.s)(a,d,u,1),(0,s.a)(l,e);const[p,m,f]=(0,o.t)(a,a,(0,s.t)(l,l));return(0,s.s)(l,p,0,0,0,m,0,0,0,f),(0,s.m)(e,l,e)}},7014:(e,t,r)=>{r.d(t,{L:()=>d});var s=r(36663),i=r(74396),n=r(81977),o=(r(7283),r(7753),r(39994),r(40266)),a=r(89542),l=r(92376),h=r(24568),c=r(60797);let d=class extends i.Z{constructor(e){super(e)}get bounds(){const e=this.coords;return null==e||null==e.extent?null:(0,h.oJ)(e.extent)}get coords(){const e=this.element.georeference?.coords;return(0,l.projectOrLoad)(e,this.spatialReference).geometry}get normalizedCoords(){return a.Z.fromJSON((0,c.Ui)(this.coords))}get normalizedBounds(){const e=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=e?(0,h.oJ)(e):null}};(0,s._)([(0,n.Cb)()],d.prototype,"spatialReference",void 0),(0,s._)([(0,n.Cb)()],d.prototype,"element",void 0),(0,s._)([(0,n.Cb)()],d.prototype,"bounds",null),(0,s._)([(0,n.Cb)()],d.prototype,"coords",null),(0,s._)([(0,n.Cb)()],d.prototype,"normalizedCoords",null),(0,s._)([(0,n.Cb)()],d.prototype,"normalizedBounds",null),d=(0,s._)([(0,o.j)("esri.layers.support.MediaElementView")],d)},58434:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ee});var s=r(36663),i=(r(91957),r(80085),r(86004),r(45510),r(16192),r(71297),r(878),r(22836),r(50172),r(72043),r(72506),r(4905),r(6865)),n=(r(39994),r(13802)),o=r(86114),a=r(78668),l=r(76868),h=r(81977),c=(r(7283),r(7753),r(40266)),d=r(24568),u=r(27127),p=r(68668),m=r(7014),f=r(70375),_=(r(17262),r(66341),r(51366),r(20182),r(3466),r(60211),r(88464),r(51118)),y=(r(75995),r(31056),r(38716)),v=(r(69118),r(18916),r(64429),r(96227),r(91907)),g=(r(6174),r(8396)),w=(r(88338),r(14266),r(4157),r(89106),r(21402),r(6944),r(56915),r(78291),r(78951)),b=(r(18567),r(43106),r(71449)),C=r(29620),x=(r(71139),r(27894),r(17429),r(464),r(19431)),R=(r(8530),r(61296),r(55542)),E=(r(43405),r(6286),r(58536),r(74580),r(92109),r(24204),r(70968),r(41028),r(54689),r(17346),r(23410),r(73534),r(12045),r(61581),r(70187),r(40794),r(38488),r(53791),r(5992),r(12065),r(17321),r(6923),r(79912)),M=r(29927),S=(r(98863),r(67979),r(82729),r(48899),r(64970),r(87241),r(17224)),T=r(23656),V=r(49546),q=r(61681),A=r(11777),z=r(34344),G=r(55709),P=r(69666),O=r(80479);const D=(0,z.c)();class U extends _.s{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=(0,P.a)(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push((0,l.YP)((()=>this.elementView.element.opacity),(e=>this.opacity=e),l.nn),(0,l.YP)((()=>[this.elementView.coords]),(()=>{this.requestRender()}),l.nn),(0,l.gx)((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),"video"===e.type&&null!=e.content&&this._handles.push((0,V.on)(e.content,"play",(()=>this.requestRender())))}),l.nn)),e.element.load().catch((t=>{n.Z.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new f.Z("element-load-error","Element cannot be displayed",{element:e,error:t}))}))}destroy(){this._handles.forEach((e=>e.remove())),this.texture=(0,q.M2)(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,r=this.elementView.element.content;if(null!=r){const e=r instanceof HTMLImageElement,s=r instanceof HTMLVideoElement,i=e?r.naturalWidth:s?r.videoWidth:r.width,n=e?r.naturalHeight:s?r.videoHeight:r.height;if(this._updatePerspectiveTransform(i,n),this.texture)s&&!r.paused&&(this.texture.setData(r),this.requestRender(),(t.type===g.zO.WEBGL2||(0,x.wt)(i)&&(0,x.wt)(n))&&this.texture.generateMipmap());else{const e=new O.X;e.wrapMode=v.e8.CLAMP_TO_EDGE,e.preMultiplyAlpha=!0,e.width=i,e.height=n,this.texture=new b.x(t,e,r),(t.type===g.zO.WEBGL2||(0,x.wt)(i)&&(0,x.wt)(n))&&this.texture.generateMipmap(),s&&!r.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const r=this.elementView.coords;if(null==r)return;const[s,i,n,o]=r.rings[0],a=this._vertices,{x:l,y:h}=e,c=0!==t;c?a.set([i[0]-l,i[1]-h,s[0]-l,s[1]-h,n[0]-l,n[1]-h,o[0]-l,o[1]-h,o[0]-l,o[1]-h,i[0]+t-l,i[1]-h,i[0]+t-l,i[1]-h,s[0]+t-l,s[1]-h,n[0]+t-l,n[1]-h,o[0]+t-l,o[1]-h]):a.set([i[0]-l,i[1]-h,s[0]-l,s[1]-h,n[0]-l,n[1]-h,o[0]-l,o[1]-h]),this.isWrapAround=c}getVAO(e,t,r){if(null==this.elementView.coords)return null;const s=this._vertices;if(this._vao)this._geometryVbo.setData(s);else{this._geometryVbo=w.f.createVertex(e,v.l1.DYNAMIC_DRAW,s);const i=w.f.createVertex(e,v.l1.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new C.U(e,r,t,{geometry:this._geometryVbo,tex:i})}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;(0,A.E)(D,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),(0,G.s)(this.perspectiveTransform,D[6]/D[8]*e,D[7]/D[8]*t)}}var L=r(95550),j=r(1662),W=r(19710),Z=r(35925),H=r(69050),I=r(97281),k=r(10994);class B extends k.Z{constructor(){super(...arguments),this._localOrigin=(0,L.vW)(0,0),this._viewStateId=-1,this._dvsMat3=(0,W.c)(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[I.U.overlay],target:()=>this.children,drawPhase:y.jx.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:r,size:s,pixelRatio:i,resolution:n,rotation:o,viewpoint:a,displayMat3:l}=t;if(this._viewStateId===r)return;const h=Math.PI/180*o,c=i*s[0],d=i*s[1],{x:u,y:p}=a.targetGeometry,m=(0,M.or)(u,t.spatialReference);this._localOrigin.x=m,this._localOrigin.y=p;const f=n*c,_=n*d,y=(0,j.g)(this._dvsMat3);(0,j.m)(y,y,l),(0,j.h)(y,y,(0,R.f)(c/2,d/2)),(0,j.d)(y,y,(0,E.f)(c/f,-d/_,1)),(0,j.r)(y,y,-h),this._viewStateId=r}_updateOverlays(e,t){const{state:r}=e,{rotation:s,spatialReference:i,worldScreenWidth:n,size:o,viewpoint:a}=r,l=this._localOrigin;let h=0;const c=(0,Z.C5)(i);if(c&&i.isWrappable){const e=o[0],d=o[1],u=180/Math.PI*s,p=Math.abs(Math.cos(u)),m=Math.abs(Math.sin(u)),f=Math.round(e*p+d*m),[_,y]=c.valid,v=(0,H.ut)(i),{x:g,y:w}=a.targetGeometry,b=[g,w],C=[0,0];r.toScreen(C,b);const x=[0,0];let R;R=f>n?.5*n:.5*f;const E=Math.floor((g+.5*v)/v),M=_+E*v,S=y+E*v,T=[C[0]+R,0];r.toMap(x,T),x[0]>S&&(h=v),T[0]=C[0]-R,r.toMap(x,T),x[0]<M&&(h=-v);for(const e of t){const t=e.elementView.bounds;if(null==t)continue;const[r,,s]=t;r<_&&s>_?e.updateDrawCoords(l,v):s>y&&r<y?e.updateDrawCoords(l,-v):e.updateDrawCoords(l,h)}}else for(const e of t)e.updateDrawCoords(l,h)}}var Q=r(80347),F=r(26216),J=r(91772);let N=class extends((0,Q.y)(F.Z)){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new i.Z}attach(){this.addAttachHandles([(0,l.on)((()=>this.layer.effectiveSource),"refresh",(()=>{this._tileStrategy.refresh((e=>this._updateTile(e))),this.requestUpdate()})),(0,l.on)((()=>this.layer.effectiveSource),"change",(({element:e})=>this._elementUpdateHandler(e)))]),this._overlayContainer=new B,this.container.addChild(this._overlayContainer),this._fetchQueue=new S.Z({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t)}),this._tileStrategy=new T.Z({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy()}supportsSpatialReference(e){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(e){this._tileStrategy.update(e),this._debugGraphicsView?.update(e)}async hitTest(e,t){const r=[],s=e.normalize(),i=[s.x,s.y];for(const{projectedElement:{normalizedCoords:t,element:s}}of this._elementReferences.values())null!=t&&(0,u.wP)(t.rings,i)&&r.push({type:"media",element:s,layer:this.layer,mapPoint:e});return r.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updateTile(e)))}_acquireTile(e){const t=new $(e.clone());return this._updateTile(t),t}_updateTile(e){this.updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[r,s]=e.setElements(t);this._referenceElements(e,r),this._dereferenceElements(e,s),this.requestUpdate()}),(e=>{(0,a.D_)(e)||n.Z.getLogger(this).error(e)})))}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate()}async _queryElements(e,t){const r=this.layer.effectiveSource;if(null==r)return[];this.view.featuresTilingScheme.getTileBounds(Y,e,!0);const s=new J.Z({xmin:Y[0],ymin:Y[1],xmax:Y[2],ymax:Y[3],spatialReference:this.view.spatialReference});return r.queryElements(s,t)}_referenceElements(e,t){if(null!=this.layer.source)for(const r of t)this._referenceElement(e,r)}_referenceElement(e,t){(0,o.s1)(this._elementReferences,t.uid,(()=>{const e=new m.L({element:t,spatialReference:this.view.spatialReference}),r=new U(e);return this._overlayContainer.addChild(r),this.elements.add(t),{tiles:new Set,projectedElement:e,overlay:r,debugGraphic:null}})).tiles.add(e)}_dereferenceElements(e,t){for(const r of t)this._dereferenceElement(e,r)}_dereferenceElement(e,t){const r=this._elementReferences.get(t.uid);r.tiles.delete(e),r.tiles.size||(this._overlayContainer.removeChild(r.overlay),r.overlay.destroy(),r.projectedElement.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),this._debugGraphicsView?.graphics.remove(r.debugGraphic))}_elementUpdateHandler(e){let t=this._elementReferences.get(e.uid);if(t){const r=t.projectedElement.normalizedCoords;if(null==r)return this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),void this._debugGraphicsView?.graphics.remove(t.debugGraphic);const s=[],i=[];for(const e of this._tileStrategy.tiles){const n=K(this.view.featuresTilingScheme,e,r);t.tiles.has(e)?n||i.push(e):n&&s.push(e)}for(const t of s)this._referenceElement(t,e);for(const t of i)this._dereferenceElement(t,e);return t=this._elementReferences.get(e.uid),void(t?.debugGraphic&&(t.debugGraphic.geometry=t.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t.debugGraphic,property:"geometry"})))}const r=new m.L({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if(null!=r)for(const t of this._tileStrategy.tiles)K(this.view.featuresTilingScheme,t,r)&&this._referenceElement(t,e)}};(0,s._)([(0,h.Cb)()],N.prototype,"_fetchQueue",void 0),(0,s._)([(0,h.Cb)()],N.prototype,"layer",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],N.prototype,"elements",void 0),N=(0,s._)([(0,c.j)("esri.views.2d.layers.MediaLayerView2D")],N);const Y=(0,d.Ue)(),X={xmin:0,ymin:0,xmax:0,ymax:0};function K(e,t,r){return e.getTileBounds(Y,t.key,!0),X.xmin=Y[0],X.ymin=Y[1],X.xmax=Y[2],X.ymax=Y[3],(0,p.Nl)(X,r)}class ${constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],r=new Set(this.elements);this.elements=e;for(const s of e)r.has(s)?r.delete(s):t.push(s);return this.isReady=!0,[t,Array.from(r)]}destroy(){}}const ee=N}}]);