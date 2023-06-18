import React from "react";
import {Image, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {COLORS} from '../../theme/colors.ts';

type PROPS = {
    items: any,
    title: string,
    icon: any
    onClick: any
}
const MenuComponent:React.FC<PROPS> = ({ items, title, icon, onClick }) => {
    return (
        <Menu >
            <MenuButton>
                {icon && <FontAwesomeIcon icon={icon} style={{ color: '#000000', }}/>}{title}
            </MenuButton>
            <MenuList>
                {items && items.map((menu:any, index:number) => {
                    return (
                        <MenuItem minH='48px' key={index} _hover={{ bg: COLORS.BLUE100 }} onClick={()=>onClick(menu.value)}>
                            {menu.image && <Image
                                src={menu.image}
                                alt='Fluffybuns the destroyer'
                                mr='12px'
                            />}
                            <span>{menu.content}</span>
                        </MenuItem>
                    )
                })}
            </MenuList>
        </Menu>
    )
}

export default MenuComponent
