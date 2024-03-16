import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Styles from "./Footer.module.scss";

const Footer=() => {
    

    return (
        <Grid2 container spacing={4} className={Styles.footer}>
            <Grid2 xs={3}>
                jopik
            </Grid2>
            <Grid2 xs={9}>
                SEXYLADY
            </Grid2>
        </Grid2>
    )
}
export default Footer