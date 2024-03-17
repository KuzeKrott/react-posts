import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Styles from "./Header.module.scss";
import HeaderLinks from "./HeaderLinks";


export type HeaderLink = {
    src : string,
    title : string,
}

const links = [
    {src : "/home", title : "HomePage"},
    {src : "/about", title : "AboutPage"},
    {src : "/home", title : "HomePage1"},
    {src : "/about", title : "AboutPage1"},
]

const Header=() => {
    

    return (
        <Grid2 container className={Styles.header}>
            <Grid2 xs={8}>
                <HeaderLinks links={links}></HeaderLinks>
            </Grid2>
            <Grid2 xs={4}></Grid2>
        </Grid2>
    )
}
export default Header