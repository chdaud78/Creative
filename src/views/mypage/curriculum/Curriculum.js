import React from 'react'
import {CCard, CCardHeader, CCardBody, CImage} from '@coreui/react'
import { DocsLink } from 'src/components'

const Typography = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          추천 로드맵
          <DocsLink href="https://coreui.io/docs/content/typography/" />
        </CCardHeader>
        <CCardBody>
          <CImage fluid src="/src/assets/images/road.jpg" />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Typography
