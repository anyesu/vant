/*! For license information please see 3091.8c27ba16.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["3091"],{89161:function(s,n,a){"use strict";a.r(n);var t=a("97700");let d=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>ContactCard \u8054\u7CFB\u4EBA\u5361\u7247</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u4EE5\u5361\u7247\u7684\u5F62\u5F0F\u5C55\u793A\u8054\u7CFB\u4EBA\u4FE1\u606F\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ContactCard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ContactCard</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="tian-jia-lian-xi-ren" tabindex="-1">\u6DFB\u52A0\u8054\u7CFB\u4EBA</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-card</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;add&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onAdd&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onAdd</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;\u65B0\u589E&#x27;</span>);\n    <span class="hljs-keyword">return</span> {\n      onAdd,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="bian-ji-lian-xi-ren" tabindex="-1">\u7F16\u8F91\u8054\u7CFB\u4EBA</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-card</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;edit&quot;</span> <span class="hljs-attr">:tel</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;name&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onEdit&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> tel = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;13000000000&#x27;</span>);\n    <span class="hljs-keyword">const</span> name = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;\u5F20\u4E09&#x27;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onEdit</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;edit&#x27;</span>);\n    <span class="hljs-keyword">return</span> {\n      tel,\n      name,\n      onEdit,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="bu-ke-bian-ji" tabindex="-1">\u4E0D\u53EF\u7F16\u8F91</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-card</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;edit&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;\u5F20\u4E09&quot;</span> <span class="hljs-attr">tel</span>=<span class="hljs-string">&quot;13000000000&quot;</span> <span class="hljs-attr">:editable</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>\u5361\u7247\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>edit</code></td>\n<td><em>string</em></td>\n<td><code>add</code></td>\n</tr>\n<tr>\n<td>name</td>\n<td>\u8054\u7CFB\u4EBA\u59D3\u540D</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>tel</td>\n<td>\u8054\u7CFB\u4EBA\u624B\u673A\u53F7</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>add-text</td>\n<td>\u6DFB\u52A0\u65F6\u7684\u6587\u6848\u63D0\u793A</td>\n<td><em>string</em></td>\n<td><code>\u6DFB\u52A0\u8054\u7CFB\u4EBA</code></td>\n</tr>\n<tr>\n<td>editable</td>\n<td>\u662F\u5426\u53EF\u4EE5\u7F16\u8F91\u8054\u7CFB\u4EBA</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>\u70B9\u51FB\u65F6\u89E6\u53D1</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ContactCardType</span>, <span class="hljs-title class_">ContactCardProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-contact-card-padding</td>\n<td><em>var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-contact-card-add-icon-size</td>\n<td><em>40px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-contact-card-add-icon-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-contact-card-title-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,d))}}}]);