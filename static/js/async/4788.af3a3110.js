/*! For license information please see 4788.af3a3110.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4788"],{75030:function(n,s,t){"use strict";t.r(s);var a=t("97700");let e=["innerHTML"];s.default={setup:()=>({html:""}),render:()=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>ActionSheet</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>The pop-up modal panel at the bottom contains multiple options related to the current situation.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ActionSheet</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ActionSheet</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>Use <code>actions</code> prop to set options of action-sheet.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Basic Usage&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span> @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> actions = [\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Option 1&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Option 2&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Option 3&#x27;</span> },\n    ];\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">item</span>) =&gt; {\n      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n      <span class="hljs-title function_">showToast</span>(item.<span class="hljs-property">name</span>);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      actions,\n      onSelect,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="show-icon" tabindex="-1">Show Icon</h3>\n<p>Use the <code>icon</code> field of <code>actions</code> to set the icon for the option.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Show Icon&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span> @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> actions = [\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Option 1&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;cart-o&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Option 2&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;shop-o&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Option 3&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;star-o&#x27;</span> },\n    ];\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">item</span>) =&gt; {\n      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n      <span class="hljs-title function_">showToast</span>(item.<span class="hljs-property">name</span>);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      actions,\n      onSelect,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="show-cancel-button" tabindex="-1">Show Cancel Button</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>\n  <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">&quot;Cancel&quot;</span>\n  <span class="hljs-attr">close-on-click-action</span>\n  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> actions = [\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Option 1&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Option 2&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Option 3&#x27;</span> },\n    ];\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;cancel&#x27;</span>);\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      actions,\n      onCancel,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="show-description" tabindex="-1">Show Description</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>\n  <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">&quot;Cancel&quot;</span>\n  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Description&quot;</span>\n  <span class="hljs-attr">close-on-click-action</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> actions = [\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Option 1&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Option 2&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Option 3&#x27;</span>, <span class="hljs-attr">subname</span>: <span class="hljs-string">&#x27;Description&#x27;</span> },\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      actions,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="option-status" tabindex="-1">Option Status</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>\n  <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">&quot;Cancel&quot;</span>\n  <span class="hljs-attr">close-on-click-action</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> actions = [\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Colored Option&#x27;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;#ee0a24&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Disabled Option&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Loading Option&#x27;</span>, <span class="hljs-attr">loading</span>: <span class="hljs-literal">true</span> },\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      actions,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-panel" tabindex="-1">Custom Panel</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>Content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-sheet</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.content</span> {\n    <span class="hljs-attribute">padding</span>: <span class="hljs-number">16px</span> <span class="hljs-number">16px</span> <span class="hljs-number">160px</span>;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:show</td>\n<td>Whether to show ActionSheet</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>actions</td>\n<td>Options</td>\n<td><em>ActionSheetAction[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>Title</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>cancel-text</td>\n<td>Text of cancel button</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>description</td>\n<td>Description above the options</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>closeable</td>\n<td>Whether to show close icon</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-icon</td>\n<td>Close icon name</td>\n<td><em>string</em></td>\n<td><code>cross</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Transition duration, unit second</td>\n<td><em>number | string</em></td>\n<td><code>0.3</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>Set the z-index to a fixed value</td>\n<td><em>number | string</em></td>\n<td><code>2000+</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>Whether to show round corner</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>Whether to show overlay</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>overlay-class</td>\n<td>Custom overlay class</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlay-style</td>\n<td>Custom overlay style</td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>lock-scroll</td>\n<td>Whether to lock background scroll</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>lazy-render</td>\n<td>Whether to lazy render util appeared</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-popstate</td>\n<td>Whether to close when popstate</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-click-action</td>\n<td>Whether to close when an action is clicked</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>close-on-click-overlay</td>\n<td>Whether to close when overlay is clicked</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>safe-area-inset-bottom</td>\n<td>Whether to enable bottom safe area adaptation</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>Specifies a target element where ActionSheet will be mounted</td>\n<td><em>string | Element</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>before-close</td>\n<td>Callback function before close</td>\n<td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="data-structure-of-actionsheetaction" tabindex="-1">Data Structure of ActionSheetAction</h3>\n<table>\n<thead>\n<tr>\n<th>Key</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>Title</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>subname</td>\n<td>Subtitle</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>color</td>\n<td>Text color</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>icon <code>v4.8.6</code></td>\n<td>Icon name or URL</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>className</td>\n<td>className for the option</td>\n<td><em>string | Array | object</em></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>Whether to be loading status</td>\n<td><em>boolean</em></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Whether to be disabled</td>\n<td><em>boolean</em></td>\n</tr>\n<tr>\n<td>callback</td>\n<td>Callback function after clicked</td>\n<td><em>action: ActionSheetAction</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>select</td>\n<td>Emitted when an option is clicked</td>\n<td><em>action: ActionSheetAction, index: number</em></td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>Emitted when the cancel button is clicked</td>\n<td>-</td>\n</tr>\n<tr>\n<td>open</td>\n<td>Emitted when opening ActionSheet</td>\n<td>-</td>\n</tr>\n<tr>\n<td>close</td>\n<td>Emitted when closing ActionSheet</td>\n<td>-</td>\n</tr>\n<tr>\n<td>opened</td>\n<td>Emitted when ActionSheet is opened</td>\n<td>-</td>\n</tr>\n<tr>\n<td>closed</td>\n<td>Emitted when ActionSheet is closed</td>\n<td>-</td>\n</tr>\n<tr>\n<td>click-overlay</td>\n<td>Emitted when overlay is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>SlotProps</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Custom content</td>\n<td></td>\n</tr>\n<tr>\n<td>description</td>\n<td>Custom description above the options</td>\n<td></td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>Custom the content of cancel button</td>\n<td></td>\n</tr>\n<tr>\n<td>action</td>\n<td>Custom the content of action</td>\n<td><em>{ action: ActionSheetAction, index: number }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ActionSheetProps</span>, <span class="hljs-title class_">ActionSheetAction</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-action-sheet-max-height</td>\n<td><em>80%</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-header-height</td>\n<td><em>48px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-header-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-description-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-description-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-description-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-item-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-item-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-item-line-height</td>\n<td><em>var(--van-line-height-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-item-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-item-disabled-text-color</td>\n<td><em>var(--van-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-item-icon-size</td>\n<td><em>18px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-item-icon-margin-right</td>\n<td><em>var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-subname-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-subname-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-subname-line-height</td>\n<td><em>var(--van-line-height-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-close-icon-size</td>\n<td><em>22px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-close-icon-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-close-icon-padding</td>\n<td><em>0 var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-cancel-text-color</td>\n<td><em>var(--van-gray-7)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-cancel-padding-top</td>\n<td><em>var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-cancel-padding-color</td>\n<td><em>var(--van-background)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-action-sheet-loading-icon-size</td>\n<td><em>22px</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);