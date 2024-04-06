/*! For license information please see 8389.d6ca972c.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["8389"],{17666:function(n,s,t){"use strict";t.r(s);var a=t("97700");let e=["innerHTML"];s.default={setup:()=>({html:""}),render:()=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Area</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>A three-level linkage selection of provinces and cities, usually used in conjunction with <a href="#/en-US/popup" target="_blank">Popup</a> component.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Area</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Area</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>To initialize <code>Area</code> component, <code>area-list</code> property is required.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-area</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="arealist-data-structure" tabindex="-1">areaList Data Structure</h3>\n<p>An object contains three properties: <code>province_list</code>, <code>city_list</code> and <code>county_list</code>. Each property is a simple key-value object, key is a 6-bit code of the area of which first two bits stand for the province or state, middle two bits are used as city code and the last two are district code, value is the name of the area. If the code stands for an area that has sub-areas, lower bits of it will be filled with 0.</p>\n<p>Sample data:</p>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">province_list</span>: {\n    <span class="hljs-number">110000</span>: <span class="hljs-string">&#x27;Beijing&#x27;</span>,\n    <span class="hljs-number">330000</span>: <span class="hljs-string">&#x27;Zhejiang Province&#x27;</span>,\n  },\n  <span class="hljs-attr">city_list</span>: {\n    <span class="hljs-number">110100</span>: <span class="hljs-string">&#x27;Beijing City&#x27;</span>,\n    <span class="hljs-number">330100</span>: <span class="hljs-string">&#x27;Hangzhou&#x27;</span>,\n  },\n  <span class="hljs-attr">county_list</span>: {\n    <span class="hljs-number">110101</span>: <span class="hljs-string">&#x27;Dongcheng District&#x27;</span>,\n    <span class="hljs-number">110102</span>: <span class="hljs-string">&#x27;Xicheng District&#x27;</span>,\n    <span class="hljs-comment">// ....</span>\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="china-area-data" tabindex="-1">China Area Data</h3>\n<p>Vant officially provides a default china area data, which can be imported through <a href="https://github.com/vant-ui/vant/tree/main/packages/vant-area-data" target="_blank">@vant/area-data</a>:</p>\n<pre><code class="language-bash"><span class="hljs-comment"># with npm</span>\nnpm i @vant/area-data\n\n<span class="hljs-comment"># with yarn</span>\nyarn add @vant/area-data\n\n<span class="hljs-comment"># with pnpm</span>\npnpm add @vant/area-data\n\n<span class="hljs-comment"># with Bun</span>\nbun add @vant/area-data\n</code></pre>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { areaList } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/area-data&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">return</span> { areaList };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="model-value" tabindex="-1">Model Value</h3>\n<p>Bind the currently selected area code via <code>v-model</code>.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-area</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;330302&#x27;</span>);\n    <span class="hljs-keyword">return</span> { value };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="columns-number" tabindex="-1">Columns Number</h3>\n<p><code>columns-num</code> property is used to config number of columns to be displayed. This component has 3 columns corresponding to a 3 level picker by default. Set <code>columns-num</code> with 2, you\'ll have a 2 level picker.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-area</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span> <span class="hljs-attr">:columns-num</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="columns-placeholder" tabindex="-1">Columns Placeholder</h3>\n<p><code>columns-placeholder</code> property is used to config placeholder of columns.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-area</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>\n  <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span>\n  <span class="hljs-attr">:columns-placeholder</span>=<span class="hljs-string">&quot;[&#x27;Choose&#x27;, &#x27;Choose&#x27;, &#x27;Choose&#x27;]&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>the <code>code</code> of selected area</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>Toolbar title</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>confirm-button-text</td>\n<td>Text of confirm button</td>\n<td><em>string</em></td>\n<td><code>Confirm</code></td>\n</tr>\n<tr>\n<td>cancel-button-text</td>\n<td>Text of cancel button</td>\n<td><em>string</em></td>\n<td><code>Cancel</code></td>\n</tr>\n<tr>\n<td>area-list</td>\n<td>Area list data</td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>columns-placeholder</td>\n<td>Placeholder of columns</td>\n<td><em>string[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>Whether to show loading prompt</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>Whether to be readonly</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>option-height</td>\n<td>Option height, supports <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> unit, default <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>44</code></td>\n</tr>\n<tr>\n<td>columns-num</td>\n<td>Level of picker</td>\n<td><em>number | string</em></td>\n<td><code>3</code></td>\n</tr>\n<tr>\n<td>visible-option-num</td>\n<td>Count of visible columns</td>\n<td><em>number | string</em></td>\n<td><code>6</code></td>\n</tr>\n<tr>\n<td>swipe-duration</td>\n<td>Duration of the momentum animation, unit <code>ms</code></td>\n<td><em>number | string</em></td>\n<td><code>1000</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>confirm</td>\n<td>Emitted when the confirm button is clicked</td>\n<td><em>{ selectedValues, selectedOptions, selectedIndexes }</em></td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>Emitted when the cancel button is clicked</td>\n<td><em>{ selectedValues, selectedOptions, selectedIndexes }</em></td>\n</tr>\n<tr>\n<td>change</td>\n<td>Emitted when current option is changed</td>\n<td><em>{ selectedValues, selectedOptions, selectedIndexes, columnIndex }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>SlotProps</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toolbar <code>3.1.2</code></td>\n<td>Custom toolbar content</td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>Custom title</td>\n<td>-</td>\n</tr>\n<tr>\n<td>confirm <code>3.1.2</code></td>\n<td>Custom confirm button text</td>\n<td>-</td>\n</tr>\n<tr>\n<td>cancel <code>3.1.2</code></td>\n<td>Custom cancel button text</td>\n<td>-</td>\n</tr>\n<tr>\n<td>columns-top</td>\n<td>Custom content above columns</td>\n<td>-</td>\n</tr>\n<tr>\n<td>columns-bottom</td>\n<td>Custom content below columns</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3>\n<p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get Area instance and call instance methods.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Attribute</th>\n<th>Return value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>confirm</td>\n<td>Stop scrolling and emit confirm event</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>getSelectedOptions</td>\n<td>Get current selected options</td>\n<td>-</td>\n<td><em>PickerOption[]</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AreaProps</span>, <span class="hljs-title class_">AreaList</span>, <span class="hljs-title class_">AreaInstance</span>, <span class="hljs-title class_">AreaColumnOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>AreaInstance</code> is the type of component instance:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AreaInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> areaRef = ref&lt;<span class="hljs-title class_">AreaInstance</span>&gt;();\n\nareaRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">confirm</span>();\n</code></pre>\n</div>'},null,8,e))}}}]);