import { momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)
const defaultDate = new Date()

const config = {
  spinSize: 'large',
  defaultDate,
  drilldownView: 'agenda',
  defaultView: 'month',
  localizer,
  selectable: true,
  resizable: true,
  tempEvents: [
    {
      start: new Date('2019, 12, 31'),
      end: new Date('2020, 01, 01'),
      title: 'Happy New Year',
      allDay: true,
    },
  ],
}

export default config
