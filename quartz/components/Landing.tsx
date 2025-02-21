import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import landingStyle from "./styles/landing.scss"
import Recents from "./RecentNotes"

export const TOTAL_CARDS = 8

export const getCards = (isIndex?: boolean) => ({

    Projects: (
        <a href={isIndex ? "/Projects" : "/"} target="_blank">
          <div class="card card-1">
            <p class="card-title highlight">Projects</p>
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
            <p class="card-title highlight">Workout</p>
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
    <div>
      <div class="content-container">
        <p class="landing-header">Welcome, My Name is Nas :)</p>
        <p class="page-subhead">
          <a href="https://github.com/Nasr-905/" target="_blank">
            GitHub
          </a>{" "}
          •{" "}
          <a href="/resume.pdf" target="_blank">
            Resume
          </a>{" "}
          •{" "}
          <a href="mailto:oladimeji@nasrudeen.com" target="_blank">
            Email
          </a>{" "}
          •{" "}
          <a href="tel:+1-647-615-7797" target="_blank">
            Call
          </a>{" "}
          •{" "}
          <a href="" target="_self">
            Send Me an Anonymous Message
          </a>{" "}
          •{" "}
          <a href="https://app.reclaim.ai/m/nasrudeen-oladimeji/flexible-quick-meeting" target="_blank">
            Book a Meeting with Me
          </a>
        </p>
        <p>Welcome to a look into a piece of my mind, <a href="/Blog/On-Zettelkastens,-Digital-Gardens-and-Second-Brains">or rather my <em>second mind</em></a>. I'm a 3rd year Engineering Science student at the University of Toronto majoring in <a href="/tags/ECE">Electrical & Computer Engineering</a> and minoring in <a href="/tags/robo">Robotics</a> and <a href="/tags/ML">Artificial Intelligence</a>. I believe we're best described by our projects and passions rather than degree titles, so please check out my <a href="/Projects">projects</a>! I also <a href="/Blog">blog</a> (in French!).</p>
        <div class="issue-container">{Object.values(cards).slice(0,8)}</div>
      </div>
    </div>
  )
}

LandingComponent.css = landingStyle

export default (() => LandingComponent) satisfies QuartzComponentConstructor
