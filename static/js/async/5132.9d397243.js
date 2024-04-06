/*! For license information please see 5132.9d397243.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["5132"],{86063:function(s,a,n){"use strict";n.r(a);var t=n("97700");let l=["innerHTML"];a.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Tag</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to mark keywords and summarize the main content.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tag</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tag</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="plain-style" tabindex="-1">Plain style</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="round-style" tabindex="-1">Round style</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">round</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="mark-style" tabindex="-1">Mark style</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">mark</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="closeable" tabindex="-1">Closeable</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">closeable</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>&gt;</span>\n  Tag\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">close</span> = (<span class="hljs-params"></span>) =&gt; {\n      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n    };\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      close,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-size" tabindex="-1">Custom Size</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ffe1e1&quot;</span> <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#ad0000&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>Type, can be set to <code>primary</code> <code>success</code> <code>danger</code> <code>warning</code></td>\n<td><em>string</em></td>\n<td><code>default</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>Size, can be set to <code>large</code> <code>medium</code></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>color</td>\n<td>Custom color</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>show</td>\n<td>Whether to show tag</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>plain</td>\n<td>Whether to be plain style</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>Whether to be round style</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>mark</td>\n<td>Whether to be mark style</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>text-color</td>\n<td>Text color</td>\n<td><em>string</em></td>\n<td><code>white</code></td>\n</tr>\n<tr>\n<td>closeable</td>\n<td>Whether to be closeable</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Default slot</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>Emitted when component is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>close</td>\n<td>Emitted when close icon is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TagSize</span>, <span class="hljs-title class_">TagType</span>, <span class="hljs-title class_">TagProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-tag-padding</td>\n<td><em>0 var(--van-padding-base)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tag-text-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tag-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tag-radius</td>\n<td><em>2px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tag-line-height</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tag-medium-padding</td>\n<td><em>2px 6px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tag-large-padding</td>\n<td><em>var(--van-padding-base) var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tag-large-radius</td>\n<td><em>var(--van-radius-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tag-large-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tag-round-radius</td>\n<td><em>var(--van-radius-max)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tag-danger-color</td>\n<td><em>var(--van-danger-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tag-primary-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tag-success-color</td>\n<td><em>var(--van-success-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tag-warning-color</td>\n<td><em>var(--van-warning-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tag-default-color</td>\n<td><em>var(--van-gray-6)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-tag-plain-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);