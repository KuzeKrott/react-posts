import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Styles from "./Header.module.scss";

const Header=() => {
    

    return (
        <Grid2 container className={Styles.header}>
            <Grid2 xs={12}>
                CEREBRO
            </Grid2>
        </Grid2>
    )
}
export default Header