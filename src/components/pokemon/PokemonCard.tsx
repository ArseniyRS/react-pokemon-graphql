import { Box, Spinner, Text, useBoolean } from "@chakra-ui/react";
import React from "react";
import { useQueryState } from "~/hooks/useQueryState";
import getPockemonAttack from "~/graphql/query/pokemonAttack.graphql";
import { IPokemon, IPokemonAttack } from "./pokemon.interface";

const defaultState = {
  pokemon: {
    attacks: {
      fast: [],
      special: [],
    },
  },
};

function PokemonCard({ id, name, image }: IPokemon) {
  const [hover, setHover] = useBoolean();
  const [
    {
      attacks: { fast, special },
    },
    loading,
    error,
  ] = useQueryState<typeof defaultState, IPokemonAttack>(
    getPockemonAttack,
    {
      variables: { id, name },
      skip: !hover,
    },
    defaultState,
  );
  const fastAttacks = fast.map((attack) => <Box />);
  const specialAttacks = special.map((attack) => <Box />);

  const renderAttacks = () => {
    if (loading) {
      return <Spinner />;
    }
    if (fast.length || special.length) {
      return (
        <Box>
          {fastAttacks}
          {specialAttacks}
        </Box>
      );
    }
    return null;
  };
  return (
    <Box
      p={8}
      bg="#f2f2f2"
      borderRadius={8}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      onMouseEnter={setHover.on}
      onMouseLeave={setHover.off}
    >
      <Box
        width={170}
        height={170}
        borderRadius={8}
        bg="#fff"
        overflow="hidden"
        display="flex"
        justifyContent="center"
      >
        <img src={image} alt="" />
      </Box>
      <Text fontWeight={600} textTransform="uppercase">
        {name}
      </Text>
      {renderAttacks()}
    </Box>
  );
}

export default PokemonCard;
