import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/nuxt@3.3.3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}