/*! For license information please see 4729.c7620388.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4729"],{80136:function(s,n,a){"use strict";a.r(n);var t=a("97700");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Uploader</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to upload a local image or file to the server and display a preview image and upload progress during the upload process. The Uploader component does not currently contain the interface logic for uploading files to the server, this step needs to be implemented by the user.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Uploader</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Uploader</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">:after-read</span>=<span class="hljs-string">&quot;afterRead&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">afterRead</span> = (<span class="hljs-params">file</span>) =&gt; {\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(file);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      afterRead,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="preview-file" tabindex="-1">Preview File</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">multiple</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([\n      { <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg&#x27;</span> },\n      { <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://cloud-image&#x27;</span>, <span class="hljs-attr">isImage</span>: <span class="hljs-literal">true</span> },\n    ]);\n\n    <span class="hljs-keyword">return</span> {\n      fileList,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="upload-status" tabindex="-1">Upload Status</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">:after-read</span>=<span class="hljs-string">&quot;afterRead&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([\n      {\n        <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg&#x27;</span>,\n        <span class="hljs-attr">status</span>: <span class="hljs-string">&#x27;uploading&#x27;</span>,\n        <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;Uploading...&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg&#x27;</span>,\n        <span class="hljs-attr">status</span>: <span class="hljs-string">&#x27;failed&#x27;</span>,\n        <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;Failed&#x27;</span>,\n      },\n    ]);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">afterRead</span> = (<span class="hljs-params">file</span>) =&gt; {\n      file.<span class="hljs-property">status</span> = <span class="hljs-string">&#x27;uploading&#x27;</span>;\n      file.<span class="hljs-property">message</span> = <span class="hljs-string">&#x27;Uploading...&#x27;</span>;\n\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        file.<span class="hljs-property">status</span> = <span class="hljs-string">&#x27;failed&#x27;</span>;\n        file.<span class="hljs-property">message</span> = <span class="hljs-string">&#x27;Failed&#x27;</span>;\n      }, <span class="hljs-number">1000</span>);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      fileList,\n      afterRead,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="max-count" tabindex="-1">Max Count</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:max-count</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([]);\n\n    <span class="hljs-keyword">return</span> {\n      fileList,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="max-size" tabindex="-1">Max Size</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:max-size</span>=<span class="hljs-string">&quot;500 * 1024&quot;</span> @<span class="hljs-attr">oversize</span>=<span class="hljs-string">&quot;onOversize&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onOversize</span> = (<span class="hljs-params">file</span>) =&gt; {\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(file);\n      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;File size cannot exceed 500kb&#x27;</span>);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      onOversize,\n    };\n  },\n};\n</code></pre>\n<p>If you need to make different size limits for different types of files, you can pass a function to the <code>max-size</code> props.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:max-size</span>=<span class="hljs-string">&quot;isOverSize&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">isOverSize</span> = (<span class="hljs-params">file</span>) =&gt; {\n      <span class="hljs-keyword">const</span> maxSize = file.<span class="hljs-property">type</span> === <span class="hljs-string">&#x27;image/jpeg&#x27;</span> ? <span class="hljs-number">500</span> * <span class="hljs-number">1024</span> : <span class="hljs-number">1000</span> * <span class="hljs-number">1024</span>;\n      <span class="hljs-keyword">return</span> file.<span class="hljs-property">size</span> &gt;= maxSize;\n    };\n    <span class="hljs-keyword">return</span> {\n      isOverSize,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-upload-area" tabindex="-1">Custom Upload Area</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;plus&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Upload Image<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-uploader</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="preview-cover" tabindex="-1">Preview Cover</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">preview-cover</span>=<span class="hljs-string">&quot;{ file }&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;preview-cover van-ellipsis&quot;</span>&gt;</span>{{ file.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-uploader</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.preview-cover</span> {\n    <span class="hljs-attribute">position</span>: absolute;\n    <span class="hljs-attribute">bottom</span>: <span class="hljs-number">0</span>;\n    <span class="hljs-attribute">box-sizing</span>: border-box;\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;\n    <span class="hljs-attribute">padding</span>: <span class="hljs-number">4px</span>;\n    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;\n    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;\n    <span class="hljs-attribute">text-align</span>: center;\n    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.3</span>);\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="preview-size" tabindex="-1">Preview Size</h3>\n<p>Using <code>preview-size</code> prop to custom the size of preview image.</p>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- The default unit is px --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">preview-size</span>=<span class="hljs-string">&quot;60&quot;</span> /&gt;</span>\n<span class="hljs-comment">&lt;!-- Support other units, such as rem, vh, vw --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">preview-size</span>=<span class="hljs-string">&quot;5rem&quot;</span> /&gt;</span>\n</code></pre>\n<p>You can set the width and height separately.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">:preview-size</span>=<span class="hljs-string">&quot;[60, 40]&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="before-read" tabindex="-1">Before Read</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">:before-read</span>=<span class="hljs-string">&quot;beforeRead&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-comment">// \u8FD4\u56DE\u5E03\u5C14\u503C</span>\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeRead</span> = (<span class="hljs-params">file</span>) =&gt; {\n      <span class="hljs-keyword">if</span> (file.<span class="hljs-property">type</span> !== <span class="hljs-string">&#x27;image/jpeg&#x27;</span>) {\n        <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;Please upload an image in jpg format&#x27;</span>);\n        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;\n      }\n      <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;\n    };\n\n    <span class="hljs-comment">// \u8FD4\u56DE Promise</span>\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">asyncBeforeRead</span> = (<span class="hljs-params">file</span>) =&gt;\n      <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {\n        <span class="hljs-keyword">if</span> (file.<span class="hljs-property">type</span> !== <span class="hljs-string">&#x27;image/jpeg&#x27;</span>) {\n          <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;Please upload an image in jpg format&#x27;</span>);\n          <span class="hljs-title function_">reject</span>();\n        } <span class="hljs-keyword">else</span> {\n          <span class="hljs-keyword">const</span> img = <span class="hljs-keyword">new</span> <span class="hljs-title class_">File</span>([<span class="hljs-string">&#x27;foo&#x27;</span>], <span class="hljs-string">&#x27;bar.jpg&#x27;</span>, {\n            <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;image/jpeg&#x27;</span>,\n          });\n          <span class="hljs-title function_">resolve</span>(img);\n        }\n      });\n\n    <span class="hljs-keyword">return</span> {\n      beforeRead,\n      asyncBeforeRead,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="disable-uploader" tabindex="-1">Disable Uploader</h3>\n<p>Use <code>disabled</code> prop to disable uploader.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">disabled</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="customize-single-preview-image-style" tabindex="-1">Customize Single Preview Image Style</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">:deletable</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([\n      {\n        <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/sand.jpeg&#x27;</span>,\n        <span class="hljs-attr">deletable</span>: <span class="hljs-literal">true</span>,\n        <span class="hljs-attr">beforeDelete</span>: <span class="hljs-function">() =&gt;</span> {\n          <span class="hljs-title function_">showToast</span>(\n            <span class="hljs-string">&#x27;Customize the events and styles of a single preview image&#x27;</span>,\n          );\n        },\n      },\n      {\n        <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg&#x27;</span>,\n        <span class="hljs-attr">imageFit</span>: <span class="hljs-string">&#x27;contain&#x27;</span>,\n      },\n    ]);\n\n    <span class="hljs-keyword">return</span> { fileList };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="enable-reupload" tabindex="-1">Enable Reupload</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">reupload</span> <span class="hljs-attr">max-count</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([\n      { <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg&#x27;</span> },\n    ]);\n\n    <span class="hljs-keyword">return</span> { fileList };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>List of uploaded files</td>\n<td><em>FileListItem[]</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>accept</td>\n<td>Accepted <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers" target="_blank">file type</a></td>\n<td><em>string</em></td>\n<td><code>image/*</code></td>\n</tr>\n<tr>\n<td>name</td>\n<td>Input name, usually a unique string or number</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>preview-size</td>\n<td>Size of preview image</td>\n<td><em>number | string | Array</em></td>\n<td><code>80px</code></td>\n</tr>\n<tr>\n<td>preview-image</td>\n<td>Whether to show image preview</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>preview-full-image</td>\n<td>Whether to show full screen image preview when image is clicked</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>preview-options</td>\n<td>Options of full screen image preview, see <a href="#/en-US/image-preview" target="_blank">ImagePreview</a></td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>multiple</td>\n<td>Whether to enable multiple selection pictures</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Whether to disabled the upload</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>Whether to make upload area readonly</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>deletable</td>\n<td>Whether to show delete icon</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>reupload <code>v4.4.0</code></td>\n<td>Whether to enable reupload, if enabled, the image preview will be disabled</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-upload</td>\n<td>Whether to show upload area</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>lazy-load</td>\n<td>Whether to enable lazy load, should register <a href="#/en-US/lazyload" target="_blank">Lazyload</a> component</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>capture</td>\n<td>Capture, can be set to <code>camera</code></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>after-read</td>\n<td>Hook after reading the file</td>\n<td><em>Function</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>before-read</td>\n<td>Hook before reading the file, return false to stop reading the file, can return Promise</td>\n<td><em>Function</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>before-delete</td>\n<td>Hook before delete the file, return false to stop reading the file, can return Promise</td>\n<td><em>Function</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>max-size</td>\n<td>Max size of file</td>\n<td><em>number | string | (file: File) =&gt; boolean</em></td>\n<td><code>Infinity</code></td>\n</tr>\n<tr>\n<td>max-count</td>\n<td>Max count of image</td>\n<td><em>number | string</em></td>\n<td><code>Infinity</code></td>\n</tr>\n<tr>\n<td>result-type</td>\n<td>Type of file read result, can be set to <code>file</code> <code>text</code></td>\n<td><em>string</em></td>\n<td><code>dataUrl</code></td>\n</tr>\n<tr>\n<td>upload-text</td>\n<td>Upload text</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>image-fit</td>\n<td>Preview image fit mode</td>\n<td><em>string</em></td>\n<td><code>cover</code></td>\n</tr>\n<tr>\n<td>upload-icon</td>\n<td>Upload icon</td>\n<td><em>string</em></td>\n<td><code>photograph</code></td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>Tips: accept, capture and multiple are the attributes of the native input tag, there may be some compatibility issues under different systems and WebView.</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>oversize</td>\n<td>Emitted when file size over limit</td>\n<td>Same as after-read</td>\n</tr>\n<tr>\n<td>click-upload</td>\n<td>Emitted when click upload area</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>click-preview</td>\n<td>Emitted when preview image is clicked</td>\n<td>Same as after-read</td>\n</tr>\n<tr>\n<td>click-reupload</td>\n<td>Emitted when reupload image is clicked</td>\n<td>Same as after-read</td>\n</tr>\n<tr>\n<td>close-preview</td>\n<td>Emitted when the full screen image preview is closed</td>\n<td>-</td>\n</tr>\n<tr>\n<td>delete</td>\n<td>Emitted when preview file is deleted</td>\n<td>Same as after-read</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>SlotProps</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Custom upload area</td>\n<td>-</td>\n</tr>\n<tr>\n<td>preview-delete</td>\n<td>Custom delete icon</td>\n<td>-</td>\n</tr>\n<tr>\n<td>preview-cover</td>\n<td>Custom content that covers the image preview</td>\n<td><em>item: FileListItem</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="parameters-of-before-read-after-read-before-delete" tabindex="-1">Parameters of before-read\u3001after-read\u3001before-delete</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>file</td>\n<td>File object</td>\n<td><em>object</em></td>\n</tr>\n<tr>\n<td>detail</td>\n<td>Detail info, contains name and index</td>\n<td><em>object</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="resulttype" tabindex="-1">ResultType</h3>\n<table>\n<thead>\n<tr>\n<th>Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>file</td>\n<td>Result contains File object</td>\n</tr>\n<tr>\n<td>text</td>\n<td>Result contains File object and text content</td>\n</tr>\n<tr>\n<td>dataUrl</td>\n<td>Result contains File object and base64 content</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3>\n<p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get Uploader instance and call instance methods.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Attribute</th>\n<th>Return value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>closeImagePreview</td>\n<td>Close full screen image preview</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>chooseFile</td>\n<td>Trigger choosing files, works with the user action context only because of browser security</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">UploaderProps</span>,\n  <span class="hljs-title class_">UploaderInstance</span>,\n  <span class="hljs-title class_">UploaderResultType</span>,\n  <span class="hljs-title class_">UploaderFileListItem</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>UploaderInstance</code> is the type of component instance:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">UploaderInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> uploaderRef = ref&lt;<span class="hljs-title class_">UploaderInstance</span>&gt;();\n\nuploaderRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">chooseFile</span>();\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-uploader-size</td>\n<td><em>80px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-icon-size</td>\n<td><em>24px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-icon-color</td>\n<td><em>var(--van-gray-4)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-text-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-text-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-upload-background</td>\n<td><em>var(--van-gray-1)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-upload-active-color</td>\n<td><em>var(--van-active-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-delete-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-delete-icon-size</td>\n<td><em>14px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-delete-background</td>\n<td><em>rgba(0, 0, 0, 0.7)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-file-background</td>\n<td><em>var(--van-background)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-file-icon-size</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-file-icon-color</td>\n<td><em>var(--van-gray-7)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-file-name-padding</td>\n<td><em>0 var(--van-padding-base)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-file-name-margin-top</td>\n<td><em>var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-file-name-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-file-name-text-color</td>\n<td><em>var(--van-gray-7)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-mask-text-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-mask-background</td>\n<td><em>fade(var(--van-gray-8), 88%)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-mask-icon-size</td>\n<td><em>22px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-mask-message-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-mask-message-line-height</td>\n<td><em>var(--van-line-height-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-loading-icon-size</td>\n<td><em>22px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-loading-icon-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-disabled-opacity</td>\n<td><em>var(--van-disabled-opacity)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-uploader-border-radius</td>\n<td><em>0px</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="faq" tabindex="-1">FAQ</h2>\n<div class="van-doc-card"><h3 id="how-do-i-know-if-the-user-has-granted-camera-permission" tabindex="-1">How do I know if the user has granted camera permission?</h3>\n<p>When uploading an image, if the user has not granted camera permission to the current app, the Uploader component will not work.</p>\n<p>You can determine if camera permission has been granted by using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia" target="_blank">getUserMedia</a> method provided by the browser (please note that the <code>getUserMedia</code> method cannot be used in iOS 10).</p>\n<p>Here is a simplified example:</p>\n<pre><code class="language-ts">navigator.<span class="hljs-property">mediaDevices</span>\n  .<span class="hljs-title function_">getUserMedia</span>({ <span class="hljs-attr">video</span>: <span class="hljs-literal">true</span> })\n  .<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">stream</span>) =&gt;</span> {\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(stream);\n  })\n  .<span class="hljs-title function_">catch</span>(<span class="hljs-function">(<span class="hljs-params">err</span>) =&gt;</span> {\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(err);\n  });\n</code></pre>\n</div>'},null,8,e))}}}]);