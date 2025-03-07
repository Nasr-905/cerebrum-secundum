export interface TimelineEvent {
  type: "created" | "modified"
  date: Date
  slug: string
  title: string
  tags?: string[]
  folder?: string
  image?: string
  description?: string
}

export function createTimelineEvents(fileData: any): TimelineEvent[] {
  const events: TimelineEvent[] = []
  const baseEvent = {
    slug: fileData.slug,
    title: fileData.title,
    tags: fileData.tags || [],
    folder: fileData.folder,
    image: fileData.image, // Add image field here
    description: fileData.description // Add description field here
  }

  if (fileData.dates?.modified) {
    events.push({
      ...baseEvent,
      type: "modified",
      date: new Date(fileData.dates.modified),
    })
  }

  if (fileData.dates?.modified) {
    events.push({
      ...baseEvent,
      type: "modified",
      date: new Date(fileData.dates.modified),
    })
  }

  return events
}

export function getTimelineEvents(
  content: [string, { data: any }][],
  disallowedSlugs: Set<string>,
  disallowedTags: Set<string>,
  modifiedOnly: boolean = false,
) {
  const filteredContent = content
    .filter(([_, file]) => {
      const { data } = file
      return !disallowedSlugs.has(data.slug) && !data.tags?.some((tag) => disallowedTags.has(tag))
    })
    .map(([_, file]) => ({
      slug: file.data.slug,
      title: file.data.frontmatter?.title || file.data.frontmatter?.aliases[0],
      dates: { ...file.data.dates },
      tags: file.data.frontmatter?.tags || [],
      folder: file.data.slug.split("/").slice(0, -1).join("/"),
      image: file.data?.image, // Add image field here
      description: file.data?.description // Add description field here
    }))

  const events = filteredContent
    .flatMap((fileData) => createTimelineEvents(fileData))
    .filter((event) => !modifiedOnly || event.type === "modified")
    .sort((a, b) => b.date.getTime() - a.date.getTime())

  return events
}