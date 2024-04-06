import React from 'react'
import classNames from 'classnames'

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol, CNavLink,
  CProgress,
  CRow,
} from '@coreui/react'

import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'
import {NavLink} from "react-router-dom";

const Colors = () => {
  const progressExample = [
    { title: '소프트웨어', value: '70 점', percent: 70, color: 'success' },
    { title: '인공지능', value: '80점', percent: 80, color: 'info' },
    { title: '언어', value: '40점', percent: 40, color: 'warning' },
    { title: '국제무역', value: '40점', percent: 40, color: 'danger' },
    { title: '데이터베이스', value: '60점', percent: 60, color: 'primary' },
  ]

  return (
    <>
      <WidgetsDropdown className="mb-4" />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                내 역량 점수
              </h4>
              <div className="small text-body-secondary">January - July 2023</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CNavLink to="/mypage/curriculum" as={NavLink}>추천 커리큘럼 보러가기</CNavLink>
              </CButton>
            </CCol>
          </CRow>
          <MainChart />
        </CCardBody>
        <CCardFooter>
          <CRow
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            lg={{ cols: 4 }}
            xl={{ cols: 5 }}
            className="mb-2 text-center"
          >
            {progressExample.map((item, index, items) => (
              <CCol
                className={classNames({
                  'd-none d-xl-block': index + 1 === items.length,
                })}
                key={index}
              >
                <div className="text-body-secondary">{item.title}</div>
                <div className="fw-semibold text-truncate">
                  {item.value} ({item.percent}%)
                </div>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Colors
