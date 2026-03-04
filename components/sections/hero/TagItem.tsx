import React from 'react'

function TagItem({content}: {content: string}) {
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
      {content}
    </div>
  )
}

export default TagItem