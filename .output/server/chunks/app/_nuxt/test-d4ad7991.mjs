import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  setup() {
    return {};
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container py-20 px-4 lg:px-20 mx-auto" }, _attrs))} data-v-ca836897><div class="w-auto p-2" data-v-ca836897><h2 class="font-heading text-xl" data-v-ca836897>Fresh from Farm!</h2></div><section id="freshSlide" class="splide" aria-label="Slide Arrows" data-v-ca836897><div class="splide__arrows" data-v-ca836897><button class="splide__arrow splide__arrow--prev -ml-6" data-v-ca836897><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" data-v-ca836897><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" data-v-ca836897></path></svg></button><button class="splide__arrow splide__arrow--next mr-2" data-v-ca836897><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" data-v-ca836897><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" data-v-ca836897></path></svg></button></div><div class="splide__track" data-v-ca836897><ul class="splide__list space-x-1" data-v-ca836897><li class="splide__slide bg-white hover relative py-4 rounded-2xl" data-v-ca836897><div class="inner_play" data-v-ca836897><div id="innerslide1" class="splide" role="group" aria-label="Splide " data-v-ca836897><div class="splide__track" data-v-ca836897><ul class="splide__list" data-v-ca836897></ul></div><div class="px-4 text-black" data-v-ca836897><div class="flex" data-v-ca836897><p class="text-xl -mb-2 leading-tight" data-v-ca836897><b data-v-ca836897>345</b></p><div class="ml-1 block" data-v-ca836897><sup class="" data-v-ca836897><b data-v-ca836897> .00</b></sup><sup data-v-ca836897><p data-v-ca836897> Ngn</p></sup></div></div><p class="my-2 text-md" data-v-ca836897>Brookside Whole Milk 1L</p></div><div class="absolute top-[50%] right-6" data-v-ca836897><button data-v-ca836897><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#1d4ed8" class="bi bi-plus-circle-fill" viewBox="0 0 16 16" data-v-ca836897><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" data-v-ca836897></path></svg></button></div></div></div></li><li class="splide__slide bg-white hover relative py-4 rounded-2xl" data-v-ca836897><div class="" data-v-ca836897><div id="" class="splide" data-splide="{&quot;type&quot;:&quot;loop&quot;,&quot;perPage&quot;:1, &quot;arrows&quot;:false,, }" data-v-ca836897><div class="splide__track" data-v-ca836897><ul class="splide__list" data-v-ca836897></ul></div><div class="px-4 text-black" data-v-ca836897><div class="flex" data-v-ca836897><p class="text-xl -mb-2 leading-tight" data-v-ca836897><b data-v-ca836897>345</b></p><div class="ml-1 block" data-v-ca836897><sup class="" data-v-ca836897><b data-v-ca836897> .00</b></sup><sup data-v-ca836897><p data-v-ca836897> Ngn</p></sup></div></div><p class="my-2 text-md" data-v-ca836897>Brookside Whole Milk 1L</p></div><div class="absolute top-[50%] right-6" data-v-ca836897><button data-v-ca836897><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#1d4ed8" class="bi bi-plus-circle-fill" viewBox="0 0 16 16" data-v-ca836897><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" data-v-ca836897></path></svg></button></div></div></div></li></ul></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ca836897"]]);

export { test as default };
//# sourceMappingURL=test-d4ad7991.mjs.map
