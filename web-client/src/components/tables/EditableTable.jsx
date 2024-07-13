import { useState, useRef } from 'react'
import { getSecret, secretNames } from '../../data/secrets'
import HigherOrderRow from './HigherOrderRow'
import { colors } from '../../data/colors'
import { Database } from '../../services/api/Database'
import useThemeStyle from '../../features/theme/hooks/useThemeStyle'

const EditableTable = ({ tools, refreshCallback }) => {
    const headers = getSecret(secretNames.toolHeaders)
    const [editFormData, setEditFormData] = useState({});
    const [editToolId, setEditToolId] = useState(null);
    const toolsPath = getSecret(secretNames.toolsPath)
    const submitForm = async (e) => {
        e.preventDefault()
        const oldTool = tools.find(tool => tool._id === editToolId)
        console.log(oldTool)
        const formData = new FormData(e.target)
        const inputObject = Object.fromEntries(formData)
        Object.keys(inputObject).forEach(key => {
            console.log(key)
            if(key === 'notes' && typeof inputObject['notes'] === 'string'){
                inputObject['notes'] = [...oldTool.notes,{ createDate: new Date(), text: inputObject['notes'] }]
            }
            if(key === 'historicNumbers' && typeof inputObject['historicNumbers'] === 'string'){
                const oldNumbersArray = oldTool[key]
                console.log(oldNumbersArray,"old numbers")
                inputObject[key] = [...oldTool[key], inputObject[key]]
            }
            oldTool[key] = inputObject[key]
        })
        const database = new Database()
        const response = await database.updateOne(oldTool, '/tools')
        e.target.reset()
        setEditToolId(null)
        refreshCallback()

    }

    const handleCancelClick = () => {
        setEditToolId(null);
    };
    const handleEditFormChange = (e) => {
        e.preventDefault();
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        const newFormData = { ...editFormData, [fieldName]: fieldValue };
        setEditFormData(newFormData);
    }

    const handleDeleteClick = async (tool) => {
        const database = new Database();
        await database.deleteOne(tool, toolsPath)
        refreshCallback()
    };
    const handleEditClick = (event, tool) => {
        event.preventDefault();
        setEditToolId(tool._id);
        const json = {}
        headers.forEach(header => {
            json[header.key] = tool[header.key]
        });
        setEditFormData(json);
    };
    return (
        <form style={useThemeStyle({ flex: '2', height: '100%', width: '100%', overflow: 'scroll', overflowX: 'scroll', display: 'flex', flexDirection: 'column' })} onSubmit={submitForm}>
            <table style={useThemeStyle({ overflow: 'scroll' })} >
                <thead style={useThemeStyle({ position: 'sticky', top: '0px', })} >
                    <tr >
                        {headers.map(header => (
                            <th style={useThemeStyle()} key={header.key}>{header.displayName}</th>
                        ))}
                    </tr>
                </thead>
                <tbody style={useThemeStyle()}>
                    {tools.map((tool) => (
                        <HigherOrderRow
                            key={tool._id}
                            handleEditFormChange={handleEditFormChange}
                            headers={headers} refreshCallback={refreshCallback}
                            selectedCallback={() => { "" }}
                            editFormData={editFormData}
                            editToolId={editToolId}
                            handleCancelClick={handleCancelClick}
                            handleDeleteClick={handleDeleteClick}
                            handleEditClick={handleEditClick}
                            tool={tool} />
                    ))}
                </tbody>
            </table>
        </form>
    )
}

export default EditableTable