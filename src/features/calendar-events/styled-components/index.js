import styled from 'styled-components'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export const CalendarEventsContainer = styled.div`
  .rbc-calendar {
    height: 83vh;
  }
  .rbc-today {
    background-color: #cce5f7;
  }
  .ant-spin-nested-loading > div > .ant-spin {
    transform: translateY(20%);
  }
  .ant-spin-blur::after {
    opacity: 1;
    pointer-events: auto;
  }
  .ant-spin-dot-item {
    background: red;
  }

  .rbc-day-bg {
    cursor: pointer;
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
