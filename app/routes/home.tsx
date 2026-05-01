import type { Route } from "./+types/home";
import LandingPage from "../LandingPage/landingpage";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Umbra" },
		{ name: "description", content: "Join Umbra today!" },
	];
}

export default function Home() {
	return <LandingPage />;
}
