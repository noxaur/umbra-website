import Card from "~/Home/components/card";
import {type ReactNode} from "react";
import {InfoList} from "./list";

export default function Hero() {
    const allInfo: ReactNode = (
        <p className={"w-122.25 text-center"}>
            We are an upcoming MineShoku Tensei guild focused on Trading,
            Roleplay, and PvP. If you value status, economic power, and money,
            you've found the right place. We want to build a strong economy both
            within and outside the guild while ensuring every member reaches
            their full potential. <br/>
            <br/>
            Loyalty is a strict requirement. In return, we view and treat all
            our members as equals, operating as a unified front. <br/>
            <br/> To join Umbra, send a request by clicking our guild tag
            in-game or apply through our Discord server. <br/>
            <br/>
            In Umbra we don't have a rank system, we only have 2 ranks, leader
            and member. This is to ensure that all members are treated equally.
        </p>
    );
    return (

        // Start of Hero CARD
        <Card className="h-fit w-full">
            <h1 className={"-mt-10"}>UMBRA</h1>
            <h2>Who we are</h2>
            <div className={"flex gap-40 mt-8"}>
                {allInfo}
                <InfoList/>
            </div>
        </Card>
    );
}