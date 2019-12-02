import React, { useState } from 'react'

import { Sider } from 'common/ui-kit'

function Sidebar() {
  const [collapsed, setCollapsed] = useState(true)

  const onCollapse = collapsed => setCollapsed(collapsed)

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      Menu
    </Sider>
  )
}

export default Sidebar
