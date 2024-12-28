import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { ICONS } from '../data/icons';

export default function IconComponent({ iconName }) {
    const icon = ICONS[iconName];
    if (!icon) {
        console.error(`Icon ${iconName} not found`)
        return null;
    }
    return <FontAwesomeIcon icon={icon} size="2x" />
}

