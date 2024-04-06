/*! For license information please see 8409.abc4c99c.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["8409"],{70561:function(s,a,n){"use strict";n.r(a);var t=n("97700");let e=["innerHTML"];a.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Lazyload</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>When the page needs to load a large amount of content, delay loading the content outside the visible area of the page to make the page load smoother.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Lazyload</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>);\n\n<span class="hljs-comment">// with options</span>\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>, {\n  <span class="hljs-attr">lazyComponent</span>: <span class="hljs-literal">true</span>,\n});\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;img in imageList&quot;</span> <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">&quot;img&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">imageList</span>: [\n        <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#x27;</span>,\n        <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#x27;</span>,\n      ],\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="lazyload-background-image" tabindex="-1">Lazyload Background Image</h3>\n<p>Use <code>v-lazy:background-image</code> to set background url, and declare the height of the container.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;img in imageList&quot;</span> <span class="hljs-attr">v-lazy:background-image</span>=<span class="hljs-string">&quot;img&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="lazyload-component" tabindex="-1">Lazyload Component</h3>\n<pre><code class="language-js"><span class="hljs-comment">// set `lazyComponent` option</span>\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>, {\n  <span class="hljs-attr">lazyComponent</span>: <span class="hljs-literal">true</span>,\n});\n</code></pre>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">lazy-component</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;img in imageList&quot;</span> <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">&quot;img&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">lazy-component</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="options" tabindex="-1">Options</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>loading</td>\n<td>Src of the image while loading</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>error</td>\n<td>Src of the image upon load fail</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>preLoad</td>\n<td>Proportion of pre-loading height</td>\n<td><em>number</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>attempt</td>\n<td>Attempts count</td>\n<td><em>number</em></td>\n<td><code>3</code></td>\n</tr>\n<tr>\n<td>listenEvents</td>\n<td>Events that you want vue listen for</td>\n<td><em>string[]</em></td>\n<td><code>scroll</code>...</td>\n</tr>\n<tr>\n<td>adapter</td>\n<td>Dynamically modify the attribute of element</td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>filter</td>\n<td>The image\'s listener filter</td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>lazyComponent</td>\n<td>Lazyload component</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>See more: <a href="https://github.com/hilongjw/vue-lazyload" target="_blank"> vue-lazyload </a></p>\n</blockquote>\n</div>'},null,8,e))}}}]);