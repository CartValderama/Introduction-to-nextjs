import React from 'react'

function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug.length === 2) {
    return (
      <h1>
        viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    )
  }
  if (params.slug.length === 1) {
    return <h1>viewing docs for feature {params.slug[0]}</h1>
  }
  return (
    <div>
      <h1>home docs</h1>
    </div>
  )
}

export default Docs
