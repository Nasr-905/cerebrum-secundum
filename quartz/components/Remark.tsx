import { QuartzComponentConstructor } from "./types"

// @ts-ignore

export default ((userOpts?: Options) => {

    function Remark() {
        return (
          <div className="remark-container">
            <h2>Join the Discussion</h2>
            <p>We'd love to hear your thoughts! Leave a comment below:</p>
            <div id="remark42"></div>
          </div>
        );
    }

    Remark.css = `
      .remark-container {
        margin-top: 2rem;
        padding: 1rem;
        border: 1px solid var(--darkgray);
        border-radius: 8px;
        background-color: var(--lightgray);
      }
      .remark-container h2 {
        margin-top: 0;
        font-size: 1.5rem;
      }
      .remark-container p {
        margin-bottom: 1rem;
        font-size: 1rem;
      }
      #remark42 {
        margin-top: 1rem;
      }
    `

    return Remark;
}) satisfies QuartzComponentConstructor;

