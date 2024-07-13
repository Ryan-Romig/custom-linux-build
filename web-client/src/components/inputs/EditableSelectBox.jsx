import { useRef, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';

//options should be array of objects with value and name properties
const EditableSelectBox = ({ initialText, callback, itemKey, options }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [text, setText] = useState(initialText);
    const [saveIntent, setSaveIntent] = useState('')

    const handleSave = () => {
        setIsEditable(false);
        callback({itemKey:itemKey, text:text})
    }
    const handleDoubleClick = () => {
        setIsEditable(true);
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleBlur = () => {
        if (!saveIntent) {
            setIsEditable(false);
            setText(initialText);
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {

            setIsEditable(false);
            callback({itemKey:itemKey, text:text})
        }
    };
    const handleMouseOverSave = () => {
        setSaveIntent(true)
        console.log(saveIntent)

    }
    const handleMouseLeaveSave = () => {
        setSaveIntent(false)
        console.log(saveIntent)
    }
    return (
        <div>
            {isEditable ? (
                <>
                    <select
                        value={text}
                        onChange={handleChange}
                        autoFocus
                        onKeyDown={handleKeyDown}
                        onBlurCapture={handleBlur}
                    >
                        {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}

                    </select>
                    <button onClick={handleSave} onMouseOver={handleMouseOverSave} onMouseLeave={handleMouseLeaveSave} >save</button>
                </>

            ) : (
                <p onDoubleClick={handleDoubleClick}>
                    {options.find(option => `${option.value}`.toUpperCase() === `${text}`.toUpperCase())?.name}
                </p>
            )}
        </div>
    );
};

export default EditableSelectBox;
