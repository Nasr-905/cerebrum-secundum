import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/backlinks.scss"
import { resolveRelative, simplifySlug } from "../util/path"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"
import { GlobalConfiguration } from "../cfg"
 
interface Options {
  excludeTags: string[]
  hideWhenEmpty: boolean
}
 
const defaultOptions = (cfg: GlobalConfiguration): Options => ({
  excludeTags: [],
  hideWhenEmpty: false,
})
export default ((userOpts?: Partial<Options>) => {

  const Backlinks: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const slug = simplifySlug(fileData.slug!)

    // Parse config
    const opts = { ...defaultOptions, ...userOpts }
    const _excludeTags = opts.excludeTags

    // Get all files linking to this one
    const unfilteredBacklinkFiles = allFiles.filter((file) => file.links?.includes(slug))

    // Filter out files that have excluded tags
    const backlinkFiles = unfilteredBacklinkFiles.filter((file) => {
      const hasExcludeTag = _excludeTags?.some((tag: string) =>
        file.frontmatter?.tags?.includes(tag)
      );
      return !hasExcludeTag;
    });

    if (opts.hideWhenEmpty && backlinkFiles.length === 0) {
      return null
    }

    return (
      <div class={classNames(displayClass, "backlinks")}>
        <h3>{i18n(cfg.locale).components.backlinks.title}</h3>
        <ul class="overflow">
          {backlinkFiles.length > 0 ? (
            backlinkFiles.map((f) => (
              <li>
                <a href={resolveRelative(fileData.slug!, f.slug!)} class="internal">
                  {f.frontmatter?.title}
                </a>
              </li>
            ))
          ) : (
            <li>{i18n(cfg.locale).components.backlinks.noBacklinksFound}</li>
          )}
        </ul>
      </div>
    )
  }

  Backlinks.css = style

  return Backlinks
}) satisfies QuartzComponentConstructor
