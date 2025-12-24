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
      <pre><code>const x = 42;
console.log(x);</code></pre>
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
      <h2>表单元素（包含所有 input 类型）</h2>
      <form>
        <div class="row">
          <label>文本<input type="text" name="text" placeholder="text"></label>
          <label>密码<input type="password" name="password"></label>
          <label>电子邮件<input type="email" name="email"></label>
          <label>URL<input type="url" name="url"></label>
          <label>电话<input type="tel" name="tel"></label>
          <label>搜索<input type="search" name="search"></label>
          <label>数字<input type="number" name="number" value="5"></label>
          <label>范围<input type="range" name="range" min="0" max="10"></label>
          <label>颜色<input type="color" name="color" value="#ff0000"></label>
          <label>日期<input type="date" name="date"></label>
          <label>时间<input type="time" name="time"></label>
          <label>月份<input type="month" name="month"></label>
          <label>周<input type="week" name="week"></label>
          <label>文件<input type="file" name="file"></label>
          <label>隐藏<input type="hidden" name="hidden" value="secret"></label>
        </div>
        <fieldset>
          <legend>选择控件</legend>
          <label><input type="checkbox" name="check" checked> 复选框</label>
          <label><input type="radio" name="radio" checked> 单选 1</label>
          <label><input type="radio" name="radio"> 单选 2</label>
          <label>下拉<select>
              <option>选项 A</option>
              <option>选项 B</option>
            </select></label>
          <label>多行<textarea rows="3">示例文本</textarea></label>
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
      <details>
        <summary>详细/摘要（点击展开）</summary>
        <p>展开内容示例。</p>
      </details>
      <dialog ref="dlg">
        这是一个对话框。
        <button ref="closeDlg" @click="() => dlg!.close()">关闭</button>
      </dialog>
      <p>
        <button @click="() => dlg!.showModal()">打开对话框</button>
      </p>
      <p>
        <permission type="camera"></permission>
        <permission type="microphone"></permission>
      </p>
    </section>

    <section>
      <h2>其他元素</h2>
      <hr>
      <address>联系信息：示例地址</address>
      <figure><img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg" alt="fig">
        <figcaption>图注</figcaption>
      </figure>
      <time datetime="2025-12-24">2025-12-24</time>
      <var>x</var>, <samp>输出示例</samp>, <dfn>定义术语</dfn>, <data value="123">123</data>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useTemplateRef } from 'vue';

const dlg = useTemplateRef("dlg");
</script>

<style lang="scss">
@use "./index";
</style>