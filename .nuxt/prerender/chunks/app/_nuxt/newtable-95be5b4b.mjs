import { defineComponent, openBlock, createElementBlock, createElementVNode, unref, computed, normalizeClass, normalizeStyle, renderSlot, createVNode, toDisplayString, createCommentVNode, mergeProps, useSSRContext, provide, ref, watch, toRef, shallowRef, isVNode, getCurrentInstance, inject, h, nextTick, resolveDynamicComponent, reactive, withModifiers } from 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/vue@3.2.47/node_modules/vue/index.mjs';
import { isArray, isFunction, isObject, isString, hasOwn } from 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/@vue+shared@3.2.47/node_modules/@vue/shared/index.js';
import { debounce, get, castArray, memoize } from 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/lodash-unified@1.0.3_@types+lodash-es@4.17.7_lodash-es@4.17.21_lodash@4.17.21/node_modules/lodash-unified/import.js';
import { isNumber, isClient } from 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/@vueuse+core@9.13.0_vue@3.2.47/node_modules/@vueuse/core/index.mjs';
import { e as addUnit, E as ElIcon, g as sort_up_default, i as sort_down_default, b as arrow_right_default, j as isUndefined } from './index-6a2618d9.mjs';
import { u as useNamespace, i as useId, b as buildProps, w as withInstall, g as buildProp, d as definePropType, e as _export_sfc$1, t as throwError } from '../server.mjs';
import { m as mutable } from './typescript-f58cd02a.mjs';
import { u as useLocale, B as BAR_MAP } from './el-scrollbar-749a44e9.mjs';
import memoOne from 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/memoize-one@6.0.0/node_modules/memoize-one/dist/memoize-one.cjs.js';
import { g as getScrollBarWidth } from './scroll-e07baaf7.mjs';
import { ssrRenderComponent } from 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/vue@3.2.47/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/ofetch@1.0.1/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/unctx@2.1.2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/@unhead+ssr@1.1.25/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/unhead@1.1.25/node_modules/unhead/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/@unhead+shared@1.1.25/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/vue-router@4.1.6_vue@3.2.47/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/h3@1.6.4/node_modules/h3/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/ufo@1.1.1/node_modules/ufo/dist/index.mjs';
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

const rAF = (fn) => isClient ? window.requestAnimationFrame(fn) : setTimeout(fn, 16);
const cAF = (handle) => isClient ? window.cancelAnimationFrame(handle) : clearTimeout(handle);
const _hoisted_1$1 = {
  viewBox: "0 0 79 86",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
const _hoisted_2$1 = ["id"];
const _hoisted_3 = ["stop-color"];
const _hoisted_4 = ["stop-color"];
const _hoisted_5 = ["id"];
const _hoisted_6 = ["stop-color"];
const _hoisted_7 = ["stop-color"];
const _hoisted_8 = ["id"];
const _hoisted_9 = {
  id: "Illustrations",
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_10 = {
  id: "B-type",
  transform: "translate(-1268.000000, -535.000000)"
};
const _hoisted_11 = {
  id: "Group-2",
  transform: "translate(1268.000000, 535.000000)"
};
const _hoisted_12 = ["fill"];
const _hoisted_13 = ["fill"];
const _hoisted_14 = {
  id: "Group-Copy",
  transform: "translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"
};
const _hoisted_15 = ["fill"];
const _hoisted_16 = ["fill"];
const _hoisted_17 = ["fill"];
const _hoisted_18 = ["fill"];
const _hoisted_19 = ["fill"];
const _hoisted_20 = {
  id: "Rectangle-Copy-17",
  transform: "translate(53.000000, 45.000000)"
};
const _hoisted_21 = ["fill", "xlink:href"];
const _hoisted_22 = ["fill", "mask"];
const _hoisted_23 = ["fill"];
const __default__$1 = /* @__PURE__ */ defineComponent({
  name: "ImgEmpty"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const ns = useNamespace("empty");
    const id = useId();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", _hoisted_1$1, [
        createElementVNode("defs", null, [
          createElementVNode("linearGradient", {
            id: `linearGradient-1-${unref(id)}`,
            x1: "38.8503086%",
            y1: "0%",
            x2: "61.1496914%",
            y2: "100%"
          }, [
            createElementVNode("stop", {
              "stop-color": `var(${unref(ns).cssVarBlockName("fill-color-1")})`,
              offset: "0%"
            }, null, 8, _hoisted_3),
            createElementVNode("stop", {
              "stop-color": `var(${unref(ns).cssVarBlockName("fill-color-4")})`,
              offset: "100%"
            }, null, 8, _hoisted_4)
          ], 8, _hoisted_2$1),
          createElementVNode("linearGradient", {
            id: `linearGradient-2-${unref(id)}`,
            x1: "0%",
            y1: "9.5%",
            x2: "100%",
            y2: "90.5%"
          }, [
            createElementVNode("stop", {
              "stop-color": `var(${unref(ns).cssVarBlockName("fill-color-1")})`,
              offset: "0%"
            }, null, 8, _hoisted_6),
            createElementVNode("stop", {
              "stop-color": `var(${unref(ns).cssVarBlockName("fill-color-6")})`,
              offset: "100%"
            }, null, 8, _hoisted_7)
          ], 8, _hoisted_5),
          createElementVNode("rect", {
            id: `path-3-${unref(id)}`,
            x: "0",
            y: "0",
            width: "17",
            height: "36"
          }, null, 8, _hoisted_8)
        ]),
        createElementVNode("g", _hoisted_9, [
          createElementVNode("g", _hoisted_10, [
            createElementVNode("g", _hoisted_11, [
              createElementVNode("path", {
                id: "Oval-Copy-2",
                d: "M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",
                fill: `var(${unref(ns).cssVarBlockName("fill-color-3")})`
              }, null, 8, _hoisted_12),
              createElementVNode("polygon", {
                id: "Rectangle-Copy-14",
                fill: `var(${unref(ns).cssVarBlockName("fill-color-7")})`,
                transform: "translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",
                points: "13 58 53 58 42 45 2 45"
              }, null, 8, _hoisted_13),
              createElementVNode("g", _hoisted_14, [
                createElementVNode("polygon", {
                  id: "Rectangle-Copy-10",
                  fill: `var(${unref(ns).cssVarBlockName("fill-color-7")})`,
                  transform: "translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",
                  points: "2.84078316e-14 3 18 3 23 7 5 7"
                }, null, 8, _hoisted_15),
                createElementVNode("polygon", {
                  id: "Rectangle-Copy-11",
                  fill: `var(${unref(ns).cssVarBlockName("fill-color-5")})`,
                  points: "-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"
                }, null, 8, _hoisted_16),
                createElementVNode("rect", {
                  id: "Rectangle-Copy-12",
                  fill: `url(#linearGradient-1-${unref(id)})`,
                  transform: "translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",
                  x: "38",
                  y: "7",
                  width: "17",
                  height: "36"
                }, null, 8, _hoisted_17),
                createElementVNode("polygon", {
                  id: "Rectangle-Copy-13",
                  fill: `var(${unref(ns).cssVarBlockName("fill-color-2")})`,
                  transform: "translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",
                  points: "24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"
                }, null, 8, _hoisted_18)
              ]),
              createElementVNode("rect", {
                id: "Rectangle-Copy-15",
                fill: `url(#linearGradient-2-${unref(id)})`,
                x: "13",
                y: "45",
                width: "40",
                height: "36"
              }, null, 8, _hoisted_19),
              createElementVNode("g", _hoisted_20, [
                createElementVNode("use", {
                  id: "Mask",
                  fill: `var(${unref(ns).cssVarBlockName("fill-color-8")})`,
                  transform: "translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ",
                  "xlink:href": `#path-3-${unref(id)}`
                }, null, 8, _hoisted_21),
                createElementVNode("polygon", {
                  id: "Rectangle-Copy",
                  fill: `var(${unref(ns).cssVarBlockName("fill-color-9")})`,
                  mask: `url(#mask-4-${unref(id)})`,
                  transform: "translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",
                  points: "7 0 24 0 20 18 7 16.5"
                }, null, 8, _hoisted_22)
              ]),
              createElementVNode("polygon", {
                id: "Rectangle-Copy-18",
                fill: `var(${unref(ns).cssVarBlockName("fill-color-2")})`,
                transform: "translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",
                points: "62 45 79 45 70 58 53 58"
              }, null, 8, _hoisted_23)
            ])
          ])
        ])
      ]);
    };
  }
});
var ImgEmpty = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/img-empty.vue"]]);
const emptyProps = buildProps({
  image: {
    type: String,
    default: ""
  },
  imageSize: Number,
  description: {
    type: String,
    default: ""
  }
});
const _hoisted_1 = ["src"];
const _hoisted_2 = { key: 1 };
const __default__ = /* @__PURE__ */ defineComponent({
  name: "ElEmpty"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: emptyProps,
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const ns = useNamespace("empty");
    const emptyDescription = computed(() => props.description || t("el.table.emptyText"));
    const imageStyle = computed(() => ({
      width: addUnit(props.imageSize)
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("image")),
          style: normalizeStyle(unref(imageStyle))
        }, [
          _ctx.image ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: _ctx.image,
            ondragstart: "return false"
          }, null, 8, _hoisted_1)) : renderSlot(_ctx.$slots, "image", { key: 1 }, () => [
            createVNode(ImgEmpty)
          ])
        ], 6),
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("description"))
        }, [
          _ctx.$slots.description ? renderSlot(_ctx.$slots, "description", { key: 0 }) : (openBlock(), createElementBlock("p", _hoisted_2, toDisplayString(unref(emptyDescription)), 1))
        ], 2),
        _ctx.$slots.default ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("bottom"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Empty = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/empty.vue"]]);
const ElEmpty = withInstall(Empty);
const useCache = () => {
  const vm = getCurrentInstance();
  const props = vm.proxy.$props;
  return computed(() => {
    const _getItemStyleCache = (_, __, ___) => ({});
    return props.perfMode ? memoize(_getItemStyleCache) : memoOne(_getItemStyleCache);
  });
};
const DEFAULT_DYNAMIC_LIST_ITEM_SIZE = 50;
const ITEM_RENDER_EVT = "itemRendered";
const SCROLL_EVT = "scroll";
const FORWARD = "forward";
const BACKWARD = "backward";
const AUTO_ALIGNMENT = "auto";
const SMART_ALIGNMENT = "smart";
const START_ALIGNMENT = "start";
const CENTERED_ALIGNMENT = "center";
const END_ALIGNMENT = "end";
const HORIZONTAL = "horizontal";
const VERTICAL = "vertical";
const RTL = "rtl";
const RTL_OFFSET_NAG = "negative";
const RTL_OFFSET_POS_ASC = "positive-ascending";
const RTL_OFFSET_POS_DESC = "positive-descending";
const ScrollbarDirKey = {
  [HORIZONTAL]: "left",
  [VERTICAL]: "top"
};
const SCROLLBAR_MIN_SIZE = 20;
const itemSize = buildProp({
  type: definePropType([Number, Function]),
  required: true
});
const estimatedItemSize = buildProp({
  type: Number
});
const cache = buildProp({
  type: Number,
  default: 2
});
const direction = buildProp({
  type: String,
  values: ["ltr", "rtl"],
  default: "ltr"
});
const initScrollOffset = buildProp({
  type: Number,
  default: 0
});
const total = buildProp({
  type: Number,
  required: true
});
const layout = buildProp({
  type: String,
  values: ["horizontal", "vertical"],
  default: VERTICAL
});
const virtualizedProps = buildProps({
  className: {
    type: String,
    default: ""
  },
  containerElement: {
    type: definePropType([String, Object]),
    default: "div"
  },
  data: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  direction,
  height: {
    type: [String, Number],
    required: true
  },
  innerElement: {
    type: [String, Object],
    default: "div"
  },
  style: {
    type: definePropType([Object, String, Array])
  },
  useIsScrolling: {
    type: Boolean,
    default: false
  },
  width: {
    type: [Number, String],
    required: false
  },
  perfMode: {
    type: Boolean,
    default: true
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: false
  }
});
const virtualizedListProps = buildProps({
  cache,
  estimatedItemSize,
  layout,
  initScrollOffset,
  total,
  itemSize,
  ...virtualizedProps
});
const scrollbarSize = {
  type: Number,
  default: 6
};
const startGap = { type: Number, default: 0 };
const endGap = { type: Number, default: 2 };
const virtualizedGridProps = buildProps({
  columnCache: cache,
  columnWidth: itemSize,
  estimatedColumnWidth: estimatedItemSize,
  estimatedRowHeight: estimatedItemSize,
  initScrollLeft: initScrollOffset,
  initScrollTop: initScrollOffset,
  itemKey: {
    type: definePropType(Function),
    default: ({
      columnIndex,
      rowIndex
    }) => `${rowIndex}:${columnIndex}`
  },
  rowCache: cache,
  rowHeight: itemSize,
  totalColumn: total,
  totalRow: total,
  hScrollbarSize: scrollbarSize,
  vScrollbarSize: scrollbarSize,
  scrollbarStartGap: startGap,
  scrollbarEndGap: endGap,
  role: String,
  ...virtualizedProps
});
const virtualizedScrollbarProps = buildProps({
  alwaysOn: Boolean,
  class: String,
  layout,
  total,
  ratio: {
    type: Number,
    required: true
  },
  clientSize: {
    type: Number,
    required: true
  },
  scrollFrom: {
    type: Number,
    required: true
  },
  scrollbarSize,
  startGap,
  endGap,
  visible: Boolean
});
const getScrollDir = (prev, cur) => prev < cur ? FORWARD : BACKWARD;
const isRTL = (dir) => dir === RTL;
let cachedRTLResult = null;
function getRTLOffsetType(recalculate = false) {
  if (cachedRTLResult === null || recalculate) {
    const outerDiv = document.createElement("div");
    const outerStyle = outerDiv.style;
    outerStyle.width = "50px";
    outerStyle.height = "50px";
    outerStyle.overflow = "scroll";
    outerStyle.direction = "rtl";
    const innerDiv = document.createElement("div");
    const innerStyle = innerDiv.style;
    innerStyle.width = "100px";
    innerStyle.height = "100px";
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);
    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = RTL_OFFSET_POS_DESC;
    } else {
      outerDiv.scrollLeft = 1;
      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = RTL_OFFSET_NAG;
      } else {
        cachedRTLResult = RTL_OFFSET_POS_ASC;
      }
    }
    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }
  return cachedRTLResult;
}
function renderThumbStyle({ move, size, bar }, layout2) {
  const style = {};
  const translate = `translate${bar.axis}(${move}px)`;
  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;
  if (layout2 === "horizontal") {
    style.height = "100%";
  } else {
    style.width = "100%";
  }
  return style;
}
const ScrollBar = /* @__PURE__ */ defineComponent({
  name: "ElVirtualScrollBar",
  props: virtualizedScrollbarProps,
  emits: ["scroll", "start-move", "stop-move"],
  setup(props, { emit }) {
    const GAP = computed(() => props.startGap + props.endGap);
    const nsVirtualScrollbar = useNamespace("virtual-scrollbar");
    const nsScrollbar = useNamespace("scrollbar");
    const trackRef = ref();
    const thumbRef = ref();
    let frameHandle = null;
    let onselectstartStore = null;
    const state = reactive({
      isDragging: false,
      traveled: 0
    });
    const bar = computed(() => BAR_MAP[props.layout]);
    const trackSize = computed(() => props.clientSize - unref(GAP));
    const trackStyle = computed(() => ({
      position: "absolute",
      width: `${HORIZONTAL === props.layout ? trackSize.value : props.scrollbarSize}px`,
      height: `${HORIZONTAL === props.layout ? props.scrollbarSize : trackSize.value}px`,
      [ScrollbarDirKey[props.layout]]: "2px",
      right: "2px",
      bottom: "2px",
      borderRadius: "4px"
    }));
    const thumbSize = computed(() => {
      const ratio = props.ratio;
      const clientSize = props.clientSize;
      if (ratio >= 100) {
        return Number.POSITIVE_INFINITY;
      }
      if (ratio >= 50) {
        return ratio * clientSize / 100;
      }
      const SCROLLBAR_MAX_SIZE = clientSize / 3;
      return Math.floor(Math.min(Math.max(ratio * clientSize, SCROLLBAR_MIN_SIZE), SCROLLBAR_MAX_SIZE));
    });
    const thumbStyle = computed(() => {
      if (!Number.isFinite(thumbSize.value)) {
        return {
          display: "none"
        };
      }
      const thumb = `${thumbSize.value}px`;
      const style = renderThumbStyle({
        bar: bar.value,
        size: thumb,
        move: state.traveled
      }, props.layout);
      return style;
    });
    const totalSteps = computed(() => Math.floor(props.clientSize - thumbSize.value - unref(GAP)));
    const attachEvents = () => {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      const thumbEl = unref(thumbRef);
      if (!thumbEl)
        return;
      onselectstartStore = document.onselectstart;
      document.onselectstart = () => false;
      thumbEl.addEventListener("touchmove", onMouseMove);
      thumbEl.addEventListener("touchend", onMouseUp);
    };
    const detachEvents = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      document.onselectstart = onselectstartStore;
      onselectstartStore = null;
      const thumbEl = unref(thumbRef);
      if (!thumbEl)
        return;
      thumbEl.removeEventListener("touchmove", onMouseMove);
      thumbEl.removeEventListener("touchend", onMouseUp);
    };
    const onThumbMouseDown = (e) => {
      e.stopImmediatePropagation();
      if (e.ctrlKey || [1, 2].includes(e.button)) {
        return;
      }
      state.isDragging = true;
      state[bar.value.axis] = e.currentTarget[bar.value.offset] - (e[bar.value.client] - e.currentTarget.getBoundingClientRect()[bar.value.direction]);
      emit("start-move");
      attachEvents();
    };
    const onMouseUp = () => {
      state.isDragging = false;
      state[bar.value.axis] = 0;
      emit("stop-move");
      detachEvents();
    };
    const onMouseMove = (e) => {
      const { isDragging } = state;
      if (!isDragging)
        return;
      if (!thumbRef.value || !trackRef.value)
        return;
      const prevPage = state[bar.value.axis];
      if (!prevPage)
        return;
      cAF(frameHandle);
      const offset = (trackRef.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
      const thumbClickPosition = thumbRef.value[bar.value.offset] - prevPage;
      const distance = offset - thumbClickPosition;
      frameHandle = rAF(() => {
        state.traveled = Math.max(props.startGap, Math.min(distance, totalSteps.value));
        emit("scroll", distance, totalSteps.value);
      });
    };
    const clickTrackHandler = (e) => {
      const offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
      const thumbHalf = thumbRef.value[bar.value.offset] / 2;
      const distance = offset - thumbHalf;
      state.traveled = Math.max(0, Math.min(distance, totalSteps.value));
      emit("scroll", distance, totalSteps.value);
    };
    watch(() => props.scrollFrom, (v) => {
      if (state.isDragging)
        return;
      state.traveled = Math.ceil(v * totalSteps.value);
    });
    return () => {
      return h("div", {
        role: "presentation",
        ref: trackRef,
        class: [
          nsVirtualScrollbar.b(),
          props.class,
          (props.alwaysOn || state.isDragging) && "always-on"
        ],
        style: trackStyle.value,
        onMousedown: withModifiers(clickTrackHandler, ["stop", "prevent"]),
        onTouchstartPrevent: onThumbMouseDown
      }, h("div", {
        ref: thumbRef,
        class: nsScrollbar.e("thumb"),
        style: thumbStyle.value,
        onMousedown: onThumbMouseDown
      }, []));
    };
  }
});
const useGridWheel = ({ atXEndEdge, atXStartEdge, atYEndEdge, atYStartEdge }, onWheelDelta) => {
  let frameHandle = null;
  let xOffset = 0;
  let yOffset = 0;
  const hasReachedEdge = (x, y) => {
    const xEdgeReached = x <= 0 && atXStartEdge.value || x >= 0 && atXEndEdge.value;
    const yEdgeReached = y <= 0 && atYStartEdge.value || y >= 0 && atYEndEdge.value;
    return xEdgeReached && yEdgeReached;
  };
  const onWheel = (e) => {
    cAF(frameHandle);
    let x = e.deltaX;
    let y = e.deltaY;
    if (Math.abs(x) > Math.abs(y)) {
      y = 0;
    } else {
      x = 0;
    }
    if (e.shiftKey && y !== 0) {
      x = y;
      y = 0;
    }
    if (hasReachedEdge(xOffset, yOffset) && hasReachedEdge(xOffset + x, yOffset + y))
      return;
    xOffset += x;
    yOffset += y;
    e.preventDefault();
    frameHandle = rAF(() => {
      onWheelDelta(xOffset, yOffset);
      xOffset = 0;
      yOffset = 0;
    });
  };
  return {
    hasReachedEdge,
    onWheel
  };
};
const createGrid = ({
  name,
  clearCache,
  getColumnPosition,
  getColumnStartIndexForOffset,
  getColumnStopIndexForStartIndex,
  getEstimatedTotalHeight: getEstimatedTotalHeight2,
  getEstimatedTotalWidth: getEstimatedTotalWidth2,
  getColumnOffset,
  getRowOffset,
  getRowPosition,
  getRowStartIndexForOffset,
  getRowStopIndexForStartIndex,
  initCache,
  injectToInstance,
  validateProps
}) => {
  return /* @__PURE__ */ defineComponent({
    name: name != null ? name : "ElVirtualList",
    props: virtualizedGridProps,
    emits: [ITEM_RENDER_EVT, SCROLL_EVT],
    setup(props, { emit, expose, slots }) {
      const ns = useNamespace("vl");
      validateProps(props);
      const instance = getCurrentInstance();
      const cache2 = ref(initCache(props, instance));
      injectToInstance == null ? void 0 : injectToInstance(instance, cache2);
      const windowRef = ref();
      const hScrollbar = ref();
      const vScrollbar = ref();
      const innerRef = ref(null);
      const states = ref({
        isScrolling: false,
        scrollLeft: isNumber(props.initScrollLeft) ? props.initScrollLeft : 0,
        scrollTop: isNumber(props.initScrollTop) ? props.initScrollTop : 0,
        updateRequested: false,
        xAxisScrollDir: FORWARD,
        yAxisScrollDir: FORWARD
      });
      const getItemStyleCache = useCache();
      const parsedHeight = computed(() => Number.parseInt(`${props.height}`, 10));
      const parsedWidth = computed(() => Number.parseInt(`${props.width}`, 10));
      const columnsToRender = computed(() => {
        const { totalColumn, totalRow, columnCache } = props;
        const { isScrolling, xAxisScrollDir, scrollLeft } = unref(states);
        if (totalColumn === 0 || totalRow === 0) {
          return [0, 0, 0, 0];
        }
        const startIndex = getColumnStartIndexForOffset(props, scrollLeft, unref(cache2));
        const stopIndex = getColumnStopIndexForStartIndex(props, startIndex, scrollLeft, unref(cache2));
        const cacheBackward = !isScrolling || xAxisScrollDir === BACKWARD ? Math.max(1, columnCache) : 1;
        const cacheForward = !isScrolling || xAxisScrollDir === FORWARD ? Math.max(1, columnCache) : 1;
        return [
          Math.max(0, startIndex - cacheBackward),
          Math.max(0, Math.min(totalColumn - 1, stopIndex + cacheForward)),
          startIndex,
          stopIndex
        ];
      });
      const rowsToRender = computed(() => {
        const { totalColumn, totalRow, rowCache } = props;
        const { isScrolling, yAxisScrollDir, scrollTop } = unref(states);
        if (totalColumn === 0 || totalRow === 0) {
          return [0, 0, 0, 0];
        }
        const startIndex = getRowStartIndexForOffset(props, scrollTop, unref(cache2));
        const stopIndex = getRowStopIndexForStartIndex(props, startIndex, scrollTop, unref(cache2));
        const cacheBackward = !isScrolling || yAxisScrollDir === BACKWARD ? Math.max(1, rowCache) : 1;
        const cacheForward = !isScrolling || yAxisScrollDir === FORWARD ? Math.max(1, rowCache) : 1;
        return [
          Math.max(0, startIndex - cacheBackward),
          Math.max(0, Math.min(totalRow - 1, stopIndex + cacheForward)),
          startIndex,
          stopIndex
        ];
      });
      const estimatedTotalHeight = computed(() => getEstimatedTotalHeight2(props, unref(cache2)));
      const estimatedTotalWidth = computed(() => getEstimatedTotalWidth2(props, unref(cache2)));
      const windowStyle = computed(() => {
        var _a;
        return [
          {
            position: "relative",
            overflow: "hidden",
            WebkitOverflowScrolling: "touch",
            willChange: "transform"
          },
          {
            direction: props.direction,
            height: isNumber(props.height) ? `${props.height}px` : props.height,
            width: isNumber(props.width) ? `${props.width}px` : props.width
          },
          (_a = props.style) != null ? _a : {}
        ];
      });
      const innerStyle = computed(() => {
        const width = `${unref(estimatedTotalWidth)}px`;
        const height = `${unref(estimatedTotalHeight)}px`;
        return {
          height,
          pointerEvents: unref(states).isScrolling ? "none" : void 0,
          width
        };
      });
      const emitEvents = () => {
        const { totalColumn, totalRow } = props;
        if (totalColumn > 0 && totalRow > 0) {
          const [
            columnCacheStart,
            columnCacheEnd,
            columnVisibleStart,
            columnVisibleEnd
          ] = unref(columnsToRender);
          const [rowCacheStart, rowCacheEnd, rowVisibleStart, rowVisibleEnd] = unref(rowsToRender);
          emit(ITEM_RENDER_EVT, {
            columnCacheStart,
            columnCacheEnd,
            rowCacheStart,
            rowCacheEnd,
            columnVisibleStart,
            columnVisibleEnd,
            rowVisibleStart,
            rowVisibleEnd
          });
        }
        const {
          scrollLeft,
          scrollTop,
          updateRequested,
          xAxisScrollDir,
          yAxisScrollDir
        } = unref(states);
        emit(SCROLL_EVT, {
          xAxisScrollDir,
          scrollLeft,
          yAxisScrollDir,
          scrollTop,
          updateRequested
        });
      };
      const onScroll = (e) => {
        const {
          clientHeight,
          clientWidth,
          scrollHeight,
          scrollLeft,
          scrollTop,
          scrollWidth
        } = e.currentTarget;
        const _states = unref(states);
        if (_states.scrollTop === scrollTop && _states.scrollLeft === scrollLeft) {
          return;
        }
        let _scrollLeft = scrollLeft;
        if (isRTL(props.direction)) {
          switch (getRTLOffsetType()) {
            case RTL_OFFSET_NAG:
              _scrollLeft = -scrollLeft;
              break;
            case RTL_OFFSET_POS_DESC:
              _scrollLeft = scrollWidth - clientWidth - scrollLeft;
              break;
          }
        }
        states.value = {
          ..._states,
          isScrolling: true,
          scrollLeft: _scrollLeft,
          scrollTop: Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight)),
          updateRequested: true,
          xAxisScrollDir: getScrollDir(_states.scrollLeft, _scrollLeft),
          yAxisScrollDir: getScrollDir(_states.scrollTop, scrollTop)
        };
        nextTick(() => resetIsScrolling());
        onUpdated();
        emitEvents();
      };
      const onVerticalScroll = (distance, totalSteps) => {
        const height = unref(parsedHeight);
        const offset = (estimatedTotalHeight.value - height) / totalSteps * distance;
        scrollTo({
          scrollTop: Math.min(estimatedTotalHeight.value - height, offset)
        });
      };
      const onHorizontalScroll = (distance, totalSteps) => {
        const width = unref(parsedWidth);
        const offset = (estimatedTotalWidth.value - width) / totalSteps * distance;
        scrollTo({
          scrollLeft: Math.min(estimatedTotalWidth.value - width, offset)
        });
      };
      const { onWheel } = useGridWheel({
        atXStartEdge: computed(() => states.value.scrollLeft <= 0),
        atXEndEdge: computed(() => states.value.scrollLeft >= estimatedTotalWidth.value - unref(parsedWidth)),
        atYStartEdge: computed(() => states.value.scrollTop <= 0),
        atYEndEdge: computed(() => states.value.scrollTop >= estimatedTotalHeight.value - unref(parsedHeight))
      }, (x, y) => {
        var _a, _b, _c, _d;
        (_b = (_a = hScrollbar.value) == null ? void 0 : _a.onMouseUp) == null ? void 0 : _b.call(_a);
        (_d = (_c = hScrollbar.value) == null ? void 0 : _c.onMouseUp) == null ? void 0 : _d.call(_c);
        const width = unref(parsedWidth);
        const height = unref(parsedHeight);
        scrollTo({
          scrollLeft: Math.min(states.value.scrollLeft + x, estimatedTotalWidth.value - width),
          scrollTop: Math.min(states.value.scrollTop + y, estimatedTotalHeight.value - height)
        });
      });
      const scrollTo = ({
        scrollLeft = states.value.scrollLeft,
        scrollTop = states.value.scrollTop
      }) => {
        scrollLeft = Math.max(scrollLeft, 0);
        scrollTop = Math.max(scrollTop, 0);
        const _states = unref(states);
        if (scrollTop === _states.scrollTop && scrollLeft === _states.scrollLeft) {
          return;
        }
        states.value = {
          ..._states,
          xAxisScrollDir: getScrollDir(_states.scrollLeft, scrollLeft),
          yAxisScrollDir: getScrollDir(_states.scrollTop, scrollTop),
          scrollLeft,
          scrollTop,
          updateRequested: true
        };
        nextTick(() => resetIsScrolling());
        onUpdated();
        emitEvents();
      };
      const scrollToItem = (rowIndex = 0, columnIdx = 0, alignment = AUTO_ALIGNMENT) => {
        const _states = unref(states);
        columnIdx = Math.max(0, Math.min(columnIdx, props.totalColumn - 1));
        rowIndex = Math.max(0, Math.min(rowIndex, props.totalRow - 1));
        const scrollBarWidth = getScrollBarWidth(ns.namespace.value);
        const _cache = unref(cache2);
        const estimatedHeight = getEstimatedTotalHeight2(props, _cache);
        const estimatedWidth = getEstimatedTotalWidth2(props, _cache);
        scrollTo({
          scrollLeft: getColumnOffset(props, columnIdx, alignment, _states.scrollLeft, _cache, estimatedWidth > props.width ? scrollBarWidth : 0),
          scrollTop: getRowOffset(props, rowIndex, alignment, _states.scrollTop, _cache, estimatedHeight > props.height ? scrollBarWidth : 0)
        });
      };
      const getItemStyle = (rowIndex, columnIndex) => {
        const { columnWidth, direction: direction2, rowHeight } = props;
        const itemStyleCache = getItemStyleCache.value(clearCache && columnWidth, clearCache && rowHeight, clearCache && direction2);
        const key = `${rowIndex},${columnIndex}`;
        if (hasOwn(itemStyleCache, key)) {
          return itemStyleCache[key];
        } else {
          const [, left] = getColumnPosition(props, columnIndex, unref(cache2));
          const _cache = unref(cache2);
          const rtl = isRTL(direction2);
          const [height, top] = getRowPosition(props, rowIndex, _cache);
          const [width] = getColumnPosition(props, columnIndex, _cache);
          itemStyleCache[key] = {
            position: "absolute",
            left: rtl ? void 0 : `${left}px`,
            right: rtl ? `${left}px` : void 0,
            top: `${top}px`,
            height: `${height}px`,
            width: `${width}px`
          };
          return itemStyleCache[key];
        }
      };
      const resetIsScrolling = () => {
        states.value.isScrolling = false;
        nextTick(() => {
          getItemStyleCache.value(-1, null, null);
        });
      };
      const onUpdated = () => {
        const { direction: direction2 } = props;
        const { scrollLeft, scrollTop, updateRequested } = unref(states);
        const windowElement = unref(windowRef);
        if (updateRequested && windowElement) {
          if (direction2 === RTL) {
            switch (getRTLOffsetType()) {
              case RTL_OFFSET_NAG: {
                windowElement.scrollLeft = -scrollLeft;
                break;
              }
              case RTL_OFFSET_POS_ASC: {
                windowElement.scrollLeft = scrollLeft;
                break;
              }
              default: {
                const { clientWidth, scrollWidth } = windowElement;
                windowElement.scrollLeft = scrollWidth - clientWidth - scrollLeft;
                break;
              }
            }
          } else {
            windowElement.scrollLeft = Math.max(0, scrollLeft);
          }
          windowElement.scrollTop = Math.max(0, scrollTop);
        }
      };
      const { resetAfterColumnIndex, resetAfterRowIndex, resetAfter } = instance.proxy;
      expose({
        windowRef,
        innerRef,
        getItemStyleCache,
        scrollTo,
        scrollToItem,
        states,
        resetAfterColumnIndex,
        resetAfterRowIndex,
        resetAfter
      });
      const renderScrollbars = () => {
        const {
          scrollbarAlwaysOn,
          scrollbarStartGap,
          scrollbarEndGap,
          totalColumn,
          totalRow
        } = props;
        const width = unref(parsedWidth);
        const height = unref(parsedHeight);
        const estimatedWidth = unref(estimatedTotalWidth);
        const estimatedHeight = unref(estimatedTotalHeight);
        const { scrollLeft, scrollTop } = unref(states);
        const horizontalScrollbar = h(ScrollBar, {
          ref: hScrollbar,
          alwaysOn: scrollbarAlwaysOn,
          startGap: scrollbarStartGap,
          endGap: scrollbarEndGap,
          class: ns.e("horizontal"),
          clientSize: width,
          layout: "horizontal",
          onScroll: onHorizontalScroll,
          ratio: width * 100 / estimatedWidth,
          scrollFrom: scrollLeft / (estimatedWidth - width),
          total: totalRow,
          visible: true
        });
        const verticalScrollbar = h(ScrollBar, {
          ref: vScrollbar,
          alwaysOn: scrollbarAlwaysOn,
          startGap: scrollbarStartGap,
          endGap: scrollbarEndGap,
          class: ns.e("vertical"),
          clientSize: height,
          layout: "vertical",
          onScroll: onVerticalScroll,
          ratio: height * 100 / estimatedHeight,
          scrollFrom: scrollTop / (estimatedHeight - height),
          total: totalColumn,
          visible: true
        });
        return {
          horizontalScrollbar,
          verticalScrollbar
        };
      };
      const renderItems = () => {
        var _a;
        const [columnStart, columnEnd] = unref(columnsToRender);
        const [rowStart, rowEnd] = unref(rowsToRender);
        const { data, totalColumn, totalRow, useIsScrolling, itemKey } = props;
        const children = [];
        if (totalRow > 0 && totalColumn > 0) {
          for (let row = rowStart; row <= rowEnd; row++) {
            for (let column = columnStart; column <= columnEnd; column++) {
              children.push((_a = slots.default) == null ? void 0 : _a.call(slots, {
                columnIndex: column,
                data,
                key: itemKey({ columnIndex: column, data, rowIndex: row }),
                isScrolling: useIsScrolling ? unref(states).isScrolling : void 0,
                style: getItemStyle(row, column),
                rowIndex: row
              }));
            }
          }
        }
        return children;
      };
      const renderInner = () => {
        const Inner = resolveDynamicComponent(props.innerElement);
        const children = renderItems();
        return [
          h(Inner, {
            style: unref(innerStyle),
            ref: innerRef
          }, !isString(Inner) ? {
            default: () => children
          } : children)
        ];
      };
      const renderWindow = () => {
        const Container = resolveDynamicComponent(props.containerElement);
        const { horizontalScrollbar, verticalScrollbar } = renderScrollbars();
        const Inner = renderInner();
        return h("div", {
          key: 0,
          class: ns.e("wrapper"),
          role: props.role
        }, [
          h(Container, {
            class: props.className,
            style: unref(windowStyle),
            onScroll,
            onWheel,
            ref: windowRef
          }, !isString(Container) ? { default: () => Inner } : Inner),
          horizontalScrollbar,
          verticalScrollbar
        ]);
      };
      return renderWindow;
    }
  });
};
const SCOPE$1 = "ElFixedSizeGrid";
const FixedSizeGrid = createGrid({
  name: "ElFixedSizeGrid",
  getColumnPosition: ({ columnWidth }, index) => [
    columnWidth,
    index * columnWidth
  ],
  getRowPosition: ({ rowHeight }, index) => [
    rowHeight,
    index * rowHeight
  ],
  getEstimatedTotalHeight: ({ totalRow, rowHeight }) => rowHeight * totalRow,
  getEstimatedTotalWidth: ({ totalColumn, columnWidth }) => columnWidth * totalColumn,
  getColumnOffset: ({ totalColumn, columnWidth, width }, columnIndex, alignment, scrollLeft, _, scrollBarWidth) => {
    width = Number(width);
    const lastColumnOffset = Math.max(0, totalColumn * columnWidth - width);
    const maxOffset = Math.min(lastColumnOffset, columnIndex * columnWidth);
    const minOffset = Math.max(0, columnIndex * columnWidth - width + scrollBarWidth + columnWidth);
    if (alignment === "smart") {
      if (scrollLeft >= minOffset - width && scrollLeft <= maxOffset + width) {
        alignment = AUTO_ALIGNMENT;
      } else {
        alignment = CENTERED_ALIGNMENT;
      }
    }
    switch (alignment) {
      case START_ALIGNMENT:
        return maxOffset;
      case END_ALIGNMENT:
        return minOffset;
      case CENTERED_ALIGNMENT: {
        const middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);
        if (middleOffset < Math.ceil(width / 2)) {
          return 0;
        } else if (middleOffset > lastColumnOffset + Math.floor(width / 2)) {
          return lastColumnOffset;
        } else {
          return middleOffset;
        }
      }
      case AUTO_ALIGNMENT:
      default:
        if (scrollLeft >= minOffset && scrollLeft <= maxOffset) {
          return scrollLeft;
        } else if (minOffset > maxOffset) {
          return minOffset;
        } else if (scrollLeft < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }
    }
  },
  getRowOffset: ({ rowHeight, height, totalRow }, rowIndex, align, scrollTop, _, scrollBarWidth) => {
    height = Number(height);
    const lastRowOffset = Math.max(0, totalRow * rowHeight - height);
    const maxOffset = Math.min(lastRowOffset, rowIndex * rowHeight);
    const minOffset = Math.max(0, rowIndex * rowHeight - height + scrollBarWidth + rowHeight);
    if (align === SMART_ALIGNMENT) {
      if (scrollTop >= minOffset - height && scrollTop <= maxOffset + height) {
        align = AUTO_ALIGNMENT;
      } else {
        align = CENTERED_ALIGNMENT;
      }
    }
    switch (align) {
      case START_ALIGNMENT:
        return maxOffset;
      case END_ALIGNMENT:
        return minOffset;
      case CENTERED_ALIGNMENT: {
        const middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);
        if (middleOffset < Math.ceil(height / 2)) {
          return 0;
        } else if (middleOffset > lastRowOffset + Math.floor(height / 2)) {
          return lastRowOffset;
        } else {
          return middleOffset;
        }
      }
      case AUTO_ALIGNMENT:
      default:
        if (scrollTop >= minOffset && scrollTop <= maxOffset) {
          return scrollTop;
        } else if (minOffset > maxOffset) {
          return minOffset;
        } else if (scrollTop < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }
    }
  },
  getColumnStartIndexForOffset: ({ columnWidth, totalColumn }, scrollLeft) => Math.max(0, Math.min(totalColumn - 1, Math.floor(scrollLeft / columnWidth))),
  getColumnStopIndexForStartIndex: ({ columnWidth, totalColumn, width }, startIndex, scrollLeft) => {
    const left = startIndex * columnWidth;
    const visibleColumnsCount = Math.ceil((width + scrollLeft - left) / columnWidth);
    return Math.max(0, Math.min(totalColumn - 1, startIndex + visibleColumnsCount - 1));
  },
  getRowStartIndexForOffset: ({ rowHeight, totalRow }, scrollTop) => Math.max(0, Math.min(totalRow - 1, Math.floor(scrollTop / rowHeight))),
  getRowStopIndexForStartIndex: ({ rowHeight, totalRow, height }, startIndex, scrollTop) => {
    const top = startIndex * rowHeight;
    const numVisibleRows = Math.ceil((height + scrollTop - top) / rowHeight);
    return Math.max(0, Math.min(totalRow - 1, startIndex + numVisibleRows - 1));
  },
  initCache: () => void 0,
  clearCache: true,
  validateProps: ({ columnWidth, rowHeight }) => {
    {
      if (!isNumber(columnWidth)) {
        throwError(SCOPE$1, `
          "columnWidth" must be passed as number,
            instead ${typeof columnWidth} was given.
        `);
      }
      if (!isNumber(rowHeight)) {
        throwError(SCOPE$1, `
          "columnWidth" must be passed as number,
            instead ${typeof rowHeight} was given.
        `);
      }
    }
  }
});
const { max, min, floor } = Math;
const SCOPE = "ElDynamicSizeGrid";
const ACCESS_SIZER_KEY_MAP = {
  column: "columnWidth",
  row: "rowHeight"
};
const ACCESS_LAST_VISITED_KEY_MAP = {
  column: "lastVisitedColumnIndex",
  row: "lastVisitedRowIndex"
};
const getItemFromCache = (props, index, gridCache, type) => {
  const [cachedItems, sizer, lastVisited] = [
    gridCache[type],
    props[ACCESS_SIZER_KEY_MAP[type]],
    gridCache[ACCESS_LAST_VISITED_KEY_MAP[type]]
  ];
  if (index > lastVisited) {
    let offset = 0;
    if (lastVisited >= 0) {
      const item = cachedItems[lastVisited];
      offset = item.offset + item.size;
    }
    for (let i = lastVisited + 1; i <= index; i++) {
      const size = sizer(i);
      cachedItems[i] = {
        offset,
        size
      };
      offset += size;
    }
    gridCache[ACCESS_LAST_VISITED_KEY_MAP[type]] = index;
  }
  return cachedItems[index];
};
const bs = (props, gridCache, low, high, offset, type) => {
  while (low <= high) {
    const mid = low + floor((high - low) / 2);
    const currentOffset = getItemFromCache(props, mid, gridCache, type).offset;
    if (currentOffset === offset) {
      return mid;
    } else if (currentOffset < offset) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return max(0, low - 1);
};
const es = (props, gridCache, idx, offset, type) => {
  const total2 = type === "column" ? props.totalColumn : props.totalRow;
  let exponent = 1;
  while (idx < total2 && getItemFromCache(props, idx, gridCache, type).offset < offset) {
    idx += exponent;
    exponent *= 2;
  }
  return bs(props, gridCache, floor(idx / 2), min(idx, total2 - 1), offset, type);
};
const findItem = (props, gridCache, offset, type) => {
  const [cache2, lastVisitedIndex] = [
    gridCache[type],
    gridCache[ACCESS_LAST_VISITED_KEY_MAP[type]]
  ];
  const lastVisitedItemOffset = lastVisitedIndex > 0 ? cache2[lastVisitedIndex].offset : 0;
  if (lastVisitedItemOffset >= offset) {
    return bs(props, gridCache, 0, lastVisitedIndex, offset, type);
  }
  return es(props, gridCache, max(0, lastVisitedIndex), offset, type);
};
const getEstimatedTotalHeight = ({ totalRow }, { estimatedRowHeight, lastVisitedRowIndex, row }) => {
  let sizeOfVisitedRows = 0;
  if (lastVisitedRowIndex >= totalRow) {
    lastVisitedRowIndex = totalRow - 1;
  }
  if (lastVisitedRowIndex >= 0) {
    const item = row[lastVisitedRowIndex];
    sizeOfVisitedRows = item.offset + item.size;
  }
  const unvisitedItems = totalRow - lastVisitedRowIndex - 1;
  const sizeOfUnvisitedItems = unvisitedItems * estimatedRowHeight;
  return sizeOfVisitedRows + sizeOfUnvisitedItems;
};
const getEstimatedTotalWidth = ({ totalColumn }, { column, estimatedColumnWidth, lastVisitedColumnIndex }) => {
  let sizeOfVisitedColumns = 0;
  if (lastVisitedColumnIndex > totalColumn) {
    lastVisitedColumnIndex = totalColumn - 1;
  }
  if (lastVisitedColumnIndex >= 0) {
    const item = column[lastVisitedColumnIndex];
    sizeOfVisitedColumns = item.offset + item.size;
  }
  const unvisitedItems = totalColumn - lastVisitedColumnIndex - 1;
  const sizeOfUnvisitedItems = unvisitedItems * estimatedColumnWidth;
  return sizeOfVisitedColumns + sizeOfUnvisitedItems;
};
const ACCESS_ESTIMATED_SIZE_KEY_MAP = {
  column: getEstimatedTotalWidth,
  row: getEstimatedTotalHeight
};
const getOffset = (props, index, alignment, scrollOffset, cache2, type, scrollBarWidth) => {
  const [size, estimatedSizeAssociates] = [
    type === "row" ? props.height : props.width,
    ACCESS_ESTIMATED_SIZE_KEY_MAP[type]
  ];
  const item = getItemFromCache(props, index, cache2, type);
  const estimatedSize = estimatedSizeAssociates(props, cache2);
  const maxOffset = max(0, min(estimatedSize - size, item.offset));
  const minOffset = max(0, item.offset - size + scrollBarWidth + item.size);
  if (alignment === SMART_ALIGNMENT) {
    if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
      alignment = AUTO_ALIGNMENT;
    } else {
      alignment = CENTERED_ALIGNMENT;
    }
  }
  switch (alignment) {
    case START_ALIGNMENT: {
      return maxOffset;
    }
    case END_ALIGNMENT: {
      return minOffset;
    }
    case CENTERED_ALIGNMENT: {
      return Math.round(minOffset + (maxOffset - minOffset) / 2);
    }
    case AUTO_ALIGNMENT:
    default: {
      if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
        return scrollOffset;
      } else if (minOffset > maxOffset) {
        return minOffset;
      } else if (scrollOffset < minOffset) {
        return minOffset;
      } else {
        return maxOffset;
      }
    }
  }
};
const DynamicSizeGrid = createGrid({
  name: "ElDynamicSizeGrid",
  getColumnPosition: (props, idx, cache2) => {
    const item = getItemFromCache(props, idx, cache2, "column");
    return [item.size, item.offset];
  },
  getRowPosition: (props, idx, cache2) => {
    const item = getItemFromCache(props, idx, cache2, "row");
    return [item.size, item.offset];
  },
  getColumnOffset: (props, columnIndex, alignment, scrollLeft, cache2, scrollBarWidth) => getOffset(props, columnIndex, alignment, scrollLeft, cache2, "column", scrollBarWidth),
  getRowOffset: (props, rowIndex, alignment, scrollTop, cache2, scrollBarWidth) => getOffset(props, rowIndex, alignment, scrollTop, cache2, "row", scrollBarWidth),
  getColumnStartIndexForOffset: (props, scrollLeft, cache2) => findItem(props, cache2, scrollLeft, "column"),
  getColumnStopIndexForStartIndex: (props, startIndex, scrollLeft, cache2) => {
    const item = getItemFromCache(props, startIndex, cache2, "column");
    const maxOffset = scrollLeft + props.width;
    let offset = item.offset + item.size;
    let stopIndex = startIndex;
    while (stopIndex < props.totalColumn - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemFromCache(props, startIndex, cache2, "column").size;
    }
    return stopIndex;
  },
  getEstimatedTotalHeight,
  getEstimatedTotalWidth,
  getRowStartIndexForOffset: (props, scrollTop, cache2) => findItem(props, cache2, scrollTop, "row"),
  getRowStopIndexForStartIndex: (props, startIndex, scrollTop, cache2) => {
    const { totalRow, height } = props;
    const item = getItemFromCache(props, startIndex, cache2, "row");
    const maxOffset = scrollTop + height;
    let offset = item.size + item.offset;
    let stopIndex = startIndex;
    while (stopIndex < totalRow - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemFromCache(props, stopIndex, cache2, "row").size;
    }
    return stopIndex;
  },
  injectToInstance: (instance, cache2) => {
    const resetAfter = ({ columnIndex, rowIndex }, forceUpdate) => {
      var _a, _b;
      forceUpdate = isUndefined(forceUpdate) ? true : forceUpdate;
      if (isNumber(columnIndex)) {
        cache2.value.lastVisitedColumnIndex = Math.min(cache2.value.lastVisitedColumnIndex, columnIndex - 1);
      }
      if (isNumber(rowIndex)) {
        cache2.value.lastVisitedRowIndex = Math.min(cache2.value.lastVisitedRowIndex, rowIndex - 1);
      }
      (_a = instance.exposed) == null ? void 0 : _a.getItemStyleCache.value(-1, null, null);
      if (forceUpdate)
        (_b = instance.proxy) == null ? void 0 : _b.$forceUpdate();
    };
    const resetAfterColumnIndex = (columnIndex, forceUpdate) => {
      resetAfter({
        columnIndex
      }, forceUpdate);
    };
    const resetAfterRowIndex = (rowIndex, forceUpdate) => {
      resetAfter({
        rowIndex
      }, forceUpdate);
    };
    Object.assign(instance.proxy, {
      resetAfterColumnIndex,
      resetAfterRowIndex,
      resetAfter
    });
  },
  initCache: ({
    estimatedColumnWidth = DEFAULT_DYNAMIC_LIST_ITEM_SIZE,
    estimatedRowHeight = DEFAULT_DYNAMIC_LIST_ITEM_SIZE
  }) => {
    const cache2 = {
      column: {},
      estimatedColumnWidth,
      estimatedRowHeight,
      lastVisitedColumnIndex: -1,
      lastVisitedRowIndex: -1,
      row: {}
    };
    return cache2;
  },
  clearCache: false,
  validateProps: ({ columnWidth, rowHeight }) => {
    {
      if (!isFunction(columnWidth)) {
        throwError(SCOPE, `
          "columnWidth" must be passed as function,
            instead ${typeof columnWidth} was given.
        `);
      }
      if (!isFunction(rowHeight)) {
        throwError(SCOPE, `
          "rowHeight" must be passed as function,
            instead ${typeof rowHeight} was given.
        `);
      }
    }
  }
});
var SortOrder = /* @__PURE__ */ ((SortOrder2) => {
  SortOrder2["ASC"] = "asc";
  SortOrder2["DESC"] = "desc";
  return SortOrder2;
})(SortOrder || {});
var Alignment = /* @__PURE__ */ ((Alignment2) => {
  Alignment2["CENTER"] = "center";
  Alignment2["RIGHT"] = "right";
  return Alignment2;
})(Alignment || {});
var FixedDir = /* @__PURE__ */ ((FixedDir2) => {
  FixedDir2["LEFT"] = "left";
  FixedDir2["RIGHT"] = "right";
  return FixedDir2;
})(FixedDir || {});
const oppositeOrderMap = {
  [
    "asc"
    /* ASC */
  ]: "desc",
  [
    "desc"
    /* DESC */
  ]: "asc"
  /* ASC */
};
const placeholderSign = Symbol("placeholder");
const calcColumnStyle = (column, fixedColumn, fixed) => {
  var _a;
  const flex = {
    flexGrow: 0,
    flexShrink: 0,
    ...fixed ? {} : {
      flexGrow: column.flexGrow || 0,
      flexShrink: column.flexShrink || 1
    }
  };
  if (!fixed) {
    flex.flexShrink = 1;
  }
  const style = {
    ...(_a = column.style) != null ? _a : {},
    ...flex,
    flexBasis: "auto",
    width: column.width
  };
  if (!fixedColumn) {
    if (column.maxWidth)
      style.maxWidth = column.maxWidth;
    if (column.minWidth)
      style.minWidth = column.minWidth;
  }
  return style;
};
function useColumns(props, columns2, fixed) {
  const visibleColumns = computed(() => {
    return unref(columns2).filter((column) => !column.hidden);
  });
  const fixedColumnsOnLeft = computed(() => unref(visibleColumns).filter((column) => column.fixed === "left" || column.fixed === true));
  const fixedColumnsOnRight = computed(() => unref(visibleColumns).filter((column) => column.fixed === "right"));
  const normalColumns = computed(() => unref(visibleColumns).filter((column) => !column.fixed));
  const mainColumns = computed(() => {
    const ret = [];
    unref(fixedColumnsOnLeft).forEach((column) => {
      ret.push({
        ...column,
        placeholderSign
      });
    });
    unref(normalColumns).forEach((column) => {
      ret.push(column);
    });
    unref(fixedColumnsOnRight).forEach((column) => {
      ret.push({
        ...column,
        placeholderSign
      });
    });
    return ret;
  });
  const hasFixedColumns = computed(() => {
    return unref(fixedColumnsOnLeft).length || unref(fixedColumnsOnRight).length;
  });
  const columnsStyles = computed(() => {
    const _columns = unref(columns2);
    return _columns.reduce((style, column) => {
      style[column.key] = calcColumnStyle(column, unref(fixed), props.fixed);
      return style;
    }, {});
  });
  const columnsTotalWidth = computed(() => {
    return unref(visibleColumns).reduce((width, column) => width + column.width, 0);
  });
  const getColumn = (key) => {
    return unref(columns2).find((column) => column.key === key);
  };
  const getColumnStyle = (key) => {
    return unref(columnsStyles)[key];
  };
  const updateColumnWidth = (column, width) => {
    column.width = width;
  };
  function onColumnSorted(e) {
    var _a;
    const { key } = e.currentTarget.dataset;
    if (!key)
      return;
    const { sortState, sortBy } = props;
    let order = SortOrder.ASC;
    if (isObject(sortState)) {
      order = oppositeOrderMap[sortState[key]];
    } else {
      order = oppositeOrderMap[sortBy.order];
    }
    (_a = props.onColumnSort) == null ? void 0 : _a.call(props, { column: getColumn(key), key, order });
  }
  return {
    columns: columns2,
    columnsStyles,
    columnsTotalWidth,
    fixedColumnsOnLeft,
    fixedColumnsOnRight,
    hasFixedColumns,
    mainColumns,
    normalColumns,
    visibleColumns,
    getColumn,
    getColumnStyle,
    updateColumnWidth,
    onColumnSorted
  };
}
const useScrollbar = (props, {
  mainTableRef,
  leftTableRef,
  rightTableRef,
  onMaybeEndReached
}) => {
  const scrollPos = ref({ scrollLeft: 0, scrollTop: 0 });
  function doScroll(params) {
    var _a, _b, _c;
    const { scrollTop } = params;
    (_a = mainTableRef.value) == null ? void 0 : _a.scrollTo(params);
    (_b = leftTableRef.value) == null ? void 0 : _b.scrollToTop(scrollTop);
    (_c = rightTableRef.value) == null ? void 0 : _c.scrollToTop(scrollTop);
  }
  function scrollTo(params) {
    scrollPos.value = params;
    doScroll(params);
  }
  function scrollToTop(scrollTop) {
    scrollPos.value.scrollTop = scrollTop;
    doScroll(unref(scrollPos));
  }
  function scrollToLeft(scrollLeft) {
    var _a, _b;
    scrollPos.value.scrollLeft = scrollLeft;
    (_b = (_a = mainTableRef.value) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, unref(scrollPos));
  }
  function onScroll(params) {
    var _a;
    scrollTo(params);
    (_a = props.onScroll) == null ? void 0 : _a.call(props, params);
  }
  function onVerticalScroll({ scrollTop }) {
    const { scrollTop: currentScrollTop } = unref(scrollPos);
    if (scrollTop !== currentScrollTop)
      scrollToTop(scrollTop);
  }
  function scrollToRow(row, strategy = "auto") {
    var _a;
    (_a = mainTableRef.value) == null ? void 0 : _a.scrollToRow(row, strategy);
  }
  watch(() => unref(scrollPos).scrollTop, (cur, prev) => {
    if (cur > prev)
      onMaybeEndReached();
  });
  return {
    scrollPos,
    scrollTo,
    scrollToLeft,
    scrollToTop,
    scrollToRow,
    onScroll,
    onVerticalScroll
  };
};
const useRow = (props, { mainTableRef, leftTableRef, rightTableRef }) => {
  const vm = getCurrentInstance();
  const { emit } = vm;
  const isResetting = shallowRef(false);
  const hoveringRowKey = shallowRef(null);
  const expandedRowKeys = ref(props.defaultExpandedRowKeys || []);
  const lastRenderedRowIndex = ref(-1);
  const resetIndex = shallowRef(null);
  const rowHeights = ref({});
  const pendingRowHeights = ref({});
  const leftTableHeights = shallowRef({});
  const mainTableHeights = shallowRef({});
  const rightTableHeights = shallowRef({});
  const isDynamic = computed(() => isNumber(props.estimatedRowHeight));
  function onRowsRendered(params) {
    var _a;
    (_a = props.onRowsRendered) == null ? void 0 : _a.call(props, params);
    if (params.rowCacheEnd > unref(lastRenderedRowIndex)) {
      lastRenderedRowIndex.value = params.rowCacheEnd;
    }
  }
  function onRowHovered({ hovered, rowKey: rowKey2 }) {
    hoveringRowKey.value = hovered ? rowKey2 : null;
  }
  function onRowExpanded({
    expanded,
    rowData,
    rowIndex,
    rowKey: rowKey2
  }) {
    var _a, _b;
    const _expandedRowKeys = [...unref(expandedRowKeys)];
    const currentKeyIndex = _expandedRowKeys.indexOf(rowKey2);
    if (expanded) {
      if (currentKeyIndex === -1)
        _expandedRowKeys.push(rowKey2);
    } else {
      if (currentKeyIndex > -1)
        _expandedRowKeys.splice(currentKeyIndex, 1);
    }
    expandedRowKeys.value = _expandedRowKeys;
    emit("update:expandedRowKeys", _expandedRowKeys);
    (_a = props.onRowExpand) == null ? void 0 : _a.call(props, {
      expanded,
      rowData,
      rowIndex,
      rowKey: rowKey2
    });
    (_b = props.onExpandedRowsChange) == null ? void 0 : _b.call(props, _expandedRowKeys);
  }
  const flushingRowHeights = debounce(() => {
    var _a, _b, _c, _d;
    isResetting.value = true;
    rowHeights.value = { ...unref(rowHeights), ...unref(pendingRowHeights) };
    resetAfterIndex(unref(resetIndex), false);
    pendingRowHeights.value = {};
    resetIndex.value = null;
    (_a = mainTableRef.value) == null ? void 0 : _a.forceUpdate();
    (_b = leftTableRef.value) == null ? void 0 : _b.forceUpdate();
    (_c = rightTableRef.value) == null ? void 0 : _c.forceUpdate();
    (_d = vm.proxy) == null ? void 0 : _d.$forceUpdate();
    isResetting.value = false;
  }, 0);
  function resetAfterIndex(index, forceUpdate = false) {
    if (!unref(isDynamic))
      return;
    [mainTableRef, leftTableRef, rightTableRef].forEach((tableRef) => {
      const table = unref(tableRef);
      if (table)
        table.resetAfterRowIndex(index, forceUpdate);
    });
  }
  function resetHeights(rowKey2, height, rowIdx) {
    const resetIdx = unref(resetIndex);
    if (resetIdx === null) {
      resetIndex.value = rowIdx;
    } else {
      if (resetIdx > rowIdx) {
        resetIndex.value = rowIdx;
      }
    }
    pendingRowHeights.value[rowKey2] = height;
  }
  function onRowHeightChange({ rowKey: rowKey2, height, rowIndex }, fixedDir) {
    if (!fixedDir) {
      mainTableHeights.value[rowKey2] = height;
    } else {
      if (fixedDir === FixedDir.RIGHT) {
        rightTableHeights.value[rowKey2] = height;
      } else {
        leftTableHeights.value[rowKey2] = height;
      }
    }
    const maximumHeight = Math.max(...[leftTableHeights, rightTableHeights, mainTableHeights].map((records) => records.value[rowKey2] || 0));
    if (unref(rowHeights)[rowKey2] !== maximumHeight) {
      resetHeights(rowKey2, maximumHeight, rowIndex);
      flushingRowHeights();
    }
  }
  return {
    hoveringRowKey,
    expandedRowKeys,
    lastRenderedRowIndex,
    isDynamic,
    isResetting,
    rowHeights,
    resetAfterIndex,
    onRowExpanded,
    onRowHovered,
    onRowsRendered,
    onRowHeightChange
  };
};
const useData = (props, { expandedRowKeys, lastRenderedRowIndex, resetAfterIndex }) => {
  const depthMap = ref({});
  const flattenedData = computed(() => {
    const depths = {};
    const { data: data2, rowKey: rowKey2 } = props;
    const _expandedRowKeys = unref(expandedRowKeys);
    if (!_expandedRowKeys || !_expandedRowKeys.length)
      return data2;
    const array = [];
    const keysSet = /* @__PURE__ */ new Set();
    _expandedRowKeys.forEach((x) => keysSet.add(x));
    let copy = data2.slice();
    copy.forEach((x) => depths[x[rowKey2]] = 0);
    while (copy.length > 0) {
      const item = copy.shift();
      array.push(item);
      if (keysSet.has(item[rowKey2]) && Array.isArray(item.children) && item.children.length > 0) {
        copy = [...item.children, ...copy];
        item.children.forEach((child) => depths[child[rowKey2]] = depths[item[rowKey2]] + 1);
      }
    }
    depthMap.value = depths;
    return array;
  });
  const data = computed(() => {
    const { data: data2, expandColumnKey: expandColumnKey2 } = props;
    return expandColumnKey2 ? unref(flattenedData) : data2;
  });
  watch(data, (val, prev) => {
    if (val !== prev) {
      lastRenderedRowIndex.value = -1;
      resetAfterIndex(0, true);
    }
  });
  return {
    data,
    depthMap
  };
};
const sumReducer = (sum2, num) => sum2 + num;
const sum = (listLike) => {
  return isArray(listLike) ? listLike.reduce(sumReducer, 0) : listLike;
};
const tryCall = (fLike, params, defaultRet = {}) => {
  return isFunction(fLike) ? fLike(params) : fLike != null ? fLike : defaultRet;
};
const enforceUnit = (style) => {
  ["width", "maxWidth", "minWidth", "height"].forEach((key) => {
    style[key] = addUnit(style[key]);
  });
  return style;
};
const componentToSlot = (ComponentLike) => isVNode(ComponentLike) ? (props) => h(ComponentLike, props) : ComponentLike;
const useStyles = (props, {
  columnsTotalWidth,
  data,
  fixedColumnsOnLeft,
  fixedColumnsOnRight
}) => {
  const bodyWidth = computed(() => {
    const { fixed, width, vScrollbarSize } = props;
    const ret = width - vScrollbarSize;
    return fixed ? Math.max(Math.round(unref(columnsTotalWidth)), ret) : ret;
  });
  const headerWidth = computed(() => unref(bodyWidth) + (props.fixed ? props.vScrollbarSize : 0));
  const mainTableHeight = computed(() => {
    const { height = 0, maxHeight = 0, footerHeight: footerHeight2, hScrollbarSize } = props;
    if (maxHeight > 0) {
      const _fixedRowsHeight = unref(fixedRowsHeight);
      const _rowsHeight = unref(rowsHeight);
      const _headerHeight = unref(headerHeight);
      const total2 = _headerHeight + _fixedRowsHeight + _rowsHeight + hScrollbarSize;
      return Math.min(total2, maxHeight - footerHeight2);
    }
    return height - footerHeight2;
  });
  const rowsHeight = computed(() => {
    const { rowHeight, estimatedRowHeight } = props;
    const _data = unref(data);
    if (isNumber(estimatedRowHeight)) {
      return _data.length * estimatedRowHeight;
    }
    return _data.length * rowHeight;
  });
  const fixedTableHeight = computed(() => {
    const { maxHeight } = props;
    const tableHeight = unref(mainTableHeight);
    if (isNumber(maxHeight) && maxHeight > 0)
      return tableHeight;
    const totalHeight = unref(rowsHeight) + unref(headerHeight) + unref(fixedRowsHeight);
    return Math.min(tableHeight, totalHeight);
  });
  const mapColumn = (column) => column.width;
  const leftTableWidth = computed(() => sum(unref(fixedColumnsOnLeft).map(mapColumn)));
  const rightTableWidth = computed(() => sum(unref(fixedColumnsOnRight).map(mapColumn)));
  const headerHeight = computed(() => sum(props.headerHeight));
  const fixedRowsHeight = computed(() => {
    var _a;
    return (((_a = props.fixedData) == null ? void 0 : _a.length) || 0) * props.rowHeight;
  });
  const windowHeight = computed(() => {
    return unref(mainTableHeight) - unref(headerHeight) - unref(fixedRowsHeight);
  });
  const rootStyle = computed(() => {
    const { style = {}, height, width } = props;
    return enforceUnit({
      ...style,
      height,
      width
    });
  });
  const footerHeight = computed(() => enforceUnit({ height: props.footerHeight }));
  const emptyStyle = computed(() => ({
    top: addUnit(unref(headerHeight)),
    bottom: addUnit(props.footerHeight),
    width: addUnit(props.width)
  }));
  return {
    bodyWidth,
    fixedTableHeight,
    mainTableHeight,
    leftTableWidth,
    rightTableWidth,
    headerWidth,
    rowsHeight,
    windowHeight,
    footerHeight,
    emptyStyle,
    rootStyle,
    headerHeight
  };
};
const useAutoResize = (props) => {
  const sizer = ref();
  const width$ = ref(0);
  const height$ = ref(0);
  watch([width$, height$], ([width, height]) => {
    var _a;
    (_a = props.onResize) == null ? void 0 : _a.call(props, {
      width,
      height
    });
  });
  return {
    sizer,
    width: width$,
    height: height$
  };
};
function useTable(props) {
  const mainTableRef = ref();
  const leftTableRef = ref();
  const rightTableRef = ref();
  const {
    columns: columns2,
    columnsStyles,
    columnsTotalWidth,
    fixedColumnsOnLeft,
    fixedColumnsOnRight,
    hasFixedColumns,
    mainColumns,
    onColumnSorted
  } = useColumns(props, toRef(props, "columns"), toRef(props, "fixed"));
  const {
    scrollTo,
    scrollToLeft,
    scrollToTop,
    scrollToRow,
    onScroll,
    onVerticalScroll,
    scrollPos
  } = useScrollbar(props, {
    mainTableRef,
    leftTableRef,
    rightTableRef,
    onMaybeEndReached
  });
  const {
    expandedRowKeys,
    hoveringRowKey,
    lastRenderedRowIndex,
    isDynamic,
    isResetting,
    rowHeights,
    resetAfterIndex,
    onRowExpanded,
    onRowHeightChange,
    onRowHovered,
    onRowsRendered
  } = useRow(props, {
    mainTableRef,
    leftTableRef,
    rightTableRef
  });
  const { data, depthMap } = useData(props, {
    expandedRowKeys,
    lastRenderedRowIndex,
    resetAfterIndex
  });
  const {
    bodyWidth,
    fixedTableHeight,
    mainTableHeight,
    leftTableWidth,
    rightTableWidth,
    headerWidth,
    rowsHeight,
    windowHeight,
    footerHeight,
    emptyStyle,
    rootStyle,
    headerHeight
  } = useStyles(props, {
    columnsTotalWidth,
    data,
    fixedColumnsOnLeft,
    fixedColumnsOnRight
  });
  const isScrolling = shallowRef(false);
  const containerRef = ref();
  const showEmpty = computed(() => {
    const noData = unref(data).length === 0;
    return isArray(props.fixedData) ? props.fixedData.length === 0 && noData : noData;
  });
  function getRowHeight(rowIndex) {
    const { estimatedRowHeight, rowHeight, rowKey: rowKey2 } = props;
    if (!estimatedRowHeight)
      return rowHeight;
    return unref(rowHeights)[unref(data)[rowIndex][rowKey2]] || estimatedRowHeight;
  }
  function onMaybeEndReached() {
    const { onEndReached } = props;
    if (!onEndReached)
      return;
    const { scrollTop } = unref(scrollPos);
    const _totalHeight = unref(rowsHeight);
    const clientHeight = unref(windowHeight);
    const heightUntilEnd = _totalHeight - (scrollTop + clientHeight) + props.hScrollbarSize;
    if (unref(lastRenderedRowIndex) >= 0 && _totalHeight === scrollTop + unref(mainTableHeight) - unref(headerHeight)) {
      onEndReached(heightUntilEnd);
    }
  }
  watch(() => props.expandedRowKeys, (val) => expandedRowKeys.value = val, {
    deep: true
  });
  return {
    columns: columns2,
    containerRef,
    mainTableRef,
    leftTableRef,
    rightTableRef,
    isDynamic,
    isResetting,
    isScrolling,
    hoveringRowKey,
    hasFixedColumns,
    columnsStyles,
    columnsTotalWidth,
    data,
    expandedRowKeys,
    depthMap,
    fixedColumnsOnLeft,
    fixedColumnsOnRight,
    mainColumns,
    bodyWidth,
    emptyStyle,
    rootStyle,
    headerWidth,
    footerHeight,
    mainTableHeight,
    fixedTableHeight,
    leftTableWidth,
    rightTableWidth,
    showEmpty,
    getRowHeight,
    onColumnSorted,
    onRowHovered,
    onRowExpanded,
    onRowsRendered,
    onRowHeightChange,
    scrollTo,
    scrollToLeft,
    scrollToTop,
    scrollToRow,
    onScroll,
    onVerticalScroll
  };
}
const TableV2InjectionKey = Symbol("tableV2");
const classType = String;
const columns = {
  type: definePropType(Array),
  required: true
};
const fixedDataType = {
  type: definePropType(Array)
};
const dataType = {
  ...fixedDataType,
  required: true
};
const expandColumnKey = String;
const expandKeys = {
  type: definePropType(Array),
  default: () => mutable([])
};
const requiredNumber = {
  type: Number,
  required: true
};
const rowKey = {
  type: definePropType([String, Number, Symbol]),
  default: "id"
};
const styleType = {
  type: definePropType(Object)
};
const tableV2RowProps = buildProps({
  class: String,
  columns,
  columnsStyles: {
    type: definePropType(Object),
    required: true
  },
  depth: Number,
  expandColumnKey,
  estimatedRowHeight: {
    ...virtualizedGridProps.estimatedRowHeight,
    default: void 0
  },
  isScrolling: Boolean,
  onRowExpand: {
    type: definePropType(Function)
  },
  onRowHover: {
    type: definePropType(Function)
  },
  onRowHeightChange: {
    type: definePropType(Function)
  },
  rowData: {
    type: definePropType(Object),
    required: true
  },
  rowEventHandlers: {
    type: definePropType(Object)
  },
  rowIndex: {
    type: Number,
    required: true
  },
  rowKey,
  style: {
    type: definePropType(Object)
  }
});
const requiredNumberType = {
  type: Number,
  required: true
};
const tableV2HeaderProps = buildProps({
  class: String,
  columns,
  fixedHeaderData: {
    type: definePropType(Array)
  },
  headerData: {
    type: definePropType(Array),
    required: true
  },
  headerHeight: {
    type: definePropType([Number, Array]),
    default: 50
  },
  rowWidth: requiredNumberType,
  rowHeight: {
    type: Number,
    default: 50
  },
  height: requiredNumberType,
  width: requiredNumberType
});
const tableV2GridProps = buildProps({
  columns,
  data: dataType,
  fixedData: fixedDataType,
  estimatedRowHeight: tableV2RowProps.estimatedRowHeight,
  width: requiredNumber,
  height: requiredNumber,
  headerWidth: requiredNumber,
  headerHeight: tableV2HeaderProps.headerHeight,
  bodyWidth: requiredNumber,
  rowHeight: requiredNumber,
  cache: virtualizedListProps.cache,
  useIsScrolling: Boolean,
  scrollbarAlwaysOn: virtualizedGridProps.scrollbarAlwaysOn,
  scrollbarStartGap: virtualizedGridProps.scrollbarStartGap,
  scrollbarEndGap: virtualizedGridProps.scrollbarEndGap,
  class: classType,
  style: styleType,
  containerStyle: styleType,
  getRowHeight: {
    type: definePropType(Function),
    required: true
  },
  rowKey: tableV2RowProps.rowKey,
  onRowsRendered: {
    type: definePropType(Function)
  },
  onScroll: {
    type: definePropType(Function)
  }
});
const tableV2Props = buildProps({
  cache: tableV2GridProps.cache,
  estimatedRowHeight: tableV2RowProps.estimatedRowHeight,
  rowKey,
  headerClass: {
    type: definePropType([
      String,
      Function
    ])
  },
  headerProps: {
    type: definePropType([
      Object,
      Function
    ])
  },
  headerCellProps: {
    type: definePropType([
      Object,
      Function
    ])
  },
  headerHeight: tableV2HeaderProps.headerHeight,
  footerHeight: {
    type: Number,
    default: 0
  },
  rowClass: {
    type: definePropType([String, Function])
  },
  rowProps: {
    type: definePropType([Object, Function])
  },
  rowHeight: {
    type: Number,
    default: 50
  },
  cellProps: {
    type: definePropType([
      Object,
      Function
    ])
  },
  columns,
  data: dataType,
  dataGetter: {
    type: definePropType(Function)
  },
  fixedData: fixedDataType,
  expandColumnKey: tableV2RowProps.expandColumnKey,
  expandedRowKeys: expandKeys,
  defaultExpandedRowKeys: expandKeys,
  class: classType,
  fixed: Boolean,
  style: {
    type: definePropType(Object)
  },
  width: requiredNumber,
  height: requiredNumber,
  maxHeight: Number,
  useIsScrolling: Boolean,
  indentSize: {
    type: Number,
    default: 12
  },
  iconSize: {
    type: Number,
    default: 12
  },
  hScrollbarSize: virtualizedGridProps.hScrollbarSize,
  vScrollbarSize: virtualizedGridProps.vScrollbarSize,
  scrollbarAlwaysOn: virtualizedScrollbarProps.alwaysOn,
  sortBy: {
    type: definePropType(Object),
    default: () => ({})
  },
  sortState: {
    type: definePropType(Object),
    default: void 0
  },
  onColumnSort: {
    type: definePropType(Function)
  },
  onExpandedRowsChange: {
    type: definePropType(Function)
  },
  onEndReached: {
    type: definePropType(Function)
  },
  onRowExpand: tableV2RowProps.onRowExpand,
  onScroll: tableV2GridProps.onScroll,
  onRowsRendered: tableV2GridProps.onRowsRendered,
  rowEventHandlers: tableV2RowProps.rowEventHandlers
});
const TableV2Cell = (props, {
  slots
}) => {
  var _a;
  const {
    cellData,
    style
  } = props;
  const displayText = ((_a = cellData == null ? void 0 : cellData.toString) == null ? void 0 : _a.call(cellData)) || "";
  return createVNode("div", {
    "class": props.class,
    "title": displayText,
    "style": style
  }, [slots.default ? slots.default(props) : displayText]);
};
TableV2Cell.displayName = "ElTableV2Cell";
TableV2Cell.inheritAttrs = false;
const HeaderCell = (props, {
  slots
}) => {
  var _a, _b;
  return slots.default ? slots.default(props) : createVNode("div", {
    "class": props.class,
    "title": (_a = props.column) == null ? void 0 : _a.title
  }, [(_b = props.column) == null ? void 0 : _b.title]);
};
HeaderCell.displayName = "ElTableV2HeaderCell";
HeaderCell.inheritAttrs = false;
const tableV2HeaderRowProps = buildProps({
  class: String,
  columns,
  columnsStyles: {
    type: definePropType(Object),
    required: true
  },
  headerIndex: Number,
  style: { type: definePropType(Object) }
});
const TableV2HeaderRow = /* @__PURE__ */ defineComponent({
  name: "ElTableV2HeaderRow",
  props: tableV2HeaderRowProps,
  setup(props, {
    slots
  }) {
    return () => {
      const {
        columns: columns2,
        columnsStyles,
        headerIndex,
        style
      } = props;
      let Cells = columns2.map((column, columnIndex) => {
        return slots.cell({
          columns: columns2,
          column,
          columnIndex,
          headerIndex,
          style: columnsStyles[column.key]
        });
      });
      if (slots.header) {
        Cells = slots.header({
          cells: Cells.map((node) => {
            if (isArray(node) && node.length === 1) {
              return node[0];
            }
            return node;
          }),
          columns: columns2,
          headerIndex
        });
      }
      return createVNode("div", {
        "class": props.class,
        "style": style,
        "role": "row"
      }, [Cells]);
    };
  }
});
const COMPONENT_NAME$3 = "ElTableV2Header";
const TableV2Header = /* @__PURE__ */ defineComponent({
  name: COMPONENT_NAME$3,
  props: tableV2HeaderProps,
  setup(props, {
    slots,
    expose
  }) {
    const ns = useNamespace("table-v2");
    const headerRef = ref();
    const headerStyle = computed(() => enforceUnit({
      width: props.width,
      height: props.height
    }));
    const rowStyle = computed(() => enforceUnit({
      width: props.rowWidth,
      height: props.height
    }));
    const headerHeights = computed(() => castArray(unref(props.headerHeight)));
    const scrollToLeft = (left) => {
      const headerEl = unref(headerRef);
      nextTick(() => {
        (headerEl == null ? void 0 : headerEl.scroll) && headerEl.scroll({
          left
        });
      });
    };
    const renderFixedRows = () => {
      const fixedRowClassName = ns.e("fixed-header-row");
      const {
        columns: columns2,
        fixedHeaderData,
        rowHeight
      } = props;
      return fixedHeaderData == null ? void 0 : fixedHeaderData.map((fixedRowData, fixedRowIndex) => {
        var _a;
        const style = enforceUnit({
          height: rowHeight,
          width: "100%"
        });
        return (_a = slots.fixed) == null ? void 0 : _a.call(slots, {
          class: fixedRowClassName,
          columns: columns2,
          rowData: fixedRowData,
          rowIndex: -(fixedRowIndex + 1),
          style
        });
      });
    };
    const renderDynamicRows = () => {
      const dynamicRowClassName = ns.e("dynamic-header-row");
      const {
        columns: columns2
      } = props;
      return unref(headerHeights).map((rowHeight, rowIndex) => {
        var _a;
        const style = enforceUnit({
          width: "100%",
          height: rowHeight
        });
        return (_a = slots.dynamic) == null ? void 0 : _a.call(slots, {
          class: dynamicRowClassName,
          columns: columns2,
          headerIndex: rowIndex,
          style
        });
      });
    };
    expose({
      scrollToLeft
    });
    return () => {
      if (props.height <= 0)
        return;
      return createVNode("div", {
        "ref": headerRef,
        "class": props.class,
        "style": unref(headerStyle),
        "role": "rowgroup"
      }, [createVNode("div", {
        "style": unref(rowStyle),
        "class": ns.e("header")
      }, [renderDynamicRows(), renderFixedRows()])]);
    };
  }
});
const useTableRow = (props) => {
  const {
    isScrolling
  } = inject(TableV2InjectionKey);
  const measured = ref(false);
  const rowRef = ref();
  const measurable = computed(() => {
    return isNumber(props.estimatedRowHeight) && props.rowIndex >= 0;
  });
  const eventHandlers = computed(() => {
    const {
      rowData,
      rowIndex,
      rowKey: rowKey2,
      onRowHover
    } = props;
    const handlers = props.rowEventHandlers || {};
    const eventHandlers2 = {};
    Object.entries(handlers).forEach(([eventName, handler]) => {
      if (isFunction(handler)) {
        eventHandlers2[eventName] = (event) => {
          handler({
            event,
            rowData,
            rowIndex,
            rowKey: rowKey2
          });
        };
      }
    });
    if (onRowHover) {
      [{
        name: "onMouseleave",
        hovered: false
      }, {
        name: "onMouseenter",
        hovered: true
      }].forEach(({
        name,
        hovered
      }) => {
        const existedHandler = eventHandlers2[name];
        eventHandlers2[name] = (event) => {
          onRowHover({
            event,
            hovered,
            rowData,
            rowIndex,
            rowKey: rowKey2
          });
          existedHandler == null ? void 0 : existedHandler(event);
        };
      });
    }
    return eventHandlers2;
  });
  const onExpand = (expanded) => {
    const {
      onRowExpand,
      rowData,
      rowIndex,
      rowKey: rowKey2
    } = props;
    onRowExpand == null ? void 0 : onRowExpand({
      expanded,
      rowData,
      rowIndex,
      rowKey: rowKey2
    });
  };
  return {
    isScrolling,
    measurable,
    measured,
    rowRef,
    eventHandlers,
    onExpand
  };
};
const COMPONENT_NAME$2 = "ElTableV2TableRow";
const TableV2Row = /* @__PURE__ */ defineComponent({
  name: COMPONENT_NAME$2,
  props: tableV2RowProps,
  setup(props, {
    expose,
    slots,
    attrs
  }) {
    const {
      eventHandlers,
      isScrolling,
      measurable,
      measured,
      rowRef,
      onExpand
    } = useTableRow(props);
    expose({
      onExpand
    });
    return () => {
      const {
        columns: columns2,
        columnsStyles,
        expandColumnKey: expandColumnKey2,
        depth,
        rowData,
        rowIndex,
        style
      } = props;
      let ColumnCells = columns2.map((column, columnIndex) => {
        const expandable = isArray(rowData.children) && rowData.children.length > 0 && column.key === expandColumnKey2;
        return slots.cell({
          column,
          columns: columns2,
          columnIndex,
          depth,
          style: columnsStyles[column.key],
          rowData,
          rowIndex,
          isScrolling: unref(isScrolling),
          expandIconProps: expandable ? {
            rowData,
            rowIndex,
            onExpand
          } : void 0
        });
      });
      if (slots.row) {
        ColumnCells = slots.row({
          cells: ColumnCells.map((node) => {
            if (isArray(node) && node.length === 1) {
              return node[0];
            }
            return node;
          }),
          style,
          columns: columns2,
          depth,
          rowData,
          rowIndex,
          isScrolling: unref(isScrolling)
        });
      }
      if (unref(measurable)) {
        const {
          height,
          ...exceptHeightStyle
        } = style || {};
        const _measured = unref(measured);
        return createVNode("div", mergeProps({
          "ref": rowRef,
          "class": props.class,
          "style": _measured ? style : exceptHeightStyle,
          "role": "row"
        }, attrs, unref(eventHandlers)), [ColumnCells]);
      }
      return createVNode("div", mergeProps(attrs, {
        "ref": rowRef,
        "class": props.class,
        "style": style,
        "role": "row"
      }, unref(eventHandlers)), [ColumnCells]);
    };
  }
});
const SortIcon = (props) => {
  const {
    sortOrder
  } = props;
  return createVNode(ElIcon, {
    "size": 14,
    "class": props.class
  }, {
    default: () => [sortOrder === SortOrder.ASC ? createVNode(sort_up_default, null, null) : createVNode(sort_down_default, null, null)]
  });
};
const ExpandIcon = (props) => {
  const {
    expanded,
    expandable,
    onExpand,
    style,
    size
  } = props;
  const expandIconProps = {
    onClick: expandable ? () => onExpand(!expanded) : void 0,
    class: props.class
  };
  return createVNode(ElIcon, mergeProps(expandIconProps, {
    "size": size,
    "style": style
  }), {
    default: () => [createVNode(arrow_right_default, null, null)]
  });
};
const COMPONENT_NAME$1 = "ElTableV2Grid";
const useTableGrid = (props) => {
  const headerRef = ref();
  const bodyRef = ref();
  const totalHeight = computed(() => {
    const {
      data,
      rowHeight,
      estimatedRowHeight
    } = props;
    if (estimatedRowHeight) {
      return;
    }
    return data.length * rowHeight;
  });
  const fixedRowHeight = computed(() => {
    const {
      fixedData,
      rowHeight
    } = props;
    return ((fixedData == null ? void 0 : fixedData.length) || 0) * rowHeight;
  });
  const headerHeight = computed(() => sum(props.headerHeight));
  const gridHeight = computed(() => {
    const {
      height
    } = props;
    return Math.max(0, height - unref(headerHeight) - unref(fixedRowHeight));
  });
  const hasHeader = computed(() => {
    return unref(headerHeight) + unref(fixedRowHeight) > 0;
  });
  const itemKey = ({
    data,
    rowIndex
  }) => data[rowIndex][props.rowKey];
  function onItemRendered({
    rowCacheStart,
    rowCacheEnd,
    rowVisibleStart,
    rowVisibleEnd
  }) {
    var _a;
    (_a = props.onRowsRendered) == null ? void 0 : _a.call(props, {
      rowCacheStart,
      rowCacheEnd,
      rowVisibleStart,
      rowVisibleEnd
    });
  }
  function resetAfterRowIndex(index, forceUpdate2) {
    var _a;
    (_a = bodyRef.value) == null ? void 0 : _a.resetAfterRowIndex(index, forceUpdate2);
  }
  function scrollTo(leftOrOptions, top) {
    const header$ = unref(headerRef);
    const body$ = unref(bodyRef);
    if (!header$ || !body$)
      return;
    if (isObject(leftOrOptions)) {
      header$.scrollToLeft(leftOrOptions.scrollLeft);
      body$.scrollTo(leftOrOptions);
    } else {
      header$.scrollToLeft(leftOrOptions);
      body$.scrollTo({
        scrollLeft: leftOrOptions,
        scrollTop: top
      });
    }
  }
  function scrollToTop(scrollTop) {
    var _a;
    (_a = unref(bodyRef)) == null ? void 0 : _a.scrollTo({
      scrollTop
    });
  }
  function scrollToRow(row, strategy) {
    var _a;
    (_a = unref(bodyRef)) == null ? void 0 : _a.scrollToItem(row, 1, strategy);
  }
  function forceUpdate() {
    var _a, _b;
    (_a = unref(bodyRef)) == null ? void 0 : _a.$forceUpdate();
    (_b = unref(headerRef)) == null ? void 0 : _b.$forceUpdate();
  }
  return {
    bodyRef,
    forceUpdate,
    fixedRowHeight,
    gridHeight,
    hasHeader,
    headerHeight,
    headerRef,
    totalHeight,
    itemKey,
    onItemRendered,
    resetAfterRowIndex,
    scrollTo,
    scrollToTop,
    scrollToRow
  };
};
const TableGrid = /* @__PURE__ */ defineComponent({
  name: COMPONENT_NAME$1,
  props: tableV2GridProps,
  setup(props, {
    slots,
    expose
  }) {
    const {
      ns
    } = inject(TableV2InjectionKey);
    const {
      bodyRef,
      fixedRowHeight,
      gridHeight,
      hasHeader,
      headerRef,
      headerHeight,
      totalHeight,
      forceUpdate,
      itemKey,
      onItemRendered,
      resetAfterRowIndex,
      scrollTo,
      scrollToTop,
      scrollToRow
    } = useTableGrid(props);
    expose({
      forceUpdate,
      totalHeight,
      scrollTo,
      scrollToTop,
      scrollToRow,
      resetAfterRowIndex
    });
    const getColumnWidth = () => props.bodyWidth;
    return () => {
      const {
        cache: cache2,
        columns: columns2,
        data,
        fixedData,
        useIsScrolling,
        scrollbarAlwaysOn,
        scrollbarEndGap,
        scrollbarStartGap,
        style,
        rowHeight,
        bodyWidth,
        estimatedRowHeight,
        headerWidth,
        height,
        width,
        getRowHeight,
        onScroll
      } = props;
      const isDynamicRowEnabled = isNumber(estimatedRowHeight);
      const Grid = isDynamicRowEnabled ? DynamicSizeGrid : FixedSizeGrid;
      const _headerHeight = unref(headerHeight);
      return createVNode("div", {
        "role": "table",
        "class": [ns.e("table"), props.class],
        "style": style
      }, [createVNode(Grid, {
        "ref": bodyRef,
        "data": data,
        "useIsScrolling": useIsScrolling,
        "itemKey": itemKey,
        "columnCache": 0,
        "columnWidth": isDynamicRowEnabled ? getColumnWidth : bodyWidth,
        "totalColumn": 1,
        "totalRow": data.length,
        "rowCache": cache2,
        "rowHeight": isDynamicRowEnabled ? getRowHeight : rowHeight,
        "width": width,
        "height": unref(gridHeight),
        "class": ns.e("body"),
        "role": "rowgroup",
        "scrollbarStartGap": scrollbarStartGap,
        "scrollbarEndGap": scrollbarEndGap,
        "scrollbarAlwaysOn": scrollbarAlwaysOn,
        "onScroll": onScroll,
        "onItemRendered": onItemRendered,
        "perfMode": false
      }, {
        default: (params) => {
          var _a;
          const rowData = data[params.rowIndex];
          return (_a = slots.row) == null ? void 0 : _a.call(slots, {
            ...params,
            columns: columns2,
            rowData
          });
        }
      }), unref(hasHeader) && createVNode(TableV2Header, {
        "ref": headerRef,
        "class": ns.e("header-wrapper"),
        "columns": columns2,
        "headerData": data,
        "headerHeight": props.headerHeight,
        "fixedHeaderData": fixedData,
        "rowWidth": headerWidth,
        "rowHeight": rowHeight,
        "width": width,
        "height": Math.min(_headerHeight + unref(fixedRowHeight), height)
      }, {
        dynamic: slots.header,
        fixed: slots.row
      })]);
    };
  }
});
function _isSlot$5(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const MainTable = (props, {
  slots
}) => {
  const {
    mainTableRef,
    ...rest
  } = props;
  return createVNode(TableGrid, mergeProps({
    "ref": mainTableRef
  }, rest), _isSlot$5(slots) ? slots : {
    default: () => [slots]
  });
};
function _isSlot$4(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const LeftTable$1 = (props, {
  slots
}) => {
  if (!props.columns.length)
    return;
  const {
    leftTableRef,
    ...rest
  } = props;
  return createVNode(TableGrid, mergeProps({
    "ref": leftTableRef
  }, rest), _isSlot$4(slots) ? slots : {
    default: () => [slots]
  });
};
function _isSlot$3(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const LeftTable = (props, {
  slots
}) => {
  if (!props.columns.length)
    return;
  const {
    rightTableRef,
    ...rest
  } = props;
  return createVNode(TableGrid, mergeProps({
    "ref": rightTableRef
  }, rest), _isSlot$3(slots) ? slots : {
    default: () => [slots]
  });
};
function _isSlot$2(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const RowRenderer = (props, {
  slots
}) => {
  const {
    columns: columns2,
    columnsStyles,
    depthMap,
    expandColumnKey: expandColumnKey2,
    expandedRowKeys,
    estimatedRowHeight,
    hasFixedColumns,
    hoveringRowKey,
    rowData,
    rowIndex,
    style,
    isScrolling,
    rowProps,
    rowClass,
    rowKey: rowKey2,
    rowEventHandlers,
    ns,
    onRowHovered,
    onRowExpanded
  } = props;
  const rowKls = tryCall(rowClass, {
    columns: columns2,
    rowData,
    rowIndex
  }, "");
  const additionalProps = tryCall(rowProps, {
    columns: columns2,
    rowData,
    rowIndex
  });
  const _rowKey = rowData[rowKey2];
  const depth = depthMap[_rowKey] || 0;
  const canExpand = Boolean(expandColumnKey2);
  const isFixedRow = rowIndex < 0;
  const kls = [ns.e("row"), rowKls, {
    [ns.e(`row-depth-${depth}`)]: canExpand && rowIndex >= 0,
    [ns.is("expanded")]: canExpand && expandedRowKeys.includes(_rowKey),
    [ns.is("hovered")]: !isScrolling && _rowKey === hoveringRowKey,
    [ns.is("fixed")]: !depth && isFixedRow,
    [ns.is("customized")]: Boolean(slots.row)
  }];
  const onRowHover = hasFixedColumns ? onRowHovered : void 0;
  const _rowProps = {
    ...additionalProps,
    columns: columns2,
    columnsStyles,
    class: kls,
    depth,
    expandColumnKey: expandColumnKey2,
    estimatedRowHeight: isFixedRow ? void 0 : estimatedRowHeight,
    isScrolling,
    rowIndex,
    rowData,
    rowKey: _rowKey,
    rowEventHandlers,
    style
  };
  return createVNode(TableV2Row, mergeProps(_rowProps, {
    "onRowHover": onRowHover,
    "onRowExpand": onRowExpanded
  }), _isSlot$2(slots) ? slots : {
    default: () => [slots]
  });
};
const CellRenderer = ({
  columns: columns2,
  column,
  columnIndex,
  depth,
  expandIconProps,
  isScrolling,
  rowData,
  rowIndex,
  style,
  expandedRowKeys,
  ns,
  cellProps: _cellProps,
  expandColumnKey: expandColumnKey2,
  indentSize,
  iconSize,
  rowKey: rowKey2
}, {
  slots
}) => {
  const cellStyle = enforceUnit(style);
  if (column.placeholderSign === placeholderSign) {
    return createVNode("div", {
      "class": ns.em("row-cell", "placeholder"),
      "style": cellStyle
    }, null);
  }
  const {
    cellRenderer,
    dataKey,
    dataGetter
  } = column;
  const columnCellRenderer = componentToSlot(cellRenderer);
  const CellComponent = columnCellRenderer || slots.default || ((props) => createVNode(TableV2Cell, props, null));
  const cellData = isFunction(dataGetter) ? dataGetter({
    columns: columns2,
    column,
    columnIndex,
    rowData,
    rowIndex
  }) : get(rowData, dataKey != null ? dataKey : "");
  const extraCellProps = tryCall(_cellProps, {
    cellData,
    columns: columns2,
    column,
    columnIndex,
    rowIndex,
    rowData
  });
  const cellProps = {
    class: ns.e("cell-text"),
    columns: columns2,
    column,
    columnIndex,
    cellData,
    isScrolling,
    rowData,
    rowIndex
  };
  const Cell = CellComponent(cellProps);
  const kls = [ns.e("row-cell"), column.class, column.align === Alignment.CENTER && ns.is("align-center"), column.align === Alignment.RIGHT && ns.is("align-right")];
  const expandable = rowIndex >= 0 && column.key === expandColumnKey2;
  const expanded = rowIndex >= 0 && expandedRowKeys.includes(rowData[rowKey2]);
  let IconOrPlaceholder;
  const iconStyle = `margin-inline-start: ${depth * indentSize}px;`;
  if (expandable) {
    if (isObject(expandIconProps)) {
      IconOrPlaceholder = createVNode(ExpandIcon, mergeProps(expandIconProps, {
        "class": [ns.e("expand-icon"), ns.is("expanded", expanded)],
        "size": iconSize,
        "expanded": expanded,
        "style": iconStyle,
        "expandable": true
      }), null);
    } else {
      IconOrPlaceholder = createVNode("div", {
        "style": [iconStyle, `width: ${iconSize}px; height: ${iconSize}px;`].join(" ")
      }, null);
    }
  }
  return createVNode("div", mergeProps({
    "class": kls,
    "style": cellStyle
  }, extraCellProps, {
    "role": "cell"
  }), [IconOrPlaceholder, Cell]);
};
CellRenderer.inheritAttrs = false;
function _isSlot$1(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const HeaderRenderer = ({
  columns: columns2,
  columnsStyles,
  headerIndex,
  style,
  headerClass,
  headerProps,
  ns
}, {
  slots
}) => {
  const param = {
    columns: columns2,
    headerIndex
  };
  const kls = [ns.e("header-row"), tryCall(headerClass, param, ""), {
    [ns.is("customized")]: Boolean(slots.header)
  }];
  const extraProps = {
    ...tryCall(headerProps, param),
    columnsStyles,
    class: kls,
    columns: columns2,
    headerIndex,
    style
  };
  return createVNode(TableV2HeaderRow, extraProps, _isSlot$1(slots) ? slots : {
    default: () => [slots]
  });
};
const HeaderCellRenderer = (props, {
  slots
}) => {
  const {
    column,
    ns,
    style,
    onColumnSorted
  } = props;
  const cellStyle = enforceUnit(style);
  if (column.placeholderSign === placeholderSign) {
    return createVNode("div", {
      "class": ns.em("header-row-cell", "placeholder"),
      "style": cellStyle
    }, null);
  }
  const {
    headerCellRenderer,
    headerClass,
    sortable
  } = column;
  const cellProps = {
    ...props,
    class: ns.e("header-cell-text")
  };
  const cellRenderer = componentToSlot(headerCellRenderer) || slots.default || ((props2) => createVNode(HeaderCell, props2, null));
  const Cell = cellRenderer(cellProps);
  const {
    sortBy,
    sortState,
    headerCellProps
  } = props;
  let sorting, sortOrder;
  if (sortState) {
    const order = sortState[column.key];
    sorting = Boolean(oppositeOrderMap[order]);
    sortOrder = sorting ? order : SortOrder.ASC;
  } else {
    sorting = column.key === sortBy.key;
    sortOrder = sorting ? sortBy.order : SortOrder.ASC;
  }
  const cellKls = [ns.e("header-cell"), tryCall(headerClass, props, ""), column.align === Alignment.CENTER && ns.is("align-center"), column.align === Alignment.RIGHT && ns.is("align-right"), sortable && ns.is("sortable")];
  const cellWrapperProps = {
    ...tryCall(headerCellProps, props),
    onClick: column.sortable ? onColumnSorted : void 0,
    class: cellKls,
    style: cellStyle,
    ["data-key"]: column.key
  };
  return createVNode("div", mergeProps(cellWrapperProps, {
    "role": "columnheader"
  }), [Cell, sortable && createVNode(SortIcon, {
    "class": [ns.e("sort-icon"), sorting && ns.is("sorting")],
    "sortOrder": sortOrder
  }, null)]);
};
const Footer$1 = (props, {
  slots
}) => {
  var _a;
  return createVNode("div", {
    "class": props.class,
    "style": props.style
  }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
};
Footer$1.displayName = "ElTableV2Footer";
const Footer = (props, {
  slots
}) => {
  return createVNode("div", {
    "class": props.class,
    "style": props.style
  }, [slots.default ? slots.default() : createVNode(ElEmpty, null, null)]);
};
Footer.displayName = "ElTableV2Empty";
const Overlay = (props, {
  slots
}) => {
  var _a;
  return createVNode("div", {
    "class": props.class,
    "style": props.style
  }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
};
Overlay.displayName = "ElTableV2Overlay";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const COMPONENT_NAME = "ElTableV2";
const TableV2 = /* @__PURE__ */ defineComponent({
  name: COMPONENT_NAME,
  props: tableV2Props,
  setup(props, {
    slots,
    expose
  }) {
    const ns = useNamespace("table-v2");
    const {
      columnsStyles,
      fixedColumnsOnLeft,
      fixedColumnsOnRight,
      mainColumns,
      mainTableHeight,
      fixedTableHeight,
      leftTableWidth,
      rightTableWidth,
      data,
      depthMap,
      expandedRowKeys,
      hasFixedColumns,
      hoveringRowKey,
      mainTableRef,
      leftTableRef,
      rightTableRef,
      isDynamic,
      isResetting,
      isScrolling,
      bodyWidth,
      emptyStyle,
      rootStyle,
      headerWidth,
      footerHeight,
      showEmpty,
      scrollTo,
      scrollToLeft,
      scrollToTop,
      scrollToRow,
      getRowHeight,
      onColumnSorted,
      onRowHeightChange,
      onRowHovered,
      onRowExpanded,
      onRowsRendered,
      onScroll,
      onVerticalScroll
    } = useTable(props);
    expose({
      scrollTo,
      scrollToLeft,
      scrollToTop,
      scrollToRow
    });
    provide(TableV2InjectionKey, {
      ns,
      isResetting,
      hoveringRowKey,
      isScrolling
    });
    return () => {
      const {
        cache: cache2,
        cellProps,
        estimatedRowHeight,
        expandColumnKey: expandColumnKey2,
        fixedData,
        headerHeight,
        headerClass,
        headerProps,
        headerCellProps,
        sortBy,
        sortState,
        rowHeight,
        rowClass,
        rowEventHandlers,
        rowKey: rowKey2,
        rowProps,
        scrollbarAlwaysOn,
        indentSize,
        iconSize,
        useIsScrolling,
        vScrollbarSize,
        width
      } = props;
      const _data = unref(data);
      const mainTableProps = {
        cache: cache2,
        class: ns.e("main"),
        columns: unref(mainColumns),
        data: _data,
        fixedData,
        estimatedRowHeight,
        bodyWidth: unref(bodyWidth),
        headerHeight,
        headerWidth: unref(headerWidth),
        height: unref(mainTableHeight),
        mainTableRef,
        rowKey: rowKey2,
        rowHeight,
        scrollbarAlwaysOn,
        scrollbarStartGap: 2,
        scrollbarEndGap: vScrollbarSize,
        useIsScrolling,
        width,
        getRowHeight,
        onRowsRendered,
        onScroll
      };
      const leftColumnsWidth = unref(leftTableWidth);
      const _fixedTableHeight = unref(fixedTableHeight);
      const leftTableProps = {
        cache: cache2,
        class: ns.e("left"),
        columns: unref(fixedColumnsOnLeft),
        data: _data,
        estimatedRowHeight,
        leftTableRef,
        rowHeight,
        bodyWidth: leftColumnsWidth,
        headerWidth: leftColumnsWidth,
        headerHeight,
        height: _fixedTableHeight,
        rowKey: rowKey2,
        scrollbarAlwaysOn,
        scrollbarStartGap: 2,
        scrollbarEndGap: vScrollbarSize,
        useIsScrolling,
        width: leftColumnsWidth,
        getRowHeight,
        onScroll: onVerticalScroll
      };
      const rightColumnsWidth = unref(rightTableWidth);
      const rightColumnsWidthWithScrollbar = rightColumnsWidth + vScrollbarSize;
      const rightTableProps = {
        cache: cache2,
        class: ns.e("right"),
        columns: unref(fixedColumnsOnRight),
        data: _data,
        estimatedRowHeight,
        rightTableRef,
        rowHeight,
        bodyWidth: rightColumnsWidthWithScrollbar,
        headerWidth: rightColumnsWidthWithScrollbar,
        headerHeight,
        height: _fixedTableHeight,
        rowKey: rowKey2,
        scrollbarAlwaysOn,
        scrollbarStartGap: 2,
        scrollbarEndGap: vScrollbarSize,
        width: rightColumnsWidthWithScrollbar,
        style: `--${unref(ns.namespace)}-table-scrollbar-size: ${vScrollbarSize}px`,
        useIsScrolling,
        getRowHeight,
        onScroll: onVerticalScroll
      };
      const _columnsStyles = unref(columnsStyles);
      const tableRowProps = {
        ns,
        depthMap: unref(depthMap),
        columnsStyles: _columnsStyles,
        expandColumnKey: expandColumnKey2,
        expandedRowKeys: unref(expandedRowKeys),
        estimatedRowHeight,
        hasFixedColumns: unref(hasFixedColumns),
        hoveringRowKey: unref(hoveringRowKey),
        rowProps,
        rowClass,
        rowKey: rowKey2,
        rowEventHandlers,
        onRowHovered,
        onRowExpanded,
        onRowHeightChange
      };
      const tableCellProps = {
        cellProps,
        expandColumnKey: expandColumnKey2,
        indentSize,
        iconSize,
        rowKey: rowKey2,
        expandedRowKeys: unref(expandedRowKeys),
        ns
      };
      const tableHeaderProps = {
        ns,
        headerClass,
        headerProps,
        columnsStyles: _columnsStyles
      };
      const tableHeaderCellProps = {
        ns,
        sortBy,
        sortState,
        headerCellProps,
        onColumnSorted
      };
      const tableSlots = {
        row: (props2) => createVNode(RowRenderer, mergeProps(props2, tableRowProps), {
          row: slots.row,
          cell: (props3) => {
            let _slot;
            return slots.cell ? createVNode(CellRenderer, mergeProps(props3, tableCellProps, {
              "style": _columnsStyles[props3.column.key]
            }), _isSlot(_slot = slots.cell(props3)) ? _slot : {
              default: () => [_slot]
            }) : createVNode(CellRenderer, mergeProps(props3, tableCellProps, {
              "style": _columnsStyles[props3.column.key]
            }), null);
          }
        }),
        header: (props2) => createVNode(HeaderRenderer, mergeProps(props2, tableHeaderProps), {
          header: slots.header,
          cell: (props3) => {
            let _slot2;
            return slots["header-cell"] ? createVNode(HeaderCellRenderer, mergeProps(props3, tableHeaderCellProps, {
              "style": _columnsStyles[props3.column.key]
            }), _isSlot(_slot2 = slots["header-cell"](props3)) ? _slot2 : {
              default: () => [_slot2]
            }) : createVNode(HeaderCellRenderer, mergeProps(props3, tableHeaderCellProps, {
              "style": _columnsStyles[props3.column.key]
            }), null);
          }
        })
      };
      const rootKls = [props.class, ns.b(), ns.e("root"), {
        [ns.is("dynamic")]: unref(isDynamic)
      }];
      const footerProps = {
        class: ns.e("footer"),
        style: unref(footerHeight)
      };
      return createVNode("div", {
        "class": rootKls,
        "style": unref(rootStyle)
      }, [createVNode(MainTable, mainTableProps, _isSlot(tableSlots) ? tableSlots : {
        default: () => [tableSlots]
      }), createVNode(LeftTable$1, leftTableProps, _isSlot(tableSlots) ? tableSlots : {
        default: () => [tableSlots]
      }), createVNode(LeftTable, rightTableProps, _isSlot(tableSlots) ? tableSlots : {
        default: () => [tableSlots]
      }), slots.footer && createVNode(Footer$1, footerProps, {
        default: slots.footer
      }), unref(showEmpty) && createVNode(Footer, {
        "class": ns.e("empty"),
        "style": unref(emptyStyle)
      }, {
        default: slots.empty
      }), slots.overlay && createVNode(Overlay, {
        "class": ns.e("overlay")
      }, {
        default: slots.overlay
      })]);
    };
  }
});
const autoResizerProps = buildProps({
  disableWidth: Boolean,
  disableHeight: Boolean,
  onResize: {
    type: definePropType(Function)
  }
});
const AutoResizer = /* @__PURE__ */ defineComponent({
  name: "ElAutoResizer",
  props: autoResizerProps,
  setup(props, {
    slots
  }) {
    const ns = useNamespace("auto-resizer");
    const {
      height,
      width,
      sizer
    } = useAutoResize(props);
    const style = {
      width: "100%",
      height: "100%"
    };
    return () => {
      var _a;
      return createVNode("div", {
        "ref": sizer,
        "class": ns.b(),
        "style": style
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
        height: height.value,
        width: width.value
      })]);
    };
  }
});
const ElTableV2 = withInstall(TableV2);
withInstall(AutoResizer);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "newtable",
  __ssrInlineRender: true,
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns22, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns22.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns2 = generateColumns(10);
    const data = generateData(columns2, 1e3);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_table_v2 = ElTableV2;
      _push(ssrRenderComponent(_component_el_table_v2, mergeProps({
        columns: unref(columns2),
        data: unref(data),
        width: 700,
        height: 400,
        fixed: ""
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/newtable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=newtable-95be5b4b.mjs.map
