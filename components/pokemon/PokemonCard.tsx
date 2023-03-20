import React from "react";
import { Grid, Card, Row, Text } from "@nextui-org/react";
import { Pokemon } from "../../interfaces";

interface PokemonCardProps {
	pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
	const { id, img, name, url } = pokemon;
	return (
		<Grid xs={6} md={3} sm={2} xl={1}>
			<Card hoverable clickable>
				<Card.Body css={{ p: 1 }}>
					<Card.Image src={img} width="100%" height={140} />
				</Card.Body>
				<Card.Footer>
					<Row justify="space-between">
						<Text>{name}</Text>
						<Text>{id}</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};
