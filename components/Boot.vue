<template>
  <div class="post-body">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@use "../styles/color" as *;

html {
  background-color: $md-sys-color-surface-container;
  color: $md-sys-color-on-surface;
}

body {
  margin: 0;
  padding: 16px;
}
</style>

<style lang="scss" scoped>
@use "../styles/base" as *;
@use "../styles/color" as *;

.post-body {
  padding: 16px;
  background: $md-sys-color-background;
  border-radius: $catalog-shape-xl;

  &:deep() {
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
  }
}
</style>