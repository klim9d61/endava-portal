import React from 'react'

import { requestVacation } from 'features/constants'
import RequestTemplates from 'features/RequestForm/RequestTemplates'
import listVacation from 'pages/portal/formListVacation'

const RequestVacation = () => {
  return (
    <RequestTemplates
      eventRequestList={listVacation}
      eventRequestType={requestVacation}
    />
  )
}

export default RequestVacation
