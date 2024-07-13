import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteToolButton from "../../features/tools/components/buttons/DeleteToolButton";
import RowButton from "./RowButton";

const ReadOnlyRow = ({ tool, handleEditClick, handleDeleteClick, headers, checkbox, refreshCallback }) => {
  const [showConfirm, setShowConfirm] = useState(false)
  const confirmDelete = () => {
    handleDeleteClick(tool)
    setShowConfirm(false)
  }
  const handleCancelDeleteClick = () => {
    setShowConfirm(false)
  }
  const handleDeleteButtonClick = (e) => {
    setShowConfirm(true)
  }
  return (
    <tr style={{}}>
      {headers.map(head => {
        return <td style={{ maxWidth: '80px', wordWrap: 'break-word', maxHeight: "50px" }} key={head.key + tool[head.key]}>
          
          {String(head.key) === 'notes' ? tool[head.key].map(note => <><p>{note.text}</p></>) :String(head.key) === 'movements' ? tool[head.key].map(movement => <><p>{movement.destination}</p></>) : tool[head.key]}
        </td>
      })
      }
      <td>
        <div style={{ display: 'inline-flex', width: 'fit-content', justifyContent: 'center', alignItems: 'center', }}>
          <RowButton color='rgba(3,130,220,1)'
            onClick={(event) => handleEditClick(event, tool)}
          >
            ✎
          </RowButton>
          {/* {showConfirm ? <>
            <button onClick={handleCancelDeleteClick}>
              No
              <button onClick={confirmDelete}>
                Yes
              </button>
            </button>
          </> :
            <button type="button" onClick={handleDeleteButtonClick}>
              🗑
            </button>
          } */}
          <DeleteToolButton tool={tool} refreshCallback={refreshCallback} />
          <div style={{ margin: '10px' }}>

            {checkbox}
          </div>
          <RowButton >
            <Link to={'/tools/uuid/' + tool.uuid} >Info</Link>

          </RowButton>

        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;