/*! For license information please see 6683.592063c1.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["6683"],{7985:function(s,n,a){"use strict";a.r(n);var t=a("97700");let l=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Cascader \u7EA7\u8054\u9009\u62E9</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u7EA7\u8054\u9009\u62E9\u6846\uFF0C\u7528\u4E8E\u591A\u5C42\u7EA7\u6570\u636E\u7684\u9009\u62E9\uFF0C\u5178\u578B\u573A\u666F\u4E3A\u7701\u5E02\u533A\u9009\u62E9\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Cascader</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Cascader</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u7EA7\u8054\u9009\u62E9\u7EC4\u4EF6\u53EF\u4EE5\u642D\u914D Field \u548C Popup \u7EC4\u4EF6\u4F7F\u7528\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span>\n  <span class="hljs-attr">is-link</span>\n  <span class="hljs-attr">readonly</span>\n  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u533A&quot;</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>\n/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cascaderValue&quot;</span>\n    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>\n    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>\n    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>\n    @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> fieldValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> cascaderValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-comment">// \u9009\u9879\u5217\u8868\uFF0Cchildren \u4EE3\u8868\u5B50\u9009\u9879\uFF0C\u652F\u6301\u591A\u7EA7\u5D4C\u5957</span>\n    <span class="hljs-keyword">const</span> options = [\n      {\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6D59\u6C5F\u7701&#x27;</span>,\n        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;330000&#x27;</span>,\n        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u676D\u5DDE\u5E02&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;330100&#x27;</span> }],\n      },\n      {\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6C5F\u82CF\u7701&#x27;</span>,\n        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;320000&#x27;</span>,\n        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u5357\u4EAC\u5E02&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;320100&#x27;</span> }],\n      },\n    ];\n    <span class="hljs-comment">// \u5168\u90E8\u9009\u9879\u9009\u62E9\u5B8C\u6BD5\u540E\uFF0C\u4F1A\u89E6\u53D1 finish \u4E8B\u4EF6</span>\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFinish</span> = (<span class="hljs-params">{ selectedOptions }</span>) =&gt; {\n      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n      fieldValue.<span class="hljs-property">value</span> = selectedOptions.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> option.<span class="hljs-property">text</span>).<span class="hljs-title function_">join</span>(<span class="hljs-string">&#x27;/&#x27;</span>);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      options,\n      onFinish,\n      fieldValue,\n      cascaderValue,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zhong-guo-sheng-shi-qu-shu-ju" tabindex="-1">\u4E2D\u56FD\u7701\u5E02\u533A\u6570\u636E</h3>\n<p>Cascader \u7EC4\u4EF6\u5E38\u7528\u4E8E\u9009\u62E9\u7701\u5E02\u533A\uFF0CVant \u63D0\u4F9B\u4E86\u4E00\u4EFD\u4E2D\u56FD\u7701\u5E02\u533A\u6570\u636E\uFF0C\u4F60\u53EF\u4EE5\u5B89\u88C5 <a href="https://github.com/vant-ui/vant/tree/main/packages/vant-area-data" target="_blank">@vant/area-data</a> npm \u5305\u6765\u5F15\u5165\uFF1A</p>\n<pre><code class="language-bash"><span class="hljs-comment"># \u901A\u8FC7 npm</span>\nnpm i @vant/area-data\n\n<span class="hljs-comment"># \u901A\u8FC7 yarn</span>\nyarn add @vant/area-data\n\n<span class="hljs-comment"># \u901A\u8FC7 pnpm</span>\npnpm add @vant/area-data\n\n<span class="hljs-comment"># \u901A\u8FC7 Bun</span>\nbun add @vant/area-data\n</code></pre>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span>\n  <span class="hljs-attr">is-link</span>\n  <span class="hljs-attr">readonly</span>\n  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u533A&quot;</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>\n/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cascaderValue&quot;</span>\n    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>\n    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>\n    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>\n    @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useCascaderAreaData } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/area-data&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> fieldValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> cascaderValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> options = <span class="hljs-title function_">useCascaderAreaData</span>();\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFinish</span> = (<span class="hljs-params">{ selectedOptions }</span>) =&gt; {\n      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n      fieldValue.<span class="hljs-property">value</span> = selectedOptions.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> option.<span class="hljs-property">text</span>).<span class="hljs-title function_">join</span>(<span class="hljs-string">&#x27;/&#x27;</span>);\n    };\n    <span class="hljs-keyword">return</span> {\n      show,\n      options,\n      onFinish,\n      fieldValue,\n      cascaderValue,\n    };\n  },\n};\n</code></pre>\n<blockquote>\n<p>Tips: \u4E2D\u56FD\u7684\u884C\u653F\u533A\u5212\u6BCF\u5E74\u90FD\u4F1A\u6709\u53D8\u52A8\uFF0C\u5982\u679C\u53D1\u73B0\u7701\u5E02\u533A\u6570\u636E\u672A\u53CA\u65F6\u66F4\u65B0\uFF0C\u6B22\u8FCE\u63D0 Pull Request \u5E2E\u52A9\u6211\u4EEC\u66F4\u65B0\u3002\u4F60\u53EF\u4EE5\u5728<a href="http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/" target="_blank">\u300C\u56FD\u5BB6\u7EDF\u8BA1\u5C40 - \u5168\u56FD\u533A\u5212\u4EE3\u7801\u300D</a> \u548C<a href="https://www.mca.gov.cn/article/sj/xzqh/1980/" target="_blank">\u300C\u6C11\u653F\u90E8 - \u884C\u653F\u533A\u5212\u4EE3\u7801\u300D</a>\u4E0A\u67E5\u8BE2\u5230\u6700\u65B0\u6570\u636E\uFF0C\u8BF7\u6839\u636E\u5B98\u65B9\u6570\u636E\u8FDB\u884C\u6838\u5B9E\u3002</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u989C\u8272</h3>\n<p>\u901A\u8FC7 <code>active-color</code> \u5C5E\u6027\u6765\u8BBE\u7F6E\u9009\u4E2D\u72B6\u6001\u7684\u9AD8\u4EAE\u989C\u8272\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cascaderValue&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>\n  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>\n  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>\n  @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="yi-bu-jia-zai-xuan-xiang" tabindex="-1">\u5F02\u6B65\u52A0\u8F7D\u9009\u9879</h3>\n<p>\u53EF\u4EE5\u76D1\u542C <code>change</code> \u4E8B\u4EF6\u5E76\u52A8\u6001\u8BBE\u7F6E <code>options</code>\uFF0C\u5B9E\u73B0\u5F02\u6B65\u52A0\u8F7D\u9009\u9879\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span>\n  <span class="hljs-attr">is-link</span>\n  <span class="hljs-attr">readonly</span>\n  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u533A&quot;</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>\n/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cascaderValue&quot;</span>\n    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>\n    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>\n    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>\n    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>\n    @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { closeToast, showLoadingToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> fieldValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> cascaderValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> options = <span class="hljs-title function_">ref</span>([\n      {\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6D59\u6C5F\u7701&#x27;</span>,\n        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;330000&#x27;</span>,\n        <span class="hljs-attr">children</span>: [],\n      },\n    ]);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">{ value }</span>) =&gt; {\n      <span class="hljs-keyword">if</span> (\n        value === options.<span class="hljs-property">value</span>[<span class="hljs-number">0</span>].<span class="hljs-property">value</span> &amp;&amp;\n        options.<span class="hljs-property">value</span>[<span class="hljs-number">0</span>].<span class="hljs-property">children</span>.<span class="hljs-property">length</span> === <span class="hljs-number">0</span>\n      ) {\n        <span class="hljs-comment">// \u6A21\u62DF\u6570\u636E\u8BF7\u6C42</span>\n        <span class="hljs-title function_">showLoadingToast</span>(<span class="hljs-string">&#x27;\u52A0\u8F7D\u4E2D...&#x27;</span>);\n        <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n          options.<span class="hljs-property">value</span>[<span class="hljs-number">0</span>].<span class="hljs-property">children</span> = [\n            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u676D\u5DDE\u5E02&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;330100&#x27;</span> },\n            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u5B81\u6CE2\u5E02&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;330200&#x27;</span> },\n          ];\n          <span class="hljs-title function_">closeToast</span>();\n        }, <span class="hljs-number">1000</span>);\n      }\n    };\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFinish</span> = (<span class="hljs-params">{ selectedOptions }</span>) =&gt; {\n      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n      fieldValue.<span class="hljs-property">value</span> = selectedOptions.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> option.<span class="hljs-property">text</span>).<span class="hljs-title function_">join</span>(<span class="hljs-string">&#x27;/&#x27;</span>);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      options,\n      onFinish,\n      fieldValue,\n      cascaderValue,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-zi-duan-ming" tabindex="-1">\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D</h3>\n<p>\u901A\u8FC7 <code>field-names</code> \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49 <code>options</code> \u91CC\u7684\u5B57\u6BB5\u540D\u79F0\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;code&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>\n  <span class="hljs-attr">:field-names</span>=<span class="hljs-string">&quot;fieldNames&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> code = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> fieldNames = {\n      <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;name&#x27;</span>,\n      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;code&#x27;</span>,\n      <span class="hljs-attr">children</span>: <span class="hljs-string">&#x27;items&#x27;</span>,\n    };\n    <span class="hljs-keyword">const</span> options = [\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u6D59\u6C5F\u7701&#x27;</span>,\n        <span class="hljs-attr">code</span>: <span class="hljs-string">&#x27;330000&#x27;</span>,\n        <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u676D\u5DDE\u5E02&#x27;</span>, <span class="hljs-attr">code</span>: <span class="hljs-string">&#x27;330100&#x27;</span> }],\n      },\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u6C5F\u82CF\u7701&#x27;</span>,\n        <span class="hljs-attr">code</span>: <span class="hljs-string">&#x27;320000&#x27;</span>,\n        <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u5357\u4EAC\u5E02&#x27;</span>, <span class="hljs-attr">code</span>: <span class="hljs-string">&#x27;320100&#x27;</span> }],\n      },\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      code,\n      options,\n      fieldNames,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-xuan-xiang-shang-fang-nei-rong" tabindex="-1">\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u5185\u5BB9</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;code&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">options-top</span>=<span class="hljs-string">&quot;{ tabIndex }&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;current-level&quot;</span>&gt;</span>\u5F53\u524D\u4E3A\u7B2C {{ tabIndex + 1 }} \u7EA7<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cascader</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.current-level</span> {\n    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;\n    <span class="hljs-attribute">padding</span>: <span class="hljs-number">16px</span> <span class="hljs-number">16px</span> <span class="hljs-number">0</span>;\n    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--van-gray-<span class="hljs-number">6</span>);\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> code = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> options = [\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u6D59\u6C5F\u7701&#x27;</span>,\n        <span class="hljs-attr">code</span>: <span class="hljs-string">&#x27;330000&#x27;</span>,\n        <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u676D\u5DDE\u5E02&#x27;</span>, <span class="hljs-attr">code</span>: <span class="hljs-string">&#x27;330100&#x27;</span> }],\n      },\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u6C5F\u82CF\u7701&#x27;</span>,\n        <span class="hljs-attr">code</span>: <span class="hljs-string">&#x27;320000&#x27;</span>,\n        <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u5357\u4EAC\u5E02&#x27;</span>, <span class="hljs-attr">code</span>: <span class="hljs-string">&#x27;320100&#x27;</span> }],\n      },\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      code,\n      options,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>\u9009\u4E2D\u9879\u7684\u503C</td>\n<td><em>string | number</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u9876\u90E8\u6807\u9898</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>options</td>\n<td>\u53EF\u9009\u9879\u6570\u636E\u6E90</td>\n<td><em>CascaderOption[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>\u672A\u9009\u4E2D\u65F6\u7684\u63D0\u793A\u6587\u6848</td>\n<td><em>string</em></td>\n<td><code>\u8BF7\u9009\u62E9</code></td>\n</tr>\n<tr>\n<td>active-color</td>\n<td>\u9009\u4E2D\u72B6\u6001\u7684\u9AD8\u4EAE\u989C\u8272</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>swipeable</td>\n<td>\u662F\u5426\u5F00\u542F\u624B\u52BF\u5DE6\u53F3\u6ED1\u52A8\u5207\u6362</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>closeable</td>\n<td>\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>show-header</td>\n<td>\u662F\u5426\u5C55\u793A\u6807\u9898\u680F</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-icon</td>\n<td>\u5173\u95ED\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td><code>cross</code></td>\n</tr>\n<tr>\n<td>field-names</td>\n<td>\u81EA\u5B9A\u4E49 <code>options</code> \u7ED3\u6784\u4E2D\u7684\u5B57\u6BB5</td>\n<td><em>CascaderFieldNames</em></td>\n<td><code>{ text: \'text\', value: \'value\', children: \'children\' }</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="cascaderoption-shu-ju-jie-gou" tabindex="-1">CascaderOption \u6570\u636E\u7ED3\u6784</h3>\n<p><code>options</code> \u5C5E\u6027\u662F\u4E00\u4E2A\u7531\u5BF9\u8C61\u6784\u6210\u7684\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u4E2A\u53EF\u9009\u9879\uFF0C\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EE5\u4E0B\u503C\uFF1A</p>\n<table>\n<thead>\n<tr>\n<th>\u952E\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>\u9009\u9879\u6587\u5B57\uFF08\u5FC5\u586B\uFF09</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>value</td>\n<td>\u9009\u9879\u5BF9\u5E94\u7684\u503C\uFF08\u5FC5\u586B\uFF09</td>\n<td><em>string | number</em></td>\n</tr>\n<tr>\n<td>color</td>\n<td>\u9009\u9879\u6587\u5B57\u989C\u8272</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>children</td>\n<td>\u5B50\u9009\u9879\u5217\u8868</td>\n<td><em>CascaderOption[]</em></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662F\u5426\u7981\u7528\u9009\u9879</td>\n<td><em>boolean</em></td>\n</tr>\n<tr>\n<td>className</td>\n<td>\u4E3A\u5BF9\u5E94\u5217\u6DFB\u52A0\u989D\u5916\u7684 class</td>\n<td><em>string | Array | object</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>\u9009\u4E2D\u9879\u53D8\u5316\u65F6\u89E6\u53D1</td>\n<td><em>{ value: string | number, selectedOptions: CascaderOption[], tabIndex: number }</em></td>\n</tr>\n<tr>\n<td>finish</td>\n<td>\u5168\u90E8\u9009\u9879\u9009\u62E9\u5B8C\u6210\u540E\u89E6\u53D1</td>\n<td><em>{ value: string | number, selectedOptions: CascaderOption[], tabIndex: number }</em></td>\n</tr>\n<tr>\n<td>close</td>\n<td>\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>click-tab</td>\n<td>\u70B9\u51FB\u6807\u7B7E\u65F6\u89E6\u53D1</td>\n<td><em>tabIndex: number, title: string</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>\u81EA\u5B9A\u4E49\u9876\u90E8\u6807\u9898</td>\n<td>-</td>\n</tr>\n<tr>\n<td>option</td>\n<td>\u81EA\u5B9A\u4E49\u9009\u9879\u6587\u5B57</td>\n<td><em>{ option: CascaderOption, selected: boolean }</em></td>\n</tr>\n<tr>\n<td>options-top</td>\n<td>\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u7684\u5185\u5BB9</td>\n<td><em>{ tabIndex: number }</em></td>\n</tr>\n<tr>\n<td>options-bottom</td>\n<td>\u81EA\u5B9A\u4E49\u9009\u9879\u4E0B\u65B9\u7684\u5185\u5BB9</td>\n<td><em>{ tabIndex: number }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CascaderProps</span>, <span class="hljs-title class_">CascaderOption</span>, <span class="hljs-title class_">CascaderFieldNames</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-cascader-header-height</td>\n<td><em>48px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cascader-header-padding</td>\n<td><em>0 var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cascader-title-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cascader-title-line-height</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cascader-close-icon-size</td>\n<td><em>22px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cascader-close-icon-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cascader-selected-icon-size</td>\n<td><em>18px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cascader-tabs-height</td>\n<td><em>48px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cascader-active-color</td>\n<td><em>var(--van-danger-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cascader-options-height</td>\n<td><em>384px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cascader-option-disabled-color</td>\n<td><em>var(--van-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cascader-tab-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cascader-unselected-tab-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);