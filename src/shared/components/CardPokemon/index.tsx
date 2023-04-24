// import { useEffect, useState } from "react";

import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
// import { ObterPokemons } from "../../services/ObterPokemons";

interface IPokemonsProps {
    name: string;
    id: number;
}


export function CardPokemon({ name, id }: IPokemonsProps) {
    const [dadosPokemons, setDadosPokemons] = useState<IPokemonsProps[]>([]);

    useEffect(() => {
        async function obterPokemons() {
            await api.get("https://pokeapi.co/api/v2/pokemon?limit=50").then((result) => {
                if (result instanceof Error) {
                    console.log(result.message);
                } else {
                    setDadosPokemons(result.data.results)
                    toast.success("Pokemons")
                }
            });



        }
        obterPokemons();
    }, [])

    return (
        <Box
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "repeat(6, 1fr)",
                gridColumnGap: "1.875em",
                gridRowGap: "1.875em",
                margin: "0 2em"
            }}
        >

            {dadosPokemons.map((pokemons) => (
                <li key={pokemons.id}>
                    <Card sx={{ maxWidth: 300, maxHeight: 320, display: "flex", flexWrap: "wrap" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.id}.png`}
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {pokemons.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Descrição pokemon
                                    {/* {pokemons} */}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Ver Detalhes
                            </Button>
                        </CardActions>
                    </Card></li>
            ))}
        </Box>
    )
}