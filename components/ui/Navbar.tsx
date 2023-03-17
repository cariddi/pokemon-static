import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
	const { theme } = useTheme();
	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "start",
				padding: "0px 20px",
				backgroundColor: theme?.colors.gray700.value,
			}}
		>
			<Image
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
				alt="App's Icon"
				width={70}
				height={70}
			/>

			<Text color={theme?.colors.white.value} h2>
				P
			</Text>
			<Text color={theme?.colors.white.value} h3>
				okemon
			</Text>

			<Spacer css={{ flex: 1 }} />

			<Text color={theme?.colors.white.value}>Favorites</Text>
		</div>
	);
};
