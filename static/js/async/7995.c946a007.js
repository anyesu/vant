/*! For license information please see 7995.c946a007.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["7995"],{28398:function(s,n,a){"use strict";a.r(n);var t=a("97700");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>PullRefresh</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to provide interactive operations for pull-down refresh.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PullRefresh</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">PullRefresh</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>The <code>refresh</code> event will be Emitted when pull refresh, you should set <code>v-model</code> to <code>false</code> to reset loading status after process refresh event.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;loading&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Refresh Count: {{ count }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-pull-refresh</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> count = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onRefresh</span> = (<span class="hljs-params"></span>) =&gt; {\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;Refresh Success&#x27;</span>);\n        loading.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n        count.<span class="hljs-property">value</span>++;\n      }, <span class="hljs-number">1000</span>);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      count,\n      loading,\n      onRefresh,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="success-tip" tabindex="-1">Success Tip</h3>\n<p>Use <code>success-text</code> to set the success prompt after the refresh is successful</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;isLoading&quot;</span>\n  <span class="hljs-attr">success-text</span>=<span class="hljs-string">&quot;Refresh success&quot;</span>\n  @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Refresh Count: {{ count }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-pull-refresh</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-tips" tabindex="-1">Custom Tips</h3>\n<p>Use slots to custom tips.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;isLoading&quot;</span> <span class="hljs-attr">:head-height</span>=<span class="hljs-string">&quot;80&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">pulling</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>\n      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;doge&quot;</span>\n      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/doge.png&quot;</span>\n      <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ transform: `scale(${props.distance / 80})` }&quot;</span>\n    /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">loosing</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>\n      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;doge&quot;</span>\n      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/doge.png&quot;</span>\n    /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">loading</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>\n      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;doge&quot;</span>\n      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/doge-fire.jpeg&quot;</span>\n    /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Refresh Count: {{ count }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-pull-refresh</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.doge</span> {\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">140px</span>;\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">72px</span>;\n    <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">8px</span>;\n    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>Loading status</td>\n<td><em>boolean</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>pulling-text</td>\n<td>Text to show when pulling</td>\n<td><em>string</em></td>\n<td><code>Pull to refresh...</code></td>\n</tr>\n<tr>\n<td>loosing-text</td>\n<td>Text to show when loosing</td>\n<td><em>string</em></td>\n<td><code>Loose to refresh...</code></td>\n</tr>\n<tr>\n<td>loading-text</td>\n<td>Text to show when loading</td>\n<td><em>string</em></td>\n<td><code>Loading...</code></td>\n</tr>\n<tr>\n<td>success-text</td>\n<td>Text to show when loading success</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>success-duration</td>\n<td>Success text display duration(ms)</td>\n<td><em>number | string</em></td>\n<td><code>500</code></td>\n</tr>\n<tr>\n<td>animation-duration</td>\n<td>Animation duration</td>\n<td><em>number | string</em></td>\n<td><code>300</code></td>\n</tr>\n<tr>\n<td>head-height</td>\n<td>Height of head</td>\n<td><em>number | string</em></td>\n<td><code>50</code></td>\n</tr>\n<tr>\n<td>pull-distance</td>\n<td>The distance to trigger the pull refresh</td>\n<td><em>number | string</em></td>\n<td>same as <code>head-height</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Whether to disable pull refresh</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Parameters</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>refresh</td>\n<td>Emitted after pulling refresh</td>\n<td>-</td>\n</tr>\n<tr>\n<td>change</td>\n<td>Emitted when draging or status changed</td>\n<td><em>{ status: string, distance: number }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>SlotProps</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Default slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>normal</td>\n<td>Content of head when at normal status</td>\n<td>-</td>\n</tr>\n<tr>\n<td>pulling</td>\n<td>Content of head when at pulling</td>\n<td><em>{ distance: number }</em></td>\n</tr>\n<tr>\n<td>loosing</td>\n<td>Content of head when at loosing</td>\n<td><em>{ distance: number }</em></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>Content of head when at loading</td>\n<td><em>{ distance: number }</em></td>\n</tr>\n<tr>\n<td>success</td>\n<td>Content of head when succeed</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PullRefreshProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-pull-refresh-head-height</td>\n<td><em>50px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-pull-refresh-head-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-pull-refresh-head-text-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-pull-refresh-loading-icon-size</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);