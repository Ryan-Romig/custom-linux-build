import { useState, } from 'react';
import ExpandMoreButton from '../../features/tools/components/buttons/ExpandMoreButton';
import { Collapse } from '@mui/material';

export default function ExpandContainer({ text, children }) {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div style={{ width: '100%', display:'flex', justifyContent:'center' }}>
               <div style={{flex:'200'}}>{text}</div> <ExpandMoreButton expanded={expanded} onClick={handleExpandClick} />
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </>
    );
}