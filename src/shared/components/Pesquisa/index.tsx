import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export function Pesquisa() {
    return (
        <Box
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                width: "500px",
                height: "40px",
                border: "1px solid #b3b3b3",
                borderRadius: "4px"
            }}
        >
            <input
                style={{
                    width: "100%",
                    height: "38px",
                    border: "none",
                    padding: "1em",
                    fontSize: "1em",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "400",
                    borderRadius: "4px"

                }}
                type="search"
                name="pesquisar"
            />
            <Box
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50px",
                    height: "38px",
                    background: "#e6e6e6ab",
                    borderRadius: "4px"

                }}
            >
                <SearchIcon fontSize="medium" style={{ cursor: "pointer", color: "#b3b3b3" }} />
            </Box>
        </Box>
    );
}
