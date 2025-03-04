import { QuartzComponentConstructor, QuartzComponentProps, QuartzComponent } from "./types"
import landingStyle from "./styles/landing.scss"
import Recents from "./RecentNotes"

export const TOTAL_CARDS = 8

export const getCards = (isIndex?: boolean) => ({

    CV: (
        <a href={isIndex ? "/CV" : "/"} target="_blank">
          <div class="card card-1">
            <p class="card-title highlight">CV & Projects</p>
            <p class="card-subhead highlight">What I do instead of touching grass</p>
          </div>
        </a>
      ),
      Notes: (
        <a href={isIndex ? "/Notes" : "/"} target="_blank">
          <div class="card card-2">
            <p class="card-title highlight">Notes</p>
            <p class="card-subhead highlight">Academic and other technical notes</p>
          </div>
        </a>
      ),
      Recipes: (
        <a href={isIndex ? "/Recipes" : "/"} target="_blank">
          <div class="card card-3">
            <p class="card-title highlight">Recipes</p>
            <p class="card-subhead highlight">No promises they're any good</p>
          </div>
        </a>
      ),
      Poetry: (
        <a href={isIndex ? "/Poetry" : "/"} target="_blank">
          <div class="card card-4">
            <p class="card-title highlight">Poetry</p>
            <p class="card-subhead highlight">Most is privated though</p>
          </div>
        </a>
      ),
      Anime: (
        <a href="https://anilist.co/user/Nasrah/" target="_blank">
          <div class="card card-5">
            <p class="card-title highlight">Anime</p>
            <p class="card-subhead highlight">Something else I do instead of touching grass</p>
          </div>
        </a>
      ),
      Music: (
        <a href="https://music.youtube.com/channel/UCGM1FDOnKOf8z5_yPamlRxQ?si=dxI2jS3wnGPdKbXV" target="_blank">
          <div class="card card-6">
            <p class="card-title highlight">Music</p>
            <p class="card-subhead highlight">What I've been listening to</p>
          </div>
        </a>
      ),
      Workout: (
        <a href="https://hevy.com/user/n_a_s" target="_blank">
          <div class="card card-7">
            <p class="card-title highlight">Workouts</p>
            <p class="card-subhead highlight">Every once in a while</p>
          </div>
        </a>
      ),
      Books: (
        <a href="https://hardcover.app/@Nas" target="_blank">
          <div class="card card-8">
            <p class="card-title highlight">Books</p>
            <p class="card-subhead highlight">What I've read and am currently reading</p>
          </div>
        </a>
      ),
      Blog: (
        <a href="/" target="_blank">
          <div class="card card-9">
            <p class="card-title highlight">Blog</p>
            <p class="card-subhead highlight">Mostly en français</p>
          </div>
        </a>
      ),
      Home: (
        <a href="/" target="_blank">
          <div class="card card-10">
            <p class="card-title highlight"></p>
            <p class="card-subhead highlight"></p>
          </div>
        </a>
      ),
  })

const LandingComponent = (props: QuartzComponentProps) => {
  const slug = props?.fileData?.slug // Extract slug dynamically from QuartzPluginData
  const isIndex = slug === "index"
  const cards = getCards(isIndex)


  return (
    <div class="issue-container">
      {Object.values(cards).slice(0, 8)}
    </div>
  )
}

LandingComponent.css = landingStyle

export default (() => LandingComponent) satisfies QuartzComponentConstructor
