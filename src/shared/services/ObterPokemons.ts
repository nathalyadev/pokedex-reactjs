import { api } from "./api";

export const ObterPokemons = async (nomePokemon: string) => {
  try {
    const { data } = await api.get("pokemon/", {
      params: {
        nomePokemon,
      },
    });

    return data;
  } catch (erro) {
    console.log("Não foi possível cadastrar quartos", erro);
  }
};
