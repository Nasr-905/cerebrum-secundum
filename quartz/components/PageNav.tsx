import { QuartzComponentConstructor, QuartzComponentProps, QuartzComponent } from "./types"
// @ts-ignore

export default (() => {
  const PageNav: QuartzComponent = (props: QuartzComponentProps) => {
      const nextSlug = props.fileData?.frontmatter?.next
      const previousSlug = props.fileData?.frontmatter?.previous
      const nextFile = props.allFiles.find(file => file?.slug === nextSlug)
      const previousFile = props.allFiles.find(file => file?.slug === previousSlug)
      return (
        <div className="page-navigation">
          <div className="page-navigation-content">
            {previousFile && (
              <a href={`/${previousSlug}`} className="prev">
                <span className="prev-label">← Previous</span>
                <span className="nav-page-title">{previousFile?.frontmatter?.title}</span>
              </a>
            )}
            {nextFile && (
              <a href={`/${nextSlug}`} className="next">
                <span className="next-label">Next →</span>
                <span className="nav-page-title">{nextFile?.frontmatter?.title}</span>
              </a>
            )}
          </div>
        </div>
      )
  }
  PageNav.css = `
    .page-navigation {
      width: 100%;
      margin: 2rem 0;
    }
    .page-navigation .page-navigation-content {
      justify-content: space-between;
      align-items: stretch;
      gap: 1rem;
      display: flex;
    }
    .page-navigation .page-navigation-content a.prev {
      text-align: left;
    }
    .page-navigation .page-navigation-content a .prev-label, .page-navigation .page-navigation-content a .next-label {
      color: var(--secondary);
      font-size: .875rem;
    }
    .page-navigation .page-navigation-content a.next {
      text-align: right;
      margin-left: auto;
    }
    .page-navigation .page-navigation-content a {
      border: 1px solid var(--lightgray);
      border-radius: .5rem;
      flex-direction: column;
      flex: 1;
      gap: .5rem;
      max-width: 48%;
      padding: 1rem;
      text-decoration: none;
      transition: border-color .2s;
      display: flex;
    }
    .page-navigation .page-navigation-content a .nav-page-title {
      color: var(--dark);
      font-size: 1rem;
      font-weight: 500;
    }
  `

  return PageNav
}) satisfies QuartzComponentConstructor

