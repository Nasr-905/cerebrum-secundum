import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Remark: QuartzComponent = () => {
  return <div id="remark42"></div>
}

export default (() => Remark) satisfies QuartzComponentConstructor
