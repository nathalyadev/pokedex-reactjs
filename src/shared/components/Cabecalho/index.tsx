import { Box, Link } from "@mui/material";

export function Cabecalho() {
    return (
        <Box style={{ backgroundColor: "#9373cc", color: "#fff" }}>

            <ul>
                <Box style={{ padding: "0.5em 1em", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <li>
                        <img style={{ width: "100px", height: "50px" }} src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="" />
                    </li>
                    <li>
                        <Link style={{ color: "#fff", font: "Roboto", fontSize: "1.1em" }} href="pagina-inicial">Página Inicial</Link>
                    </li>
                </Box>
            </ul>
        </Box>
    )
}