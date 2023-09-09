const DICE_ICON = {
  "1": {icon: "fa-solid fa-dice-one", code: "\uf525"},
  "2": {icon: "fa-solid fa-dice-two", code: "\uf528"},
  "3": {icon: "fa-solid fa-dice-three", code: "\uf527"},
  "4": {icon: "fa-solid fa-dice-four", code: "\uf524"},
  "5": {icon: "fa-solid fa-dice-five", code: "\uf523"},
  "6": {icon: "fa-solid fa-dice-six", code: "\uf526"},
}

export const mapToDiceIcon = (value) => {
  if (typeof value === 'string') {
    return DICE_ICON[value]
  } else if (typeof value === 'number') {
    return DICE_ICON[String(value)]
  }
}
