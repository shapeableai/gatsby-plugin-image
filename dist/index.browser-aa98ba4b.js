import*as t from"react";import e,{Fragment as i,forwardRef as a,Component as r,createRef as s}from"react";import{stripIndent as o}from"common-tags";import n from"camelcase";import*as l from"prop-types";import d from"prop-types";import{render as h}from"react-dom";function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var i,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)e.indexOf(i=s[a])>=0||(r[i]=t[i]);return r}let p,g=t=>t;const m=[.25,.5,1,2],f=[750,1080,1366,1920],y=[320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096],w=t=>console.warn(t),b=(t,e)=>t-e,v=t=>t.map(t=>`${t.src} ${t.width}w`).join(",\n");function E(t){const e=t.lastIndexOf(".");if(-1!==e){const i=t.substr(e+1);if("jpeg"===i)return"jpg";if(3===i.length||4===i.length)return i}}function S(t){let{layout:e="constrained",width:i,height:a,sourceMetadata:r,breakpoints:s,aspectRatio:o,formats:l=["auto","webp"]}=t;return l=l.map(t=>t.toLowerCase()),e=n(e),i&&a?c({},t,{formats:l,layout:e,aspectRatio:i/a}):(r.width&&r.height&&!o&&(o=r.width/r.height),"fullWidth"===e?(i=i||r.width||s[s.length-1],a=a||Math.round(i/(o||1.3333333333333333))):(i||(i=a&&o?a*o:r.width?r.width:a?Math.round(a/1.3333333333333333):800),o&&!a?a=Math.round(i/o):o||(o=i/a)),c({},t,{width:i,height:a,aspectRatio:o,layout:e,formats:l}))}function M(t,e=20){var i;t=S(t);const{generateImageSource:a,filename:r,aspectRatio:s}=t;return null==(i=a(r,e,Math.round(e/s),t.sourceMetadata.format||"jpg",t.fit,t.options))?void 0:i.src}function L(t){t=S(t);let{pluginName:e,sourceMetadata:i,generateImageSource:a,layout:r,fit:s,options:n,width:l,height:d,filename:h,reporter:u={warn:w},backgroundColor:y,placeholderURL:b}=t;if(e||u.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof a)throw new Error("generateImageSource must be a function");var M;i&&(i.width||i.height)?i.format||(i.format=E(h)):i={width:l,height:d,format:(null==(M=i)?void 0:M.format)||E(h)||"auto"};const L=new Set(t.formats);(0===L.size||L.has("auto")||L.has(""))&&(L.delete("auto"),L.delete(""),L.add(i.format)),L.has("jpg")&&L.has("png")&&(u.warn(`[${e}] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead`),L.delete("jpg"===i.format?"png":"jpg"));const N=function(t){const{width:e,height:i,filename:a,layout:r="constrained",sourceMetadata:s,reporter:n={warn:w},breakpoints:l=f}=t,d=Object.entries({width:e,height:i}).filter(([t,e])=>"number"==typeof e&&e<1);if(d.length)throw new Error(`Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are ${d.map(t=>t.join(": ")).join(", ")}`);return"fixed"===r?function({filename:t,sourceMetadata:e,width:i,height:a,fit:r="cover",outputPixelDensities:s=m,reporter:n={warn:w}}){let l=e.width/e.height;const d=k(s);if(i&&a){const t=$(e,{width:i,height:a,fit:r});i=t.width,a=t.height,l=t.aspectRatio}i?a||(a=Math.round(i/l)):i=a?Math.round(a*l):800;const h=i;if(e.width<i||e.height<a){const r=e.width<i?"width":"height";n.warn(o(p||(p=g`
    The requested ${0} "${0}px" for the image ${0} was larger than the actual image ${0} of ${0}px. If possible, replace the current image with a larger one.`),r,"width"===r?i:a,t,r,e[r])),"width"===r?(i=e.width,a=Math.round(i/l)):i=(a=e.height)*l}return{sizes:d.filter(t=>t>=1).map(t=>Math.round(t*i)).filter(t=>t<=e.width),aspectRatio:l,presentationWidth:h,presentationHeight:Math.round(h/l),unscaledWidth:i}}(t):"constrained"===r?R(t):"fullWidth"===r?R(c({breakpoints:l},t)):(n.warn(`No valid layout was provided for the image at ${a}. Valid image layouts are fixed, fullWidth, and constrained. Found ${r}`),{sizes:[s.width],presentationWidth:s.width,presentationHeight:s.height,aspectRatio:s.width/s.height,unscaledWidth:s.width})}(c({},t,{sourceMetadata:i})),x={sources:[]};let j=t.sizes;j||(j=((t,e)=>{switch(e){case"constrained":return`(min-width: ${t}px) ${t}px, 100vw`;case"fixed":return`${t}px`;case"fullWidth":return"100vw";default:return}})(N.presentationWidth,r)),L.forEach(t=>{const i=N.sizes.map(i=>{const r=a(h,i,Math.round(i/N.aspectRatio),t,s,n);if(null!=r&&r.width&&r.height&&r.src&&r.format)return r;u.warn(`[${e}] The resolver for image ${h} returned an invalid value.`)}).filter(Boolean);if("jpg"===t||"png"===t||"auto"===t){const t=i.find(t=>t.width===N.unscaledWidth)||i[0];t&&(x.fallback={src:t.src,srcSet:v(i),sizes:j})}else{var r;null==(r=x.sources)||r.push({srcSet:v(i),sizes:j,type:`image/${t}`})}});const I={images:x,layout:r,backgroundColor:y};switch(b&&(I.placeholder={fallback:b}),r){case"fixed":I.width=N.presentationWidth,I.height=N.presentationHeight;break;case"fullWidth":I.width=1,I.height=1/N.aspectRatio;break;case"constrained":I.width=t.width||N.presentationWidth||1,I.height=(I.width||1)/N.aspectRatio}return I}const k=t=>Array.from(new Set([1,...t])).sort(b);function R({sourceMetadata:t,width:e,height:i,fit:a="cover",outputPixelDensities:r=m,breakpoints:s,layout:o}){let n,l=t.width/t.height;const d=k(r);if(e&&i){const r=$(t,{width:e,height:i,fit:a});e=r.width,i=r.height,l=r.aspectRatio}e=e&&Math.min(e,t.width),i=i&&Math.min(i,t.height),e||i||(i=(e=Math.min(800,t.width))/l),e||(e=i*l);const h=e;return(t.width<e||t.height<i)&&(e=t.width,i=t.height),e=Math.round(e),(null==s?void 0:s.length)>0?(n=s.filter(e=>e<=t.width),n.length<s.length&&!n.includes(t.width)&&n.push(t.width)):(n=d.map(t=>Math.round(t*e)),n=n.filter(e=>e<=t.width)),"constrained"!==o||n.includes(e)||n.push(e),n=n.sort(b),{sizes:n,aspectRatio:l,presentationWidth:h,presentationHeight:Math.round(h/l),unscaledWidth:e}}function $(t,e){const i=t.width/t.height;let a=e.width,r=e.height;switch(e.fit){case"fill":a=e.width?e.width:t.width,r=e.height?e.height:t.height;break;case"inside":{const t=e.width?e.width:Number.MAX_SAFE_INTEGER,s=e.height?e.height:Number.MAX_SAFE_INTEGER;a=Math.min(t,Math.round(s*i)),r=Math.min(s,Math.round(t/i));break}case"outside":{const t=e.width?e.width:0,s=e.height?e.height:0;a=Math.max(t,Math.round(s*i)),r=Math.max(s,Math.round(t/i));break}default:e.width&&!e.height&&(a=e.width,r=Math.round(e.width/i)),e.height&&!e.width&&(a=Math.round(e.height*i),r=e.height)}return{width:a,height:r,aspectRatio:a/r}}const N=["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"],x=["images","placeholder"],j=new Set,I=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function _(){return"undefined"!=typeof GATSBY___IMAGE&&GATSBY___IMAGE}function O(t){t&&j.add(t)}function W(t){return j.has(t)}const z=t=>{var e;return(t=>{var e,i;return Boolean(null==t||null==(e=t.images)||null==(i=e.fallback)?void 0:i.src)})(t)?t:(t=>Boolean(null==t?void 0:t.gatsbyImageData))(t)?t.gatsbyImageData:null==t||null==(e=t.childImageSharp)?void 0:e.gatsbyImageData},T=t=>{var e,i,a;return null==(e=z(t))||null==(i=e.images)||null==(a=i.fallback)?void 0:a.src},H=t=>{var e,i,a;return null==(e=z(t))||null==(i=e.images)||null==(a=i.fallback)?void 0:a.srcSet};function D(t){var e;let{baseUrl:i,urlBuilder:a,sourceWidth:r,sourceHeight:s,pluginName:o="getImageData",formats:n=["auto"],breakpoints:l,options:d}=t,h=u(t,N);return null!=(e=l)&&e.length||"fullWidth"!==h.layout&&"FULL_WIDTH"!==h.layout||(l=y),L(c({},h,{pluginName:o,generateImageSource:(t,e,i,r)=>({width:e,height:i,format:r,src:a({baseUrl:t,width:e,height:i,options:d,format:r})}),filename:i,formats:n,breakpoints:l,sourceMetadata:{width:r,height:s,format:"auto"}}))}function C(t,e,i,a,r,s,o,n={}){var l,d;return null!=o&&o.current&&!("objectFit"in document.documentElement.style)&&(o.current.dataset.objectFit=null!=(l=n.objectFit)?l:"cover",o.current.dataset.objectPosition=`${null!=(d=n.objectPosition)?d:"50% 50%"}`,async function(t){"objectFitPolyfill"in window||await import("objectFitPolyfill"),window.objectFitPolyfill(t.current)}(o)),_()||(n=c({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},n)),c({},i,{loading:a,shouldLoad:t,"data-main-image":"",style:c({},n,{opacity:e?1:0}),onLoad:function(t){if(e)return;O(s);const i=t.currentTarget,a=new Image;a.src=i.currentSrc,a.decode?a.decode().catch(()=>{}).then(()=>{r(!0)}):r(!0)},ref:o})}function P(t,e,i,a,r,s,o,n){const l={};s&&(l.backgroundColor=s,"fixed"===i?(l.width=a,l.height=r,l.backgroundColor=s,l.position="relative"):("constrained"===i||"fullWidth"===i)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),o&&(l.objectFit=o),n&&(l.objectPosition=n);const d=c({},t,{"aria-hidden":!0,"data-placeholder-image":"",style:c({opacity:e?0:1,transition:"opacity 500ms linear"},l)});return _()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d}function q(t,e){const{images:i,placeholder:a}=t,r=c({},u(t,x),{images:c({},i,{sources:[]}),placeholder:a&&c({},a,{sources:[]})});var s;return e.forEach(({media:e,image:i})=>{e?(i.layout!==t.layout&&"development"===process.env.NODE_ENV&&console.warn(`[gatsby-plugin-image] Mismatched image layout: expected "${t.layout}" but received "${i.layout}". All art-directed images use the same layout as the default image`),r.images.sources.push(...i.images.sources.map(t=>c({},t,{media:e})),{media:e,srcSet:i.images.fallback.srcSet}),r.placeholder&&r.placeholder.sources.push({media:e,srcSet:i.placeholder.fallback})):"development"===process.env.NODE_ENV&&console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.")}),r.images.sources.push(...i.sources),null!=a&&a.sources&&(null==(s=r.placeholder)||s.sources.push(...a.sources)),r}const A=["children"],F=function({layout:t,width:i,height:a}){return"fullWidth"===t?e.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/i*100+"%"}}):"constrained"===t?e.createElement("div",{style:{maxWidth:i,display:"block"}},e.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg height='${a}' width='${i}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},V=function(t){let{children:a}=t,r=u(t,A);return e.createElement(i,null,e.createElement(F,c({},r)),a,!1)},G=["src","srcSet","loading","alt","shouldLoad","innerRef"],U=["fallback","sources","shouldLoad"],B=function(t){let{src:i,srcSet:a,loading:r,alt:s="",shouldLoad:o,innerRef:n}=t,l=u(t,G);return e.createElement("img",c({},l,{decoding:"async",loading:r,src:o?i:void 0,"data-src":o?void 0:i,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s,ref:n}))},J=a(function(t,i){let{fallback:a,sources:r=[],shouldLoad:s=!0}=t,o=u(t,U);const n=o.sizes||(null==a?void 0:a.sizes),l=e.createElement(B,c({},o,a,{sizes:n,shouldLoad:s,innerRef:i}));return r.length?e.createElement("picture",null,r.map(({media:t,srcSet:i,type:a})=>e.createElement("source",{key:`${t}-${a}-${i}`,type:a,media:t,srcSet:s?i:void 0,"data-srcset":s?void 0:i,sizes:n})),l):l});var Y;B.propTypes={src:l.string.isRequired,alt:l.string.isRequired,sizes:l.string,srcSet:l.string,shouldLoad:l.bool},J.displayName="Picture",J.propTypes={alt:l.string.isRequired,shouldLoad:l.bool,fallback:l.exact({src:l.string.isRequired,srcSet:l.string,sizes:l.string}),sources:l.arrayOf(l.oneOfType([l.exact({media:l.string.isRequired,type:l.string,sizes:l.string,srcSet:l.string.isRequired}),l.exact({media:l.string,type:l.string.isRequired,sizes:l.string,srcSet:l.string.isRequired})]))};const X=["fallback"],Z=function(t){let{fallback:i}=t,a=u(t,X);return i?e.createElement(J,c({},a,{fallback:{src:i},"aria-hidden":!0,alt:""})):e.createElement("div",c({},a))};Z.displayName="Placeholder",Z.propTypes={fallback:l.string,sources:null==(Y=J.propTypes)?void 0:Y.sources,alt:function(t,e,i){return t[e]?new Error(`Invalid prop \`${e}\` supplied to \`${i}\`. Validation failed.`):null}};const K=a(function(t,i){return e.createElement(e.Fragment,null,e.createElement(J,c({ref:i},t)),e.createElement("noscript",null,e.createElement(J,c({},t,{shouldLoad:!0}))))});K.displayName="MainImage",K.propTypes=J.propTypes;const Q=(t,e,i,...a)=>t.alt||""===t.alt?d.string(t,e,i,...a):new Error(`The "alt" prop is required in ${i}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`),tt={image:d.object.isRequired,alt:Q},et=["style","className"];class it extends r{constructor(t){super(t),this.root=s(),this.hydrated={current:!1},this.forceRender={current:"development"===process.env.NODE_ENV},this.lazyHydrator=null,this.ref=s(),this.unobserveRef=void 0,this.state={isLoading:I(),isLoaded:!1}}_lazyHydrate(t,e){const i=this.root.current.querySelector("[data-gatsby-image-ssr]");return I()&&i&&!this.hydrated.current?(this.hydrated.current=!0,Promise.resolve()):import("./lazy-hydrate-5c228ac8.js").then(({lazyHydrate:i})=>{const a=JSON.stringify(this.props.image.images);this.lazyHydrator=i(c({image:t.image.images,isLoading:e.isLoading||W(a),isLoaded:e.isLoaded||W(a),toggleIsLoaded:()=>{null==t.onLoad||t.onLoad(),this.setState({isLoaded:!0})},ref:this.ref},t),this.root,this.hydrated,this.forceRender)})}_setupIntersectionObserver(t=!0){import("./intersection-observer-1b2d7fcb.js").then(({createIntersectionObserver:e})=>{const i=e(()=>{if(this.root.current){var e,i;const a=JSON.stringify(this.props.image.images);null==(e=(i=this.props).onStartLoad)||e.call(i,{wasCached:t&&W(a)}),this.setState({isLoading:!0,isLoaded:t&&W(a)})}});this.root.current&&(this.unobserveRef=i(this.root))})}shouldComponentUpdate(t,e){let i=!1;return this.state.isLoading||!e.isLoading||e.isLoaded||(this.forceRender.current=!0),this.props.image.images!==t.image.images&&(this.unobserveRef&&(this.unobserveRef(),this.hydrated.current&&this.lazyHydrator&&h(null,this.root.current)),this.setState({isLoading:!1,isLoaded:!1},()=>{this._setupIntersectionObserver(!1)}),i=!0),this.root.current&&!i&&this._lazyHydrate(t,e),!1}componentDidMount(){if(this.root.current){const r=this.root.current.querySelector("[data-gatsby-image-ssr]"),s=JSON.stringify(this.props.image.images);if(I()&&r&&_()){var t,e;if(null==(t=(e=this.props).onStartLoad)||t.call(e,{wasCached:!1}),r.complete){var i,a;null==(i=(a=this.props).onLoad)||i.call(a),O(s)}else{const t=this;r.addEventListener("load",function e(){r.removeEventListener("load",e),null==t.props.onLoad||t.props.onLoad(),O(s)})}return}this._setupIntersectionObserver(!0)}}componentWillUnmount(){this.unobserveRef&&(this.unobserveRef(),this.hydrated.current&&this.lazyHydrator&&this.lazyHydrator())}render(){const t=this.props.as||"div",{width:i,height:a,layout:r}=this.props.image,s=function(t,e,i){const a={};let r="gatsby-image-wrapper";return _()||(a.position="relative",a.overflow="hidden"),"fixed"===i?(a.width=t,a.height=e):"constrained"===i&&(_()||(a.display="inline-block",a.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:a}}(i,a,r),{style:o,className:n}=s,l=u(s,et);let d=this.props.className;this.props.class&&(d=this.props.class);const h=function(t,e,i){let a=null;return"fullWidth"===t&&(a=`<div aria-hidden="true" style="padding-top: ${i/e*100}%;"></div>`),"constrained"===t&&(a=`<div style="max-width: ${e}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='${i}' width='${e}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),a}(r,i,a);return e.createElement(t,c({},l,{style:c({},o,this.props.style,{backgroundColor:this.props.backgroundColor}),className:`${n}${d?` ${d}`:""}`,ref:this.root,dangerouslySetInnerHTML:{__html:h},suppressHydrationWarning:!0}))}}const at=function(t){if(!t.image)return"development"===process.env.NODE_ENV&&console.warn("[gatsby-plugin-image] Missing image prop"),null;_()||"development"!==process.env.NODE_ENV||console.warn('[gatsby-plugin-image] You\'re missing out on some cool performance features. Please add "gatsby-plugin-image" to your gatsby-config.js');const{className:i,class:a,backgroundColor:r,image:s}=t,{width:o,height:n,layout:l}=s,d=JSON.stringify([o,n,l,i,a,r]);return e.createElement(it,c({key:d},t))};at.propTypes=tt,at.displayName="GatsbyImage";const rt=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],st=(t,e,...i)=>"fullWidth"!==t.layout||"width"!==e&&"height"!==e||!t[e]?d.number(t,e,...i):new Error(`"${e}" ${t[e]} may not be passed when layout is fullWidth.`),ot=new Set(["fixed","fullWidth","constrained"]),nt={src:d.string.isRequired,alt:Q,width:st,height:st,sizes:d.string,layout:t=>{if(void 0!==t.layout&&!ot.has(t.layout))return new Error(`Invalid value ${t.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}},lt=function(t){return function(i){let{src:a,__imageData:r,__error:s}=i,o=u(i,rt);return s&&console.warn(s),r?e.createElement(t,c({image:r},o)):(console.warn("Image not loaded",a),s||"development"!==process.env.NODE_ENV||console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'),null)}}(at);function dt({children:e}){return t.useEffect(()=>{import("./lazy-hydrate-5c228ac8.js")},[]),e}lt.displayName="StaticImage",lt.propTypes=nt;export{at as G,V as L,K as M,Z as P,lt as S,u as _,c as a,C as b,dt as c,z as d,T as e,H as f,P as g,D as h,L as i,M as j,q as w};
//# sourceMappingURL=index.browser-aa98ba4b.js.map
