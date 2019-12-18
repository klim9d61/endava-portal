import React from 'react'

import { requestMaterialsTitle } from 'features/constants'
import listMaterials from 'pages/portal/formListMaterials'
import RequestTemplates from 'features/RequestForm/RequestTemplates'

const RequestMaterials = () => {
  return (
    <RequestTemplates
      eventRequestList={listMaterials}
      eventRequestType={requestMaterialsTitle}
    />
  )
}

export default RequestMaterials
