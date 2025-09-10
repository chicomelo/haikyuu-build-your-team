import { encodeTeamToQuery } from "../services/share";
import { useStore } from "../state/store";
import { TeamManager } from "./TeamManager";
import logo from "../assets/logo.png";
import { Send } from "lucide-react";

export function TeamHeader() {
  const team = useStore((s) => s.team);
  const rotationLabels = useStore((s) => s.rotationLabels);

  const share = async () => {
    const url = encodeTeamToQuery(team, rotationLabels);
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copiado!");
    } catch {
      prompt("Copie o link:", url);
    }
  };

  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto max-w-[1600px] px-4 h-14 flex items-center gap-3">
        <div className="font-semibold flex items-center gap-2">
          <img src={logo} alt="Haikyu Fly High" className="h-6 inline" /> Haikyu
          Fly High - Build your Team
        </div>
        <div className="ml-auto flex items-center gap-2">
          <TeamManager />
          <button className="btn" onClick={share}>
            <Send size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
