import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/george/Documents/Development/web/phoenix/element_plus/test/node_modules/.pnpm/nuxt@3.3.3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}