import Card from "~/Home/components/card";
import Separator from "~/Home/components/separator";
import {InfoRow} from "~/Home/components/list";

export default function Hero() {
    return (

        // Start of Hero CARD
        <Card className="h-fit w-full gap-3 pb-5">
            <h1 className={"-mt-5 -mb-2"}>UMBRA</h1>
            <h4>A GUILD IN MINESHOKU TENSEI</h4>
            <h2>Who we are</h2>
            <div className={"flex justify-center gap-40 w-full"}>
                <div className={"hidden lg:flex flex-col gap-7 w-122.25 text-center"}>
                    <p>
                        Welcome to umbra, we are a different from a normal guild, as we are primaly made for
                        guests/unofficial members to join and trade with other players.
                    </p>
                    <p>
                        Some of the functions we have include shops, selling, buying so that you may easily browse
                        through them and find the items you desire.
                    </p>
                    <p>
                        Whether you are part of another guild or not, you are welcome to join,
                        as we only wish to
                        make the server experience better for everyone.
                    </p>
                </div>
                <Separator className={"hidden lg:flex w-[2px] h-fill"}/>
                <div className={"w-full flex flex-col gap-9.5 lg:gap-6.5 lg:w-122.25"}>
                    <InfoRow question={"Goal"} answer={"Unite the community"}/>
                    <InfoRow
                        question={"Language"}
                        answer={"English"}
                    />
                    <InfoRow question={"Founded"} answer={"2026"}/>
                    <InfoRow
                        question={"Official members"}
                        answer={"~13 active"}
                    />
                    <InfoRow
                        question={"Discord members"}
                        answer={"~20 active"}
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