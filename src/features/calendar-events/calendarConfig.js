import { momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)
const defaultDate = new Date()

const config = {
  defaultDate,
  drilldownView: 'agenda',
  defaultView: 'month',
  events: [
    {
      start: new Date(2019, 11, 12),
      end: new Date(2019, 11, 12),
      title: 'XMAS Party',
      allDay: true,
    },
  ],
  localizer,
  resizable: true,
  style: { padding: '2rem', width: '90%', margin: '0 auto', height: '85vh' },
}

export default config
