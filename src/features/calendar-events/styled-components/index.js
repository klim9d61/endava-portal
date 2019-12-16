import styled from 'styled-components'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export const CalendarEventsContainer = styled.div`
  .rbc-calendar {
    height: 85vh;
  }
`

export const CurrentEventsNumber = styled.div`
  padding: 0.3rem;
  width: 90%;
  font-size: 20px;
  margin: 0 auto;
  text-align: right;
`

export const StyledCalendar = styled(Calendar)`
  padding: 0.3rem;
  width: 90%;
  margin: 0 auto;
  .rbc-btn-group {
    button {
      cursor: pointer;
    }
  }
`
