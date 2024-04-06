/*! For license information please see 4764.4f3849d1.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4764"],{29820:function(n,t,s){"use strict";s.r(t);var a=s("97700");let d=["innerHTML"];t.default={setup:()=>({html:""}),render:()=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Card \u5361\u7247</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u5546\u54C1\u5361\u7247\uFF0C\u7528\u4E8E\u5C55\u793A\u5546\u54C1\u7684\u56FE\u7247\u3001\u4EF7\u683C\u7B49\u4FE1\u606F\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Card</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Card</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-card</span>\n  <span class="hljs-attr">num</span>=<span class="hljs-string">&quot;2&quot;</span>\n  <span class="hljs-attr">price</span>=<span class="hljs-string">&quot;2.00&quot;</span>\n  <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u4FE1\u606F&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5546\u54C1\u6807\u9898&quot;</span>\n  <span class="hljs-attr">thumb</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="ying-xiao-xin-xi" tabindex="-1">\u8425\u9500\u4FE1\u606F</h3>\n<p>\u901A\u8FC7 <code>origin-price</code> \u8BBE\u7F6E\u5546\u54C1\u539F\u4EF7\uFF0C\u901A\u8FC7 <code>tag</code> \u8BBE\u7F6E\u5546\u54C1\u5DE6\u4E0A\u89D2\u6807\u7B7E\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-card</span>\n  <span class="hljs-attr">num</span>=<span class="hljs-string">&quot;2&quot;</span>\n  <span class="hljs-attr">tag</span>=<span class="hljs-string">&quot;\u6807\u7B7E&quot;</span>\n  <span class="hljs-attr">price</span>=<span class="hljs-string">&quot;2.00&quot;</span>\n  <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u4FE1\u606F&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5546\u54C1\u6807\u9898&quot;</span>\n  <span class="hljs-attr">thumb</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg&quot;</span>\n  <span class="hljs-attr">origin-price</span>=<span class="hljs-string">&quot;10.00&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-nei-rong" tabindex="-1">\u81EA\u5B9A\u4E49\u5185\u5BB9</h3>\n<p><code>Card</code> \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u591A\u4E2A\u63D2\u69FD\uFF0C\u53EF\u4EE5\u7075\u6D3B\u5730\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-card</span>\n  <span class="hljs-attr">num</span>=<span class="hljs-string">&quot;2&quot;</span>\n  <span class="hljs-attr">price</span>=<span class="hljs-string">&quot;2.00&quot;</span>\n  <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u4FE1\u606F&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5546\u54C1\u6807\u9898&quot;</span>\n  <span class="hljs-attr">thumb</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">tags</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">footer</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-card</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>thumb</td>\n<td>\u5DE6\u4FA7\u56FE\u7247 URL</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u6807\u9898</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>desc</td>\n<td>\u63CF\u8FF0</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>tag</td>\n<td>\u56FE\u7247\u89D2\u6807</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>num</td>\n<td>\u5546\u54C1\u6570\u91CF</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>price</td>\n<td>\u5546\u54C1\u4EF7\u683C</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>origin-price</td>\n<td>\u5546\u54C1\u5212\u7EBF\u539F\u4EF7</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>centered</td>\n<td>\u5185\u5BB9\u662F\u5426\u5782\u76F4\u5C45\u4E2D</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>currency</td>\n<td>\u8D27\u5E01\u7B26\u53F7</td>\n<td><em>string</em></td>\n<td><code>\xa5</code></td>\n</tr>\n<tr>\n<td>thumb-link</td>\n<td>\u70B9\u51FB\u5DE6\u4FA7\u56FE\u7247\u540E\u8DF3\u8F6C\u7684\u94FE\u63A5\u5730\u5740</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>lazy-load</td>\n<td>\u662F\u5426\u5F00\u542F\u56FE\u7247\u61D2\u52A0\u8F7D\uFF0C\u987B\u914D\u5408 <a href="#/zh-CN/lazyload" target="_blank">Lazyload</a> \u7EC4\u4EF6\u4F7F\u7528</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>\u70B9\u51FB\u65F6\u89E6\u53D1</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>click-thumb</td>\n<td>\u70B9\u51FB\u81EA\u5B9A\u4E49\u56FE\u7247\u65F6\u89E6\u53D1</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>\u81EA\u5B9A\u4E49\u6807\u9898</td>\n</tr>\n<tr>\n<td>desc</td>\n<td>\u81EA\u5B9A\u4E49\u63CF\u8FF0</td>\n</tr>\n<tr>\n<td>num</td>\n<td>\u81EA\u5B9A\u4E49\u6570\u91CF</td>\n</tr>\n<tr>\n<td>price</td>\n<td>\u81EA\u5B9A\u4E49\u4EF7\u683C</td>\n</tr>\n<tr>\n<td>origin-price</td>\n<td>\u81EA\u5B9A\u4E49\u5546\u54C1\u539F\u4EF7</td>\n</tr>\n<tr>\n<td>price-top</td>\n<td>\u81EA\u5B9A\u4E49\u4EF7\u683C\u4E0A\u65B9\u533A\u57DF</td>\n</tr>\n<tr>\n<td>bottom</td>\n<td>\u81EA\u5B9A\u4E49\u4EF7\u683C\u4E0B\u65B9\u533A\u57DF</td>\n</tr>\n<tr>\n<td>thumb</td>\n<td>\u81EA\u5B9A\u4E49\u56FE\u7247</td>\n</tr>\n<tr>\n<td>tag</td>\n<td>\u81EA\u5B9A\u4E49\u56FE\u7247\u89D2\u6807</td>\n</tr>\n<tr>\n<td>tags</td>\n<td>\u81EA\u5B9A\u4E49\u63CF\u8FF0\u4E0B\u65B9\u6807\u7B7E\u533A\u57DF</td>\n</tr>\n<tr>\n<td>footer</td>\n<td>\u81EA\u5B9A\u4E49\u53F3\u4E0B\u89D2\u5185\u5BB9</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CardProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-card-padding</td>\n<td><em>var(--van-padding-xs) var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-card-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-card-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-card-background</td>\n<td><em>var(--van-background)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-card-thumb-size</td>\n<td><em>88px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-card-thumb-radius</td>\n<td><em>var(--van-radius-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-card-title-line-height</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-card-desc-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-card-desc-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-card-price-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-card-origin-price-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-card-num-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-card-origin-price-font-size</td>\n<td><em>var(--van-font-size-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-card-price-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-card-price-integer-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-card-price-font</td>\n<td><em>var(--van-price-font)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,d))}}}]);