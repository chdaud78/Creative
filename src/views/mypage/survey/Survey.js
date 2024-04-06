import React from 'react'

import {
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormLabel,
  CFormCheck, CInputGroup, CCardFooter, CButton, CNavLink
} from '@coreui/react'
import { DocsLink } from 'src/components'
import {NavLink} from "react-router-dom";

const Survey = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          기초 코딩 강의 수강 평가
          <DocsLink href="https://coreui.io/docs/utilities/colors/" />
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CForm>
              <CFormLabel htmlFor="radio1">1. 이 강의에 대한 흥미도는 몇 점인가요?</CFormLabel>
              <CInputGroup className="mb-3">
              <CFormCheck inline type="radio" name="radio1" id="radio1" label="1점"/>
              <CFormCheck inline type="radio" name="radio1" id="radio1" label="2점"/>
              <CFormCheck inline type="radio" name="radio1" id="radio1" label="3점"/>
              <CFormCheck inline type="radio" name="radio1" id="radio1" label="4점"/>
              <CFormCheck inline type="radio" name="radio1" id="radio1" label="5점"/>
              </CInputGroup>
            </CForm>
          </CRow>
          <CRow className={"mt-3"}>
            <CForm>
              <CFormLabel htmlFor="radio1">2. 이 강의가 진로에 도움이 되었나요?</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="1점"/>
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="2점"/>
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="3점"/>
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="4점"/>
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="5점"/>
              </CInputGroup>
            </CForm>
          </CRow>
          <CRow className={"mt-3"}>
            <CForm>
              <CFormLabel htmlFor="radio1">3. 이 강의와 관련된 진로를 선택 시 본인의 역량을 얼마나 잘 보여줄수 있나요?</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="1점"/>
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="2점"/>
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="3점"/>
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="4점"/>
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="5점"/>
              </CInputGroup>
            </CForm>
          </CRow>
          <CRow className={"mt-3"}>
            <CForm>
              <CFormLabel htmlFor="radio1">4. 이 강의와 관련된 진로를 선택 하게 된다면 어느정도로 흥미가 생길것인가요?</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="1점"/>
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="2점"/>
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="3점"/>
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="4점"/>
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="5점"/>
              </CInputGroup>
            </CForm>
          </CRow>
          <CRow className={"mt-3"}>
            <CForm>
              <CFormLabel htmlFor="radio1">5. 이 강의를 들으며 자신과 너무 다르다고 느꼈나요?</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="1점"/>
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="2점"/>
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="3점"/>
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="4점"/>
                <CFormCheck inline type="radio" name="radio1" id="radio1" label="5점"/>
              </CInputGroup>
            </CForm>
          </CRow>
        </CCardBody>
        <CCardFooter>
          <CButton color="primary">
            <CNavLink to="/dashboard" as={NavLink}>결과보기</CNavLink>
          </CButton>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Survey
