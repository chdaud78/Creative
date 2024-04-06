import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Survey = React.lazy(() => import('./views/mypage/survey/Survey'))
const Curriculum = React.lazy(() => import('./views/mypage/curriculum/Curriculum'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/mypage', name: 'Theme', element: Survey, exact: true },
  { path: '/mypage/survey', name: 'Survey', element: Survey },
  { path: '/mypage/curriculum', name: 'Curriculum', element: Curriculum },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
