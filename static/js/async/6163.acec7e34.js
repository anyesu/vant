/*! For license information please see 6163.acec7e34.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["6163"],{50191:function(n,s,a){"use strict";a.r(s);var t=a("97700");let e=["innerHTML"];s.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Area \u7701\u5E02\u533A\u9009\u62E9</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u7701\u5E02\u533A\u4E09\u7EA7\u8054\u52A8\u9009\u62E9\uFF0C\u901A\u5E38\u4E0E<a href="#/zh-CN/popup" target="_blank">\u5F39\u51FA\u5C42</a>\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Area</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Area</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u521D\u59CB\u5316\u7701\u5E02\u533A\u7EC4\u4EF6\u65F6\uFF0C\u9700\u8981\u901A\u8FC7 <code>area-list</code> \u5C5E\u6027\u4F20\u5165\u7701\u5E02\u533A\u6570\u636E\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-area</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="arealist-ge-shi" tabindex="-1">areaList \u683C\u5F0F</h3>\n<p>areaList \u4E3A\u5BF9\u8C61\u7ED3\u6784\uFF0C\u5305\u542B <code>province_list</code>\u3001<code>city_list</code>\u3001<code>county_list</code> \u4E09\u4E2A key\u3002</p>\n<p>\u6BCF\u9879\u4EE5\u5730\u533A\u7801\u4F5C\u4E3A key\uFF0C\u7701\u5E02\u533A\u540D\u5B57\u4F5C\u4E3A value\u3002\u5730\u533A\u7801\u4E3A 6 \u4F4D\u6570\u5B57\uFF0C\u524D\u4E24\u4F4D\u4EE3\u8868\u7701\u4EFD\uFF0C\u4E2D\u95F4\u4E24\u4F4D\u4EE3\u8868\u57CE\u5E02\uFF0C\u540E\u4E24\u4F4D\u4EE3\u8868\u533A\u53BF\uFF0C\u4EE5 0 \u8865\u8DB3 6 \u4F4D\u3002\u6BD4\u5982\u5317\u4EAC\u7684\u5730\u533A\u7801\u4E3A <code>11</code>\uFF0C\u4EE5 0 \u8865\u8DB3 6 \u4F4D\uFF0C\u4E3A <code>110000</code>\u3002</p>\n<p>\u793A\u4F8B\u6570\u636E\u5982\u4E0B\uFF1A</p>\n<pre><code class="language-js"><span class="hljs-keyword">const</span> areaList = {\n  <span class="hljs-attr">province_list</span>: {\n    <span class="hljs-number">110000</span>: <span class="hljs-string">&#x27;\u5317\u4EAC\u5E02&#x27;</span>,\n    <span class="hljs-number">120000</span>: <span class="hljs-string">&#x27;\u5929\u6D25\u5E02&#x27;</span>,\n  },\n  <span class="hljs-attr">city_list</span>: {\n    <span class="hljs-number">110100</span>: <span class="hljs-string">&#x27;\u5317\u4EAC\u5E02&#x27;</span>,\n    <span class="hljs-number">120100</span>: <span class="hljs-string">&#x27;\u5929\u6D25\u5E02&#x27;</span>,\n  },\n  <span class="hljs-attr">county_list</span>: {\n    <span class="hljs-number">110101</span>: <span class="hljs-string">&#x27;\u4E1C\u57CE\u533A&#x27;</span>,\n    <span class="hljs-number">110102</span>: <span class="hljs-string">&#x27;\u897F\u57CE\u533A&#x27;</span>,\n    <span class="hljs-comment">// ....</span>\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zhong-guo-sheng-shi-qu-shu-ju" tabindex="-1">\u4E2D\u56FD\u7701\u5E02\u533A\u6570\u636E</h3>\n<p>Vant \u63D0\u4F9B\u4E86\u4E00\u4EFD\u4E2D\u56FD\u7701\u5E02\u533A\u6570\u636E\uFF0C\u4F60\u53EF\u4EE5\u5B89\u88C5 <a href="https://github.com/vant-ui/vant/tree/main/packages/vant-area-data" target="_blank">@vant/area-data</a> npm \u5305\u6765\u5F15\u5165\uFF1A</p>\n<pre><code class="language-bash"><span class="hljs-comment"># \u901A\u8FC7 npm</span>\nnpm i @vant/area-data\n\n<span class="hljs-comment"># \u901A\u8FC7 yarn</span>\nyarn add @vant/area-data\n\n<span class="hljs-comment"># \u901A\u8FC7 pnpm</span>\npnpm add @vant/area-data\n\n<span class="hljs-comment"># \u901A\u8FC7 Bun</span>\nbun add @vant/area-data\n</code></pre>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { areaList } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/area-data&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">return</span> { areaList };\n  },\n};\n</code></pre>\n<blockquote>\n<p>Tips: \u4E2D\u56FD\u7684\u884C\u653F\u533A\u5212\u6BCF\u5E74\u90FD\u4F1A\u6709\u53D8\u52A8\uFF0C\u5982\u679C\u53D1\u73B0\u7701\u5E02\u533A\u6570\u636E\u672A\u53CA\u65F6\u66F4\u65B0\uFF0C\u6B22\u8FCE\u63D0 Pull Request \u5E2E\u52A9\u6211\u4EEC\u66F4\u65B0\u3002\u4F60\u53EF\u4EE5\u5728<a href="http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/" target="_blank">\u300C\u56FD\u5BB6\u7EDF\u8BA1\u5C40 - \u5168\u56FD\u533A\u5212\u4EE3\u7801\u300D</a> \u548C<a href="https://www.mca.gov.cn/article/sj/xzqh/1980/" target="_blank">\u300C\u6C11\u653F\u90E8 - \u884C\u653F\u533A\u5212\u4EE3\u7801\u300D</a>\u4E0A\u67E5\u8BE2\u5230\u6700\u65B0\u6570\u636E\uFF0C\u8BF7\u6839\u636E\u5B98\u65B9\u6570\u636E\u8FDB\u884C\u6838\u5B9E\u3002</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="kong-zhi-xuan-zhong-xiang" tabindex="-1">\u63A7\u5236\u9009\u4E2D\u9879</h3>\n<p>\u901A\u8FC7 <code>v-model</code> \u7ED1\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u5730\u533A\u7801\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-area</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;330302&#x27;</span>);\n    <span class="hljs-keyword">return</span> { value };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="pei-zhi-xian-shi-lie" tabindex="-1">\u914D\u7F6E\u663E\u793A\u5217</h3>\n<p>\u53EF\u4EE5\u901A\u8FC7 <code>columns-num</code> \u5C5E\u6027\u914D\u7F6E\u7701\u5E02\u533A\u663E\u793A\u7684\u5217\u6570\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u663E\u793A\u7701\u5E02\u533A\uFF0C\u5F53\u4F60\u8BBE\u7F6E\u4E3A <code>2</code>\uFF0C\u5219\u53EA\u4F1A\u663E\u793A\u7701\u5E02\u9009\u62E9\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-area</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span> <span class="hljs-attr">:columns-num</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="pei-zhi-lie-zhan-wei-ti-shi-wen-zi" tabindex="-1">\u914D\u7F6E\u5217\u5360\u4F4D\u63D0\u793A\u6587\u5B57</h3>\n<p>\u53EF\u4EE5\u901A\u8FC7 <code>columns-placeholder</code> \u5C5E\u6027\u914D\u7F6E\u6BCF\u4E00\u5217\u7684\u5360\u4F4D\u63D0\u793A\u6587\u5B57\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-area</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>\n  <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span>\n  <span class="hljs-attr">:columns-placeholder</span>=<span class="hljs-string">&quot;[&#x27;\u8BF7\u9009\u62E9&#x27;, &#x27;\u8BF7\u9009\u62E9&#x27;, &#x27;\u8BF7\u9009\u62E9&#x27;]&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>\u5F53\u524D\u9009\u4E2D\u9879\u5BF9\u5E94\u7684\u5730\u533A\u7801</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u9876\u90E8\u680F\u6807\u9898</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>confirm-button-text</td>\n<td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td>\n<td><em>string</em></td>\n<td><code>\u786E\u8BA4</code></td>\n</tr>\n<tr>\n<td>cancel-button-text</td>\n<td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td>\n<td><em>string</em></td>\n<td><code>\u53D6\u6D88</code></td>\n</tr>\n<tr>\n<td>area-list</td>\n<td>\u7701\u5E02\u533A\u6570\u636E\uFF0C\u683C\u5F0F\u89C1\u4E0B\u65B9</td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>columns-placeholder</td>\n<td>\u5217\u5360\u4F4D\u63D0\u793A\u6587\u5B57</td>\n<td><em>string[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>\u662F\u5426\u663E\u793A\u52A0\u8F7D\u72B6\u6001</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>\u662F\u5426\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u65E0\u6CD5\u5207\u6362\u9009\u9879</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>option-height</td>\n<td>\u9009\u9879\u9AD8\u5EA6\uFF0C\u652F\u6301 <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> \u5355\u4F4D\uFF0C\u9ED8\u8BA4 <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>44</code></td>\n</tr>\n<tr>\n<td>columns-num</td>\n<td>\u663E\u793A\u5217\u6570\uFF0C3-\u7701\u5E02\u533A\uFF0C2-\u7701\u5E02\uFF0C1-\u7701</td>\n<td><em>number | string</em></td>\n<td><code>3</code></td>\n</tr>\n<tr>\n<td>visible-option-num</td>\n<td>\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570</td>\n<td><em>number | string</em></td>\n<td><code>6</code></td>\n</tr>\n<tr>\n<td>swipe-duration</td>\n<td>\u5FEB\u901F\u6ED1\u52A8\u65F6\u60EF\u6027\u6EDA\u52A8\u7684\u65F6\u957F\uFF0C\u5355\u4F4D <code>ms</code></td>\n<td><em>number | string</em></td>\n<td><code>1000</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>confirm</td>\n<td>\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1</td>\n<td><em>{ selectedValues, selectedOptions, selectedIndexes }</em></td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td>\n<td><em>{ selectedValues, selectedOptions, selectedIndexes }</em></td>\n</tr>\n<tr>\n<td>change</td>\n<td>\u9009\u9879\u6539\u53D8\u65F6\u89E6\u53D1</td>\n<td><em>{ selectedValues, selectedOptions, selectedIndexes, columnIndex }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toolbar</td>\n<td>\u81EA\u5B9A\u4E49\u6574\u4E2A\u9876\u90E8\u680F\u7684\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>confirm</td>\n<td>\u81EA\u5B9A\u4E49\u786E\u8BA4\u6309\u94AE\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>columns-top</td>\n<td>\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>columns-bottom</td>\n<td>\u81EA\u5B9A\u4E49\u9009\u9879\u4E0B\u65B9\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3>\n<p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Area \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u65B9\u6CD5\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n<th>\u8FD4\u56DE\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>confirm</td>\n<td>\u505C\u6B62\u60EF\u6027\u6EDA\u52A8\u5E76\u89E6\u53D1 <code>confirm</code> \u4E8B\u4EF6</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>getSelectedOptions</td>\n<td>\u83B7\u53D6\u5F53\u524D\u9009\u4E2D\u7684\u9009\u9879</td>\n<td>-</td>\n<td><em>PickerOption[]</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AreaProps</span>, <span class="hljs-title class_">AreaList</span>, <span class="hljs-title class_">AreaInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>AreaInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AreaInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> areaRef = ref&lt;<span class="hljs-title class_">AreaInstance</span>&gt;();\n\nareaRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">confirm</span>();\n</code></pre>\n</div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2>\n<div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F</h3>\n<p>\u53C2\u89C1<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">\u684C\u9762\u7AEF\u9002\u914D</a>\u3002</p>\n</div>'},null,8,e))}}}]);