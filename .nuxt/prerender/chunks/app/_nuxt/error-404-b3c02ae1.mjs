import { _ as _export_sfc, r as useHead, s as __nuxt_component_0 } from '../server.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/vue@3.2.47/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/vue@3.2.47/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/ofetch@1.0.1/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/unctx@2.1.2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/@unhead+ssr@1.1.25/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/unhead@1.1.25/node_modules/unhead/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/@unhead+shared@1.1.25/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/vue-router@4.1.6_vue@3.2.47/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/h3@1.6.4/node_modules/h3/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/ufo@1.1.1/node_modules/ufo/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/@vueuse+core@9.13.0_vue@3.2.47/node_modules/@vueuse/core/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/@vue+shared@3.2.47/node_modules/@vue/shared/index.js';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/lodash-unified@1.0.3_@types+lodash-es@4.17.7_lodash-es@4.17.21_lodash@4.17.21/node_modules/lodash-unified/import.js';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/node-fetch-native@1.0.2/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/unenv@1.2.2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/ohash@1.0.0/node_modules/ohash/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/unstorage@1.4.1/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/unstorage@1.4.1/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/radix3@1.0.1/node_modules/radix3/dist/index.mjs';

const _sfc_main = {
  __name: "error-404",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: Number,
      default: 404
    },
    statusMessage: {
      type: String,
      default: "Not Found"
    },
    description: {
      type: String,
      default: "Sorry, the page you are looking for could not be found."
    },
    backHome: {
      type: String,
      default: "Go back home"
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-5d12fb99><div class="fixed left-0 right-0 spotlight z-10" data-v-5d12fb99></div><div class="max-w-520px text-center z-20" data-v-5d12fb99><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-5d12fb99>${ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-5d12fb99>${ssrInterpolate(__props.description)}</p><div class="w-full flex items-center justify-center" data-v-5d12fb99>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.backHome)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.backHome), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@1.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5d12fb99"]]);

export { error404 as default };
//# sourceMappingURL=error-404-b3c02ae1.mjs.map
