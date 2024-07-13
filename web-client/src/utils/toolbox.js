

export const getUniqueKeys = (array) => {
  const keys = {}
  array.forEach(array => Object.keys(array).forEach(key => keys[key] = key))
  return keys
}

export const getUniqueValues = (array, key) => {
  let unique = [];
  if (Array.isArray(array)) {
    unique = Array.from(new Set(array.map((item) => item[key])));
  }
  return unique
}

export const clearStorage = (localStorageKeys) => {
  Object.keys(localStorageKeys).forEach(key => {
    localStorage.clear(key)
  })
}

export const filterObjects = (filters, objects = [{}]) => {
  const filterKeys = Object.keys(filters)
  const filterValues = Object.values(filters)
  const filteredObjects = objects?.filter(object => {
    let result = filterKeys.length > 0 ? false : true

    for (let i = 0; i < filterKeys.length; i++) {
      if (filters[filterKeys[i]] === '' || String(object[filterKeys[i]]).toUpperCase().trim().includes(String(filters[filterKeys[i]]).toUpperCase().trim())) {
        result = true
      }
      else if (filterKeys[i] === 'search') {
        Object.keys(object).forEach(key => {
          if (key === 'notes') {
            object[key].forEach(note => {
              if (String(note.text).toUpperCase().includes(String(filters[filterKeys[i]].toUpperCase().trim()))) {
                result = true
              }
            })
          }
          if (String(object[key]).trim().toUpperCase().includes(String(filters[filterKeys[i]]).toUpperCase().trim())) {
            result = true
          }

        })
      }
      else {
        result = false
      }
    }
    return result
  })
  return filteredObjects
}

