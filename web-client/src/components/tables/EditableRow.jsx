
import { useState } from "react";
import { getSecret, secretNames } from "../../data/secrets.js";
import TextInput from "../inputs/TextInput";
import RowData from "./RowData";
import RowButton from "./RowButton.jsx";
import useToolTypes from '../../features/tools/hooks/UseToolTypes.jsx'
import { AiOutlineSwap } from 'react-icons/ai';
import {FaListOl} from 'react-icons/fa'
import ButtonShowInput from "../buttons/ButtonShowInput.jsx";
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  const [showAddNotesForm, setShowAddNotesForm] = useState(false)
  const [toolTypes,refreshToolTypes] = useToolTypes()
  const handleAddNoteClick = (e) => {
    e.preventDefault()
    setShowAddNotesForm(showAddNotesForm => !showAddNotesForm)
  }
const [showAddHistoricPartForm, setShowAddHistoricPartForm] = useState(false)
const handleAddHistoricPartClick = (e) => {
  setShowAddHistoricPartForm(true)

}

  const headers = getSecret(secretNames.toolHeaders)
  const createInput = (key) => {
    const displayName = headers.filter(header => header.key === key)[0].displayName
    let input;
    switch (key) {
      case "type":
        input =
          <select className="editable-row-select" value={editFormData[key]} name={key} onChange={handleEditFormChange}  >
            <option value={'undefined'}>N/A</option>

            {
              // getSecret(secretNames.formOptions).toolTypes
              toolTypes
                .map(type => <option value={type.displayName}>{type.displayName}</option>)
            }
          </select>
        break;
      case "location":
        // input = <MoveToolButton uuid={toolUuid}/>
        // input = <select className="editable-row-select" value={editFormData[key]} name={key} onChange={handleEditFormChange} >
        //   <option value={'undefined'}>N/A</option>

        //   {getSecret(secretNames.formOptions).locations.map(location => <option value={location.displayName}>{location.displayName}</option>)}
        // </select >
        input = <p>Use Move Tool Button</p>
        break;
      case "notes":
        input = input = <ButtonShowInput key={key} displayName={displayName} handleChange={handleEditFormChange}>Add Note</ButtonShowInput>
        break;
        case "historicNumbers":
          input = <ButtonShowInput key={key} displayName={displayName} handleChange={handleEditFormChange}>
            <FaListOl />
          </ButtonShowInput>
          break;
      default:
        input = <TextInput name={key} placeholder={displayName} value={editFormData[key]} handleChange={handleEditFormChange} />
        break;
    }

    return input
    // return <RevealButton contents={input}>Add {displayName}</RevealButton>
  }
  return (

    <tr >

      {Object.keys(editFormData).map(key => {
        {
          const formKey = createInput(key);
          return <RowData formKey={formKey} />
        }
      })}
      <td>
        <div style={{ display: 'inline-flex', gap: '10px' }}>
          <RowButton color='green' backgroundColor="green" type="submit" >
            Save
          </RowButton>
          <RowButton color="red" type="button" onClick={handleCancelClick}>
            Cancel
          </RowButton>
        </div>
      </td>
    </tr>
  );
};

export default EditableRow;
