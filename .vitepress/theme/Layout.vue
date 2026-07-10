<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <div v-if="frontmatter.created" class="article-meta">
        <span class="meta-label">创建于</span>
        <span class="meta-value">{{ frontmatter.created }}</span>
        <template v-if="frontmatter.updated && frontmatter.updated !== frontmatter.created">
          <span class="meta-sep">|</span>
          <span class="meta-label">更新于</span>
          <span class="meta-value">{{ frontmatter.updated }}</span>
        </template>
      </div>
    </template>
  </Layout>
</template>

<style>
.article-meta {
  font-size: 0.82em;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5em;
  padding-bottom: 0.75em;
  border-bottom: 1px solid var(--vp-c-divider);
}
.article-meta .meta-label {
  margin-right: 0.3em;
}
.article-meta .meta-value {
  font-weight: 500;
}
.article-meta .meta-sep {
  margin: 0 0.6em;
  opacity: 0.4;
}
</style>
