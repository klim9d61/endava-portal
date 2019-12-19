import {
  fullName,
  fullNameInfo,
  note,
  noteInfo,
  rangePickerSelect,
  selectPeriod,
  selectTime,
  submitBtn,
  typeButton,
  typeInput,
  typeTextarea,
} from 'features/constants'

const listVacation = [
  {
    id: 1,
    label: fullName,
    tooltip: true,
    nameStore: fullName,
    required: true,
    message: fullNameInfo,
    whitespace: true,
    typeField: typeInput,
  },
  {
    id: 2,
    label: selectPeriod,
    tooltip: false,
    nameStore: 'rangeVacation',
    required: true,
    message: selectTime,
    whitespace: false,
    typeSelectOption: 'array',
    typeField: rangePickerSelect,
  },
  {
    id: 3,
    label: note,
    tooltip: true,
    nameStore: note,
    required: false,
    message: noteInfo,
    whitespace: false,
    typeField: typeTextarea,
  },
  {
    id: 4,
    label: submitBtn,
    tooltip: false,
    type: 'primary',
    htmlType: 'submit',
    typeField: typeButton,
  },
]

export default listVacation
