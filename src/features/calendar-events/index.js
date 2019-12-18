import React, { useState, useEffect } from 'react'
import { Spin } from 'antd'

import config from './calendarConfig'
import {
  CalendarEventsContainer,
  CurrentEventsNumber,
  StyledCalendar,
} from './styled-components'

const {
  spinSize,
  defaultDate,
  drilldownView,
  defaultView,
  localizer,
  selectable,
  resizable,
  tempEvents,
} = config

const CalendarRBC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [calendarEvents, setCalendarEvents] = useState(
    JSON.parse(localStorage.getItem('CalendarStorageEvents')) || tempEvents,
  )

  useEffect(() => {
    localStorage.setItem(
      'CalendarStorageEvents',
      JSON.stringify(calendarEvents),
    )
  }, [calendarEvents])

  setTimeout(() => {
    setIsLoading(false)
  }, 750)

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
      <Spin spinning={isLoading} size={spinSize}>
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
      </Spin>
    </CalendarEventsContainer>
  )
}

export default CalendarRBC
