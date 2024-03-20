import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Styles from "./Header.module.scss";
import HeaderLinks from "./HeaderLinks";
import Logo from "./../../../public/next.svg";


export type HeaderLink = {
    src : string,
    title : string,
}

const links = [
    {src : "/", title : "Welcome"},
    {src : "/posts", title : "Posts"},
]

const Header=() => {
    

    return (
        <Grid2 container className={Styles.header}>
            <Grid2 xs={8}>
                <HeaderLinks links={links}></HeaderLinks>
            </Grid2>
            <Grid2 xs={4} className={Styles.header__logo}>
                <img {...Logo}></img>
            </Grid2>
        </Grid2>
    )
}
export default Header