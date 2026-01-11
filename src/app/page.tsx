"use client";
import { useEffect, useState } from "react";
import CustomLink from "./components/CustomLink";
import Link from "next/link";
import Button from "./components/Button";
import { set } from "mongoose";
type SessionHistoryCode = {
  date: string;
  sessionCode: string;
  name: string | null;
};
export default function Home() {
  const [sessionHistoryCodes, setSessionHistoryCodes] = useState<
    SessionHistoryCode[]
  >([]);
  const [sessionCodesLoaded, setSessionCodesLoaded] = useState<
    SessionHistoryCode[]
  >([]);
  useEffect(() => {
    const storedCodes = localStorage.getItem("session_history_codes");
    if (storedCodes) {
      const sortedCodes = (
        JSON.parse(storedCodes) as SessionHistoryCode[]
      ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setSessionHistoryCodes(sortedCodes);
      setSessionCodesLoaded(sortedCodes.slice(0, 3));
    }
  }, []);

  const handleHideHistory = (e: React.MouseEvent) => {
    const button = e.currentTarget;
    const container = button.parentElement;
    if (!container) return;

    const codesHistoryContainer = container.querySelector(
      "#codesHistoryContainer"
    );
    if (!codesHistoryContainer) return;

    codesHistoryContainer.classList.toggle("opacity-0");
    container.classList.toggle("translate-x-40");
    button.textContent = button.textContent === ">" ? "<" : ">";
  };
  return (
    <>
      <h1 className="text-purple-500 text-2xl md:text-4xl font-bold">
        Witaj w ewaluatorze lekcji
      </h1>
      <div id="buttons-container" className="flex my-5 gap-8">
        <CustomLink href="/sessions/join" text="Dołącz do sesji" />
        <CustomLink href="/sessions/create" text="Utwórz sesje" />
      </div>
      <div className="flex flex-col absolute right-4 text-purple-500 font-bold  top-20 md:top-32">
        <Button
          className="h-fit w-fit mb-3"
          text=">"
          onClick={handleHideHistory}
        />
        <div
          className="flex flex-col bg-white p-3 rounded-md border-2 border-purple-500"
          id="codesHistoryContainer"
        >
          <h1 className="text-xl md:text-3xl">Historia sesji:</h1>
          {sessionCodesLoaded.map((sessionData, i) => (
            <Link
              key={i}
              href={`/sessions/${encodeURIComponent(sessionData.sessionCode)}`}
              className="hover:bg-purple-500 hover:text-white transition p-1 rounded-md"
              onMouseOver={(e: React.MouseEvent) =>
                (e.currentTarget.textContent = `${sessionData.sessionCode}`)
              }
              onMouseLeave={(e: React.MouseEvent) =>
                (e.currentTarget.textContent =
                  sessionData.name || sessionData.sessionCode)
              }
            >
              {sessionData.name || sessionData.sessionCode}
            </Link>
          ))}
          <Button
            text="...wyświetl więcej"
            disableDefaultStyling
            className="text-left cursor-pointer underline mt-2"
            onClick={(e: React.MouseEvent) => {
              setSessionCodesLoaded(sessionHistoryCodes);
              (e.currentTarget as HTMLButtonElement).style.display = "none";
            }}
          />
        </div>
      </div>
    </>
  );
}
