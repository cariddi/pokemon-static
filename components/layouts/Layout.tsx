import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface LayoutProps extends React.PropsWithChildren {
	title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title ?? "Pokemon App"}</title>
				<meta name="author" content="Lucas Cariddi" />
				<meta name="description" content="Info about the pokemon XXXXXX" />
				<meta name="keywords" content="XXXXXX, pokemon, pokedex" />
			</Head>

			<Navbar />

			<main
				style={{
					padding: "0px 20px",
				}}
			>
				{children}
			</main>
		</>
	);
};
