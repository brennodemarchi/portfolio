import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const Lang: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  const language = "PT-BR EN-US"
  return (
    <h1 class={classNames(displayClass, "lang")}>
      <a>{language}</a>
    </h1>
  )
}

Lang.css = `
.lang {
  margin: 0;
}
`






export default (() => Languages) satisfies QuartzComponentConstructor