/*! For license information please see 4234.94887892.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4234"],{43864:function(s,n,a){"use strict";a.r(n);var t=a("97700");let l=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>BackTop \u56DE\u5230\u9876\u90E8</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u8FD4\u56DE\u9875\u9762\u9876\u90E8\u7684\u64CD\u4F5C\u6309\u94AE\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BackTop</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">BackTop</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u8BF7\u6EDA\u52A8\u53F3\u4FA7\u7684\u793A\u4F8B\u9875\u9762\uFF0C\u5F53\u9875\u9762\u6EDA\u52A8 <code>200px</code> \u65F6\uFF0C\u53F3\u4E0B\u89D2\u4F1A\u51FA\u73B0\u8FD4\u56DE\u9876\u90E8\u6309\u94AE\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];\n    <span class="hljs-keyword">return</span> { list };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-wei-zhi" tabindex="-1">\u81EA\u5B9A\u4E49\u4F4D\u7F6E</h3>\n<p>\u901A\u8FC7 <code>right</code> \u548C <code>bottom</code> \u5C5E\u6027\u6765\u8BBE\u7F6E\u7EC4\u4EF6\u8DDD\u79BB\u53F3\u4FA7\u548C\u5E95\u90E8\u7684\u4F4D\u7F6E\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;15vw&quot;</span> <span class="hljs-attr">bottom</span>=<span class="hljs-string">&quot;10vh&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];\n    <span class="hljs-keyword">return</span> { list };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-nei-rong" tabindex="-1">\u81EA\u5B9A\u4E49\u5185\u5BB9</h3>\n<p>\u4F7F\u7528\u9ED8\u8BA4\u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5C55\u793A\u7684\u5185\u5BB9\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom&quot;</span>&gt;</span>\u8FD4\u56DE\u9876\u90E8<span class="hljs-tag">&lt;/<span class="hljs-name">van-back-top</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.custom</span> {\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;\n    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;\n    <span class="hljs-attribute">text-align</span>: center;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];\n    <span class="hljs-keyword">return</span> { list };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="she-zhi-gun-dong-mu-biao" tabindex="-1">\u8BBE\u7F6E\u6EDA\u52A8\u76EE\u6807</h3>\n<p>\u53EF\u4EE5\u901A\u8FC7 <code>target</code> \u5C5E\u6027\u6765\u8BBE\u7F6E\u89E6\u53D1\u6EDA\u52A8\u7684\u76EE\u6807\u5BF9\u8C61\uFF0C\u652F\u6301\u4F20\u5165\u9009\u62E9\u5668\u6216 <code>HTMLElement</code>\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;.container&quot;</span> <span class="hljs-attr">bottom</span>=<span class="hljs-string">&quot;30vh&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.container</span> {\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">60vh</span>;\n    <span class="hljs-attribute">overflow</span>: auto;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];\n    <span class="hljs-keyword">return</span> { list };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="shun-jian-gun-dong" tabindex="-1">\u77AC\u95F4\u6EDA\u52A8</h3>\n<p>\u5F53\u8BBE\u7F6E <code>immediate</code> \u5C5E\u6027\u540E\uFF0C\u9875\u9762\u6EDA\u52A8\u7684\u8FC7\u7A0B\u4E0D\u518D\u6709\u8FC7\u6E21\u6548\u679C\uFF0C\u800C\u662F\u77AC\u95F4\u6EDA\u52A8\u5230\u9876\u90E8\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">immediate</span> /&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>target</td>\n<td>\u89E6\u53D1\u6EDA\u52A8\u7684\u76EE\u6807\u5BF9\u8C61\uFF0C\u652F\u6301\u4F20\u5165\u9009\u62E9\u5668\u6216 DOM \u5143\u7D20\uFF0C\u9ED8\u8BA4\u6700\u8FD1\u7684\u7236\u7EA7\u6EDA\u52A8\u5BB9\u5668</td>\n<td><em>string | HTMLElement</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>right</td>\n<td>\u8DDD\u79BB\u9875\u9762\u53F3\u4FA7\u7684\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>30</code></td>\n</tr>\n<tr>\n<td>bottom</td>\n<td>\u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u7684\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>40</code></td>\n</tr>\n<tr>\n<td>offset</td>\n<td>\u6EDA\u52A8\u9AD8\u5EA6\u8FBE\u5230\u6B64\u53C2\u6570\u503C\u65F6\u624D\u663E\u793A\u7EC4\u4EF6</td>\n<td><em>number</em></td>\n<td><code>200</code></td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9\uFF0C\u7B49\u540C\u4E8E Teleport \u7EC4\u4EF6\u7684 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to \u5C5E\u6027</a></td>\n<td><em>string | Element</em></td>\n<td><code>body</code></td>\n</tr>\n<tr>\n<td>immediate <code>v4.0.9</code></td>\n<td>\u662F\u5426\u77AC\u95F4\u6EDA\u52A8\u5230\u9876\u90E8</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>\u8BBE\u7F6E\u7EC4\u4EF6\u7684 z-index \u5C42\u7EA7</td>\n<td><em>number | string</em></td>\n<td><code>100</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>\u70B9\u51FB\u7EC4\u4EF6\u65F6\u89E6\u53D1</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>\u81EA\u5B9A\u4E49\u6309\u94AE\u663E\u793A\u5185\u5BB9</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">BackTopProps</span>, <span class="hljs-title class_">BackTopThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-back-top-size</td>\n<td><em>40px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-back-top-icon-size</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-back-top-right</td>\n<td><em>30px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-back-top-bottom</td>\n<td><em>40px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-back-top-z-index</td>\n<td><em>100</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-back-top-text-color</td>\n<td><em>#fff</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-back-top-background</td>\n<td><em>var(--van-blue)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);