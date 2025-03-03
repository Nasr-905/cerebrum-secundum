import { Root as HTMLRoot } from "hast"
import { select } from "hast-util-select"
import { toString } from "hast-util-to-string"
import { QuartzTransformerPlugin } from "../types"
import { escapeHTML } from "../../util/escape"

export interface Options {
}

const defaultOptions: Options = {
}

export const Image: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "Image",
    htmlPlugins() {
      return [
        () => {
          return async (tree: HTMLRoot, file) => {
            let frontMatterImage = file.data.frontmatter?.image
            let text = escapeHTML(toString(tree))

            const image = frontMatterImage ?? extractFirstImageSrc(tree)
            file.data.image = image
          }
        },
      ]
    },
  }
}

function extractFirstImageSrc(tree: HTMLRoot): string | undefined {
  const imgElement = select("img", tree)
  if (imgElement && imgElement.properties && typeof imgElement.properties.src === "string") {
    return imgElement.properties.src
  }
  return undefined
}

declare module "vfile" {
  interface DataMap {
    image: string
  }
}