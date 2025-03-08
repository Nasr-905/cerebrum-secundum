import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import 'dotenv/config';
const myGoatCounterWebID = process.env.GOATCOUNTER_WEB_ID || "";

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "❯ NAS",
    pageTitleSuffix: " | NAS",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "goatcounter",
      websiteId: myGoatCounterWebID,
    },
    locale: "en-US",
    baseUrl: "nasrudeen.com",
    ignorePatterns: ["Private", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: {
      colorScheme: "darkMode",
      excludeRoot: false,
    },
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
        priority: ["frontmatter"],
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
      Plugin.Latex({
        renderEngine: "mathjax",
        // customMacros: {
        //   "\\RR": "\\mathbb{R}",
        //   "\\NN": "\\mathbb{N}",
        //   "\\ZZ": "\\mathbb{Z}",
        //   "\\QQ": "\\mathbb{Q}",
        //   "\\CC": "\\mathbb{C}",
        // },
        // mathJaxOptions: {
        //   tex: {
        //     packages: ['base'],        // extensions to use
        //     inlineMath: [              // start/end delimiter pairs for in-line math
        //       ['\\(', '\\)']
        //     ],
        //     displayMath: [             // start/end delimiter pairs for display math
        //       ['$$', '$$'],
        //       ['\\[', '\\]']
        //     ],
        //     processEscapes: true,      // use \$ to produce a literal dollar sign
        //     processEnvironments: true, // process \begin{xxx}...\end{xxx} outside math mode
        //     processRefs: true,         // process \ref{...} outside of math mode
        //     digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
        //                                // pattern for recognizing numbers
        //     tags: 'none',              // or 'ams' or 'all'
        //     tagSide: 'right',          // side for \tag macros
        //     tagIndent: '0.8em',        // amount to indent tags
        //     useLabelIds: true,         // use label name rather than tag for ids
        //     maxMacros: 10000,          // maximum number of macro substitutions per expression
        //     maxBuffer: 5 * 1024,       // maximum size for the internal TeX string (5K)
        //     baseURL:                   // URL for use with links to tags (when there is a <base> tag in effect)
        //        (document.getElementsByTagName('base').length === 0) ?
        //         '' : String(document.location).replace(/#.*$/, ''),
        //   },
        //   svg: {
        //     scale: 1,                      // global scaling factor for all expressions
        //     minScale: .5,                  // smallest scaling factor to use
        //     mtextInheritFont: false,       // true to make mtext elements use surrounding font
        //     merrorInheritFont: true,       // true to make merror text use surrounding font
        //     mathmlSpacing: false,          // true for MathML spacing rules, false for TeX rules
        //     skipAttributes: {},            // RFDa and other attributes NOT to copy to the output
        //     exFactor: .5,                  // default size of ex in em units
        //     displayAlign: 'center',        // default for indentalign when set to 'auto'
        //     displayIndent: '0',            // default for indentshift when set to 'auto'
        //     fontCache: 'local',            // or 'global' or 'none'
        //     localID: null,                 // ID to use for local font cache (for single equation processing)
        //     internalSpeechTitles: true,    // insert <title> tags with speech content
        //     titleID: 0                     // initial id number to use for aria-labeledby titles        
        //   },
        //   chtml: {
        //     scale: 1,                      // global scaling factor for all expressions
        //     minScale: .5,                  // smallest scaling factor to use
        //     mtextInheritFont: false,       // true to make mtext elements use surrounding font
        //     merrorInheritFont: true,       // true to make merror text use surrounding font
        //     mathmlSpacing: false,          // true for MathML spacing rules, false for TeX rules
        //     skipAttributes: {},            // RFDa and other attributes NOT to copy to the output
        //     exFactor: .5,                  // default size of ex in em units
        //     displayAlign: 'center',        // default for indentalign when set to 'auto'
        //     displayIndent: '0',            // default for indentshift when set to 'auto'
        //     matchFontHeight: true,         // true to match ex-height of surrounding font
        //     fontURL: '[mathjax]/components/output/chtml/fonts/woff-v2',   // The URL where the fonts are found
        //     adaptiveCSS: true              // true means only produce CSS that is used in the processed equations                    
        //   },
        // }
      }),
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
