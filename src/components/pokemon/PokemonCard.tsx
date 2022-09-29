import { Box, Spinner, Text, useBoolean } from "@chakra-ui/react";
import React from "react";
import { GET_POKEMON_ATTACK } from "~/graphql/query/pockemons";
import { useQueryState } from "~/hooks/useQueryState";

const defaultState = {
  pokemon: {
    attacks: {
      fast: [],
      special: [],
    },
  },
};
function PokemonCard({ id, name, image }) {
  const [hover, setHover] = useBoolean();
  const [
    {
      attacks: { fast, special },
    },
    loading,
    error,
  ] = useQueryState<typeof defaultState, any>(
    GET_POKEMON_ATTACK,
    {
      variables: { id, name },
      skip: !hover,
    },
    defaultState,
  );
  const fastAttacks = fast.map((attack) => <Box />);
  const specialAttacks = fast.map((attack) => <Box />);

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
