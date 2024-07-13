import { read, utils } from 'xlsx';
import {spreadsheetHeaders} from '../data/headers'
export const getJSONArrayFromSpreadsheet = async (e) => {
    const blob = e.target.files[0]
    const arrayBuffer = await blob.arrayBuffer()
    const workbook = read(arrayBuffer, { type: "array" });
    let arr = []
    workbook.SheetNames.forEach(sheetName => {
      const worksheet = workbook.Sheets[sheetName];
      const json = utils.sheet_to_json(worksheet);
      let jsonArray = [];
      json.forEach(element => {
        jsonArray.push(element)
      });
      arr.push(...jsonArray)
    });
    return arr
  }
  export const convertToolFromSpreadsheet = (tool) => {
    const json = {}
    Object.keys(tool).forEach(key => {
      Object.keys(spreadsheetHeaders).forEach(header => {
        if (spreadsheetHeaders[header] === String(key).trim()) {
          if (spreadsheetHeaders[header] === spreadsheetHeaders.notes) {
            json[header] = [{ text: tool[key], createDate: new Date() }]
            console.log(header, json[header])
          } else {
            json[header] = String(tool[key]).trim()
          }
        }
      })
    })
    return json
  }