import { useState } from "react";
import { Link } from "react-router";
import { useTheme } from "~/ThemeProvider";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function handleClick(): void {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <>
      {theme === "dark" ? (
        <img
          onClick={handleClick}
          className={" size-19 "}
          src="../public/light-mode.svg"
        />
      ) : (
        <img
          onClick={handleClick}
          className={" size-19 "}
          src="../public/dark-mode.svg"
        />
      )}
    </>
  );
}

function Header() {
  return (
    <div
      className={
        "flex content-center justify-between absolute w-full p-10 h-0 overflow-visible"
      }
    >
      <ThemeToggle />
      <Link to={"https://discord.gg/gTT5uhwXJB"}>
        <button className="bg-gold py-3.5 rounded-[0.9375rem] w-40.25 flex place-content-center gap-25.25 cursor-pointer">
          <p className={"text-text-opposite"}>DISCORD</p>
        </button>
      </Link>
    </div>
  );
}

function Card({ children, cssClasses = "" }) {
  return (
    <div
      className={`p-12 bg-card-bg rounded-[1.5625rem] flex flex-col items-center w-full ${cssClasses}`}
    >
      {children}
    </div>
  );
}

function Seperator({ direction }) {
  if (direction === "hr" || direction === "horizontal") {
    return <div className={"h-2px w-md border rounded-2xl border-gold"}></div>;
  } else if (direction === "vr" || direction === "vertical") {
    return <div className={"h-180 w-2px border rounded-2xl border-gold"}></div>;
  }
  return <div className={"text-red-600"}>Seperator bad argument</div>;
}

function Background() {
  const { theme } = useTheme();
  return (
    <>
      <div className="flex flex-col absolute -z-1 items-center">
        <img src={`../public/${theme}-bg.png`}></img>
        <img src={`../public/umbra.svg`} className={"w-223 opacity-25"}></img>
        <div className="flex flex-row -z-1 ">
          <div
            className={"absolute left-0 top-full mt-[20vh] -translate-x-1/2"}
          >
            <img
              src={`../public/${theme}-sun-moon.png`}
              className="rotate-45 w-131"
            ></img>
          </div>
          <div
            className={"absolute right-0 top-full mt-[20vh] translate-x-1/2"}
          >
            <img
              src={`../public/${theme}-sun-moon.png`}
              className="rotate-45 w-131"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

function TLDRInfo({ question, answer, line = true }) {
  return (
    <>
      <div className={"flex flex-col gap-12"}>
        <div className={"flex justify-between w-md"}>
          <p>{question}</p>
          <p>{answer}</p>
        </div>
        {line ? <Seperator direction={"hr"} /> : ""}
      </div>
    </>
  );
}

function OrderedList({ items }) {
  const listItems = items.map((item: string, index: number) => {
    return (
      <li key={index} className={"text-gold"}>
        <span className={"text-text ml-22"}>{item}</span>
      </li>
    );
  });
  return (
    <ol className={"list-decimal text-[1.75em] leading-21"}>{listItems}</ol>
  );
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
    <>
      <Background />
      <Header />
      <div className="flex flex-col items-center p-5 gap-5 h-screen">
        <Card cssClasses={"min-h-[calc(100vh-2rem)]"}>
          <h1 className={"-mt-10"}>UMBRA</h1>
          <h2>Who we are</h2>
          <div className={"flex gap-40 mt-8"}>
            <p className={"w-122.25"}>
              We are an upcoming MineShoku Tensei guild focused on Trading,
              Roleplay, and PvP. If you value status, economic power, and money,
              you've found the right place. We want to build a strong economy
              both within and outside the guild while ensuring every member
              reaches their full potential. <br />
              <br />
              Loyalty is a strict requirement. In return, we view and treat all
              our members as equals, operating as a unified front. <br />
              <br /> To join Umbra, send a request by clicking our guild tag
              in-game or apply through our Discord server. <br />
              <br />
              In Umbra we dont have a rank system, we only have 2 ranks, leader
              and member. This is to ensure that all members are treated
              equally.
            </p>
            <Seperator direction={"vr"} />
            <div className={"flex flex-col gap-12 w-122.25"}>
              <TLDRInfo question={"Guild"} answer={"Umbra"} />
              <TLDRInfo question={"Server"} answer={"Mineshoku Tensei"} />
              <TLDRInfo question={"Game"} answer={"Minecraft"} />
              <TLDRInfo question={"Founded"} answer={"2026"} />
              <TLDRInfo question={"Members"} answer={"X active"} />
              <TLDRInfo
                question={"Focus"}
                answer={"Trading, PvP & RP"}
                line={false}
              />
            </div>
          </div>
        </Card>
        <Card>
          <h2>Guild rules</h2>
        </Card>
        <Card>
          <h3>General</h3>
          <OrderedList items={generalRules} />
        </Card>
        <Card>
          <h3>PvP and Operations</h3>
          <OrderedList items={pvpAndOperations} />
        </Card>
        <Card cssClasses={"max-w-276"}>
          <h3>Requirements</h3>
          <div className={"flex mt-12"}>
            <div className={"w-126"}>
              <p className="text-gold">Server</p>
              <p>MineShoku Tensei</p>
            </div>
            <Seperator direction={"vr"} />
            <div className={"w-126"}>
              <p className="text-gold">Server</p>
              <p>MineShoku Tensei</p>
            </div>
          </div>
        </Card>
        <Card cssClasses={"max-w-276"}>
          <h3>How to apply</h3>
          <h4>
            Join our Discord server below, fill out the application request in
            the designated channel, and wait to be accepted or denied by
            leadership.
          </h4>
          <Link to={"https://discord.gg/gTT5uhwXJB"}>
            <button className="bg-gold py-3.5 rounded-[0.9375rem] w-40.25 flex place-content-center gap-25.25 cursor-pointer">
              <p className={"text-text-opposite"}>DISCORD</p>
            </button>
          </Link>
        </Card>
      </div>
    </>
  );
}
