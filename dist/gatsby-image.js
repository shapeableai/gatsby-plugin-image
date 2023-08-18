function emptyLog(i) { console.log("GATSBY IMAGE PROBLEM"); console.log(i); return [] };
var e=require("react"),t=require("common-tags"),a=require("camelcase"),r=require("prop-types");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(a){if("default"!==a){var r=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:function(){return e[a]}})}}),t.default=e,t}var o,s=i(e),l=i(a),u=n(r),d=i(r);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(i[a]=e[a]);return i}var g=[.25,.5,1,2],f=[750,1080,1366,1920],p=[320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096],m=function(e){return console.warn(e)},v=function(e,t){return e-t},w=function(e){return e.map(function(e){return e.src+" "+e.width+"w"}).join(",\n")};function y(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.substr(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a}}function b(e){var t=e.layout,a=void 0===t?"constrained":t,r=e.width,i=e.height,n=e.sourceMetadata,o=e.breakpoints,s=e.aspectRatio,u=e.formats,d=void 0===u?["auto","webp"]:u;return d=d.map(function(e){return e.toLowerCase()}),a=l.default(a),r&&i?c({},e,{formats:d,layout:a,aspectRatio:r/i}):(n.width&&n.height&&!s&&(s=n.width/n.height),"fullWidth"===a?(r=r||n.width||o[o.length-1],i=i||Math.round(r/(s||1.3333333333333333))):(r||(r=i&&s?i*s:n.width?n.width:i?Math.round(i/1.3333333333333333):800),s&&!i?i=Math.round(r/s):s||(s=r/i)),c({},e,{width:r,height:i,aspectRatio:s,layout:a,formats:d}))}function E(e){var a,r=(e=b(e)).pluginName,i=e.sourceMetadata,n=e.generateImageSource,s=e.layout,l=e.fit,u=e.options,d=e.width,h=e.height,p=e.filename,v=e.reporter,E=void 0===v?{warn:m}:v,x=e.backgroundColor,I=e.placeholderURL;if(r||E.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof n)throw new Error("generateImageSource must be a function");i&&(i.width||i.height)?i.format||(i.format=y(p)):i={width:d,height:h,format:(null==(a=i)?void 0:a.format)||y(p)||"auto"};var R=new Set(e.formats);(0===R.size||R.has("auto")||R.has(""))&&(R.delete("auto"),R.delete(""),R.add(i.format)),R.has("jpg")&&R.has("png")&&(E.warn("["+r+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),R.delete("jpg"===i.format?"png":"jpg"));var j=function(e){var a=e.filename,r=e.layout,i=void 0===r?"constrained":r,n=e.sourceMetadata,s=e.reporter,l=void 0===s?{warn:m}:s,u=e.breakpoints,d=void 0===u?f:u,h=Object.entries({width:e.width,height:e.height}).filter(function(e){var t=e[1];return"number"==typeof t&&t<1});if(h.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+h.map(function(e){return e.join(": ")}).join(", "));return"fixed"===i?function(e){var a=e.filename,r=e.sourceMetadata,i=e.width,n=e.height,s=e.fit,l=void 0===s?"cover":s,u=e.outputPixelDensities,d=e.reporter,c=void 0===d?{warn:m}:d,h=r.width/r.height,f=k(void 0===u?g:u);if(i&&n){var p=M(r,{width:i,height:n,fit:l});i=p.width,n=p.height,h=p.aspectRatio}i?n||(n=Math.round(i/h)):i=n?Math.round(n*h):800;var v,w,y=i;if(r.width<i||r.height<n){var b=r.width<i?"width":"height";c.warn(t.stripIndent(o||(v=["\n    The requested ",' "','px" for the image '," was larger than the actual image "," of ","px. If possible, replace the current image with a larger one."],w||(w=v.slice(0)),v.raw=w,o=v),b,"width"===b?i:n,a,b,r[b])),"width"===b?(i=r.width,n=Math.round(i/h)):i=(n=r.height)*h}return{sizes:f.filter(function(e){return e>=1}).map(function(e){return Math.round(e*i)}).filter(function(e){return e<=r.width}),aspectRatio:h,presentationWidth:y,presentationHeight:Math.round(y/h),unscaledWidth:i}}(e):"constrained"===i?S(e):"fullWidth"===i?S(c({breakpoints:d},e)):(l.warn("No valid layout was provided for the image at "+a+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[n.width],presentationWidth:n.width,presentationHeight:n.height,aspectRatio:n.width/n.height,unscaledWidth:n.width})}(c({},e,{sourceMetadata:i})),N={sources:[]},W=e.sizes;W||(W=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return}}(j.presentationWidth,s)),R.forEach(function(e){var t=j.sizes.map(function(t){var a=n(p,t,Math.round(t/j.aspectRatio),e,l,u);if(null!=a&&a.width&&a.height&&a.src&&a.format)return a;E.warn("["+r+"] The resolver for image "+p+" returned an invalid value.")}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var a=t.find(function(e){return e.width===j.unscaledWidth})||t[0];a&&(N.fallback={src:a.src,srcSet:w(t),sizes:W})}else{var i;null==(i=N.sources)||i.push({srcSet:w(t),sizes:W,type:"image/"+e})}});var _={images:N,layout:s,backgroundColor:x};switch(I&&(_.placeholder={fallback:I}),s){case"fixed":_.width=j.presentationWidth,_.height=j.presentationHeight;break;case"fullWidth":_.width=1,_.height=1/j.aspectRatio;break;case"constrained":_.width=e.width||j.presentationWidth||1,_.height=(_.width||1)/j.aspectRatio}return _}var k=function(e){return Array.from(new Set([1].concat(e))).sort(v)};function S(e){var t,a=e.sourceMetadata,r=e.width,i=e.height,n=e.fit,o=void 0===n?"cover":n,s=e.outputPixelDensities,l=e.breakpoints,u=e.layout,d=a.width/a.height,c=k(void 0===s?g:s);if(r&&i){var h=M(a,{width:r,height:i,fit:o});r=h.width,i=h.height,d=h.aspectRatio}r=r&&Math.min(r,a.width),i=i&&Math.min(i,a.height),r||i||(i=(r=Math.min(800,a.width))/d),r||(r=i*d);var f=r;return(a.width<r||a.height<i)&&(r=a.width,i=a.height),r=Math.round(r),(null==l?void 0:l.length)>0?(t=l.filter(function(e){return e<=a.width})).length<l.length&&!t.includes(a.width)&&t.push(a.width):t=(t=c.map(function(e){return Math.round(e*r)})).filter(function(e){return e<=a.width}),"constrained"!==u||t.includes(r)||t.push(r),{sizes:t=t.sort(v),aspectRatio:d,presentationWidth:f,presentationHeight:Math.round(f/d),unscaledWidth:r}}function M(e,t){var a=e.width/e.height,r=t.width,i=t.height;switch(t.fit){case"fill":r=t.width?t.width:e.width,i=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;r=Math.min(n,Math.round(o*a)),i=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,l=t.height?t.height:0;r=Math.max(s,Math.round(l*a)),i=Math.max(l,Math.round(s/a));break;default:t.width&&!t.height&&(r=t.width,i=Math.round(t.width/a)),t.height&&!t.width&&(r=Math.round(t.height*a),i=t.height)}return{width:r,height:i,aspectRatio:r/i}}var x=["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"],I=["images","placeholder"];function R(){return"undefined"!=typeof GATSBY___IMAGE&&GATSBY___IMAGE}new Set;var j,N=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData},W=["src","srcSet","loading","alt","shouldLoad","innerRef"],_=["fallback","sources","shouldLoad"],O=function(e){var t=e.src,a=e.srcSet,r=e.loading,i=e.alt,n=void 0===i?"":i,o=e.shouldLoad,l=e.innerRef,u=h(e,W);return s.default.createElement("img",c({},u,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:n,ref:l}))},A=e.forwardRef(function(e,t){var a=e.fallback,r=e.sources,i=void 0===r?[]:r,n=e.shouldLoad,o=void 0===n||n,l=h(e,_),u=l.sizes||(null==a?void 0:a.sizes),d=s.default.createElement(O,c({},l,a,{sizes:u,shouldLoad:o,innerRef:t}));return i.length?s.default.createElement("picture",null,i.map(function(e){var t=e.media,a=e.srcSet,r=e.type;return s.default.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:u})}),d):d});O.propTypes={src:u.string.isRequired,alt:u.string.isRequired,sizes:u.string,srcSet:u.string,shouldLoad:u.bool},A.displayName="Picture",A.propTypes={alt:u.string.isRequired,shouldLoad:u.bool,fallback:u.exact({src:u.string.isRequired,srcSet:u.string,sizes:u.string}),sources:u.arrayOf(u.oneOfType([u.exact({media:u.string.isRequired,type:u.string,sizes:u.string,srcSet:u.string.isRequired}),u.exact({media:u.string,type:u.string.isRequired,sizes:u.string,srcSet:u.string.isRequired})]))};var T=["fallback"],L=function(e){var t=e.fallback,a=h(e,T);return t?s.default.createElement(A,c({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):s.default.createElement("div",c({},a))};L.displayName="Placeholder",L.propTypes={fallback:u.string,sources:null==(j=A.propTypes)?void 0:j.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var q=e.forwardRef(function(e,t){return s.default.createElement(s.default.Fragment,null,s.default.createElement(A,c({ref:t},e)),s.default.createElement("noscript",null,s.default.createElement(A,c({},e,{shouldLoad:!0}))))});q.displayName="MainImage",q.propTypes=A.propTypes;var z=["children"],D=function(){return s.default.createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1)}}'}})},C=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?s.default.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?s.default.createElement("div",{style:{maxWidth:a,display:"block"}},s.default.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},P=function(t){var a=t.children,r=h(t,z);return s.default.createElement(e.Fragment,null,s.default.createElement(C,c({},r)),a,s.default.createElement(D,null))},F=["as","children"],H=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],G=["style","className"],B=function(e){return e.replace(/\n/g,"")},U=function(e){var t=e.as,a=void 0===t?"div":t,r=e.children,i=h(e,F);return s.default.createElement(a,c({},i),r)},V=function(e){var t=e.as,a=e.className,r=e.class,i=e.style,n=e.image,o=e.loading,l=void 0===o?"lazy":o,u=e.imgClassName,d=e.imgStyle,g=e.backgroundColor,f=e.objectFit,p=e.objectPosition,m=h(e,H);if(!n)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),d=c({objectFit:f,objectPosition:p,backgroundColor:g},d);var v=n.width,w=n.height,y=n.layout,b=n.images,E=n.placeholder,k=n.backgroundColor,S=function(e,t,a){var r={},i="gatsby-image-wrapper";return R()||(r.position="relative",r.overflow="hidden"),"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(R()||(r.display="inline-block",r.verticalAlign="top"),i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}(v,w,y),M=S.style,x=S.className,I=h(S,G),j={fallback:void 0,sources:[]};return b.fallback&&(j.fallback=c({},b.fallback,{srcSet:b.fallback.srcSet?B(b.fallback.srcSet):void 0})),b.sources&&(j.sources=!b.sources.map?emptyLog(b):b.sources.map(function(e){return c({},e,{srcSet:B(e.srcSet)})})),s.default.createElement(U,c({},I,{as:t,style:c({},M,i,{backgroundColor:g}),className:x+(a?" "+a:"")}),s.default.createElement(P,{layout:y,width:v,height:w},s.default.createElement(L,c({},function(e,t,a,r,i,n,o,s){var l={};n&&(l.backgroundColor=n,"fixed"===a?(l.width=r,l.height=i,l.backgroundColor=n,l.position="relative"):("constrained"===a||"fullWidth"===a)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),o&&(l.objectFit=o),s&&(l.objectPosition=s);var u=c({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:c({opacity:1,transition:"opacity 500ms linear"},l)});return R()||(u.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),u}(E,0,y,v,w,k,f,p))),s.default.createElement(q,c({"data-gatsby-image-ssr":"",className:u},m,function(e,t,a,r,i,n,o,s){return void 0===s&&(s={}),R()||(s=c({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},s)),c({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:c({},s,{opacity:0}),onLoad:function(e){var t=e.currentTarget,a=new Image;a.src=t.currentSrc,a.decode?a.decode().catch(function(){}).then(function(){i(!0)}):i(!0)},ref:void 0})}("eager"===l,0,j,l,void 0,0,0,d)))))},X=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],Y=function(e){return function(t){var a=t.src,r=t.__imageData,i=t.__error,n=h(t,X);return i&&console.warn(i),r?s.default.createElement(e,c({image:r},n)):(console.warn("Image not loaded",a),i||"development"!==process.env.NODE_ENV||console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'),null)}}(V),Z=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?d.default.number.apply(d.default,[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},J=new Set(["fixed","fullWidth","constrained"]),K={src:d.default.string.isRequired,alt:function(e,t,a){return e.alt||""===e.alt?d.default.string.apply(d.default,[e,t,a].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},width:Z,height:Z,sizes:d.default.string,layout:function(e){if(void 0!==e.layout&&!J.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};Y.displayName="StaticImage",Y.propTypes=K,exports.GatsbyImage=V,exports.MainImage=q,exports.Placeholder=L,exports.StaticImage=Y,exports.generateImageData=E,exports.getImage=N,exports.getImageData=function(e){var t,a=e.baseUrl,r=e.urlBuilder,i=e.sourceWidth,n=e.sourceHeight,o=e.pluginName,s=void 0===o?"getImageData":o,l=e.formats,u=void 0===l?["auto"]:l,d=e.breakpoints,g=e.options,f=h(e,x);return null!=(t=d)&&t.length||"fullWidth"!==f.layout&&"FULL_WIDTH"!==f.layout||(d=p),E(c({},f,{pluginName:s,generateImageSource:function(e,t,a,i){return{width:t,height:a,format:i,src:r({baseUrl:e,width:t,height:a,options:g,format:i})}},filename:a,formats:u,breakpoints:d,sourceMetadata:{width:i,height:n,format:"auto"}}))},exports.getLowResolutionImageURL=function(e,t){var a;return void 0===t&&(t=20),null==(a=(0,(e=b(e)).generateImageSource)(e.filename,t,Math.round(t/e.aspectRatio),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src},exports.getSrc=function(e){var t,a,r;return null==(t=N(e))||null==(a=t.images)||null==(r=a.fallback)?void 0:r.src},exports.getSrcSet=function(e){var t,a,r;return null==(t=N(e))||null==(a=t.images)||null==(r=a.fallback)?void 0:r.srcSet},exports.withArtDirection=function(e,t){var a,r,i,n=e.images,o=e.placeholder,s=c({},h(e,I),{images:c({},n,{sources:[]}),placeholder:o&&c({},o,{sources:[]})});return t.forEach(function(t){var a,r=t.media,i=t.image;r?(i.layout!==e.layout&&"development"===process.env.NODE_ENV&&console.warn('[gatsby-plugin-image] Mismatched image layout: expected "'+e.layout+'" but received "'+i.layout+'". All art-directed images use the same layout as the default image'),(a=s.images.sources).push.apply(a,i.images.sources.map(function(e){return c({},e,{media:r})}).concat([{media:r,srcSet:i.images.fallback.srcSet}])),s.placeholder&&s.placeholder.sources.push({media:r,srcSet:i.placeholder.fallback})):"development"===process.env.NODE_ENV&&console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.")}),(a=s.images.sources).push.apply(a,n.sources),null!=o&&o.sources&&(null==(r=s.placeholder)||(i=r.sources).push.apply(i,o.sources)),s};
//# sourceMappingURL=gatsby-image.js.map