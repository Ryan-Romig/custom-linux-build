import {Fragment} from 'react'
import EditableRow from './EditableRow'
import ReadOnlyRow from './ReadOnlyRow'
function HigherOrderRow({ isChecked, editFormData, handleEditFormChange,handleCancelClick, headers,tool ,refreshCallback, handleEditClick, handleDeleteClick,editToolId, selectedCallback}) {

  const handleCheckboxCheckedChange = (e) => {
    selectedCallback(e.target.checked, tool)
  }
  const checkbox = <input onChange={handleCheckboxCheckedChange} checked={isChecked} type='checkbox' />
    return (
      <Fragment >
                            {editToolId === tool?._id ? (
                                <EditableRow
                                editFormData={editFormData}
                                handleEditFormChange={handleEditFormChange}
                                handleCancelClick={handleCancelClick}
                                tool={tool}
                                headers={headers}
                                saveRowCallback={refreshCallback}
                                checkbox={checkbox}
                                />
                                ) : (
                                    <ReadOnlyRow
                                    tool={tool}
                                    handleEditClick={handleEditClick}
                                    handleDeleteClick={handleDeleteClick}
                                    headers={headers}
                                    checkbox={checkbox}
                                    refreshCallback={refreshCallback}
                          
                                    />
                                    )}
                        </Fragment>
  )
}

export default HigherOrderRow