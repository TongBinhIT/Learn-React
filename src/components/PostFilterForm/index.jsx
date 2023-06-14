
import PropTypes from 'prop-types';
import { useState } from 'react';
import {  useRef } from 'react';

PostFilterFrom.propTypes = {
    onSubmit: PropTypes.func,  
    
};
PostFilterFrom.defaultProps = {
    onSubmit: null,
 };

function PostFilterFrom(props) {
    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState('')
    const typingTimeout = useRef(null);

    function handleSearchTerm(e){
        const value = e.target.value
        setSearchTerm()

        if  (!onSubmit) return;
        if(typingTimeout.current){
            clearTimeout(typingTimeout.current);
        }

        typingTimeout.current = setTimeout(() => {
            const fromValue = {
                searchTerm : value,
            }
    
            onSubmit(fromValue) 
        }, 300);

    }

    return (
        <div>
            <form action="hi">
                <input type="text" 
                value={searchTerm}
                onChange={handleSearchTerm}
                />
            </form>
        </div>
    );
}

export default PostFilterFrom;