
import { useState } from 'react';
import RowButton from '../tables/RowButton';
import TextInput from '../inputs/TextInput';

const ButtonShowInput = ({ key, displayName, handleChange, children }) => {
    const [showInput, setShowInput] = useState(false);
    const handleButtonClick = (e) => {
        setShowInput(true);
    };

    return (
        showInput
            ? <TextInput name={key} placeholder={displayName} value={undefined} handleChange={handleChange} />
            : <RowButton onClick={handleButtonClick}>
                {children}
            </RowButton>
    );
};

export default ButtonShowInput;
