import { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";
import { PokemonList, Pokemon } from "../../interfaces";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { PokemonCard } from "../../components/pokemon";

interface HomeProps {
	pokemons: Pokemon[];
}

const HomePage: NextPage<HomeProps> = ({ pokemons }) => {
	if (!pokemons) return <>No Pokemons for now :s</>;

	return (
		<Layout title="Pokemon List">
			{
				<Grid.Container gap={2} justify="flex-start">
					{pokemons.map((pokemon) => (
						<PokemonCard key={pokemon.url} pokemon={pokemon} />
					))}
				</Grid.Container>
			}
		</Layout>
	);
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {
	const {
		data: { results },
	} = await pokeApi.get<PokemonList>("/pokemon?limit=151");

	const pokemons: Pokemon[] = results.map((pokemon, idx) => ({
		...pokemon,
		id: idx + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
			idx + 1
		}.svg`,
	}));

	return {
		props: {
			pokemons,
		},
	};
};

export default HomePage;
