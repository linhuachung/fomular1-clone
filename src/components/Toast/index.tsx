import React from 'react'
import {createStandaloneToast} from '@chakra-ui/react';
import {TOAST_POSITION} from './toast-message.ts';

const { toast } = createStandaloneToast()

type PROPS = {
    title: string,
    status: number
    position: string
}

const Toast:React.FC<PROPS> = (title, status, position = TOAST_POSITION.top, duration = 4000, isClosable = true) => {
    return toast({
        title,
        status,
        position,
        variant: 'left-accent',
        duration,
        isClosable
    })
}

export default Toast
