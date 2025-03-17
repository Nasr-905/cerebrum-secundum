import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { FileNode } from "./quartz/components/ExplorerNode"
import { QuartzPluginData } from "./quartz/plugins/vfile"
import { SimpleSlug } from "./quartz/util/path"
const explorerFilterFn = (node: FileNode) => {
  return !node.file?.frontmatter?.tags?.includes("explorer-exclude") && node.name !== "tags";
};
const filterByDirectory = (directory: string) => (f: QuartzPluginData) => {
  if (typeof f.relativePath === "string") {
    return f.relativePath.startsWith(directory + "/");
  }
  return false;
};

const additionalFilter = (f: QuartzPluginData) => {
  // Add your custom filtering logic here
  // For example, filter out posts with a specific tag or title
  return !f.frontmatter?.tags?.includes("explorer-exclude");
};

const recentFilterFn = (f: QuartzPluginData) => {
  return filterByDirectory("Blog")(f) && f.frontmatter?.title !== "Blog" && additionalFilter(f);
};



// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
    footer: Component.Footer({
    links: {
      GitHub: "https://github.com/Nasr-905/",
      Resume: "/resume.pdf",
      "Email": "mailto:oladimeji@nasrudeen.com",
      "Call": "tel:+1-647-615-7797",
      "Contact Me (Anon Option)": "/contact",
      "Book a Meeting with Me": "https://app.reclaim.ai/m/nasrudeen-oladimeji/flexible-quick-meeting",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.NotFor({ titles: ["contact"]}, Component.TagList()),
  ],
  afterBody: [
    Component.PageNav(),
    Component.OnlyFor({ titles: ["Cerebrum Secundum"]}, Component.RecentNotes({
        title: "Recent Blog Posts",
        limit: 5,
        linkToMore: "/Blog" as SimpleSlug,
        showTags: true,
        filter: recentFilterFn,
      }),
    ),
    Component.OnlyFor({ titles: ["contact"]}, Component.Contact({ workerUrl: "https://contact-form.nasrudeenoladimeji.workers.dev/" })
    ),
    Component.NotFor({ titles: ["contact"]}, Component.Remark()),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.MobileOnly(Component.OverlayExplorer()),
    Component.DesktopOnly(Component.Explorer({ filterFn: explorerFilterFn })),
    Component.FloatingButtons({
      position: 'right',
    }),
  ],
  right: [
    Component.Graph({
      localGraph: {
        drag: true, // whether to allow panning the view around
        zoom: true, // whether to allow zooming in and out
        depth: 2, // how many hops of notes to display
        scale: 1.1, // default view scale
        repelForce: 0.5, // how much nodes should repel each other
        centerForce: 0.3, // how much force to use when trying to center the nodes
        linkDistance: 30, // how long should the links be by default?
        fontSize: 0.6, // what size should the node labels be?
        opacityScale: 1, // how quickly do we fade out the labels when zooming out?
        removeTags: ["search-exclude", "explorer-exclude", "protected"], // what tags to remove from the graph
        showTags: true, // whether to show tags in the graph
        enableRadial: false, // whether to constrain the graph, similar to Obsidian
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
        scale: 0.9,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.3,
        opacityScale: 1,
        removeTags: ["search-exclude", "explorer-exclude", "protected"],
        showTags: true,
        enableRadial: true,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}


// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  afterBody: [],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.MobileOnly(Component.OverlayExplorer({ filterFn: explorerFilterFn })),
    Component.DesktopOnly(Component.Explorer({ filterFn: explorerFilterFn })),
    Component.FloatingButtons({
      position: 'right',
    }),
  ],
  right: [
    Component.Graph({
      localGraph: {
        drag: true, // whether to allow panning the view around
        zoom: true, // whether to allow zooming in and out
        depth: 1, // how many hops of notes to display
        scale: 1.1, // default view scale
        repelForce: 0.5, // how much nodes should repel each other
        centerForce: 0.3, // how much force to use when trying to center the nodes
        linkDistance: 30, // how long should the links be by default?
        fontSize: 0.6, // what size should the node labels be?
        opacityScale: 1, // how quickly do we fade out the labels when zooming out?
        removeTags: [], // what tags to remove from the graph
        showTags: true, // whether to show tags in the graph
        enableRadial: false, // whether to constrain the graph, similar to Obsidian
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
        scale: 0.9,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.3,
        opacityScale: 1,
        removeTags: [],
        showTags: true,
        enableRadial: true,
      },
    }),
  ],
}
