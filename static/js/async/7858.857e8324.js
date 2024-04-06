/*! For license information please see 7858.857e8324.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["7858"],{66112:function(n,t,s){"use strict";s.r(t);var a=s("97700");let l=["innerHTML"];t.default={setup:()=>({html:""}),render:()=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Button</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Buttons are used to trigger an action, such as submitting a form.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Button</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="type" tabindex="-1">Type</h3>\n<p>The Button supports five types: <code>default</code>, <code>primary</code>, <code>success</code>, <code>warning</code>, and <code>danger</code>. The default type is <code>default</code>.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Primary<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="plain" tabindex="-1">Plain</h3>\n<p>Use the <code>plain</code> prop to set the button as a plain button. The text color of a plain button is the same as the button color, and the background is white.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Plain<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Plain<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="hairline" tabindex="-1">Hairline</h3>\n<p>Setting the <code>hairline</code> prop to display a border with a thickness of 0.5px.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">hairline</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Hairline<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">hairline</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Hairline<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3>\n<p>Use the <code>disabled</code> prop to disable the button. In the disabled state, the button cannot be clicked.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="loading" tabindex="-1">Loading</h3>\n<p>Set the button as a loading state using the <code>loading</code> prop. In the loading state, the button text is hidden by default. You can set the text for the loading state using the <code>loading-text</code> property.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;spinner&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">loading-text</span>=<span class="hljs-string">&quot;Loading...&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="shape" tabindex="-1">Shape</h3>\n<p>Use the <code>square</code> prop to set the button as square-shaped and the <code>round</code> prop to set it as round-shaped.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Square<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Round<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="icon" tabindex="-1">Icon</h3>\n<p>Use the <code>icon</code> prop to set the button icon. It supports all icons from the Icon component or you can pass a custom icon URL.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;plus&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;plus&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span>\n  <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png&quot;</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n&gt;</span>\n  Button\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="size" tabindex="-1">Size</h3>\n<p>Four sizes are supported: <code>large</code>, <code>normal</code>, <code>small</code>, and <code>mini</code>. The default size is <code>normal</code>.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;normal&quot;</span>&gt;</span>Normal<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>Mini<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="block-element" tabindex="-1">Block Element</h3>\n<p>By default, the button is an inline-block element. Use the <code>block</code> prop to change the button element type to a block-level element.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>Block Element<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="route" tabindex="-1">Route</h3>\n<p>You can use the <code>url</code> prop for URL redirection or the <code>to</code> prop for route navigation.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://github.com&quot;</span>&gt;</span>URL<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>Vue Router<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3>\n<p>Customize the button color using the <code>color</code> prop.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span>&gt;</span>Pure<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>Pure<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(to right, #ff6034, #ee0a24)&quot;</span>&gt;</span>\n  Gradient\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="animated-button" tabindex="-1">Animated Button</h3>\n<p>With the combination of the Button and <a href="(/#/en-US/swipe)" target="_blank">Swipe component</a>, you can create an animated button effect with vertical scrolling.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">round</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span>\n    <span class="hljs-attr">vertical</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-swipe&quot;</span>\n    <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;2000&quot;</span>\n    <span class="hljs-attr">:touchable</span>=<span class="hljs-string">&quot;false&quot;</span>\n    <span class="hljs-attr">:show-indicators</span>=<span class="hljs-string">&quot;false&quot;</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>Do Task<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>Lottery<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.notice-swipe</span> {\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">40px</span>;\n    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">40px</span>;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>Can be set to <code>primary</code> <code>success</code> <code>warning</code> <code>danger</code></td>\n<td><em>string</em></td>\n<td><code>default</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>Can be set to <code>large</code> <code>small</code> <code>mini</code></td>\n<td><em>string</em></td>\n<td><code>normal</code></td>\n</tr>\n<tr>\n<td>text</td>\n<td>Text</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>color</td>\n<td>Color, support linear-gradient</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>Left Icon</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon-prefix</td>\n<td>Icon className prefix</td>\n<td><em>string</em></td>\n<td><code>van-icon</code></td>\n</tr>\n<tr>\n<td>icon-position</td>\n<td>Icon position, can be set to <code>right</code></td>\n<td><em>string</em></td>\n<td><code>left</code></td>\n</tr>\n<tr>\n<td>tag</td>\n<td>HTML Tag</td>\n<td><em>string</em></td>\n<td><code>button</code></td>\n</tr>\n<tr>\n<td>native-type</td>\n<td>Native Type Attribute</td>\n<td><em>string</em></td>\n<td><code>button</code></td>\n</tr>\n<tr>\n<td>plain</td>\n<td>Whether to be plain button</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>block</td>\n<td>Whether to set display block</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>Whether to be round button</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>square</td>\n<td>Whether to be square button</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Whether to disable button</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>Whether to show loading status</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>loading-text</td>\n<td>Loading text</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>loading-type</td>\n<td>Loading type, can be set to <code>spinner</code></td>\n<td><em>string</em></td>\n<td><code>circular</code></td>\n</tr>\n<tr>\n<td>loading-size</td>\n<td>Loading icon size</td>\n<td><em>number | string</em></td>\n<td><code>20px</code></td>\n</tr>\n<tr>\n<td>url</td>\n<td>Link URL</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>to</td>\n<td>The target route should navigate to when clicked on, same as the <a href="https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to prop</a> of Vue Router</td>\n<td><em>string | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>replace</td>\n<td>If true, the navigation will not leave a history record</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>Emitted when button is clicked and not disabled or loading</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>touchstart</td>\n<td>Emitted when button is touched</td>\n<td><em>event: TouchEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Default slot</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>Custom icon</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>Custom loading icon</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">ButtonType</span>,\n  <span class="hljs-title class_">ButtonSize</span>,\n  <span class="hljs-title class_">ButtonProps</span>,\n  <span class="hljs-title class_">ButtonNativeType</span>,\n  <span class="hljs-title class_">ButtonIconPosition</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-button-mini-height</td>\n<td><em>24px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-mini-padding</td>\n<td><em>0 var(--van-padding-base)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-mini-font-size</td>\n<td><em>var(--van-font-size-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-small-height</td>\n<td><em>32px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-small-padding</td>\n<td><em>0 var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-small-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-normal-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-normal-padding</td>\n<td><em>0 15px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-large-height</td>\n<td><em>50px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-default-height</td>\n<td><em>44px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-default-line-height</td>\n<td><em>1.2</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-default-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-default-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-default-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-default-border-color</td>\n<td><em>var(--van-gray-4)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-primary-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-primary-background</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-primary-border-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-success-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-success-background</td>\n<td><em>var(--van-success-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-success-border-color</td>\n<td><em>var(--van-success-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-danger-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-danger-background</td>\n<td><em>var(--van-danger-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-danger-border-color</td>\n<td><em>var(--van-danger-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-warning-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-warning-background</td>\n<td><em>var(--van-warning-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-warning-border-color</td>\n<td><em>var(--van-warning-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-border-width</td>\n<td><em>var(--van-border-width)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-radius</td>\n<td><em>var(--van-radius-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-round-radius</td>\n<td><em>var(--van-radius-max)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-plain-background</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-disabled-opacity</td>\n<td><em>var(--van-disabled-opacity)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-icon-size</td>\n<td><em>1.2em</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-button-loading-icon-size</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);