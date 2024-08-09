import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
		Component.Explorer({
			title: "Explorer", // title of the explorer component
			folderClickBehavior: "collapse", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
			folderDefaultState: "collapsed", // default state of folders ("collapsed" or "open")
			useSavedState: true, // whether to use local storage to save "state" (which folders are opened) of explorer
			// Sort order: folders first, then files. Sort folders and files alphabetically
			sortFn: (a, b) => {
				if ((!a.file && !b.file) || (a.file && b.file)) {
					return a.displayName.localeCompare(b.displayName)
				}
				if (a.file && !b.file) {
					return -1
				} else {
					return 1
				}
			},
			filterFn: (node) => node.name !== "tags", // filters out 'tags' folder
			mapFn: (node) => {
			// dont change name of root node
				if (node.depth > 0) {
					// set emoji for file/folder
					if (node.file) {
						node.displayName = "📄 " + node.displayName
					} else {
						node.displayName = "📁 " + node.displayName
					}
				}
			},
				// what order to apply functions in
			order: ["filter", "map", "sort"],
		})),
  ],
  right: [],
}