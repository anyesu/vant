/*! For license information please see 5080.83271610.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["5080"],{56175:function(s,n,t){"use strict";t.r(n);var a=t("97700");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Popup</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to display pop-up windows, information prompts, etc., and supports multiple pop-up layers to display.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Popup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Popup</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Show Popup&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPopup&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ padding: &#x27;64px&#x27; }&quot;</span>&gt;</span>Content<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">showPopup</span> = (<span class="hljs-params"></span>) =&gt; {\n      show.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;\n    };\n    <span class="hljs-keyword">return</span> {\n      show,\n      showPopup,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="position" tabindex="-1">Position</h3>\n<p>Use <code>position</code> prop to set Popup display position.</p>\n<p>The default position is <code>center</code>, it can be set to <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>.</p>\n<ul>\n<li>When the position is <code>top</code> or <code>bottom</code>, the default width is consistent with the screen width, and the height of the Popup depends on the height of the content.</li>\n<li>When the position is <code>left</code> or <code>right</code> side, the width and height are not set by default, and the width and height of the popup depend on the width and height of the content.</li>\n</ul>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- top popup --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showTop&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#x27;30%&#x27; }&quot;</span> /&gt;</span>\n\n<span class="hljs-comment">&lt;!-- bottom popup --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showBottom&quot;</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>\n  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#x27;30%&#x27; }&quot;</span>\n/&gt;</span>\n\n<span class="hljs-comment">&lt;!-- left popup --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showLeft&quot;</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>\n  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ width: &#x27;30%&#x27;, height: &#x27;100%&#x27; }&quot;</span>\n/&gt;</span>\n\n<span class="hljs-comment">&lt;!-- Popup on the right --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showRight&quot;</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span>\n  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ width: &#x27;30%&#x27;, height: &#x27;100%&#x27; }&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="close-icon" tabindex="-1">Close Icon</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">closeable</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>\n  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#x27;30%&#x27; }&quot;</span>\n/&gt;</span>\n<span class="hljs-comment">&lt;!-- Custom Icon --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">closeable</span>\n  <span class="hljs-attr">close-icon</span>=<span class="hljs-string">&quot;close&quot;</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>\n  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#x27;30%&#x27; }&quot;</span>\n/&gt;</span>\n<span class="hljs-comment">&lt;!-- Icon Position --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">closeable</span>\n  <span class="hljs-attr">close-icon-position</span>=<span class="hljs-string">&quot;top-left&quot;</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>\n  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#x27;30%&#x27; }&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="round-corner" tabindex="-1">Round Corner</h3>\n<p>After setting the <code>round</code> prop, the Popup will add different rounded corner styles according to the position.</p>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- Round Popup (center) --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showCenter&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ padding: &#x27;64px&#x27; }&quot;</span> /&gt;</span>\n\n<span class="hljs-comment">&lt;!-- Round Popup (bottom) --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showBottom&quot;</span>\n  <span class="hljs-attr">round</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>\n  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#x27;30%&#x27; }&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="listen-to-click-events" tabindex="-1">Listen To Click Events</h3>\n<p>Popup supports following events:</p>\n<ul>\n<li><code>click</code>: Emitted when Popup is clicked.</li>\n<li><code>click-overlay</code>: Emitted when overlay is clicked.</li>\n<li><code>click-close-icon</code>: Emitted when close icon is clicked.</li>\n</ul>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Listen Click Events&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>\n  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#x27;30%&#x27; }&quot;</span>\n  <span class="hljs-attr">closeable</span>\n  @<span class="hljs-attr">click-overlay</span>=<span class="hljs-string">&quot;onClickOverlay&quot;</span>\n  @<span class="hljs-attr">click-close-icon</span>=<span class="hljs-string">&quot;onClickCloseIcon&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickOverlay</span> = (<span class="hljs-params"></span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;click-overlay&#x27;</span>);\n    };\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickCloseIcon</span> = (<span class="hljs-params"></span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;click-close-icon&#x27;</span>);\n    };\n    <span class="hljs-keyword">return</span> {\n      show,\n      onClickOverlay,\n      onClickCloseIcon,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="listen-to-display-events" tabindex="-1">Listen to Display Events</h3>\n<p>When the Popup is opened or closed, the following events will be emitted:</p>\n<ul>\n<li><code>open</code>: Emitted immediately when the Popup is opened.</li>\n<li><code>opened</code>: Emitted when the Popup is opened and the animation ends.</li>\n<li><code>close</code>: Emitted immediately when the Popup is closed.</li>\n<li><code>closed</code>: Emitted when the Popup is closed and the animation ends.</li>\n</ul>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Listen to display events&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>\n  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#x27;30%&#x27; }&quot;</span>\n  @<span class="hljs-attr">open</span>=<span class="hljs-string">&quot;showToast(&#x27;open&#x27;)&quot;</span>\n  @<span class="hljs-attr">opened</span>=<span class="hljs-string">&quot;showToast(&#x27;opened&#x27;)&quot;</span>\n  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;showToast(&#x27;close&#x27;)&quot;</span>\n  @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;showToast(&#x27;closed&#x27;)&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">return</span> {\n      show,\n      showToast,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="get-container" tabindex="-1">Get Container</h3>\n<p>Use <code>teleport</code> prop to specify mount location.</p>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- teleport to body --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;body&quot;</span> /&gt;</span>\n\n<span class="hljs-comment">&lt;!-- teleport to #app --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;#app&quot;</span> /&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:show</td>\n<td>Whether to show popup</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>Whether to show overlay</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>Can be set to <code>top</code> <code>bottom</code> <code>right</code> <code>left</code></td>\n<td><em>string</em></td>\n<td><code>center</code></td>\n</tr>\n<tr>\n<td>overlay-class</td>\n<td>Custom overlay class</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlay-style</td>\n<td>Custom overlay style</td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Transition duration, unit second</td>\n<td><em>number | string</em></td>\n<td><code>0.3</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>Set the z-index to a fixed value</td>\n<td><em>number | string</em></td>\n<td><code>2000+</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>Whether to show round corner</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>lock-scroll</td>\n<td>Whether to lock background scroll</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>lazy-render</td>\n<td>Whether to lazy render util appeared</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-popstate</td>\n<td>Whether to close when popstate</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>close-on-click-overlay</td>\n<td>Whether to close when overlay is clicked</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>closeable</td>\n<td>Whether to show close icon</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>close-icon</td>\n<td>Close icon name</td>\n<td><em>string</em></td>\n<td><code>cross</code></td>\n</tr>\n<tr>\n<td>close-icon-position</td>\n<td>Close Icon Position, can be set to <code>top-left</code> <code>bottom-left</code> <code>bottom-right</code></td>\n<td><em>string</em></td>\n<td><code>top-right</code></td>\n</tr>\n<tr>\n<td>before-close</td>\n<td>Callback function before close</td>\n<td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon-prefix</td>\n<td>Icon className prefix</td>\n<td><em>string</em></td>\n<td><code>van-icon</code></td>\n</tr>\n<tr>\n<td>transition</td>\n<td>Transition, equivalent to <code>name</code> prop of <a href="https://vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>transition-appear</td>\n<td>Whether to apply transition on initial render</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>Specifies a target element where Popup will be mounted</td>\n<td><em>string | Element</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>safe-area-inset-top</td>\n<td>Whether to enable top safe area adaptation</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>safe-area-inset-bottom</td>\n<td>Whether to enable bottom safe area adaptation</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>Emitted when Popup is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>click-overlay</td>\n<td>Emitted when overlay is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>click-close-icon</td>\n<td>Emitted when close icon is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>open</td>\n<td>Emitted immediately when Popup is opened</td>\n<td>-</td>\n</tr>\n<tr>\n<td>close</td>\n<td>Emitted immediately when Popup is closed</td>\n<td>-</td>\n</tr>\n<tr>\n<td>opened</td>\n<td>Emitted when Popup is opened and the animation ends</td>\n<td>-</td>\n</tr>\n<tr>\n<td>closed</td>\n<td>Emitted when Popup is closed and the animation ends</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Content of Popup</td>\n</tr>\n<tr>\n<td>overlay-content</td>\n<td>Content of Popup overlay</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">PopupProps</span>,\n  <span class="hljs-title class_">PopupPosition</span>,\n  <span class="hljs-title class_">PopupInstance</span>,\n  <span class="hljs-title class_">PopupCloseIconPosition</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-popup-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popup-transition</td>\n<td><em>transform var(--van-duration-base)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popup-round-radius</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popup-close-icon-size</td>\n<td><em>22px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popup-close-icon-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popup-close-icon-margin</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popup-close-icon-z-index</td>\n<td><em>1</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);