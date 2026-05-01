import Separator from "~/Home/components/separator";
import type {JSX} from "react";

export function InfoRow({
                            question,
                            answer,
                            line = true,
                        }: {
    question: string;
    answer: string;
    line?: boolean;
}) {
    return (
        <>
            <div className={"flex flex-col gap-12"}>
                <div className={"flex justify-between w-md"}>
                    <p>{question}</p>
                    <p>{answer}</p>
                </div>
                {line && <Separator className={"w-md h-[2px]"}/>}
            </div>
        </>
    );
}

export function InfoList() {
    return (
        <>
            <Separator className={"w-[2px] h-md"}/>
            <div className={"flex flex-col gap-12 w-122.25"}>
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
        </>
    );
}

export function NumberList({items}: { items: Array<string> }) {
    return (
        <ol className={"list-decimal text-[1.75em] leading-21"}>
            {items.map((item: string, index: number): JSX.Element => (
                <li key={index} className={"text-gold"}>
                    <span className={"text-text ml-22"}>{item}</span>
                </li>
            ))}
        </ol>
    );
}