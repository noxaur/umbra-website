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
            <div className={"flex justify-between w-full"}>
                <p>{question}</p>
                <p>{answer}</p>
            </div>
            {line && <Separator className={"w-full h-[2px]"}/>}
        </>
    );
}


export function NumberList({items}: { items: Array<string> }) {
    return (
        <ol className={"list-decimal list-inside "}>
            {items.map((item: string, index: number): JSX.Element => (
                <li key={index} className={"text-gold not-last:mb-10"}>
                    <span className={"text-text lg:ml-22"}>{item}</span>
                </li>
            ))}
        </ol>
    );
}