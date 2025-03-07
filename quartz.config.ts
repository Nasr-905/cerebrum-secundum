import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import 'dotenv/config';
const myGoatCounterWebID = process.env.GOATCOUNTER_WEB_ID || "";

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "❯ NAS",
    pageTitleSuffix: " | Nasrudeen Oladimeji",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "goatcounter",
      websiteId: myGoatCounterWebID,
    },
    locale: "en-US",
    baseUrl: "nasrudeen.com",
    ignorePatterns: ["Private", ".obsidian"],
    defaultDateType: "modified",
    generateSocialImages: true, // controls whether social media images are automatically generated for the content
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Grenze",
        body: "Radley",
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
      Plugin.Remark42({
        host: "https://remark.nasrudeen.com",
        site_id: "remark",
        // components: Array<String>,
        // max_shown_comments: number,
        // max_last_comments: number,
        // theme: 'light' | 'dark',
        // page_title: string, // Don't use this, it'll break your comment database. It's included for the sake of completeness.
        // locale: string, // Technically an enum, full list at https://remark42.com/docs/configuration/frontend/#locales
        show_email_subscription: true,
        show_rss_subscription: true,
        // simple_view: boolean,
        no_footer: true,
      }),
      Plugin.Staticrypt(),
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.TelescopicText(),
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
      Plugin.Image(),
      Plugin.Latex({ renderEngine: "mathjax" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.TimelinePages({
        limit: 100,
      }),
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TimelineFolderPage(),
      Plugin.TimelineTagPage(),
      // Plugin.TagPage(),
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
