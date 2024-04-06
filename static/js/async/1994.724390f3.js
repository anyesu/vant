/*! For license information please see 1994.724390f3.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["1994"],{17170:function(s,a,n){"use strict";n.r(a);var t=n("97700");let p=["innerHTML"];a.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Advanced Usage</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Through this chapter, you can learn about some advanced usages of Vant.</p>\n</div><h2 id="component-usage" tabindex="-1">Component Usage</h2>\n<div class="van-doc-card"><h3 id="component-registration" tabindex="-1">Component Registration</h3>\n<p>Vant supports multiple ways to register components:</p>\n<h4 id="global-registration" tabindex="-1">Global Registration</h4>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\n\n<span class="hljs-comment">// Method 1. via app.use</span>\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Button</span>);\n\n<span class="hljs-comment">// Method 2. Register via app.component</span>\napp.<span class="hljs-title function_">component</span>(<span class="hljs-title class_">Button</span>.<span class="hljs-property">name</span>, <span class="hljs-title class_">Button</span>);\n</code></pre>\n<h4 id="full-registration" tabindex="-1">Full Registration</h4>\n<p>You can also globally register all Vant components at once:</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Vant</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\n\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Vant</span>);\n\n<span class="hljs-comment">// The Lazyload directive needs to be registered separately</span>\napp.<span class="hljs-title function_">use</span>(vant.<span class="hljs-property">Lazyload</span>);\n</code></pre>\n<blockquote>\n<p>Note: Registering all components will introduce the code of all components, leading to larger bundle size.</p>\n</blockquote>\n<h4 id="local-registration" tabindex="-1">Local Registration</h4>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">components</span>: {\n    [<span class="hljs-title class_">Button</span>.<span class="hljs-property">name</span>]: <span class="hljs-title class_">Button</span>,\n  },\n};\n</code></pre>\n<blockquote>\n<p>For more information, please refer to <a href="https://vuejs.org/guide/components/registration.html" target="_blank">Vue.js - Component Registration</a>\u3002</p>\n</blockquote>\n<h4 id="script-setup" tabindex="-1">&lt;script setup&gt;</h4>\n<p>Vant components can be used directly in <code>&lt;script setup&gt;</code> without component registration.</p>\n<pre><code class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">\n  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</code></pre>\n<h4 id="jsx-tsx" tabindex="-1">JSX/TSX</h4>\n<p>Vant components can be used directly in JSX and TSX without component registration.</p>\n<pre><code class="language-jsx"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> /&gt;</span></span>;\n  },\n};\n</code></pre>\n</div><h2 id="browser-adaptation" tabindex="-1">Browser adaptation</h2>\n<div class="van-doc-card"><h3 id="viewport-units" tabindex="-1">Viewport Units</h3>\n<p>Vant uses <code>px</code> unit by default\uFF0Cyou can use tools such as <a href="https://github.com/evrone/postcss-px-to-viewport" target="_blank">postcss--px-to-viewport</a> to transform <code>px</code> unit to viewport units (vw, vh, vmin, vmax).</p>\n<h4 id="postcss-config" tabindex="-1">PostCSS Config</h4>\n<p>PostCSS config example:</p>\n<pre><code class="language-js"><span class="hljs-comment">// postcss.config.js</span>\n<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {\n  <span class="hljs-attr">plugins</span>: {\n    <span class="hljs-string">&#x27;postcss-px-to-viewport&#x27;</span>: {\n      <span class="hljs-attr">viewportWidth</span>: <span class="hljs-number">375</span>,\n    },\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="rem-unit" tabindex="-1">Rem Unit</h3>\n<p>You can use tools such as <code>postcss-pxtorem</code> to transform <code>px</code> unit to <code>rem</code> unit.</p>\n<ul>\n<li><a href="https://github.com/cuth/postcss-pxtorem" target="_blank">postcss-pxtorem</a></li>\n<li><a href="https://github.com/amfe/lib-flexible" target="_blank">lib-flexible</a></li>\n</ul>\n<h4 id="postcss-config-1" tabindex="-1">PostCSS Config</h4>\n<p>PostCSS config example:</p>\n<pre><code class="language-js"><span class="hljs-comment">// postcss.config.js</span>\n<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {\n  <span class="hljs-attr">plugins</span>: {\n    <span class="hljs-string">&#x27;postcss-pxtorem&#x27;</span>: {\n      <span class="hljs-attr">rootValue</span>: <span class="hljs-number">37.5</span>,\n      <span class="hljs-attr">propList</span>: [<span class="hljs-string">&#x27;*&#x27;</span>],\n    },\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-rootvalue" tabindex="-1">Custom rootValue</h3>\n<p>If the size of the design draft is 750 or other sizes, you can adjust the <code>rootValue</code> to:</p>\n<pre><code class="language-js"><span class="hljs-comment">// postcss.config.js</span>\n<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {\n  <span class="hljs-attr">plugins</span>: {\n    <span class="hljs-comment">// postcss-pxtorem version &gt;= 5.0.0</span>\n    <span class="hljs-string">&#x27;postcss-pxtorem&#x27;</span>: {\n      <span class="hljs-title function_">rootValue</span>(<span class="hljs-params">{ file }</span>) {\n        <span class="hljs-keyword">return</span> file.<span class="hljs-title function_">indexOf</span>(<span class="hljs-string">&#x27;vant&#x27;</span>) !== -<span class="hljs-number">1</span> ? <span class="hljs-number">37.5</span> : <span class="hljs-number">75</span>;\n      },\n      <span class="hljs-attr">propList</span>: [<span class="hljs-string">&#x27;*&#x27;</span>],\n    },\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="adapt-to-pc-browsers" tabindex="-1">Adapt to PC Browsers</h3>\n<p>Vant is a mobile-first component library, if you want to use Vant in PC browsers, you can use the <a href="https://github.com/vant-ui/vant/tree/main/packages/vant-touch-emulator" target="_blank">@vant/touch-emulator</a> module. This module will automatically convert the mouse events of the PC browser into the touch events of the mobile browser.</p>\n<pre><code class="language-bash"><span class="hljs-comment"># Install</span>\nnpm i @vant/touch-emulator -S\n</code></pre>\n<pre><code class="language-js"><span class="hljs-comment">// Just import this module, then Vant works in PC browser</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@vant/touch-emulator&#x27;</span>;\n</code></pre>\n</div>'},null,8,p))}}}]);