import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  cilPencil,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'MyPage',
  },
  {
    component: CNavItem,
    name: '내 강의실',
    to: '/mypage/survey',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '내 결과보기',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: '내 추천 커리큘럼',
    to: '/mypage/curriculum',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },


]

export default _nav
