import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

import { getCards } from "./Landing"


const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const CARDS = getCards(false)

  const card = fileData.slug ? CARDS[fileData.slug.split('/')[0] as keyof typeof CARDS] : null

  return (
      <div class="header-card">{card}</div>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
margin: 0 0 1rem 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
