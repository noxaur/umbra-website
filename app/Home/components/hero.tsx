import Card from "~/Home/components/card";
import Separator from "~/Home/components/separator";
import {InfoRow} from "~/Home/components/list"
import {motion} from "motion/react"

export default function Hero() {
    return (

        // Start of Hero CARD
        <Card className="h-fit w-full gap-3 pb-5">
            <div>
                <motion.h1 initial={{scale: 0,}}
                           animate={{scale: 1}}
                           className={"-mt-5 -mb-2"}
                           style={{willChange: "opacity"}}>UMBRA
                </motion.h1>
            </div>
            <h4>A GUILD IN MINESHOKU TENSEI</h4>
            <h2>Who we are</h2>
            <div className={"flex justify-center gap-40 w-full"}>
                <p className={"hidden lg:flex w-122.25 text-center"}>
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
                <Separator className={"hidden lg:flex w-[2px] h-fill"}/>
                <div className={"w-full flex flex-col gap-9.5 lg:w-122.25"}>
                    <InfoRow question={"Guild"} answer={"Umbra"}/>
                    <InfoRow
                        question={"Server"}
                        answer={"Mineshoku Tensei"}
                    />
                    <InfoRow question={"Game"} answer={"Minecraft"}/>
                    <InfoRow question={"Founded"} answer={"2026"}/>
                    <InfoRow
                        question={"Members"}
                        answer={"X active"}
                    />
                    <InfoRow
                        question={"Focus"}
                        answer={"Trading, PvP & RP"}
                        line={false}
                    />
                </div>
            </div>
        </Card>
    );
}