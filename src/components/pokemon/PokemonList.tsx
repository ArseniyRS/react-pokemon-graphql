import React from "react";
import { Flex, Spinner, useToast } from "@chakra-ui/react";
import { GET_POKEMONS_FOR_CARD } from "~/graphql/query/pockemons";
import { useQueryState } from "~/hooks/useQueryState";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const toast = useToast();
  const [data, loading, error] = useQueryState<{ pokemons: [] }, { pokemons: any[] }>(
    GET_POKEMONS_FOR_CARD,
    {
      variables: { first: 10 },
    },
    { pokemons: [] },
  );

  const cards = data.pokemons.map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon} />);
  return (
    <Flex gap={16} justifyContent="space-evenly" wrap="wrap">
      {error &&
        toast({
          title: `Pokemons load error`,
          status: "error",
          isClosable: true,
        })}
      {loading ? <Spinner /> : cards}
    </Flex>
  );
}

export default PokemonList;
