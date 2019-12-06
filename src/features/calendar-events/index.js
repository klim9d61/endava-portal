import React from 'react'
import { Calendar } from 'react-big-calendar'

import config from './calendarConfig'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const CalendarRBC = () => {
  const {
    defaultDate,
    drilldownView,
    defaultView,
    events,
    localizer,
    resizable,
    style,
  } = config

  return (
    <div className="calendar-rbc-container" style={{ width: '100%' }}>
      <Calendar
        defaultDate={defaultDate}
        drilldownView={drilldownView}
        defaultView={defaultView}
        events={events}
        localizer={localizer}
        resizable={resizable}
        style={style}
      />
    </div>
  )
}

export default CalendarRBC
