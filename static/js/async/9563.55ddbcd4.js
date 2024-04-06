/*! For license information please see 9563.55ddbcd4.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["9563"],{44343:function(s,a,n){"use strict";n.r(a);var t=n("97700");let l=["innerHTML"];a.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Radio</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Single selection among multiple options.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RadioGroup</span>, <span class="hljs-title class_">Radio</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Radio</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">RadioGroup</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>Use <code>v-model</code> to bind the name of checked radio.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);\n    <span class="hljs-keyword">return</span> { checked };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="horizontal" tabindex="-1">Horizontal</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-shape" tabindex="-1">Custom Shape</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;dot&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">checked-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">checked-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-icon-size" tabindex="-1">Custom Icon Size</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;24px&quot;</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;24px&quot;</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-icon" tabindex="-1">Custom Icon</h3>\n<p>Use icon slot to custom icon</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n    Radio 1\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;img-icon&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;props.checked ? activeIcon : inactiveIcon&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n    Radio 2\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;img-icon&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;props.checked ? activeIcon : inactiveIcon&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.img-icon</span> {\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">20px</span>;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);\n    <span class="hljs-keyword">return</span> {\n      checked,\n      <span class="hljs-attr">activeIcon</span>:\n        <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png&#x27;</span>,\n      <span class="hljs-attr">inactiveIcon</span>:\n        <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png&#x27;</span>,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="left-label" tabindex="-1">Left Label</h3>\n<p>Set <code>label-position</code> prop to <code>\'left\'</code> to adjust the label position to the left of the Radio.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">label-position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">label-position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="disable-label-click" tabindex="-1">Disable Label Click</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">label-disabled</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">label-disabled</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="inside-a-cell" tabindex="-1">Inside a Cell</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Radio 1&quot;</span> <span class="hljs-attr">clickable</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;checked = &#x27;1&#x27;&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Radio 2&quot;</span> <span class="hljs-attr">clickable</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;checked = &#x27;2&#x27;&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">RadioProps</span>,\n  <span class="hljs-title class_">RadioShape</span>,\n  <span class="hljs-title class_">RadioGroupProps</span>,\n  <span class="hljs-title class_">RadioLabelPosition</span>,\n  <span class="hljs-title class_">RadioGroupDirection</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="radio-props" tabindex="-1">Radio Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>Radio name, usually a unique string or number</td>\n<td><em>any</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>shape</td>\n<td>Can be set to <code>square</code> <code>dot</code></td>\n<td><em>string</em></td>\n<td><code>round</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Whether to disable radio</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>label-disabled</td>\n<td>Whether to disable label click</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>label-position</td>\n<td>Can be set to <code>left</code></td>\n<td><em>string</em></td>\n<td><code>right</code></td>\n</tr>\n<tr>\n<td>icon-size</td>\n<td>Icon size</td>\n<td><em>number | string</em></td>\n<td><code>20px</code></td>\n</tr>\n<tr>\n<td>checked-color</td>\n<td>Checked color</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="radiogroup-props" tabindex="-1">RadioGroup Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>Name of checked radio</td>\n<td><em>any</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Disable all radios</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td>Direction, can be set to <code>horizontal</code></td>\n<td><em>string</em></td>\n<td><code>vertical</code></td>\n</tr>\n<tr>\n<td>icon-size</td>\n<td>Icon size of all radios</td>\n<td><em>number | string</em></td>\n<td><code>20px</code></td>\n</tr>\n<tr>\n<td>checked-color</td>\n<td>Checked color of all radios</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>shape <code>v4.6.3</code></td>\n<td>Can be set to <code>square</code> <code>dot</code></td>\n<td><em>string</em></td>\n<td><code>round</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="radio-events" tabindex="-1">Radio Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Parameters</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>Emitted when radio is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="radiogroup-events" tabindex="-1">RadioGroup Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Parameters</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>Emitted when value changed</td>\n<td><em>name: string</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="radio-slots" tabindex="-1">Radio Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>SlotProps</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Custom label</td>\n<td><em>{ checked: boolean, disabled: boolean }</em></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>Custom icon</td>\n<td><em>{ checked: boolean, disabled: boolean }</em></td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-radio-size</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-radio-dot-size</td>\n<td><em>8px</em></td>\n<td>The distance between the dot and the border</td>\n</tr>\n<tr>\n<td>--van-radio-border-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-radio-duration</td>\n<td><em>var(--van-duration-fast)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-radio-label-margin</td>\n<td><em>var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-radio-label-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-radio-checked-icon-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-radio-disabled-icon-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-radio-disabled-label-color</td>\n<td><em>var(--van-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-radio-disabled-background</td>\n<td><em>var(--van-border-color)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);