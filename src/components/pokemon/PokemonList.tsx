import React from "react";
import { Flex, Spinner, useToast } from "@chakra-ui/react";
import { useQueryState } from "~/hooks/useQueryState";
import getPockemonsForCard from "~/graphql/query/pokemonsForCard.graphql";
import PokemonCard from "./PokemonCard";
import { IPokemonList } from "./pokemon.interface";

function PokemonList() {
  const toast = useToast();
  const [data, loading, error] = useQueryState<{ pokemons: [] }, IPokemonList>(
    getPockemonsForCard,
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
