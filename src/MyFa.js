import React from 'react'
import FontAwesome from 'react-fontawesome';

export const MyFa = ({name, size}) => (
    <FontAwesome
        name={name}
        className={ `fa-${size}x emboss` }
        spin
    />
)