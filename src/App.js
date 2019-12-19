import React, { useState } from 'react'
import { Switch, Route, useParams } from 'react-router'
import { Layout } from 'antd'

import { Content } from 'common/ui-kit'
import { Header, Footer } from 'core/components'
import { PortalPage, LoginPage, NotFoundPage } from 'pages'
import PrivateRoute from 'common/components/routes/PrivateRoute'

export const MyContext = React.createContext(null)

function App() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const [user, setUser] = useState(currentUser)
  const [logo, setLogo] = useState(`${user.logo}?img=${user.id}`)

  return (
    <Layout>
      <Header user={user} setUser={setUser} logo={logo} />
      <Content>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <MyContext.Provider value={[user, logo, setLogo]}>
            <PrivateRoute path="/*" component={PortalPage} />
          </MyContext.Provider>
        </Switch>
      </Content>
      <Footer />
    </Layout>
  )
}

export default App
