window.onload = () => {
  let sectionExample = document.querySelector('section#example')

  function changeBackground() {
    let select = document.querySelector('select#select-background')
    select.addEventListener('change', () => {
      let selected = select.selectedOptions[0]
      sectionExample.style.backgroundColor = selected.value
    })
  }

  changeBackground()

  function changeTextColor() {
    let selectColor = document.querySelector('select#select-color')
    selectColor.addEventListener('change', () => {
      let colorSelected = selectColor.selectedOptions[0]
      sectionExample.style.color = colorSelected.value
    })
  }

  changeTextColor()

  function changeFontSize() {
    let selectFontSize = document.querySelector('select#select-FontSize')
    selectFontSize.addEventListener('change', () => {
      let fontSize = selectFontSize.selectedOptions[0]
      sectionExample.style.fontSize = `${Number(fontSize.value)}rem`
    })
  }

  changeFontSize()

  function changeLineHeight() {
    let selectLineHeight = document.querySelector('select#select-LineHeight')
    selectLineHeight.addEventListener('change', () => {
      let selectedLineHeight = selectLineHeight.selectedOptions[0]
      sectionExample.style.lineHeight = `${Number(selectedLineHeight.value)}em`
    })
  }

  changeLineHeight()

  function changeFontFamily() {
    let selectFontFamily = document.querySelector('select#select-FontFamily')
    selectFontFamily.addEventListener('change', () => {
      let selectedFontFamily = selectFontFamily.selectedOptions[0]
      sectionExample.style.fontFamily = selectedFontFamily.value
    })
  }

  changeFontFamily()
}
