import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

import { getCards } from "./Landing"


const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const CARDS = getCards(false)

  const slugKey = fileData.slug ? fileData.slug.split('/')[0] : "Home";
  const card = slugKey in CARDS ? CARDS[slugKey as keyof typeof CARDS] : CARDS["Home"];

  return (
      <div class = "page-title-container">
        <div class="header-card">{card}</div>
        <h2 class={classNames(displayClass, "page-title")}>
          <a href={baseDir}>{title}</a>
        </h2>
      </div>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0 0 1rem 0;
}

@media (min-width: 800px) {
  .page-title {
    display: none;
  }
}
.header-card {
  width: 100%;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
