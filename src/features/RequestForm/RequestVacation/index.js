import React from 'react'

import { requestVacationTitle } from 'features/constants'
import RequestTemplates from 'features/RequestForm/RequestTemplates'
import listVacation from 'pages/portal/formListVacation'

const RequestVacation = () => {
  return (
    <RequestTemplates
      eventRequestList={listVacation}
      eventRequestType={requestVacationTitle}
    />
  )
}

export default RequestVacation
