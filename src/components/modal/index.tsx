import {
    Button,
    Modal as ChakraModal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import React from "react";

type PROPS = {
    titleModal: string,
    buttonTitle: string,
    children: any,
}
const Modal:React.FC<PROPS> = ({titleModal, buttonTitle, children}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}  margin={'0 26px'} >{buttonTitle}</Button>
            <ChakraModal isOpen={isOpen} onClose={onClose} size={'6xl'} isCentered >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{titleModal}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {children}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </ChakraModal>
        </>
    )
}
export default Modal
