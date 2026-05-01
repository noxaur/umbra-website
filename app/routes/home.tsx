import type {Route} from "./+types/home";
import LandingPage from "../Home/main";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Umbra"},
        {name: "description", content: "Join Umbra today!"},
        {property: "og:image", content: "/umbra.svg"},
    ];
}

export default function Home() {
    return <LandingPage/>;
}
