/*! For license information please see 5206.d4cd326d.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["5206"],{11696:function(n,t,s){"use strict";s.r(t);var a=s("97700");let e=["innerHTML"];t.default={setup:()=>({html:""}),render:()=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Search</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Input box component for search scenarios.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Search</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Search</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">return</span> { value };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="listen-to-events" tabindex="-1">Listen to Events</h3>\n<p><code>search</code> event will be Emitted when click the search button on the keyboard, <code>cancel</code> event will be Emitted when click the cancel button.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">action</span>=<span class="hljs-string">&quot;/&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n    <span class="hljs-attr">show-action</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span>\n    @<span class="hljs-attr">search</span>=<span class="hljs-string">&quot;onSearch&quot;</span>\n    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSearch</span> = (<span class="hljs-params">val</span>) =&gt; <span class="hljs-title function_">showToast</span>(val);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;Cancel&#x27;</span>);\n    <span class="hljs-keyword">return</span> {\n      value,\n      onSearch,\n      onCancel,\n    };\n  },\n};\n</code></pre>\n<blockquote>\n<p>Tips: There will be a search button on the keyboard when Search is inside a form in iOS.</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="input-align" tabindex="-1">Input Align</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">input-align</span>=<span class="hljs-string">&quot;center&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-background-color" tabindex="-1">Custom Background Color</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span>\n  <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#4fc08d&quot;</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-action-button" tabindex="-1">Custom Action Button</h3>\n<p>Use <code>action</code> slot to custom right button, <code>cancel</code> event will no longer be Emitted when use this slot.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">show-action</span>\n  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Address&quot;</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span>\n  @<span class="hljs-attr">search</span>=<span class="hljs-string">&quot;onSearch&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">action</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickButton&quot;</span>&gt;</span>Search<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-search</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSearch</span> = (<span class="hljs-params">val</span>) =&gt; <span class="hljs-title function_">showToast</span>(val);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickButton</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(value.<span class="hljs-property">value</span>);\n    <span class="hljs-keyword">return</span> {\n      value,\n      onSearch,\n      onClickButton,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>Input value</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>label</td>\n<td>Left side label</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>name</td>\n<td>As the identifier when submitting the form</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>shape</td>\n<td>Shape of field, can be set to <code>round</code></td>\n<td><em>string</em></td>\n<td><code>square</code></td>\n</tr>\n<tr>\n<td>id</td>\n<td>Input id, the for attribute of the label also will be set</td>\n<td><em>string</em></td>\n<td><code>van-search-n-input</code></td>\n</tr>\n<tr>\n<td>background</td>\n<td>Background color of field</td>\n<td><em>string</em></td>\n<td><code>#f2f2f2</code></td>\n</tr>\n<tr>\n<td>maxlength</td>\n<td>Max length of value</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>Placeholder</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>clearable</td>\n<td>Whether to be clearable</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>clear-icon</td>\n<td>Clear icon name</td>\n<td><em>string</em></td>\n<td><code>clear</code></td>\n</tr>\n<tr>\n<td>clear-trigger</td>\n<td>When to display the clear icon, <code>always</code> means to display the icon when value is not empty, <code>focus</code> means to display the icon when input is focused</td>\n<td><em>string</em></td>\n<td><code>focus</code></td>\n</tr>\n<tr>\n<td>autofocus</td>\n<td>Whether to auto focus, unsupported in iOS</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-action</td>\n<td>Whether to show right action button</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>action-text</td>\n<td>Text of action button</td>\n<td><em>string</em></td>\n<td><code>Cancel</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Whether to disable field</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>Whether to be readonly</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>error</td>\n<td>Whether to mark the input content in red</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>error-message</td>\n<td>Error message</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>formatter</td>\n<td>Input value formatter</td>\n<td><em>(val: string) =&gt; string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>format-trigger</td>\n<td>When to format value, can be set to <code>onBlur</code></td>\n<td><em>string</em></td>\n<td><code>onChange</code></td>\n</tr>\n<tr>\n<td>input-align</td>\n<td>Text align of field, can be set to <code>center</code> <code>right</code></td>\n<td><em>string</em></td>\n<td><code>left</code></td>\n</tr>\n<tr>\n<td>left-icon</td>\n<td>Left icon name</td>\n<td><em>string</em></td>\n<td><code>search</code></td>\n</tr>\n<tr>\n<td>right-icon</td>\n<td>Right icon name</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>autocomplete</td>\n<td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete" target="_blank">autocomplete</a> attribute of native input element</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>search</td>\n<td>Emitted when confirming search</td>\n<td><em>value: string</em></td>\n</tr>\n<tr>\n<td>update:model-value</td>\n<td>Emitted when input value changed</td>\n<td><em>value: string</em></td>\n</tr>\n<tr>\n<td>focus</td>\n<td>Emitted when input is focused</td>\n<td><em>event: Event</em></td>\n</tr>\n<tr>\n<td>blur</td>\n<td>Emitted when input is blurred</td>\n<td><em>event: Event</em></td>\n</tr>\n<tr>\n<td>click-input</td>\n<td>Emitted when the input is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>click-left-icon</td>\n<td>Emitted when the left icon is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>click-right-icon</td>\n<td>Emitted when the right icon is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>clear</td>\n<td>Emitted when the clear icon is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>Emitted when the cancel button is clicked</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3>\n<p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get Search instance and call instance methods.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Attribute</th>\n<th>Return value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>focus</td>\n<td>Trigger input focus</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>blur</td>\n<td>Trigger input blur</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SearchProps</span>, <span class="hljs-title class_">SearchShape</span>, <span class="hljs-title class_">SearchInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>SearchInstance</code> is the type of component instance:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SearchInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> searchRef = ref&lt;<span class="hljs-title class_">SearchInstance</span>&gt;();\n\nsearchRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">focus</span>();\n</code></pre>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>left</td>\n<td>Custom left side content</td>\n</tr>\n<tr>\n<td>action</td>\n<td>Custom right button, displayed when <code>show-action</code> is <code>true</code></td>\n</tr>\n<tr>\n<td>label</td>\n<td>Custom Search label</td>\n</tr>\n<tr>\n<td>left-icon</td>\n<td>Custom left icon</td>\n</tr>\n<tr>\n<td>right-icon</td>\n<td>Custom right icon</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-search-padding</td>\n<td><em>10px var(--van-padding-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-content-background</td>\n<td><em>var(--van-gray-1)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-input-height</td>\n<td><em>34px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-label-padding</td>\n<td><em>0 5px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-label-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-label-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-left-icon-color</td>\n<td><em>var(--van-gray-6)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-action-padding</td>\n<td><em>0 var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-action-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-search-action-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);