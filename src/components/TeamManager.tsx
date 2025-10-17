import { useState, useEffect } from "react";
import { Save, FolderOpen, X, Check } from "lucide-react";
import { useStore } from "../state/store";
import type { Team, Position } from "../lib/types";
import { useTranslation } from "react-i18next";

type SavedTeam = {
  id: string;
  name: string;
  team: Team;
  rotationLabels?: Record<Position, string>;
  createdAt: number;
};

function loadSavedTeamsFromStorage(): SavedTeam[] {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem("savedTeams");
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("Erro ao carregar times salvos:", e);
    return [];
  }
}

export function TeamManager() {
  const team = useStore((s) => s.team);
  const { t } = useTranslation();
  const [savedTeams, setSavedTeams] = useState<SavedTeam[]>(() =>
    loadSavedTeamsFromStorage()
  );
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showLoadModal, setShowLoadModal] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [error, setError] = useState("");

  // Sincronizar com atualizações vindas de outras abas
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "savedTeams") {
        setSavedTeams(loadSavedTeamsFromStorage());
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Salvar times no localStorage sempre que o estado mudar
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      // Verificar se há times para salvar
      if (savedTeams.length > 0) {
        localStorage.setItem("savedTeams", JSON.stringify(savedTeams));
        // Verificar se foram realmente salvos
      } else {
        // Se não há times, remover a chave do localStorage
        localStorage.removeItem("savedTeams");
      }
    } catch (e) {
      console.error("Erro ao salvar times no localStorage:", e);
    }
  }, [savedTeams]);

  const handleSaveTeam = () => {
    if (!teamName.trim()) {
      setError(t("team_manager.team_name_required"));
      return;
    }

    // Verificar se já existe um time com o mesmo nome
    const existingTeam = savedTeams.find(
      (t) => t.name.toLowerCase() === teamName.trim().toLowerCase()
    );

    if (existingTeam) {
      setError(t("team_manager.team_name_exists"));
      return;
    }

    // Obter os rotationLabels do store
    const store = useStore.getState();
    const rotationLabels = store.rotationLabels;

    const newTeam: SavedTeam = {
      id: Date.now().toString(),
      name: teamName.trim(),
      team: JSON.parse(JSON.stringify(team)), // Deep copy do time atual
      rotationLabels: JSON.parse(JSON.stringify(rotationLabels)), // Deep copy dos rotationLabels
      createdAt: Date.now(),
    };
    const updatedTeams = [...savedTeams, newTeam];
    setSavedTeams(updatedTeams);
    setTeamName("");
    setShowSaveModal(false);
    setError("");
  };

  const handleLoadTeam = (savedTeam: SavedTeam) => {
    // Usar a função do store para carregar o time
    const store = useStore.getState();
    // Passar também os rotationLabels se existirem no savedTeam
    store.loadTeam(savedTeam.team, savedTeam.rotationLabels);

    setShowLoadModal(false);
  };

  const handleDeleteTeam = (id: string) => {
    setSavedTeams(savedTeams.filter((t) => t.id !== id));
  };

  return (
    <div className="flex items-center gap-2">
      {/* Botão de Salvar */}
      <button
        id="tm-open-save"
        className="btn items-center gap-2 hidden md:inline-flex"
        onClick={() => setShowSaveModal(true)}
        title={t("buttons.save")}
      >
        <Save size={16} />
      </button>

      {/* Botão de Carregar */}
      <button
        id="tm-open-load"
        className="btn items-center gap-2 hidden md:inline-flex"
        onClick={() => setShowLoadModal(true)}
        title={t("buttons.load")}
      >
        <FolderOpen size={16} />
      </button>

      {/* Modal de Salvar */}
      {showSaveModal && (
        <div className="fixed top-0 left-0 h-[100vh] inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-900 border border-white/10 rounded-lg p-6 w-96 max-w-full max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                {t("team_manager.save_team")}
              </h3>
              <button
                onClick={() => {
                  setShowSaveModal(false);
                  setError("");
                }}
                className="text-white/60 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                {t("team_manager.team_name")}
              </label>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="w-full bg-neutral-800 border border-white/10 rounded-md px-3 py-2 text-sm"
                placeholder={t("team_manager.team_name_placeholder")}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSaveTeam();
                  }
                }}
              />
              {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
            </div>

            <div className="flex justify-end gap-2">
              <button
                className="btn"
                onClick={() => {
                  setShowSaveModal(false);
                  setError("");
                }}
              >
                {t("buttons.cancel")}
              </button>
              <button
                className="btn bg-cyan-600 hover:bg-cyan-700"
                onClick={handleSaveTeam}
              >
                <Check size={16} />
                {t("buttons.save")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Carregar */}
      {showLoadModal && (
        <div className="fixed top-0 left-0 h-[100vh] inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-900 border border-white/10 rounded-lg p-6 w-96 max-w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                {t("team_manager.load_team")}
              </h3>
              <button
                onClick={() => setShowLoadModal(false)}
                className="text-white/60 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto mb-4">
              {savedTeams.length === 0 ? (
                <p className="text-white/60 text-center py-4">
                  {t("team_manager.no_saved_teams")}
                </p>
              ) : (
                <ul className="space-y-2">
                  {savedTeams.map((savedTeam) => (
                    <li
                      key={savedTeam.id}
                      className="flex items-center justify-between bg-neutral-800/50 rounded-md p-3"
                    >
                      <div>
                        <div className="font-medium">{savedTeam.name}</div>
                        <div className="text-xs text-white/60">
                          {new Date(savedTeam.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="text-cyan-400 hover:text-cyan-300"
                          onClick={() => handleLoadTeam(savedTeam)}
                        >
                          <Check size={18} />
                        </button>
                        <button
                          className="text-red-400 hover:text-red-300"
                          onClick={() => handleDeleteTeam(savedTeam.id)}
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex justify-end">
              <button className="btn" onClick={() => setShowLoadModal(false)}>
                {t("buttons.close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
