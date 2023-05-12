import { E as ElButton } from './el-button-cf6260c8.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/vue@3.2.47/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/vue@3.2.47/node_modules/vue/server-renderer/index.mjs';
import './index-6a2618d9.mjs';
import '../server.mjs';
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
import './use-form-item-7f2f4320.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/public_api.js';

const _sfc_main = {
  __name: "button",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = false;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_button, {
        color: "#626aef",
        dark: isDark
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Default`);
          } else {
            return [
              createTextVNode("Default")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        color: "#626aef",
        dark: isDark,
        plain: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Plain`);
          } else {
            return [
              createTextVNode("Plain")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        color: "#626aef",
        dark: isDark,
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Disabled`);
          } else {
            return [
              createTextVNode("Disabled")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        color: "#626aef",
        dark: isDark,
        disabled: "",
        plain: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Disabled Plain`);
          } else {
            return [
              createTextVNode("Disabled Plain")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=button-16587226.mjs.map
