import { QuartzComponentConstructor } from "./types"

// @ts-ignore

export default ((userOpts?: Options) => {

    function Remark() {
        return (
          <>
            <hr />
              <h2>Join the Discussion with <a href="https://remark42.com/" class={"internal"} target={"_blank"}>Remark42</a></h2>
              <div id="remark42"></div>
          </>
        );
    }

    Remark.css = `
      #remark42 {
        margin-top: 1rem;
      }
    `

    return Remark;
}) satisfies QuartzComponentConstructor;

