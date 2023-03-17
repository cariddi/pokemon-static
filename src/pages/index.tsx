import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import { Layout } from "../../components/layouts";

const HomePage: NextPage = () => {
	return (
		<Layout title="Pokemon List">
			<h1>Hello World</h1>
			<Button color="gradient">Click Me!</Button>
		</Layout>
	);
};

export default HomePage;
