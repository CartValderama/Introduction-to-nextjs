import React from 'react'

function ReviewDetail({
  params,
}: {
  params: {
    productId: string
    reviewId: String
  }
}) {
  return (
    <div>
      <h1>
        product review {params.reviewId} for product {params.productId}{' '}
      </h1>
    </div>
  )
}

export default ReviewDetail
