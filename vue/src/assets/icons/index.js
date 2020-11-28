import Vue from 'vue'

import IconSvg from "@/components/iconfont/IconSvg.vue";
Vue.component('icon-svg', IconSvg)

// 自动导入svg
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req);