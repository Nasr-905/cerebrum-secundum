import { QuartzComponentConstructor } from "./types"
import landingStyle from "./styles/landing.scss"

export const TOTAL_CARDS = 8
export const CARDS = {
  basics: (
    <a href={"/basics"}>
      <div class="card card-1">
        <p class="card-title">Projects</p>
        <p class="card-subhead">Issue 001</p>
        <img src="/static/1-illo.png" class="card-illustration-1" />
      </div>
    </a>
  ),
  "getting-started": (
    <a href={"/getting-started"}>
      <div class="card card-2">
        <p class="card-title">Getting Started</p>
        <p class="card-subhead">Issue 002</p>
        <img src="/static/2-illo.png" class="card-illustration-2" />
      </div>
    </a>
  ),
  "growing-people": (
    <a href={"/growing-people"}>
      <div class="card card-3">
        <p class="card-title">Growing People</p>
        <p class="card-subhead">Issue 003</p>
        <img src="/static/3-illo.png" class="card-illustration-3" />
      </div>
    </a>
  ),
  "superboosting-ideas": (
    <a href={"/superboosting-ideas"}>
      <div class="card card-4">
        <p class="card-title">Super- boosting Ideas</p>
        <p class="card-subhead">Issue 004</p>
        <img src="/static/4-illo.png" class="card-illustration-4" />
      </div>
    </a>
  ),
  maintenance: (
    <a href={"/maintenance"}>
      <div class="card card-5">
        <p class="card-title">Maintenance</p>
        <p class="card-subhead">Issue 005</p>
        <img src="/static/5-illo.png" class="card-illustration-5" />
      </div>
    </a>
  ),
  "demo-days": (
    <a href={"/demo-days"}>
      <div class="card card-6">
        <p class="card-title">Demo Days</p>
        <p class="card-subhead">Issue 006</p>
        <img src="/static/6-illo.png" class="card-illustration-6" />
      </div>
    </a>
  ),
}

export default (() => {
  function LandingComponent() {
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

          <div class="issue-container">
            {Object.values(CARDS)}
            {Array(TOTAL_CARDS - Object.keys(CARDS).length)
              .fill(0)
              .map(() => (
                <div class="card card-coming">
                  <p class="card-title">Coming Soon</p>
                  <p class="card-subhead">Issue XXX</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }

  LandingComponent.css = landingStyle
  return LandingComponent
}) satisfies QuartzComponentConstructor
