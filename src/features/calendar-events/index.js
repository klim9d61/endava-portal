import React, { useState, useEffect } from 'react'

import config from './calendarConfig'
import {
  CalendarEventsContainer,
  CurrentEventsNumber,
  StyledCalendar,
} from './styled-components'

const {
  defaultDate,
  drilldownView,
  defaultView,
  localizer,
  selectable,
  resizable,
  tempEvents,
} = config

const CalendarRBC = () => {
  const [calendarEvents, setCalendarEvents] = useState(
    JSON.parse(localStorage.getItem('CalendarStorageEvents')) || tempEvents,
  )

  useEffect(() => {
    localStorage.setItem(
      'CalendarStorageEvents',
      JSON.stringify(calendarEvents),
    )
  }, [calendarEvents])

  const handleSelect = ({ start, end }) => {
    if (start.getDate() >= defaultDate.getDate()) {
      // eslint-disable-next-line no-alert
      const title = prompt('New Event name')
      if (title) {
        setCalendarEvents([...calendarEvents, { start, end, title }])
      }
    }
  }

  const handleEvent = ({ title }) => {
    setCalendarEvents(
      calendarEvents.filter(eventTarget => eventTarget.title !== title),
    )
  }

  return (
    <CalendarEventsContainer>
      <CurrentEventsNumber>
        Number of events:
        {calendarEvents.length}
      </CurrentEventsNumber>
      <StyledCalendar
        defaultDate={defaultDate}
        drilldownView={drilldownView}
        defaultView={defaultView}
        events={calendarEvents}
        selectable={selectable}
        localizer={localizer}
        resizable={resizable}
        onSelectSlot={handleSelect}
        onDoubleClickEvent={handleEvent}
      />
    </CalendarEventsContainer>
  )
}

export default CalendarRBC
