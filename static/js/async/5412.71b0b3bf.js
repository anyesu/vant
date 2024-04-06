/*! For license information please see 5412.71b0b3bf.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["5412"],{96237:function(s,n,a){"use strict";a.r(n);var t=a("97700");let l=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Popover</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to display some content on top of another.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Popover</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Popover</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span> @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Light Theme<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> actions = [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 1&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 2&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 3&#x27;</span> },\n    ];\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">action</span>) =&gt; <span class="hljs-title function_">showToast</span>(action.<span class="hljs-property">text</span>);\n\n    <span class="hljs-keyword">return</span> {\n      actions,\n      onSelect,\n      showPopover,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="dark-theme" tabindex="-1">Dark theme</h3>\n<p>Using the <code>theme</code> prop to change the style of Popover.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Dark Theme<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> actions = [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 1&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 2&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 3&#x27;</span> },\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      actions,\n      showPopover,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="horizontal" tabindex="-1">Horizontal</h3>\n<p>After setting the <code>actions-direction</code> prop to <code>horizontal</code>, the actions will be arranged horizontally.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span>\n  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>\n  <span class="hljs-attr">actions-direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Horizontal<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> actions = [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 1&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 2&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 3&#x27;</span> },\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      actions,\n      showPopover,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="placement" tabindex="-1">Placement</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span> /&gt;</span>\n</code></pre>\n<p><code>placement</code> supports the following values:</p>\n<pre><code class="language-bash">top           <span class="hljs-comment"># Top middle</span>\ntop-start     <span class="hljs-comment"># Top left</span>\ntop-end       <span class="hljs-comment"># Top right</span>\nleft          <span class="hljs-comment"># Left middle</span>\nleft-start    <span class="hljs-comment"># Left top</span>\nleft-end      <span class="hljs-comment"># Left bottom</span>\nright         <span class="hljs-comment"># Right middle</span>\nright-start   <span class="hljs-comment"># Right top</span>\nright-end     <span class="hljs-comment"># Right bottom</span>\nbottom        <span class="hljs-comment"># Bottom middle</span>\nbottom-start  <span class="hljs-comment"># Bottom left</span>\nbottom-end    <span class="hljs-comment"># Bottom right</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="show-icon" tabindex="-1">Show Icon</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Show Icon<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> actions = [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 1&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;add-o&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 2&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;music-o&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 3&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;more-o&#x27;</span> },\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      actions,\n      showPopover,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="disable-action" tabindex="-1">Disable Action</h3>\n<p>Using the <code>disabled</code> option to disable an action.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Disable Action<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> actions = [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 1&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 2&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 3&#x27;</span> },\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      actions,\n      showPopover,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-content" tabindex="-1">Custom Content</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span>\n    <span class="hljs-attr">square</span>\n    <span class="hljs-attr">clickable</span>\n    <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span>\n    <span class="hljs-attr">column-num</span>=<span class="hljs-string">&quot;3&quot;</span>\n    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 240px;&quot;</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span>\n      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;i in 6&quot;</span>\n      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>\n      <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Option&quot;</span>\n      <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span>\n      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPopover = false&quot;</span>\n    /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Custom Content<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">return</span> { showPopover };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="uncontrolled" tabindex="-1">Uncontrolled</h3>\n<p>You can use Popover as a controlled or uncontrolled component:</p>\n<ul>\n<li>When binding <code>v-model:show</code>, Popover is a controlled component, and the display of the component is completely controlled by the value of <code>v-model:show</code>.</li>\n<li>When <code>v-model:show</code> is not used, Popover is an uncontrolled component. You can pass in a default value through the <code>show</code> prop, and the display is controlled by the component itself.</li>\n</ul>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top-start&quot;</span> @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Uncontrolled<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> actions = [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 1&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 2&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option 3&#x27;</span> },\n    ];\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">action</span>) =&gt; <span class="hljs-title function_">showToast</span>(action.<span class="hljs-property">text</span>);\n    <span class="hljs-keyword">return</span> {\n      actions,\n      onSelect,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:show</td>\n<td>Whether to show Popover</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>actions</td>\n<td>Actions</td>\n<td><em>PopoverAction[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>actions-direction <code>v4.4.1</code></td>\n<td>Direction of actions, can be set to <code>horizontal</code></td>\n<td><em>PopoverActionsDirection</em></td>\n<td><code>vertical</code></td>\n</tr>\n<tr>\n<td>placement</td>\n<td>Placement</td>\n<td><em>PopoverPlacement</em></td>\n<td><code>bottom</code></td>\n</tr>\n<tr>\n<td>theme</td>\n<td>Theme, can be set to <code>dark</code></td>\n<td><em>PopoverTheme</em></td>\n<td><code>light</code></td>\n</tr>\n<tr>\n<td>trigger</td>\n<td>Trigger mode, can be set to <code>manual</code></td>\n<td><em>PopoverTrigger</em></td>\n<td><code>click</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Transition duration, unit second</td>\n<td><em>number | string</em></td>\n<td><code>0.3</code></td>\n</tr>\n<tr>\n<td>offset</td>\n<td>Distance to reference</td>\n<td><em>[number, number]</em></td>\n<td><code>[0, 8]</code></td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>Whether to show overlay</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>overlay-class</td>\n<td>Custom overlay class</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlay-style</td>\n<td>Custom overlay style</td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>show-arrow</td>\n<td>Whether to show arrow</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-click-action</td>\n<td>Whether to close when clicking action</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-click-outside</td>\n<td>Whether to close when clicking outside</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-click-overlay</td>\n<td>Whether to close when clicking overlay</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>Specifies a target element where Popover will be mounted</td>\n<td><em>string | Element</em></td>\n<td><code>body</code></td>\n</tr>\n<tr>\n<td>icon-prefix</td>\n<td>Icon className prefix</td>\n<td><em>string</em></td>\n<td><code>van-icon</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="data-structure-of-popoveraction" tabindex="-1">Data Structure of PopoverAction</h3>\n<table>\n<thead>\n<tr>\n<th>Key</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>Action Text</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>Icon</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>color</td>\n<td>Action Color</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Whether to be disabled</td>\n<td><em>boolean</em></td>\n</tr>\n<tr>\n<td>className</td>\n<td>className of the option</td>\n<td><em>string | Array | object</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>select</td>\n<td>Emitted when an action is clicked</td>\n<td><em>action: PopoverAction, index: number</em></td>\n</tr>\n<tr>\n<td>open</td>\n<td>Emitted when opening Popover</td>\n<td>-</td>\n</tr>\n<tr>\n<td>close</td>\n<td>Emitted when closing Popover</td>\n<td>-</td>\n</tr>\n<tr>\n<td>opened</td>\n<td>Emitted when Popover is opened</td>\n<td>-</td>\n</tr>\n<tr>\n<td>closed</td>\n<td>Emitted when Popover is closed</td>\n<td>-</td>\n</tr>\n<tr>\n<td>click-overlay</td>\n<td>Emitted when overlay is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>SlotProps</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Custom content</td>\n<td>-</td>\n</tr>\n<tr>\n<td>reference</td>\n<td>Reference Element</td>\n<td>-</td>\n</tr>\n<tr>\n<td>action</td>\n<td>Custom the content of option</td>\n<td><em>{ action: PopoverAction, index: number }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">PopoverProps</span>,\n  <span class="hljs-title class_">PopoverTheme</span>,\n  <span class="hljs-title class_">PopoverAction</span>,\n  <span class="hljs-title class_">PopoverActionsDirection</span>,\n  <span class="hljs-title class_">PopoverTrigger</span>,\n  <span class="hljs-title class_">PopoverPlacement</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-popover-arrow-size</td>\n<td><em>6px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popover-radius</td>\n<td><em>var(--van-radius-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popover-action-width</td>\n<td><em>128px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popover-action-height</td>\n<td><em>44px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popover-action-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popover-action-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popover-action-icon-size</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popover-horizontal-action-height</td>\n<td><em>34px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popover-horizontal-action-icon-size</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popover-light-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popover-light-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popover-light-action-disabled-text-color</td>\n<td><em>var(--van-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popover-dark-text-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popover-dark-background</td>\n<td><em>#4a4a4a</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-popover-dark-action-disabled-text-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);