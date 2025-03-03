import { Root as HTMLRoot } from "hast"
import { toString } from "hast-util-to-string"
import { QuartzTransformerPlugin } from "../types"
import { escapeHTML } from "../../util/escape"

export interface Options {
  descriptionLength: number
  replaceExternalLinks: boolean
}

const defaultOptions: Options = {
  descriptionLength: 150,
  replaceExternalLinks: true,
}

const urlRegex = new RegExp(
  /(https?:\/\/)?(?<domain>([\da-z\.-]+)\.([a-z\.]{2,6})(:\d+)?)(?<path>[\/\w\.-]*)(\?[\/\w\.=&;-]*)?/,
  "g",
)

// Function to remove LaTeX content
function removeLaTeX(text: string): string {
  // Remove inline LaTeX: $...$
  text = text.replace(/\$[^$\n]+\$/g, '')
  
  // Remove display LaTeX: $$...$$
  text = text.replace(/\$\$[\s\S]+?\$\$/g, '')
  
  // Remove \begin{...} ... \end{...} environments
  text = text.replace(/\\begin\{[^}]+\}[\s\S]+?\\end\{[^}]+\}/g, '')
  
  // Remove standalone LaTeX commands
  text = text.replace(/\\[a-zA-Z]+(\{[^}]*\})?/g, '')
  
  return text.trim()
}

export const Description: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "Description",
    htmlPlugins() {
      return [
        () => {
          return async (tree: HTMLRoot, file) => {
            let frontMatterDescription = file.data.frontmatter?.description
            let text = escapeHTML(toString(tree))

            // Remove LaTeX from both frontmatter description and main text
            frontMatterDescription = frontMatterDescription ? removeLaTeX(frontMatterDescription) : frontMatterDescription
            text = removeLaTeX(text)

            if (opts.replaceExternalLinks) {
              frontMatterDescription = frontMatterDescription?.replace(
                urlRegex,
                "$<domain>" + "$<path>",
              )
              text = text.replace(urlRegex, "$<domain>" + "$<path>")
            }

            const desc = frontMatterDescription ?? text
            const sentences = desc.replace(/\s+/g, " ").split(/\.\s/)
            const finalDesc: string[] = []
            const len = opts.descriptionLength
            let sentenceIdx = 0
            let currentDescriptionLength = 0

            if (sentences[0] !== undefined && sentences[0].length >= len) {
              const firstSentence = sentences[0].split(" ")
              while (currentDescriptionLength < len) {
                const sentence = firstSentence[sentenceIdx]
                if (!sentence) break
                finalDesc.push(sentence)
                currentDescriptionLength += sentence.length
                sentenceIdx++
              }
              finalDesc.push("...")
            } else {
              while (currentDescriptionLength < len) {
                const sentence = sentences[sentenceIdx]
                if (!sentence) break
                const currentSentence = sentence.endsWith(".") ? sentence : sentence + "."
                finalDesc.push(currentSentence)
                currentDescriptionLength += currentSentence.length
                sentenceIdx++
              }
            }

            file.data.description = finalDesc.join(" ")
            file.data.text = text
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    description: string
    text: string
  }
}

// Added the removeLaTeX function to remove LaTeX content from the description and text fields