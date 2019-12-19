import React, { useState, useEffect } from 'react'
import { Spin } from 'antd'

import EventModal from './calendar-modal'
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
  const [modalVisibility, setModalVisibility] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [currentEvent, setCurrentEvent] = useState({})
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

  const handleInput = e => {
    setInputValue(e.target.value)
  }

  const handleModalOpen = ({ start, end }) => {
    if (start.getDate() >= defaultDate.getDate()) {
      setModalVisibility(true)
      setCurrentEvent({ start, end })
    }
  }

  const handleOk = () => {
    setModalVisibility(false)
    if (inputValue) {
      const event = { ...currentEvent, title: inputValue }
      setCurrentEvent(event)
      setCalendarEvents([...calendarEvents, event])
    }
    setCurrentEvent({})
    setInputValue('')
  }

  const handleCancel = () => {
    setModalVisibility(false)
  }

  const removeEvent = ({ title }) => {
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
        <EventModal
          visible={modalVisibility}
          onOk={handleOk}
          onCancel={handleCancel}
          value={inputValue}
          onChange={handleInput}
        />
        <StyledCalendar
          defaultDate={defaultDate}
          drilldownView={drilldownView}
          defaultView={defaultView}
          events={calendarEvents}
          selectable={selectable}
          localizer={localizer}
          resizable={resizable}
          onSelectSlot={handleModalOpen}
          onDoubleClickEvent={removeEvent}
        />
      </Spin>
    </CalendarEventsContainer>
  )
}

export default CalendarRBC
