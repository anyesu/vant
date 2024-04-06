/*! For license information please see 2357.d5a155f6.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["2357"],{96188:function(s,a,n){"use strict";n.r(a);var l=n("97700");let t=["innerHTML"];a.default={setup:()=>({html:""}),render:()=>((0,l.openBlock)(),(0,l.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>PickerGroup \u9009\u62E9\u5668\u7EC4</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u7528\u4E8E\u7ED3\u5408\u591A\u4E2A Picker \u9009\u62E9\u5668\u7EC4\u4EF6\uFF0C\u5728\u4E00\u6B21\u4EA4\u4E92\u4E2D\u5B8C\u6210\u591A\u4E2A\u503C\u7684\u9009\u62E9\u3002</p>\n<p>PickerGroup \u4E2D\u53EF\u4EE5\u653E\u7F6E\u4EE5\u4E0B\u7EC4\u4EF6\uFF1A</p>\n<ul>\n<li><a href="#/zh-CN/picker" target="_blank">Picker</a></li>\n<li><a href="#/zh-CN/area" target="_blank">Area</a></li>\n<li><a href="#/zh-CN/date-picker" target="_blank">DatePicker</a></li>\n<li><a href="#/zh-CN/time-picker" target="_blank">TimePicker</a></li>\n<li>\u5176\u4ED6\u57FA\u4E8E Picker \u5C01\u88C5\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6</li>\n</ul>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PickerGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">PickerGroup</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="xuan-ze-ri-qi-shi-jian" tabindex="-1">\u9009\u62E9\u65E5\u671F\u65F6\u95F4</h3>\n<p>\u5728 <code>PickerGroup</code> \u7684\u9ED8\u8BA4\u63D2\u69FD\u4E2D\u653E\u7F6E\u4E00\u4E2A <code>DatePicker</code> \u7EC4\u4EF6\u548C\u4E00\u4E2A <code>TimePicker</code> \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u540C\u65F6\u9009\u62E9\u65E5\u671F\u548C\u65F6\u95F4\u7684\u4EA4\u4E92\u6548\u679C\u3002</p>\n<p><code>PickerGroup</code> \u4F1A\u4EE3\u66FF\u5B50\u7EC4\u4EF6\u6765\u6E32\u67D3\u7EDF\u4E00\u7684\u6807\u9898\u680F\uFF0C\u8FD9\u610F\u5473\u7740\u5B50\u7EC4\u4EF6\u4E0D\u4F1A\u6E32\u67D3\u5355\u72EC\u7684\u6807\u9898\u680F\uFF0C\u4E0E\u6807\u9898\u680F\u6709\u5173\u7684 props \u548C events \u9700\u8981\u8BBE\u7F6E\u5230 <code>PickerGroup</code> \u4E0A\uFF0C\u6BD4\u5982 <code>title</code> \u5C5E\u6027\u3001<code>confirm</code> \u4E8B\u4EF6\u3001<code>cancel</code> \u4E8B\u4EF6\u7B49\uFF0C\u800C\u5B50\u7EC4\u4EF6\u4E2D\u4E0E\u6807\u9898\u680F\u65E0\u5173\u7684\u5C5E\u6027\u548C\u4E8B\u4EF6\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9884\u7EA6\u65E5\u671F&quot;</span>\n  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#x27;\u9009\u62E9\u65E5\u671F&#x27;, &#x27;\u9009\u62E9\u65F6\u95F4&#x27;]&quot;</span>\n  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>\n  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-date-picker</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>\n    <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>\n    <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-picker-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> currentDate = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;2022&#x27;</span>, <span class="hljs-string">&#x27;06&#x27;</span>, <span class="hljs-string">&#x27;01&#x27;</span>]);\n    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;12&#x27;</span>, <span class="hljs-string">&#x27;00&#x27;</span>]);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params"></span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(\n        <span class="hljs-string">`<span class="hljs-subst">${currentDate.value.join(<span class="hljs-string">&#x27;/&#x27;</span>)}</span> <span class="hljs-subst">${currentTime.value.join(<span class="hljs-string">&#x27;:&#x27;</span>)}</span>`</span>,\n      );\n    };\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;cancel&#x27;</span>);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),\n      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1</span>),\n      currentDate,\n      currentTime,\n      onConfirm,\n      onCancel,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="xia-yi-bu-an-niu" tabindex="-1">\u4E0B\u4E00\u6B65\u6309\u94AE</h3>\n<p>\u90E8\u5206\u573A\u666F\u4E0B\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u7528\u6237\u80FD\u591F\u4F9D\u6B21\u9009\u62E9\u6240\u6709\u7684 Picker\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E PickerGroup \u7684 <code>next-step-text</code> \u5C5E\u6027\u3002\u5728\u8BBE\u7F6E <code>next-step-text</code> \u5C5E\u6027\u540E\uFF0C\u5982\u679C\u7528\u6237\u672A\u5207\u6362\u5230\u6700\u540E\u4E00\u4E2A\u6807\u7B7E\u9875\uFF0C\u90A3\u4E48\u53F3\u4E0A\u89D2\u7684\u6309\u94AE\u4F1A\u53D8\u6210\u300C\u4E0B\u4E00\u6B65\u300D\uFF0C\u70B9\u51FB\u540E\u81EA\u52A8\u5207\u6362\u5230\u4E0B\u4E00\u4E2A Picker\u3002\u5F53\u7528\u6237\u5207\u6362\u5230\u6700\u540E\u4E00\u4E2A\u6807\u7B7E\u9875\u65F6\uFF0C\u53F3\u4E0A\u89D2\u7684\u6309\u94AE\u4F1A\u53D8\u4E3A\u300C\u786E\u8BA4\u300D\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9884\u7EA6\u65E5\u671F&quot;</span>\n  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#x27;\u9009\u62E9\u65E5\u671F&#x27;, &#x27;\u9009\u62E9\u65F6\u95F4&#x27;]&quot;</span>\n  <span class="hljs-attr">next-step-text</span>=<span class="hljs-string">&quot;\u4E0B\u4E00\u6B65&quot;</span>\n  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>\n  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-date-picker</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>\n    <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>\n    <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-picker-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> currentDate = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;2022&#x27;</span>, <span class="hljs-string">&#x27;06&#x27;</span>, <span class="hljs-string">&#x27;01&#x27;</span>]);\n    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;12&#x27;</span>, <span class="hljs-string">&#x27;00&#x27;</span>]);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params"></span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(\n        <span class="hljs-string">`<span class="hljs-subst">${currentDate.value.join(<span class="hljs-string">&#x27;/&#x27;</span>)}</span> <span class="hljs-subst">${currentTime.value.join(<span class="hljs-string">&#x27;:&#x27;</span>)}</span>`</span>,\n      );\n    };\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;cancel&#x27;</span>);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),\n      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1</span>),\n      currentDate,\n      currentTime,\n      onConfirm,\n      onCancel,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="xuan-ze-ri-qi-fan-wei" tabindex="-1">\u9009\u62E9\u65E5\u671F\u8303\u56F4</h3>\n<p>\u5728 <code>PickerGroup</code> \u7684\u9ED8\u8BA4\u63D2\u69FD\u4E2D\u653E\u7F6E\u4E24\u4E2A <code>DatePicker</code> \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u9009\u62E9\u65E5\u671F\u8303\u56F4\u7684\u4EA4\u4E92\u6548\u679C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9884\u7EA6\u65E5\u671F&quot;</span>\n  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#x27;\u5F00\u59CB\u65E5\u671F&#x27;, &#x27;\u7ED3\u675F\u65E5\u671F&#x27;]&quot;</span>\n  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>\n  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-date-picker</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;startDate&quot;</span>\n    <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>\n    <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;endDate&quot;</span> <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span> <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-picker-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> startDate = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;2022&#x27;</span>, <span class="hljs-string">&#x27;06&#x27;</span>, <span class="hljs-string">&#x27;01&#x27;</span>]);\n    <span class="hljs-keyword">const</span> endDate = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;2023&#x27;</span>, <span class="hljs-string">&#x27;06&#x27;</span>, <span class="hljs-string">&#x27;01&#x27;</span>]);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params"></span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">`<span class="hljs-subst">${startDate.value.join(<span class="hljs-string">&#x27;/&#x27;</span>)}</span> <span class="hljs-subst">${endDate.value.join(<span class="hljs-string">&#x27;/&#x27;</span>)}</span>`</span>);\n    };\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;cancel&#x27;</span>);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),\n      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1</span>),\n      endDate,\n      startDate,\n      onConfirm,\n      onCancel,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="xuan-ze-shi-jian-fan-wei" tabindex="-1">\u9009\u62E9\u65F6\u95F4\u8303\u56F4</h3>\n<p>\u5728 <code>PickerGroup</code> \u7684\u9ED8\u8BA4\u63D2\u69FD\u4E2D\u653E\u7F6E\u4E24\u4E2A <code>TimePicker</code> \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u9009\u62E9\u65F6\u95F4\u8303\u56F4\u7684\u4EA4\u4E92\u6548\u679C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9884\u7EA6\u65F6\u95F4&quot;</span>\n  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#x27;\u5F00\u59CB\u65F6\u95F4&#x27;, &#x27;\u7ED3\u675F\u65F6\u95F4&#x27;]&quot;</span>\n  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>\n  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;startTime&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;endTime&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-picker-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> startTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;12&#x27;</span>, <span class="hljs-string">&#x27;00&#x27;</span>]);\n    <span class="hljs-keyword">const</span> endTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;12&#x27;</span>, <span class="hljs-string">&#x27;00&#x27;</span>]);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params"></span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">`<span class="hljs-subst">${startTime.value.join(<span class="hljs-string">&#x27;:&#x27;</span>)}</span> <span class="hljs-subst">${endTime.value.join(<span class="hljs-string">&#x27;:&#x27;</span>)}</span>`</span>);\n    };\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;cancel&#x27;</span>);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      endTime,\n      startTime,\n      onConfirm,\n      onCancel,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="shou-kong-mo-shi" tabindex="-1">\u53D7\u63A7\u6A21\u5F0F</h3>\n<p><code>PickerGroup</code> \u4E2D <code>tab</code> \u7684\u5207\u6362\u652F\u6301\u975E\u53D7\u63A7\u6A21\u5F0F\u548C\u53D7\u63A7\u6A21\u5F0F\uFF1A</p>\n<ul>\n<li>\u5F53\u672A\u7ED1\u5B9A <code>v-model:active-tab</code> \u65F6\uFF0CPickerGroup \u7EC4\u4EF6 <code>tab</code> \u7684\u5207\u6362\u5B8C\u5168\u7531\u7EC4\u4EF6\u81EA\u8EAB\u63A7\u5236\u3002</li>\n<li>\u5F53\u7ED1\u5B9A <code>v-model:active-tab</code> \u65F6\uFF0CPickerGroup \u652F\u6301\u53D7\u63A7\u6A21\u5F0F\uFF0C\u6B64\u65F6\u7EC4\u4EF6 <code>tab</code> \u7684\u5207\u6362\u540C\u65F6\u652F\u6301 <code>v-model:active-tab</code> \u7684\u503C\u548C\u7EC4\u4EF6\u672C\u8EAB\u63A7\u5236\u3002</li>\n</ul>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;setActiveTab&quot;</span>&gt;</span>\n  \u70B9\u51FB\u5207\u6362 tab\uFF0C\u5F53\u524D\u4E3A {{ activeTab }}\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>\n  <span class="hljs-attr">v-model:active-tab</span>=<span class="hljs-string">&quot;activeTab&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9884\u7EA6\u65E5\u671F&quot;</span>\n  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#x27;\u9009\u62E9\u65E5\u671F&#x27;, &#x27;\u9009\u62E9\u65F6\u95F4&#x27;]&quot;</span>\n  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>\n  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-date-picker</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>\n    <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>\n    <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-picker-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> activeTab = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> currentDate = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;2022&#x27;</span>, <span class="hljs-string">&#x27;06&#x27;</span>, <span class="hljs-string">&#x27;01&#x27;</span>]);\n    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;12&#x27;</span>, <span class="hljs-string">&#x27;00&#x27;</span>]);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">setActiveTab</span> = (<span class="hljs-params"></span>) =&gt; {\n      activeTab.<span class="hljs-property">value</span> = activeTab.<span class="hljs-property">value</span> ? <span class="hljs-number">0</span> : <span class="hljs-number">1</span>;\n    };\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params"></span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(\n        <span class="hljs-string">`<span class="hljs-subst">${currentDate.value.join(<span class="hljs-string">&#x27;/&#x27;</span>)}</span> <span class="hljs-subst">${currentTime.value.join(<span class="hljs-string">&#x27;:&#x27;</span>)}</span>`</span>,\n      );\n    };\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;cancel&#x27;</span>);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),\n      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1</span>),\n      activeTab,\n      currentDate,\n      currentTime,\n      setActiveTab,\n      onConfirm,\n      onCancel,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:active-tab <code>v4.3.2</code></td>\n<td>\u8BBE\u7F6E\u5F53\u524D\u9009\u4E2D\u7684\u6807\u7B7E</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>tabs</td>\n<td>\u8BBE\u7F6E\u6807\u7B7E\u9875\u7684\u6807\u9898</td>\n<td><em>string[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u9876\u90E8\u680F\u6807\u9898</td>\n<td><em>string</em></td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>next-step-text <code>v4.0.8</code></td>\n<td>\u4E0B\u4E00\u6B65\u6309\u94AE\u7684\u6587\u5B57</td>\n<td><em>string</em></td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>confirm-button-text</td>\n<td>\u786E\u8BA4\u6309\u94AE\u7684\u6587\u5B57</td>\n<td><em>string</em></td>\n<td><code>\u786E\u8BA4</code></td>\n</tr>\n<tr>\n<td>cancel-button-text</td>\n<td>\u53D6\u6D88\u6309\u94AE\u7684\u6587\u5B57</td>\n<td><em>string</em></td>\n<td><code>\u53D6\u6D88</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toolbar</td>\n<td>\u81EA\u5B9A\u4E49\u6574\u4E2A\u9876\u90E8\u680F\u7684\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>confirm</td>\n<td>\u81EA\u5B9A\u4E49\u786E\u8BA4\u6309\u94AE\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PickerGroupProps</span>, <span class="hljs-title class_">PickerGroupThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-picker-group-background</td>\n<td><em>--van-background-2</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,t))}}}]);