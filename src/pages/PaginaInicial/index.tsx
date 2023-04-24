import { Box } from "@mui/material";
import { Cabecalho, CardPokemon, Pesquisa } from "../../shared/components";

export function PaginaInicial() {
    // const [dadosDosPokemons, setDadosDosPokemons] = useState([]);

    // const nome = "Ditto"

    // useEffect(() => {
    //     async function obterDadosDosPokemons() {
    //         try {
    //             const { data } = await ObterPokemons(nome)
    //             setDadosDosPokemons(data)
    //         } catch (erro) {
    //             console.log(erro)
    //         }

    //     }
    //     obterDadosDosPokemons();
    // }, [])

    return (
        <>
            <Cabecalho />
            <Box padding="1.875em 0">
                <Pesquisa />
            </Box>
            <CardPokemon />
        </>
    );
} 