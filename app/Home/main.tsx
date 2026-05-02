import Header from "./components/header";
import Background from "./components/background";
import Hero from "./components/hero";
import Card from "~/Home/components/card";
import Separator from "~/Home/components/separator";
import {NumberList} from "~/Home/components/list";
import {Link} from "react-router";

function Footer() {
    return (
        <div className="flex flex-col items-center h-fit gap-10 p-10 w-full">
            <Separator className={"w-full h-0.5 bg-card-bg!"}/>
            <p className={"text-card-bg!"}>© 2026 Umbra Guild. All rights reserved.</p>
        </div>
    )
}


export default function LandingPage() {
    const generalRules: Array<string> = [
        "Immaturity within the guild will not be tolerated.",
        "Abusive language towards guild members or other players will result in punishment.",
        "All members are treated equally regardless of rank outside of Umbra.",
        "We operate as a team - no acting against members, allies, or approved friends.",
    ];
    const pvpAndOperations: Array<string> = [
        "Never attack an ally or an approved neutral unless directly provoked and confirmed.",
        "Coordinate before engaging - solo plays that ruin group ops will be addressed.",
    ];
    return (
        <div className="h-fit">
            <Background/>
            <Header/>
            <div className="flex flex-col items-center p-5 gap-5 h-fit">
                <Hero/>
                <Card className="w-full">
                    <h2>Guild rules</h2>
                </Card>
                <Card className="w-full">
                    <h3>General</h3>
                    <NumberList items={generalRules}/>
                </Card>
                <Card className="w-full">
                    <h3>PvP and Operations</h3>
                    <NumberList items={pvpAndOperations}/>
                </Card>
                <Card className="w-276 py-7.5 px-20 gap-8">
                    <h3>Requirements</h3>
                    <div className={"flex mt-12 self-stretch content-center justify-between"}>
                        <div className={"flex flex-col self-stretch justify-between pt-10 pb-10 gap-25"}>
                            <div className={"flex flex-col items-start w-117.75"}>
                                <p className="text-gold">Server</p>
                                <p>MineShoku Tensei</p>
                            </div>
                            <div className={"flex flex-col items-start w-117.75"}>
                                <p className="text-gold">Attitude</p>
                                <p>Loyal, non-toxic, Won’t cause drama</p>
                            </div>
                            <div className={"flex flex-col items-start w-117.75"}>
                                <p className="text-gold">Activity</p>
                                <p>3+ hrs/week</p>
                            </div>
                        </div>
                        <Separator className={"w-[2px] h-md"}/>
                        <div className={"flex flex-col self-stretch justify-between pt-10 pb-10 gap-25"}>
                            <div className={"flex flex-col items-end w-117.75"}>
                                <p className="text-gold">Server</p>
                                <p>MineShoku Tensei</p>
                            </div>
                            <div className={"flex flex-col items-end w-117.75"}>
                                <p className="text-gold">Voice</p>
                                <p>Mic preferred but not required</p>
                            </div>
                            <div className={"flex flex-col items-end w-117.75"}>
                                <p className="text-gold">Commitment</p>
                                <p>Willing to play often</p>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="w-276 gap-12">
                    <h3>How to apply</h3>
                    <p className={"text-center"}>
                        Join our Discord server below, fill out the application
                        request in the designated channel, and wait to be
                        accepted or denied by leadership.
                    </p>
                    <Link to={"https://discord.gg/gTT5uhwXJB"}
                          className="bg-gold flex place-content-center py-3.5 rounded-[0.9375rem] w-full gap-25.25 cursor-pointer">
                        <p className={"text-text-opposite"}>DISCORD</p>
                    </Link>
                </Card>
            </div>
            <Footer/>
        </div>
    );
}
