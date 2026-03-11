<template>
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
</template>

<script lang="ts" setup>
import "../styles/controls/index.scss";
import { useTemplateRef } from "vue";

const dlg = useTemplateRef("dlg");
</script>