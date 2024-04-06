/*! For license information please see 3718.84da07c6.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["3718"],{14606:function(s,n,a){"use strict";a.r(n);var t=a("97700");let l=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>DropdownMenu \u4E0B\u62C9\u83DC\u5355</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u5411\u4E0B\u5F39\u51FA\u7684\u83DC\u5355\u5217\u8868\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">DropdownMenu</span>, <span class="hljs-title class_">DropdownItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">DropdownMenu</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">DropdownItem</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value1 = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;a&#x27;</span>);\n    <span class="hljs-keyword">const</span> option1 = [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u5168\u90E8\u5546\u54C1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u65B0\u6B3E\u5546\u54C1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6D3B\u52A8\u5546\u54C1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> },\n    ];\n    <span class="hljs-keyword">const</span> option2 = [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u9ED8\u8BA4\u6392\u5E8F&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u597D\u8BC4\u6392\u5E8F&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;b&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u9500\u91CF\u6392\u5E8F&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;c&#x27;</span> },\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      value1,\n      value2,\n      option1,\n      option2,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-cai-dan-nei-rong" tabindex="-1">\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9</h3>\n<p>\u901A\u8FC7\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49 <code>DropdownItem</code> \u7684\u5185\u5BB9\uFF0C\u6B64\u65F6\u9700\u8981\u4F7F\u7528 <code>DropdownMenu</code> \u5B9E\u4F8B\u4E0A\u7684 <code>close</code> \u6216\u6307\u5B9A <code>DropdownItem</code> \u7684 <code>toggle</code> \u65B9\u6CD5\u624B\u52A8\u63A7\u5236\u83DC\u5355\u7684\u663E\u793A\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;menuRef&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7B5B\u9009&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;itemRef&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5305\u90AE&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch1&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u56E2\u8D2D&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch2&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding: 5px 16px;&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span> <span class="hljs-attr">round</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>&gt;</span>\n        \u786E\u8BA4\n      <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> menuRef = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);\n    <span class="hljs-keyword">const</span> itemRef = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> switch1 = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> switch2 = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> options = [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u5168\u90E8\u5546\u54C1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u65B0\u6B3E\u5546\u54C1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6D3B\u52A8\u5546\u54C1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> },\n    ];\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params"></span>) =&gt; {\n      itemRef.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggle</span>();\n      <span class="hljs-comment">// \u6216\u8005</span>\n      <span class="hljs-comment">// menuRef.value.close();</span>\n    };\n\n    <span class="hljs-keyword">return</span> {\n      menuRef,\n      itemRef,\n      value,\n      switch1,\n      switch2,\n      options,\n      onConfirm,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-xuan-zhong-tai-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u9009\u4E2D\u6001\u989C\u8272</h3>\n<p>\u901A\u8FC7 <code>active-color</code> \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u83DC\u5355\u6807\u9898\u548C\u9009\u9879\u7684\u9009\u4E2D\u6001\u989C\u8272\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="heng-xiang-gun-dong" tabindex="-1">\u6A2A\u5411\u6EDA\u52A8</h3>\n<p>\u901A\u8FC7 <code>swipe-threshold</code> \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6EDA\u52A8\u9608\u503C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">swipe-threshold</span>=<span class="hljs-string">&quot;4&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="xiang-shang-zhan-kai" tabindex="-1">\u5411\u4E0A\u5C55\u5F00</h3>\n<p>\u5C06 <code>direction</code> \u5C5E\u6027\u503C\u8BBE\u7F6E\u4E3A <code>up</code>\uFF0C\u83DC\u5355\u5373\u53EF\u5411\u4E0A\u5C55\u5F00\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;up&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jin-yong-cai-dan" tabindex="-1">\u7981\u7528\u83DC\u5355</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="dropdownmenu-props" tabindex="-1">DropdownMenu Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>active-color</td>\n<td>\u83DC\u5355\u6807\u9898\u548C\u9009\u9879\u7684\u9009\u4E2D\u6001\u989C\u8272</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td>\u83DC\u5355\u5C55\u5F00\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A<code>up</code></td>\n<td><em>string</em></td>\n<td><code>down</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>\u83DC\u5355\u680F z-index \u5C42\u7EA7</td>\n<td><em>number | string</em></td>\n<td><code>10</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2\uFF0C\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u7981\u7528\u52A8\u753B</td>\n<td><em>number | string</em></td>\n<td><code>0.2</code></td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-click-overlay</td>\n<td>\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED\u83DC\u5355</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-click-outside</td>\n<td>\u662F\u5426\u5728\u70B9\u51FB\u5916\u90E8\u5143\u7D20\u540E\u5173\u95ED\u83DC\u5355</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>swipe-threshold</td>\n<td>\u6EDA\u52A8\u9608\u503C\uFF0C\u9009\u9879\u6570\u91CF\u8D85\u8FC7\u9608\u503C\u4E14\u603B\u5BBD\u5EA6\u8D85\u8FC7\u83DC\u5355\u680F\u5BBD\u5EA6\u65F6\uFF0C\u53EF\u4EE5\u6A2A\u5411\u6EDA\u52A8</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>auto-locate</td>\n<td>\u5F53\u7956\u5148\u5143\u7D20\u8BBE\u7F6E\u4E86 transform \u65F6\uFF0C\u81EA\u52A8\u8C03\u6574\u4E0B\u62C9\u83DC\u5355\u7684\u4F4D\u7F6E</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="dropdownitem-props" tabindex="-1">DropdownItem Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>\u5F53\u524D\u9009\u4E2D\u9879\u5BF9\u5E94\u7684 value</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u83DC\u5355\u9879\u6807\u9898</td>\n<td><em>string</em></td>\n<td>\u5F53\u524D\u9009\u4E2D\u9879\u6587\u5B57</td>\n</tr>\n<tr>\n<td>options</td>\n<td>\u9009\u9879\u6570\u7EC4</td>\n<td><em>Option[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662F\u5426\u7981\u7528\u83DC\u5355</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>lazy-render</td>\n<td>\u662F\u5426\u5728\u9996\u6B21\u5C55\u5F00\u65F6\u624D\u6E32\u67D3\u83DC\u5355\u5185\u5BB9</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>title-class</td>\n<td>\u6807\u9898\u989D\u5916\u7C7B\u540D</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9\uFF0C\u7B49\u540C\u4E8E Teleport \u7EC4\u4EF6\u7684 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to \u5C5E\u6027</a></td>\n<td><em>string | Element</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="dropdownitem-events" tabindex="-1">DropdownItem Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>\u70B9\u51FB\u9009\u9879\u5BFC\u81F4 value \u53D8\u5316\u65F6\u89E6\u53D1</td>\n<td>value</td>\n</tr>\n<tr>\n<td>open</td>\n<td>\u6253\u5F00\u83DC\u5355\u680F\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>close</td>\n<td>\u5173\u95ED\u83DC\u5355\u680F\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>opened</td>\n<td>\u6253\u5F00\u83DC\u5355\u680F\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>closed</td>\n<td>\u5173\u95ED\u83DC\u5355\u680F\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="dropdownitem-slots" tabindex="-1">DropdownItem Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>\u83DC\u5355\u5185\u5BB9</td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u81EA\u5B9A\u4E49\u83DC\u5355\u9879\u6807\u9898</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="dropdownmenu-fang-fa" tabindex="-1">DropdownMenu \u65B9\u6CD5</h3>\n<p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 DropdownMenu \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u65B9\u6CD5\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n<th>\u8FD4\u56DE\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>close</td>\n<td>\u5173\u95ED\u6240\u6709\u83DC\u5355\u7684\u5C55\u793A\u72B6\u6001</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="dropdownitem-fang-fa" tabindex="-1">DropdownItem \u65B9\u6CD5</h3>\n<p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 DropdownItem \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u65B9\u6CD5\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n<th>\u8FD4\u56DE\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toggle</td>\n<td>\u5207\u6362\u83DC\u5355\u5C55\u793A\u72B6\u6001\uFF0C\u4F20 <code>true</code> \u4E3A\u663E\u793A\uFF0C<code>false</code> \u4E3A\u9690\u85CF\uFF0C\u4E0D\u4F20\u53C2\u4E3A\u53D6\u53CD</td>\n<td><em>show?: boolean</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">DropdownMenuProps</span>,\n  <span class="hljs-title class_">DropdownItemProps</span>,\n  <span class="hljs-title class_">DropdownItemOption</span>,\n  <span class="hljs-title class_">DropdownItemInstance</span>,\n  <span class="hljs-title class_">DropdownMenuInstance</span>,\n  <span class="hljs-title class_">DropdownMenuDirection</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>DropdownMenuInstance</code> \u548C <code>DropdownItemInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">DropdownMenuInstance</span>, <span class="hljs-title class_">DropdownItemInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> dropdownMenuRef = ref&lt;<span class="hljs-title class_">DropdownMenuInstance</span>&gt;();\n<span class="hljs-keyword">const</span> dropdownItemRef = ref&lt;<span class="hljs-title class_">DropdownItemInstance</span>&gt;();\n\ndropdownMenuRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">close</span>();\ndropdownItemRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggle</span>();\n</code></pre>\n</div><div class="van-doc-card"><h3 id="option-shu-ju-jie-gou" tabindex="-1">Option \u6570\u636E\u7ED3\u6784</h3>\n<table>\n<thead>\n<tr>\n<th>\u952E\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>\u6587\u5B57</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>value</td>\n<td>\u6807\u8BC6\u7B26</td>\n<td><em>number | string | boolean</em></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>\u5DE6\u4FA7\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-dropdown-menu-height</td>\n<td><em>48px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-shadow</td>\n<td><em>0 2px 12px fade(var(--van-gray-7), 12)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-title-font-size</td>\n<td><em>15px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-title-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-title-active-text-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-title-disabled-text-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-title-padding</td>\n<td><em>0 var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-title-line-height</td>\n<td><em>var(--van-line-height-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-option-active-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-content-max-height</td>\n<td><em>80%</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-item-z-index</td>\n<td><em>10</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2>\n<div class="van-doc-card"><h3 id="fu-yuan-su-she-zhi-transform-hou-xia-la-cai-dan-de-wei-zhi-cuo-wu" tabindex="-1">\u7236\u5143\u7D20\u8BBE\u7F6E transform \u540E\uFF0C\u4E0B\u62C9\u83DC\u5355\u7684\u4F4D\u7F6E\u9519\u8BEF\uFF1F</h3>\n<p>\u628A <code>DropdownMenu</code> \u5D4C\u5957\u5728 <code>Tabs</code> \u7B49\u7EC4\u4EF6\u5185\u90E8\u4F7F\u7528\u65F6\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230\u4E0B\u62C9\u83DC\u5355\u4F4D\u7F6E\u9519\u8BEF\u7684\u95EE\u9898\u3002\u8FD9\u662F\u56E0\u4E3A transform \u5143\u7D20\u5185\u90E8\u7684 fixed \u5B9A\u4F4D\u4F1A\u76F8\u5BF9\u4E8E\u8BE5\u5143\u7D20\u8FDB\u884C\u8BA1\u7B97\uFF0C\u800C\u4E0D\u662F\u76F8\u5BF9\u4E8E\u6574\u4E2A\u6587\u6863\uFF0C\u4ECE\u800C\u5BFC\u81F4\u4E0B\u62C9\u83DC\u5355\u7684\u5E03\u5C40\u5F02\u5E38\u3002</p>\n<p>\u5C06 <code>DropdownItem</code> \u7684 <code>teleport</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3A <code>body</code> \u5373\u53EF\u907F\u514D\u6B64\u95EE\u9898\uFF1A</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;body&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;body&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n<p>\u4E5F\u53EF\u4EE5\u5C06 <code>DropdownMenu</code> \u7684 <code>auto-locate</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3A <code>true</code>\uFF1A</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">auto-locate</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n</div>'},null,8,l))}}}]);