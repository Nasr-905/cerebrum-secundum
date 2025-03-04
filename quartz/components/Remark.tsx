import { QuartzComponentConstructor } from "./types"

// @ts-ignore

export default ((userOpts?: Options) => {

    function Remark() {
        return  (<div id="remark42"></div>);
    }
  return Remark;
}) satisfies QuartzComponentConstructor;

