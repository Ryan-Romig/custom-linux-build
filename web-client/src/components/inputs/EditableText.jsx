import React, { useState, useRef } from 'react';
const EditableText = ({ initialText, callback, itemKey, }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [text, setText] = useState(initialText);
    const [saveIntent, setSaveIntent] = useState('')
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
            handleSave()
        }
    };
    const handleSave = () => {
        setIsEditable(false);
        callback({itemKey:itemKey, text:text})

    }
    const handleMouseOverSave = () => {
        setSaveIntent(true)

    }
    const handleMouseLeaveSave = () => {
        setSaveIntent(false)
    }
    return (
        <div>
            {isEditable ? (
                <>
                    <input
                        type="text"
                        value={text}
                        onChange={handleChange}
                        autoFocus
                        onKeyDown={handleKeyDown}
                        onBlurCapture={handleBlur}

                    />
                    <button onClick={handleSave} onMouseOver={handleMouseOverSave} onMouseLeave={handleMouseLeaveSave} >save</button>

                </>
            ) : (
                <p onDoubleClick={handleDoubleClick}>{text}</p>
            )}
        </div>
    );
};

export default EditableText;
