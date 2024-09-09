export const letterSpliter = (letters) => {
  return letters.map(({ letter }) => {
    return letter.split(/\s(?=[A-Z])/g)
  })
}