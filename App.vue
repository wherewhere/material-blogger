<template>
  <div class="post-body">
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

    <section>
      <h2>按钮元素</h2>
      <div class="column-stack">
        <div class="row">
          <button type="button" class="elevated">提升按钮</button>
          <button type="button" class="filled">填充按钮</button>
          <button type="button" class="text">文本按钮</button>
        </div>
        <div class="row">
          <button type="button" class="elevated" disabled>提升按钮</button>
          <button type="button" class="filled" disabled>填充按钮</button>
          <button type="button" class="text" disabled>文本按钮</button>
        </div>
      </div>
    </section>

    <section>
      <h2>表单元素</h2>
      <form class="column-stack">
        <div class="row">
          <label class="label">
            <span>文本</span>
            <input type="text" name="text" placeholder="text">
          </label>
          <label class="label">
            <span>密码</span>
            <input type="password" name="password">
          </label>
          <label class="label">
            <span>电子邮件</span>
            <input type="email" name="email">
          </label>
          <label class="label">
            <span>URL</span>
            <input type="url" name="url">
          </label>
          <label class="label">
            <span>电话</span>
            <input type="tel" name="tel">
          </label>
          <label class="label">
            <span>搜索</span>
            <input type="search" name="search">
          </label>
          <label class="label">
            <span>数字</span>
            <input type="number" name="number" value="5">
          </label>
          <label class="label">
            <span>颜色</span>
            <input type="color" name="color" value="#ff0000">
          </label>
          <label class="label">
            <span>日期</span>
            <input type="date" name="date">
          </label>
          <label class="label">
            <span>时间</span>
            <input type="time" name="time">
          </label>
          <label class="label">
            <span>月份</span>
            <input type="month" name="month">
          </label>
          <label class="label">
            <span>周</span>
            <input type="week" name="week">
          </label>
          <label class="label">
            <span>文件</span>
            <input type="file" name="file">
          </label>
          <label class="label">
            <span>隐藏</span>
            <input type="hidden" name="hidden" value="secret">
          </label>
        </div>
        <fieldset>
          <legend>选择控件</legend>
          <div class="column">
            <div class="row">
              <label><input type="checkbox" name="check" checked> 复选框</label>
              <label><input type="radio" name="radio" checked> 单选 1</label>
              <label><input type="radio" name="radio"> 单选 2</label>
            </div>
            <div class="row">
              <label class="label">
                <span>下拉</span>
                <select>
                  <option>选项 A</option>
                  <option>选项 B</option>
                </select>
              </label>
              <label class="label">
                <span>多行</span>
                <textarea rows="3">示例文本</textarea>
              </label>
            </div>
          </div>
        </fieldset>
        <div class="row">
          <button type="submit">提交</button>
          <button type="reset">重置</button>
          <button type="button">按钮</button>
        </div>
      </form>
    </section>

    <section>
      <h2>新语义与交互</h2>
      <div class="column-stack">
        <details>
          <summary>详细/摘要（点击展开）</summary>
          <p>展开内容示例。</p>
        </details>
        <dialog ref="dlg">
          <div class="column">
            这是一个对话框。
            <button @click="() => dlg!.close()">关闭</button>
          </div>
        </dialog>
        <div>
          <button @click="() => dlg!.showModal()">打开对话框</button>
        </div>
        <div class="row">
          <permission type="camera"></permission>
          <permission type="microphone"></permission>
        </div>
      </div>
    </section>

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

    <component is="style">
      section .row {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      }

      section .column {
      display: flex;
      flex-direction: column;
      gap: 16px;
      flex-wrap: wrap;
      }

      section .column-stack {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
      }

      section .label {
      display: flex;
      flex-direction: column;
      }

      section .label span {
      font-size: 0.75rem;
      }
    </component>
  </div>
</template>

<script lang="ts" setup>
import "./index.scss";
import { useTemplateRef } from "vue";
import { useSeoMeta } from "@unhead/vue";
import { name, description, keywords } from "./package.json";

const author = "wherewhere";
useSeoMeta({
  // Basic SEO
  title: name,
  description,
  author: author,
  keywords: keywords.join(", "),

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

const dlg = useTemplateRef("dlg");
</script>