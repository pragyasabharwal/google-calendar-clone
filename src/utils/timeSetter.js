export const timeSetter = (index) => {
  if (index < 11) {
    return 'am'
  }
  if (index === 23) {
    return 'am'
  }
  return 'pm'
}
