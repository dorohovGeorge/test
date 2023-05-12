import { u as useNamespace, b as buildProps, d as definePropType, w as withInstall, f as withNoopInstall, _ as _export_sfc, e as _export_sfc$1, t as throwError, j as flattedChildren, i as useId, E as ElContainer, k as ElAside, l as ElHeader, m as ElMain } from '../server.mjs';
import { u as useTooltipTriggerProps, a as useTooltipContentProps, E as ElTooltip, b as ElScrollbar, O as OnlyChild, F as FOCUS_TRAP_INJECTION_KEY, c as ElTable, d as ElTableColumn, e as EVENT_CODE, f as composeEventHandlers, w as whenMouse } from './el-table-column-26e227f7.mjs';
import { defineComponent, openBlock, createBlock, Transition, mergeProps, unref, toHandlers, withCtx, renderSlot, useSSRContext, ref, provide, inject, computed, getCurrentInstance, reactive, watch, h, Fragment, withDirectives, vShow, watchEffect, createVNode, createTextVNode, toRef, resolveComponent, createElementBlock, normalizeClass, createSlots, createCommentVNode, normalizeStyle, withModifiers, createElementVNode, toDisplayString, nextTick, normalizeProps, guardReactiveProps, resolveDynamicComponent, readonly } from 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/vue@3.2.47/node_modules/vue/index.mjs';
import { useResizeObserver, useTimeoutFn, useEventListener } from 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/@vueuse+core@9.13.0_vue@3.2.47/node_modules/@vueuse/core/index.mjs';
import { a as arrow_down_default, b as arrow_right_default, E as ElIcon, m as more_default, c as message_default, d as menu_default, s as setting_default, e as addUnit, f as addClass, r as removeClass, h as hasClass } from './index-6a2618d9.mjs';
import { TinyColor } from 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/public_api.js';
import { i as iconPropType, u as useDeprecated, E as ElButton } from './el-button-cf6260c8.mjs';
import { isString, isArray, isObject, isFunction } from 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/@vue+shared@3.2.47/node_modules/@vue/shared/index.js';
import { m as mutable } from './typescript-f58cd02a.mjs';
import { u as useLocale } from './el-scrollbar-749a44e9.mjs';
import { u as useFormSize } from './use-form-item-7f2f4320.mjs';
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
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/@sxzz+popperjs-es@2.11.7/node_modules/@sxzz/popperjs-es/dist/index.mjs';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/escape-html@1.0.3/node_modules/escape-html/index.js';
import 'file:///Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/normalize-wheel-es@1.2.0/node_modules/normalize-wheel-es/dist/index.js';

const composeRefs = (...refs) => {
  return (el) => {
    refs.forEach((ref2) => {
      if (isFunction(ref2)) {
        ref2(el);
      } else {
        ref2.value = el;
      }
    });
  };
};
const __default__ = /* @__PURE__ */ defineComponent({
  name: "ElCollapseTransition"
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const ns = useNamespace("collapse-transition");
    const on = {
      beforeEnter(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.style.maxHeight = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      },
      enter(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = `${el.scrollHeight}px`;
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        } else {
          el.style.maxHeight = 0;
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }
        el.style.overflow = "hidden";
      },
      afterEnter(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
      },
      beforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.overflow = "hidden";
      },
      leave(el) {
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      },
      afterLeave(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, mergeProps({
        name: unref(ns).b()
      }, toHandlers(on)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["name"]);
    };
  }
});
var CollapseTransition = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);
CollapseTransition.install = (app) => {
  app.component(CollapseTransition.name, CollapseTransition);
};
const _CollapseTransition = CollapseTransition;
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  inheritAttrs: false
});
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var Collection = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["render", _sfc_render$b], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  name: "ElCollectionItem",
  inheritAttrs: false
});
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var CollectionItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["render", _sfc_render$a], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);
const COLLECTION_ITEM_SIGN = `data-el-collection-item`;
const createCollectionWithScope = (name) => {
  const COLLECTION_NAME = `El${name}Collection`;
  const COLLECTION_ITEM_NAME = `${COLLECTION_NAME}Item`;
  const COLLECTION_INJECTION_KEY2 = Symbol(COLLECTION_NAME);
  const COLLECTION_ITEM_INJECTION_KEY2 = Symbol(COLLECTION_ITEM_NAME);
  const ElCollection2 = {
    ...Collection,
    name: COLLECTION_NAME,
    setup() {
      const collectionRef = ref(null);
      const itemMap = /* @__PURE__ */ new Map();
      const getItems = () => {
        const collectionEl = unref(collectionRef);
        if (!collectionEl)
          return [];
        const orderedNodes = Array.from(collectionEl.querySelectorAll(`[${COLLECTION_ITEM_SIGN}]`));
        const items = [...itemMap.values()];
        return items.sort((a, b) => orderedNodes.indexOf(a.ref) - orderedNodes.indexOf(b.ref));
      };
      provide(COLLECTION_INJECTION_KEY2, {
        itemMap,
        getItems,
        collectionRef
      });
    }
  };
  const ElCollectionItem2 = {
    ...CollectionItem,
    name: COLLECTION_ITEM_NAME,
    setup(_, { attrs }) {
      const collectionItemRef = ref(null);
      inject(COLLECTION_INJECTION_KEY2, void 0);
      provide(COLLECTION_ITEM_INJECTION_KEY2, {
        collectionItemRef
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: COLLECTION_INJECTION_KEY2,
    COLLECTION_ITEM_INJECTION_KEY: COLLECTION_ITEM_INJECTION_KEY2,
    ElCollection: ElCollection2,
    ElCollectionItem: ElCollectionItem2
  };
};
const rovingFocusGroupProps = buildProps({
  style: { type: definePropType([String, Array, Object]) },
  currentTabId: {
    type: definePropType(String)
  },
  defaultCurrentTabId: String,
  loop: Boolean,
  dir: {
    type: String,
    values: ["ltr", "rtl"],
    default: "ltr"
  },
  orientation: {
    type: definePropType(String)
  },
  onBlur: Function,
  onFocus: Function,
  onMousedown: Function
});
const {
  ElCollection: ElCollection$1,
  ElCollectionItem: ElCollectionItem$1,
  COLLECTION_INJECTION_KEY: COLLECTION_INJECTION_KEY$1,
  COLLECTION_ITEM_INJECTION_KEY: COLLECTION_ITEM_INJECTION_KEY$1
} = createCollectionWithScope("RovingFocusGroup");
const ROVING_FOCUS_GROUP_INJECTION_KEY = Symbol("elRovingFocusGroup");
const ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY = Symbol("elRovingFocusGroupItem");
const MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
const getDirectionAwareKey = (key, dir) => {
  if (dir !== "rtl")
    return key;
  switch (key) {
    case EVENT_CODE.right:
      return EVENT_CODE.left;
    case EVENT_CODE.left:
      return EVENT_CODE.right;
    default:
      return key;
  }
};
const getFocusIntent = (event, orientation, dir) => {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && [EVENT_CODE.left, EVENT_CODE.right].includes(key))
    return void 0;
  if (orientation === "horizontal" && [EVENT_CODE.up, EVENT_CODE.down].includes(key))
    return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
};
const reorderArray = (array, atIdx) => {
  return array.map((_, idx) => array[(idx + atIdx) % array.length]);
};
const focusFirst = (elements) => {
  const { activeElement: prevActive } = document;
  for (const element of elements) {
    if (element === prevActive)
      return;
    element.focus();
    if (prevActive !== document.activeElement)
      return;
  }
};
const CURRENT_TAB_ID_CHANGE_EVT = "currentTabIdChange";
const ENTRY_FOCUS_EVT = "rovingFocusGroup.entryFocus";
const EVT_OPTS = { bubbles: false, cancelable: true };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  name: "ElRovingFocusGroupImpl",
  inheritAttrs: false,
  props: rovingFocusGroupProps,
  emits: [CURRENT_TAB_ID_CHANGE_EVT, "entryFocus"],
  setup(props, { emit }) {
    var _a;
    const currentTabbedId = ref((_a = props.currentTabId || props.defaultCurrentTabId) != null ? _a : null);
    const isBackingOut = ref(false);
    const isClickFocus = ref(false);
    const rovingFocusGroupRef = ref(null);
    const { getItems } = inject(COLLECTION_INJECTION_KEY$1, void 0);
    const rovingFocusGroupRootStyle = computed(() => {
      return [
        {
          outline: "none"
        },
        props.style
      ];
    });
    const onItemFocus = (tabbedId) => {
      emit(CURRENT_TAB_ID_CHANGE_EVT, tabbedId);
    };
    const onItemShiftTab = () => {
      isBackingOut.value = true;
    };
    const onMousedown = composeEventHandlers((e) => {
      var _a2;
      (_a2 = props.onMousedown) == null ? void 0 : _a2.call(props, e);
    }, () => {
      isClickFocus.value = true;
    });
    const onFocus = composeEventHandlers((e) => {
      var _a2;
      (_a2 = props.onFocus) == null ? void 0 : _a2.call(props, e);
    }, (e) => {
      const isKeyboardFocus = !unref(isClickFocus);
      const { target, currentTarget } = e;
      if (target === currentTarget && isKeyboardFocus && !unref(isBackingOut)) {
        const entryFocusEvt = new Event(ENTRY_FOCUS_EVT, EVT_OPTS);
        currentTarget == null ? void 0 : currentTarget.dispatchEvent(entryFocusEvt);
        if (!entryFocusEvt.defaultPrevented) {
          const items = getItems().filter((item) => item.focusable);
          const activeItem = items.find((item) => item.active);
          const currentItem = items.find((item) => item.id === unref(currentTabbedId));
          const candidates = [activeItem, currentItem, ...items].filter(Boolean);
          const candidateNodes = candidates.map((item) => item.ref);
          focusFirst(candidateNodes);
        }
      }
      isClickFocus.value = false;
    });
    const onBlur = composeEventHandlers((e) => {
      var _a2;
      (_a2 = props.onBlur) == null ? void 0 : _a2.call(props, e);
    }, () => {
      isBackingOut.value = false;
    });
    const handleEntryFocus = (...args) => {
      emit("entryFocus", ...args);
    };
    provide(ROVING_FOCUS_GROUP_INJECTION_KEY, {
      currentTabbedId: readonly(currentTabbedId),
      loop: toRef(props, "loop"),
      tabIndex: computed(() => {
        return unref(isBackingOut) ? -1 : 0;
      }),
      rovingFocusGroupRef,
      rovingFocusGroupRootStyle,
      orientation: toRef(props, "orientation"),
      dir: toRef(props, "dir"),
      onItemFocus,
      onItemShiftTab,
      onBlur,
      onFocus,
      onMousedown
    });
    watch(() => props.currentTabId, (val) => {
      currentTabbedId.value = val != null ? val : null;
    });
    useEventListener(rovingFocusGroupRef, ENTRY_FOCUS_EVT, handleEntryFocus);
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var ElRovingFocusGroupImpl = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["render", _sfc_render$9], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  name: "ElRovingFocusGroup",
  components: {
    ElFocusGroupCollection: ElCollection$1,
    ElRovingFocusGroupImpl
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_roving_focus_group_impl = resolveComponent("el-roving-focus-group-impl");
  const _component_el_focus_group_collection = resolveComponent("el-focus-group-collection");
  return openBlock(), createBlock(_component_el_focus_group_collection, null, {
    default: withCtx(() => [
      createVNode(_component_el_roving_focus_group_impl, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]),
    _: 3
  });
}
var ElRovingFocusGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["render", _sfc_render$8], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  components: {
    ElRovingFocusCollectionItem: ElCollectionItem$1
  },
  props: {
    focusable: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ["mousedown", "focus", "keydown"],
  setup(props, { emit }) {
    const { currentTabbedId, loop, onItemFocus, onItemShiftTab } = inject(ROVING_FOCUS_GROUP_INJECTION_KEY, void 0);
    const { getItems } = inject(COLLECTION_INJECTION_KEY$1, void 0);
    const id = useId();
    const rovingFocusGroupItemRef = ref(null);
    const handleMousedown = composeEventHandlers((e) => {
      emit("mousedown", e);
    }, (e) => {
      if (!props.focusable) {
        e.preventDefault();
      } else {
        onItemFocus(unref(id));
      }
    });
    const handleFocus = composeEventHandlers((e) => {
      emit("focus", e);
    }, () => {
      onItemFocus(unref(id));
    });
    const handleKeydown = composeEventHandlers((e) => {
      emit("keydown", e);
    }, (e) => {
      const { key, shiftKey, target, currentTarget } = e;
      if (key === EVENT_CODE.tab && shiftKey) {
        onItemShiftTab();
        return;
      }
      if (target !== currentTarget)
        return;
      const focusIntent = getFocusIntent(e);
      if (focusIntent) {
        e.preventDefault();
        const items = getItems().filter((item) => item.focusable);
        let elements = items.map((item) => item.ref);
        switch (focusIntent) {
          case "last": {
            elements.reverse();
            break;
          }
          case "prev":
          case "next": {
            if (focusIntent === "prev") {
              elements.reverse();
            }
            const currentIdx = elements.indexOf(currentTarget);
            elements = loop.value ? reorderArray(elements, currentIdx + 1) : elements.slice(currentIdx + 1);
            break;
          }
        }
        nextTick(() => {
          focusFirst(elements);
        });
      }
    });
    const isCurrentTab = computed(() => currentTabbedId.value === unref(id));
    provide(ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, {
      rovingFocusGroupItemRef,
      tabIndex: computed(() => unref(isCurrentTab) ? 0 : -1),
      handleMousedown,
      handleFocus,
      handleKeydown
    });
    return {
      id,
      handleKeydown,
      handleFocus,
      handleMousedown
    };
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_roving_focus_collection_item = resolveComponent("el-roving-focus-collection-item");
  return openBlock(), createBlock(_component_el_roving_focus_collection_item, {
    id: _ctx.id,
    focusable: _ctx.focusable,
    active: _ctx.active
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "focusable", "active"]);
}
var ElRovingFocusItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["render", _sfc_render$7], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);
const dropdownProps = buildProps({
  trigger: useTooltipTriggerProps.trigger,
  effect: {
    ...useTooltipContentProps.effect,
    default: "light"
  },
  type: {
    type: definePropType(String)
  },
  placement: {
    type: definePropType(String),
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: true
  },
  loop: {
    type: Boolean,
    default: true
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: definePropType([Number, String]),
    default: 0
  },
  maxHeight: {
    type: definePropType([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    default: "menu"
  },
  buttonProps: {
    type: definePropType(Object)
  },
  teleported: useTooltipContentProps.teleported
});
const dropdownItemProps = buildProps({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: iconPropType
  }
});
const dropdownMenuProps = buildProps({
  onKeydown: { type: definePropType(Function) }
});
const FIRST_KEYS = [
  EVENT_CODE.down,
  EVENT_CODE.pageDown,
  EVENT_CODE.home
];
const LAST_KEYS = [EVENT_CODE.up, EVENT_CODE.pageUp, EVENT_CODE.end];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
const {
  ElCollection,
  ElCollectionItem,
  COLLECTION_INJECTION_KEY,
  COLLECTION_ITEM_INJECTION_KEY
} = createCollectionWithScope("Dropdown");
const DROPDOWN_INJECTION_KEY = Symbol("elDropdown");
const { ButtonGroup: ElButtonGroup } = ElButton;
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  name: "ElDropdown",
  components: {
    ElButton,
    ElButtonGroup,
    ElScrollbar,
    ElDropdownCollection: ElCollection,
    ElTooltip,
    ElRovingFocusGroup,
    ElOnlyChild: OnlyChild,
    ElIcon,
    ArrowDown: arrow_down_default
  },
  props: dropdownProps,
  emits: ["visible-change", "click", "command"],
  setup(props, { emit }) {
    const _instance = getCurrentInstance();
    const ns = useNamespace("dropdown");
    const { t } = useLocale();
    const triggeringElementRef = ref();
    const referenceElementRef = ref();
    const popperRef = ref(null);
    const contentRef = ref(null);
    const scrollbar = ref(null);
    const currentTabId = ref(null);
    const isUsingKeyboard = ref(false);
    const triggerKeys = [EVENT_CODE.enter, EVENT_CODE.space, EVENT_CODE.down];
    const wrapStyle = computed(() => ({
      maxHeight: addUnit(props.maxHeight)
    }));
    const dropdownTriggerKls = computed(() => [ns.m(dropdownSize.value)]);
    const defaultTriggerId = useId().value;
    const triggerId = computed(() => {
      return props.id || defaultTriggerId;
    });
    watch([triggeringElementRef, toRef(props, "trigger")], ([triggeringElement, trigger], [prevTriggeringElement]) => {
      var _a, _b, _c;
      const triggerArray = isArray(trigger) ? trigger : [trigger];
      if ((_a = prevTriggeringElement == null ? void 0 : prevTriggeringElement.$el) == null ? void 0 : _a.removeEventListener) {
        prevTriggeringElement.$el.removeEventListener("pointerenter", onAutofocusTriggerEnter);
      }
      if ((_b = triggeringElement == null ? void 0 : triggeringElement.$el) == null ? void 0 : _b.removeEventListener) {
        triggeringElement.$el.removeEventListener("pointerenter", onAutofocusTriggerEnter);
      }
      if (((_c = triggeringElement == null ? void 0 : triggeringElement.$el) == null ? void 0 : _c.addEventListener) && triggerArray.includes("hover")) {
        triggeringElement.$el.addEventListener("pointerenter", onAutofocusTriggerEnter);
      }
    }, { immediate: true });
    function handleClick() {
      handleClose();
    }
    function handleClose() {
      var _a;
      (_a = popperRef.value) == null ? void 0 : _a.onClose();
    }
    function handleOpen() {
      var _a;
      (_a = popperRef.value) == null ? void 0 : _a.onOpen();
    }
    const dropdownSize = useFormSize();
    function commandHandler(...args) {
      emit("command", ...args);
    }
    function onAutofocusTriggerEnter() {
      var _a, _b;
      (_b = (_a = triggeringElementRef.value) == null ? void 0 : _a.$el) == null ? void 0 : _b.focus();
    }
    function onItemEnter() {
    }
    function onItemLeave() {
      const contentEl = unref(contentRef);
      contentEl == null ? void 0 : contentEl.focus();
      currentTabId.value = null;
    }
    function handleCurrentTabIdChange(id) {
      currentTabId.value = id;
    }
    function handleEntryFocus(e) {
      if (!isUsingKeyboard.value) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
    function handleBeforeShowTooltip() {
      emit("visible-change", true);
    }
    function handleShowTooltip(event) {
      if ((event == null ? void 0 : event.type) === "keydown") {
        contentRef.value.focus();
      }
    }
    function handleBeforeHideTooltip() {
      emit("visible-change", false);
    }
    provide(DROPDOWN_INJECTION_KEY, {
      contentRef,
      role: computed(() => props.role),
      triggerId,
      isUsingKeyboard,
      onItemEnter,
      onItemLeave
    });
    provide("elDropdown", {
      instance: _instance,
      dropdownSize,
      handleClick,
      commandHandler,
      trigger: toRef(props, "trigger"),
      hideOnClick: toRef(props, "hideOnClick")
    });
    const onFocusAfterTrapped = (e) => {
      var _a, _b;
      e.preventDefault();
      (_b = (_a = contentRef.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a, {
        preventScroll: true
      });
    };
    const handlerMainButtonClick = (event) => {
      emit("click", event);
    };
    return {
      t,
      ns,
      scrollbar,
      wrapStyle,
      dropdownTriggerKls,
      dropdownSize,
      triggerId,
      triggerKeys,
      currentTabId,
      handleCurrentTabIdChange,
      handlerMainButtonClick,
      handleEntryFocus,
      handleClose,
      handleOpen,
      handleBeforeShowTooltip,
      handleShowTooltip,
      handleBeforeHideTooltip,
      onFocusAfterTrapped,
      popperRef,
      contentRef,
      triggeringElementRef,
      referenceElementRef
    };
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_el_dropdown_collection = resolveComponent("el-dropdown-collection");
  const _component_el_roving_focus_group = resolveComponent("el-roving-focus-group");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_only_child = resolveComponent("el-only-child");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_button = resolveComponent("el-button");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button_group = resolveComponent("el-button-group");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b(), _ctx.ns.is("disabled", _ctx.disabled)])
  }, [
    createVNode(_component_el_tooltip, {
      ref: "popperRef",
      role: _ctx.role,
      effect: _ctx.effect,
      "fallback-placements": ["bottom", "top"],
      "popper-options": _ctx.popperOptions,
      "gpu-acceleration": false,
      "hide-after": _ctx.trigger === "hover" ? _ctx.hideTimeout : 0,
      "manual-mode": true,
      placement: _ctx.placement,
      "popper-class": [_ctx.ns.e("popper"), _ctx.popperClass],
      "reference-element": (_a = _ctx.referenceElementRef) == null ? void 0 : _a.$el,
      trigger: _ctx.trigger,
      "trigger-keys": _ctx.triggerKeys,
      "trigger-target-el": _ctx.contentRef,
      "show-after": _ctx.trigger === "hover" ? _ctx.showTimeout : 0,
      "stop-popper-mouse-event": false,
      "virtual-ref": _ctx.triggeringElementRef,
      "virtual-triggering": _ctx.splitButton,
      disabled: _ctx.disabled,
      transition: `${_ctx.ns.namespace.value}-zoom-in-top`,
      teleported: _ctx.teleported,
      pure: "",
      persistent: "",
      onBeforeShow: _ctx.handleBeforeShowTooltip,
      onShow: _ctx.handleShowTooltip,
      onBeforeHide: _ctx.handleBeforeHideTooltip
    }, createSlots({
      content: withCtx(() => [
        createVNode(_component_el_scrollbar, {
          ref: "scrollbar",
          "wrap-style": _ctx.wrapStyle,
          tag: "div",
          "view-class": _ctx.ns.e("list")
        }, {
          default: withCtx(() => [
            createVNode(_component_el_roving_focus_group, {
              loop: _ctx.loop,
              "current-tab-id": _ctx.currentTabId,
              orientation: "horizontal",
              onCurrentTabIdChange: _ctx.handleCurrentTabIdChange,
              onEntryFocus: _ctx.handleEntryFocus
            }, {
              default: withCtx(() => [
                createVNode(_component_el_dropdown_collection, null, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "dropdown")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["loop", "current-tab-id", "onCurrentTabIdChange", "onEntryFocus"])
          ]),
          _: 3
        }, 8, ["wrap-style", "view-class"])
      ]),
      _: 2
    }, [
      !_ctx.splitButton ? {
        name: "default",
        fn: withCtx(() => [
          createVNode(_component_el_only_child, {
            id: _ctx.triggerId,
            ref: "triggeringElementRef",
            role: "button",
            tabindex: _ctx.tabindex
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "tabindex"])
        ])
      } : void 0
    ]), 1032, ["role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "onBeforeShow", "onShow", "onBeforeHide"]),
    _ctx.splitButton ? (openBlock(), createBlock(_component_el_button_group, { key: 0 }, {
      default: withCtx(() => [
        createVNode(_component_el_button, mergeProps({ ref: "referenceElementRef" }, _ctx.buttonProps, {
          size: _ctx.dropdownSize,
          type: _ctx.type,
          disabled: _ctx.disabled,
          tabindex: _ctx.tabindex,
          onClick: _ctx.handlerMainButtonClick
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, ["size", "type", "disabled", "tabindex", "onClick"]),
        createVNode(_component_el_button, mergeProps({
          id: _ctx.triggerId,
          ref: "triggeringElementRef"
        }, _ctx.buttonProps, {
          role: "button",
          size: _ctx.dropdownSize,
          type: _ctx.type,
          class: _ctx.ns.e("caret-button"),
          disabled: _ctx.disabled,
          tabindex: _ctx.tabindex,
          "aria-label": _ctx.t("el.dropdown.toggleDropdown")
        }), {
          default: withCtx(() => [
            createVNode(_component_el_icon, {
              class: normalizeClass(_ctx.ns.e("icon"))
            }, {
              default: withCtx(() => [
                createVNode(_component_arrow_down)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 16, ["id", "size", "type", "class", "disabled", "tabindex", "aria-label"])
      ]),
      _: 3
    })) : createCommentVNode("v-if", true)
  ], 2);
}
var Dropdown = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["render", _sfc_render$6], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  name: "DropdownItemImpl",
  components: {
    ElIcon
  },
  props: dropdownItemProps,
  emits: ["pointermove", "pointerleave", "click", "clickimpl"],
  setup(_, { emit }) {
    const ns = useNamespace("dropdown");
    const { role: menuRole } = inject(DROPDOWN_INJECTION_KEY, void 0);
    const { collectionItemRef: dropdownCollectionItemRef } = inject(COLLECTION_ITEM_INJECTION_KEY, void 0);
    const { collectionItemRef: rovingFocusCollectionItemRef } = inject(COLLECTION_ITEM_INJECTION_KEY$1, void 0);
    const {
      rovingFocusGroupItemRef,
      tabIndex,
      handleFocus,
      handleKeydown: handleItemKeydown,
      handleMousedown
    } = inject(ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, void 0);
    const itemRef = composeRefs(dropdownCollectionItemRef, rovingFocusCollectionItemRef, rovingFocusGroupItemRef);
    const role = computed(() => {
      if (menuRole.value === "menu") {
        return "menuitem";
      } else if (menuRole.value === "navigation") {
        return "link";
      }
      return "button";
    });
    const handleKeydown = composeEventHandlers((e) => {
      const { code } = e;
      if (code === EVENT_CODE.enter || code === EVENT_CODE.space) {
        e.preventDefault();
        e.stopImmediatePropagation();
        emit("clickimpl", e);
        return true;
      }
    }, handleItemKeydown);
    return {
      ns,
      itemRef,
      dataset: {
        [COLLECTION_ITEM_SIGN]: ""
      },
      role,
      tabIndex,
      handleFocus,
      handleKeydown,
      handleMousedown
    };
  }
});
const _hoisted_1$1 = ["aria-disabled", "tabindex", "role"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.divided ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      role: "separator",
      class: _ctx.ns.bem("menu", "item", "divided")
    }, _ctx.$attrs), null, 16)) : createCommentVNode("v-if", true),
    createElementVNode("li", mergeProps({ ref: _ctx.itemRef }, { ..._ctx.dataset, ..._ctx.$attrs }, {
      "aria-disabled": _ctx.disabled,
      class: [_ctx.ns.be("menu", "item"), _ctx.ns.is("disabled", _ctx.disabled)],
      tabindex: _ctx.tabIndex,
      role: _ctx.role,
      onClick: _cache[0] || (_cache[0] = (e) => _ctx.$emit("clickimpl", e)),
      onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
      onKeydown: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args), ["self"])),
      onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.handleMousedown && _ctx.handleMousedown(...args)),
      onPointermove: _cache[4] || (_cache[4] = (e) => _ctx.$emit("pointermove", e)),
      onPointerleave: _cache[5] || (_cache[5] = (e) => _ctx.$emit("pointerleave", e))
    }), [
      _ctx.icon ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
        ]),
        _: 1
      })) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default")
    ], 16, _hoisted_1$1)
  ], 64);
}
var ElDropdownItemImpl = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["render", _sfc_render$5], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);
const useDropdown = () => {
  const elDropdown2 = inject("elDropdown", {});
  const _elDropdownSize = computed(() => elDropdown2 == null ? void 0 : elDropdown2.dropdownSize);
  return {
    elDropdown: elDropdown2,
    _elDropdownSize
  };
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  name: "ElDropdownItem",
  components: {
    ElDropdownCollectionItem: ElCollectionItem,
    ElRovingFocusItem,
    ElDropdownItemImpl
  },
  inheritAttrs: false,
  props: dropdownItemProps,
  emits: ["pointermove", "pointerleave", "click"],
  setup(props, { emit, attrs }) {
    const { elDropdown: elDropdown2 } = useDropdown();
    const _instance = getCurrentInstance();
    const itemRef = ref(null);
    const textContent = computed(() => {
      var _a, _b;
      return (_b = (_a = unref(itemRef)) == null ? void 0 : _a.textContent) != null ? _b : "";
    });
    const { onItemEnter, onItemLeave } = inject(DROPDOWN_INJECTION_KEY, void 0);
    const handlePointerMove = composeEventHandlers((e) => {
      emit("pointermove", e);
      return e.defaultPrevented;
    }, whenMouse((e) => {
      if (props.disabled) {
        onItemLeave(e);
        return;
      }
      const target = e.currentTarget;
      if (target === document.activeElement || target.contains(document.activeElement)) {
        return;
      }
      onItemEnter(e);
      if (!e.defaultPrevented) {
        target == null ? void 0 : target.focus();
      }
    }));
    const handlePointerLeave = composeEventHandlers((e) => {
      emit("pointerleave", e);
      return e.defaultPrevented;
    }, whenMouse((e) => {
      onItemLeave(e);
    }));
    const handleClick = composeEventHandlers((e) => {
      if (props.disabled) {
        return;
      }
      emit("click", e);
      return e.type !== "keydown" && e.defaultPrevented;
    }, (e) => {
      var _a, _b, _c;
      if (props.disabled) {
        e.stopImmediatePropagation();
        return;
      }
      if ((_a = elDropdown2 == null ? void 0 : elDropdown2.hideOnClick) == null ? void 0 : _a.value) {
        (_b = elDropdown2.handleClick) == null ? void 0 : _b.call(elDropdown2);
      }
      (_c = elDropdown2.commandHandler) == null ? void 0 : _c.call(elDropdown2, props.command, _instance, e);
    });
    const propsAndAttrs = computed(() => {
      return { ...props, ...attrs };
    });
    return {
      handleClick,
      handlePointerMove,
      handlePointerLeave,
      textContent,
      propsAndAttrs
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_el_dropdown_item_impl = resolveComponent("el-dropdown-item-impl");
  const _component_el_roving_focus_item = resolveComponent("el-roving-focus-item");
  const _component_el_dropdown_collection_item = resolveComponent("el-dropdown-collection-item");
  return openBlock(), createBlock(_component_el_dropdown_collection_item, {
    disabled: _ctx.disabled,
    "text-value": (_a = _ctx.textValue) != null ? _a : _ctx.textContent
  }, {
    default: withCtx(() => [
      createVNode(_component_el_roving_focus_item, {
        focusable: !_ctx.disabled
      }, {
        default: withCtx(() => [
          createVNode(_component_el_dropdown_item_impl, mergeProps(_ctx.propsAndAttrs, {
            onPointerleave: _ctx.handlePointerLeave,
            onPointermove: _ctx.handlePointerMove,
            onClickimpl: _ctx.handleClick
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 16, ["onPointerleave", "onPointermove", "onClickimpl"])
        ]),
        _: 3
      }, 8, ["focusable"])
    ]),
    _: 3
  }, 8, ["disabled", "text-value"]);
}
var DropdownItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["render", _sfc_render$4], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  name: "ElDropdownMenu",
  props: dropdownMenuProps,
  setup(props) {
    const ns = useNamespace("dropdown");
    const { _elDropdownSize } = useDropdown();
    const size = _elDropdownSize.value;
    const { focusTrapRef, onKeydown } = inject(FOCUS_TRAP_INJECTION_KEY, void 0);
    const { contentRef, role, triggerId } = inject(DROPDOWN_INJECTION_KEY, void 0);
    const { collectionRef: dropdownCollectionRef, getItems } = inject(COLLECTION_INJECTION_KEY, void 0);
    const {
      rovingFocusGroupRef,
      rovingFocusGroupRootStyle,
      tabIndex,
      onBlur,
      onFocus,
      onMousedown
    } = inject(ROVING_FOCUS_GROUP_INJECTION_KEY, void 0);
    const { collectionRef: rovingFocusGroupCollectionRef } = inject(COLLECTION_INJECTION_KEY$1, void 0);
    const dropdownKls = computed(() => {
      return [ns.b("menu"), ns.bm("menu", size == null ? void 0 : size.value)];
    });
    const dropdownListWrapperRef = composeRefs(contentRef, dropdownCollectionRef, focusTrapRef, rovingFocusGroupRef, rovingFocusGroupCollectionRef);
    const composedKeydown = composeEventHandlers((e) => {
      var _a;
      (_a = props.onKeydown) == null ? void 0 : _a.call(props, e);
    }, (e) => {
      const { currentTarget, code, target } = e;
      currentTarget.contains(target);
      if (EVENT_CODE.tab === code) {
        e.stopImmediatePropagation();
      }
      e.preventDefault();
      if (target !== unref(contentRef))
        return;
      if (!FIRST_LAST_KEYS.includes(code))
        return;
      const items = getItems().filter((item) => !item.disabled);
      const targets = items.map((item) => item.ref);
      if (LAST_KEYS.includes(code)) {
        targets.reverse();
      }
      focusFirst(targets);
    });
    const handleKeydown = (e) => {
      composedKeydown(e);
      onKeydown(e);
    };
    return {
      size,
      rovingFocusGroupRootStyle,
      tabIndex,
      dropdownKls,
      role,
      triggerId,
      dropdownListWrapperRef,
      handleKeydown,
      onBlur,
      onFocus,
      onMousedown
    };
  }
});
const _hoisted_1 = ["role", "aria-labelledby"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", {
    ref: _ctx.dropdownListWrapperRef,
    class: normalizeClass(_ctx.dropdownKls),
    style: normalizeStyle(_ctx.rovingFocusGroupRootStyle),
    tabindex: -1,
    role: _ctx.role,
    "aria-labelledby": _ctx.triggerId,
    onBlur: _cache[0] || (_cache[0] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
    onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)),
    onKeydown: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args), ["self"])),
    onMousedown: _cache[3] || (_cache[3] = withModifiers((...args) => _ctx.onMousedown && _ctx.onMousedown(...args), ["self"]))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 46, _hoisted_1);
}
var DropdownMenu = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render$3], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);
const ElDropdown = withInstall(Dropdown, {
  DropdownItem,
  DropdownMenu
});
const ElDropdownItem = withNoopInstall(DropdownItem);
const ElDropdownMenu = withNoopInstall(DropdownMenu);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  name: "ElMenuCollapseTransition",
  setup() {
    const ns = useNamespace("menu");
    const listeners = {
      onBeforeEnter: (el) => el.style.opacity = "0.2",
      onEnter(el, done) {
        addClass(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "1";
        done();
      },
      onAfterEnter(el) {
        removeClass(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "";
      },
      onBeforeLeave(el) {
        if (!el.dataset) {
          el.dataset = {};
        }
        if (hasClass(el, ns.m("collapse"))) {
          removeClass(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          addClass(el, ns.m("collapse"));
        } else {
          addClass(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          removeClass(el, ns.m("collapse"));
        }
        el.style.width = `${el.scrollWidth}px`;
        el.style.overflow = "hidden";
      },
      onLeave(el) {
        addClass(el, "horizontal-collapse-transition");
        el.style.width = `${el.dataset.scrollWidth}px`;
      }
    };
    return {
      listeners
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, mergeProps({ mode: "out-in" }, _ctx.listeners), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var ElMenuCollapseTransition = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);
function useMenu(instance, currentIndex) {
  const indexPath = computed(() => {
    let parent = instance.parent;
    const path = [currentIndex.value];
    while (parent.type.name !== "ElMenu") {
      if (parent.props.index) {
        path.unshift(parent.props.index);
      }
      parent = parent.parent;
    }
    return path;
  });
  const parentMenu = computed(() => {
    let parent = instance.parent;
    while (parent && !["ElMenu", "ElSubMenu"].includes(parent.type.name)) {
      parent = parent.parent;
    }
    return parent;
  });
  return {
    parentMenu,
    indexPath
  };
}
function useMenuColor(props) {
  const menuBarColor = computed(() => {
    const color = props.backgroundColor;
    if (!color) {
      return "";
    } else {
      return new TinyColor(color).shade(20).toString();
    }
  });
  return menuBarColor;
}
const useMenuCssVar = (props, level) => {
  const ns = useNamespace("menu");
  return computed(() => {
    return ns.cssVarBlock({
      "text-color": props.textColor || "",
      "hover-text-color": props.textColor || "",
      "bg-color": props.backgroundColor || "",
      "hover-bg-color": useMenuColor(props).value || "",
      "active-color": props.activeTextColor || "",
      level: `${level}`
    });
  });
};
const subMenuProps = buildProps({
  index: {
    type: String,
    required: true
  },
  showTimeout: {
    type: Number,
    default: 300
  },
  hideTimeout: {
    type: Number,
    default: 300
  },
  popperClass: String,
  disabled: Boolean,
  popperAppendToBody: {
    type: Boolean,
    default: void 0
  },
  teleported: {
    type: Boolean,
    default: void 0
  },
  popperOffset: {
    type: Number,
    default: 6
  },
  expandCloseIcon: {
    type: iconPropType
  },
  expandOpenIcon: {
    type: iconPropType
  },
  collapseCloseIcon: {
    type: iconPropType
  },
  collapseOpenIcon: {
    type: iconPropType
  }
});
const COMPONENT_NAME$2 = "ElSubMenu";
var SubMenu = /* @__PURE__ */ defineComponent({
  name: COMPONENT_NAME$2,
  props: subMenuProps,
  setup(props, { slots, expose }) {
    useDeprecated({
      from: "popper-append-to-body",
      replacement: "teleported",
      scope: COMPONENT_NAME$2,
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/menu.html#submenu-attributes"
    }, computed(() => props.popperAppendToBody !== void 0));
    const instance = getCurrentInstance();
    const { indexPath, parentMenu } = useMenu(instance, computed(() => props.index));
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const rootMenu = inject("rootMenu");
    if (!rootMenu)
      throwError(COMPONENT_NAME$2, "can not inject root menu");
    const subMenu = inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      throwError(COMPONENT_NAME$2, "can not inject sub menu");
    const items = ref({});
    const subMenus = ref({});
    let timeout;
    const mouseInChild = ref(false);
    const verticalTitleRef = ref();
    const vPopper = ref(null);
    const currentPlacement = computed(() => mode.value === "horizontal" && isFirstLevel.value ? "bottom-start" : "right-start");
    const subMenuTitleIcon = computed(() => {
      return mode.value === "horizontal" && isFirstLevel.value || mode.value === "vertical" && !rootMenu.props.collapse ? props.expandCloseIcon && props.expandOpenIcon ? opened.value ? props.expandOpenIcon : props.expandCloseIcon : arrow_down_default : props.collapseCloseIcon && props.collapseOpenIcon ? opened.value ? props.collapseOpenIcon : props.collapseCloseIcon : arrow_right_default;
    });
    const isFirstLevel = computed(() => {
      return subMenu.level === 0;
    });
    const appendToBody = computed(() => {
      var _a;
      const value = (_a = props.teleported) != null ? _a : props.popperAppendToBody;
      return value === void 0 ? isFirstLevel.value : value;
    });
    const menuTransitionName = computed(() => rootMenu.props.collapse ? `${nsMenu.namespace.value}-zoom-in-left` : `${nsMenu.namespace.value}-zoom-in-top`);
    const fallbackPlacements = computed(() => mode.value === "horizontal" && isFirstLevel.value ? [
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "right-start",
      "left-start"
    ] : [
      "right-start",
      "left-start",
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end"
    ]);
    const opened = computed(() => rootMenu.openedMenus.includes(props.index));
    const active = computed(() => {
      let isActive = false;
      Object.values(items.value).forEach((item2) => {
        if (item2.active) {
          isActive = true;
        }
      });
      Object.values(subMenus.value).forEach((subItem) => {
        if (subItem.active) {
          isActive = true;
        }
      });
      return isActive;
    });
    const backgroundColor = computed(() => rootMenu.props.backgroundColor || "");
    const activeTextColor = computed(() => rootMenu.props.activeTextColor || "");
    const textColor = computed(() => rootMenu.props.textColor || "");
    const mode = computed(() => rootMenu.props.mode);
    reactive({
      index: props.index,
      indexPath,
      active
    });
    const titleStyle = computed(() => {
      if (mode.value !== "horizontal") {
        return {
          color: textColor.value
        };
      }
      return {
        borderBottomColor: active.value ? rootMenu.props.activeTextColor ? activeTextColor.value : "" : "transparent",
        color: active.value ? activeTextColor.value : textColor.value
      };
    });
    const doDestroy = () => {
      var _a, _b, _c;
      return (_c = (_b = (_a = vPopper.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.popperInstanceRef) == null ? void 0 : _c.destroy();
    };
    const handleCollapseToggle = (value) => {
      if (!value) {
        doDestroy();
      }
    };
    const handleClick = () => {
      if (rootMenu.props.menuTrigger === "hover" && rootMenu.props.mode === "horizontal" || rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled)
        return;
      rootMenu.handleSubMenuClick({
        index: props.index,
        indexPath: indexPath.value,
        active: active.value
      });
    };
    const handleMouseenter = (event, showTimeout = props.showTimeout) => {
      var _a;
      if (event.type === "focus") {
        return;
      }
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled) {
        return;
      }
      subMenu.mouseInChild.value = true;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = useTimeoutFn(() => {
        rootMenu.openMenu(props.index, indexPath.value);
      }, showTimeout));
      if (appendToBody.value) {
        (_a = parentMenu.value.vnode.el) == null ? void 0 : _a.dispatchEvent(new MouseEvent("mouseenter"));
      }
    };
    const handleMouseleave = (deepDispatch = false) => {
      var _a, _b;
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical") {
        return;
      }
      timeout == null ? void 0 : timeout();
      subMenu.mouseInChild.value = false;
      ({ stop: timeout } = useTimeoutFn(() => !mouseInChild.value && rootMenu.closeMenu(props.index, indexPath.value), props.hideTimeout));
      if (appendToBody.value && deepDispatch) {
        if (((_a = instance.parent) == null ? void 0 : _a.type.name) === "ElSubMenu") {
          (_b = subMenu.handleMouseleave) == null ? void 0 : _b.call(subMenu, true);
        }
      }
    };
    watch(() => rootMenu.props.collapse, (value) => handleCollapseToggle(Boolean(value)));
    {
      const addSubMenu = (item2) => {
        subMenus.value[item2.index] = item2;
      };
      const removeSubMenu = (item2) => {
        delete subMenus.value[item2.index];
      };
      provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        handleMouseleave,
        mouseInChild,
        level: subMenu.level + 1
      });
    }
    expose({
      opened
    });
    return () => {
      var _a;
      const titleTag = [
        (_a = slots.title) == null ? void 0 : _a.call(slots),
        h(ElIcon, {
          class: nsSubMenu.e("icon-arrow"),
          style: {
            transform: opened.value ? props.expandCloseIcon && props.expandOpenIcon || props.collapseCloseIcon && props.collapseOpenIcon && rootMenu.props.collapse ? "none" : "rotateZ(180deg)" : "none"
          }
        }, {
          default: () => isString(subMenuTitleIcon.value) ? h(instance.appContext.components[subMenuTitleIcon.value]) : h(subMenuTitleIcon.value)
        })
      ];
      const ulStyle = useMenuCssVar(rootMenu.props, subMenu.level + 1);
      const child = rootMenu.isMenuPopup ? h(ElTooltip, {
        ref: vPopper,
        visible: opened.value,
        effect: "light",
        pure: true,
        offset: props.popperOffset,
        showArrow: false,
        persistent: true,
        popperClass: props.popperClass,
        placement: currentPlacement.value,
        teleported: appendToBody.value,
        fallbackPlacements: fallbackPlacements.value,
        transition: menuTransitionName.value,
        gpuAcceleration: false
      }, {
        content: () => {
          var _a2;
          return h("div", {
            class: [
              nsMenu.m(mode.value),
              nsMenu.m("popup-container"),
              props.popperClass
            ],
            onMouseenter: (evt) => handleMouseenter(evt, 100),
            onMouseleave: () => handleMouseleave(true),
            onFocus: (evt) => handleMouseenter(evt, 100)
          }, [
            h("ul", {
              class: [
                nsMenu.b(),
                nsMenu.m("popup"),
                nsMenu.m(`popup-${currentPlacement.value}`)
              ],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)])
          ]);
        },
        default: () => h("div", {
          class: nsSubMenu.e("title"),
          style: [
            titleStyle.value,
            { backgroundColor: backgroundColor.value }
          ],
          onClick: handleClick
        }, titleTag)
      }) : h(Fragment, {}, [
        h("div", {
          class: nsSubMenu.e("title"),
          style: [
            titleStyle.value,
            { backgroundColor: backgroundColor.value }
          ],
          ref: verticalTitleRef,
          onClick: handleClick
        }, titleTag),
        h(_CollapseTransition, {}, {
          default: () => {
            var _a2;
            return withDirectives(h("ul", {
              role: "menu",
              class: [nsMenu.b(), nsMenu.m("inline")],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]), [[vShow, opened.value]]);
          }
        })
      ]);
      return h("li", {
        class: [
          nsSubMenu.b(),
          nsSubMenu.is("active", active.value),
          nsSubMenu.is("opened", opened.value),
          nsSubMenu.is("disabled", props.disabled)
        ],
        role: "menuitem",
        ariaHaspopup: true,
        ariaExpanded: opened.value,
        onMouseenter: handleMouseenter,
        onMouseleave: () => handleMouseleave(true),
        onFocus: handleMouseenter
      }, [child]);
    };
  }
});
const menuProps = buildProps({
  mode: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "vertical"
  },
  defaultActive: {
    type: String,
    default: ""
  },
  defaultOpeneds: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  collapseTransition: {
    type: Boolean,
    default: true
  },
  ellipsis: {
    type: Boolean,
    default: true
  },
  popperEffect: {
    type: String,
    values: ["dark", "light"],
    default: "dark"
  }
});
const checkIndexPath = (indexPath) => Array.isArray(indexPath) && indexPath.every((path) => isString(path));
const menuEmits = {
  close: (index, indexPath) => isString(index) && checkIndexPath(indexPath),
  open: (index, indexPath) => isString(index) && checkIndexPath(indexPath),
  select: (index, indexPath, item, routerResult) => isString(index) && checkIndexPath(indexPath) && isObject(item) && (routerResult === void 0 || routerResult instanceof Promise)
};
var Menu = /* @__PURE__ */ defineComponent({
  name: "ElMenu",
  props: menuProps,
  emits: menuEmits,
  setup(props, { emit, slots, expose }) {
    const instance = getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const menu = ref();
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const sliceIndex = ref(-1);
    const openedMenus = ref(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []);
    const activeIndex = ref(props.defaultActive);
    const items = ref({});
    const subMenus = ref({});
    const isMenuPopup = computed(() => {
      return props.mode === "horizontal" || props.mode === "vertical" && props.collapse;
    });
    const initMenu = () => {
      const activeItem = activeIndex.value && items.value[activeIndex.value];
      if (!activeItem || props.mode === "horizontal" || props.collapse)
        return;
      const indexPath = activeItem.indexPath;
      indexPath.forEach((index) => {
        const subMenu = subMenus.value[index];
        subMenu && openMenu(index, subMenu.indexPath);
      });
    };
    const openMenu = (index, indexPath) => {
      if (openedMenus.value.includes(index))
        return;
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index2) => indexPath.includes(index2));
      }
      openedMenus.value.push(index);
      emit("open", index, indexPath);
    };
    const close = (index) => {
      const i = openedMenus.value.indexOf(index);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
    };
    const closeMenu = (index, indexPath) => {
      close(index);
      emit("close", index, indexPath);
    };
    const handleSubMenuClick = ({
      index,
      indexPath
    }) => {
      const isOpened = openedMenus.value.includes(index);
      if (isOpened) {
        closeMenu(index, indexPath);
      } else {
        openMenu(index, indexPath);
      }
    };
    const handleMenuItemClick = (menuItem) => {
      if (props.mode === "horizontal" || props.collapse) {
        openedMenus.value = [];
      }
      const { index, indexPath } = menuItem;
      if (index === void 0 || indexPath === void 0)
        return;
      if (props.router && router) {
        const route = menuItem.route || index;
        const routerResult = router.push(route).then((res) => {
          if (!res)
            activeIndex.value = index;
          return res;
        });
        emit("select", index, indexPath, { index, indexPath, route }, routerResult);
      } else {
        activeIndex.value = index;
        emit("select", index, indexPath, { index, indexPath });
      }
    };
    const updateActiveIndex = (val) => {
      const itemsInData = items.value;
      const item = itemsInData[val] || activeIndex.value && itemsInData[activeIndex.value] || itemsInData[props.defaultActive];
      if (item) {
        activeIndex.value = item.index;
      } else {
        activeIndex.value = val;
      }
    };
    const calcSliceIndex = () => {
      var _a, _b;
      if (!menu.value)
        return -1;
      const items2 = Array.from((_b = (_a = menu.value) == null ? void 0 : _a.childNodes) != null ? _b : []).filter((item) => item.nodeName !== "#text" || item.nodeValue);
      const moreItemWidth = 64;
      const paddingLeft = Number.parseInt(getComputedStyle(menu.value).paddingLeft, 10);
      const paddingRight = Number.parseInt(getComputedStyle(menu.value).paddingRight, 10);
      const menuWidth = menu.value.clientWidth - paddingLeft - paddingRight;
      let calcWidth = 0;
      let sliceIndex2 = 0;
      items2.forEach((item, index) => {
        calcWidth += item.offsetWidth || 0;
        if (calcWidth <= menuWidth - moreItemWidth) {
          sliceIndex2 = index + 1;
        }
      });
      return sliceIndex2 === items2.length ? -1 : sliceIndex2;
    };
    const debounce = (fn, wait = 33.34) => {
      let timmer;
      return () => {
        timmer && clearTimeout(timmer);
        timmer = setTimeout(() => {
          fn();
        }, wait);
      };
    };
    let isFirstTimeRender = true;
    const handleResize = () => {
      const callback = () => {
        sliceIndex.value = -1;
        nextTick(() => {
          sliceIndex.value = calcSliceIndex();
        });
      };
      isFirstTimeRender ? callback() : debounce(callback)();
      isFirstTimeRender = false;
    };
    watch(() => props.defaultActive, (currentActive) => {
      if (!items.value[currentActive]) {
        activeIndex.value = "";
      }
      updateActiveIndex(currentActive);
    });
    watch(() => props.collapse, (value) => {
      if (value)
        openedMenus.value = [];
    });
    watch(items.value, initMenu);
    let resizeStopper;
    watchEffect(() => {
      if (props.mode === "horizontal" && props.ellipsis)
        resizeStopper = useResizeObserver(menu, handleResize).stop;
      else
        resizeStopper == null ? void 0 : resizeStopper();
    });
    {
      const addSubMenu = (item) => {
        subMenus.value[item.index] = item;
      };
      const removeSubMenu = (item) => {
        delete subMenus.value[item.index];
      };
      const addMenuItem = (item) => {
        items.value[item.index] = item;
      };
      const removeMenuItem = (item) => {
        delete items.value[item.index];
      };
      provide("rootMenu", reactive({
        props,
        openedMenus,
        items,
        subMenus,
        activeIndex,
        isMenuPopup,
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu,
        handleMenuItemClick,
        handleSubMenuClick
      }));
      provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        mouseInChild: ref(false),
        level: 0
      });
    }
    {
      const open = (index) => {
        const { indexPath } = subMenus.value[index];
        indexPath.forEach((i) => openMenu(i, indexPath));
      };
      expose({
        open,
        close,
        handleResize
      });
    }
    return () => {
      var _a, _b;
      let slot = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      const vShowMore = [];
      if (props.mode === "horizontal" && menu.value) {
        const originalSlot = flattedChildren(slot);
        const slotDefault = sliceIndex.value === -1 ? originalSlot : originalSlot.slice(0, sliceIndex.value);
        const slotMore = sliceIndex.value === -1 ? [] : originalSlot.slice(sliceIndex.value);
        if ((slotMore == null ? void 0 : slotMore.length) && props.ellipsis) {
          slot = slotDefault;
          vShowMore.push(h(SubMenu, {
            index: "sub-menu-more",
            class: nsSubMenu.e("hide-arrow")
          }, {
            title: () => h(ElIcon, {
              class: nsSubMenu.e("icon-more")
            }, { default: () => h(more_default) }),
            default: () => slotMore
          }));
        }
      }
      const ulStyle = useMenuCssVar(props, 0);
      const vMenu = h("ul", {
        key: String(props.collapse),
        role: "menubar",
        ref: menu,
        style: ulStyle.value,
        class: {
          [nsMenu.b()]: true,
          [nsMenu.m(props.mode)]: true,
          [nsMenu.m("collapse")]: props.collapse
        }
      }, [...slot, ...vShowMore]);
      if (props.collapseTransition && props.mode === "vertical") {
        return h(ElMenuCollapseTransition, () => vMenu);
      }
      return vMenu;
    };
  }
});
const menuItemProps = buildProps({
  index: {
    type: definePropType([String, null]),
    default: null
  },
  route: {
    type: definePropType([String, Object])
  },
  disabled: Boolean
});
const menuItemEmits = {
  click: (item) => isString(item.index) && Array.isArray(item.indexPath)
};
const COMPONENT_NAME$1 = "ElMenuItem";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  name: COMPONENT_NAME$1,
  components: {
    ElTooltip
  },
  props: menuItemProps,
  emits: menuItemEmits,
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const rootMenu = inject("rootMenu");
    const nsMenu = useNamespace("menu");
    const nsMenuItem = useNamespace("menu-item");
    if (!rootMenu)
      throwError(COMPONENT_NAME$1, "can not inject root menu");
    const { parentMenu, indexPath } = useMenu(instance, toRef(props, "index"));
    const subMenu = inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      throwError(COMPONENT_NAME$1, "can not inject sub menu");
    const active = computed(() => props.index === rootMenu.activeIndex);
    const item = reactive({
      index: props.index,
      indexPath,
      active
    });
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route
        });
        emit("click", item);
      }
    };
    return {
      parentMenu,
      rootMenu,
      active,
      nsMenu,
      nsMenuItem,
      handleClick
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass([
      _ctx.nsMenuItem.b(),
      _ctx.nsMenuItem.is("active", _ctx.active),
      _ctx.nsMenuItem.is("disabled", _ctx.disabled)
    ]),
    role: "menuitem",
    tabindex: "-1",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.parentMenu.type.name === "ElMenu" && _ctx.rootMenu.props.collapse && _ctx.$slots.title ? (openBlock(), createBlock(_component_el_tooltip, {
      key: 0,
      effect: _ctx.rootMenu.props.popperEffect,
      placement: "right",
      "fallback-placements": ["left"],
      persistent: ""
    }, {
      content: withCtx(() => [
        renderSlot(_ctx.$slots, "title")
      ]),
      default: withCtx(() => [
        createElementVNode("div", {
          class: normalizeClass(_ctx.nsMenu.be("tooltip", "trigger"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["effect"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      renderSlot(_ctx.$slots, "default"),
      renderSlot(_ctx.$slots, "title")
    ], 64))
  ], 2);
}
var MenuItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);
const menuItemGroupProps = {
  title: String
};
const COMPONENT_NAME = "ElMenuItemGroup";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: COMPONENT_NAME,
  props: menuItemGroupProps,
  setup() {
    const ns = useNamespace("menu-item-group");
    return {
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.ns.b())
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("title"))
    }, [
      !_ctx.$slots.title ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString(_ctx.title), 1)
      ], 64)) : renderSlot(_ctx.$slots, "title", { key: 1 })
    ], 2),
    createElementVNode("ul", null, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
var MenuItemGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);
const ElMenu = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu
});
const ElMenuItem = withNoopInstall(MenuItem);
const ElMenuItemGroup = withNoopInstall(MenuItemGroup);
const ElSubMenu = withNoopInstall(SubMenu);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layout",
  __ssrInlineRender: true,
  setup(__props) {
    const item = {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    };
    const tableData = ref(Array.from({ length: 20 }).fill(item));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_container = ElContainer;
      const _component_el_aside = ElAside;
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_menu = ElMenu;
      const _component_el_sub_menu = ElSubMenu;
      const _component_el_icon = ElIcon;
      const _component_el_menu_item_group = ElMenuItemGroup;
      const _component_el_menu_item = ElMenuItem;
      const _component_el_header = ElHeader;
      const _component_el_dropdown = ElDropdown;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_main = ElMain;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      _push(ssrRenderComponent(_component_el_container, mergeProps({
        class: "layout-container-demo",
        style: { "height": "600px" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_aside, { width: "200px" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_scrollbar, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_menu, { "default-openeds": ["1", "3"] }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_sub_menu, { index: "1" }, {
                                title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_icon, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(message_default), null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(message_default))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`Navigator One `);
                                  } else {
                                    return [
                                      createVNode(_component_el_icon, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(message_default))
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode("Navigator One ")
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_menu_item_group, null, {
                                      title: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Group 1`);
                                        } else {
                                          return [
                                            createTextVNode("Group 1")
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "1-1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Option 1`);
                                              } else {
                                                return [
                                                  createTextVNode("Option 1")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "1-2" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Option 2`);
                                              } else {
                                                return [
                                                  createTextVNode("Option 2")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_el_menu_item, { index: "1-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Option 1")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_el_menu_item, { index: "1-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Option 2")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_el_menu_item_group, { title: "Group 2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "1-3" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Option 3`);
                                              } else {
                                                return [
                                                  createTextVNode("Option 3")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_el_menu_item, { index: "1-3" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Option 3")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_el_sub_menu, { index: "1-4" }, {
                                      title: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Option4`);
                                        } else {
                                          return [
                                            createTextVNode("Option4")
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "1-4-1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Option 4-1`);
                                              } else {
                                                return [
                                                  createTextVNode("Option 4-1")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Option 4-1")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_el_menu_item_group, null, {
                                        title: withCtx(() => [
                                          createTextVNode("Group 1")
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_el_menu_item, { index: "1-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Option 1")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_el_menu_item, { index: "1-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Option 2")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_el_menu_item, { index: "1-3" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Option 3")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_sub_menu, { index: "1-4" }, {
                                        title: withCtx(() => [
                                          createTextVNode("Option4")
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Option 4-1")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_sub_menu, { index: "2" }, {
                                title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_icon, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(menu_default), null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(menu_default))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`Navigator Two `);
                                  } else {
                                    return [
                                      createVNode(_component_el_icon, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(menu_default))
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode("Navigator Two ")
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_menu_item_group, null, {
                                      title: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Group 1`);
                                        } else {
                                          return [
                                            createTextVNode("Group 1")
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "2-1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Option 1`);
                                              } else {
                                                return [
                                                  createTextVNode("Option 1")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "2-2" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Option 2`);
                                              } else {
                                                return [
                                                  createTextVNode("Option 2")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_el_menu_item, { index: "2-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Option 1")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_el_menu_item, { index: "2-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Option 2")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_el_menu_item_group, { title: "Group 2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "2-3" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Option 3`);
                                              } else {
                                                return [
                                                  createTextVNode("Option 3")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_el_menu_item, { index: "2-3" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Option 3")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_el_sub_menu, { index: "2-4" }, {
                                      title: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Option 4`);
                                        } else {
                                          return [
                                            createTextVNode("Option 4")
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "2-4-1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Option 4-1`);
                                              } else {
                                                return [
                                                  createTextVNode("Option 4-1")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_el_menu_item, { index: "2-4-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Option 4-1")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_el_menu_item_group, null, {
                                        title: withCtx(() => [
                                          createTextVNode("Group 1")
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_el_menu_item, { index: "2-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Option 1")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_el_menu_item, { index: "2-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Option 2")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_el_menu_item, { index: "2-3" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Option 3")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_sub_menu, { index: "2-4" }, {
                                        title: withCtx(() => [
                                          createTextVNode("Option 4")
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_el_menu_item, { index: "2-4-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Option 4-1")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_sub_menu, { index: "3" }, {
                                title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_icon, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(setting_default), null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(setting_default))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`Navigator Three `);
                                  } else {
                                    return [
                                      createVNode(_component_el_icon, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(setting_default))
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode("Navigator Three ")
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_menu_item_group, null, {
                                      title: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Group 1`);
                                        } else {
                                          return [
                                            createTextVNode("Group 1")
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "3-1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Option 1`);
                                              } else {
                                                return [
                                                  createTextVNode("Option 1")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "3-2" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Option 2`);
                                              } else {
                                                return [
                                                  createTextVNode("Option 2")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_el_menu_item, { index: "3-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Option 1")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_el_menu_item, { index: "3-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Option 2")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_el_menu_item_group, { title: "Group 2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "3-3" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Option 3`);
                                              } else {
                                                return [
                                                  createTextVNode("Option 3")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_el_menu_item, { index: "3-3" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Option 3")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_el_sub_menu, { index: "3-4" }, {
                                      title: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Option 4`);
                                        } else {
                                          return [
                                            createTextVNode("Option 4")
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "3-4-1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Option 4-1`);
                                              } else {
                                                return [
                                                  createTextVNode("Option 4-1")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_el_menu_item, { index: "3-4-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Option 4-1")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_el_menu_item_group, null, {
                                        title: withCtx(() => [
                                          createTextVNode("Group 1")
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_el_menu_item, { index: "3-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Option 1")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_el_menu_item, { index: "3-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Option 2")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_el_menu_item, { index: "3-3" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Option 3")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_sub_menu, { index: "3-4" }, {
                                        title: withCtx(() => [
                                          createTextVNode("Option 4")
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_el_menu_item, { index: "3-4-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Option 4-1")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_sub_menu, { index: "1" }, {
                                  title: withCtx(() => [
                                    createVNode(_component_el_icon, null, {
                                      default: withCtx(() => [
                                        createVNode(unref(message_default))
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode("Navigator One ")
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item_group, null, {
                                      title: withCtx(() => [
                                        createTextVNode("Group 1")
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_el_menu_item, { index: "1-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Option 1")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_el_menu_item, { index: "1-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Option 2")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_el_menu_item, { index: "1-3" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Option 3")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_sub_menu, { index: "1-4" }, {
                                      title: withCtx(() => [
                                        createTextVNode("Option4")
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Option 4-1")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_sub_menu, { index: "2" }, {
                                  title: withCtx(() => [
                                    createVNode(_component_el_icon, null, {
                                      default: withCtx(() => [
                                        createVNode(unref(menu_default))
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode("Navigator Two ")
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item_group, null, {
                                      title: withCtx(() => [
                                        createTextVNode("Group 1")
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_el_menu_item, { index: "2-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Option 1")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_el_menu_item, { index: "2-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Option 2")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_el_menu_item, { index: "2-3" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Option 3")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_sub_menu, { index: "2-4" }, {
                                      title: withCtx(() => [
                                        createTextVNode("Option 4")
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_el_menu_item, { index: "2-4-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Option 4-1")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_sub_menu, { index: "3" }, {
                                  title: withCtx(() => [
                                    createVNode(_component_el_icon, null, {
                                      default: withCtx(() => [
                                        createVNode(unref(setting_default))
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode("Navigator Three ")
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item_group, null, {
                                      title: withCtx(() => [
                                        createTextVNode("Group 1")
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_el_menu_item, { index: "3-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Option 1")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_el_menu_item, { index: "3-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Option 2")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_el_menu_item, { index: "3-3" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Option 3")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_sub_menu, { index: "3-4" }, {
                                      title: withCtx(() => [
                                        createTextVNode("Option 4")
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_el_menu_item, { index: "3-4-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Option 4-1")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_menu, { "default-openeds": ["1", "3"] }, {
                            default: withCtx(() => [
                              createVNode(_component_el_sub_menu, { index: "1" }, {
                                title: withCtx(() => [
                                  createVNode(_component_el_icon, null, {
                                    default: withCtx(() => [
                                      createVNode(unref(message_default))
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode("Navigator One ")
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item_group, null, {
                                    title: withCtx(() => [
                                      createTextVNode("Group 1")
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_el_menu_item, { index: "1-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Option 1")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_menu_item, { index: "1-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Option 2")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_el_menu_item, { index: "1-3" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Option 3")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_sub_menu, { index: "1-4" }, {
                                    title: withCtx(() => [
                                      createTextVNode("Option4")
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Option 4-1")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_sub_menu, { index: "2" }, {
                                title: withCtx(() => [
                                  createVNode(_component_el_icon, null, {
                                    default: withCtx(() => [
                                      createVNode(unref(menu_default))
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode("Navigator Two ")
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item_group, null, {
                                    title: withCtx(() => [
                                      createTextVNode("Group 1")
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_el_menu_item, { index: "2-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Option 1")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_menu_item, { index: "2-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Option 2")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_el_menu_item, { index: "2-3" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Option 3")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_sub_menu, { index: "2-4" }, {
                                    title: withCtx(() => [
                                      createTextVNode("Option 4")
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_el_menu_item, { index: "2-4-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Option 4-1")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_sub_menu, { index: "3" }, {
                                title: withCtx(() => [
                                  createVNode(_component_el_icon, null, {
                                    default: withCtx(() => [
                                      createVNode(unref(setting_default))
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode("Navigator Three ")
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item_group, null, {
                                    title: withCtx(() => [
                                      createTextVNode("Group 1")
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_el_menu_item, { index: "3-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Option 1")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_menu_item, { index: "3-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Option 2")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_el_menu_item, { index: "3-3" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Option 3")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_sub_menu, { index: "3-4" }, {
                                    title: withCtx(() => [
                                      createTextVNode("Option 4")
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_el_menu_item, { index: "3-4-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Option 4-1")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_scrollbar, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_menu, { "default-openeds": ["1", "3"] }, {
                          default: withCtx(() => [
                            createVNode(_component_el_sub_menu, { index: "1" }, {
                              title: withCtx(() => [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(message_default))
                                  ]),
                                  _: 1
                                }),
                                createTextVNode("Navigator One ")
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_el_menu_item_group, null, {
                                  title: withCtx(() => [
                                    createTextVNode("Group 1")
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item, { index: "1-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Option 1")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_menu_item, { index: "1-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Option 2")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item, { index: "1-3" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Option 3")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_sub_menu, { index: "1-4" }, {
                                  title: withCtx(() => [
                                    createTextVNode("Option4")
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Option 4-1")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_sub_menu, { index: "2" }, {
                              title: withCtx(() => [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(menu_default))
                                  ]),
                                  _: 1
                                }),
                                createTextVNode("Navigator Two ")
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_el_menu_item_group, null, {
                                  title: withCtx(() => [
                                    createTextVNode("Group 1")
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item, { index: "2-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Option 1")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_menu_item, { index: "2-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Option 2")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item, { index: "2-3" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Option 3")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_sub_menu, { index: "2-4" }, {
                                  title: withCtx(() => [
                                    createTextVNode("Option 4")
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item, { index: "2-4-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Option 4-1")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_sub_menu, { index: "3" }, {
                              title: withCtx(() => [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(setting_default))
                                  ]),
                                  _: 1
                                }),
                                createTextVNode("Navigator Three ")
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_el_menu_item_group, null, {
                                  title: withCtx(() => [
                                    createTextVNode("Group 1")
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item, { index: "3-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Option 1")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_menu_item, { index: "3-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Option 2")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item, { index: "3-3" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Option 3")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_sub_menu, { index: "3-4" }, {
                                  title: withCtx(() => [
                                    createTextVNode("Option 4")
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item, { index: "3-4-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Option 4-1")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_header, { style: { "text-align": "right", "font-size": "12px" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="toolbar" data-v-73f733cf${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_dropdown, null, {
                          dropdown: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_dropdown_menu, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_dropdown_item, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`View`);
                                        } else {
                                          return [
                                            createTextVNode("View")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_el_dropdown_item, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Add`);
                                        } else {
                                          return [
                                            createTextVNode("Add")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_el_dropdown_item, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Delete`);
                                        } else {
                                          return [
                                            createTextVNode("Delete")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_el_dropdown_item, null, {
                                        default: withCtx(() => [
                                          createTextVNode("View")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_dropdown_item, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Add")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_dropdown_item, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Delete")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_dropdown_menu, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_dropdown_item, null, {
                                      default: withCtx(() => [
                                        createTextVNode("View")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_dropdown_item, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Add")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_dropdown_item, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Delete")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_icon, { style: { "margin-right": "8px", "margin-top": "1px" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(setting_default), null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(setting_default))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_icon, { style: { "margin-right": "8px", "margin-top": "1px" } }, {
                                  default: withCtx(() => [
                                    createVNode(unref(setting_default))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span data-v-73f733cf${_scopeId3}>Tom</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "toolbar" }, [
                            createVNode(_component_el_dropdown, null, {
                              dropdown: withCtx(() => [
                                createVNode(_component_el_dropdown_menu, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_dropdown_item, null, {
                                      default: withCtx(() => [
                                        createTextVNode("View")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_dropdown_item, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Add")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_dropdown_item, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Delete")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_el_icon, { style: { "margin-right": "8px", "margin-top": "1px" } }, {
                                  default: withCtx(() => [
                                    createVNode(unref(setting_default))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("span", null, "Tom")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_main, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_scrollbar, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_table, { data: tableData.value }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_table_column, {
                                      prop: "date",
                                      label: "Date",
                                      width: "140"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_el_table_column, {
                                      prop: "name",
                                      label: "Name",
                                      width: "120"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_el_table_column, {
                                      prop: "address",
                                      label: "Address"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_el_table_column, {
                                        prop: "date",
                                        label: "Date",
                                        width: "140"
                                      }),
                                      createVNode(_component_el_table_column, {
                                        prop: "name",
                                        label: "Name",
                                        width: "120"
                                      }),
                                      createVNode(_component_el_table_column, {
                                        prop: "address",
                                        label: "Address"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_table, { data: tableData.value }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_table_column, {
                                      prop: "date",
                                      label: "Date",
                                      width: "140"
                                    }),
                                    createVNode(_component_el_table_column, {
                                      prop: "name",
                                      label: "Name",
                                      width: "120"
                                    }),
                                    createVNode(_component_el_table_column, {
                                      prop: "address",
                                      label: "Address"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["data"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_scrollbar, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_table, { data: tableData.value }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_table_column, {
                                    prop: "date",
                                    label: "Date",
                                    width: "140"
                                  }),
                                  createVNode(_component_el_table_column, {
                                    prop: "name",
                                    label: "Name",
                                    width: "120"
                                  }),
                                  createVNode(_component_el_table_column, {
                                    prop: "address",
                                    label: "Address"
                                  })
                                ]),
                                _: 1
                              }, 8, ["data"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_header, { style: { "text-align": "right", "font-size": "12px" } }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "toolbar" }, [
                          createVNode(_component_el_dropdown, null, {
                            dropdown: withCtx(() => [
                              createVNode(_component_el_dropdown_menu, null, {
                                default: withCtx(() => [
                                  createVNode(_component_el_dropdown_item, null, {
                                    default: withCtx(() => [
                                      createTextVNode("View")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_dropdown_item, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Add")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_dropdown_item, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Delete")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_el_icon, { style: { "margin-right": "8px", "margin-top": "1px" } }, {
                                default: withCtx(() => [
                                  createVNode(unref(setting_default))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("span", null, "Tom")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_main, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_scrollbar, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_table, { data: tableData.value }, {
                              default: withCtx(() => [
                                createVNode(_component_el_table_column, {
                                  prop: "date",
                                  label: "Date",
                                  width: "140"
                                }),
                                createVNode(_component_el_table_column, {
                                  prop: "name",
                                  label: "Name",
                                  width: "120"
                                }),
                                createVNode(_component_el_table_column, {
                                  prop: "address",
                                  label: "Address"
                                })
                              ]),
                              _: 1
                            }, 8, ["data"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_aside, { width: "200px" }, {
                default: withCtx(() => [
                  createVNode(_component_el_scrollbar, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_menu, { "default-openeds": ["1", "3"] }, {
                        default: withCtx(() => [
                          createVNode(_component_el_sub_menu, { index: "1" }, {
                            title: withCtx(() => [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  createVNode(unref(message_default))
                                ]),
                                _: 1
                              }),
                              createTextVNode("Navigator One ")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_el_menu_item_group, null, {
                                title: withCtx(() => [
                                  createTextVNode("Group 1")
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item, { index: "1-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Option 1")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_menu_item, { index: "1-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Option 2")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item, { index: "1-3" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Option 3")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_sub_menu, { index: "1-4" }, {
                                title: withCtx(() => [
                                  createTextVNode("Option4")
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Option 4-1")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_sub_menu, { index: "2" }, {
                            title: withCtx(() => [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  createVNode(unref(menu_default))
                                ]),
                                _: 1
                              }),
                              createTextVNode("Navigator Two ")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_el_menu_item_group, null, {
                                title: withCtx(() => [
                                  createTextVNode("Group 1")
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item, { index: "2-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Option 1")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_menu_item, { index: "2-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Option 2")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item, { index: "2-3" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Option 3")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_sub_menu, { index: "2-4" }, {
                                title: withCtx(() => [
                                  createTextVNode("Option 4")
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item, { index: "2-4-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Option 4-1")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_sub_menu, { index: "3" }, {
                            title: withCtx(() => [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  createVNode(unref(setting_default))
                                ]),
                                _: 1
                              }),
                              createTextVNode("Navigator Three ")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_el_menu_item_group, null, {
                                title: withCtx(() => [
                                  createTextVNode("Group 1")
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item, { index: "3-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Option 1")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_menu_item, { index: "3-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Option 2")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item, { index: "3-3" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Option 3")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_sub_menu, { index: "3-4" }, {
                                title: withCtx(() => [
                                  createTextVNode("Option 4")
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item, { index: "3-4-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Option 4-1")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_el_container, null, {
                default: withCtx(() => [
                  createVNode(_component_el_header, { style: { "text-align": "right", "font-size": "12px" } }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "toolbar" }, [
                        createVNode(_component_el_dropdown, null, {
                          dropdown: withCtx(() => [
                            createVNode(_component_el_dropdown_menu, null, {
                              default: withCtx(() => [
                                createVNode(_component_el_dropdown_item, null, {
                                  default: withCtx(() => [
                                    createTextVNode("View")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_dropdown_item, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Add")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_dropdown_item, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Delete")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_el_icon, { style: { "margin-right": "8px", "margin-top": "1px" } }, {
                              default: withCtx(() => [
                                createVNode(unref(setting_default))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("span", null, "Tom")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_main, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_scrollbar, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_table, { data: tableData.value }, {
                            default: withCtx(() => [
                              createVNode(_component_el_table_column, {
                                prop: "date",
                                label: "Date",
                                width: "140"
                              }),
                              createVNode(_component_el_table_column, {
                                prop: "name",
                                label: "Name",
                                width: "120"
                              }),
                              createVNode(_component_el_table_column, {
                                prop: "address",
                                label: "Address"
                              })
                            ]),
                            _: 1
                          }, 8, ["data"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-73f733cf"]]);

export { layout as default };
//# sourceMappingURL=layout-f0633753.mjs.map
