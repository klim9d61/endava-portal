import { momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)
const defaultDate = new Date()

const config = {
  defaultDate,
  drilldownView: 'agenda',
  defaultView: 'month',
  localizer,
  selectable: true,
  resizable: true,
}

export default config
