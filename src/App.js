import React, { useState } from 'react'
import { Switch, Route } from 'react-router'
import { Layout } from 'antd'

import { Content } from 'common/ui-kit'
import { Header, Footer } from 'core/components'
import { PortalPage, LoginPage, NotFoundPage } from 'pages'
import PrivateRoute from 'common/components/routes/PrivateRoute'
import users from '__mocks__/mock-data'

export const MyContext = React.createContext(null)

function App() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const [user, setUser] = useState(currentUser)
  const [logo, setLogo] = useState(`${user.logo}?img=${user.id}`)

  return (
    <MyContext.Provider value={[user, logo, setLogo]}>
      <Layout>
        <Header user={user} setUser={setUser} logo={logo} />
        <Content>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/404" component={NotFoundPage} />
            <PrivateRoute path="/*" component={PortalPage} />
          </Switch>
        </Content>
        <Footer />
      </Layout>
    </MyContext.Provider>
  )
}

export default App
