/*! For license information please see 3085.df6ea790.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["3085"],{98781:function(n,s,a){"use strict";a.r(s);var t=a("97700");let l=["innerHTML"];s.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Button \u6309\u94AE</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u6309\u94AE\u7528\u4E8E\u89E6\u53D1\u4E00\u4E2A\u64CD\u4F5C\uFF0C\u5982\u63D0\u4EA4\u8868\u5355\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Button</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="an-niu-lei-xing" tabindex="-1">\u6309\u94AE\u7C7B\u578B</h3>\n<p>\u6309\u94AE\u652F\u6301 <code>default</code>\u3001<code>primary</code>\u3001<code>success</code>\u3001<code>warning</code>\u3001<code>danger</code> \u4E94\u79CD\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A <code>default</code>\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u4E3B\u8981\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u6210\u529F\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;</span>\u9ED8\u8BA4\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u5371\u9669\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\u8B66\u544A\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="po-su-an-niu" tabindex="-1">\u6734\u7D20\u6309\u94AE</h3>\n<p>\u901A\u8FC7 <code>plain</code> \u5C5E\u6027\u5C06\u6309\u94AE\u8BBE\u7F6E\u4E3A\u6734\u7D20\u6309\u94AE\uFF0C\u6734\u7D20\u6309\u94AE\u7684\u6587\u5B57\u4E3A\u6309\u94AE\u989C\u8272\uFF0C\u80CC\u666F\u4E3A\u767D\u8272\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u6734\u7D20\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u6734\u7D20\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="xi-bian-kuang" tabindex="-1">\u7EC6\u8FB9\u6846</h3>\n<p>\u8BBE\u7F6E <code>hairline</code> \u5C5E\u6027\u53EF\u4EE5\u5C55\u793A 0.5px \u7684\u7EC6\u8FB9\u6846\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">hairline</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u7EC6\u8FB9\u6846\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">hairline</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u7EC6\u8FB9\u6846\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jin-yong-zhuang-tai" tabindex="-1">\u7981\u7528\u72B6\u6001</h3>\n<p>\u901A\u8FC7 <code>disabled</code> \u5C5E\u6027\u6765\u7981\u7528\u6309\u94AE\uFF0C\u7981\u7528\u72B6\u6001\u4E0B\u6309\u94AE\u4E0D\u53EF\u70B9\u51FB\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u7981\u7528\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u7981\u7528\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jia-zai-zhuang-tai" tabindex="-1">\u52A0\u8F7D\u72B6\u6001</h3>\n<p>\u901A\u8FC7 <code>loading</code> \u5C5E\u6027\u8BBE\u7F6E\u6309\u94AE\u4E3A\u52A0\u8F7D\u72B6\u6001\uFF0C\u52A0\u8F7D\u72B6\u6001\u4E0B\u9ED8\u8BA4\u4F1A\u9690\u85CF\u6309\u94AE\u6587\u5B57\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>loading-text</code> \u8BBE\u7F6E\u52A0\u8F7D\u72B6\u6001\u4E0B\u7684\u6587\u5B57\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;spinner&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">loading-text</span>=<span class="hljs-string">&quot;\u52A0\u8F7D\u4E2D...&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="an-niu-xing-zhuang" tabindex="-1">\u6309\u94AE\u5F62\u72B6</h3>\n<p>\u901A\u8FC7 <code>square</code> \u8BBE\u7F6E\u65B9\u5F62\u6309\u94AE\uFF0C\u901A\u8FC7 <code>round</code> \u8BBE\u7F6E\u5706\u5F62\u6309\u94AE\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u65B9\u5F62\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u5706\u5F62\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="tu-biao-an-niu" tabindex="-1">\u56FE\u6807\u6309\u94AE</h3>\n<p>\u901A\u8FC7 <code>icon</code> \u5C5E\u6027\u8BBE\u7F6E\u6309\u94AE\u56FE\u6807\uFF0C\u652F\u6301 Icon \u7EC4\u4EF6\u91CC\u7684\u6240\u6709\u56FE\u6807\uFF0C\u4E5F\u53EF\u4EE5\u4F20\u5165\u56FE\u6807 URL\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;plus&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;plus&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span>\n  <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png&quot;</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n&gt;</span>\n  \u6309\u94AE\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="an-niu-chi-cun" tabindex="-1">\u6309\u94AE\u5C3A\u5BF8</h3>\n<p>\u652F\u6301 <code>large</code>\u3001<code>normal</code>\u3001<code>small</code>\u3001<code>mini</code> \u56DB\u79CD\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u4E3A <code>normal</code>\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>\u5927\u53F7\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;normal&quot;</span>&gt;</span>\u666E\u901A\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>\u5C0F\u578B\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>\u8FF7\u4F60\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="kuai-ji-yuan-su" tabindex="-1">\u5757\u7EA7\u5143\u7D20</h3>\n<p>\u6309\u94AE\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E3A\u884C\u5185\u5757\u7EA7\u5143\u7D20\uFF0C\u901A\u8FC7 <code>block</code> \u5C5E\u6027\u53EF\u4EE5\u5C06\u6309\u94AE\u7684\u5143\u7D20\u7C7B\u578B\u8BBE\u7F6E\u4E3A\u5757\u7EA7\u5143\u7D20\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>\u5757\u7EA7\u5143\u7D20<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="ye-mian-dao-hang" tabindex="-1">\u9875\u9762\u5BFC\u822A</h3>\n<p>\u53EF\u4EE5\u901A\u8FC7 <code>url</code> \u5C5E\u6027\u8FDB\u884C URL \u8DF3\u8F6C\uFF0C\u6216\u901A\u8FC7 <code>to</code> \u5C5E\u6027\u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://github.com&quot;</span>&gt;</span>URL \u8DF3\u8F6C<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>\u8DEF\u7531\u8DF3\u8F6C<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u989C\u8272</h3>\n<p>\u901A\u8FC7 <code>color</code> \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6309\u94AE\u7684\u989C\u8272\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span>&gt;</span>\u5355\u8272\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>\u5355\u8272\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(to right, #ff6034, #ee0a24)&quot;</span>&gt;</span>\n  \u6E10\u53D8\u8272\u6309\u94AE\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="dong-hua-an-niu" tabindex="-1">\u52A8\u753B\u6309\u94AE</h3>\n<p>\u642D\u914D Button \u548C <a href="/#/zh-CN/swipe" target="_blank">Swipe \u7EC4\u4EF6</a>\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5782\u76F4\u6EDA\u52A8\u7684\u52A8\u753B\u6309\u94AE\u6548\u679C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">round</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span>\n    <span class="hljs-attr">vertical</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-swipe&quot;</span>\n    <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;2000&quot;</span>\n    <span class="hljs-attr">:touchable</span>=<span class="hljs-string">&quot;false&quot;</span>\n    <span class="hljs-attr">:show-indicators</span>=<span class="hljs-string">&quot;false&quot;</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>\u505A\u4EFB\u52A1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>\u62BD\u5927\u5956<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.notice-swipe</span> {\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">40px</span>;\n    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">40px</span>;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>primary</code> <code>success</code> <code>warning</code> <code>danger</code></td>\n<td><em>string</em></td>\n<td><code>default</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>\u5C3A\u5BF8\uFF0C\u53EF\u9009\u503C\u4E3A <code>large</code> <code>small</code> <code>mini</code></td>\n<td><em>string</em></td>\n<td><code>normal</code></td>\n</tr>\n<tr>\n<td>text</td>\n<td>\u6309\u94AE\u6587\u5B57</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>color</td>\n<td>\u6309\u94AE\u989C\u8272\uFF0C\u652F\u6301\u4F20\u5165 <code>linear-gradient</code> \u6E10\u53D8\u8272</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>\u5DE6\u4FA7\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon-prefix</td>\n<td>\u56FE\u6807\u7C7B\u540D\u524D\u7F00\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">class-prefix \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td><code>van-icon</code></td>\n</tr>\n<tr>\n<td>icon-position</td>\n<td>\u56FE\u6807\u5C55\u793A\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>right</code></td>\n<td><em>string</em></td>\n<td><code>left</code></td>\n</tr>\n<tr>\n<td>tag</td>\n<td>\u6309\u94AE\u6839\u8282\u70B9\u7684 HTML \u6807\u7B7E</td>\n<td><em>string</em></td>\n<td><code>button</code></td>\n</tr>\n<tr>\n<td>native-type</td>\n<td>\u539F\u751F button \u6807\u7B7E\u7684 type \u5C5E\u6027</td>\n<td><em>string</em></td>\n<td><code>button</code></td>\n</tr>\n<tr>\n<td>block</td>\n<td>\u662F\u5426\u4E3A\u5757\u7EA7\u5143\u7D20</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>plain</td>\n<td>\u662F\u5426\u4E3A\u6734\u7D20\u6309\u94AE</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>square</td>\n<td>\u662F\u5426\u4E3A\u65B9\u5F62\u6309\u94AE</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>\u662F\u5426\u4E3A\u5706\u5F62\u6309\u94AE</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662F\u5426\u7981\u7528\u6309\u94AE</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>hairline</td>\n<td>\u662F\u5426\u4F7F\u7528 0.5px \u8FB9\u6846</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>\u662F\u5426\u663E\u793A\u4E3A\u52A0\u8F7D\u72B6\u6001</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>loading-text</td>\n<td>\u52A0\u8F7D\u72B6\u6001\u63D0\u793A\u6587\u5B57</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>loading-type</td>\n<td><a href="#/zh-CN/loading" target="_blank">\u52A0\u8F7D\u56FE\u6807\u7C7B\u578B</a>\uFF0C\u53EF\u9009\u503C\u4E3A <code>spinner</code></td>\n<td><em>string</em></td>\n<td><code>circular</code></td>\n</tr>\n<tr>\n<td>loading-size</td>\n<td>\u52A0\u8F7D\u56FE\u6807\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>20px</code></td>\n</tr>\n<tr>\n<td>url</td>\n<td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u94FE\u63A5\u5730\u5740</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>to</td>\n<td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u76EE\u6807\u8DEF\u7531\u5BF9\u8C61\uFF0C\u7B49\u540C\u4E8E Vue Router \u7684 <a href="https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to \u5C5E\u6027</a></td>\n<td><em>string | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>replace</td>\n<td>\u662F\u5426\u5728\u8DF3\u8F6C\u65F6\u66FF\u6362\u5F53\u524D\u9875\u9762\u5386\u53F2</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>\u70B9\u51FB\u6309\u94AE\uFF0C\u4E14\u6309\u94AE\u72B6\u6001\u4E0D\u4E3A\u52A0\u8F7D\u6216\u7981\u7528\u65F6\u89E6\u53D1</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>touchstart</td>\n<td>\u5F00\u59CB\u89E6\u6478\u6309\u94AE\u65F6\u89E6\u53D1</td>\n<td><em>event: TouchEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>\u6309\u94AE\u5185\u5BB9</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>\u81EA\u5B9A\u4E49\u56FE\u6807</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">ButtonType</span>,\n  <span class="hljs-title class_">ButtonSize</span>,\n  <span class="hljs-title class_">ButtonProps</span>,\n  <span class="hljs-title class_">ButtonNativeType</span>,\n  <span class="hljs-title class_">ButtonIconPosition</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-button-mini-height</td>\n<td><em>24px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-mini-padding</td>\n<td><em>0 var(--van-padding-base)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-mini-font-size</td>\n<td><em>var(--van-font-size-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-small-height</td>\n<td><em>32px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-small-padding</td>\n<td><em>0 var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-small-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-normal-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-normal-padding</td>\n<td><em>0 15px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-large-height</td>\n<td><em>50px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-default-height</td>\n<td><em>44px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-default-line-height</td>\n<td><em>1.2</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-default-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-default-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-default-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-default-border-color</td>\n<td><em>var(--van-gray-4)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-primary-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-primary-background</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-primary-border-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-success-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-success-background</td>\n<td><em>var(--van-success-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-success-border-color</td>\n<td><em>var(--van-success-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-danger-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-danger-background</td>\n<td><em>var(--van-danger-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-danger-border-color</td>\n<td><em>var(--van-danger-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-warning-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-warning-background</td>\n<td><em>var(--van-orange)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-warning-border-color</td>\n<td><em>var(--van-orange)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-border-width</td>\n<td><em>var(--van-border-width)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-radius</td>\n<td><em>var(--van-radius-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-round-radius</td>\n<td><em>var(--van-radius-max)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-plain-background</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-disabled-opacity</td>\n<td><em>var(--van-disabled-opacity)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-icon-size</td>\n<td><em>1.2em</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-loading-icon-size</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);