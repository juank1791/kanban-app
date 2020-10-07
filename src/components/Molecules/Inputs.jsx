import React, { useState } from 'react';
import { Icon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const InputSearch = ({ value, onChange, placeholder, onBlur }) => {
    return (
        <div className='action_header_options_search'>
            <input
                type='text'
                name='search'
                id='search'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            <Icon fontSize='small'>search</Icon>
        </div>
    );
};
export const InputCheckIcon = ({
    name,
    checkClasses,
    nameClasses,
    iconClasses,
}) => {
    const [checkState, setCheck] = useState(false);
    const handleChange = (event) => {
        setCheck(event.target.checked);
        // No, este es el component Hijo, el evento Onchange viene por props desde el padre
    };
    return (
        <>
            <label htmlFor={`checkbox-${name}`} className='label'>
                <input
                    type='checkbox'
                    onChange={handleChange}
                    id={`checkbox-${name}`}
                    defaultChecked={checkState}
                    className={checkClasses}
                />
                <Icon
                    fontSize='small'
                    className={iconClasses}
                    id='check'
                    data-circle={checkState ? 'circle' : 'outline'}
                >
                    {checkState ? 'check_circle' : 'check_circle_outline'}
                </Icon>
                <span className={nameClasses}>{name}</span>
            </label>
        </>
    );
};
InputCheckIcon.defaultProps = {
    name: '',
    checkClasses: '',
    nameClasses: 'checkbox_name',
    iconClasses: '',
};
InputCheckIcon.propTypes = {
    props: PropTypes.object,
    name: PropTypes.string,
    onChange: PropTypes.func,
    checkClasses: PropTypes.string,
    containerClasses: PropTypes.string,
    iconClasses: PropTypes.string,
};