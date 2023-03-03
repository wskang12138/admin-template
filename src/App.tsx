import { HashRouter } from 'react-router-dom'
import AuthRouter from '@/components/AuthRouter'
import { Router } from './routes/renderRoutes'
import routes from './routes'
import { Suspense, FC } from 'react'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
const App: FC = () => (
  <Suspense
    fallback={
      <Spin indicator={<LoadingOutlined spin style={{ fontSize: 36 }} />} />
    }
  >
    <HashRouter>
      <ScrollToTop>
        <AuthRouter>
          <Router routes={routes} />
        </AuthRouter>
      </ScrollToTop>
    </HashRouter>
  </Suspense>
)
export default App
