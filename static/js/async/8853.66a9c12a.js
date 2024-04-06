/*! For license information please see 8853.66a9c12a.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["8853"],{59620:function(s,a,n){"use strict";n.r(a);var t=n("97700");let l=["innerHTML"];a.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Checkbox</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>A group of options for multiple choices.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Checkbox</span>, <span class="hljs-title class_">CheckboxGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Checkbox</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CheckboxGroup</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>Checkbox<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">return</span> {\n      checked,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Checkbox<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-shape" tabindex="-1">Custom Shape</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>\u590D\u9009\u6846 a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>\u590D\u9009\u6846 b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;a&#x27;</span>, <span class="hljs-string">&#x27;b&#x27;</span>]);\n    <span class="hljs-keyword">return</span> { checked };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">checked-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>Checkbox<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-icon-size" tabindex="-1">Custom Icon Size</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;24px&quot;</span>&gt;</span>Checkbox<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-icon" tabindex="-1">Custom Icon</h3>\n<p>Use icon slot to custom icon.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>\n  customize icon\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;img-icon&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;props.checked ? activeIcon : inactiveIcon&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.img-icon</span> {\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">20px</span>;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">return</span> {\n      checked,\n      <span class="hljs-attr">activeIcon</span>:\n        <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png&#x27;</span>,\n      <span class="hljs-attr">inactiveIcon</span>:\n        <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png&#x27;</span>,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="left-label" tabindex="-1">Left Label</h3>\n<p>Set <code>label-position</code> prop to <code>\'left\'</code> to adjust the label position to the left of the Checkbox.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">label-position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>Checkbox<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="disable-label-click" tabindex="-1">Disable Label Click</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">label-disabled</span>&gt;</span>Checkbox<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="checkbox-group" tabindex="-1">Checkbox Group</h3>\n<p>When Checkboxes are inside a CheckboxGroup, the checked checkboxes\'s name is an array and bound with CheckboxGroup by v-model.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>Checkbox a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>Checkbox b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;a&#x27;</span>, <span class="hljs-string">&#x27;b&#x27;</span>]);\n    <span class="hljs-keyword">return</span> { checked };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="horizontal" tabindex="-1">Horizontal</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>Checkbox a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>Checkbox b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([]);\n    <span class="hljs-keyword">return</span> { checked };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="maximum-amount-of-checked-options" tabindex="-1">Maximum amount of checked options</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>Checkbox a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>Checkbox b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>Checkbox c<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="toggle-all" tabindex="-1">Toggle All</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;checkboxGroup&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>Checkbox a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>Checkbox b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>Checkbox c<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;checkAll&quot;</span>&gt;</span>Check All<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleAll&quot;</span>&gt;</span>Toggle All<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([]);\n    <span class="hljs-keyword">const</span> checkboxGroup = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">checkAll</span> = (<span class="hljs-params"></span>) =&gt; {\n      checkboxGroup.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">true</span>);\n    }\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggleAll</span> = (<span class="hljs-params"></span>) =&gt; {\n      checkboxGroup.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>();\n    },\n\n    <span class="hljs-keyword">return</span> {\n      checked,\n      checkAll,\n      toggleAll,\n      checkboxGroup,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="inside-a-cell" tabindex="-1">Inside a Cell</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span>\n      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in list&quot;</span>\n      <span class="hljs-attr">clickable</span>\n      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>\n      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;`Checkbox ${item}`&quot;</span>\n      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggle(index)&quot;</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span>\n          <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;item&quot;</span>\n          <span class="hljs-attr">:ref</span>=<span class="hljs-string">&quot;el =&gt; checkboxRefs[index] = el&quot;</span>\n          @<span class="hljs-attr">click.stop</span>\n        /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, onBeforeUpdate } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([]);\n    <span class="hljs-keyword">const</span> checkboxRefs = <span class="hljs-title function_">ref</span>([]);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggle</span> = (<span class="hljs-params">index</span>) =&gt; {\n      checkboxRefs.<span class="hljs-property">value</span>[index].<span class="hljs-title function_">toggle</span>();\n    };\n\n    <span class="hljs-title function_">onBeforeUpdate</span>(<span class="hljs-function">() =&gt;</span> {\n      checkboxRefs.<span class="hljs-property">value</span> = [];\n    });\n\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">list</span>: [<span class="hljs-string">&#x27;a&#x27;</span>, <span class="hljs-string">&#x27;b&#x27;</span>],\n      toggle,\n      checked,\n      checkboxRefs,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="indeterminate" tabindex="-1">indeterminate</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;isCheckAll&quot;</span>\n  <span class="hljs-attr">:indeterminate</span>=<span class="hljs-string">&quot;isIndeterminate&quot;</span>\n  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;checkAllChange&quot;</span>\n&gt;</span>\n  Check All\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkedResult&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;checkedResultChange&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>\n    Checkbox {{ item }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> list = [<span class="hljs-string">&#x27;a&#x27;</span>, <span class="hljs-string">&#x27;b&#x27;</span>, <span class="hljs-string">&#x27;c&#x27;</span>, <span class="hljs-string">&#x27;d&#x27;</span>]\n\n    <span class="hljs-keyword">const</span> isCheckAll = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> checkedResult = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;a&#x27;</span>, <span class="hljs-string">&#x27;b&#x27;</span>, <span class="hljs-string">&#x27;d&#x27;</span>]);\n    <span class="hljs-keyword">const</span> isIndeterminate = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">checkAllChange</span> = (<span class="hljs-params">val: boolean</span>) =&gt; {\n      checkedResult.<span class="hljs-property">value</span> = val ? list : []\n      isIndeterminate.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>\n    }\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">checkedResultChange</span> = (<span class="hljs-params">value: string[]</span>) =&gt; {\n      <span class="hljs-keyword">const</span> checkedCount = value.<span class="hljs-property">length</span>\n      isCheckAll.<span class="hljs-property">value</span> = checkedCount === list.<span class="hljs-property">length</span>\n      isIndeterminate.<span class="hljs-property">value</span> = checkedCount &gt; <span class="hljs-number">0</span> &amp;&amp; checkedCount &lt; list.<span class="hljs-property">length</span>\n    }\n\n    <span class="hljs-keyword">return</span> {\n      list,\n      isCheckAll,\n      checkedResult,\n      checkAllChange,\n      isIndeterminate,\n      checkedResultChange\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="checkbox-props" tabindex="-1">Checkbox Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>Check status</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>name</td>\n<td>Checkbox name, usually a unique string or number</td>\n<td><em>any</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>shape</td>\n<td>Can be set to <code>square</code></td>\n<td><em>string</em></td>\n<td><code>round</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Disable checkbox</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>label-disabled</td>\n<td>Whether to disable label click</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>label-position</td>\n<td>Can be set to <code>left</code></td>\n<td><em>string</em></td>\n<td><code>right</code></td>\n</tr>\n<tr>\n<td>icon-size</td>\n<td>Icon size</td>\n<td><em>number | string</em></td>\n<td><code>20px</code></td>\n</tr>\n<tr>\n<td>checked-color</td>\n<td>Checked color</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>bind-group</td>\n<td>Whether to bind with CheckboxGroup</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>indeterminate</td>\n<td>Whether indeterminate status</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="checkboxgroup-props" tabindex="-1">CheckboxGroup Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>Names of all checked checkboxes</td>\n<td><em>any[]</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Whether to disable all checkboxes</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>max</td>\n<td>Maximum amount of checked options</td>\n<td><em>number | string</em></td>\n<td><code>0</code>(Unlimited)</td>\n</tr>\n<tr>\n<td>direction</td>\n<td>Direction, can be set to <code>horizontal</code></td>\n<td><em>string</em></td>\n<td><code>vertical</code></td>\n</tr>\n<tr>\n<td>icon-size</td>\n<td>Icon size of all checkboxes</td>\n<td><em>number | string</em></td>\n<td><code>20px</code></td>\n</tr>\n<tr>\n<td>checked-color</td>\n<td>Checked color of all checkboxes</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>shape <code>v4.6.3</code></td>\n<td>Can be set to <code>square</code></td>\n<td><em>string</em></td>\n<td><code>round</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="checkbox-events" tabindex="-1">Checkbox Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Parameters</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>Emitted when value changed</td>\n<td><em>checked: boolean</em></td>\n</tr>\n<tr>\n<td>click</td>\n<td>Emitted when the checkbox is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Parameters</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>Emitted when value changed</td>\n<td><em>names: any[]</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="checkbox-slots" tabindex="-1">Checkbox Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>SlotProps</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Custom label</td>\n<td><em>{ checked: boolean, disabled: boolean }</em></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>Custom icon</td>\n<td><em>{ checked: boolean, disabled: boolean }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="checkboxgroup-methods" tabindex="-1">CheckboxGroup Methods</h3>\n<p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get CheckboxGroup instance and call instance methods.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Attribute</th>\n<th>Return value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toggleAll</td>\n<td>Toggle check status of all checkboxes</td>\n<td><em>options?: boolean | object</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="toggleall-usage" tabindex="-1">toggleAll Usage</h3>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> type { <span class="hljs-title class_">CheckboxGroupInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> checkboxGroupRef = ref&lt;<span class="hljs-title class_">CheckboxGroupInstance</span>&gt;();\n\n<span class="hljs-comment">// Toggle all</span>\ncheckboxGroup.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>();\n<span class="hljs-comment">// Select all</span>\ncheckboxGroup.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">true</span>);\n<span class="hljs-comment">// Unselect all</span>\ncheckboxGroup.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">false</span>);\n\n<span class="hljs-comment">// Toggle all, skip disabled</span>\ncheckboxGroup.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>({\n  <span class="hljs-attr">skipDisabled</span>: <span class="hljs-literal">true</span>,\n});\n<span class="hljs-comment">// Select all, skip disabled</span>\ncheckboxGroup.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>({\n  <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>,\n  <span class="hljs-attr">skipDisabled</span>: <span class="hljs-literal">true</span>,\n});\n</code></pre>\n</div><div class="van-doc-card"><h3 id="checkbox-methods" tabindex="-1">Checkbox Methods</h3>\n<p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get Checkbox instance and call instance methods.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Attribute</th>\n<th>Return value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toggle</td>\n<td>Toggle check status</td>\n<td><em>checked?: boolean</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">CheckboxProps</span>,\n  <span class="hljs-title class_">CheckboxShape</span>,\n  <span class="hljs-title class_">CheckboxInstance</span>,\n  <span class="hljs-title class_">CheckboxLabelPosition</span>,\n  <span class="hljs-title class_">CheckboxGroupProps</span>,\n  <span class="hljs-title class_">CheckboxGroupInstance</span>,\n  <span class="hljs-title class_">CheckboxGroupDirection</span>,\n  <span class="hljs-title class_">CheckboxGroupToggleAllOptions</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>CheckboxInstance</code> and <code>CheckboxGroupInstance</code> is the type of component instance:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CheckboxInstance</span>, <span class="hljs-title class_">CheckboxGroupInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> checkboxRef = ref&lt;<span class="hljs-title class_">CheckboxInstance</span>&gt;();\n<span class="hljs-keyword">const</span> checkboxGroupRef = ref&lt;<span class="hljs-title class_">CheckboxGroupInstance</span>&gt;();\n\ncheckboxRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggle</span>();\ncheckboxGroupRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>();\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-checkbox-size</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-checkbox-border-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-checkbox-duration</td>\n<td><em>var(--van-duration-fast)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-checkbox-label-margin</td>\n<td><em>var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-checkbox-label-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-checkbox-checked-icon-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-checkbox-disabled-icon-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-checkbox-disabled-label-color</td>\n<td><em>var(--van-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-checkbox-disabled-background</td>\n<td><em>var(--van-border-color)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);