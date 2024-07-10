const FILEPATH = '../config/'
const saveJSONToLocalStorage = async (object, key) => {
    if (!object || !key) return
    var fs = require('fs').promises;
    const savedData = await getJSONFromLocalStorage(key)
    if (savedData && Array.isArray(savedData)) {
        console.log('got data, and it array', JSON.stringify(savedData), JSON.stringify(object))
        if (savedData.find(obj => obj.name === object.name)) {
            console.log('updating item')
            updateObjectInArray(savedData, object)
            return
        }
        else {
            console.log('pushing item', object, "to array ", savedData)
            pushToArray(savedData, object)
            console.log(savedData)
        }
    }
    result = savedData
    console.log(result)
    fs.writeFile(FILEPATH + `${key}.json`.toUpperCase(), JSON.stringify(result), { encoding: 'utf8' });
}
const updateExistingLocalStorage = async (object, key) => {
    if (!object || !key) return
    var fs = require('fs').promises;
    const savedData = await getJSONFromLocalStorage(key)
    if (savedData && Array.isArray(savedData)) {
        updateObjectInArray(savedData, object)
    }
    fs.writeFile(FILEPATH + `${key}.json`.toUpperCase(), JSON.stringify(savedData), { encoding: 'utf8' });
}

const getJSONFromLocalStorage = async (key) => {
    var fs = require('fs').promises;
    let result;
    const exists = await checkIfFileExists(key)
    if (exists) {
        const data = await fs.readFile(FILEPATH + `${key}.json`.toUpperCase(), { encoding: 'utf8' })
        if (data !== "") {
            result = JSON.parse(data)
            // console.log("got from local storage" , result)
        }
    }
    else {
        result = []
    }
    return result

};

const checkIfFileExists = async (key) => {
    let result = false;
    try {
        var fs = require('fs');
        await fs.promises.access(FILEPATH + `${key}.json`.toUpperCase(), fs.constants.F_OK);
        result = true;
    } catch (err) {
        console.log(err, "failed to find file")
        result = false
    }
    return result
}

function pushToArray(arr, obj) {
    const index = arr.findIndex(item => `${item.name}`.toUpperCase() === `${obj.name}`.toUpperCase());

    if (index === -1) {
        arr.push(obj);
    } else {
        arr[index] = obj;
    }
}
function updateObjectInArray(arr, obj) {
    const index = arr.findIndex((e) => e.name === obj.name);
    if (index === -1) {
        arr.push(obj);
    } else {
        arr[index] = obj;
    }
}
function deleteObjectInArray(arr, obj) {
    const index = arr.findIndex((e) => e.name === obj.name);
    if (index === -1) {
        return;
    } else {
        delete arr[index]
    }
}

module.exports = { getJSONFromLocalStorage, saveJSONToLocalStorage, updateExistingLocalStorage, deleteObjectInArray }