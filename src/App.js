import CardItem from "./components/CardItem";
import { Helmet } from "react-helmet";

function App() {
	return (
		<div>
			<Helmet>
				<style>{"body { background-color: white; }"}</style>
			</Helmet>
			<h2>Let's get started!</h2>
			<CardItem></CardItem>
		</div>
	);
}

export default App;
