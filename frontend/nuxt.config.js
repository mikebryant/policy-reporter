import theme from '@nuxt/content-theme-docs'
import highlightjs from 'highlight.js'

const config = theme({
  css: [
    'highlight.js/styles/vs2015.css',
    'assets/css/custom.css'
  ],
  docs: {
    primaryColor: '#E24F55'
  },
  content: {
    markdown: {
      highlighter(rawCode, lang) {
        const highlightedCode = highlightjs.highlight(rawCode, { language: lang }).value

        return `<pre class="highlight-pre-container"><code class="language-${lang} hljs">${highlightedCode}</code></pre>`
      }
    }
  },
  router: {
    base: process.env.NODE_ENV === 'production' ? '/policy-reporter/' : ''
  },
  generate: {
    dir: '../docs'
  },
  hooks: {
    "vue-renderer:ssr:templateParams": function (params) {
      params.HEAD = params.HEAD.replace('<base href="/policy-reporter/">', "");
    }
  }
})

config.buildModules = config.buildModules.filter(module => module !== '@nuxtjs/pwa')

export default config