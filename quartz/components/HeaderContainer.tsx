import { QuartzComponentProps } from "./types"

const HeaderContainer = (props: QuartzComponentProps) => {
  return (
    <div>
      <p class="landing-header">Welcome, My Name is Nas</p>
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
        <a href="/contact" target="_self">
          Contact Me (Anon Option)
        </a>{" "}
        •{" "}
        <a href="https://app.reclaim.ai/m/nasrudeen-oladimeji/flexible-quick-meeting" target="_blank">
          Book a Meeting with Me
        </a>
      </p>
    </div>
  )
}

export default HeaderContainer