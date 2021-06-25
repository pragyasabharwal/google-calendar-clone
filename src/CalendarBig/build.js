export const build = (value) => {
  const startDay = value.clone().startOf('month').startOf('week')
  const days = startDay.clone().subtract(1, 'day')
  const endDay = value.clone().endOf('month').endOf('week')
  const calendar = []
  while (days.isBefore(endDay, 'day')) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => days.add(1, 'day').clone()),
    )
  }
  return calendar
}
