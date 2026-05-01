import type {Route} from "./+types/home";
import LandingPage from "../Home/main";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Umbra"},
        {name: "description", content: "Join Umbra today!"},
        {property: "og:image", content: "https://shl52fj0cqdjroa6.public.blob.vercel-storage.com/umbra.jpg"},
    ];
}

export default function Home() {
    return <LandingPage/>;
}
