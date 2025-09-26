import { Trash2, RotateCw } from "lucide-react";
import { useStore } from "../state/store";
import { useTranslation } from "react-i18next";

export function ClearAllButton() {
  const { t } = useTranslation();
  const clearAllSlots = useStore((s) => s.clearAllSlots);
  const rotatePositions = useStore((s) => s.rotatePositions);

  const handleClearAll = () => {
    // Confirmar com o usuário antes de limpar tudo
    if (confirm(t("team_manager.confirm_clear_all"))) {
      clearAllSlots();
    }
  };

  const handleRotate = () => {
    rotatePositions();
  };

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[14.6rem] md:bottom-12 2xl:bottom-8 flex gap-4">
      <button
        onClick={handleRotate}
        className="flex items-center justify-center bg-zinc-700/80 hover:bg-zinc-800 text-white p-2 2xl:p-3 rounded-lg transition-colors backdrop-blur-sm border border-zinc-500/30 shadow-lg"
        title={t("buttons.rotate")}
      >
        <RotateCw className="w-4 h-4" />
      </button>
      <button
        onClick={handleClearAll}
        className="flex items-center justify-center bg-red-500/80 hover:bg-red-600 text-white p-2  2xl:p-3 rounded-lg transition-colors backdrop-blur-sm border border-red-500/30 shadow-lg"
        title={t("buttons.clear_all")}
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
