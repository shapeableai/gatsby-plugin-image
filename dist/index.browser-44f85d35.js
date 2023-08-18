import*as t from"react";import e,{Fragment as r,forwardRef as i,createRef as a,Component as n}from"react";import{stripIndent as o}from"common-tags";import s from"camelcase";import*as l from"prop-types";import d from"prop-types";import{render as u}from"react-dom";function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){if(null==t)return{};var r,i,a={},n=Object.keys(t);for(i=0;i<n.length;i++)e.indexOf(r=n[i])>=0||(a[r]=t[r]);return a}var g,f=[.25,.5,1,2],m=[750,1080,1366,1920],v=[320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096],y=function(t){return console.warn(t)},w=function(t,e){return t-e},b=function(t){return t.map(function(t){return t.src+" "+t.width+"w"}).join(",\n")};function E(t){var e=t.lastIndexOf(".");if(-1!==e){var r=t.substr(e+1);if("jpeg"===r)return"jpg";if(3===r.length||4===r.length)return r}}function S(t){var e=t.layout,r=void 0===e?"constrained":e,i=t.width,a=t.height,n=t.sourceMetadata,o=t.breakpoints,l=t.aspectRatio,d=t.formats,u=void 0===d?["auto","webp"]:d;return u=u.map(function(t){return t.toLowerCase()}),r=s(r),i&&a?c({},t,{formats:u,layout:r,aspectRatio:i/a}):(n.width&&n.height&&!l&&(l=n.width/n.height),"fullWidth"===r?(i=i||n.width||o[o.length-1],a=a||Math.round(i/(l||1.3333333333333333))):(i||(i=a&&l?a*l:n.width?n.width:a?Math.round(a/1.3333333333333333):800),l&&!a?a=Math.round(i/l):l||(l=i/a)),c({},t,{width:i,height:a,aspectRatio:l,layout:r,formats:u}))}function M(t,e){var r;return void 0===e&&(e=20),null==(r=(0,(t=S(t)).generateImageSource)(t.filename,e,Math.round(e/t.aspectRatio),t.sourceMetadata.format||"jpg",t.fit,t.options))?void 0:r.src}function L(t){var e,r=(t=S(t)).pluginName,i=t.sourceMetadata,a=t.generateImageSource,n=t.layout,s=t.fit,l=t.options,d=t.width,u=t.height,h=t.filename,p=t.reporter,v=void 0===p?{warn:y}:p,w=t.backgroundColor,M=t.placeholderURL;if(r||v.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof a)throw new Error("generateImageSource must be a function");i&&(i.width||i.height)?i.format||(i.format=E(h)):i={width:d,height:u,format:(null==(e=i)?void 0:e.format)||E(h)||"auto"};var L=new Set(t.formats);(0===L.size||L.has("auto")||L.has(""))&&(L.delete("auto"),L.delete(""),L.add(i.format)),L.has("jpg")&&L.has("png")&&(v.warn("["+r+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),L.delete("jpg"===i.format?"png":"jpg"));var j=function(t){var e=t.filename,r=t.layout,i=void 0===r?"constrained":r,a=t.sourceMetadata,n=t.reporter,s=void 0===n?{warn:y}:n,l=t.breakpoints,d=void 0===l?m:l,u=Object.entries({width:t.width,height:t.height}).filter(function(t){var e=t[1];return"number"==typeof e&&e<1});if(u.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+u.map(function(t){return t.join(": ")}).join(", "));return"fixed"===i?function(t){var e=t.filename,r=t.sourceMetadata,i=t.width,a=t.height,n=t.fit,s=void 0===n?"cover":n,l=t.outputPixelDensities,d=t.reporter,u=void 0===d?{warn:y}:d,c=r.width/r.height,h=k(void 0===l?f:l);if(i&&a){var p=_(r,{width:i,height:a,fit:s});i=p.width,a=p.height,c=p.aspectRatio}i?a||(a=Math.round(i/c)):i=a?Math.round(a*c):800;var m,v,w=i;if(r.width<i||r.height<a){var b=r.width<i?"width":"height";u.warn(o(g||(m=["\n    The requested ",' "','px" for the image '," was larger than the actual image "," of ","px. If possible, replace the current image with a larger one."],v||(v=m.slice(0)),m.raw=v,g=m),b,"width"===b?i:a,e,b,r[b])),"width"===b?(i=r.width,a=Math.round(i/c)):i=(a=r.height)*c}return{sizes:h.filter(function(t){return t>=1}).map(function(t){return Math.round(t*i)}).filter(function(t){return t<=r.width}),aspectRatio:c,presentationWidth:w,presentationHeight:Math.round(w/c),unscaledWidth:i}}(t):"constrained"===i?R(t):"fullWidth"===i?R(c({breakpoints:d},t)):(s.warn("No valid layout was provided for the image at "+e+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[a.width],presentationWidth:a.width,presentationHeight:a.height,aspectRatio:a.width/a.height,unscaledWidth:a.width})}(c({},t,{sourceMetadata:i})),N={sources:[]},x=t.sizes;x||(x=function(t,e){switch(e){case"constrained":return"(min-width: "+t+"px) "+t+"px, 100vw";case"fixed":return t+"px";case"fullWidth":return"100vw";default:return}}(j.presentationWidth,n)),L.forEach(function(t){var e=j.sizes.map(function(e){var i=a(h,e,Math.round(e/j.aspectRatio),t,s,l);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;v.warn("["+r+"] The resolver for image "+h+" returned an invalid value.")}).filter(Boolean);if("jpg"===t||"png"===t||"auto"===t){var i=e.find(function(t){return t.width===j.unscaledWidth})||e[0];i&&(N.fallback={src:i.src,srcSet:b(e),sizes:x})}else{var n;null==(n=N.sources)||n.push({srcSet:b(e),sizes:x,type:"image/"+t})}});var I={images:N,layout:n,backgroundColor:w};switch(M&&(I.placeholder={fallback:M}),n){case"fixed":I.width=j.presentationWidth,I.height=j.presentationHeight;break;case"fullWidth":I.width=1,I.height=1/j.aspectRatio;break;case"constrained":I.width=t.width||j.presentationWidth||1,I.height=(I.width||1)/j.aspectRatio}return I}var k=function(t){return Array.from(new Set([1].concat(t))).sort(w)};function R(t){var e,r=t.sourceMetadata,i=t.width,a=t.height,n=t.fit,o=void 0===n?"cover":n,s=t.outputPixelDensities,l=t.breakpoints,d=t.layout,u=r.width/r.height,c=k(void 0===s?f:s);if(i&&a){var h=_(r,{width:i,height:a,fit:o});i=h.width,a=h.height,u=h.aspectRatio}i=i&&Math.min(i,r.width),a=a&&Math.min(a,r.height),i||a||(a=(i=Math.min(800,r.width))/u),i||(i=a*u);var p=i;return(r.width<i||r.height<a)&&(i=r.width,a=r.height),i=Math.round(i),(null==l?void 0:l.length)>0?(e=l.filter(function(t){return t<=r.width})).length<l.length&&!e.includes(r.width)&&e.push(r.width):e=(e=c.map(function(t){return Math.round(t*i)})).filter(function(t){return t<=r.width}),"constrained"!==d||e.includes(i)||e.push(i),{sizes:e=e.sort(w),aspectRatio:u,presentationWidth:p,presentationHeight:Math.round(p/u),unscaledWidth:i}}function _(t,e){var r=t.width/t.height,i=e.width,a=e.height;switch(e.fit){case"fill":i=e.width?e.width:t.width,a=e.height?e.height:t.height;break;case"inside":var n=e.width?e.width:Number.MAX_SAFE_INTEGER,o=e.height?e.height:Number.MAX_SAFE_INTEGER;i=Math.min(n,Math.round(o*r)),a=Math.min(o,Math.round(n/r));break;case"outside":var s=e.width?e.width:0,l=e.height?e.height:0;i=Math.max(s,Math.round(l*r)),a=Math.max(l,Math.round(s/r));break;default:e.width&&!e.height&&(i=e.width,a=Math.round(e.width/r)),e.height&&!e.width&&(i=Math.round(e.height*r),a=e.height)}return{width:i,height:a,aspectRatio:i/a}}var j=["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"],N=["images","placeholder"],x=new Set,I=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function O(){return"undefined"!=typeof GATSBY___IMAGE&&GATSBY___IMAGE}function W(t){t&&x.add(t)}function z(t){return x.has(t)}var T=function(t){var e;return function(t){var e,r;return Boolean(null==t||null==(e=t.images)||null==(r=e.fallback)?void 0:r.src)}(t)?t:function(t){return Boolean(null==t?void 0:t.gatsbyImageData)}(t)?t.gatsbyImageData:null==t||null==(e=t.childImageSharp)?void 0:e.gatsbyImageData},P=function(t){var e,r,i;return null==(e=T(t))||null==(r=e.images)||null==(i=r.fallback)?void 0:i.src},H=function(t){var e,r,i;return null==(e=T(t))||null==(r=e.images)||null==(i=r.fallback)?void 0:i.srcSet};function D(t){var e,r=t.baseUrl,i=t.urlBuilder,a=t.sourceWidth,n=t.sourceHeight,o=t.pluginName,s=void 0===o?"getImageData":o,l=t.formats,d=void 0===l?["auto"]:l,u=t.breakpoints,h=t.options,g=p(t,j);return null!=(e=u)&&e.length||"fullWidth"!==g.layout&&"FULL_WIDTH"!==g.layout||(u=v),L(c({},g,{pluginName:s,generateImageSource:function(t,e,r,a){return{width:e,height:r,format:a,src:i({baseUrl:t,width:e,height:r,options:h,format:a})}},filename:r,formats:d,breakpoints:u,sourceMetadata:{width:a,height:n,format:"auto"}}))}function C(t,e,r,i,a,n,o,s){var l,d;return void 0===s&&(s={}),null!=o&&o.current&&!("objectFit"in document.documentElement.style)&&(o.current.dataset.objectFit=null!=(l=s.objectFit)?l:"cover",o.current.dataset.objectPosition=""+(null!=(d=s.objectPosition)?d:"50% 50%"),function(t){try{var e=function(){window.objectFitPolyfill(t.current)},r=function(){if(!("objectFitPolyfill"in window))return Promise.resolve(import("objectFitPolyfill")).then(function(){})}();Promise.resolve(r&&r.then?r.then(e):e())}catch(t){return Promise.reject(t)}}(o)),O()||(s=c({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},s)),c({},r,{loading:i,shouldLoad:t,"data-main-image":"",style:c({},s,{opacity:e?1:0}),onLoad:function(t){if(!e){W(n);var r=t.currentTarget,i=new Image;i.src=r.currentSrc,i.decode?i.decode().catch(function(){}).then(function(){a(!0)}):a(!0)}},ref:o})}function q(t,e,r,i,a,n,o,s){var l={};n&&(l.backgroundColor=n,"fixed"===r?(l.width=i,l.height=a,l.backgroundColor=n,l.position="relative"):("constrained"===r||"fullWidth"===r)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),o&&(l.objectFit=o),s&&(l.objectPosition=s);var d=c({},t,{"aria-hidden":!0,"data-placeholder-image":"",style:c({opacity:e?0:1,transition:"opacity 500ms linear"},l)});return O()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d}function A(t,e){var r,i,a,n=t.images,o=t.placeholder,s=c({},p(t,N),{images:c({},n,{sources:[]}),placeholder:o&&c({},o,{sources:[]})});return e.forEach(function(e){var r,i=e.media,a=e.image;i?(a.layout!==t.layout&&"development"===process.env.NODE_ENV&&console.warn('[gatsby-plugin-image] Mismatched image layout: expected "'+t.layout+'" but received "'+a.layout+'". All art-directed images use the same layout as the default image'),(r=s.images.sources).push.apply(r,a.images.sources.map(function(t){return c({},t,{media:i})}).concat([{media:i,srcSet:a.images.fallback.srcSet}])),s.placeholder&&s.placeholder.sources.push({media:i,srcSet:a.placeholder.fallback})):"development"===process.env.NODE_ENV&&console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.")}),(r=s.images.sources).push.apply(r,n.sources),null!=o&&o.sources&&(null==(i=s.placeholder)||(a=i.sources).push.apply(a,o.sources)),s}var F,V=["children"],G=function(t){var r=t.layout,i=t.width,a=t.height;return"fullWidth"===r?e.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/i*100+"%"}}):"constrained"===r?e.createElement("div",{style:{maxWidth:i,display:"block"}},e.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+i+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},U=function(t){var i=t.children,a=p(t,V);return e.createElement(r,null,e.createElement(G,c({},a)),i,!1)},B=["src","srcSet","loading","alt","shouldLoad","innerRef"],J=["fallback","sources","shouldLoad"],Y=function(t){var r=t.src,i=t.srcSet,a=t.loading,n=t.alt,o=void 0===n?"":n,s=t.shouldLoad,l=t.innerRef,d=p(t,B);return e.createElement("img",c({},d,{decoding:"async",loading:a,src:s?r:void 0,"data-src":s?void 0:r,srcSet:s?i:void 0,"data-srcset":s?void 0:i,alt:o,ref:l}))},X=i(function(t,r){var i=t.fallback,a=t.sources,n=void 0===a?[]:a,o=t.shouldLoad,s=void 0===o||o,l=p(t,J),d=l.sizes||(null==i?void 0:i.sizes),u=e.createElement(Y,c({},l,i,{sizes:d,shouldLoad:s,innerRef:r}));return n.length?e.createElement("picture",null,n.map(function(t){var r=t.media,i=t.srcSet,a=t.type;return e.createElement("source",{key:r+"-"+a+"-"+i,type:a,media:r,srcSet:s?i:void 0,"data-srcset":s?void 0:i,sizes:d})}),u):u});Y.propTypes={src:l.string.isRequired,alt:l.string.isRequired,sizes:l.string,srcSet:l.string,shouldLoad:l.bool},X.displayName="Picture",X.propTypes={alt:l.string.isRequired,shouldLoad:l.bool,fallback:l.exact({src:l.string.isRequired,srcSet:l.string,sizes:l.string}),sources:l.arrayOf(l.oneOfType([l.exact({media:l.string.isRequired,type:l.string,sizes:l.string,srcSet:l.string.isRequired}),l.exact({media:l.string,type:l.string.isRequired,sizes:l.string,srcSet:l.string.isRequired})]))};var Z=["fallback"],K=function(t){var r=t.fallback,i=p(t,Z);return r?e.createElement(X,c({},i,{fallback:{src:r},"aria-hidden":!0,alt:""})):e.createElement("div",c({},i))};K.displayName="Placeholder",K.propTypes={fallback:l.string,sources:null==(F=X.propTypes)?void 0:F.sources,alt:function(t,e,r){return t[e]?new Error("Invalid prop `"+e+"` supplied to `"+r+"`. Validation failed."):null}};var Q=i(function(t,r){return e.createElement(e.Fragment,null,e.createElement(X,c({ref:r},t)),e.createElement("noscript",null,e.createElement(X,c({},t,{shouldLoad:!0}))))});Q.displayName="MainImage",Q.propTypes=X.propTypes;var $=function(t,e,r){return t.alt||""===t.alt?d.string.apply(d,[t,e,r].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},tt={image:d.object.isRequired,alt:$},et=["style","className"],rt=function(t){var r,i;function n(e){var r;return(r=t.call(this,e)||this).root=a(),r.hydrated={current:!1},r.forceRender={current:"development"===process.env.NODE_ENV},r.lazyHydrator=null,r.ref=a(),r.unobserveRef=void 0,r.state={isLoading:I(),isLoaded:!1},r}i=t,(r=n).prototype=Object.create(i.prototype),r.prototype.constructor=r,h(r,i);var o=n.prototype;return o._lazyHydrate=function(t,e){var r=this,i=this.root.current.querySelector("[data-gatsby-image-ssr]");return I()&&i&&!this.hydrated.current?(this.hydrated.current=!0,Promise.resolve()):import("./lazy-hydrate-20d22952.js").then(function(i){var a=i.lazyHydrate,n=JSON.stringify(r.props.image.images);r.lazyHydrator=a(c({image:t.image.images,isLoading:e.isLoading||z(n),isLoaded:e.isLoaded||z(n),toggleIsLoaded:function(){null==t.onLoad||t.onLoad(),r.setState({isLoaded:!0})},ref:r.ref},t),r.root,r.hydrated,r.forceRender)})},o._setupIntersectionObserver=function(t){var e=this;void 0===t&&(t=!0),import("./intersection-observer-6b794dd8.js").then(function(r){var i=(0,r.createIntersectionObserver)(function(){if(e.root.current){var r=JSON.stringify(e.props.image.images);null==e.props.onStartLoad||e.props.onStartLoad({wasCached:t&&z(r)}),e.setState({isLoading:!0,isLoaded:t&&z(r)})}});e.root.current&&(e.unobserveRef=i(e.root))})},o.shouldComponentUpdate=function(t,e){var r=this,i=!1;return this.state.isLoading||!e.isLoading||e.isLoaded||(this.forceRender.current=!0),this.props.image.images!==t.image.images&&(this.unobserveRef&&(this.unobserveRef(),this.hydrated.current&&this.lazyHydrator&&u(null,this.root.current)),this.setState({isLoading:!1,isLoaded:!1},function(){r._setupIntersectionObserver(!1)}),i=!0),this.root.current&&!i&&this._lazyHydrate(t,e),!1},o.componentDidMount=function(){if(this.root.current){var t=this.root.current.querySelector("[data-gatsby-image-ssr]"),e=JSON.stringify(this.props.image.images);if(I()&&t&&O()){var r,i;if(null==(r=(i=this.props).onStartLoad)||r.call(i,{wasCached:!1}),t.complete){var a,n;null==(a=(n=this.props).onLoad)||a.call(n),W(e)}else{var o=this;t.addEventListener("load",function r(){t.removeEventListener("load",r),null==o.props.onLoad||o.props.onLoad(),W(e)})}return}this._setupIntersectionObserver(!0)}},o.componentWillUnmount=function(){this.unobserveRef&&(this.unobserveRef(),this.hydrated.current&&this.lazyHydrator&&this.lazyHydrator())},o.render=function(){var t=this.props.as||"div",r=this.props.image,i=r.width,a=r.height,n=r.layout,o=function(t,e,r){var i={},a="gatsby-image-wrapper";return O()||(i.position="relative",i.overflow="hidden"),"fixed"===r?(i.width=t,i.height=e):"constrained"===r&&(O()||(i.display="inline-block",i.verticalAlign="top"),a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:i}}(i,a,n),s=o.style,l=o.className,d=p(o,et),u=this.props.className;this.props.class&&(u=this.props.class);var h=function(t,e,r){var i=null;return"fullWidth"===t&&(i='<div aria-hidden="true" style="padding-top: '+r/e*100+'%;"></div>'),"constrained"===t&&(i='<div style="max-width: '+e+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+e+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),i}(n,i,a);return e.createElement(t,c({},d,{style:c({},s,this.props.style,{backgroundColor:this.props.backgroundColor}),className:l+(u?" "+u:""),ref:this.root,dangerouslySetInnerHTML:{__html:h},suppressHydrationWarning:!0}))},n}(n),it=function(t){if(!t.image)return"development"===process.env.NODE_ENV&&console.warn("[gatsby-plugin-image] Missing image prop"),null;O()||"development"!==process.env.NODE_ENV||console.warn('[gatsby-plugin-image] You\'re missing out on some cool performance features. Please add "gatsby-plugin-image" to your gatsby-config.js');var r=t.image,i=JSON.stringify([r.width,r.height,r.layout,t.className,t.class,t.backgroundColor]);return e.createElement(rt,c({key:i},t))};it.propTypes=tt,it.displayName="GatsbyImage";var at=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],nt=function(t,e){return"fullWidth"!==t.layout||"width"!==e&&"height"!==e||!t[e]?d.number.apply(d,[t,e].concat([].slice.call(arguments,2))):new Error('"'+e+'" '+t[e]+" may not be passed when layout is fullWidth.")},ot=new Set(["fixed","fullWidth","constrained"]),st={src:d.string.isRequired,alt:$,width:nt,height:nt,sizes:d.string,layout:function(t){if(void 0!==t.layout&&!ot.has(t.layout))return new Error("Invalid value "+t.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},lt=function(t){return function(r){var i=r.src,a=r.__imageData,n=r.__error,o=p(r,at);return n&&console.warn(n),a?e.createElement(t,c({image:a},o)):(console.warn("Image not loaded",i),n||"development"!==process.env.NODE_ENV||console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'),null)}}(it);function dt(e){var r=e.children;return t.useEffect(function(){import("./lazy-hydrate-20d22952.js")},[]),r}lt.displayName="StaticImage",lt.propTypes=st;export{it as G,U as L,Q as M,K as P,lt as S,p as _,c as a,C as b,dt as c,T as d,P as e,H as f,q as g,D as h,L as i,M as j,A as w};
//# sourceMappingURL=index.browser-44f85d35.js.map
