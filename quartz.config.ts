import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "❯ NAS",
    pageTitleSuffix: " | Cerebrum Secundum",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian", "**/*.{mp3,wav,flac,ogg,m4a,mp4,mkv,avi,mov,webm,gif,jpg,jpeg,png,svg,webp}"],
    defaultDateType: "created",
    generateSocialImages: true, // controls whether social media images are automatically generated for the content
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      // All the colors get overriden by the theme
      colors: {
        lightMode: {
          light: "", // page background
          lightgray: "", // borders, inline code highlight, search
          gray: "", // header line tables, unvisited graph node, graph links on hover
          darkgray: "", // body text 
          dark: "", // header text, icons, inline and block code text, Layout header (explorer, graph view, table of contents) text, note names in explorer text
          secondary: "", // internal/external links, current graph node 
          tertiary: "", // internal/external links hover, visited graph node
          highlight: " `", // internal link background, footnote number link highlight
          textHighlight: "", // markdown highlighted text          
        },
        darkMode: {
          light: "",
          lightgray: "",
          gray: "",
          darkgray: "",
          dark: "",
          secondary: "",
          tertiary: "",
          highlight: "",
          textHighlight: "",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
