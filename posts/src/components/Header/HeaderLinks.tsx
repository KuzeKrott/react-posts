"use client";
import Link from "next/link";
import { HeaderLink } from "./Header";
import { IconButton, Typography } from "@mui/material";
import styles from "./Header.module.scss";
import DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';
import { useState } from "react";

export type HeaderLinksProps = {
    links: HeaderLink[],
}


const HeaderLinks = (props: HeaderLinksProps) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const MenuButtonHandler = (e: any) => {
        return (setMenuIsOpen((prev)=> {
            return !prev;
        }))
    }

    console.log(menuIsOpen);

    const {links} = props;

    return (
    <div className={styles[`header__links-container`]}>
        <div className={styles[`header__links-container-btn`]}>
            <IconButton onClick={MenuButtonHandler}>
                <DensityMediumRoundedIcon />
            </IconButton>
        </div>

        <div className={menuIsOpen ? styles[`header__links-container-wrapper-active`] : styles[`header__links-container-wrapper`]}>
            {links && links.map((link : HeaderLink, i : number) => {
                return (
                    <Link href={link.src} key={i} className={styles[`header__links-container-links`]}>
                        <Typography variant="h3">
                            {link.title}
                        </Typography>
                    </Link>
                )
            })}
        </div>
    </div>)
}

export default HeaderLinks;