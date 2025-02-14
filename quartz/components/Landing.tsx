import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import landingStyle from "./styles/landing.scss"

export const TOTAL_CARDS = 8

export const getCards = (isIndex?: boolean) => ({

    Projects: (
        <a href={isIndex ? "/Projects" : "/"} target="_blank">
          <div class="card card-1">
            <p class="card-title">Projects</p>
            <p class="card-subhead">What I do instead of touching grass</p>
          </div>
        </a>
      ),
      Notes: (
        <a href={isIndex ? "/Notes" : "/"} target="_blank">
          <div class="card card-2">
            <p class="card-title">Notes</p>
            <p class="card-subhead">Academic and other technical notes</p>
          </div>
        </a>
      ),
      Books: (
        <a href="https://hardcover.app/@Nas" target="_blank">
          <div class="card card-3">
            <p class="card-title">Books</p>
            <p class="card-subhead">What I've read and am currently reading</p>
          </div>
        </a>
      ),
      Poetry: (
        <a href={isIndex ? "/Poetry" : "/"} target="_blank">
          <div class="card card-4">
            <p class="card-title">Poetry</p>
            <p class="card-subhead">Most is privated though</p>
          </div>
        </a>
      ),
      Anime: (
        <a href="https://anilist.co/user/Nasrah/" target="_blank">
          <div class="card card-5">
            <p class="card-title">Anime</p>
            <p class="card-subhead">Something else I do instead of touching grass</p>
          </div>
        </a>
      ),
      Music: (
        <a href="https://music.youtube.com/channel/UCGM1FDOnKOf8z5_yPamlRxQ?si=dxI2jS3wnGPdKbXV" target="_blank">
          <div class="card card-6">
            <p class="card-title">Music</p>
            <p class="card-subhead">What I've been listening to</p>
          </div>
        </a>
      ),
      Blog: (
        <a href={isIndex ? "/Blog" : "/"} target="_blank">
          <div class="card card-7">
            <p class="card-title">Blog</p>
            <p class="card-subhead">Written mostly in broken French</p>
          </div>
        </a>
      ),
      Archives: (
        <a href={isIndex ? "/Recipes" : "/"} target="_blank">
          <div class="card card-8">
            <p class="card-title">Recipes</p>
            <p class="card-subhead">No promises they're any good</p>
          </div>
        </a>
      ),
  })

const LandingComponent = (props: QuartzComponentProps) => {
  const slug = props?.fileData?.slug // Extract slug dynamically from QuartzPluginData
  const isIndex = slug === "index"
  const cards = getCards(isIndex)

  return (
    <div>
      <div class="content-container">
        <p class="landing-header">Welcome</p>
        <p class="page-subhead">
          <a href="https://github.com/Nasr-905/" target="_blank">
            GitHub
          </a>{" "}
          •{" "}
          <a href="mailto:oladimeji@nasrudeen.com" target="_blank">
            Email Me
          </a>{" "}
          •{" "}
          <a href="tel:+1-647-615-7797" target="_blank">
            Call Me
          </a>{" "}
          •{" "}
          <a href="" target="_self">
            Send me an anonymous message
          </a>
        </p>

        <div class="issue-container">{Object.values(cards)}</div>
      </div>
    </div>
  )
}

LandingComponent.css = landingStyle

export default (() => LandingComponent) satisfies QuartzComponentConstructor
