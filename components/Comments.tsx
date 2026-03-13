'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)

  // If comments are disabled in siteMetadata, render nothing
  if (!siteMetadata.comments || !siteMetadata.comments.provider) {
    return null
  }

  return (
    <>
      {loadComments ? (
        <CommentsComponent
          commentsConfig={siteMetadata.comments as any}
          slug={slug}
        />
      ) : (
        <button
          onClick={() => setLoadComments(true)}
          className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Load Comments
        </button>
      )}
    </>
  )
}