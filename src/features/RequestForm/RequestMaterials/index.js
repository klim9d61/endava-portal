import React from 'react'

import { requestMaterials } from 'features/constants'
import listMaterials from 'pages/portal/formListMaterials'
import RequestTemplates from 'features/RequestForm/RequestTemplates'

const RequestMaterials = () => {
  return (
    <RequestTemplates
      eventRequestList={listMaterials}
      eventRequestType={requestMaterials}
    />
  )
}

export default RequestMaterials
