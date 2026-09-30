import{$ as Ei,A as se,B as z,Ba as Vi,C as Z,E as Mi,Ea as W,F as ht,Fa as Ot,G as Vr,H as Ci,I as Di,J as Bt,K as Be,L,M as J,O as B,Q as Ee,R as Bi,S as Et,T as Lt,U as Nt,Va as Wi,_ as V,_a as Gi,a as is,aa as C,ab as qi,ba as Li,bb as $i,da as Ni,db as Yi,e as dt,eb as ue,f as Mt,fa as _e,g as Ct,ga as be,h as pe,ha as zi,i as Dt,ia as Oi,ib as ji,j as Fi,ja as ee,la as H,lb as ae,na as Te,oa as ge,p as Pi,pa as ki,qa as re,ra as j,ta as ve,ua as Hi,xa as Ae,y as $e,ya as Ui,z as le,za as zt}from"./chunk-U5EDRGSM.js";var Xi=Math.pow(2,-24),kt=Symbol("SKIP_GENERATION");function Wr(o){return o.index?o.index.count:o.attributes.position.count}function ie(o){return Wr(o)/3}function Gr(o,e=ArrayBuffer){return o>65535?new Uint32Array(new e(4*o)):new Uint16Array(new e(2*o))}function Qi(o,e){if(!o.index){let t=o.attributes.position.count,r=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=Gr(t,r);o.setIndex(new j(n,1));for(let s=0;s<t;s++)n[s]=s}}function qr(o,e){let t=ie(o),r=e||o.drawRange,n=r.start/3,s=(r.start+r.count)/3,i=Math.max(0,n),c=Math.min(t,s)-i;return[{offset:Math.floor(i),count:Math.floor(c)}]}function $r(o,e){if(!o.groups||!o.groups.length)return qr(o,e);let t=[],r=new Set,n=e||o.drawRange,s=n.start/3,i=(n.start+n.count)/3;for(let l of o.groups){let m=l.start/3,f=(l.start+l.count)/3;r.add(Math.max(s,m)),r.add(Math.min(i,f))}let c=Array.from(r.values()).sort((l,m)=>l-m);for(let l=0;l<c.length-1;l++){let m=c[l],f=c[l+1];t.push({offset:Math.floor(m),count:Math.floor(f-m)})}return t}function Ki(o,e){let t=ie(o),r=$r(o,e).sort((i,c)=>i.offset-c.offset),n=r[r.length-1];n.count=Math.min(t-n.offset,n.count);let s=0;return r.forEach(({count:i})=>s+=i),t!==s}function Ht(o,e,t,r,n){let s=1/0,i=1/0,c=1/0,l=-1/0,m=-1/0,f=-1/0,u=1/0,a=1/0,h=1/0,g=-1/0,T=-1/0,d=-1/0;for(let y=e*6,v=(e+t)*6;y<v;y+=6){let p=o[y+0],b=o[y+1],x=p-b,w=p+b;x<s&&(s=x),w>l&&(l=w),p<u&&(u=p),p>g&&(g=p);let S=o[y+2],I=o[y+3],A=S-I,R=S+I;A<i&&(i=A),R>m&&(m=R),S<a&&(a=S),S>T&&(T=S);let P=o[y+4],_=o[y+5],F=P-_,M=P+_;F<c&&(c=F),M>f&&(f=M),P<h&&(h=P),P>d&&(d=P)}r[0]=s,r[1]=i,r[2]=c,r[3]=l,r[4]=m,r[5]=f,n[0]=u,n[1]=a,n[2]=h,n[3]=g,n[4]=T,n[5]=d}function Zi(o,e=null,t=null,r=null){let n=o.attributes.position,s=o.index?o.index.array:null,i=ie(o),c=n.normalized,l;e===null?l=new Float32Array(i*6):l=e,t=t||0,r=r||i;let m=n.array,f=n.offset||0,u=3;n.isInterleavedBufferAttribute&&(u=n.data.stride);let a=["getX","getY","getZ"];for(let h=t;h<t+r;h++){let g=h*3,T=h*6,d=g+0,y=g+1,v=g+2;s&&(d=s[d],y=s[y],v=s[v]),c||(d=d*u+f,y=y*u+f,v=v*u+f);for(let p=0;p<3;p++){let b,x,w;c?(b=n[a[p]](d),x=n[a[p]](y),w=n[a[p]](v)):(b=m[d+p],x=m[y+p],w=m[v+p]);let S=b;x<S&&(S=x),w<S&&(S=w);let I=b;x>I&&(I=x),w>I&&(I=w);let A=(I-S)/2,R=p*2;l[T+R+0]=S+A,l[T+R+1]=A+(Math.abs(S)+A)*Xi}}return l}function O(o,e,t){return t.min.x=e[o],t.min.y=e[o+1],t.min.z=e[o+2],t.max.x=e[o+3],t.max.y=e[o+4],t.max.z=e[o+5],t}function Yr(o){let e=-1,t=-1/0;for(let r=0;r<3;r++){let n=o[r+3]-o[r];n>t&&(t=n,e=r)}return e}function jr(o,e){e.set(o)}function Xr(o,e,t){let r,n;for(let s=0;s<3;s++){let i=s+3;r=o[s],n=e[s],t[s]=r<n?r:n,r=o[i],n=e[i],t[i]=r>n?r:n}}function pt(o,e,t){for(let r=0;r<3;r++){let n=e[o+2*r],s=e[o+2*r+1],i=n-s,c=n+s;i<t[r]&&(t[r]=i),c>t[r+3]&&(t[r+3]=c)}}function Ye(o){let e=o[3]-o[0],t=o[4]-o[1],r=o[5]-o[2];return 2*(e*t+t*r+r*e)}var we=32,ns=(o,e)=>o.candidate-e.candidate,Ie=new Array(we).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Ut=new Float32Array(6);function ro(o,e,t,r,n,s){let i=-1,c=0;if(s===0)i=Yr(e),i!==-1&&(c=(e[i]+e[i+3])/2);else if(s===1)i=Yr(o),i!==-1&&(c=ss(t,r,n,i));else if(s===2){let l=Ye(o),m=1.25*n,f=r*6,u=(r+n)*6;for(let a=0;a<3;a++){let h=e[a],d=(e[a+3]-h)/we;if(n<we/4){let y=[...Ie];y.length=n;let v=0;for(let b=f;b<u;b+=6,v++){let x=y[v];x.candidate=t[b+2*a],x.count=0;let{bounds:w,leftCacheBounds:S,rightCacheBounds:I}=x;for(let A=0;A<3;A++)I[A]=1/0,I[A+3]=-1/0,S[A]=1/0,S[A+3]=-1/0,w[A]=1/0,w[A+3]=-1/0;pt(b,t,w)}y.sort(ns);let p=n;for(let b=0;b<p;b++){let x=y[b];for(;b+1<p&&y[b+1].candidate===x.candidate;)y.splice(b+1,1),p--}for(let b=f;b<u;b+=6){let x=t[b+2*a];for(let w=0;w<p;w++){let S=y[w];x>=S.candidate?pt(b,t,S.rightCacheBounds):(pt(b,t,S.leftCacheBounds),S.count++)}}for(let b=0;b<p;b++){let x=y[b],w=x.count,S=n-x.count,I=x.leftCacheBounds,A=x.rightCacheBounds,R=0;w!==0&&(R=Ye(I)/l);let P=0;S!==0&&(P=Ye(A)/l);let _=1+1.25*(R*w+P*S);_<m&&(i=a,m=_,c=x.candidate)}}else{for(let p=0;p<we;p++){let b=Ie[p];b.count=0,b.candidate=h+d+p*d;let x=b.bounds;for(let w=0;w<3;w++)x[w]=1/0,x[w+3]=-1/0}for(let p=f;p<u;p+=6){let w=~~((t[p+2*a]-h)/d);w>=we&&(w=we-1);let S=Ie[w];S.count++,pt(p,t,S.bounds)}let y=Ie[we-1];jr(y.bounds,y.rightCacheBounds);for(let p=we-2;p>=0;p--){let b=Ie[p],x=Ie[p+1];Xr(b.bounds,x.rightCacheBounds,b.rightCacheBounds)}let v=0;for(let p=0;p<we-1;p++){let b=Ie[p],x=b.count,w=b.bounds,I=Ie[p+1].rightCacheBounds;x!==0&&(v===0?jr(w,Ut):Xr(w,Ut,Ut)),v+=x;let A=0,R=0;v!==0&&(A=Ye(Ut)/l);let P=n-v;P!==0&&(R=Ye(I)/l);let _=1+1.25*(A*v+R*P);_<m&&(i=a,m=_,c=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:i,pos:c}}function ss(o,e,t,r){let n=0;for(let s=e,i=e+t;s<i;s++)n+=o[s*6+r*2];return n/t}var je=class{constructor(){this.boundingData=new Float32Array(6)}};function io(o,e,t,r,n,s){let i=r,c=r+n-1,l=s.pos,m=s.axis*2;for(;;){for(;i<=c&&t[i*6+m]<l;)i++;for(;i<=c&&t[c*6+m]>=l;)c--;if(i<c){for(let f=0;f<3;f++){let u=e[i*3+f];e[i*3+f]=e[c*3+f],e[c*3+f]=u}for(let f=0;f<6;f++){let u=t[i*6+f];t[i*6+f]=t[c*6+f],t[c*6+f]=u}i++,c--}else return i}}function oo(o,e,t,r,n,s){let i=r,c=r+n-1,l=s.pos,m=s.axis*2;for(;;){for(;i<=c&&t[i*6+m]<l;)i++;for(;i<=c&&t[c*6+m]>=l;)c--;if(i<c){let f=o[i];o[i]=o[c],o[c]=f;for(let u=0;u<6;u++){let a=t[i*6+u];t[i*6+u]=t[c*6+u],t[c*6+u]=a}i++,c--}else return i}}function U(o,e){return e[o+15]===65535}function G(o,e){return e[o+6]}function q(o,e){return e[o+14]}function X(o){return o+8}function Y(o,e){return e[o+6]}function Xe(o,e){return e[o+7]}var no,gt,Vt,so,as=Math.pow(2,32);function Wt(o){return"count"in o?1:1+Wt(o.left)+Wt(o.right)}function ao(o,e,t){return no=new Float32Array(t),gt=new Uint32Array(t),Vt=new Uint16Array(t),so=new Uint8Array(t),Qr(o,e)}function Qr(o,e){let t=o/4,r=o/2,n="count"in e,s=e.boundingData;for(let i=0;i<6;i++)no[t+i]=s[i];if(n)if(e.buffer){let i=e.buffer;so.set(new Uint8Array(i),o);for(let c=o,l=o+i.byteLength;c<l;c+=32){let m=c/2;U(m,Vt)||(gt[c/4+6]+=t)}return o+i.byteLength}else{let i=e.offset,c=e.count;return gt[t+6]=i,Vt[r+14]=c,Vt[r+15]=65535,o+32}else{let i=e.left,c=e.right,l=e.splitAxis,m;if(m=Qr(o+32,i),m/4>as)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return gt[t+6]=m/4,m=Qr(m,c),gt[t+7]=l,m}}function cs(o,e){let t=(o.index?o.index.count:o.attributes.position.count)/3,r=t>2**16,n=r?4:2,s=e?new SharedArrayBuffer(t*n):new ArrayBuffer(t*n),i=r?new Uint32Array(s):new Uint16Array(s);for(let c=0,l=i.length;c<l;c++)i[c]=c;return i}function ls(o,e,t,r,n){let{maxDepth:s,verbose:i,maxLeafTris:c,strategy:l,onProgress:m,indirect:f}=n,u=o._indirectBuffer,a=o.geometry,h=a.index?a.index.array:null,g=f?oo:io,T=ie(a),d=new Float32Array(6),y=!1,v=new je;return Ht(e,t,r,v.boundingData,d),b(v,t,r,d),v;function p(x){m&&m(x/T)}function b(x,w,S,I=null,A=0){if(!y&&A>=s&&(y=!0,i&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(a))),S<=c||A>=s)return p(w+S),x.offset=w,x.count=S,x;let R=ro(x.boundingData,I,e,w,S,l);if(R.axis===-1)return p(w+S),x.offset=w,x.count=S,x;let P=g(u,h,e,w,S,R);if(P===w||P===w+S)p(w+S),x.offset=w,x.count=S;else{x.splitAxis=R.axis;let _=new je,F=w,M=P-w;x.left=_,Ht(e,F,M,_.boundingData,d),b(_,F,M,d,A+1);let D=new je,N=P,K=S-M;x.right=D,Ht(e,N,K,D.boundingData,d),b(D,N,K,d,A+1)}return x}}function co(o,e){let t=o.geometry;e.indirect&&(o._indirectBuffer=cs(t,e.useSharedArrayBuffer),Ki(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),o._indirectBuffer||Qi(t,e);let r=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=qr(t,e.range),s=Zi(t,null,n[0].offset,n[0].count),i=e.indirect?n:$r(t,e.range);o._roots=i.map(c=>{let l=ls(o,s,c.offset,c.count,e),m=Wt(l),f=new r(32*m);return ao(0,l,f),f})}var oe=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let r=1/0,n=-1/0;for(let s=0,i=e.length;s<i;s++){let l=e[s][t];r=l<r?l:r,n=l>n?l:n}this.min=r,this.max=n}setFromPoints(e,t){let r=1/0,n=-1/0;for(let s=0,i=t.length;s<i;s++){let c=t[s],l=e.dot(c);r=l<r?l:r,n=l>n?l:n}this.min=r,this.max=n}isSeparated(e){return this.min>e.max||e.min>this.max}};oe.prototype.setFromBox=(function(){let o=new C;return function(t,r){let n=r.min,s=r.max,i=1/0,c=-1/0;for(let l=0;l<=1;l++)for(let m=0;m<=1;m++)for(let f=0;f<=1;f++){o.x=n.x*l+s.x*(1-l),o.y=n.y*m+s.y*(1-m),o.z=n.z*f+s.z*(1-f);let u=t.dot(o);i=Math.min(u,i),c=Math.max(u,c)}this.min=i,this.max=c}})();var Ma=(function(){let o=new oe;return function(t,r){let n=t.points,s=t.satAxes,i=t.satBounds,c=r.points,l=r.satAxes,m=r.satBounds;for(let f=0;f<3;f++){let u=i[f],a=s[f];if(o.setFromPoints(a,c),u.isSeparated(o))return!1}for(let f=0;f<3;f++){let u=m[f],a=l[f];if(o.setFromPoints(a,n),u.isSeparated(o))return!1}}})();var us=(function(){let o=new C,e=new C,t=new C;return function(n,s,i){let c=n.start,l=o,m=s.start,f=e;t.subVectors(c,m),o.subVectors(n.end,n.start),e.subVectors(s.end,s.start);let u=t.dot(f),a=f.dot(l),h=f.dot(f),g=t.dot(l),d=l.dot(l)*h-a*a,y,v;d!==0?y=(u*a-g*h)/d:y=0,v=(u+y*a)/h,i.x=y,i.y=v}})(),vt=(function(){let o=new V,e=new C,t=new C;return function(n,s,i,c){us(n,s,o);let l=o.x,m=o.y;if(l>=0&&l<=1&&m>=0&&m<=1){n.at(l,i),s.at(m,c);return}else if(l>=0&&l<=1){m<0?s.at(0,c):s.at(1,c),n.closestPointToPoint(c,!0,i);return}else if(m>=0&&m<=1){l<0?n.at(0,i):n.at(1,i),s.closestPointToPoint(i,!0,c);return}else{let f;l<0?f=n.start:f=n.end;let u;m<0?u=s.start:u=s.end;let a=e,h=t;if(n.closestPointToPoint(u,!0,e),s.closestPointToPoint(f,!0,t),a.distanceToSquared(u)<=h.distanceToSquared(f)){i.copy(a),c.copy(u);return}else{i.copy(f),c.copy(h);return}}}})(),lo=(function(){let o=new C,e=new C,t=new Ot,r=new ue;return function(s,i){let{radius:c,center:l}=s,{a:m,b:f,c:u}=i;if(r.start=m,r.end=f,r.closestPointToPoint(l,!0,o).distanceTo(l)<=c||(r.start=m,r.end=u,r.closestPointToPoint(l,!0,o).distanceTo(l)<=c)||(r.start=f,r.end=u,r.closestPointToPoint(l,!0,o).distanceTo(l)<=c))return!0;let T=i.getPlane(t);if(Math.abs(T.distanceToPoint(l))<=c){let y=T.projectPoint(l,e);if(i.containsPoint(y))return!0}return!1}})();var fs=["x","y","z"],Se=1e-15,uo=Se*Se;function fe(o){return Math.abs(o)<Se}var Q=class extends Te{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new C),this.satBounds=new Array(4).fill().map(()=>new oe),this.points=[this.a,this.b,this.c],this.plane=new Ot,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new ue,this.needsUpdate=!0}intersectsSphere(e){return lo(e,this)}update(){let e=this.a,t=this.b,r=this.c,n=this.points,s=this.satAxes,i=this.satBounds,c=s[0],l=i[0];this.getNormal(c),l.setFromPoints(c,n);let m=s[1],f=i[1];m.subVectors(e,t),f.setFromPoints(m,n);let u=s[2],a=i[2];u.subVectors(t,r),a.setFromPoints(u,n);let h=s[3],g=i[3];h.subVectors(r,e),g.setFromPoints(h,n);let T=m.length(),d=u.length(),y=h.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,T<Se?d<Se||y<Se?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(r)):d<Se?y<Se?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):y<Se&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(r),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(c,e),this.needsUpdate=!1}};Q.prototype.closestPointToSegment=(function(){let o=new C,e=new C,t=new ue;return function(n,s=null,i=null){let{start:c,end:l}=n,m=this.points,f,u=1/0;for(let a=0;a<3;a++){let h=(a+1)%3;t.start.copy(m[a]),t.end.copy(m[h]),vt(t,n,o,e),f=o.distanceToSquared(e),f<u&&(u=f,s&&s.copy(o),i&&i.copy(e))}return this.closestPointToPoint(c,o),f=c.distanceToSquared(o),f<u&&(u=f,s&&s.copy(o),i&&i.copy(c)),this.closestPointToPoint(l,o),f=l.distanceToSquared(o),f<u&&(u=f,s&&s.copy(o),i&&i.copy(l)),Math.sqrt(u)}})();Q.prototype.intersectsTriangle=(function(){let o=new Q,e=new oe,t=new oe,r=new C,n=new C,s=new C,i=new C,c=new ue,l=new ue,m=new C,f=new V,u=new V;function a(p,b,x,w){let S=r;!p.isDegenerateIntoPoint&&!p.isDegenerateIntoSegment?S.copy(p.plane.normal):S.copy(b.plane.normal);let I=p.satBounds,A=p.satAxes;for(let _=1;_<4;_++){let F=I[_],M=A[_];if(e.setFromPoints(M,b.points),F.isSeparated(e)||(i.copy(S).cross(M),e.setFromPoints(i,p.points),t.setFromPoints(i,b.points),e.isSeparated(t)))return!1}let R=b.satBounds,P=b.satAxes;for(let _=1;_<4;_++){let F=R[_],M=P[_];if(e.setFromPoints(M,p.points),F.isSeparated(e)||(i.crossVectors(S,M),e.setFromPoints(i,p.points),t.setFromPoints(i,b.points),e.isSeparated(t)))return!1}return x&&(w||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),x.start.set(0,0,0),x.end.set(0,0,0)),!0}function h(p,b,x,w,S,I,A,R,P,_,F){let M=A/(A-R);_.x=w+(S-w)*M,F.start.subVectors(b,p).multiplyScalar(M).add(p),M=A/(A-P),_.y=w+(I-w)*M,F.end.subVectors(x,p).multiplyScalar(M).add(p)}function g(p,b,x,w,S,I,A,R,P,_,F){if(S>0)h(p.c,p.a,p.b,w,b,x,P,A,R,_,F);else if(I>0)h(p.b,p.a,p.c,x,b,w,R,A,P,_,F);else if(R*P>0||A!=0)h(p.a,p.b,p.c,b,x,w,A,R,P,_,F);else if(R!=0)h(p.b,p.a,p.c,x,b,w,R,A,P,_,F);else if(P!=0)h(p.c,p.a,p.b,w,b,x,P,A,R,_,F);else return!0;return!1}function T(p,b,x,w){let S=b.degenerateSegment,I=p.plane.distanceToPoint(S.start),A=p.plane.distanceToPoint(S.end);return fe(I)?fe(A)?a(p,b,x,w):(x&&(x.start.copy(S.start),x.end.copy(S.start)),p.containsPoint(S.start)):fe(A)?(x&&(x.start.copy(S.end),x.end.copy(S.end)),p.containsPoint(S.end)):p.plane.intersectLine(S,r)!=null?(x&&(x.start.copy(r),x.end.copy(r)),p.containsPoint(r)):!1}function d(p,b,x){let w=b.a;return fe(p.plane.distanceToPoint(w))&&p.containsPoint(w)?(x&&(x.start.copy(w),x.end.copy(w)),!0):!1}function y(p,b,x){let w=p.degenerateSegment,S=b.a;return w.closestPointToPoint(S,!0,r),S.distanceToSquared(r)<uo?(x&&(x.start.copy(S),x.end.copy(S)),!0):!1}function v(p,b,x,w){if(p.isDegenerateIntoSegment)if(b.isDegenerateIntoSegment){let S=p.degenerateSegment,I=b.degenerateSegment,A=n,R=s;S.delta(A),I.delta(R);let P=r.subVectors(I.start,S.start),_=A.x*R.y-A.y*R.x;if(fe(_))return!1;let F=(P.x*R.y-P.y*R.x)/_,M=-(A.x*P.y-A.y*P.x)/_;if(F<0||F>1||M<0||M>1)return!1;let D=S.start.z+A.z*F,N=I.start.z+R.z*M;return fe(D-N)?(x&&(x.start.copy(S.start).addScaledVector(A,F),x.end.copy(S.start).addScaledVector(A,F)),!0):!1}else return b.isDegenerateIntoPoint?y(p,b,x):T(b,p,x,w);else{if(p.isDegenerateIntoPoint)return b.isDegenerateIntoPoint?b.a.distanceToSquared(p.a)<uo?(x&&(x.start.copy(p.a),x.end.copy(p.a)),!0):!1:b.isDegenerateIntoSegment?y(b,p,x):d(b,p,x);if(b.isDegenerateIntoPoint)return d(p,b,x);if(b.isDegenerateIntoSegment)return T(p,b,x,w)}}return function(b,x=null,w=!1){this.needsUpdate&&this.update(),b.isExtendedTriangle?b.needsUpdate&&b.update():(o.copy(b),o.update(),b=o);let S=v(this,b,x,w);if(S!==void 0)return S;let I=this.plane,A=b.plane,R=A.distanceToPoint(this.a),P=A.distanceToPoint(this.b),_=A.distanceToPoint(this.c);fe(R)&&(R=0),fe(P)&&(P=0),fe(_)&&(_=0);let F=R*P,M=R*_;if(F>0&&M>0)return!1;let D=I.distanceToPoint(b.a),N=I.distanceToPoint(b.b),K=I.distanceToPoint(b.c);fe(D)&&(D=0),fe(N)&&(N=0),fe(K)&&(K=0);let ce=D*N,he=D*K;if(ce>0&&he>0)return!1;n.copy(I.normal),s.copy(A.normal);let Ge=n.cross(s),De=0,Hr=Math.abs(Ge.x),Ri=Math.abs(Ge.y);Ri>Hr&&(Hr=Ri,De=1),Math.abs(Ge.z)>Hr&&(De=2);let qe=fs[De],Kn=this.a[qe],Zn=this.b[qe],Jn=this.c[qe],es=b.a[qe],ts=b.b[qe],rs=b.c[qe];if(g(this,Kn,Zn,Jn,F,M,R,P,_,f,c))return a(this,b,x,w);if(g(b,es,ts,rs,ce,he,D,N,K,u,l))return a(this,b,x,w);if(f.y<f.x){let Ur=f.y;f.y=f.x,f.x=Ur,m.copy(c.start),c.start.copy(c.end),c.end.copy(m)}if(u.y<u.x){let Ur=u.y;u.y=u.x,u.x=Ur,m.copy(l.start),l.start.copy(l.end),l.end.copy(m)}return f.y<u.x||u.y<f.x?!1:(x&&(u.x>f.x?x.start.copy(l.start):x.start.copy(c.start),u.y<f.y?x.end.copy(l.end):x.end.copy(c.end)),!0)}})();Q.prototype.distanceToPoint=(function(){let o=new C;return function(t){return this.closestPointToPoint(t,o),t.distanceTo(o)}})();Q.prototype.distanceToTriangle=(function(){let o=new C,e=new C,t=["a","b","c"],r=new ue,n=new ue;return function(i,c=null,l=null){let m=c||l?r:null;if(this.intersectsTriangle(i,m))return(c||l)&&(c&&m.getCenter(c),l&&m.getCenter(l)),0;let f=1/0;for(let u=0;u<3;u++){let a,h=t[u],g=i[h];this.closestPointToPoint(g,o),a=g.distanceToSquared(o),a<f&&(f=a,c&&c.copy(o),l&&l.copy(g));let T=this[h];i.closestPointToPoint(T,o),a=T.distanceToSquared(o),a<f&&(f=a,c&&c.copy(T),l&&l.copy(o))}for(let u=0;u<3;u++){let a=t[u],h=t[(u+1)%3];r.set(this[a],this[h]);for(let g=0;g<3;g++){let T=t[g],d=t[(g+1)%3];n.set(i[T],i[d]),vt(r,n,o,e);let y=o.distanceToSquared(e);y<f&&(f=y,c&&c.copy(o),l&&l.copy(e))}}return Math.sqrt(f)}})();var $=class{constructor(e,t,r){this.isOrientedBox=!0,this.min=new C,this.max=new C,this.matrix=new H,this.invMatrix=new H,this.points=new Array(8).fill().map(()=>new C),this.satAxes=new Array(3).fill().map(()=>new C),this.satBounds=new Array(3).fill().map(()=>new oe),this.alignedSatBounds=new Array(3).fill().map(()=>new oe),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),r&&this.matrix.copy(r)}set(e,t,r){this.min.copy(e),this.max.copy(t),this.matrix.copy(r),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};$.prototype.update=(function(){return function(){let e=this.matrix,t=this.min,r=this.max,n=this.points;for(let m=0;m<=1;m++)for(let f=0;f<=1;f++)for(let u=0;u<=1;u++){let a=1*m|2*f|4*u,h=n[a];h.x=m?r.x:t.x,h.y=f?r.y:t.y,h.z=u?r.z:t.z,h.applyMatrix4(e)}let s=this.satBounds,i=this.satAxes,c=n[0];for(let m=0;m<3;m++){let f=i[m],u=s[m],a=1<<m,h=n[a];f.subVectors(c,h),u.setFromPoints(f,n)}let l=this.alignedSatBounds;l[0].setFromPointsField(n,"x"),l[1].setFromPointsField(n,"y"),l[2].setFromPointsField(n,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();$.prototype.intersectsBox=(function(){let o=new oe;return function(t){this.needsUpdate&&this.update();let r=t.min,n=t.max,s=this.satBounds,i=this.satAxes,c=this.alignedSatBounds;if(o.min=r.x,o.max=n.x,c[0].isSeparated(o)||(o.min=r.y,o.max=n.y,c[1].isSeparated(o))||(o.min=r.z,o.max=n.z,c[2].isSeparated(o)))return!1;for(let l=0;l<3;l++){let m=i[l],f=s[l];if(o.setFromBox(m,t),f.isSeparated(o))return!1}return!0}})();$.prototype.intersectsTriangle=(function(){let o=new Q,e=new Array(3),t=new oe,r=new oe,n=new C;return function(i){this.needsUpdate&&this.update(),i.isExtendedTriangle?i.needsUpdate&&i.update():(o.copy(i),o.update(),i=o);let c=this.satBounds,l=this.satAxes;e[0]=i.a,e[1]=i.b,e[2]=i.c;for(let a=0;a<3;a++){let h=c[a],g=l[a];if(t.setFromPoints(g,e),h.isSeparated(t))return!1}let m=i.satBounds,f=i.satAxes,u=this.points;for(let a=0;a<3;a++){let h=m[a],g=f[a];if(t.setFromPoints(g,u),h.isSeparated(t))return!1}for(let a=0;a<3;a++){let h=l[a];for(let g=0;g<4;g++){let T=f[g];if(n.crossVectors(h,T),t.setFromPoints(n,e),r.setFromPoints(n,u),t.isSeparated(r))return!1}}return!0}})();$.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();$.prototype.distanceToPoint=(function(){let o=new C;return function(t){return this.closestPointToPoint(t,o),t.distanceTo(o)}})();$.prototype.distanceToBox=(function(){let o=["x","y","z"],e=new Array(12).fill().map(()=>new ue),t=new Array(12).fill().map(()=>new ue),r=new C,n=new C;return function(i,c=0,l=null,m=null){if(this.needsUpdate&&this.update(),this.intersectsBox(i))return(l||m)&&(i.getCenter(n),this.closestPointToPoint(n,r),i.closestPointToPoint(r,n),l&&l.copy(r),m&&m.copy(n)),0;let f=c*c,u=i.min,a=i.max,h=this.points,g=1/0;for(let d=0;d<8;d++){let y=h[d];n.copy(y).clamp(u,a);let v=y.distanceToSquared(n);if(v<g&&(g=v,l&&l.copy(y),m&&m.copy(n),v<f))return Math.sqrt(v)}let T=0;for(let d=0;d<3;d++)for(let y=0;y<=1;y++)for(let v=0;v<=1;v++){let p=(d+1)%3,b=(d+2)%3,x=y<<p|v<<b,w=1<<d|y<<p|v<<b,S=h[x],I=h[w];e[T].set(S,I);let R=o[d],P=o[p],_=o[b],F=t[T],M=F.start,D=F.end;M[R]=u[R],M[P]=y?u[P]:a[P],M[_]=v?u[_]:a[P],D[R]=a[R],D[P]=y?u[P]:a[P],D[_]=v?u[_]:a[P],T++}for(let d=0;d<=1;d++)for(let y=0;y<=1;y++)for(let v=0;v<=1;v++){n.x=d?a.x:u.x,n.y=y?a.y:u.y,n.z=v?a.z:u.z,this.closestPointToPoint(n,r);let p=n.distanceToSquared(r);if(p<g&&(g=p,l&&l.copy(r),m&&m.copy(n),p<f))return Math.sqrt(p)}for(let d=0;d<12;d++){let y=e[d];for(let v=0;v<12;v++){let p=t[v];vt(y,p,r,n);let b=r.distanceToSquared(n);if(b<g&&(g=b,l&&l.copy(r),m&&m.copy(n),b<f))return Math.sqrt(b)}}return Math.sqrt(g)}})();var Fe=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}};var Kr=class extends Fe{constructor(){super(()=>new Q)}},te=new Kr;var Zr=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=r=>{t&&e.push(t),t=r,this.float32Array=new Float32Array(r),this.uint16Array=new Uint16Array(r),this.uint32Array=new Uint32Array(r)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},E=new Zr;var Pe,Ke,Qe=[],qt=new Fe(()=>new ee);function fo(o,e,t,r,n,s){Pe=qt.getPrimitive(),Ke=qt.getPrimitive(),Qe.push(Pe,Ke),E.setBuffer(o._roots[e]);let i=Jr(0,o.geometry,t,r,n,s);E.clearBuffer(),qt.releasePrimitive(Pe),qt.releasePrimitive(Ke),Qe.pop(),Qe.pop();let c=Qe.length;return c>0&&(Ke=Qe[c-1],Pe=Qe[c-2]),i}function Jr(o,e,t,r,n=null,s=0,i=0){let{float32Array:c,uint16Array:l,uint32Array:m}=E,f=o*2;if(U(f,l)){let a=G(o,m),h=q(f,l);return O(o,c,Pe),r(a,h,!1,i,s+o,Pe)}else{let R=function(_){let{uint16Array:F,uint32Array:M}=E,D=_*2;for(;!U(D,F);)_=X(_),D=_*2;return G(_,M)},P=function(_){let{uint16Array:F,uint32Array:M}=E,D=_*2;for(;!U(D,F);)_=Y(_,M),D=_*2;return G(_,M)+q(D,F)},a=X(o),h=Y(o,m),g=a,T=h,d,y,v,p;if(n&&(v=Pe,p=Ke,O(g,c,v),O(T,c,p),d=n(v),y=n(p),y<d)){g=h,T=a;let _=d;d=y,y=_,v=p}v||(v=Pe,O(g,c,v));let b=U(g*2,l),x=t(v,b,d,i+1,s+g),w;if(x===2){let _=R(g),M=P(g)-_;w=r(_,M,!0,i+1,s+g,v)}else w=x&&Jr(g,e,t,r,n,s,i+1);if(w)return!0;p=Ke,O(T,c,p);let S=U(T*2,l),I=t(p,S,y,i+1,s+T),A;if(I===2){let _=R(T),M=P(T)-_;A=r(_,M,!0,i+1,s+T,p)}else A=I&&Jr(T,e,t,r,n,s,i+1);return!!A}}var xt=new C,ei=new C;function mo(o,e,t={},r=0,n=1/0){let s=r*r,i=n*n,c=1/0,l=null;if(o.shapecast({boundsTraverseOrder:f=>(xt.copy(e).clamp(f.min,f.max),xt.distanceToSquared(e)),intersectsBounds:(f,u,a)=>a<c&&a<i,intersectsTriangle:(f,u)=>{f.closestPointToPoint(e,xt);let a=e.distanceToSquared(xt);return a<c&&(ei.copy(xt),c=a,l=u),a<s}}),c===1/0)return null;let m=Math.sqrt(c);return t.point?t.point.copy(ei):t.point=ei.clone(),t.distance=m,t.faceIndex=l,t}var Yt=parseInt("180")>=169,ds=parseInt("180")<=161,Le=new C,Ne=new C,ze=new C,jt=new V,Xt=new V,Qt=new V,ho=new C,po=new C,go=new C,yt=new C;function hs(o,e,t,r,n,s,i,c){let l;if(s===Mt?l=o.intersectTriangle(r,t,e,!0,n):l=o.intersectTriangle(e,t,r,s!==Ct,n),l===null)return null;let m=o.origin.distanceTo(n);return m<i||m>c?null:{distance:m,point:n.clone()}}function ps(o,e,t,r,n,s,i,c,l,m,f){Le.fromBufferAttribute(e,s),Ne.fromBufferAttribute(e,i),ze.fromBufferAttribute(e,c);let u=hs(o,Le,Ne,ze,yt,l,m,f);if(u){if(r){jt.fromBufferAttribute(r,s),Xt.fromBufferAttribute(r,i),Qt.fromBufferAttribute(r,c),u.uv=new V;let h=Te.getInterpolation(yt,Le,Ne,ze,jt,Xt,Qt,u.uv);Yt||(u.uv=h)}if(n){jt.fromBufferAttribute(n,s),Xt.fromBufferAttribute(n,i),Qt.fromBufferAttribute(n,c),u.uv1=new V;let h=Te.getInterpolation(yt,Le,Ne,ze,jt,Xt,Qt,u.uv1);Yt||(u.uv1=h),ds&&(u.uv2=u.uv1)}if(t){ho.fromBufferAttribute(t,s),po.fromBufferAttribute(t,i),go.fromBufferAttribute(t,c),u.normal=new C;let h=Te.getInterpolation(yt,Le,Ne,ze,ho,po,go,u.normal);u.normal.dot(o.direction)>0&&u.normal.multiplyScalar(-1),Yt||(u.normal=h)}let a={a:s,b:i,c,normal:new C,materialIndex:0};if(Te.getNormal(Le,Ne,ze,a.normal),u.face=a,u.faceIndex=s,Yt){let h=new C;Te.getBarycoord(yt,Le,Ne,ze,h),u.barycoord=h}}return u}function Ze(o,e,t,r,n,s,i){let c=r*3,l=c+0,m=c+1,f=c+2,u=o.index;o.index&&(l=u.getX(l),m=u.getX(m),f=u.getX(f));let{position:a,normal:h,uv:g,uv1:T}=o.attributes,d=ps(t,a,h,g,T,l,m,f,e,s,i);return d?(d.faceIndex=r,n&&n.push(d),d):null}function k(o,e,t,r){let n=o.a,s=o.b,i=o.c,c=e,l=e+1,m=e+2;t&&(c=t.getX(c),l=t.getX(l),m=t.getX(m)),n.x=r.getX(c),n.y=r.getY(c),n.z=r.getZ(c),s.x=r.getX(l),s.y=r.getY(l),s.z=r.getZ(l),i.x=r.getX(m),i.y=r.getY(m),i.z=r.getZ(m)}function xo(o,e,t,r,n,s,i,c){let{geometry:l,_indirectBuffer:m}=o;for(let f=r,u=r+n;f<u;f++)Ze(l,e,t,f,s,i,c)}function yo(o,e,t,r,n,s,i){let{geometry:c,_indirectBuffer:l}=o,m=1/0,f=null;for(let u=r,a=r+n;u<a;u++){let h;h=Ze(c,e,t,u,null,s,i),h&&h.distance<m&&(f=h,m=h.distance)}return f}function bo(o,e,t,r,n,s,i){let{geometry:c}=t,{index:l}=c,m=c.attributes.position;for(let f=o,u=e+o;f<u;f++){let a;if(a=f,k(i,a*3,l,m),i.needsUpdate=!0,r(i,a,n,s))return!0}return!1}function To(o,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=o.geometry,r=t.index?t.index.array:null,n=t.attributes.position,s,i,c,l,m=0,f=o._roots;for(let a=0,h=f.length;a<h;a++)s=f[a],i=new Uint32Array(s),c=new Uint16Array(s),l=new Float32Array(s),u(0,m),m+=s.byteLength;function u(a,h,g=!1){let T=a*2;if(c[T+15]===65535){let y=i[a+6],v=c[T+14],p=1/0,b=1/0,x=1/0,w=-1/0,S=-1/0,I=-1/0;for(let A=3*y,R=3*(y+v);A<R;A++){let P=r[A],_=n.getX(P),F=n.getY(P),M=n.getZ(P);_<p&&(p=_),_>w&&(w=_),F<b&&(b=F),F>S&&(S=F),M<x&&(x=M),M>I&&(I=M)}return l[a+0]!==p||l[a+1]!==b||l[a+2]!==x||l[a+3]!==w||l[a+4]!==S||l[a+5]!==I?(l[a+0]=p,l[a+1]=b,l[a+2]=x,l[a+3]=w,l[a+4]=S,l[a+5]=I,!0):!1}else{let y=a+8,v=i[a+6],p=y+h,b=v+h,x=g,w=!1,S=!1;e?x||(w=e.has(p),S=e.has(b),x=!w&&!S):(w=!0,S=!0);let I=x||w,A=x||S,R=!1;I&&(R=u(y,h,x));let P=!1;A&&(P=u(v,h,x));let _=R||P;if(_)for(let F=0;F<3;F++){let M=y+F,D=v+F,N=l[M],K=l[M+3],ce=l[D],he=l[D+3];l[a+F]=N<ce?N:ce,l[a+F+3]=K>he?K:he}return _}}}function me(o,e,t,r,n){let s,i,c,l,m,f,u=1/t.direction.x,a=1/t.direction.y,h=1/t.direction.z,g=t.origin.x,T=t.origin.y,d=t.origin.z,y=e[o],v=e[o+3],p=e[o+1],b=e[o+3+1],x=e[o+2],w=e[o+3+2];return u>=0?(s=(y-g)*u,i=(v-g)*u):(s=(v-g)*u,i=(y-g)*u),a>=0?(c=(p-T)*a,l=(b-T)*a):(c=(b-T)*a,l=(p-T)*a),s>l||c>i||((c>s||isNaN(s))&&(s=c),(l<i||isNaN(i))&&(i=l),h>=0?(m=(x-d)*h,f=(w-d)*h):(m=(w-d)*h,f=(x-d)*h),s>f||m>i)?!1:((m>s||s!==s)&&(s=m),(f<i||i!==i)&&(i=f),s<=n&&i>=r)}function wo(o,e,t,r,n,s,i,c){let{geometry:l,_indirectBuffer:m}=o;for(let f=r,u=r+n;f<u;f++){let a=m?m[f]:f;Ze(l,e,t,a,s,i,c)}}function So(o,e,t,r,n,s,i){let{geometry:c,_indirectBuffer:l}=o,m=1/0,f=null;for(let u=r,a=r+n;u<a;u++){let h;h=Ze(c,e,t,l?l[u]:u,null,s,i),h&&h.distance<m&&(f=h,m=h.distance)}return f}function _o(o,e,t,r,n,s,i){let{geometry:c}=t,{index:l}=c,m=c.attributes.position;for(let f=o,u=e+o;f<u;f++){let a;if(a=t.resolveTriangleIndex(f),k(i,a*3,l,m),i.needsUpdate=!0,r(i,a,n,s))return!0}return!1}function Ao(o,e,t,r,n,s,i){E.setBuffer(o._roots[e]),ti(0,o,t,r,n,s,i),E.clearBuffer()}function ti(o,e,t,r,n,s,i){let{float32Array:c,uint16Array:l,uint32Array:m}=E,f=o*2;if(U(f,l)){let a=G(o,m),h=q(f,l);xo(e,t,r,a,h,n,s,i)}else{let a=X(o);me(a,c,r,s,i)&&ti(a,e,t,r,n,s,i);let h=Y(o,m);me(h,c,r,s,i)&&ti(h,e,t,r,n,s,i)}}var gs=["x","y","z"];function Io(o,e,t,r,n,s){E.setBuffer(o._roots[e]);let i=ri(0,o,t,r,n,s);return E.clearBuffer(),i}function ri(o,e,t,r,n,s){let{float32Array:i,uint16Array:c,uint32Array:l}=E,m=o*2;if(U(m,c)){let u=G(o,l),a=q(m,c);return yo(e,t,r,u,a,n,s)}else{let u=Xe(o,l),a=gs[u],g=r.direction[a]>=0,T,d;g?(T=X(o),d=Y(o,l)):(T=Y(o,l),d=X(o));let v=me(T,i,r,n,s)?ri(T,e,t,r,n,s):null;if(v){let x=v.point[a];if(g?x<=i[d+u]:x>=i[d+u+3])return v}let b=me(d,i,r,n,s)?ri(d,e,t,r,n,s):null;return v&&b?v.distance<=b.distance?v:b:v||b||null}}var Kt=new ee,Je=new Q,et=new Q,bt=new H,Ro=new $,Zt=new $;function Fo(o,e,t,r){E.setBuffer(o._roots[e]);let n=ii(0,o,t,r);return E.clearBuffer(),n}function ii(o,e,t,r,n=null){let{float32Array:s,uint16Array:i,uint32Array:c}=E,l=o*2;if(n===null&&(t.boundingBox||t.computeBoundingBox(),Ro.set(t.boundingBox.min,t.boundingBox.max,r),n=Ro),U(l,i)){let f=e.geometry,u=f.index,a=f.attributes.position,h=t.index,g=t.attributes.position,T=G(o,c),d=q(l,i);if(bt.copy(r).invert(),t.boundsTree)return O(o,s,Zt),Zt.matrix.copy(bt),Zt.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>Zt.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(r),v.b.applyMatrix4(r),v.c.applyMatrix4(r),v.needsUpdate=!0;for(let p=T*3,b=(d+T)*3;p<b;p+=3)if(k(et,p,u,a),et.needsUpdate=!0,v.intersectsTriangle(et))return!0;return!1}});{let y=ie(t);for(let v=T*3,p=(d+T)*3;v<p;v+=3){k(Je,v,u,a),Je.a.applyMatrix4(bt),Je.b.applyMatrix4(bt),Je.c.applyMatrix4(bt),Je.needsUpdate=!0;for(let b=0,x=y*3;b<x;b+=3)if(k(et,b,h,g),et.needsUpdate=!0,Je.intersectsTriangle(et))return!0}}}else{let f=o+8,u=c[o+6];return O(f,s,Kt),!!(n.intersectsBox(Kt)&&ii(f,e,t,r,n)||(O(u,s,Kt),n.intersectsBox(Kt)&&ii(u,e,t,r,n)))}}var Jt=new H,oi=new $,Tt=new $,vs=new C,xs=new C,ys=new C,bs=new C;function Po(o,e,t,r={},n={},s=0,i=1/0){e.boundingBox||e.computeBoundingBox(),oi.set(e.boundingBox.min,e.boundingBox.max,t),oi.needsUpdate=!0;let c=o.geometry,l=c.attributes.position,m=c.index,f=e.attributes.position,u=e.index,a=te.getPrimitive(),h=te.getPrimitive(),g=vs,T=xs,d=null,y=null;n&&(d=ys,y=bs);let v=1/0,p=null,b=null;return Jt.copy(t).invert(),Tt.matrix.copy(Jt),o.shapecast({boundsTraverseOrder:x=>oi.distanceToBox(x),intersectsBounds:(x,w,S)=>S<v&&S<i?(w&&(Tt.min.copy(x.min),Tt.max.copy(x.max),Tt.needsUpdate=!0),!0):!1,intersectsRange:(x,w)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:I=>Tt.distanceToBox(I),intersectsBounds:(I,A,R)=>R<v&&R<i,intersectsRange:(I,A)=>{for(let R=I,P=I+A;R<P;R++){k(h,3*R,u,f),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let _=x,F=x+w;_<F;_++){k(a,3*_,m,l),a.needsUpdate=!0;let M=a.distanceToTriangle(h,g,d);if(M<v&&(T.copy(g),y&&y.copy(d),v=M,p=_,b=R),M<s)return!0}}}});{let S=ie(e);for(let I=0,A=S;I<A;I++){k(h,3*I,u,f),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let R=x,P=x+w;R<P;R++){k(a,3*R,m,l),a.needsUpdate=!0;let _=a.distanceToTriangle(h,g,d);if(_<v&&(T.copy(g),y&&y.copy(d),v=_,p=R,b=I),_<s)return!0}}}}}),te.releasePrimitive(a),te.releasePrimitive(h),v===1/0?null:(r.point?r.point.copy(T):r.point=T.clone(),r.distance=v,r.faceIndex=p,n&&(n.point?n.point.copy(y):n.point=y.clone(),n.point.applyMatrix4(Jt),T.applyMatrix4(Jt),n.distance=T.sub(n.point).length(),n.faceIndex=b),r)}function Mo(o,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=o.geometry,r=t.index?t.index.array:null,n=t.attributes.position,s,i,c,l,m=0,f=o._roots;for(let a=0,h=f.length;a<h;a++)s=f[a],i=new Uint32Array(s),c=new Uint16Array(s),l=new Float32Array(s),u(0,m),m+=s.byteLength;function u(a,h,g=!1){let T=a*2;if(c[T+15]===65535){let y=i[a+6],v=c[T+14],p=1/0,b=1/0,x=1/0,w=-1/0,S=-1/0,I=-1/0;for(let A=y,R=y+v;A<R;A++){let P=3*o.resolveTriangleIndex(A);for(let _=0;_<3;_++){let F=P+_;F=r?r[F]:F;let M=n.getX(F),D=n.getY(F),N=n.getZ(F);M<p&&(p=M),M>w&&(w=M),D<b&&(b=D),D>S&&(S=D),N<x&&(x=N),N>I&&(I=N)}}return l[a+0]!==p||l[a+1]!==b||l[a+2]!==x||l[a+3]!==w||l[a+4]!==S||l[a+5]!==I?(l[a+0]=p,l[a+1]=b,l[a+2]=x,l[a+3]=w,l[a+4]=S,l[a+5]=I,!0):!1}else{let y=a+8,v=i[a+6],p=y+h,b=v+h,x=g,w=!1,S=!1;e?x||(w=e.has(p),S=e.has(b),x=!w&&!S):(w=!0,S=!0);let I=x||w,A=x||S,R=!1;I&&(R=u(y,h,x));let P=!1;A&&(P=u(v,h,x));let _=R||P;if(_)for(let F=0;F<3;F++){let M=y+F,D=v+F,N=l[M],K=l[M+3],ce=l[D],he=l[D+3];l[a+F]=N<ce?N:ce,l[a+F+3]=K>he?K:he}return _}}}function Co(o,e,t,r,n,s,i){E.setBuffer(o._roots[e]),ni(0,o,t,r,n,s,i),E.clearBuffer()}function ni(o,e,t,r,n,s,i){let{float32Array:c,uint16Array:l,uint32Array:m}=E,f=o*2;if(U(f,l)){let a=G(o,m),h=q(f,l);wo(e,t,r,a,h,n,s,i)}else{let a=X(o);me(a,c,r,s,i)&&ni(a,e,t,r,n,s,i);let h=Y(o,m);me(h,c,r,s,i)&&ni(h,e,t,r,n,s,i)}}var Ts=["x","y","z"];function Do(o,e,t,r,n,s){E.setBuffer(o._roots[e]);let i=si(0,o,t,r,n,s);return E.clearBuffer(),i}function si(o,e,t,r,n,s){let{float32Array:i,uint16Array:c,uint32Array:l}=E,m=o*2;if(U(m,c)){let u=G(o,l),a=q(m,c);return So(e,t,r,u,a,n,s)}else{let u=Xe(o,l),a=Ts[u],g=r.direction[a]>=0,T,d;g?(T=X(o),d=Y(o,l)):(T=Y(o,l),d=X(o));let v=me(T,i,r,n,s)?si(T,e,t,r,n,s):null;if(v){let x=v.point[a];if(g?x<=i[d+u]:x>=i[d+u+3])return v}let b=me(d,i,r,n,s)?si(d,e,t,r,n,s):null;return v&&b?v.distance<=b.distance?v:b:v||b||null}}var er=new ee,tt=new Q,rt=new Q,wt=new H,Bo=new $,tr=new $;function Eo(o,e,t,r){E.setBuffer(o._roots[e]);let n=ai(0,o,t,r);return E.clearBuffer(),n}function ai(o,e,t,r,n=null){let{float32Array:s,uint16Array:i,uint32Array:c}=E,l=o*2;if(n===null&&(t.boundingBox||t.computeBoundingBox(),Bo.set(t.boundingBox.min,t.boundingBox.max,r),n=Bo),U(l,i)){let f=e.geometry,u=f.index,a=f.attributes.position,h=t.index,g=t.attributes.position,T=G(o,c),d=q(l,i);if(wt.copy(r).invert(),t.boundsTree)return O(o,s,tr),tr.matrix.copy(wt),tr.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>tr.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(r),v.b.applyMatrix4(r),v.c.applyMatrix4(r),v.needsUpdate=!0;for(let p=T,b=d+T;p<b;p++)if(k(rt,3*e.resolveTriangleIndex(p),u,a),rt.needsUpdate=!0,v.intersectsTriangle(rt))return!0;return!1}});{let y=ie(t);for(let v=T,p=d+T;v<p;v++){let b=e.resolveTriangleIndex(v);k(tt,3*b,u,a),tt.a.applyMatrix4(wt),tt.b.applyMatrix4(wt),tt.c.applyMatrix4(wt),tt.needsUpdate=!0;for(let x=0,w=y*3;x<w;x+=3)if(k(rt,x,h,g),rt.needsUpdate=!0,tt.intersectsTriangle(rt))return!0}}}else{let f=o+8,u=c[o+6];return O(f,s,er),!!(n.intersectsBox(er)&&ai(f,e,t,r,n)||(O(u,s,er),n.intersectsBox(er)&&ai(u,e,t,r,n)))}}var rr=new H,ci=new $,St=new $,ws=new C,Ss=new C,_s=new C,As=new C;function Lo(o,e,t,r={},n={},s=0,i=1/0){e.boundingBox||e.computeBoundingBox(),ci.set(e.boundingBox.min,e.boundingBox.max,t),ci.needsUpdate=!0;let c=o.geometry,l=c.attributes.position,m=c.index,f=e.attributes.position,u=e.index,a=te.getPrimitive(),h=te.getPrimitive(),g=ws,T=Ss,d=null,y=null;n&&(d=_s,y=As);let v=1/0,p=null,b=null;return rr.copy(t).invert(),St.matrix.copy(rr),o.shapecast({boundsTraverseOrder:x=>ci.distanceToBox(x),intersectsBounds:(x,w,S)=>S<v&&S<i?(w&&(St.min.copy(x.min),St.max.copy(x.max),St.needsUpdate=!0),!0):!1,intersectsRange:(x,w)=>{if(e.boundsTree){let S=e.boundsTree;return S.shapecast({boundsTraverseOrder:I=>St.distanceToBox(I),intersectsBounds:(I,A,R)=>R<v&&R<i,intersectsRange:(I,A)=>{for(let R=I,P=I+A;R<P;R++){let _=S.resolveTriangleIndex(R);k(h,3*_,u,f),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let F=x,M=x+w;F<M;F++){let D=o.resolveTriangleIndex(F);k(a,3*D,m,l),a.needsUpdate=!0;let N=a.distanceToTriangle(h,g,d);if(N<v&&(T.copy(g),y&&y.copy(d),v=N,p=F,b=R),N<s)return!0}}}})}else{let S=ie(e);for(let I=0,A=S;I<A;I++){k(h,3*I,u,f),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let R=x,P=x+w;R<P;R++){let _=o.resolveTriangleIndex(R);k(a,3*_,m,l),a.needsUpdate=!0;let F=a.distanceToTriangle(h,g,d);if(F<v&&(T.copy(g),y&&y.copy(d),v=F,p=R,b=I),F<s)return!0}}}}}),te.releasePrimitive(a),te.releasePrimitive(h),v===1/0?null:(r.point?r.point.copy(T):r.point=T.clone(),r.distance=v,r.faceIndex=p,n&&(n.point?n.point.copy(y):n.point=y.clone(),n.point.applyMatrix4(rr),T.applyMatrix4(rr),n.distance=T.sub(n.point).length(),n.faceIndex=b),r)}function No(){return typeof SharedArrayBuffer<"u"}var _t=new E.constructor,ir=new E.constructor,Me=new Fe(()=>new ee),it=new ee,ot=new ee,li=new ee,ui=new ee,fi=!1;function zo(o,e,t,r){if(fi)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");fi=!0;let n=o._roots,s=e._roots,i,c=0,l=0,m=new H().copy(t).invert();for(let f=0,u=n.length;f<u;f++){_t.setBuffer(n[f]),l=0;let a=Me.getPrimitive();O(0,_t.float32Array,a),a.applyMatrix4(m);for(let h=0,g=s.length;h<g&&(ir.setBuffer(s[h]),i=xe(0,0,t,m,r,c,l,0,0,a),ir.clearBuffer(),l+=s[h].length,!i);h++);if(Me.releasePrimitive(a),_t.clearBuffer(),c+=n[f].length,i)break}return fi=!1,i}function xe(o,e,t,r,n,s=0,i=0,c=0,l=0,m=null,f=!1){let u,a;f?(u=ir,a=_t):(u=_t,a=ir);let h=u.float32Array,g=u.uint32Array,T=u.uint16Array,d=a.float32Array,y=a.uint32Array,v=a.uint16Array,p=o*2,b=e*2,x=U(p,T),w=U(b,v),S=!1;if(w&&x)f?S=n(G(e,y),q(e*2,v),G(o,g),q(o*2,T),l,i+e,c,s+o):S=n(G(o,g),q(o*2,T),G(e,y),q(e*2,v),c,s+o,l,i+e);else if(w){let I=Me.getPrimitive();O(e,d,I),I.applyMatrix4(t);let A=X(o),R=Y(o,g);O(A,h,it),O(R,h,ot);let P=I.intersectsBox(it),_=I.intersectsBox(ot);S=P&&xe(e,A,r,t,n,i,s,l,c+1,I,!f)||_&&xe(e,R,r,t,n,i,s,l,c+1,I,!f),Me.releasePrimitive(I)}else{let I=X(e),A=Y(e,y);O(I,d,li),O(A,d,ui);let R=m.intersectsBox(li),P=m.intersectsBox(ui);if(R&&P)S=xe(o,I,t,r,n,s,i,c,l+1,m,f)||xe(o,A,t,r,n,s,i,c,l+1,m,f);else if(R)if(x)S=xe(o,I,t,r,n,s,i,c,l+1,m,f);else{let _=Me.getPrimitive();_.copy(li).applyMatrix4(t);let F=X(o),M=Y(o,g);O(F,h,it),O(M,h,ot);let D=_.intersectsBox(it),N=_.intersectsBox(ot);S=D&&xe(I,F,r,t,n,i,s,l,c+1,_,!f)||N&&xe(I,M,r,t,n,i,s,l,c+1,_,!f),Me.releasePrimitive(_)}else if(P)if(x)S=xe(o,A,t,r,n,s,i,c,l+1,m,f);else{let _=Me.getPrimitive();_.copy(ui).applyMatrix4(t);let F=X(o),M=Y(o,g);O(F,h,it),O(M,h,ot);let D=_.intersectsBox(it),N=_.intersectsBox(ot);S=D&&xe(A,F,r,t,n,i,s,l,c+1,_,!f)||N&&xe(A,M,r,t,n,i,s,l,c+1,_,!f),Me.releasePrimitive(_)}}return S}var or=new $,Oo=new ee,Is={strategy:0,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null},At=class o{static serialize(e,t={}){t={cloneBuffers:!0,...t};let r=e.geometry,n=e._roots,s=e._indirectBuffer,i=r.getIndex(),c;return t.cloneBuffers?c={roots:n.map(l=>l.slice()),index:i?i.array.slice():null,indirectBuffer:s?s.slice():null}:c={roots:n,index:i?i.array:null,indirectBuffer:s},c}static deserialize(e,t,r={}){r={setIndex:!0,indirect:!!e.indirectBuffer,...r};let{index:n,roots:s,indirectBuffer:i}=e,c=new o(t,{...r,[kt]:!0});if(c._roots=s,c._indirectBuffer=i||null,r.setIndex){let l=t.getIndex();if(l===null){let m=new j(e.index,1,!1);t.setIndex(m)}else l.array!==n&&(l.array.set(n),l.needsUpdate=!0)}return c}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...Is,[kt]:!1},t),t.useSharedArrayBuffer&&!No())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[kt]||(co(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ee))),this.resolveTriangleIndex=t.indirect?r=>this._indirectBuffer[r]:r=>r}refit(e=null){return(this.indirect?Mo:To)(this,e)}traverse(e,t=0){let r=this._roots[t],n=new Uint32Array(r),s=new Uint16Array(r);i(0);function i(c,l=0){let m=c*2,f=s[m+15]===65535;if(f){let u=n[c+6],a=s[m+14];e(l,f,new Float32Array(r,c*4,6),u,a)}else{let u=c+32/4,a=n[c+6],h=n[c+7];e(l,f,new Float32Array(r,c*4,6),h)||(i(u,l+1),i(a,l+1))}}}raycast(e,t=dt,r=0,n=1/0){let s=this._roots,i=this.geometry,c=[],l=t.isMaterial,m=Array.isArray(t),f=i.groups,u=l?t.side:t,a=this.indirect?Co:Ao;for(let h=0,g=s.length;h<g;h++){let T=m?t[f[h].materialIndex].side:u,d=c.length;if(a(this,h,T,e,c,r,n),m){let y=f[h].materialIndex;for(let v=d,p=c.length;v<p;v++)c[v].face.materialIndex=y}}return c}raycastFirst(e,t=dt,r=0,n=1/0){let s=this._roots,i=this.geometry,c=t.isMaterial,l=Array.isArray(t),m=null,f=i.groups,u=c?t.side:t,a=this.indirect?Do:Io;for(let h=0,g=s.length;h<g;h++){let T=l?t[f[h].materialIndex].side:u,d=a(this,h,T,e,r,n);d!=null&&(m==null||d.distance<m.distance)&&(m=d,l&&(d.face.materialIndex=f[h].materialIndex))}return m}intersectsGeometry(e,t){let r=!1,n=this._roots,s=this.indirect?Eo:Fo;for(let i=0,c=n.length;i<c&&(r=s(this,i,e,t),!r);i++);return r}shapecast(e){let t=te.getPrimitive(),r=this.indirect?_o:bo,{boundsTraverseOrder:n,intersectsBounds:s,intersectsRange:i,intersectsTriangle:c}=e;if(i&&c){let u=i;i=(a,h,g,T,d)=>u(a,h,g,T,d)?!0:r(a,h,this,c,g,T,t)}else i||(c?i=(u,a,h,g)=>r(u,a,this,c,h,g,t):i=(u,a,h)=>h);let l=!1,m=0,f=this._roots;for(let u=0,a=f.length;u<a;u++){let h=f[u];if(l=fo(this,u,s,i,n,m),l)break;m+=h.byteLength}return te.releasePrimitive(t),l}bvhcast(e,t,r){let{intersectsRanges:n,intersectsTriangles:s}=r,i=te.getPrimitive(),c=this.geometry.index,l=this.geometry.attributes.position,m=this.indirect?g=>{let T=this.resolveTriangleIndex(g);k(i,T*3,c,l)}:g=>{k(i,g*3,c,l)},f=te.getPrimitive(),u=e.geometry.index,a=e.geometry.attributes.position,h=e.indirect?g=>{let T=e.resolveTriangleIndex(g);k(f,T*3,u,a)}:g=>{k(f,g*3,u,a)};if(s){let g=(T,d,y,v,p,b,x,w)=>{for(let S=y,I=y+v;S<I;S++){h(S),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let A=T,R=T+d;A<R;A++)if(m(A),i.needsUpdate=!0,s(i,f,A,S,p,b,x,w))return!0}return!1};if(n){let T=n;n=function(d,y,v,p,b,x,w,S){return T(d,y,v,p,b,x,w,S)?!0:g(d,y,v,p,b,x,w,S)}}else n=g}return zo(this,e,t,n)}intersectsBox(e,t){return or.set(e.min,e.max,t),or.needsUpdate=!0,this.shapecast({intersectsBounds:r=>or.intersectsBox(r),intersectsTriangle:r=>or.intersectsTriangle(r)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,r={},n={},s=0,i=1/0){return(this.indirect?Lo:Po)(this,e,t,r,n,s,i)}closestPointToPoint(e,t={},r=0,n=1/0){return mo(this,e,t,r,n)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(r=>{O(0,new Float32Array(r),Oo),e.union(Oo)}),e}};function Rs(o){switch(o){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function Fs(o){switch(o){case 1:return Ee;case 2:return Et;case 3:return B;case 4:return B}}function ko(o){switch(o){case 1:return Bi;case 2:return Lt;case 3:return Nt;case 4:return Nt}}var nr=class extends W{constructor(){super(),this.minFilter=z,this.magFilter=z,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){let t=this.overrideItemSize,r=e.itemSize,n=e.count;if(t!==null){if(r*n%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=n*r/t}let s=e.itemSize,i=e.count,c=e.normalized,l=e.array.constructor,m=l.BYTES_PER_ELEMENT,f=this._forcedType,u=s;if(f===null)switch(l){case Float32Array:f=L;break;case Uint8Array:case Uint16Array:case Uint32Array:f=Be;break;case Int8Array:case Int16Array:case Int32Array:f=Bt;break}let a,h,g,T,d=Rs(s);switch(f){case L:g=1,h=Fs(s),c&&m===1?(T=l,d+="8",l===Uint8Array?a=ht:(a=Vr,d+="_SNORM")):(T=Float32Array,d+="32F",a=L);break;case Bt:d+=m*8+"I",g=c?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,h=ko(s),m===1?(T=Int8Array,a=Vr):m===2?(T=Int16Array,a=Ci):(T=Int32Array,a=Bt);break;case Be:d+=m*8+"UI",g=c?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,h=ko(s),m===1?(T=Uint8Array,a=ht):m===2?(T=Uint16Array,a=Di):(T=Uint32Array,a=Be);break}u===3&&(h===B||h===Nt)&&(u=4);let y=Math.ceil(Math.sqrt(i))||1,v=u*y*y,p=new T(v),b=e.normalized;e.normalized=!1;for(let x=0;x<i;x++){let w=u*x;p[w]=e.getX(x)/g,s>=2&&(p[w+1]=e.getY(x)/g),s>=3&&(p[w+2]=e.getZ(x)/g,u===4&&(p[w+3]=1)),s>=4&&(p[w+3]=e.getW(x)/g)}e.normalized=b,this.internalFormat=d,this.format=h,this.type=a,this.image.width=y,this.image.height=y,this.image.data=p,this.needsUpdate=!0,this.dispose(),e.itemSize=r,e.count=n}},nt=class extends nr{constructor(){super(),this._forcedType=Be}};var st=class extends nr{constructor(){super(),this._forcedType=L}};var sr=class{constructor(){this.index=new nt,this.position=new st,this.bvhBounds=new W,this.bvhContents=new W,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){let{geometry:t}=e;if(Ms(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){let r=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==r.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{let n=Gr(Wr(t));this._cachedIndexAttr=new j(n,1,!1)}Ps(t,r,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){let{index:e,position:t,bvhBounds:r,bvhContents:n}=this;e&&e.dispose(),t&&t.dispose(),r&&r.dispose(),n&&n.dispose()}};function Ps(o,e,t){let r=t.array,n=o.index?o.index.array:null;for(let s=0,i=e.length;s<i;s++){let c=3*s,l=3*e[s];for(let m=0;m<3;m++)r[c+m]=n?n[l+m]:l+m}}function Ms(o,e,t){let r=o._roots;if(r.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");let n=r[0],s=new Uint16Array(n),i=new Uint32Array(n),c=new Float32Array(n),l=n.byteLength/32,m=2*Math.ceil(Math.sqrt(l/2)),f=new Float32Array(4*m*m),u=Math.ceil(Math.sqrt(l)),a=new Uint32Array(2*u*u);for(let h=0;h<l;h++){let g=h*32/4,T=g*2,d=g;for(let y=0;y<3;y++)f[8*h+0+y]=c[d+0+y],f[8*h+4+y]=c[d+3+y];if(U(T,s)){let y=q(T,s),v=G(g,i),p=4294901760|y;a[h*2+0]=p,a[h*2+1]=v}else{let y=4*Y(g,i)/32,v=Xe(g,i);a[h*2+0]=v,a[h*2+1]=y}}e.image.data=f,e.image.width=m,e.image.height=m,e.format=B,e.type=L,e.internalFormat="RGBA32F",e.minFilter=z,e.magFilter=z,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=a,t.image.width=u,t.image.height=u,t.format=Lt,t.type=Be,t.internalFormat="RG32UI",t.minFilter=z,t.magFilter=z,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}var Oe={};is(Oe,{bvh_distance_functions:()=>Ho,bvh_ray_functions:()=>di,bvh_struct_definitions:()=>Uo,common_functions:()=>mi});var mi=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`;var Ho=`

float dot2( vec3 v ) {

	return dot( v, v );

}

// https://www.shadertoy.com/view/ttfGWl
vec3 closestPointToTriangle( vec3 p, vec3 v0, vec3 v1, vec3 v2, out vec3 barycoord ) {

    vec3 v10 = v1 - v0;
    vec3 v21 = v2 - v1;
    vec3 v02 = v0 - v2;

	vec3 p0 = p - v0;
	vec3 p1 = p - v1;
	vec3 p2 = p - v2;

    vec3 nor = cross( v10, v02 );

    // method 2, in barycentric space
    vec3  q = cross( nor, p0 );
    float d = 1.0 / dot2( nor );
    float u = d * dot( q, v02 );
    float v = d * dot( q, v10 );
    float w = 1.0 - u - v;

	if( u < 0.0 ) {

		w = clamp( dot( p2, v02 ) / dot2( v02 ), 0.0, 1.0 );
		u = 0.0;
		v = 1.0 - w;

	} else if( v < 0.0 ) {

		u = clamp( dot( p0, v10 ) / dot2( v10 ), 0.0, 1.0 );
		v = 0.0;
		w = 1.0 - u;

	} else if( w < 0.0 ) {

		v = clamp( dot( p1, v21 ) / dot2( v21 ), 0.0, 1.0 );
		w = 0.0;
		u = 1.0 - v;

	}

	barycoord = vec3( u, v, w );
    return u * v1 + v * v2 + w * v0;

}

float distanceToTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// point and cut off range
	vec3 point, float closestDistanceSquared,

	// outputs
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord, inout float side, inout vec3 outPoint
) {

	bool found = false;
	vec3 localBarycoord;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		// get the closest point and barycoord
		vec3 closestPoint = closestPointToTriangle( point, a, b, c, localBarycoord );
		vec3 delta = point - closestPoint;
		float sqDist = dot2( delta );
		if ( sqDist < closestDistanceSquared ) {

			// set the output results
			closestDistanceSquared = sqDist;
			faceIndices = uvec4( indices.xyz, i );
			faceNormal = normalize( cross( a - b, b - c ) );
			barycoord = localBarycoord;
			outPoint = closestPoint;
			side = sign( dot( faceNormal, delta ) );

		}

	}

	return closestDistanceSquared;

}

float distanceSqToBounds( vec3 point, vec3 boundsMin, vec3 boundsMax ) {

	vec3 clampedPoint = clamp( point, boundsMin, boundsMax );
	vec3 delta = point - clampedPoint;
	return dot( delta, delta );

}

float distanceSqToBVHNodeBoundsPoint( vec3 point, sampler2D bvhBounds, uint currNodeIndex ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return distanceSqToBounds( point, boundsMin, boundsMax );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhClosestPointToPoint(		bvh,		point, maxDistance, faceIndices, faceNormal, barycoord, side, outPoint	)	_bvhClosestPointToPoint(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		point, maxDistance, faceIndices, faceNormal, barycoord, side, outPoint	)

float _bvhClosestPointToPoint(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// point to check
	vec3 point, float maxDistance,

	// output variables
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout vec3 outPoint
 ) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float closestDistanceSquared = maxDistance * maxDistance;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance = distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, currNodeIndex );
		if ( boundsHitDistance > closestDistanceSquared ) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );
		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;
			closestDistanceSquared = distanceToTriangles(
				bvh_position, bvh_index, offset, count, point, closestDistanceSquared,

				// outputs
				faceIndices, faceNormal, barycoord, side, outPoint
			);

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;
			bool leftToRight = distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, leftIndex ) < distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, rightIndex );//rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;
			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return sqrt( closestDistanceSquared );

}
`;var di=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`;var Uo=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;var iu=`
	${mi}
	${di}
`;function ar(o,e,t=0){if(o.isInterleavedBufferAttribute){let r=o.itemSize;for(let n=0,s=o.count;n<s;n++){let i=n+t;e.setX(i,o.getX(n)),r>=2&&e.setY(i,o.getY(n)),r>=3&&e.setZ(i,o.getZ(n)),r>=4&&e.setW(i,o.getW(n))}}else{let r=e.array,n=r.constructor,s=r.BYTES_PER_ELEMENT*o.itemSize*t;new n(r.buffer,s,o.array.length).set(o.array)}}function ke(o,e=null){let t=o.array.constructor,r=o.normalized,n=o.itemSize,s=e===null?o.count:e;return new j(new t(n*s),n,r)}function Ce(o,e){if(!o&&!e)return!0;if(!!o!=!!e)return!1;let t=o.count===e.count,r=o.normalized===e.normalized,n=o.array.constructor===e.array.constructor,s=o.itemSize===e.itemSize;return!(!t||!r||!n||!s)}function Cs(o){let e=o[0].index!==null,t=new Set(Object.keys(o[0].attributes));if(!o[0].getAttribute("position"))throw new Error("StaticGeometryGenerator: position attribute is required.");for(let r=0;r<o.length;++r){let n=o[r],s=0;if(e!==(n.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(let i in n.attributes){if(!t.has(i))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+i+'" attribute exists among all geometries, or in none of them.');s++}if(s!==t.size)throw new Error("StaticGeometryGenerator: All geometries must have the same number of attributes.")}}function Ds(o){let e=0;for(let t=0,r=o.length;t<r;t++)e+=o[t].getIndex().count;return e}function Bs(o){let e=0;for(let t=0,r=o.length;t<r;t++)e+=o[t].getAttribute("position").count;return e}function Es(o,e,t){o.index&&o.index.count!==e&&o.setIndex(null);let r=o.attributes;for(let n in r)r[n].count!==t&&o.deleteAttribute(n)}function Vo(o,e={},t=new ve){let{useGroups:r=!1,forceUpdate:n=!1,skipAssigningAttributes:s=[],overwriteIndex:i=!0}=e;Cs(o);let c=o[0].index!==null,l=c?Ds(o):-1,m=Bs(o);if(Es(t,l,m),r){let u=0;for(let a=0,h=o.length;a<h;a++){let g=o[a],T;c?T=g.getIndex().count:T=g.getAttribute("position").count,t.addGroup(u,T,a),u+=T}}if(c){let u=!1;if(t.index||(t.setIndex(new j(new Uint32Array(l),1,!1)),u=!0),u||i){let a=0,h=0,g=t.getIndex();for(let T=0,d=o.length;T<d;T++){let y=o[T],v=y.getIndex();if(!(!n&&!u&&s[T]))for(let b=0;b<v.count;++b)g.setX(a+b,v.getX(b)+h);a+=v.count,h+=y.getAttribute("position").count}}}let f=Object.keys(o[0].attributes);for(let u=0,a=f.length;u<a;u++){let h=!1,g=f[u];if(!t.getAttribute(g)){let y=o[0].getAttribute(g);t.setAttribute(g,ke(y,m)),h=!0}let T=0,d=t.getAttribute(g);for(let y=0,v=o.length;y<v;y++){let p=o[y],b=!n&&!h&&s[y],x=p.getAttribute(g);if(!b)if(g==="color"&&d.itemSize!==x.itemSize)for(let w=T,S=x.count;w<S;w++)x.setXYZW(w,d.getX(w),d.getY(w),d.getZ(w),1);else ar(x,d,T);T+=x.count}}}function Wo(o,e,t){let r=o.index,s=o.attributes.position.count,i=r?r.count:s,c=o.groups;c.length===0&&(c=[{count:i,start:0,materialIndex:0}]);let l=o.getAttribute("materialIndex");if(!l||l.count!==s){let f;t.length<=255?f=new Uint8Array(s):f=new Uint16Array(s),l=new j(f,1,!1),o.deleteAttribute("materialIndex"),o.setAttribute("materialIndex",l)}let m=l.array;for(let f=0;f<c.length;f++){let u=c[f],a=u.start,h=u.count,g=Math.min(h,i-a),T=Array.isArray(e)?e[u.materialIndex]:e,d=t.indexOf(T);for(let y=0;y<g;y++){let v=a+y;r&&(v=r.getX(v)),m[v]=d}}}function Go(o,e){if(!o.index){let t=o.attributes.position.count,r=new Array(t);for(let n=0;n<t;n++)r[n]=n;o.setIndex(r)}if(!o.attributes.normal&&e&&e.includes("normal")&&o.computeVertexNormals(),!o.attributes.uv&&e&&e.includes("uv")){let t=o.attributes.position.count;o.setAttribute("uv",new j(new Float32Array(t*2),2,!1))}if(!o.attributes.uv2&&e&&e.includes("uv2")){let t=o.attributes.position.count;o.setAttribute("uv2",new j(new Float32Array(t*2),2,!1))}if(!o.attributes.tangent&&e&&e.includes("tangent"))if(o.attributes.uv&&o.attributes.normal)o.computeTangents();else{let t=o.attributes.position.count;o.setAttribute("tangent",new j(new Float32Array(t*4),4,!1))}if(!o.attributes.color&&e&&e.includes("color")){let t=o.attributes.position.count,r=new Float32Array(t*4);r.fill(1),o.setAttribute("color",new j(r,4))}}function at(o){let e=0;if(o.byteLength!==0){let t=new Uint8Array(o);for(let r=0;r<o.byteLength;r++){let n=t[r];e=(e<<5)-e+n,e|=0}}return e}function qo(o){let e=o.uuid,t=Object.values(o.attributes);o.index&&(t.push(o.index),e+=`index|${o.index.version}`);let r=Object.keys(t).sort();for(let n of r){let s=t[n];e+=`${n}_${s.version}|`}return e}function $o(o){let e=o.skeleton;return e?(e.boneTexture||e.computeBoneTexture(),`${at(e.boneTexture.image.data.buffer)}_${e.boneTexture.uuid}`):null}var cr=class{constructor(e=null){this.matrixWorld=new H,this.geometryHash=null,this.skeletonHash=null,this.primitiveCount=-1,e!==null&&this.updateFrom(e)}updateFrom(e){let t=e.geometry,r=(t.index?t.index.count:t.attributes.position.count)/3;this.matrixWorld.copy(e.matrixWorld),this.geometryHash=qo(t),this.primitiveCount=r,this.skeletonHash=$o(e)}didChange(e){let t=e.geometry,r=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===qo(t)&&this.skeletonHash===$o(e)&&this.primitiveCount===r)}};var He=new C,Ue=new C,Ve=new C,Yo=new _e,lr=new C,hi=new C,jo=new _e,Xo=new _e,ur=new H,Qo=new H;function Ko(o,e,t){let r=o.skeleton,n=o.geometry,s=r.bones,i=r.boneInverses;jo.fromBufferAttribute(n.attributes.skinIndex,e),Xo.fromBufferAttribute(n.attributes.skinWeight,e),ur.elements.fill(0);for(let c=0;c<4;c++){let l=Xo.getComponent(c);if(l!==0){let m=jo.getComponent(c);Qo.multiplyMatrices(s[m].matrixWorld,i[m]),Ls(ur,Qo,l)}}return ur.multiply(o.bindMatrix).premultiply(o.bindMatrixInverse),t.transformDirection(ur),t}function pi(o,e,t,r,n){lr.set(0,0,0);for(let s=0,i=o.length;s<i;s++){let c=e[s],l=o[s];c!==0&&(hi.fromBufferAttribute(l,r),t?lr.addScaledVector(hi,c):lr.addScaledVector(hi.sub(n),c))}n.add(lr)}function Ls(o,e,t){let r=o.elements,n=e.elements;for(let s=0,i=n.length;s<i;s++)r[s]+=n[s]*t}function Ns(o){let{index:e,attributes:t}=o;if(e)for(let r=0,n=e.count;r<n;r+=3){let s=e.getX(r),i=e.getX(r+2);e.setX(r,i),e.setX(r+2,s)}else for(let r in t){let n=t[r],s=n.itemSize;for(let i=0,c=n.count;i<c;i+=3)for(let l=0;l<s;l++){let m=n.getComponent(i,l),f=n.getComponent(i+2,l);n.setComponent(i,l,f),n.setComponent(i+2,l,m)}}return o}function Zo(o,e={},t=new ve){e={applyWorldTransforms:!0,attributes:[],...e};let r=o.geometry,n=e.applyWorldTransforms,s=e.attributes.includes("normal"),i=e.attributes.includes("tangent"),c=r.attributes,l=t.attributes;for(let v in t.attributes)(!e.attributes.includes(v)||!(v in r.attributes))&&t.deleteAttribute(v);!t.index&&r.index&&(t.index=r.index.clone()),l.position||t.setAttribute("position",ke(c.position)),s&&!l.normal&&c.normal&&t.setAttribute("normal",ke(c.normal)),i&&!l.tangent&&c.tangent&&t.setAttribute("tangent",ke(c.tangent)),Ce(r.index,t.index),Ce(c.position,l.position),s&&Ce(c.normal,l.normal),i&&Ce(c.tangent,l.tangent);let m=c.position,f=s?c.normal:null,u=i?c.tangent:null,a=r.morphAttributes.position,h=r.morphAttributes.normal,g=r.morphAttributes.tangent,T=r.morphTargetsRelative,d=o.morphTargetInfluences,y=new Li;y.getNormalMatrix(o.matrixWorld),r.index&&t.index.array.set(r.index.array);for(let v=0,p=c.position.count;v<p;v++)He.fromBufferAttribute(m,v),f&&Ue.fromBufferAttribute(f,v),u&&(Yo.fromBufferAttribute(u,v),Ve.fromBufferAttribute(u,v)),d&&(a&&pi(a,d,T,v,He),h&&pi(h,d,T,v,Ue),g&&pi(g,d,T,v,Ve)),o.isSkinnedMesh&&(o.applyBoneTransform(v,He),f&&Ko(o,v,Ue),u&&Ko(o,v,Ve)),n&&He.applyMatrix4(o.matrixWorld),l.position.setXYZ(v,He.x,He.y,He.z),f&&(n&&Ue.applyNormalMatrix(y),l.normal.setXYZ(v,Ue.x,Ue.y,Ue.z)),u&&(n&&Ve.transformDirection(o.matrixWorld),l.tangent.setXYZW(v,Ve.x,Ve.y,Ve.z,Yo.w));for(let v in e.attributes){let p=e.attributes[v];p==="position"||p==="tangent"||p==="normal"||!(p in c)||(l[p]||t.setAttribute(p,ke(c[p])),Ce(c[p],l[p]),ar(c[p],l[p]))}return o.matrixWorld.determinant()<0&&Ns(t),t}var fr=class extends ve{constructor(){super(),this.version=0,this.hash=null,this._diff=new cr}isCompatible(e,t){let r=e.geometry;for(let n=0;n<t.length;n++){let s=t[n],i=r.attributes[s],c=this.attributes[s];if(i&&!Ce(i,c))return!1}return!0}updateFrom(e,t){let r=this._diff;return r.didChange(e)?(Zo(e,t,this),r.updateFrom(e),this.version++,this.hash=`${this.uuid}_${this.version}`,!0):!1}};var dr=0,gi=1,vi=2;function zs(o,e){for(let t=0,r=o.length;t<r;t++)o[t].traverseVisible(s=>{s.isMesh&&e(s)})}function Os(o){let e=[];for(let t=0,r=o.length;t<r;t++){let n=o[t];Array.isArray(n.material)?e.push(...n.material):e.push(n.material)}return e}function ks(o,e,t){if(o.length===0){e.setIndex(null);let r=e.attributes;for(let n in r)e.deleteAttribute(n);for(let n in t.attributes)e.setAttribute(t.attributes[n],new j(new Float32Array(0),4,!1))}else Vo(o,t,e);for(let r in e.attributes)e.attributes[r].needsUpdate=!0}var mr=class{constructor(e){this.objects=null,this.useGroups=!0,this.applyWorldTransforms=!0,this.generateMissingAttributes=!0,this.overwriteIndex=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Map,this._geometryMergeSets=new WeakMap,this._mergeOrder=[],this._dummyMesh=null,this.setObjects(e||[])}_getDummyMesh(){if(!this._dummyMesh){let e=new ki,t=new ve;t.setAttribute("position",new j(new Float32Array(9),3)),this._dummyMesh=new Hi(t,e)}return this._dummyMesh}_getMeshes(){let e=[];return zs(this.objects,t=>{e.push(t)}),e.sort((t,r)=>t.uuid>r.uuid?1:t.uuid<r.uuid?-1:0),e.length===0&&e.push(this._getDummyMesh()),e}_updateIntermediateGeometries(){let{_intermediateGeometry:e}=this,t=this._getMeshes(),r=new Set(e.keys()),n={attributes:this.attributes,applyWorldTransforms:this.applyWorldTransforms};for(let s=0,i=t.length;s<i;s++){let c=t[s],l=c.uuid;r.delete(l);let m=e.get(l);(!m||!m.isCompatible(c,this.attributes))&&(m&&m.dispose(),m=new fr,e.set(l,m)),m.updateFrom(c,n)&&this.generateMissingAttributes&&Go(m,this.attributes)}r.forEach(s=>{e.delete(s)})}setObjects(e){Array.isArray(e)?this.objects=[...e]:this.objects=[e]}generate(e=new ve){let{useGroups:t,overwriteIndex:r,_intermediateGeometry:n,_geometryMergeSets:s}=this,i=this._getMeshes(),c=[],l=[],m=s.get(e)||[];this._updateIntermediateGeometries();let f=!1;i.length!==m.length&&(f=!0);for(let a=0,h=i.length;a<h;a++){let g=i[a],T=n.get(g.uuid);l.push(T);let d=m[a];!d||d.uuid!==T.uuid?(c.push(!1),f=!0):d.version!==T.version?c.push(!1):c.push(!0)}ks(l,e,{useGroups:t,forceUpdate:f,skipAssigningAttributes:c,overwriteIndex:r}),f&&e.dispose(),s.set(e,l.map(a=>({version:a.version,uuid:a.uuid})));let u=dr;return f?u=vi:c.includes(!1)&&(u=gi),{changeType:u,materials:Os(i),geometry:e}}};function Hs(o){let e=new Set;for(let t=0,r=o.length;t<r;t++){let n=o[t];for(let s in n){let i=n[s];i&&i.isTexture&&e.add(i)}}return Array.from(e)}function Us(o){let e=[],t=new Set;for(let n=0,s=o.length;n<s;n++)o[n].traverse(i=>{i.visible&&(i.isRectAreaLight||i.isSpotLight||i.isPointLight||i.isDirectionalLight)&&(e.push(i),i.iesMap&&t.add(i.iesMap))});let r=Array.from(t).sort((n,s)=>n.uuid<s.uuid?1:n.uuid>s.uuid?-1:0);return{lights:e,iesTextures:r}}var ct=class{get initialized(){return!!this.bvh}constructor(e){this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.generateBVH=!0,this.bvh=null,this.geometry=new ve,this.staticGeometryGenerator=new mr(e),this._bvhWorker=null,this._pendingGenerate=null,this._buildAsync=!1,this._materialUuids=null}setObjects(e){this.staticGeometryGenerator.setObjects(e)}setBVHWorker(e){this._bvhWorker=e}async generateAsync(e=null){if(!this._bvhWorker)throw new Error('PathTracingSceneGenerator: "setBVHWorker" must be called before "generateAsync" can be called.');if(this.bvh instanceof Promise)return this._pendingGenerate||(this._pendingGenerate=new Promise(async()=>(await this.bvh,this._pendingGenerate=null,this.generateAsync(e)))),this._pendingGenerate;{this._buildAsync=!0;let t=this.generate(e);return this._buildAsync=!1,t.bvh=this.bvh=await t.bvh,t}}generate(e=null){let{staticGeometryGenerator:t,geometry:r,attributes:n}=this,s=t.objects;t.attributes=n,s.forEach(a=>{a.traverse(h=>{h.isSkinnedMesh&&h.skeleton&&h.skeleton.update()})});let i=t.generate(r),c=i.materials,l=i.changeType!==dr||this._materialUuids===null||this._materialUuids.length!==length;if(!l){for(let a=0,h=c.length;a<h;a++)if(c[a].uuid!==this._materialUuids[a]){l=!0;break}}let m=Hs(c),{lights:f,iesTextures:u}=Us(s);if(l&&(Wo(r,c,c),this._materialUuids=c.map(a=>a.uuid)),this.generateBVH){if(this.bvh instanceof Promise)throw new Error("PathTracingSceneGenerator: BVH is already building asynchronously.");if(i.changeType===vi){let a={strategy:2,maxLeafTris:1,indirect:!0,onProgress:e,...this.bvhOptions};this._buildAsync?this.bvh=this._bvhWorker.generate(r,a):this.bvh=new At(r,a)}else i.changeType===gi&&this.bvh.refit()}return{bvhChanged:i.changeType!==dr,bvh:this.bvh,needsMaterialIndexUpdate:l,lights:f,iesTextures:u,geometry:r,materials:c,textures:m,objects:s}}},Jo=class extends ct{constructor(...e){super(...e),console.warn('DynamicPathTracingSceneGenerator has been deprecated and renamed to "PathTracingSceneGenerator".')}},en=class extends ct{constructor(...e){super(...e),console.warn('PathTracingSceneWorker has been deprecated and renamed to "PathTracingSceneGenerator".')}};var de=class extends Ae{set needsUpdate(e){super.needsUpdate=!0,this.dispatchEvent({type:"recompilation"})}constructor(e){super(e);for(let t in this.uniforms)Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(r){this.uniforms[t].value=r}})}setDefine(e,t=void 0){if(t==null){if(e in this.defines)return delete this.defines[e],this.needsUpdate=!0,!0}else if(this.defines[e]!==t)return this.defines[e]=t,this.needsUpdate=!0,!0;return!1}};var hr=class extends de{constructor(e){super({blending:pe,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				uniform float opacity;

				uniform sampler2D target1;
				uniform sampler2D target2;

				varying vec2 vUv;

				void main() {

					vec4 color1 = texture2D( target1, vUv );
					vec4 color2 = texture2D( target2, vUv );

					float invOpacity = 1.0 - opacity;
					float totalAlpha = color1.a * invOpacity + color2.a * opacity;

					if ( color1.a != 0.0 || color2.a != 0.0 ) {

						gl_FragColor.rgb = color1.rgb * ( invOpacity * color1.a / totalAlpha ) + color2.rgb * ( opacity * color2.a / totalAlpha );
						gl_FragColor.a = totalAlpha;

					} else {

						gl_FragColor = vec4( 0.0 );

					}

				}`}),this.setValues(e)}};function pr(o=1){let e="uint";return o>1&&(e="uvec"+o),`
		${e} sobolReverseBits( ${e} x ) {

			x = ( ( ( x & 0xaaaaaaaau ) >> 1 ) | ( ( x & 0x55555555u ) << 1 ) );
			x = ( ( ( x & 0xccccccccu ) >> 2 ) | ( ( x & 0x33333333u ) << 2 ) );
			x = ( ( ( x & 0xf0f0f0f0u ) >> 4 ) | ( ( x & 0x0f0f0f0fu ) << 4 ) );
			x = ( ( ( x & 0xff00ff00u ) >> 8 ) | ( ( x & 0x00ff00ffu ) << 8 ) );
			return ( ( x >> 16 ) | ( x << 16 ) );

		}

		${e} sobolHashCombine( uint seed, ${e} v ) {

			return seed ^ ( v + ${e}( ( seed << 6 ) + ( seed >> 2 ) ) );

		}

		${e} sobolLaineKarrasPermutation( ${e} x, ${e} seed ) {

			x += seed;
			x ^= x * 0x6c50b47cu;
			x ^= x * 0xb82f1e52u;
			x ^= x * 0xc7afe638u;
			x ^= x * 0x8d22f6e6u;
			return x;

		}

		${e} nestedUniformScrambleBase2( ${e} x, ${e} seed ) {

			x = sobolLaineKarrasPermutation( x, seed );
			x = sobolReverseBits( x );
			return x;

		}
	`}function gr(o=1){let e="uint",t="float",r="",n=".r",s="1u";return o>1&&(e="uvec"+o,t="vec"+o,r=o+"",o===2?(n=".rg",s="uvec2( 1u, 2u )"):o===3?(n=".rgb",s="uvec3( 1u, 2u, 3u )"):(n="",s="uvec4( 1u, 2u, 3u, 4u )")),`

		${t} sobol${r}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${t} sobol_pt = sobolGetTexturePoint( shuffled_index )${n};
			${e} result = ${e}( sobol_pt * 16777216.0 );

			${e} seed2 = sobolHashCombine( seed, ${s} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${t}( result >> 8 );

		}
	`}var vr=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${pr(1)}
	${pr(2)}
	${pr(3)}
	${pr(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,tn=`

	const uint SOBOL_DIRECTIONS_1[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0xa0000000u, 0xf0000000u,
		0x88000000u, 0xcc000000u, 0xaa000000u, 0xff000000u,
		0x80800000u, 0xc0c00000u, 0xa0a00000u, 0xf0f00000u,
		0x88880000u, 0xcccc0000u, 0xaaaa0000u, 0xffff0000u,
		0x80008000u, 0xc000c000u, 0xa000a000u, 0xf000f000u,
		0x88008800u, 0xcc00cc00u, 0xaa00aa00u, 0xff00ff00u,
		0x80808080u, 0xc0c0c0c0u, 0xa0a0a0a0u, 0xf0f0f0f0u,
		0x88888888u, 0xccccccccu, 0xaaaaaaaau, 0xffffffffu
	);

	const uint SOBOL_DIRECTIONS_2[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x60000000u, 0x90000000u,
		0xe8000000u, 0x5c000000u, 0x8e000000u, 0xc5000000u,
		0x68800000u, 0x9cc00000u, 0xee600000u, 0x55900000u,
		0x80680000u, 0xc09c0000u, 0x60ee0000u, 0x90550000u,
		0xe8808000u, 0x5cc0c000u, 0x8e606000u, 0xc5909000u,
		0x6868e800u, 0x9c9c5c00u, 0xeeee8e00u, 0x5555c500u,
		0x8000e880u, 0xc0005cc0u, 0x60008e60u, 0x9000c590u,
		0xe8006868u, 0x5c009c9cu, 0x8e00eeeeu, 0xc5005555u
	);

	const uint SOBOL_DIRECTIONS_3[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x20000000u, 0x50000000u,
		0xf8000000u, 0x74000000u, 0xa2000000u, 0x93000000u,
		0xd8800000u, 0x25400000u, 0x59e00000u, 0xe6d00000u,
		0x78080000u, 0xb40c0000u, 0x82020000u, 0xc3050000u,
		0x208f8000u, 0x51474000u, 0xfbea2000u, 0x75d93000u,
		0xa0858800u, 0x914e5400u, 0xdbe79e00u, 0x25db6d00u,
		0x58800080u, 0xe54000c0u, 0x79e00020u, 0xb6d00050u,
		0x800800f8u, 0xc00c0074u, 0x200200a2u, 0x50050093u
	);

	const uint SOBOL_DIRECTIONS_4[ 32 ] = uint[ 32 ](
		0x80000000u, 0x40000000u, 0x20000000u, 0xb0000000u,
		0xf8000000u, 0xdc000000u, 0x7a000000u, 0x9d000000u,
		0x5a800000u, 0x2fc00000u, 0xa1600000u, 0xf0b00000u,
		0xda880000u, 0x6fc40000u, 0x81620000u, 0x40bb0000u,
		0x22878000u, 0xb3c9c000u, 0xfb65a000u, 0xddb2d000u,
		0x78022800u, 0x9c0b3c00u, 0x5a0fb600u, 0x2d0ddb00u,
		0xa2878080u, 0xf3c9c040u, 0xdb65a020u, 0x6db2d0b0u,
		0x800228f8u, 0x400b3cdcu, 0x200fb67au, 0xb00ddb9du
	);

	uint getMaskedSobol( uint index, uint directions[ 32 ] ) {

		uint X = 0u;
		for ( int bit = 0; bit < 32; bit ++ ) {

			uint mask = ( index >> bit ) & 1u;
			X ^= mask * directions[ bit ];

		}
		return X;

	}

	vec4 generateSobolPoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			return vec4( 0.0 );

		}

		// NOTE: this sobol "direction" is also available but we can't write out 5 components
		// uint x = index & 0x00ffffffu;
		uint x = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_1 ) ) & 0x00ffffffu;
		uint y = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_2 ) ) & 0x00ffffffu;
		uint z = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_3 ) ) & 0x00ffffffu;
		uint w = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_4 ) ) & 0x00ffffffu;

		return vec4( x, y, z, w ) * SOBOL_FACTOR;

	}

`,rn=`

	// Seeds
	uniform sampler2D sobolTexture;
	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;

	uint sobolGetSeed( uint bounce, uint effect ) {

		return sobolHash(
			sobolHashCombine(
				sobolHashCombine(
					sobolHash( bounce ),
					sobolPixelIndex
				),
				effect
			)
		);

	}

	vec4 sobolGetTexturePoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			index = index % SOBOL_MAX_POINTS;

		}

		uvec2 dim = uvec2( textureSize( sobolTexture, 0 ).xy );
		uint y = index / dim.x;
		uint x = index - y * dim.x;
		vec2 uv = vec2( x, y ) / vec2( dim );
		return texture( sobolTexture, uv );

	}

	${gr(1)}
	${gr(2)}
	${gr(3)}
	${gr(4)}

`;var xi=class extends de{constructor(){super({blending:pe,uniforms:{resolution:{value:new V}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${vr}
				${tn}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}},xr=class{generate(e,t=256){let r=new be(t,t,{type:L,format:B,minFilter:z,magFilter:z,generateMipmaps:!1}),n=e.getRenderTarget();e.setRenderTarget(r);let s=new ae(new xi);return s.material.resolution.set(t,t),s.render(e),e.setRenderTarget(n),s.dispose(),r}};var yr=class extends zt{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}};var br=class{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof yr?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}};function Tr(o){let e=new Uint16Array(o.length);for(let t=0,r=o.length;t<r;++t)e[t]=re.toHalfFloat(o[t]);return e}function on(o,e,t=0,r=o.length){let n=t,s=t+r-1;for(;n<s;){let i=n+s>>1;o[i]<e?n=i+1:s=i}return n-t}function Vs(o,e,t){return .2126*o+.7152*e+.0722*t}function Ws(o,e=J){let t=o.clone();t.source=new Ni({...t.image});let{width:r,height:n,data:s}=t.image,i=s;if(t.type!==e){e===J?i=new Uint16Array(s.length):i=new Float32Array(s.length);let c;s instanceof Int8Array||s instanceof Int16Array||s instanceof Int32Array?c=2**(8*s.BYTES_PER_ELEMENT-1)-1:c=2**(8*s.BYTES_PER_ELEMENT)-1;for(let l=0,m=s.length;l<m;l++){let f=s[l];t.type===J&&(f=re.fromHalfFloat(s[l])),t.type!==L&&t.type!==J&&(f/=c),e===J&&(i[l]=re.toHalfFloat(f))}t.image.data=i,t.type=e}if(t.flipY){let c=i;i=i.slice();for(let l=0;l<n;l++)for(let m=0;m<r;m++){let f=n-l-1,u=4*(l*r+m),a=4*(f*r+m);i[a+0]=c[u+0],i[a+1]=c[u+1],i[a+2]=c[u+2],i[a+3]=c[u+3]}t.flipY=!1,t.image.data=i}return t}var wr=class{constructor(){let e=new W(Tr(new Float32Array([0,0,0,0])),1,1);e.type=J,e.format=B,e.minFilter=Z,e.magFilter=Z,e.wrapS=le,e.wrapT=le,e.generateMipmaps=!1,e.needsUpdate=!0;let t=new W(Tr(new Float32Array([0,1])),1,2);t.type=J,t.format=Ee,t.minFilter=Z,t.magFilter=Z,t.generateMipmaps=!1,t.needsUpdate=!0;let r=new W(Tr(new Float32Array([0,0,1,1])),2,2);r.type=J,r.format=Ee,r.minFilter=Z,r.magFilter=Z,r.generateMipmaps=!1,r.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=r,this.totalSum=0}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){let t=Ws(e);t.wrapS=le,t.wrapT=se;let{width:r,height:n,data:s}=t.image,i=new Float32Array(r*n),c=new Float32Array(r*n),l=new Float32Array(n),m=new Float32Array(n),f=0,u=0;for(let d=0;d<n;d++){let y=0;for(let v=0;v<r;v++){let p=d*r+v,b=re.fromHalfFloat(s[4*p+0]),x=re.fromHalfFloat(s[4*p+1]),w=re.fromHalfFloat(s[4*p+2]),S=Vs(b,x,w);y+=S,f+=S,i[p]=S,c[p]=y}if(y!==0)for(let v=d*r,p=d*r+r;v<p;v++)i[v]/=y,c[v]/=y;u+=y,l[d]=y,m[d]=u}if(u!==0)for(let d=0,y=l.length;d<y;d++)l[d]/=u,m[d]/=u;let a=new Uint16Array(n),h=new Uint16Array(r*n);for(let d=0;d<n;d++){let y=(d+1)/n,v=on(m,y);a[d]=re.toHalfFloat((v+.5)/n)}for(let d=0;d<n;d++)for(let y=0;y<r;y++){let v=d*r+y,p=(y+1)/r,b=on(c,p,d*r,r);h[v]=re.toHalfFloat((b+.5)/r)}this.dispose();let{marginalWeights:g,conditionalWeights:T}=this;g.image={width:n,height:1,data:a},g.needsUpdate=!0,T.image={width:r,height:n,data:h},T.needsUpdate=!0,this.totalSum=f,this.map=t}};var yi=6,Gs=0,qs=1,$s=2,Ys=3,js=4,ye=new C,ne=new C,nn=new H,lt=new Ei,sn=new C,ut=new C,Xs=new C(0,1,0),Sr=class{constructor(){let e=new W(new Float32Array(4),1,1);e.format=B,e.type=L,e.wrapS=se,e.wrapT=se,e.generateMipmaps=!1,e.minFilter=z,e.magFilter=z,this.tex=e,this.count=0}updateFrom(e,t=[]){let r=this.tex,n=Math.max(e.length*yi,1),s=Math.ceil(Math.sqrt(n));r.image.width!==s&&(r.dispose(),r.image.data=new Float32Array(s*s*4),r.image.width=s,r.image.height=s);let i=r.image.data;for(let l=0,m=e.length;l<m;l++){let f=e[l],u=l*yi*4,a=0;for(let g=0;g<yi*4;g++)i[u+g]=0;f.getWorldPosition(ne),i[u+a++]=ne.x,i[u+a++]=ne.y,i[u+a++]=ne.z;let h=Gs;if(f.isRectAreaLight&&f.isCircular?h=qs:f.isSpotLight?h=$s:f.isDirectionalLight?h=Ys:f.isPointLight&&(h=js),i[u+a++]=h,i[u+a++]=f.color.r,i[u+a++]=f.color.g,i[u+a++]=f.color.b,i[u+a++]=f.intensity,f.getWorldQuaternion(lt),f.isRectAreaLight)ye.set(f.width,0,0).applyQuaternion(lt),i[u+a++]=ye.x,i[u+a++]=ye.y,i[u+a++]=ye.z,a++,ne.set(0,f.height,0).applyQuaternion(lt),i[u+a++]=ne.x,i[u+a++]=ne.y,i[u+a++]=ne.z,i[u+a++]=ye.cross(ne).length()*(f.isCircular?Math.PI/4:1);else if(f.isSpotLight){let g=f.radius||0;sn.setFromMatrixPosition(f.matrixWorld),ut.setFromMatrixPosition(f.target.matrixWorld),nn.lookAt(sn,ut,Xs),lt.setFromRotationMatrix(nn),ye.set(1,0,0).applyQuaternion(lt),i[u+a++]=ye.x,i[u+a++]=ye.y,i[u+a++]=ye.z,a++,ne.set(0,1,0).applyQuaternion(lt),i[u+a++]=ne.x,i[u+a++]=ne.y,i[u+a++]=ne.z,i[u+a++]=Math.PI*g*g,i[u+a++]=g,i[u+a++]=f.decay,i[u+a++]=f.distance,i[u+a++]=Math.cos(f.angle),i[u+a++]=Math.cos(f.angle*(1-f.penumbra)),i[u+a++]=f.iesMap?t.indexOf(f.iesMap):-1}else if(f.isPointLight){let g=ye.setFromMatrixPosition(f.matrixWorld);i[u+a++]=g.x,i[u+a++]=g.y,i[u+a++]=g.z,a++,a+=4,a+=1,i[u+a++]=f.decay,i[u+a++]=f.distance}else if(f.isDirectionalLight){let g=ye.setFromMatrixPosition(f.matrixWorld),T=ne.setFromMatrixPosition(f.target.matrixWorld);ut.subVectors(g,T).normalize(),i[u+a++]=ut.x,i[u+a++]=ut.y,i[u+a++]=ut.z}}this.count=e.length;let c=at(i.buffer);return this.hash!==c?(this.hash=c,r.needsUpdate=!0,!0):!1}};function an(o,e,t,r,n){if(e>r)throw new Error;let s=o.length/e,i=o.constructor.BYTES_PER_ELEMENT*8,c=1;switch(o.constructor){case Uint8Array:case Uint16Array:case Uint32Array:c=2**i-1;break;case Int8Array:case Int16Array:case Int32Array:c=2**(i-1)-1;break}for(let l=0;l<s;l++){let m=4*l,f=e*l;for(let u=0;u<r;u++)t[n+m+u]=e>=u+1?o[f+u]/c:0}}var _r=class extends zi{constructor(){super(),this._textures=[],this.type=L,this.format=B,this.internalFormat="RGBA32F"}updateAttribute(e,t){let r=this._textures[e];r.updateFrom(t);let n=r.image,s=this.image;if(n.width!==s.width||n.height!==s.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");let{width:i,height:c,data:l}=s,f=i*c*4*e,u=t.itemSize;u===3&&(u=4),an(r.image.data,u,l,4,f),this.dispose(),this.needsUpdate=!0}setAttributes(e){let t=e[0].count,r=e.length;for(let u=0,a=r;u<a;u++)if(e[u].count!==t)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");let n=this._textures;for(;n.length<r;){let u=new st;n.push(u)}for(;n.length>r;)n.pop();for(let u=0,a=r;u<a;u++)n[u].updateFrom(e[u]);let i=n[0].image,c=this.image;(i.width!==c.width||i.height!==c.height||i.depth!==r)&&(c.width=i.width,c.height=i.height,c.depth=r,c.data=new Float32Array(c.width*c.height*c.depth*4));let{data:l,width:m,height:f}=c;for(let u=0,a=r;u<a;u++){let h=n[u],T=m*f*4*u,d=e[u].itemSize;d===3&&(d=4),an(h.image.data,d,l,4,T)}this.dispose(),this.needsUpdate=!0}};var Ar=class extends _r{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,r,n){this.setAttributes([e,t,r,n])}};function bi(o,e){return o.uuid<e.uuid?1:o.uuid>e.uuid?-1:0}function Ir(o){return`${o.source.uuid}:${o.colorSpace}`}function Qs(o){let e=new Set,t=[];for(let r=0,n=o.length;r<n;r++){let s=o[r],i=Ir(s);e.has(i)||(e.add(i),t.push(s))}return t}function cn(o){let e=o.map(r=>r.iesMap||null).filter(r=>r),t=new Set(e);return Array.from(t).sort(bi)}function ln(o){let e=new Set;for(let r=0,n=o.length;r<n;r++){let s=o[r];for(let i in s){let c=s[i];c&&c.isTexture&&e.add(c)}}let t=Array.from(e);return Qs(t).sort(bi)}function un(o){let e=[];return o.traverse(t=>{t.visible&&(t.isRectAreaLight||t.isSpotLight||t.isPointLight||t.isDirectionalLight)&&e.push(t)}),e.sort(bi)}var Fr=47,fn=Fr*4,Ti=class{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}},Rr=class extends W{constructor(){super(new Float32Array(4),1,1),this.format=B,this.type=L,this.wrapS=se,this.wrapT=se,this.minFilter=z,this.magFilter=z,this.generateMipmaps=!1,this.features=new Ti}updateFrom(e,t){function r(g,T,d=-1){if(T in g&&g[T]){let y=Ir(g[T]);return u[y]}else return d}function n(g,T,d){return T in g?g[T]:d}function s(g,T,d,y){let v=g[T]&&g[T].isTexture?g[T]:null;if(v){v.matrixAutoUpdate&&v.updateMatrix();let p=v.matrix.elements,b=0;d[y+b++]=p[0],d[y+b++]=p[3],d[y+b++]=p[6],b++,d[y+b++]=p[1],d[y+b++]=p[4],d[y+b++]=p[7],b++}return 8}let i=0,c=e.length*Fr,l=Math.ceil(Math.sqrt(c))||1,{image:m,features:f}=this,u={};for(let g=0,T=t.length;g<T;g++)u[Ir(t[g])]=g;m.width!==l&&(this.dispose(),m.data=new Float32Array(l*l*4),m.width=l,m.height=l);let a=m.data;f.reset();for(let g=0,T=e.length;g<T;g++){let d=e[g];if(d.isFogVolumeMaterial){f.setUsed("FOG");for(let p=0;p<fn;p++)a[i+p]=0;a[i+0+0]=d.color.r,a[i+0+1]=d.color.g,a[i+0+2]=d.color.b,a[i+8+3]=n(d,"emissiveIntensity",0),a[i+12+0]=d.emissive.r,a[i+12+1]=d.emissive.g,a[i+12+2]=d.emissive.b,a[i+52+1]=d.density,a[i+52+3]=0,a[i+56+2]=4,i+=fn;continue}a[i++]=d.color.r,a[i++]=d.color.g,a[i++]=d.color.b,a[i++]=r(d,"map"),a[i++]=n(d,"metalness",0),a[i++]=r(d,"metalnessMap"),a[i++]=n(d,"roughness",0),a[i++]=r(d,"roughnessMap"),a[i++]=n(d,"ior",1.5),a[i++]=n(d,"transmission",0),a[i++]=r(d,"transmissionMap"),a[i++]=n(d,"emissiveIntensity",0),"emissive"in d?(a[i++]=d.emissive.r,a[i++]=d.emissive.g,a[i++]=d.emissive.b):(a[i++]=0,a[i++]=0,a[i++]=0),a[i++]=r(d,"emissiveMap"),a[i++]=r(d,"normalMap"),"normalScale"in d?(a[i++]=d.normalScale.x,a[i++]=d.normalScale.y):(a[i++]=1,a[i++]=1),a[i++]=n(d,"clearcoat",0),a[i++]=r(d,"clearcoatMap"),a[i++]=n(d,"clearcoatRoughness",0),a[i++]=r(d,"clearcoatRoughnessMap"),a[i++]=r(d,"clearcoatNormalMap"),"clearcoatNormalScale"in d?(a[i++]=d.clearcoatNormalScale.x,a[i++]=d.clearcoatNormalScale.y):(a[i++]=1,a[i++]=1),i++,a[i++]=n(d,"sheen",0),"sheenColor"in d?(a[i++]=d.sheenColor.r,a[i++]=d.sheenColor.g,a[i++]=d.sheenColor.b):(a[i++]=0,a[i++]=0,a[i++]=0),a[i++]=r(d,"sheenColorMap"),a[i++]=n(d,"sheenRoughness",0),a[i++]=r(d,"sheenRoughnessMap"),a[i++]=r(d,"iridescenceMap"),a[i++]=r(d,"iridescenceThicknessMap"),a[i++]=n(d,"iridescence",0),a[i++]=n(d,"iridescenceIOR",1.3);let y=n(d,"iridescenceThicknessRange",[100,400]);a[i++]=y[0],a[i++]=y[1],"specularColor"in d?(a[i++]=d.specularColor.r,a[i++]=d.specularColor.g,a[i++]=d.specularColor.b):(a[i++]=1,a[i++]=1,a[i++]=1),a[i++]=r(d,"specularColorMap"),a[i++]=n(d,"specularIntensity",1),a[i++]=r(d,"specularIntensityMap");let v=n(d,"thickness",0)===0&&n(d,"attenuationDistance",1/0)===1/0;if(a[i++]=Number(v),i++,"attenuationColor"in d?(a[i++]=d.attenuationColor.r,a[i++]=d.attenuationColor.g,a[i++]=d.attenuationColor.b):(a[i++]=1,a[i++]=1,a[i++]=1),a[i++]=n(d,"attenuationDistance",1/0),a[i++]=r(d,"alphaMap"),a[i++]=d.opacity,a[i++]=d.alphaTest,!v&&d.transmission>0)a[i++]=0;else switch(d.side){case dt:a[i++]=1;break;case Mt:a[i++]=-1;break;case Ct:a[i++]=0;break}a[i++]=Number(n(d,"matte",!1)),a[i++]=Number(n(d,"castShadow",!0)),a[i++]=Number(d.vertexColors)|Number(d.flatShading)<<1,a[i++]=Number(d.transparent),i+=s(d,"map",a,i),i+=s(d,"metalnessMap",a,i),i+=s(d,"roughnessMap",a,i),i+=s(d,"transmissionMap",a,i),i+=s(d,"emissiveMap",a,i),i+=s(d,"normalMap",a,i),i+=s(d,"clearcoatMap",a,i),i+=s(d,"clearcoatNormalMap",a,i),i+=s(d,"clearcoatRoughnessMap",a,i),i+=s(d,"sheenColorMap",a,i),i+=s(d,"sheenRoughnessMap",a,i),i+=s(d,"iridescenceMap",a,i),i+=s(d,"iridescenceThicknessMap",a,i),i+=s(d,"specularColorMap",a,i),i+=s(d,"specularIntensityMap",a,i),i+=s(d,"alphaMap",a,i)}let h=at(a.buffer);return this.hash!==h?(this.hash=h,this.needsUpdate=!0,!0):!1}};var mn=new ge;function Ks(o){return o?`${o.uuid}:${o.version}`:null}function Zs(o,e){for(let t in e)t in o&&(o[t]=e[t])}var It=class extends Oi{constructor(e,t,r){let n={format:B,type:ht,minFilter:Z,magFilter:Z,wrapS:le,wrapT:le,generateMipmaps:!1,...r};super(e,t,1,n),Zs(this.texture,n),this.texture.setTextures=(...i)=>{this.setTextures(...i)},this.hashes=[null];let s=new ae(new wi);this.fsQuad=s}setTextures(e,t,r=this.width,n=this.height){let s=e.getRenderTarget(),i=e.toneMapping,c=e.getClearAlpha();e.getClearColor(mn);let l=t.length||1;(r!==this.width||n!==this.height||this.depth!==l)&&(this.setSize(r,n,l),this.hashes=new Array(l).fill(null)),e.setClearColor(0,0),e.toneMapping=Pi;let m=this.fsQuad,f=this.hashes,u=!1;for(let a=0,h=l;a<h;a++){let g=t[a],T=Ks(g);g&&(f[a]!==T||g.isWebGLRenderTarget)&&(g.matrixAutoUpdate=!1,g.matrix.identity(),m.material.map=g,e.setRenderTarget(this,a),m.render(e),g.updateMatrix(),g.matrixAutoUpdate=!0,f[a]=T,u=!0)}return m.material.map=null,e.setClearColor(mn,c),e.setRenderTarget(s),e.toneMapping=i,u}dispose(){super.dispose(),this.fsQuad.dispose()}},wi=class extends Ae{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				varying vec2 vUv;
				void main() {

					gl_FragColor = texture2D( map, vUv );

				}
			`})}};function Js(o,e=Math.random()){for(let t=o.length-1;t>0;t--){let r=Math.floor(e()*(t+1)),n=o[t];o[t]=o[r],o[r]=n}return o}var Pr=class{constructor(e,t,r=Math.random){let n=e**t,s=new Uint16Array(n),i=n;for(let c=0;c<n;c++)s[c]=c;this.samples=new Float32Array(t),this.strataCount=e,this.reset=function(){for(let c=0;c<n;c++)s[c]=c;i=0},this.reshuffle=function(){i=0},this.next=function(){let{samples:c}=this;i>=s.length&&(Js(s,r),this.reshuffle());let l=s[i++];for(let m=0;m<t;m++)c[m]=(l%e+r())/e,l=Math.floor(l/e);return c}}};var Mr=class{constructor(e,t,r=Math.random){let n=0;for(let l of t)n+=l;let s=new Float32Array(n),i=[],c=0;for(let l of t){let m=new Pr(e,l,r);m.samples=new Float32Array(s.buffer,c,m.samples.length),c+=m.samples.length*4,i.push(m)}this.samples=s,this.strataCount=e,this.next=function(){for(let l of i)l.next();return s},this.reshuffle=function(){for(let l of i)l.reshuffle()},this.reset=function(){for(let l of i)l.reset()}}};var Si=class{constructor(e=0){this.m=2147483648,this.a=1103515245,this.c=12345,this.seed=e}nextInt(){return this.seed=(this.a*this.seed+this.c)%this.m,this.seed}nextFloat(){return this.nextInt()/(this.m-1)}},Cr=class extends W{constructor(e=1,t=1,r=8){super(new Float32Array(1),1,1,B,L),this.minFilter=z,this.magFilter=z,this.strata=r,this.sampler=null,this.generator=new Si,this.stableNoise=!1,this.random=()=>this.stableNoise?this.generator.nextFloat():Math.random(),this.init(e,t,r)}init(e=this.image.height,t=this.image.width,r=this.strata){let{image:n}=this;if(n.width===t&&n.height===e&&this.sampler!==null)return;let s=new Array(e*t).fill(4),i=new Mr(r,s,this.random);n.width=t,n.height=e,n.data=i.samples,this.sampler=i,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}reset(){this.sampler.reset(),this.generator.seed=0}};function dn(o,e=Math.random){for(let t=o.length-1;t>0;t--){let r=~~((e()-1e-6)*t),n=o[t];o[t]=o[r],o[r]=n}}function hn(o,e){o.fill(0);for(let t=0;t<e;t++)o[t]=1}var Rt=class{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){let{score:e,binaryPattern:t}=this,r=1/0,n=-1;for(let s=0,i=t.length;s<i;s++){if(t[s]!==0)continue;let c=e[s];c<r&&(r=c,n=s)}return n}findCluster(){let{score:e,binaryPattern:t}=this,r=-1/0,n=-1;for(let s=0,i=t.length;s<i;s++){if(t[s]!==1)continue;let c=e[s];c>r&&(r=c,n=s)}return n}setSigma(e){if(e===this.sigma)return;let t=~~(Math.sqrt(20*e**2)+1),r=2*t+1,n=new Float32Array(r*r),s=e*e;for(let i=-t;i<=t;i++)for(let c=-t;c<=t;c++){let l=(t+c)*r+i+t,m=i*i+c*c;n[l]=Math.E**(-m/(2*s))}this.lookupTable=n,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){let{binaryPattern:e,score:t,size:r}=this;t.fill(0);for(let n=0,s=e.length;n<s;n++)if(e[n]===0){let i=~~(n/r),c=n-i*r;this.updateScore(c,i,1),e[n]=1}else e[n]=0}updateScore(e,t,r){let{size:n,score:s,lookupTable:i}=this,c=this.radius,l=2*c+1;for(let m=-c;m<=c;m++)for(let f=-c;f<=c;f++){let u=(c+f)*l+m+c,a=i[u],h=e+m;h=h<0?n+h:h%n;let g=t+f;g=g<0?n+g:g%n;let T=g*n+h;s[T]+=r*a}}addPointIndex(e){this.binaryPattern[e]=1;let t=this.size,r=~~(e/t),n=e-r*t;this.updateScore(n,r,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;let t=this.size,r=~~(e/t),n=e-r*t;this.updateScore(n,r,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}};var Dr=class{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new Rt(1),this.savedSamples=new Rt(1)}generate(){let{samples:e,savedSamples:t,sigma:r,majorityPointsRatio:n,size:s}=this;e.resize(s),e.setSigma(r);let i=Math.floor(s*s*n),c=e.binaryPattern;hn(c,i),dn(c,this.random);for(let u=0,a=c.length;u<a;u++)c[u]===1&&e.addPointIndex(u);for(;;){let u=e.findCluster();e.removePointIndex(u);let a=e.findVoid();if(u===a){e.addPointIndex(u);break}e.addPointIndex(a)}let l=new Uint32Array(s*s);t.copy(e);let m;for(m=e.count-1;m>=0;){let u=e.findCluster();e.removePointIndex(u),l[u]=m,m--}let f=s*s;for(m=t.count;m<f/2;){let u=t.findVoid();t.addPointIndex(u),l[u]=m,m++}for(t.invert();m<f;){let u=t.findCluster();t.removePointIndex(u),l[u]=m,m++}return{data:l,maxValue:f}}};function ea(o){return o>=3?4:o}function ta(o){switch(o){case 1:return Ee;case 2:return Et;default:return B}}var Br=class extends W{constructor(e=64,t=1){super(new Float32Array(4),1,1,B,L),this.minFilter=z,this.magFilter=z,this.size=e,this.channels=t,this.update()}update(){let e=this.channels,t=this.size,r=new Dr;r.channels=e,r.size=t;let n=ea(e),s=ta(n);(this.image.width!==t||s!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*n),this.format=s,this.dispose());let i=this.image.data;for(let c=0,l=e;c<l;c++){let m=r.generate(),f=m.data,u=m.maxValue;for(let a=0,h=f.length;a<h;a++){let g=f[a]/u;i[a*n+c]=g}}this.needsUpdate=!0}};var pn=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`;var gn=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`;var vn=`

	#define RECT_AREA_LIGHT_TYPE 0
	#define CIRC_AREA_LIGHT_TYPE 1
	#define SPOT_LIGHT_TYPE 2
	#define DIR_LIGHT_TYPE 3
	#define POINT_LIGHT_TYPE 4

	struct LightsInfo {

		sampler2D tex;
		uint count;

	};

	struct Light {

		vec3 position;
		int type;

		vec3 color;
		float intensity;

		vec3 u;
		vec3 v;
		float area;

		// spot light fields
		float radius;
		float near;
		float decay;
		float distance;
		float coneCos;
		float penumbraCos;
		int iesProfile;

	};

	Light readLightInfo( sampler2D tex, uint index ) {

		uint i = index * 6u;

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );

		Light l;
		l.position = s0.rgb;
		l.type = int( round( s0.a ) );

		l.color = s1.rgb;
		l.intensity = s1.a;

		l.u = s2.rgb;
		l.v = s3.rgb;
		l.area = s3.a;

		if ( l.type == SPOT_LIGHT_TYPE || l.type == POINT_LIGHT_TYPE ) {

			vec4 s4 = texelFetch1D( tex, i + 4u );
			vec4 s5 = texelFetch1D( tex, i + 5u );
			l.radius = s4.r;
			l.decay = s4.g;
			l.distance = s4.b;
			l.coneCos = s4.a;

			l.penumbraCos = s5.r;
			l.iesProfile = int( round( s5.g ) );

		} else {

			l.radius = 0.0;
			l.decay = 0.0;
			l.distance = 0.0;

			l.coneCos = 0.0;
			l.penumbraCos = 0.0;
			l.iesProfile = - 1;

		}

		return l;

	}

`;var xn=`

	struct Material {

		vec3 color;
		int map;

		float metalness;
		int metalnessMap;

		float roughness;
		int roughnessMap;

		float ior;
		float transmission;
		int transmissionMap;

		float emissiveIntensity;
		vec3 emissive;
		int emissiveMap;

		int normalMap;
		vec2 normalScale;

		float clearcoat;
		int clearcoatMap;
		int clearcoatNormalMap;
		vec2 clearcoatNormalScale;
		float clearcoatRoughness;
		int clearcoatRoughnessMap;

		int iridescenceMap;
		int iridescenceThicknessMap;
		float iridescence;
		float iridescenceIor;
		float iridescenceThicknessMinimum;
		float iridescenceThicknessMaximum;

		vec3 specularColor;
		int specularColorMap;

		float specularIntensity;
		int specularIntensityMap;
		bool thinFilm;

		vec3 attenuationColor;
		float attenuationDistance;

		int alphaMap;

		bool castShadow;
		float opacity;
		float alphaTest;

		float side;
		bool matte;

		float sheen;
		vec3 sheenColor;
		int sheenColorMap;
		float sheenRoughness;
		int sheenRoughnessMap;

		bool vertexColors;
		bool flatShading;
		bool transparent;
		bool fogVolume;

		mat3 mapTransform;
		mat3 metalnessMapTransform;
		mat3 roughnessMapTransform;
		mat3 transmissionMapTransform;
		mat3 emissiveMapTransform;
		mat3 normalMapTransform;
		mat3 clearcoatMapTransform;
		mat3 clearcoatNormalMapTransform;
		mat3 clearcoatRoughnessMapTransform;
		mat3 sheenColorMapTransform;
		mat3 sheenRoughnessMapTransform;
		mat3 iridescenceMapTransform;
		mat3 iridescenceThicknessMapTransform;
		mat3 specularColorMapTransform;
		mat3 specularIntensityMapTransform;
		mat3 alphaMapTransform;

	};

	mat3 readTextureTransform( sampler2D tex, uint index ) {

		mat3 textureTransform;

		vec4 row1 = texelFetch1D( tex, index );
		vec4 row2 = texelFetch1D( tex, index + 1u );

		textureTransform[0] = vec3(row1.r, row2.r, 0.0);
		textureTransform[1] = vec3(row1.g, row2.g, 0.0);
		textureTransform[2] = vec3(row1.b, row2.b, 1.0);

		return textureTransform;

	}

	Material readMaterialInfo( sampler2D tex, uint index ) {

		uint i = index * uint( MATERIAL_PIXELS );

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );
		vec4 s4 = texelFetch1D( tex, i + 4u );
		vec4 s5 = texelFetch1D( tex, i + 5u );
		vec4 s6 = texelFetch1D( tex, i + 6u );
		vec4 s7 = texelFetch1D( tex, i + 7u );
		vec4 s8 = texelFetch1D( tex, i + 8u );
		vec4 s9 = texelFetch1D( tex, i + 9u );
		vec4 s10 = texelFetch1D( tex, i + 10u );
		vec4 s11 = texelFetch1D( tex, i + 11u );
		vec4 s12 = texelFetch1D( tex, i + 12u );
		vec4 s13 = texelFetch1D( tex, i + 13u );
		vec4 s14 = texelFetch1D( tex, i + 14u );

		Material m;
		m.color = s0.rgb;
		m.map = int( round( s0.a ) );

		m.metalness = s1.r;
		m.metalnessMap = int( round( s1.g ) );
		m.roughness = s1.b;
		m.roughnessMap = int( round( s1.a ) );

		m.ior = s2.r;
		m.transmission = s2.g;
		m.transmissionMap = int( round( s2.b ) );
		m.emissiveIntensity = s2.a;

		m.emissive = s3.rgb;
		m.emissiveMap = int( round( s3.a ) );

		m.normalMap = int( round( s4.r ) );
		m.normalScale = s4.gb;

		m.clearcoat = s4.a;
		m.clearcoatMap = int( round( s5.r ) );
		m.clearcoatRoughness = s5.g;
		m.clearcoatRoughnessMap = int( round( s5.b ) );
		m.clearcoatNormalMap = int( round( s5.a ) );
		m.clearcoatNormalScale = s6.rg;

		m.sheen = s6.a;
		m.sheenColor = s7.rgb;
		m.sheenColorMap = int( round( s7.a ) );
		m.sheenRoughness = s8.r;
		m.sheenRoughnessMap = int( round( s8.g ) );

		m.iridescenceMap = int( round( s8.b ) );
		m.iridescenceThicknessMap = int( round( s8.a ) );
		m.iridescence = s9.r;
		m.iridescenceIor = s9.g;
		m.iridescenceThicknessMinimum = s9.b;
		m.iridescenceThicknessMaximum = s9.a;

		m.specularColor = s10.rgb;
		m.specularColorMap = int( round( s10.a ) );

		m.specularIntensity = s11.r;
		m.specularIntensityMap = int( round( s11.g ) );
		m.thinFilm = bool( s11.b );

		m.attenuationColor = s12.rgb;
		m.attenuationDistance = s12.a;

		m.alphaMap = int( round( s13.r ) );

		m.opacity = s13.g;
		m.alphaTest = s13.b;
		m.side = s13.a;

		m.matte = bool( s14.r );
		m.castShadow = bool( s14.g );
		m.vertexColors = bool( int( s14.b ) & 1 );
		m.flatShading = bool( int( s14.b ) & 2 );
		m.fogVolume = bool( int( s14.b ) & 4 );
		m.transparent = bool( s14.a );

		uint firstTextureTransformIdx = i + 15u;

		// mat3( 1.0 ) is an identity matrix
		m.mapTransform = m.map == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx );
		m.metalnessMapTransform = m.metalnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 2u );
		m.roughnessMapTransform = m.roughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 4u );
		m.transmissionMapTransform = m.transmissionMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 6u );
		m.emissiveMapTransform = m.emissiveMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 8u );
		m.normalMapTransform = m.normalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 10u );
		m.clearcoatMapTransform = m.clearcoatMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 12u );
		m.clearcoatNormalMapTransform = m.clearcoatNormalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 14u );
		m.clearcoatRoughnessMapTransform = m.clearcoatRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 16u );
		m.sheenColorMapTransform = m.sheenColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 18u );
		m.sheenRoughnessMapTransform = m.sheenRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 20u );
		m.iridescenceMapTransform = m.iridescenceMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 22u );
		m.iridescenceThicknessMapTransform = m.iridescenceThicknessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 24u );
		m.specularColorMapTransform = m.specularColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 26u );
		m.specularIntensityMapTransform = m.specularIntensityMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 28u );
		m.alphaMapTransform = m.alphaMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 30u );

		return m;

	}

`;var yn=`

	struct SurfaceRecord {

		// surface type
		bool volumeParticle;

		// geometry
		vec3 faceNormal;
		bool frontFace;
		vec3 normal;
		mat3 normalBasis;
		mat3 normalInvBasis;

		// cached properties
		float eta;
		float f0;

		// material
		float roughness;
		float filteredRoughness;
		float metalness;
		vec3 color;
		vec3 emission;

		// transmission
		float ior;
		float transmission;
		bool thinFilm;
		vec3 attenuationColor;
		float attenuationDistance;

		// clearcoat
		vec3 clearcoatNormal;
		mat3 clearcoatBasis;
		mat3 clearcoatInvBasis;
		float clearcoat;
		float clearcoatRoughness;
		float filteredClearcoatRoughness;

		// sheen
		float sheen;
		vec3 sheenColor;
		float sheenRoughness;

		// iridescence
		float iridescence;
		float iridescenceIor;
		float iridescenceThickness;

		// specular
		vec3 specularColor;
		float specularIntensity;
	};

	struct ScatterRecord {
		float specularPdf;
		float pdf;
		vec3 direction;
		vec3 color;
	};

`;var bn=`

	// samples the the given environment map in the given direction
	vec3 sampleEquirectColor( sampler2D envMap, vec3 direction ) {

		return texture2D( envMap, equirectDirectionToUv( direction ) ).rgb;

	}

	// gets the pdf of the given direction to sample
	float equirectDirectionPdf( vec3 direction ) {

		vec2 uv = equirectDirectionToUv( direction );
		float theta = uv.y * PI;
		float sinTheta = sin( theta );
		if ( sinTheta == 0.0 ) {

			return 0.0;

		}

		return 1.0 / ( 2.0 * PI * PI * sinTheta );

	}

	// samples the color given env map with CDF and returns the pdf of the direction
	float sampleEquirect( vec3 direction, inout vec3 color ) {

		float totalSum = envMapInfo.totalSum;
		if ( totalSum == 0.0 ) {

			color = vec3( 0.0 );
			return 1.0;

		}

		vec2 uv = equirectDirectionToUv( direction );
		color = texture2D( envMapInfo.map, uv ).rgb;

		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}

	// samples a direction of the envmap with color and retrieves pdf
	float sampleEquirectProbability( vec2 r, inout vec3 color, inout vec3 direction ) {

		// sample env map cdf
		float v = texture2D( envMapInfo.marginalWeights, vec2( r.x, 0.0 ) ).x;
		float u = texture2D( envMapInfo.conditionalWeights, vec2( r.y, v ) ).x;
		vec2 uv = vec2( u, v );

		vec3 derivedDirection = equirectUvToDirection( uv );
		direction = derivedDirection;
		color = texture2D( envMapInfo.map, uv ).rgb;

		float totalSum = envMapInfo.totalSum;
		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}
`;var Tn=`

	float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

		return smoothstep( coneCosine, penumbraCosine, angleCosine );

	}

	float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), EPSILON );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	}

	float getPhotometricAttenuation( sampler2DArray iesProfiles, int iesProfile, vec3 posToLight, vec3 lightDir, vec3 u, vec3 v ) {

		float cosTheta = dot( posToLight, lightDir );
		float angle = acos( cosTheta ) / PI;

		return texture2D( iesProfiles, vec3( angle, 0.0, iesProfile ) ).r;

	}

	struct LightRecord {

		float dist;
		vec3 direction;
		float pdf;
		vec3 emission;
		int type;

	};

	bool intersectLightAtIndex( sampler2D lights, vec3 rayOrigin, vec3 rayDirection, uint l, inout LightRecord lightRec ) {

		bool didHit = false;
		Light light = readLightInfo( lights, l );

		vec3 u = light.u;
		vec3 v = light.v;

		// check for backface
		vec3 normal = normalize( cross( u, v ) );
		if ( dot( normal, rayDirection ) > 0.0 ) {

			u *= 1.0 / dot( u, u );
			v *= 1.0 / dot( v, v );

			float dist;

			// MIS / light intersection is not supported for punctual lights.
			if(
				( light.type == RECT_AREA_LIGHT_TYPE && intersectsRectangle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) ) ||
				( light.type == CIRC_AREA_LIGHT_TYPE && intersectsCircle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) )
			) {

				float cosTheta = dot( rayDirection, normal );
				didHit = true;
				lightRec.dist = dist;
				lightRec.pdf = ( dist * dist ) / ( light.area * cosTheta );
				lightRec.emission = light.color * light.intensity;
				lightRec.direction = rayDirection;
				lightRec.type = light.type;

			}

		}

		return didHit;

	}

	LightRecord randomAreaLightSample( Light light, vec3 rayOrigin, vec2 ruv ) {

		vec3 randomPos;
		if( light.type == RECT_AREA_LIGHT_TYPE ) {

			// rectangular area light
			randomPos = light.position + light.u * ( ruv.x - 0.5 ) + light.v * ( ruv.y - 0.5 );

		} else if( light.type == CIRC_AREA_LIGHT_TYPE ) {

			// circular area light
			float r = 0.5 * sqrt( ruv.x );
			float theta = ruv.y * 2.0 * PI;
			float x = r * cos( theta );
			float y = r * sin( theta );

			randomPos = light.position + light.u * x + light.v * y;

		}

		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );
		vec3 direction = toLight / dist;
		vec3 lightNormal = normalize( cross( light.u, light.v ) );

		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.emission = light.color * light.intensity;
		lightRec.dist = dist;
		lightRec.direction = direction;

		// TODO: the denominator is potentially zero
		lightRec.pdf = lightDistSq / ( light.area * dot( direction, lightNormal ) );

		return lightRec;

	}

	LightRecord randomSpotLightSample( Light light, sampler2DArray iesProfiles, vec3 rayOrigin, vec2 ruv ) {

		float radius = light.radius * sqrt( ruv.x );
		float theta = ruv.y * 2.0 * PI;
		float x = radius * cos( theta );
		float y = radius * sin( theta );

		vec3 u = light.u;
		vec3 v = light.v;
		vec3 normal = normalize( cross( u, v ) );

		float angle = acos( light.coneCos );
		float angleTan = tan( angle );
		float startDistance = light.radius / max( angleTan, EPSILON );

		vec3 randomPos = light.position - normal * startDistance + u * x + v * y;
		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );

		vec3 direction = toLight / max( dist, EPSILON );
		float cosTheta = dot( direction, normal );

		float spotAttenuation = light.iesProfile != - 1 ?
			getPhotometricAttenuation( iesProfiles, light.iesProfile, direction, normal, u, v ) :
			getSpotAttenuation( light.coneCos, light.penumbraCos, cosTheta );

		float distanceAttenuation = getDistanceAttenuation( dist, light.distance, light.decay );
		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.dist = dist;
		lightRec.direction = direction;
		lightRec.emission = light.color * light.intensity * distanceAttenuation * spotAttenuation;
		lightRec.pdf = 1.0;

		return lightRec;

	}

	LightRecord randomLightSample( sampler2D lights, sampler2DArray iesProfiles, uint lightCount, vec3 rayOrigin, vec3 ruv ) {

		LightRecord result;

		// pick a random light
		uint l = uint( ruv.x * float( lightCount ) );
		Light light = readLightInfo( lights, l );

		if ( light.type == SPOT_LIGHT_TYPE ) {

			result = randomSpotLightSample( light, iesProfiles, rayOrigin, ruv.yz );

		} else if ( light.type == POINT_LIGHT_TYPE ) {

			vec3 lightRay = light.u - rayOrigin;
			float lightDist = length( lightRay );
			float cutoffDistance = light.distance;
			float distanceFalloff = 1.0 / max( pow( lightDist, light.decay ), 0.01 );
			if ( cutoffDistance > 0.0 ) {

				distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDist / cutoffDistance ) ) );

			}

			LightRecord rec;
			rec.direction = normalize( lightRay );
			rec.dist = length( lightRay );
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity * distanceFalloff;
			rec.type = light.type;
			result = rec;

		} else if ( light.type == DIR_LIGHT_TYPE ) {

			LightRecord rec;
			rec.dist = 1e10;
			rec.direction = light.u;
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity;
			rec.type = light.type;

			result = rec;

		} else {

			// sample the light
			result = randomAreaLightSample( light, rayOrigin, ruv.yz );

		}

		return result;

	}

`;var wn=`

	vec3 sampleHemisphere( vec3 n, vec2 uv ) {

		// https://www.rorydriscoll.com/2009/01/07/better-sampling/
		// https://graphics.pixar.com/library/OrthonormalB/paper.pdf
		float sign = n.z == 0.0 ? 1.0 : sign( n.z );
		float a = - 1.0 / ( sign + n.z );
		float b = n.x * n.y * a;
		vec3 b1 = vec3( 1.0 + sign * n.x * n.x * a, sign * b, - sign * n.x );
		vec3 b2 = vec3( b, sign + n.y * n.y * a, - n.y );

		float r = sqrt( uv.x );
		float theta = 2.0 * PI * uv.y;
		float x = r * cos( theta );
		float y = r * sin( theta );
		return x * b1 + y * b2 + sqrt( 1.0 - uv.x ) * n;

	}

	vec2 sampleTriangle( vec2 a, vec2 b, vec2 c, vec2 r ) {

		// get the edges of the triangle and the diagonal across the
		// center of the parallelogram
		vec2 e1 = a - b;
		vec2 e2 = c - b;
		vec2 diag = normalize( e1 + e2 );

		// pick the point in the parallelogram
		if ( r.x + r.y > 1.0 ) {

			r = vec2( 1.0 ) - r;

		}

		return e1 * r.x + e2 * r.y;

	}

	vec2 sampleCircle( vec2 uv ) {

		float angle = 2.0 * PI * uv.x;
		float radius = sqrt( uv.y );
		return vec2( cos( angle ), sin( angle ) ) * radius;

	}

	vec3 sampleSphere( vec2 uv ) {

		float u = ( uv.x - 0.5 ) * 2.0;
		float t = uv.y * PI * 2.0;
		float f = sqrt( 1.0 - u * u );

		return vec3( f * cos( t ), f * sin( t ), u );

	}

	vec2 sampleRegularPolygon( int sides, vec3 uvw ) {

		sides = max( sides, 3 );

		vec3 r = uvw;
		float anglePerSegment = 2.0 * PI / float( sides );
		float segment = floor( float( sides ) * r.x );

		float angle1 = anglePerSegment * segment;
		float angle2 = angle1 + anglePerSegment;
		vec2 a = vec2( sin( angle1 ), cos( angle1 ) );
		vec2 b = vec2( 0.0, 0.0 );
		vec2 c = vec2( sin( angle2 ), cos( angle2 ) );

		return sampleTriangle( a, b, c, r.yz );

	}

	// samples an aperture shape with the given number of sides. 0 means circle
	vec2 sampleAperture( int blades, vec3 uvw ) {

		return blades == 0 ?
			sampleCircle( uvw.xy ) :
			sampleRegularPolygon( blades, uvw );

	}


`;var Sn=`

	bool totalInternalReflection( float cosTheta, float eta ) {

		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > 1.0;

	}

	// https://google.github.io/filament/Filament.md.html#materialsystem/diffusebrdf
	float schlickFresnel( float cosine, float f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0, vec3 f90 ) {

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	float dielectricFresnel( float cosThetaI, float eta ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float ni = eta;
		float nt = 1.0;

		// Check for total internal reflection
		float sinThetaISq = 1.0f - cosThetaI * cosThetaI;
		float sinThetaTSq = eta * eta * sinThetaISq;
		if( sinThetaTSq >= 1.0 ) {

			return 1.0;

		}

		float sinThetaT = sqrt( sinThetaTSq );

		float cosThetaT = sqrt( max( 0.0, 1.0f - sinThetaT * sinThetaT ) );
		float rParallel = ( ( nt * cosThetaI ) - ( ni * cosThetaT ) ) / ( ( nt * cosThetaI ) + ( ni * cosThetaT ) );
		float rPerpendicular = ( ( ni * cosThetaI ) - ( nt * cosThetaT ) ) / ( ( ni * cosThetaI ) + ( nt * cosThetaT ) );
		return ( rParallel * rParallel + rPerpendicular * rPerpendicular ) / 2.0;

	}

	// https://raytracing.github.io/books/RayTracingInOneWeekend.html#dielectrics/schlickapproximation
	float iorRatioToF0( float eta ) {

		return pow( ( 1.0 - eta ) / ( 1.0 + eta ), 2.0 );

	}

	vec3 evaluateFresnel( float cosTheta, float eta, vec3 f0, vec3 f90 ) {

		if ( totalInternalReflection( cosTheta, eta ) ) {

			return f90;

		}

		return schlickFresnel( cosTheta, f0, f90 );

	}

	// TODO: disney fresnel was removed and replaced with this fresnel function to better align with
	// the glTF but is causing blown out pixels. Should be revisited
	// float evaluateFresnelWeight( float cosTheta, float eta, float f0 ) {

	// 	if ( totalInternalReflection( cosTheta, eta ) ) {

	// 		return 1.0;

	// 	}

	// 	return schlickFresnel( cosTheta, f0 );

	// }

	// https://schuttejoe.github.io/post/disneybsdf/
	float disneyFresnel( vec3 wo, vec3 wi, vec3 wh, float f0, float eta, float metalness ) {

		float dotHV = dot( wo, wh );
		if ( totalInternalReflection( dotHV, eta ) ) {

			return 1.0;

		}

		float dotHL = dot( wi, wh );
		float dielectricFresnel = dielectricFresnel( abs( dotHV ), eta );
		float metallicFresnel = schlickFresnel( dotHL, f0 );

		return mix( dielectricFresnel, metallicFresnel, metalness );

	}

`;var _n=`

	// Fast arccos approximation used to remove banding artifacts caused by numerical errors in acos.
	// This is a cubic Lagrange interpolating polynomial for x = [-1, -1/2, 0, 1/2, 1].
	// For more information see: https://github.com/gkjohnson/three-gpu-pathtracer/pull/171#issuecomment-1152275248
	float acosApprox( float x ) {

		x = clamp( x, -1.0, 1.0 );
		return ( - 0.69813170079773212 * x * x - 0.87266462599716477 ) * x + 1.5707963267948966;

	}

	// An acos with input values bound to the range [-1, 1].
	float acosSafe( float x ) {

		return acos( clamp( x, -1.0, 1.0 ) );

	}

	float saturateCos( float val ) {

		return clamp( val, 0.001, 1.0 );

	}

	float square( float t ) {

		return t * t;

	}

	vec2 square( vec2 t ) {

		return t * t;

	}

	vec3 square( vec3 t ) {

		return t * t;

	}

	vec4 square( vec4 t ) {

		return t * t;

	}

	vec2 rotateVector( vec2 v, float t ) {

		float ac = cos( t );
		float as = sin( t );
		return vec2(
			v.x * ac - v.y * as,
			v.x * as + v.y * ac
		);

	}

	// forms a basis with the normal vector as Z
	mat3 getBasisFromNormal( vec3 normal ) {

		vec3 other;
		if ( abs( normal.x ) > 0.5 ) {

			other = vec3( 0.0, 1.0, 0.0 );

		} else {

			other = vec3( 1.0, 0.0, 0.0 );

		}

		vec3 ortho = normalize( cross( normal, other ) );
		vec3 ortho2 = normalize( cross( normal, ortho ) );
		return mat3( ortho2, ortho, normal );

	}

`;var An=`

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the rectangle on that same plane.
	// Plane intersection: https://lousodrome.net/blog/light/2020/07/03/intersection-of-a-ray-and-a-plane/
	bool intersectsRectangle( vec3 center, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( center - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 p = rayOrigin + rayDirection * t;
			vec3 vi = p - center;

			// check if p falls inside the rectangle
			float a1 = dot( u, vi );
			if ( abs( a1 ) <= 0.5 ) {

				float a2 = dot( v, vi );
				if ( abs( a2 ) <= 0.5 ) {

					dist = t;
					return true;

				}

			}

		}

		return false;

	}

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the circle on that same plane. See above URL for a description of the plane intersection algorithm.
	bool intersectsCircle( vec3 position, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( position - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 hit = rayOrigin + rayDirection * t;
			vec3 vi = hit - position;

			float a1 = dot( u, vi );
			float a2 = dot( v, vi );

			if( length( vec2( a1, a2 ) ) <= 0.5 ) {

				dist = t;
				return true;

			}

		}

		return false;

	}

`;var In=`

	// add texel fetch functions for texture arrays
	vec4 texelFetch1D( sampler2DArray tex, int layer, uint index ) {

		uint width = uint( textureSize( tex, 0 ).x );
		uvec2 uv;
		uv.x = index % width;
		uv.y = index / width;

		return texelFetch( tex, ivec3( uv, layer ), 0 );

	}

	vec4 textureSampleBarycoord( sampler2DArray tex, int layer, vec3 barycoord, uvec3 faceIndices ) {

		return
			barycoord.x * texelFetch1D( tex, layer, faceIndices.x ) +
			barycoord.y * texelFetch1D( tex, layer, faceIndices.y ) +
			barycoord.z * texelFetch1D( tex, layer, faceIndices.z );

	}

`;var ft=`

	// TODO: possibly this should be renamed something related to material or path tracing logic

	#ifndef RAY_OFFSET
	#define RAY_OFFSET 1e-4
	#endif

	// adjust the hit point by the surface normal by a factor of some offset and the
	// maximum component-wise value of the current point to accommodate floating point
	// error as values increase.
	vec3 stepRayOrigin( vec3 rayOrigin, vec3 rayDirection, vec3 offset, float dist ) {

		vec3 point = rayOrigin + rayDirection * dist;
		vec3 absPoint = abs( point );
		float maxPoint = max( absPoint.x, max( absPoint.y, absPoint.z ) );
		return point + offset * ( maxPoint + 1.0 ) * RAY_OFFSET;

	}

	// https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md#attenuation
	vec3 transmissionAttenuation( float dist, vec3 attColor, float attDist ) {

		vec3 ot = - log( attColor ) / attDist;
		return exp( - ot * dist );

	}

	vec3 getHalfVector( vec3 wi, vec3 wo, float eta ) {

		// get the half vector - assuming if the light incident vector is on the other side
		// of the that it's transmissive.
		vec3 h;
		if ( wi.z > 0.0 ) {

			h = normalize( wi + wo );

		} else {

			// Scale by the ior ratio to retrieve the appropriate half vector
			// From Section 2.2 on computing the transmission half vector:
			// https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf
			h = normalize( wi + wo * eta );

		}

		h *= sign( h.z );
		return h;

	}

	vec3 getHalfVector( vec3 a, vec3 b ) {

		return normalize( a + b );

	}

	// The discrepancy between interpolated surface normal and geometry normal can cause issues when a ray
	// is cast that is on the top side of the geometry normal plane but below the surface normal plane. If
	// we find a ray like that we ignore it to avoid artifacts.
	// This function returns if the direction is on the same side of both planes.
	bool isDirectionValid( vec3 direction, vec3 surfaceNormal, vec3 geometryNormal ) {

		bool aboveSurfaceNormal = dot( direction, surfaceNormal ) > 0.0;
		bool aboveGeometryNormal = dot( direction, geometryNormal ) > 0.0;
		return aboveSurfaceNormal == aboveGeometryNormal;

	}

	// ray sampling x and z are swapped to align with expected background view
	vec2 equirectDirectionToUv( vec3 direction ) {

		// from Spherical.setFromCartesianCoords
		vec2 uv = vec2( atan( direction.z, direction.x ), acos( direction.y ) );
		uv /= vec2( 2.0 * PI, PI );

		// apply adjustments to get values in range [0, 1] and y right side up
		uv.x += 0.5;
		uv.y = 1.0 - uv.y;
		return uv;

	}

	vec3 equirectUvToDirection( vec2 uv ) {

		// undo above adjustments
		uv.x -= 0.5;
		uv.y = 1.0 - uv.y;

		// from Vector3.setFromSphericalCoords
		float theta = uv.x * 2.0 * PI;
		float phi = uv.y * PI;

		float sinPhi = sin( phi );

		return vec3( sinPhi * cos( theta ), cos( phi ), sinPhi * sin( theta ) );

	}

	// power heuristic for multiple importance sampling
	float misHeuristic( float a, float b ) {

		float aa = a * a;
		float bb = b * b;
		return aa / ( aa + bb );

	}

	// tentFilter from Peter Shirley's 'Realistic Ray Tracing (2nd Edition)' book, pg. 60
	// erichlof/THREE.js-PathTracing-Renderer/
	float tentFilter( float x ) {

		return x < 0.5 ? sqrt( 2.0 * x ) - 1.0 : 1.0 - sqrt( 2.0 - ( 2.0 * x ) );

	}
`;var _i=`

	// https://www.shadertoy.com/view/wltcRS
	uvec4 WHITE_NOISE_SEED;

	void rng_initialize( vec2 p, int frame ) {

		// white noise seed
		WHITE_NOISE_SEED = uvec4( p, uint( frame ), uint( p.x ) + uint( p.y ) );

	}

	// https://www.pcg-random.org/
	void pcg4d( inout uvec4 v ) {

		v = v * 1664525u + 1013904223u;
		v.x += v.y * v.w;
		v.y += v.z * v.x;
		v.z += v.x * v.y;
		v.w += v.y * v.z;
		v = v ^ ( v >> 16u );
		v.x += v.y*v.w;
		v.y += v.z*v.x;
		v.z += v.x*v.y;
		v.w += v.y*v.z;

	}

	// returns [ 0, 1 ]
	float pcgRand() {

		pcg4d( WHITE_NOISE_SEED );
		return float( WHITE_NOISE_SEED.x ) / float( 0xffffffffu );

	}

	vec2 pcgRand2() {

		pcg4d( WHITE_NOISE_SEED );
		return vec2( WHITE_NOISE_SEED.xy ) / float(0xffffffffu);

	}

	vec3 pcgRand3() {

		pcg4d( WHITE_NOISE_SEED );
		return vec3( WHITE_NOISE_SEED.xyz ) / float( 0xffffffffu );

	}

	vec4 pcgRand4() {

		pcg4d( WHITE_NOISE_SEED );
		return vec4( WHITE_NOISE_SEED ) / float( 0xffffffffu );

	}
`;var Rn=`

	uniform sampler2D stratifiedTexture;
	uniform sampler2D stratifiedOffsetTexture;

	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;
	vec4 pixelSeed = vec4( 0 );

	vec4 rand4( int v ) {

		ivec2 uv = ivec2( v, sobolBounceIndex );
		vec4 stratifiedSample = texelFetch( stratifiedTexture, uv, 0 );
		return fract( stratifiedSample + pixelSeed.r ); // blue noise + stratified samples

	}

	vec3 rand3( int v ) {

		return rand4( v ).xyz;

	}

	vec2 rand2( int v ) {

		return rand4( v ).xy;

	}

	float rand( int v ) {

		return rand4( v ).x;

	}

	void rng_initialize( vec2 screenCoord, int frame ) {

		// tile the small noise texture across the entire screen
		ivec2 noiseSize = ivec2( textureSize( stratifiedOffsetTexture, 0 ) );
		ivec2 pixel = ivec2( screenCoord.xy ) % noiseSize;
		vec2 pixelWidth = 1.0 / vec2( noiseSize );
		vec2 uv = vec2( pixel ) * pixelWidth + pixelWidth * 0.5;

		// note that using "texelFetch" here seems to break Android for some reason
		pixelSeed = texture( stratifiedOffsetTexture, uv );

	}

`;var Fn=`

	// diffuse
	float diffuseEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float fl = schlickFresnel( wi.z, 0.0 );
		float fv = schlickFresnel( wo.z, 0.0 );

		float metalFactor = ( 1.0 - surf.metalness );
		float transFactor = ( 1.0 - surf.transmission );
		float rr = 0.5 + 2.0 * surf.roughness * fl * fl;
		float retro = rr * ( fl + fv + fl * fv * ( rr - 1.0f ) );
		float lambert = ( 1.0f - 0.5f * fl ) * ( 1.0f - 0.5f * fv );

		// TODO: subsurface approx?

		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		color = ( 1.0 - F ) * transFactor * metalFactor * wi.z * surf.color * ( retro + lambert ) / PI;

		return wi.z / PI;

	}

	vec3 diffuseDirection( vec3 wo, SurfaceRecord surf ) {

		vec3 lightDirection = sampleSphere( rand2( 11 ) );
		lightDirection.z += 1.0;
		lightDirection = normalize( lightDirection );

		return lightDirection;

	}

	// specular
	float specularEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// if roughness is set to 0 then D === NaN which results in black pixels
		float metalness = surf.metalness;
		float roughness = surf.filteredRoughness;

		float eta = surf.eta;
		float f0 = surf.f0;

		vec3 f0Color = mix( f0 * surf.specularColor * surf.specularIntensity, surf.color, surf.metalness );
		vec3 f90Color = vec3( mix( surf.specularIntensity, 1.0, surf.metalness ) );
		vec3 F = evaluateFresnel( dot( wo, wh ), eta, f0Color, f90Color );

		vec3 iridescenceF = evalIridescence( 1.0, surf.iridescenceIor, dot( wi, wh ), surf.iridescenceThickness, f0Color );
		F = mix( F, iridescenceF,  surf.iridescence );

		// PDF
		// See 14.1.1 Microfacet BxDFs in https://www.pbr-book.org/
		float incidentTheta = acos( wo.z );
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );
		float ggxPdf = D * G1 * max( 0.0, abs( dot( wo, wh ) ) ) / abs ( wo.z );

		color = wi.z * F * G * D / ( 4.0 * abs( wi.z * wo.z ) );
		return ggxPdf / ( 4.0 * dot( wo, wh ) );

	}

	vec3 specularDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 12 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}


	// transmission
	/*
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// See section 4.2 in https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;
		bool thinFilm = surf.thinFilm;

		color = surf.transmission * surf.color;

		float denom = pow( eta * dot( wi, wh ) + dot( wo, wh ), 2.0 );
		return ggxPDF( wo, wh, filteredRoughness ) / denom;

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;

		// sample ggx vndf distribution which gives a new normal
		vec3 halfVector = ggxDirection(
			wo,
			vec2( filteredRoughness ),
			rand2( 13 )
		);

		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );
		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}

		return normalize( lightDirection );

	}
	*/

	// TODO: This is just using a basic cosine-weighted specular distribution with an
	// incorrect PDF value at the moment. Update it to correctly use a GGX distribution
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		color = surf.transmission * surf.color;

		// PDF
		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		// float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		// if ( F >= 1.0 ) {

		// 	return 0.0;

		// }

		// return 1.0 / ( 1.0 - F );

		// reverted to previous to transmission. The above was causing black pixels
		float eta = surf.eta;
		float f0 = surf.f0;
		float cosTheta = min( wo.z, 1.0 );
		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		float reflectance = schlickFresnel( cosTheta, f0 );
		bool cannotRefract = eta * sinTheta > 1.0;
		if ( cannotRefract ) {

			return 0.0;

		}

		return 1.0 / ( 1.0 - reflectance );

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float roughness = surf.filteredRoughness;
		float eta = surf.eta;
		vec3 halfVector = normalize( vec3( 0.0, 0.0, 1.0 ) + sampleSphere( rand2( 13 ) ) * roughness );
		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );

		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}
		return normalize( lightDirection );

	}

	// clearcoat
	float clearcoatEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		float ior = 1.5;
		float f0 = iorRatioToF0( ior );
		bool frontFace = surf.frontFace;
		float roughness = surf.filteredClearcoatRoughness;

		float eta = frontFace ? 1.0 / ior : ior;
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float F = schlickFresnel( dot( wi, wh ), f0 );

		float fClearcoat = F * D * G / ( 4.0 * abs( wi.z * wo.z ) );
		color = color * ( 1.0 - surf.clearcoat * F ) + fClearcoat * surf.clearcoat * wi.z;

		// PDF
		// See equation (27) in http://jcgt.org/published/0003/02/03/
		return ggxPDF( wo, wh, roughness ) / ( 4.0 * dot( wi, wh ) );

	}

	vec3 clearcoatDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredClearcoatRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 14 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}

	// sheen
	vec3 sheenColor( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf ) {

		float cosThetaO = saturateCos( wo.z );
		float cosThetaI = saturateCos( wi.z );
		float cosThetaH = wh.z;

		float D = velvetD( cosThetaH, surf.sheenRoughness );
		float G = velvetG( cosThetaO, cosThetaI, surf.sheenRoughness );

		// See equation (1) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
		vec3 color = surf.sheenColor;
		color *= D * G / ( 4.0 * abs( cosThetaO * cosThetaI ) );
		color *= wi.z;

		return color;

	}

	// bsdf
	void getLobeWeights(
		vec3 wo, vec3 wi, vec3 wh, vec3 clearcoatWo, SurfaceRecord surf,
		inout float diffuseWeight, inout float specularWeight, inout float transmissionWeight, inout float clearcoatWeight
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;
		// float fEstimate = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float fEstimate = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );

		float transSpecularProb = mix( max( 0.25, fEstimate ), 1.0, metalness );
		float diffSpecularProb = 0.5 + 0.5 * metalness;

		diffuseWeight = ( 1.0 - transmission ) * ( 1.0 - diffSpecularProb );
		specularWeight = transmission * transSpecularProb + ( 1.0 - transmission ) * diffSpecularProb;
		transmissionWeight = transmission * ( 1.0 - transSpecularProb );
		clearcoatWeight = surf.clearcoat * schlickFresnel( clearcoatWo.z, 0.04 );

		float totalWeight = diffuseWeight + specularWeight + transmissionWeight + clearcoatWeight;
		diffuseWeight /= totalWeight;
		specularWeight /= totalWeight;
		transmissionWeight /= totalWeight;
		clearcoatWeight /= totalWeight;
	}

	float bsdfEval(
		vec3 wo, vec3 clearcoatWo, vec3 wi, vec3 clearcoatWi, SurfaceRecord surf,
		float diffuseWeight, float specularWeight, float transmissionWeight, float clearcoatWeight, inout float specularPdf, inout vec3 color
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;

		float spdf = 0.0;
		float dpdf = 0.0;
		float tpdf = 0.0;
		float cpdf = 0.0;
		color = vec3( 0.0 );

		vec3 halfVector = getHalfVector( wi, wo, surf.eta );

		// diffuse
		if ( diffuseWeight > 0.0 && wi.z > 0.0 ) {

			dpdf = diffuseEval( wo, wi, halfVector, surf, color );
			color *= 1.0 - surf.transmission;

		}

		// ggx specular
		if ( specularWeight > 0.0 && wi.z > 0.0 ) {

			vec3 outColor;
			spdf = specularEval( wo, wi, getHalfVector( wi, wo ), surf, outColor );
			color += outColor;

		}

		// transmission
		if ( transmissionWeight > 0.0 && wi.z < 0.0 ) {

			tpdf = transmissionEval( wo, wi, halfVector, surf, color );

		}

		// sheen
		color *= mix( 1.0, sheenAlbedoScaling( wo, wi, surf ), surf.sheen );
		color += sheenColor( wo, wi, halfVector, surf ) * surf.sheen;

		// clearcoat
		if ( clearcoatWi.z >= 0.0 && clearcoatWeight > 0.0 ) {

			vec3 clearcoatHalfVector = getHalfVector( clearcoatWo, clearcoatWi );
			cpdf = clearcoatEval( clearcoatWo, clearcoatWi, clearcoatHalfVector, surf, color );

		}

		float pdf =
			dpdf * diffuseWeight
			+ spdf * specularWeight
			+ tpdf * transmissionWeight
			+ cpdf * clearcoatWeight;

		// retrieve specular rays for the shadows flag
		specularPdf = spdf * specularWeight + cpdf * clearcoatWeight;

		return pdf;

	}

	float bsdfResult( vec3 worldWo, vec3 worldWi, SurfaceRecord surf, inout vec3 color ) {

		if ( surf.volumeParticle ) {

			color = surf.color / ( 4.0 * PI );
			return 1.0 / ( 4.0 * PI );

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 wi = normalize( surf.normalInvBasis * worldWi );

		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		vec3 clearcoatWi = normalize( surf.clearcoatInvBasis * worldWi );

		vec3 wh = getHalfVector( wo, wi, surf.eta );
		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		getLobeWeights( wo, wi, wh, clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float specularPdf;
		return bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, specularPdf, color );

	}

	ScatterRecord bsdfSample( vec3 worldWo, SurfaceRecord surf ) {

		if ( surf.volumeParticle ) {

			ScatterRecord sampleRec;
			sampleRec.specularPdf = 0.0;
			sampleRec.pdf = 1.0 / ( 4.0 * PI );
			sampleRec.direction = sampleSphere( rand2( 16 ) );
			sampleRec.color = surf.color / ( 4.0 * PI );
			return sampleRec;

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		mat3 normalBasis = surf.normalBasis;
		mat3 invBasis = surf.normalInvBasis;
		mat3 clearcoatNormalBasis = surf.clearcoatBasis;
		mat3 clearcoatInvBasis = surf.clearcoatInvBasis;

		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		// using normal and basically-reflected ray since we don't have proper half vector here
		getLobeWeights( wo, wo, vec3( 0, 0, 1 ), clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float pdf[4];
		pdf[0] = diffuseWeight;
		pdf[1] = specularWeight;
		pdf[2] = transmissionWeight;
		pdf[3] = clearcoatWeight;

		float cdf[4];
		cdf[0] = pdf[0];
		cdf[1] = pdf[1] + cdf[0];
		cdf[2] = pdf[2] + cdf[1];
		cdf[3] = pdf[3] + cdf[2];

		if( cdf[3] != 0.0 ) {

			float invMaxCdf = 1.0 / cdf[3];
			cdf[0] *= invMaxCdf;
			cdf[1] *= invMaxCdf;
			cdf[2] *= invMaxCdf;
			cdf[3] *= invMaxCdf;

		} else {

			cdf[0] = 1.0;
			cdf[1] = 0.0;
			cdf[2] = 0.0;
			cdf[3] = 0.0;

		}

		vec3 wi;
		vec3 clearcoatWi;

		float r = rand( 15 );
		if ( r <= cdf[0] ) { // diffuse

			wi = diffuseDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[1] ) { // specular

			wi = specularDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[2] ) { // transmission / refraction

			wi = transmissionDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[3] ) { // clearcoat

			clearcoatWi = clearcoatDirection( clearcoatWo, surf );
			wi = normalize( invBasis * normalize( clearcoatNormalBasis * clearcoatWi ) );

		}

		ScatterRecord result;
		result.pdf = bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, result.specularPdf, result.color );
		result.direction = normalize( surf.normalBasis * wi );

		return result;

	}

`;var Pn=`

	// returns the hit distance given the material density
	float intersectFogVolume( Material material, float u ) {

		// https://raytracing.github.io/books/RayTracingTheNextWeek.html#volumes/constantdensitymediums
		return material.opacity == 0.0 ? INFINITY : ( - 1.0 / material.opacity ) * log( u );

	}

	ScatterRecord sampleFogVolume( SurfaceRecord surf, vec2 uv ) {

		ScatterRecord sampleRec;
		sampleRec.specularPdf = 0.0;
		sampleRec.pdf = 1.0 / ( 2.0 * PI );
		sampleRec.direction = sampleSphere( uv );
		sampleRec.color = surf.color;
		return sampleRec;

	}

`;var Mn=`

	// The GGX functions provide sampling and distribution information for normals as output so
	// in order to get probability of scatter direction the half vector must be computed and provided.
	// [0] https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf
	// [1] https://hal.archives-ouvertes.fr/hal-01509746/document
	// [2] http://jcgt.org/published/0007/04/01/
	// [4] http://jcgt.org/published/0003/02/03/

	// trowbridge-reitz === GGX === GTR

	vec3 ggxDirection( vec3 incidentDir, vec2 roughness, vec2 uv ) {

		// TODO: try GGXVNDF implementation from reference [2], here. Needs to update ggxDistribution
		// function below, as well

		// Implementation from reference [1]
		// stretch view
		vec3 V = normalize( vec3( roughness * incidentDir.xy, incidentDir.z ) );

		// orthonormal basis
		vec3 T1 = ( V.z < 0.9999 ) ? normalize( cross( V, vec3( 0.0, 0.0, 1.0 ) ) ) : vec3( 1.0, 0.0, 0.0 );
		vec3 T2 = cross( T1, V );

		// sample point with polar coordinates (r, phi)
		float a = 1.0 / ( 1.0 + V.z );
		float r = sqrt( uv.x );
		float phi = ( uv.y < a ) ? uv.y / a * PI : PI + ( uv.y - a ) / ( 1.0 - a ) * PI;
		float P1 = r * cos( phi );
		float P2 = r * sin( phi ) * ( ( uv.y < a ) ? 1.0 : V.z );

		// compute normal
		vec3 N = P1 * T1 + P2 * T2 + V * sqrt( max( 0.0, 1.0 - P1 * P1 - P2 * P2 ) );

		// unstretch
		N = normalize( vec3( roughness * N.xy, max( 0.0, N.z ) ) );

		return N;

	}

	// Below are PDF and related functions for use in a Monte Carlo path tracer
	// as specified in Appendix B of the following paper
	// See equation (34) from reference [0]
	float ggxLamda( float theta, float roughness ) {

		float tanTheta = tan( theta );
		float tanTheta2 = tanTheta * tanTheta;
		float alpha2 = roughness * roughness;

		float numerator = - 1.0 + sqrt( 1.0 + alpha2 * tanTheta2 );
		return numerator / 2.0;

	}

	// See equation (34) from reference [0]
	float ggxShadowMaskG1( float theta, float roughness ) {

		return 1.0 / ( 1.0 + ggxLamda( theta, roughness ) );

	}

	// See equation (125) from reference [4]
	float ggxShadowMaskG2( vec3 wi, vec3 wo, float roughness ) {

		float incidentTheta = acos( wi.z );
		float scatterTheta = acos( wo.z );
		return 1.0 / ( 1.0 + ggxLamda( incidentTheta, roughness ) + ggxLamda( scatterTheta, roughness ) );

	}

	// See equation (33) from reference [0]
	float ggxDistribution( vec3 halfVector, float roughness ) {

		float a2 = roughness * roughness;
		a2 = max( EPSILON, a2 );
		float cosTheta = halfVector.z;
		float cosTheta4 = pow( cosTheta, 4.0 );

		if ( cosTheta == 0.0 ) return 0.0;

		float theta = acosSafe( halfVector.z );
		float tanTheta = tan( theta );
		float tanTheta2 = pow( tanTheta, 2.0 );

		float denom = PI * cosTheta4 * pow( a2 + tanTheta2, 2.0 );
		return ( a2 / denom );

	}

	// See equation (3) from reference [2]
	float ggxPDF( vec3 wi, vec3 halfVector, float roughness ) {

		float incidentTheta = acos( wi.z );
		float D = ggxDistribution( halfVector, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );

		return D * G1 * max( 0.0, dot( wi, halfVector ) ) / wi.z;

	}

`;var Cn=`

	// XYZ to sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	vec3 fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 iorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float iorToFresnel0( float transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ) );

	}

	// Fresnel equations for dielectric/dielectric interfaces. See https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;

		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - square( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * square( phase ) );
		xyz /= 1.0685e-7;

		vec3 srgb = XYZ_TO_REC709 * xyz;
		return srgb;

	}

	// See Section 4. Analytic Spectral Integration, A Practical Extension to Microfacet Theory for the Modeling of Varying Iridescence, https://hal.archives-ouvertes.fr/hal-01518344/document
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIor -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIor = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );

		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = square( outsideIOR / iridescenceIor ) * ( 1.0 - square( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = iorToFresnel0( iridescenceIor, outsideIOR );
		float R12 = schlickFresnel( cosTheta1, R0 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIor < outsideIOR ) {

			phi12 = PI;

		}

		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = iorToFresnel0( baseIOR, iridescenceIor );
		vec3 R23 = schlickFresnel( cosTheta2, R1 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[0] < iridescenceIor ) {

			phi23[ 0 ] = PI;

		}

		if ( baseIOR[1] < iridescenceIor ) {

			phi23[ 1 ] = PI;

		}

		if ( baseIOR[2] < iridescenceIor ) {

			phi23[ 2 ] = PI;

		}

		// Phase shift
		float OPD = 2.0 * iridescenceIor * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = square( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

`;var Dn=`

	// See equation (2) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetD( float cosThetaH, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		float invAlpha = 1.0 / alpha;

		float sqrCosThetaH = cosThetaH * cosThetaH;
		float sinThetaH = max( 1.0 - sqrCosThetaH, 0.001 );

		return ( 2.0 + invAlpha ) * pow( sinThetaH, 0.5 * invAlpha ) / ( 2.0 * PI );

	}

	float velvetParamsInterpolate( int i, float oneMinusAlphaSquared ) {

		const float p0[5] = float[5]( 25.3245, 3.32435, 0.16801, -1.27393, -4.85967 );
		const float p1[5] = float[5]( 21.5473, 3.82987, 0.19823, -1.97760, -4.32054 );

		return mix( p1[i], p0[i], oneMinusAlphaSquared );

	}

	float velvetL( float x, float alpha ) {

		float oneMinusAlpha = 1.0 - alpha;
		float oneMinusAlphaSquared = oneMinusAlpha * oneMinusAlpha;

		float a = velvetParamsInterpolate( 0, oneMinusAlphaSquared );
		float b = velvetParamsInterpolate( 1, oneMinusAlphaSquared );
		float c = velvetParamsInterpolate( 2, oneMinusAlphaSquared );
		float d = velvetParamsInterpolate( 3, oneMinusAlphaSquared );
		float e = velvetParamsInterpolate( 4, oneMinusAlphaSquared );

		return a / ( 1.0 + b * pow( abs( x ), c ) ) + d * x + e;

	}

	// See equation (3) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetLambda( float cosTheta, float alpha ) {

		return abs( cosTheta ) < 0.5 ? exp( velvetL( cosTheta, alpha ) ) : exp( 2.0 * velvetL( 0.5, alpha ) - velvetL( 1.0 - cosTheta, alpha ) );

	}

	// See Section 3, Shadowing Term, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetG( float cosThetaO, float cosThetaI, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		return 1.0 / ( 1.0 + velvetLambda( cosThetaO, alpha ) + velvetLambda( cosThetaI, alpha ) );

	}

	float directionalAlbedoSheen( float cosTheta, float alpha ) {

		cosTheta = saturate( cosTheta );

		float c = 1.0 - cosTheta;
		float c3 = c * c * c;

		return 0.65584461 * c3 + 1.0 / ( 4.16526551 + exp( -7.97291361 * sqrt( alpha ) + 6.33516894 ) );

	}

	float sheenAlbedoScaling( vec3 wo, vec3 wi, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );
		float eWi = directionalAlbedoSheen( saturateCos( wi.z ), alpha );

		return min( 1.0 - maxSheenColor * eWo, 1.0 - maxSheenColor * eWi );

	}

	// See Section 5, Layering, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float sheenAlbedoScaling( vec3 wo, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );

		return 1.0 - maxSheenColor * eWo;

	}

`;var Bn=`

#ifndef FOG_CHECK_ITERATIONS
#define FOG_CHECK_ITERATIONS 30
#endif

// returns whether the given material is a fog material or not
bool isMaterialFogVolume( sampler2D materials, uint materialIndex ) {

	uint i = materialIndex * uint( MATERIAL_PIXELS );
	vec4 s14 = texelFetch1D( materials, i + 14u );
	return bool( int( s14.b ) & 4 );

}

// returns true if we're within the first fog volume we hit
bool bvhIntersectFogVolumeHit(
	vec3 rayOrigin, vec3 rayDirection,
	usampler2D materialIndexAttribute, sampler2D materials,
	inout Material material
) {

	material.fogVolume = false;

	for ( int i = 0; i < FOG_CHECK_ITERATIONS; i ++ ) {

		// find nearest hit
		uvec4 faceIndices = uvec4( 0u );
		vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
		vec3 barycoord = vec3( 0.0 );
		float side = 1.0;
		float dist = 0.0;
		bool hit = bvhIntersectFirstHit( bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist );
		if ( hit ) {

			// if it's a fog volume return whether we hit the front or back face
			uint materialIndex = uTexelFetch1D( materialIndexAttribute, faceIndices.x ).r;
			if ( isMaterialFogVolume( materials, materialIndex ) ) {

				material = readMaterialInfo( materials, materialIndex );
				return side == - 1.0;

			} else {

				// move the ray forward
				rayOrigin = stepRayOrigin( rayOrigin, rayDirection, - faceNormal, dist );

			}

		} else {

			return false;

		}

	}

	return false;

}

`;var En=`

	// step through multiple surface hits and accumulate color attenuation based on transmissive surfaces
	// returns true if a solid surface was hit
	bool attenuateHit(
		RenderState state,
		Ray ray, float rayDist,
		out vec3 color
	) {

		// store the original bounce index so we can reset it after
		uint originalBounceIndex = sobolBounceIndex;

		int traversals = state.traversals;
		int transmissiveTraversals = state.transmissiveTraversals;
		bool isShadowRay = state.isShadowRay;
		Material fogMaterial = state.fogMaterial;

		vec3 startPoint = ray.origin;

		// hit results
		SurfaceHit surfaceHit;

		color = vec3( 1.0 );

		bool result = true;
		for ( int i = 0; i < traversals; i ++ ) {

			sobolBounceIndex ++;

			int hitType = traceScene( ray, fogMaterial, surfaceHit );

			if ( hitType == FOG_HIT ) {

				result = true;
				break;

			} else if ( hitType == SURFACE_HIT ) {

				float totalDist = distance( startPoint, ray.origin + ray.direction * surfaceHit.dist );
				if ( totalDist > rayDist ) {

					result = false;
					break;

				}

				// TODO: attenuate the contribution based on the PDF of the resulting ray including refraction values
				// Should be able to work using the material BSDF functions which will take into account specularity, etc.
				// TODO: should we account for emissive surfaces here?

				uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
				Material material = readMaterialInfo( materials, materialIndex );

				// adjust the ray to the new surface
				bool isEntering = surfaceHit.side == 1.0;
				ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

				#if FEATURE_FOG

				if ( material.fogVolume ) {

					fogMaterial = material;
					fogMaterial.fogVolume = surfaceHit.side == 1.0;
					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;
					continue;

				}

				#endif

				if ( ! material.castShadow && isShadowRay ) {

					continue;

				}

				vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
				vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

				// albedo
				vec4 albedo = vec4( material.color, material.opacity );
				if ( material.map != - 1 ) {

					vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
					albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

				}

				if ( material.vertexColors ) {

					albedo *= vertexColor;

				}

				// alphaMap
				if ( material.alphaMap != - 1 ) {

					vec3 uvPrime = material.alphaMapTransform * vec3( uv, 1 );
					albedo.a *= texture2D( textures, vec3( uvPrime.xy, material.alphaMap ) ).x;

				}

				// transmission
				float transmission = material.transmission;
				if ( material.transmissionMap != - 1 ) {

					vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
					transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

				}

				// metalness
				float metalness = material.metalness;
				if ( material.metalnessMap != - 1 ) {

					vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
					metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

				}

				float alphaTest = material.alphaTest;
				bool useAlphaTest = alphaTest != 0.0;
				float transmissionFactor = ( 1.0 - metalness ) * transmission;
				if (
					transmissionFactor < rand( 9 ) && ! (
						// material sidedness
						material.side != 0.0 && surfaceHit.side == material.side

						// alpha test
						|| useAlphaTest && albedo.a < alphaTest

						// opacity
						|| material.transparent && ! useAlphaTest && albedo.a < rand( 10 )
					)
				) {

					result = true;
					break;

				}

				if ( surfaceHit.side == 1.0 && isEntering ) {

					// only attenuate by surface color on the way in
					color *= mix( vec3( 1.0 ), albedo.rgb, transmissionFactor );

				} else if ( surfaceHit.side == - 1.0 ) {

					// attenuate by medium once we hit the opposite side of the model
					color *= transmissionAttenuation( surfaceHit.dist, material.attenuationColor, material.attenuationDistance );

				}

				bool isTransmissiveRay = dot( ray.direction, surfaceHit.faceNormal * surfaceHit.side ) < 0.0;
				if ( ( isTransmissiveRay || isEntering ) && transmissiveTraversals > 0 ) {

					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;

				}

			} else {

				result = false;
				break;

			}

		}

		// reset the bounce index
		sobolBounceIndex = originalBounceIndex;
		return result;

	}

`;var Ln=`

	vec3 ndcToRayOrigin( vec2 coord ) {

		vec4 rayOrigin4 = cameraWorldMatrix * invProjectionMatrix * vec4( coord, - 1.0, 1.0 );
		return rayOrigin4.xyz / rayOrigin4.w;
	}

	Ray getCameraRay() {

		vec2 ssd = vec2( 1.0 ) / resolution;

		// Jitter the camera ray by finding a uv coordinate at a random sample
		// around this pixel's UV coordinate for AA
		vec2 ruv = rand2( 0 );
		vec2 jitteredUv = vUv + vec2( tentFilter( ruv.x ) * ssd.x, tentFilter( ruv.y ) * ssd.y );
		Ray ray;

		#if CAMERA_TYPE == 2

			// Equirectangular projection
			vec4 rayDirection4 = vec4( equirectUvToDirection( jitteredUv ), 0.0 );
			vec4 rayOrigin4 = vec4( 0.0, 0.0, 0.0, 1.0 );

			rayDirection4 = cameraWorldMatrix * rayDirection4;
			rayOrigin4 = cameraWorldMatrix * rayOrigin4;

			ray.direction = normalize( rayDirection4.xyz );
			ray.origin = rayOrigin4.xyz / rayOrigin4.w;

		#else

			// get [- 1, 1] normalized device coordinates
			vec2 ndc = 2.0 * jitteredUv - vec2( 1.0 );
			ray.origin = ndcToRayOrigin( ndc );

			#if CAMERA_TYPE == 1

				// Orthographic projection
				ray.direction = ( cameraWorldMatrix * vec4( 0.0, 0.0, - 1.0, 0.0 ) ).xyz;
				ray.direction = normalize( ray.direction );

			#else

				// Perspective projection
				ray.direction = normalize( mat3( cameraWorldMatrix ) * ( invProjectionMatrix * vec4( ndc, 0.0, 1.0 ) ).xyz );

			#endif

		#endif

		#if FEATURE_DOF
		{

			// depth of field
			vec3 focalPoint = ray.origin + normalize( ray.direction ) * physicalCamera.focusDistance;

			// get the aperture sample
			// if blades === 0 then we assume a circle
			vec3 shapeUVW= rand3( 1 );
			int blades = physicalCamera.apertureBlades;
			float anamorphicRatio = physicalCamera.anamorphicRatio;
			vec2 apertureSample = sampleAperture( blades, shapeUVW );
			apertureSample *= physicalCamera.bokehSize * 0.5 * 1e-3;

			// rotate the aperture shape
			apertureSample =
				rotateVector( apertureSample, physicalCamera.apertureRotation ) *
				saturate( vec2( anamorphicRatio, 1.0 / anamorphicRatio ) );

			// create the new ray
			ray.origin += ( cameraWorldMatrix * vec4( apertureSample, 0.0, 0.0 ) ).xyz;
			ray.direction = focalPoint - ray.origin;

		}
		#endif

		ray.direction = normalize( ray.direction );

		return ray;

	}

`;var Nn=`

	vec3 directLightContribution( vec3 worldWo, SurfaceRecord surf, RenderState state, vec3 rayOrigin ) {

		vec3 result = vec3( 0.0 );

		// uniformly pick a light or environment map
		if( lightsDenom != 0.0 && rand( 5 ) < float( lights.count ) / lightsDenom ) {

			// sample a light or environment
			LightRecord lightRec = randomLightSample( lights.tex, iesProfiles, lights.count, rayOrigin, rand3( 6 ) );

			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, lightRec.direction ) < 0.0;
			if ( isSampleBelowSurface ) {

				lightRec.pdf = 0.0;

			}

			// check if a ray could even reach the light area
			Ray lightRay;
			lightRay.origin = rayOrigin;
			lightRay.direction = lightRec.direction;
			vec3 attenuatedColor;
			if (
				lightRec.pdf > 0.0 &&
				isDirectionValid( lightRec.direction, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, lightRay, lightRec.dist, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float lightMaterialPdf = bsdfResult( worldWo, lightRec.direction, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( lightMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					float lightPdf = lightRec.pdf / lightsDenom;
					float misWeight = lightRec.type == SPOT_LIGHT_TYPE || lightRec.type == DIR_LIGHT_TYPE || lightRec.type == POINT_LIGHT_TYPE ? 1.0 : misHeuristic( lightPdf, lightMaterialPdf );
					result = attenuatedColor * lightRec.emission * state.throughputColor * sampleColor * misWeight / lightPdf;

				}

			}

		} else if ( envMapInfo.totalSum != 0.0 && environmentIntensity != 0.0 ) {

			// find a sample in the environment map to include in the contribution
			vec3 envColor, envDirection;
			float envPdf = sampleEquirectProbability( rand2( 7 ), envColor, envDirection );
			envDirection = invEnvRotation3x3 * envDirection;

			// this env sampling is not set up for transmissive sampling and yields overly bright
			// results so we ignore the sample in this case.
			// TODO: this should be improved but how? The env samples could traverse a few layers?
			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, envDirection ) < 0.0;
			if ( isSampleBelowSurface ) {

				envPdf = 0.0;

			}

			// check if a ray could even reach the surface
			Ray envRay;
			envRay.origin = rayOrigin;
			envRay.direction = envDirection;
			vec3 attenuatedColor;
			if (
				envPdf > 0.0 &&
				isDirectionValid( envDirection, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, envRay, INFINITY, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float envMaterialPdf = bsdfResult( worldWo, envDirection, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( envMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					envPdf /= lightsDenom;
					float misWeight = misHeuristic( envPdf, envMaterialPdf );
					result = attenuatedColor * environmentIntensity * envColor * state.throughputColor * sampleColor * misWeight / envPdf;

				}

			}

		}

		// Function changed to have a single return statement to potentially help with crashes on Mac OS.
		// See issue #470
		return result;

	}

`;var zn=`

	#define SKIP_SURFACE 0
	#define HIT_SURFACE 1
	int getSurfaceRecord(
		Material material, SurfaceHit surfaceHit, sampler2DArray attributesArray,
		float accumulatedRoughness,
		inout SurfaceRecord surf
	) {

		if ( material.fogVolume ) {

			vec3 normal = vec3( 0, 0, 1 );

			SurfaceRecord fogSurface;
			fogSurface.volumeParticle = true;
			fogSurface.color = material.color;
			fogSurface.emission = material.emissiveIntensity * material.emissive;
			fogSurface.normal = normal;
			fogSurface.faceNormal = normal;
			fogSurface.clearcoatNormal = normal;

			surf = fogSurface;
			return HIT_SURFACE;

		}

		// uv coord for textures
		vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
		vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

		// albedo
		vec4 albedo = vec4( material.color, material.opacity );
		if ( material.map != - 1 ) {

			vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
			albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

		}

		if ( material.vertexColors ) {

			albedo *= vertexColor;

		}

		// alphaMap
		if ( material.alphaMap != - 1 ) {

			vec3 uvPrime = material.alphaMapTransform * vec3( uv, 1 );
			albedo.a *= texture2D( textures, vec3( uvPrime.xy, material.alphaMap ) ).x;

		}

		// possibly skip this sample if it's transparent, alpha test is enabled, or we hit the wrong material side
		// and it's single sided.
		// - alpha test is disabled when it === 0
		// - the material sidedness test is complicated because we want light to pass through the back side but still
		// be able to see the front side. This boolean checks if the side we hit is the front side on the first ray
		// and we're rendering the other then we skip it. Do the opposite on subsequent bounces to get incoming light.
		float alphaTest = material.alphaTest;
		bool useAlphaTest = alphaTest != 0.0;
		if (
			// material sidedness
			material.side != 0.0 && surfaceHit.side != material.side

			// alpha test
			|| useAlphaTest && albedo.a < alphaTest

			// opacity
			|| material.transparent && ! useAlphaTest && albedo.a < rand( 3 )
		) {

			return SKIP_SURFACE;

		}

		// fetch the interpolated smooth normal
		vec3 normal = normalize( textureSampleBarycoord(
			attributesArray,
			ATTR_NORMAL,
			surfaceHit.barycoord,
			surfaceHit.faceIndices.xyz
		).xyz );

		// roughness
		float roughness = material.roughness;
		if ( material.roughnessMap != - 1 ) {

			vec3 uvPrime = material.roughnessMapTransform * vec3( uv, 1 );
			roughness *= texture2D( textures, vec3( uvPrime.xy, material.roughnessMap ) ).g;

		}

		// metalness
		float metalness = material.metalness;
		if ( material.metalnessMap != - 1 ) {

			vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
			metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

		}

		// emission
		vec3 emission = material.emissiveIntensity * material.emissive;
		if ( material.emissiveMap != - 1 ) {

			vec3 uvPrime = material.emissiveMapTransform * vec3( uv, 1 );
			emission *= texture2D( textures, vec3( uvPrime.xy, material.emissiveMap ) ).xyz;

		}

		// transmission
		float transmission = material.transmission;
		if ( material.transmissionMap != - 1 ) {

			vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
			transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

		}

		// normal
		if ( material.flatShading ) {

			// if we're rendering a flat shaded object then use the face normals - the face normal
			// is provided based on the side the ray hits the mesh so flip it to align with the
			// interpolated vertex normals.
			normal = surfaceHit.faceNormal * surfaceHit.side;

		}

		vec3 baseNormal = normal;
		if ( material.normalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( normal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, normal );

				vec3 uvPrime = material.normalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.normalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.normalScale;
				normal = vTBN * texNormal;

			}

		}

		normal *= surfaceHit.side;

		// clearcoat
		float clearcoat = material.clearcoat;
		if ( material.clearcoatMap != - 1 ) {

			vec3 uvPrime = material.clearcoatMapTransform * vec3( uv, 1 );
			clearcoat *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatMap ) ).r;

		}

		// clearcoatRoughness
		float clearcoatRoughness = material.clearcoatRoughness;
		if ( material.clearcoatRoughnessMap != - 1 ) {

			vec3 uvPrime = material.clearcoatRoughnessMapTransform * vec3( uv, 1 );
			clearcoatRoughness *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatRoughnessMap ) ).g;

		}

		// clearcoatNormal
		vec3 clearcoatNormal = baseNormal;
		if ( material.clearcoatNormalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( clearcoatNormal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );

				vec3 uvPrime = material.clearcoatNormalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.clearcoatNormalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.clearcoatNormalScale;
				clearcoatNormal = vTBN * texNormal;

			}

		}

		clearcoatNormal *= surfaceHit.side;

		// sheenColor
		vec3 sheenColor = material.sheenColor;
		if ( material.sheenColorMap != - 1 ) {

			vec3 uvPrime = material.sheenColorMapTransform * vec3( uv, 1 );
			sheenColor *= texture2D( textures, vec3( uvPrime.xy, material.sheenColorMap ) ).rgb;

		}

		// sheenRoughness
		float sheenRoughness = material.sheenRoughness;
		if ( material.sheenRoughnessMap != - 1 ) {

			vec3 uvPrime = material.sheenRoughnessMapTransform * vec3( uv, 1 );
			sheenRoughness *= texture2D( textures, vec3( uvPrime.xy, material.sheenRoughnessMap ) ).a;

		}

		// iridescence
		float iridescence = material.iridescence;
		if ( material.iridescenceMap != - 1 ) {

			vec3 uvPrime = material.iridescenceMapTransform * vec3( uv, 1 );
			iridescence *= texture2D( textures, vec3( uvPrime.xy, material.iridescenceMap ) ).r;

		}

		// iridescence thickness
		float iridescenceThickness = material.iridescenceThicknessMaximum;
		if ( material.iridescenceThicknessMap != - 1 ) {

			vec3 uvPrime = material.iridescenceThicknessMapTransform * vec3( uv, 1 );
			float iridescenceThicknessSampled = texture2D( textures, vec3( uvPrime.xy, material.iridescenceThicknessMap ) ).g;
			iridescenceThickness = mix( material.iridescenceThicknessMinimum, material.iridescenceThicknessMaximum, iridescenceThicknessSampled );

		}

		iridescence = iridescenceThickness == 0.0 ? 0.0 : iridescence;

		// specular color
		vec3 specularColor = material.specularColor;
		if ( material.specularColorMap != - 1 ) {

			vec3 uvPrime = material.specularColorMapTransform * vec3( uv, 1 );
			specularColor *= texture2D( textures, vec3( uvPrime.xy, material.specularColorMap ) ).rgb;

		}

		// specular intensity
		float specularIntensity = material.specularIntensity;
		if ( material.specularIntensityMap != - 1 ) {

			vec3 uvPrime = material.specularIntensityMapTransform * vec3( uv, 1 );
			specularIntensity *= texture2D( textures, vec3( uvPrime.xy, material.specularIntensityMap ) ).a;

		}

		surf.volumeParticle = false;

		surf.faceNormal = surfaceHit.faceNormal;
		surf.normal = normal;

		surf.metalness = metalness;
		surf.color = albedo.rgb;
		surf.emission = emission;

		surf.ior = material.ior;
		surf.transmission = transmission;
		surf.thinFilm = material.thinFilm;
		surf.attenuationColor = material.attenuationColor;
		surf.attenuationDistance = material.attenuationDistance;

		surf.clearcoatNormal = clearcoatNormal;
		surf.clearcoat = clearcoat;

		surf.sheen = material.sheen;
		surf.sheenColor = sheenColor;

		surf.iridescence = iridescence;
		surf.iridescenceIor = material.iridescenceIor;
		surf.iridescenceThickness = iridescenceThickness;

		surf.specularColor = specularColor;
		surf.specularIntensity = specularIntensity;

		// apply perceptual roughness factor from gltf. sheen perceptual roughness is
		// applied by its brdf function
		// https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#microfacet-surfaces
		surf.roughness = roughness * roughness;
		surf.clearcoatRoughness = clearcoatRoughness * clearcoatRoughness;
		surf.sheenRoughness = sheenRoughness;

		// frontFace is used to determine transmissive properties and PDF. If no transmission is used
		// then we can just always assume this is a front face.
		surf.frontFace = surfaceHit.side == 1.0 || transmission == 0.0;
		surf.eta = material.thinFilm || surf.frontFace ? 1.0 / material.ior : material.ior;
		surf.f0 = iorRatioToF0( surf.eta );

		// Compute the filtered roughness value to use during specular reflection computations.
		// The accumulated roughness value is scaled by a user setting and a "magic value" of 5.0.
		// If we're exiting something transmissive then scale the factor down significantly so we can retain
		// sharp internal reflections
		surf.filteredRoughness = applyFilteredGlossy( surf.roughness, accumulatedRoughness );
		surf.filteredClearcoatRoughness = applyFilteredGlossy( surf.clearcoatRoughness, accumulatedRoughness );

		// get the normal frames
		surf.normalBasis = getBasisFromNormal( surf.normal );
		surf.normalInvBasis = inverse( surf.normalBasis );

		surf.clearcoatBasis = getBasisFromNormal( surf.clearcoatNormal );
		surf.clearcoatInvBasis = inverse( surf.clearcoatBasis );

		return HIT_SURFACE;

	}
`;var On=`

	struct Ray {

		vec3 origin;
		vec3 direction;

	};

	struct SurfaceHit {

		uvec4 faceIndices;
		vec3 barycoord;
		vec3 faceNormal;
		float side;
		float dist;

	};

	struct RenderState {

		bool firstRay;
		bool transmissiveRay;
		bool isShadowRay;
		float accumulatedRoughness;
		int transmissiveTraversals;
		int traversals;
		uint depth;
		vec3 throughputColor;
		Material fogMaterial;

	};

	RenderState initRenderState() {

		RenderState result;
		result.firstRay = true;
		result.transmissiveRay = true;
		result.isShadowRay = false;
		result.accumulatedRoughness = 0.0;
		result.transmissiveTraversals = 0;
		result.traversals = 0;
		result.throughputColor = vec3( 1.0 );
		result.depth = 0u;
		result.fogMaterial.fogVolume = false;
		return result;

	}

`;var kn=`

	#define NO_HIT 0
	#define SURFACE_HIT 1
	#define LIGHT_HIT 2
	#define FOG_HIT 3

	// Passing the global variable 'lights' into this function caused shader program errors.
	// So global variables like 'lights' and 'bvh' were moved out of the function parameters.
	// For more information, refer to: https://github.com/gkjohnson/three-gpu-pathtracer/pull/457
	int traceScene(
		Ray ray, Material fogMaterial, inout SurfaceHit surfaceHit
	) {

		int result = NO_HIT;
		bool hit = bvhIntersectFirstHit( bvh, ray.origin, ray.direction, surfaceHit.faceIndices, surfaceHit.faceNormal, surfaceHit.barycoord, surfaceHit.side, surfaceHit.dist );

		#if FEATURE_FOG

		if ( fogMaterial.fogVolume ) {

			// offset the distance so we don't run into issues with particles on the same surface
			// as other objects
			float particleDist = intersectFogVolume( fogMaterial, rand( 1 ) );
			if ( particleDist + RAY_OFFSET < surfaceHit.dist ) {

				surfaceHit.side = 1.0;
				surfaceHit.faceNormal = normalize( - ray.direction );
				surfaceHit.dist = particleDist;
				return FOG_HIT;

			}

		}

		#endif

		if ( hit ) {

			result = SURFACE_HIT;

		}

		return result;

	}

`;var Er=class extends de{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3,MATERIAL_PIXELS:Fr},uniforms:{resolution:{value:new V},opacity:{value:1},bounces:{value:10},transmissiveBounces:{value:10},filterGlossyFactor:{value:0},physicalCamera:{value:new br},cameraWorldMatrix:{value:new H},invProjectionMatrix:{value:new H},bvh:{value:new sr},attributesArray:{value:new Ar},materialIndexAttribute:{value:new nt},materials:{value:new Rr},textures:{value:new It().texture},lights:{value:new Sr},iesProfiles:{value:new It(360,180,{type:J,wrapS:se,wrapT:se}).texture},environmentIntensity:{value:1},environmentRotation:{value:new H},envMapInfo:{value:new wr},backgroundBlur:{value:0},backgroundMap:{value:null},backgroundAlpha:{value:1},backgroundIntensity:{value:1},backgroundRotation:{value:new H},seed:{value:0},sobolTexture:{value:null},stratifiedTexture:{value:new Cr},stratifiedOffsetTexture:{value:new Br(64,1)}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vec4 mvPosition = vec4( position, 1.0 );
					mvPosition = modelViewMatrix * mvPosition;
					gl_Position = projectionMatrix * mvPosition;

					vUv = uv;

				}

			`,fragmentShader:`
				#define RAY_OFFSET 1e-4
				#define INFINITY 1e20

				precision highp isampler2D;
				precision highp usampler2D;
				precision highp sampler2DArray;
				vec4 envMapTexelToLinear( vec4 a ) { return a; }
				#include <common>

				// bvh intersection
				${Oe.common_functions}
				${Oe.bvh_struct_definitions}
				${Oe.bvh_ray_functions}

				// uniform structs
				${pn}
				${vn}
				${gn}
				${xn}
				${yn}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${Rn}

				#elif RANDOM_TYPE == 1 	// Sobol

					${_i}
					${vr}
					${rn}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

				${_i}

					// Using the sobol functions seems to break the the compiler on MacOS
					// - specifically the "sobolReverseBits" function.
					uint sobolPixelIndex = 0u;
					uint sobolPathIndex = 0u;
					uint sobolBounceIndex = 0u;

					#define rand(v) pcgRand()
					#define rand2(v) pcgRand2()
					#define rand3(v) pcgRand3()
					#define rand4(v) pcgRand4()

				#endif

				// common
				${In}
				${Sn}
				${ft}
				${_n}
				${An}

				// environment
				uniform EquirectHdrInfo envMapInfo;
				uniform mat4 environmentRotation;
				uniform float environmentIntensity;

				// lighting
				uniform sampler2DArray iesProfiles;
				uniform LightsInfo lights;

				// background
				uniform float backgroundBlur;
				uniform float backgroundAlpha;
				#if FEATURE_BACKGROUND_MAP

				uniform sampler2D backgroundMap;
				uniform mat4 backgroundRotation;
				uniform float backgroundIntensity;

				#endif

				// camera
				uniform mat4 cameraWorldMatrix;
				uniform mat4 invProjectionMatrix;
				#if FEATURE_DOF

				uniform PhysicalCamera physicalCamera;

				#endif

				// geometry
				uniform sampler2DArray attributesArray;
				uniform usampler2D materialIndexAttribute;
				uniform sampler2D materials;
				uniform sampler2DArray textures;
				uniform BVH bvh;

				// path tracer
				uniform int bounces;
				uniform int transmissiveBounces;
				uniform float filterGlossyFactor;
				uniform int seed;

				// image
				uniform vec2 resolution;
				uniform float opacity;

				varying vec2 vUv;

				// globals
				mat3 envRotation3x3;
				mat3 invEnvRotation3x3;
				float lightsDenom;

				// sampling
				${wn}
				${bn}
				${Tn}

				${Bn}
				${Mn}
				${Dn}
				${Cn}
				${Pn}
				${Fn}

				float applyFilteredGlossy( float roughness, float accumulatedRoughness ) {

					return clamp(
						max(
							roughness,
							accumulatedRoughness * filterGlossyFactor * 5.0 ),
						0.0,
						1.0
					);

				}

				vec3 sampleBackground( vec3 direction, vec2 uv ) {

					vec3 sampleDir = sampleHemisphere( direction, uv ) * 0.5 * backgroundBlur;

					#if FEATURE_BACKGROUND_MAP

					sampleDir = normalize( mat3( backgroundRotation ) * direction + sampleDir );
					return backgroundIntensity * sampleEquirectColor( backgroundMap, sampleDir );

					#else

					sampleDir = normalize( envRotation3x3 * direction + sampleDir );
					return environmentIntensity * sampleEquirectColor( envMapInfo.map, sampleDir );

					#endif

				}

				${On}
				${Ln}
				${kn}
				${En}
				${Nn}
				${zn}

				void main() {

					// init
					rng_initialize( gl_FragCoord.xy, seed );
					sobolPixelIndex = ( uint( gl_FragCoord.x ) << 16 ) | uint( gl_FragCoord.y );
					sobolPathIndex = uint( seed );

					// get camera ray
					Ray ray = getCameraRay();

					// inverse environment rotation
					envRotation3x3 = mat3( environmentRotation );
					invEnvRotation3x3 = inverse( envRotation3x3 );
					lightsDenom =
						( environmentIntensity == 0.0 || envMapInfo.totalSum == 0.0 ) && lights.count != 0u ?
							float( lights.count ) :
							float( lights.count + 1u );

					// final color
					gl_FragColor = vec4( 0, 0, 0, 1 );

					// surface results
					SurfaceHit surfaceHit;
					ScatterRecord scatterRec;

					// path tracing state
					RenderState state = initRenderState();
					state.transmissiveTraversals = transmissiveBounces;
					#if FEATURE_FOG

					state.fogMaterial.fogVolume = bvhIntersectFogVolumeHit(
						ray.origin, - ray.direction,
						materialIndexAttribute, materials,
						state.fogMaterial
					);

					#endif

					for ( int i = 0; i < bounces; i ++ ) {

						sobolBounceIndex ++;

						state.depth ++;
						state.traversals = bounces - i;
						state.firstRay = i == 0 && state.transmissiveTraversals == transmissiveBounces;

						int hitType = traceScene( ray, state.fogMaterial, surfaceHit );

						// check if we intersect any lights and accumulate the light contribution
						// TODO: we can add support for light surface rendering in the else condition if we
						// add the ability to toggle visibility of the the light
						if ( ! state.firstRay && ! state.transmissiveRay ) {

							LightRecord lightRec;
							float lightDist = hitType == NO_HIT ? INFINITY : surfaceHit.dist;
							for ( uint i = 0u; i < lights.count; i ++ ) {

								if (
									intersectLightAtIndex( lights.tex, ray.origin, ray.direction, i, lightRec ) &&
									lightRec.dist < lightDist
								) {

									#if FEATURE_MIS

									// weight the contribution
									// NOTE: Only area lights are supported for forward sampling and can be hit
									float misWeight = misHeuristic( scatterRec.pdf, lightRec.pdf / lightsDenom );
									gl_FragColor.rgb += lightRec.emission * state.throughputColor * misWeight;

									#else

									gl_FragColor.rgb += lightRec.emission * state.throughputColor;

									#endif

								}

							}

						}

						if ( hitType == NO_HIT ) {

							if ( state.firstRay || state.transmissiveRay ) {

								gl_FragColor.rgb += sampleBackground( ray.direction, rand2( 2 ) ) * state.throughputColor;
								gl_FragColor.a = backgroundAlpha;

							} else {

								#if FEATURE_MIS

								// get the PDF of the hit envmap point
								vec3 envColor;
								float envPdf = sampleEquirect( envRotation3x3 * ray.direction, envColor );
								envPdf /= lightsDenom;

								// and weight the contribution
								float misWeight = misHeuristic( scatterRec.pdf, envPdf );
								gl_FragColor.rgb += environmentIntensity * envColor * state.throughputColor * misWeight;

								#else

								gl_FragColor.rgb +=
									environmentIntensity *
									sampleEquirectColor( envMapInfo.map, envRotation3x3 * ray.direction ) *
									state.throughputColor;

								#endif

							}
							break;

						}

						uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
						Material material = readMaterialInfo( materials, materialIndex );

						#if FEATURE_FOG

						if ( hitType == FOG_HIT ) {

							material = state.fogMaterial;
							state.accumulatedRoughness += 0.2;

						} else if ( material.fogVolume ) {

							state.fogMaterial = material;
							state.fogMaterial.fogVolume = surfaceHit.side == 1.0;

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );
							continue;

						}

						#endif

						// early out if this is a matte material
						if ( material.matte && state.firstRay ) {

							gl_FragColor = vec4( 0.0 );
							break;

						}

						// if we've determined that this is a shadow ray and we've hit an item with no shadow casting
						// then skip it
						if ( ! material.castShadow && state.isShadowRay ) {

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						SurfaceRecord surf;
						if (
							getSurfaceRecord(
								material, surfaceHit, attributesArray, state.accumulatedRoughness,
								surf
							) == SKIP_SURFACE
						) {

							// only allow a limited number of transparency discards otherwise we could
							// crash the context with too long a loop.
							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						scatterRec = bsdfSample( - ray.direction, surf );
						state.isShadowRay = scatterRec.specularPdf < rand( 4 );

						bool isBelowSurface = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal ) < 0.0;
						vec3 hitPoint = stepRayOrigin( ray.origin, ray.direction, isBelowSurface ? - surf.faceNormal : surf.faceNormal, surfaceHit.dist );

						// next event estimation
						#if FEATURE_MIS

						gl_FragColor.rgb += directLightContribution( - ray.direction, surf, state, hitPoint );

						#endif

						// accumulate a roughness value to offset diffuse, specular, diffuse rays that have high contribution
						// to a single pixel resulting in fireflies
						// TODO: handle transmissive surfaces
						if ( ! surf.volumeParticle && ! isBelowSurface ) {

							// determine if this is a rough normal or not by checking how far off straight up it is
							vec3 halfVector = normalize( - ray.direction + scatterRec.direction );
							state.accumulatedRoughness += max(
								sin( acosApprox( dot( halfVector, surf.normal ) ) ),
								sin( acosApprox( dot( halfVector, surf.clearcoatNormal ) ) )
							);

							state.transmissiveRay = false;

						}

						// accumulate emissive color
						gl_FragColor.rgb += ( surf.emission * state.throughputColor );

						// skip the sample if our PDF or ray is impossible
						if ( scatterRec.pdf <= 0.0 || ! isDirectionValid( scatterRec.direction, surf.normal, surf.faceNormal ) ) {

							break;

						}

						// if we're bouncing around the inside a transmissive material then decrement
						// perform this separate from a bounce
						bool isTransmissiveRay = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal * surfaceHit.side ) < 0.0;
						if ( ( isTransmissiveRay || isBelowSurface ) && state.transmissiveTraversals > 0 ) {

							state.transmissiveTraversals --;
							i --;

						}

						//

						// handle throughput color transformation
						// attenuate the throughput color by the medium color
						if ( ! surf.frontFace ) {

							state.throughputColor *= transmissionAttenuation( surfaceHit.dist, surf.attenuationColor, surf.attenuationDistance );

						}

						#if FEATURE_RUSSIAN_ROULETTE

						// russian roulette path termination
						// https://www.arnoldrenderer.com/research/physically_based_shader_design_in_arnold.pdf
						uint minBounces = 3u;
						float depthProb = float( state.depth < minBounces );

						float rrProb = luminance( state.throughputColor * scatterRec.color / scatterRec.pdf );
						rrProb /= luminance( state.throughputColor );
						rrProb = sqrt( rrProb );
						rrProb = max( rrProb, depthProb );
						rrProb = min( rrProb, 1.0 );
						if ( rand( 8 ) > rrProb ) {

							break;

						}

						// perform sample clamping here to avoid bright pixels
						state.throughputColor *= min( 1.0 / rrProb, 20.0 );

						#endif

						// adjust the throughput and discard and exit if we find discard the sample if there are any NaNs
						state.throughputColor *= scatterRec.color / scatterRec.pdf;
						if ( any( isnan( state.throughputColor ) ) || any( isinf( state.throughputColor ) ) ) {

							break;

						}

						//

						// prepare for next ray
						ray.direction = scatterRec.direction;
						ray.origin = hitPoint;

					}

					gl_FragColor.a *= opacity;

					#if DEBUG_MODE == 1

					// output the number of rays checked in the path and number of
					// transmissive rays encountered.
					gl_FragColor.rgb = vec3(
						float( state.depth ),
						transmissiveBounces - state.transmissiveTraversals,
						0.0
					);
					gl_FragColor.a = 1.0;

					#endif

				}

			`}),this.setValues(e)}};function*ra(){let{_renderer:o,_fsQuad:e,_blendQuad:t,_primaryTarget:r,_blendTargets:n,_sobolTarget:s,_subframe:i,alpha:c,material:l}=this,m=new _e,f=new _e,u=t.material,[a,h]=n;for(;;){c?(u.opacity=this._opacityFactor/(this.samples+1),l.blending=pe,l.opacity=1):(l.opacity=this._opacityFactor/(this.samples+1),l.blending=Dt);let[g,T,d,y]=i,v=r.width,p=r.height;l.resolution.set(v*d,p*y),l.sobolTexture=s.texture,l.stratifiedTexture.init(20,l.bounces+l.transmissiveBounces+5),l.stratifiedTexture.next(),l.seed++;let b=this.tiles.x||1,x=this.tiles.y||1,w=b*x,S=Math.ceil(v*d),I=Math.ceil(p*y),A=Math.floor(g*v),R=Math.floor(T*p),P=Math.ceil(S/b),_=Math.ceil(I/x);for(let F=0;F<x;F++)for(let M=0;M<b;M++){let D=o.getRenderTarget(),N=o.autoClear,K=o.getScissorTest();o.getScissor(m),o.getViewport(f);let ce=M,he=F;if(!this.stableTiles){let De=this._currentTile%(b*x);ce=De%b,he=~~(De/b),this._currentTile=De+1}let Ge=x-he-1;r.scissor.set(A+ce*P,R+Ge*_,Math.min(P,S-ce*P),Math.min(_,I-Ge*_)),r.viewport.set(A,R,S,I),o.setRenderTarget(r),o.setScissorTest(!0),o.autoClear=!1,e.render(o),o.setViewport(f),o.setScissor(m),o.setScissorTest(K),o.setRenderTarget(D),o.autoClear=N,c&&(u.target1=a.texture,u.target2=r.texture,o.setRenderTarget(h),t.render(o),o.setRenderTarget(D)),this.samples+=1/w,M===b-1&&F===x-1&&(this.samples=Math.round(this.samples)),yield}[a,h]=[h,a]}}var Un=new ge,Ft=class{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material.removeEventListener("recompilation",this._compileFunction),e.addEventListener("recompilation",this._compileFunction),this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get isCompiling(){return!!this._compilePromise}constructor(e){this.camera=null,this.tiles=new V(3,3),this.stableNoise=!1,this.stableTiles=!0,this.samples=0,this._subframe=new _e(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new ae(new Er),this._blendQuad=new ae(new hr),this._task=null,this._currentTile=0,this._compilePromise=null,this._sobolTarget=new xr().generate(e),this._primaryTarget=new be(1,1,{format:B,type:L,magFilter:z,minFilter:z}),this._blendTargets=[new be(1,1,{format:B,type:L,magFilter:z,minFilter:z}),new be(1,1,{format:B,type:L,magFilter:z,minFilter:z})],this._compileFunction=()=>{let t=this.compileMaterial(this._fsQuad._mesh);t.then(()=>{this._compilePromise===t&&(this._compilePromise=null)}),this._compilePromise=t},this.material.addEventListener("recompilation",this._compileFunction)}compileMaterial(){return this._renderer.compileAsync(this._fsQuad._mesh)}setCamera(e){let{material:t}=this;t.cameraWorldMatrix.copy(e.matrixWorld),t.invProjectionMatrix.copy(e.projectionMatrixInverse),t.physicalCamera.updateFrom(e);let r=0;e.projectionMatrix.elements[15]>0&&(r=1),e.isEquirectCamera&&(r=2),t.setDefine("CAMERA_TYPE",r),this.camera=e}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}getSize(e){e.x=this._primaryTarget.width,e.y=this._primaryTarget.height}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){let{_renderer:e,_primaryTarget:t,_blendTargets:r}=this,n=e.getRenderTarget(),s=e.getClearAlpha();e.getClearColor(Un),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(r[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(r[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor(Un,s),e.setRenderTarget(n),this.samples=0,this._task=null,this.material.stratifiedTexture.stableNoise=this.stableNoise,this.stableNoise&&(this.material.seed=0,this.material.stratifiedTexture.reset())}update(){this.material.onBeforeRender(),!this.isCompiling&&(this._task||(this._task=ra.call(this)),this._task.next())}};var We=new V,Vn=new V,Lr=new Yi,Nr=new ge,zr=class extends W{constructor(e=512,t=512){super(new Float32Array(e*t*4),e,t,B,L,$e,le,se,Z,Z),this.generationCallback=null}update(){this.dispose(),this.needsUpdate=!0;let{data:e,width:t,height:r}=this.image;for(let n=0;n<t;n++)for(let s=0;s<r;s++){Vn.set(t,r),We.set(n/t,s/r),We.x-=.5,We.y=1-We.y,Lr.theta=We.x*2*Math.PI,Lr.phi=We.y*Math.PI,Lr.radius=1,this.generationCallback(Lr,We,Vn,Nr);let c=4*(s*t+n);e[c+0]=Nr.r,e[c+1]=Nr.g,e[c+2]=Nr.b,e[c+3]=1}}copy(e){return super.copy(e),this.generationCallback=e.generationCallback,this}};var Wn=new C,Or=class extends zr{constructor(e=512){super(e,e),this.topColor=new ge().set(16777215),this.bottomColor=new ge().set(0),this.exponent=2,this.generationCallback=(t,r,n,s)=>{Wn.setFromSpherical(t);let i=Wn.y*.5+.5;s.lerpColors(this.bottomColor,this.topColor,i**this.exponent)}}copy(e){return super.copy(e),this.topColor.copy(e.topColor),this.bottomColor.copy(e.bottomColor),this}};var kr=class extends Ae{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}constructor(e){super({uniforms:{map:{value:null},opacity:{value:1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform float opacity;
				varying vec2 vUv;

				vec4 clampedTexelFatch( sampler2D map, ivec2 px, int lod ) {

					vec4 res = texelFetch( map, ivec2( px.x, px.y ), 0 );

					#if defined( TONE_MAPPING )

					res.xyz = toneMapping( res.xyz );

					#endif

			  		return linearToOutputTexel( res );

				}

				void main() {

					vec2 size = vec2( textureSize( map, 0 ) );
					vec2 pxUv = vUv * size;
					vec2 pxCurr = floor( pxUv );
					vec2 pxFrac = fract( pxUv ) - 0.5;
					vec2 pxOffset;
					pxOffset.x = pxFrac.x > 0.0 ? 1.0 : - 1.0;
					pxOffset.y = pxFrac.y > 0.0 ? 1.0 : - 1.0;

					vec2 pxNext = clamp( pxOffset + pxCurr, vec2( 0.0 ), size - 1.0 );
					vec2 alpha = abs( pxFrac );

					vec4 p1 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxCurr.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxCurr.y ), 0 ),
						alpha.x
					);

					vec4 p2 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxNext.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxNext.y ), 0 ),
						alpha.x
					);

					gl_FragColor = mix( p1, p2, alpha.y );
					gl_FragColor.a *= opacity;
					#include <premultiplied_alpha_fragment>

				}
			`}),this.setValues(e)}};var Ai=class extends Ae{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`
				#define ENVMAP_TYPE_CUBE_UV

				uniform samplerCube envMap;
				uniform float flipEnvMap;
				varying vec2 vUv;

				#include <common>
				#include <cube_uv_reflection_fragment>

				${ft}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}},Pt=class{constructor(e){this._renderer=e,this._quad=new ae(new Ai)}generate(e,t=null,r=null){if(!e.isCubeTexture)throw new Error("CubeToEquirectMaterial: Source can only be cube textures.");let n=e.images[0],s=this._renderer,i=this._quad;t===null&&(t=4*n.height),r===null&&(r=2*n.height);let c=new be(t,r,{type:L,colorSpace:n.colorSpace}),l=n.height,m=Math.log2(l)-2,f=1/l,u=1/(3*Math.max(Math.pow(2,m),112));i.material.defines.CUBEUV_MAX_MIP=`${m}.0`,i.material.defines.CUBEUV_TEXEL_WIDTH=u,i.material.defines.CUBEUV_TEXEL_HEIGHT=f,i.material.uniforms.envMap.value=e,i.material.uniforms.flipEnvMap.value=e.isRenderTargetTexture?1:-1,i.material.needsUpdate=!0;let a=s.getRenderTarget(),h=s.autoClear;s.autoClear=!0,s.setRenderTarget(c),i.render(s),s.setRenderTarget(a),s.autoClear=h;let g=new Uint16Array(t*r*4),T=new Float32Array(t*r*4);s.readRenderTargetPixels(c,0,0,t,r,T),c.dispose();for(let y=0,v=T.length;y<v;y++)g[y]=re.toHalfFloat(T[y]);let d=new W(g,t,r,B,J);return d.minFilter=Mi,d.magFilter=Z,d.wrapS=le,d.wrapT=le,d.mapping=$e,d.needsUpdate=!0,d}dispose(){this._quad.dispose()}};function ia(o){return o.extensions.get("EXT_float_blend")}var mt=new V,Gn=class{get multipleImportanceSampling(){return!!this._pathTracer.material.defines.FEATURE_MIS}set multipleImportanceSampling(e){this._pathTracer.material.setDefine("FEATURE_MIS",e?1:0)}get transmissiveBounces(){return this._pathTracer.material.transmissiveBounces}set transmissiveBounces(e){this._pathTracer.material.transmissiveBounces=e}get bounces(){return this._pathTracer.material.bounces}set bounces(e){this._pathTracer.material.bounces=e}get filterGlossyFactor(){return this._pathTracer.material.filterGlossyFactor}set filterGlossyFactor(e){this._pathTracer.material.filterGlossyFactor=e}get samples(){return this._pathTracer.samples}get target(){return this._pathTracer.target}get tiles(){return this._pathTracer.tiles}get stableNoise(){return this._pathTracer.stableNoise}set stableNoise(e){this._pathTracer.stableNoise=e}get isCompiling(){return!!this._pathTracer.isCompiling}constructor(e){this._renderer=e,this._generator=new ct,this._pathTracer=new Ft(e),this._queueReset=!1,this._clock=new $i,this._compilePromise=null,this._lowResPathTracer=new Ft(e),this._lowResPathTracer.tiles.set(1,1),this._quad=new ae(new kr({map:null,transparent:!0,blending:pe,premultipliedAlpha:e.getContextAttributes().premultipliedAlpha})),this._materials=null,this._previousEnvironment=null,this._previousBackground=null,this._internalBackground=null,this.renderDelay=100,this.minSamples=5,this.fadeDuration=500,this.enablePathTracing=!0,this.pausePathTracing=!1,this.dynamicLowRes=!1,this.lowResScale=.25,this.renderScale=1,this.synchronizeRenderSize=!0,this.rasterizeScene=!0,this.renderToCanvas=!0,this.textureSize=new V(1024,1024),this.rasterizeSceneCallback=(t,r)=>{this._renderer.render(t,r)},this.renderToCanvasCallback=(t,r,n)=>{let s=r.autoClear;r.autoClear=!1,n.render(r),r.autoClear=s},this.setScene(new Vi,new zt)}setBVHWorker(e){this._generator.setBVHWorker(e)}setScene(e,t,r={}){e.updateMatrixWorld(!0),t.updateMatrixWorld();let n=this._generator;if(n.setObjects(e),this._buildAsync)return n.generateAsync(r.onProgress).then(s=>this._updateFromResults(e,t,s));{let s=n.generate();return this._updateFromResults(e,t,s)}}setSceneAsync(...e){this._buildAsync=!0;let t=this.setScene(...e);return this._buildAsync=!1,t}setCamera(e){this.camera=e,this.updateCamera()}updateCamera(){let e=this.camera;e.updateMatrixWorld(),this._pathTracer.setCamera(e),this._lowResPathTracer.setCamera(e),this.reset()}updateMaterials(){let e=this._pathTracer.material,t=this._renderer,r=this._materials,n=this.textureSize,s=ln(r);e.textures.setTextures(t,s,n.x,n.y),e.materials.updateFrom(r,s),this.reset()}updateLights(){let e=this.scene,t=this._renderer,r=this._pathTracer.material,n=un(e),s=cn(n);r.lights.updateFrom(n,s),r.iesProfiles.setTextures(t,s),this.reset()}updateEnvironment(){let e=this.scene,t=this._pathTracer.material;if(this._internalBackground&&(this._internalBackground.dispose(),this._internalBackground=null),t.backgroundBlur=e.backgroundBlurriness,t.backgroundIntensity=e.backgroundIntensity??1,t.backgroundRotation.makeRotationFromEuler(e.backgroundRotation).invert(),e.background===null)t.backgroundMap=null,t.backgroundAlpha=0;else if(e.background.isColor){this._colorBackground=this._colorBackground||new Or(16);let r=this._colorBackground;r.topColor.equals(e.background)||(r.topColor.set(e.background),r.bottomColor.set(e.background),r.update()),t.backgroundMap=r,t.backgroundAlpha=1}else if(e.background.isCubeTexture){if(e.background!==this._previousBackground){let r=new Pt(this._renderer).generate(e.background);this._internalBackground=r,t.backgroundMap=r,t.backgroundAlpha=1}}else t.backgroundMap=e.background,t.backgroundAlpha=1;if(t.environmentIntensity=e.environment!==null?e.environmentIntensity??1:0,t.environmentRotation.makeRotationFromEuler(e.environmentRotation).invert(),this._previousEnvironment!==e.environment&&e.environment!==null)if(e.environment.isCubeTexture){let r=new Pt(this._renderer).generate(e.environment);t.envMapInfo.updateFrom(r)}else t.envMapInfo.updateFrom(e.environment);this._previousEnvironment=e.environment,this._previousBackground=e.background,this.reset()}_updateFromResults(e,t,r){let{materials:n,geometry:s,bvh:i,bvhChanged:c,needsMaterialIndexUpdate:l}=r;this._materials=n;let f=this._pathTracer.material;return c&&(f.bvh.updateFrom(i),f.attributesArray.updateFrom(s.attributes.normal,s.attributes.tangent,s.attributes.uv,s.attributes.color)),l&&f.materialIndexAttribute.updateFrom(s.attributes.materialIndex),this._previousScene=e,this.scene=e,this.camera=t,this.updateCamera(),this.updateMaterials(),this.updateEnvironment(),this.updateLights(),r}renderSample(){let e=this._lowResPathTracer,t=this._pathTracer,r=this._renderer,n=this._clock,s=this._quad;this._updateScale(),this._queueReset&&(t.reset(),e.reset(),this._queueReset=!1,s.material.opacity=0,n.start());let i=n.getDelta()*1e3,c=n.getElapsedTime()*1e3;if(!this.pausePathTracing&&this.enablePathTracing&&this.renderDelay<=c&&!this.isCompiling&&t.update(),t.alpha=t.material.backgroundAlpha!==1||!ia(r),e.alpha=t.alpha,this.renderToCanvas){let l=this._renderer,m=this.minSamples;if(c>=this.renderDelay&&this.samples>=this.minSamples&&(this.fadeDuration!==0?s.material.opacity=Math.min(s.material.opacity+i/this.fadeDuration,1):s.material.opacity=1),!this.enablePathTracing||this.samples<m||s.material.opacity<1){if(this.dynamicLowRes&&!this.isCompiling){e.samples<1&&(e.material=t.material,e.update());let f=s.material.opacity;s.material.opacity=1-s.material.opacity,s.material.map=e.target.texture,s.render(l),s.material.opacity=f}(!this.dynamicLowRes&&this.rasterizeScene||this.dynamicLowRes&&this.isCompiling)&&this.rasterizeSceneCallback(this.scene,this.camera)}this.enablePathTracing&&s.material.opacity>0&&(s.material.opacity<1&&(s.material.blending=this.dynamicLowRes?Fi:Dt),s.material.map=t.target.texture,this.renderToCanvasCallback(t.target,l,s),s.material.blending=pe)}}reset(){this._queueReset=!0,this._pathTracer.samples=0}dispose(){this._quad.dispose(),this._quad.material.dispose(),this._pathTracer.dispose()}_updateScale(){if(this.synchronizeRenderSize){this._renderer.getDrawingBufferSize(mt);let e=Math.floor(this.renderScale*mt.x),t=Math.floor(this.renderScale*mt.y);if(this._pathTracer.getSize(mt),mt.x!==e||mt.y!==t){let r=this.lowResScale;this._pathTracer.setSize(e,t),this._lowResPathTracer.setSize(Math.floor(e*r),Math.floor(t*r))}}}};var qn=class extends Ui{constructor(){super(),this.isEquirectCamera=!0}};var $n=class extends Gi{constructor(...e){super(...e),this.iesMap=null,this.radius=0}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this.radius=e.radius,this}};var Yn=class extends qi{constructor(...e){super(...e),this.isCircular=!1}copy(e,t){return super.copy(e,t),this.isCircular=e.isCircular,this}};var Ii=class extends de{constructor(){super({uniforms:{envMap:{value:null},blur:{value:0}},vertexShader:`

				varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}

			`,fragmentShader:`

				#include <common>
				#include <cube_uv_reflection_fragment>

				${ft}

				uniform sampler2D envMap;
				uniform float blur;
				varying vec2 vUv;
				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					gl_FragColor = textureCubeUV( envMap, rayDirection, blur );

				}

			`})}},jn=class{constructor(e){this.renderer=e,this.pmremGenerator=new ji(e),this.copyQuad=new ae(new Ii),this.renderTarget=new be(1,1,{type:L,format:B})}dispose(){this.pmremGenerator.dispose(),this.copyQuad.dispose(),this.renderTarget.dispose()}generate(e,t){let{pmremGenerator:r,renderTarget:n,copyQuad:s,renderer:i}=this,c=r.fromEquirectangular(e),{width:l,height:m}=e.image;n.setSize(l,m),s.material.envMap=c.texture,s.material.blur=t;let f=i.getRenderTarget(),u=i.autoClear;i.setRenderTarget(n),i.autoClear=!0,s.render(i),i.setRenderTarget(f),i.autoClear=u;let a=new Uint16Array(l*m*4),h=new Float32Array(l*m*4);i.readRenderTargetPixels(n,0,0,l,m,h);for(let T=0,d=h.length;T<d;T++)a[T]=re.toHalfFloat(h[T]);let g=new W(a,l,m,B,J);return g.minFilter=e.minFilter,g.magFilter=e.magFilter,g.wrapS=e.wrapS,g.wrapT=e.wrapT,g.mapping=$e,g.needsUpdate=!0,c.dispose(),g}};var Xn=class extends de{constructor(e){super({blending:pe,transparent:!1,depthWrite:!1,depthTest:!1,defines:{USE_SLIDER:0},uniforms:{sigma:{value:5},threshold:{value:.03},kSigma:{value:1},map:{value:null},opacity:{value:1}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}

			`,fragmentShader:`

				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				//  Copyright (c) 2018-2019 Michele Morrone
				//  All rights reserved.
				//
				//  https://michelemorrone.eu - https://BrutPitt.com
				//
				//  me@michelemorrone.eu - brutpitt@gmail.com
				//  twitter: @BrutPitt - github: BrutPitt
				//
				//  https://github.com/BrutPitt/glslSmartDeNoise/
				//
				//  This software is distributed under the terms of the BSD 2-Clause license
				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

				uniform sampler2D map;

				uniform float sigma;
				uniform float threshold;
				uniform float kSigma;
				uniform float opacity;

				varying vec2 vUv;

				#define INV_SQRT_OF_2PI 0.39894228040143267793994605993439
				#define INV_PI 0.31830988618379067153776752674503

				// Parameters:
				//	 sampler2D tex	 - sampler image / texture
				//	 vec2 uv		   - actual fragment coord
				//	 float sigma  >  0 - sigma Standard Deviation
				//	 float kSigma >= 0 - sigma coefficient
				//		 kSigma * sigma  -->  radius of the circular kernel
				//	 float threshold   - edge sharpening threshold
				vec4 smartDeNoise( sampler2D tex, vec2 uv, float sigma, float kSigma, float threshold ) {

					float radius = round( kSigma * sigma );
					float radQ = radius * radius;

					float invSigmaQx2 = 0.5 / ( sigma * sigma );
					float invSigmaQx2PI = INV_PI * invSigmaQx2;

					float invThresholdSqx2 = 0.5 / ( threshold * threshold );
					float invThresholdSqrt2PI = INV_SQRT_OF_2PI / threshold;

					vec4 centrPx = texture2D( tex, uv );
					centrPx.rgb *= centrPx.a;

					float zBuff = 0.0;
					vec4 aBuff = vec4( 0.0 );
					vec2 size = vec2( textureSize( tex, 0 ) );

					vec2 d;
					for ( d.x = - radius; d.x <= radius; d.x ++ ) {

						float pt = sqrt( radQ - d.x * d.x );

						for ( d.y = - pt; d.y <= pt; d.y ++ ) {

							float blurFactor = exp( - dot( d, d ) * invSigmaQx2 ) * invSigmaQx2PI;

							vec4 walkPx = texture2D( tex, uv + d / size );
							walkPx.rgb *= walkPx.a;

							vec4 dC = walkPx - centrPx;
							float deltaFactor = exp( - dot( dC.rgba, dC.rgba ) * invThresholdSqx2 ) * invThresholdSqrt2PI * blurFactor;

							zBuff += deltaFactor;
							aBuff += deltaFactor * walkPx;

						}

					}

					return aBuff / zBuff;

				}

				void main() {

					gl_FragColor = smartDeNoise( map, vec2( vUv.x, vUv.y ), sigma, kSigma, threshold );
					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <premultiplied_alpha_fragment>

					gl_FragColor.a *= opacity;

				}

			`}),this.setValues(e)}};var Qn=class extends Wi{constructor(e){super(e),this.isFogVolumeMaterial=!0,this.density=.015,this.emissive=new ge,this.emissiveIntensity=0,this.opacity=.15,this.transparent=!0,this.roughness=1,this.metalness=0,this.setValues(e)}};export{jn as BlurredEnvMapGenerator,Xn as DenoiseMaterial,Jo as DynamicPathTracingSceneGenerator,qn as EquirectCamera,Qn as FogVolumeMaterial,Or as GradientEquirectTexture,Ft as PathTracingRenderer,ct as PathTracingSceneGenerator,en as PathTracingSceneWorker,yr as PhysicalCamera,Er as PhysicalPathTracingMaterial,$n as PhysicalSpotLight,zr as ProceduralEquirectTexture,Yn as ShapedAreaLight,Gn as WebGLPathTracer};
