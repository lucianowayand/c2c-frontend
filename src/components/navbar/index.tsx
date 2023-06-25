import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
    const { logOut } = useAuth()

    // return <Box display="flex" justifyContent="space-between" pt="1.5em" px="2em">
    //     <Typography fontSize={24} fontWeight={700} color="#F2911B" fontFamily="Inter">Moovy</Typography>
    //     <IconButton onClick={logOut}>
    //         <LogoutIcon />
    //     </IconButton>
    // </Box>
}