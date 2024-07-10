
const { getJSONFromLocalStorage, saveJSONToLocalStorage, updateExistingLocalStorage } = require('../database/localStorage')

const getConfig = async (req, res) => {
  try {
    const path = req.params.key ? req.params.key : null
    const result = await getJSONFromLocalStorage(path)
    res.status(200).json(JSON.stringify(result))
  } catch (e) {
    res.status(401).json(JSON.stringify([{}]))
  }
}
const createNewConfig = async (req, res) => {
  const path = req.params.key ? req.params.key : null
  const config = req.body
  // delete config.uuid
  console.log(config, "config")
  try {
    const previousData = await getJSONFromLocalStorage(path)

    const existingObject = previousData && previousData.find(obj => obj.name === config.name)

    if (existingObject) {
      await updateExistingLocalStorage(config, path)
      res.status(201).json({
        title: 'Updated Data',
        detail: 'Successfully update  Data entry',
        json: JSON.stringify(config)
      });
    } else {
      // Object with matching name value not found
      // Proceed with creating a new data entry
      if (!config.name) throw new Error('Name is required')
      await saveJSONToLocalStorage(config, path)
      res.status(201).json({
        title: 'Created New Data',
        detail: 'Successfully create new Data entry',
        json: JSON.stringify(config)
      });
    }
  } catch (err) {
    console.log(err)
    res.status(400).json({
      errors: [
        {
          title: 'Registration Error',
          detail: 'Something went wrong during new data entry process.',
          errorMessage: err.message,
        },
      ],
    });
  }
}



const updateConfig = async (req, res) => {
  const path = req.params.key ? req.params.key : null
  const config = req.body
  delete config.uuid
  try {
    if (!config.name) throw new Error('Name is required')
    await updateExistingLocalStorage(config, path)
    res.status(201).json({ message: 'success', })
  } catch (e) {
    console.log(e)
    res.status(400).json({ error: e })
  }

};
module.exports = { getConfig, createNewConfig, updateConfig }