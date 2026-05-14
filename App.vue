<template>
    <Boot>
      <h1>HTML 元素测试页</h1>

      <section>
        <h2>文本与语义</h2>
        <p>段落示例。包含 <strong>strong</strong>, <em>em</em>, <b>bold</b>, <i>italic</i>, <small>small</small>,
          <mark>mark</mark>, <del>deleted</del>, <ins>inserted</ins>.
        </p>
        <p>引用与代码：</p>
        <blockquote cite="https://example.com">这是一个块引用示例。</blockquote>
        <pre><code class="hljs language-js"><span class="hljs-keyword">const</span> x = <span class="hljs-number">42</span>;
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(x);</code></pre>
        <p>行内代码：<code>document.querySelector()</code>，键盘输入：<kbd>Ctrl</kbd>+<kbd>C</kbd></p>
        <p>缩写与引证：<abbr title="超文本标记语言">HTML</abbr>, <cite>引用来源</cite></p>
      </section>

      <section>
        <h2>标题与分级</h2>
        <h1>H1 标题</h1>
        <h2>H2 标题</h2>
        <h3>H3 标题</h3>
        <h4>H4 标题</h4>
        <h5>H5 标题</h5>
        <h6>H6 标题</h6>
      </section>

      <section>
        <h2>链接、图片与多媒体</h2>
        <p><a href="https://example.com" target="_blank" rel="noopener">外部链接示例</a></p>
        <p><img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/surfer-240-200.jpg" alt="占位图"
            width="240" height="200"></p>
        <p>音频与视频（静音自动播放示例）：</p>
        <audio controls src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"></audio>
        <video controls width="320"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"></video>
      </section>

      <section>
        <h2>列表与表格</h2>
        <div class="row">
          <ul>
            <li>无序项 1</li>
            <li>无序项 2
              <ol>
                <li>有序子项 a</li>
                <li>有序子项 b</li>
              </ol>
            </li>
            <li>无序项 3</li>
          </ul>
          <dl>
            <dt>术语</dt>
            <dd>定义描述</dd>
          </dl>
        </div>
        <table>
          <thead>
            <tr>
              <th>列 A</th>
              <th>列 B</th>
              <th>列 C</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>单元格 1</td>
              <td>单元格 2</td>
              <td>单元格 3</td>
            </tr>
            <tr>
              <td colspan="2">合并单元格</td>
              <td>单元格 6</td>
            </tr>
          </tbody>
        </table>
      </section>

      <Controls />

      <section>
        <h2>其他元素</h2>
        <address>联系信息：示例地址</address>
        <figure><img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg" alt="fig">
          <figcaption>图注</figcaption>
        </figure>
        <hr>
        <time datetime="2025-12-24">2025-12-24</time>,
        <var>x</var>, <samp>输出示例</samp>, <dfn>定义术语</dfn>, <data value="123">123</data>
      </section>
    </Boot>
</template>

<script lang="ts" setup>
import "./types";
import "./index.scss";
import { defineAsyncComponent } from "vue";
import { useSeoMeta } from "@unhead/vue";
import { useAnalytics } from "./helpers/analytics";
import { name, description, keywords } from "./package.json";

const Controls = defineAsyncComponent(() => import("./components/Controls.vue"));
const Boot = defineAsyncComponent(() => import("./components/Boot.vue"));

const author = "wherewhere";
useSeoMeta({
  // Basic SEO
  title: name,
  description,
  author: author,

  // Open Graph
  ogTitle: name,
  ogDescription: description,
  ogType: "website",
  ogLocale: "zh_CN",
  ogSiteName: name,

  // Twitter
  twitterCard: "summary",
  twitterSite: "@wherewhere7",

  // Product specific (structured data will be generated)
  articleAuthor: [author],
  articleTag: keywords
});
useAnalytics();
</script>