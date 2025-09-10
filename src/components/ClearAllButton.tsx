import { Trash2, RotateCw } from "lucide-react";
import { useStore } from "../state/store";
import { useTranslation } from "react-i18next";

export function ClearAllButton() {
  const { t } = useTranslation();
  const clearAllSlots = useStore((s) => s.clearAllSlots);
  const rotatePositions = useStore((s) => s.rotatePositions);

  const handleClearAll = () => {
    // Confirmar com o usuário antes de limpar tudo
    if (
      confirm(
        t("team_manager.confirm_clear_all")
      )
    ) {
      clearAllSlots();
    }
  };

  const handleRotate = () => {
    rotatePositions();
  };

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-20 flex gap-4">
      <button
        onClick={handleRotate}
        className="flex items-center justify-center bg-blue-600/80 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors backdrop-blur-sm border border-blue-500/30 shadow-lg"
        title={t("buttons.rotate")}
      >
        <RotateCw size={16} />
      </button>
      <button
        onClick={handleClearAll}
        className="flex items-center justify-center bg-red-600/80 hover:bg-red-700 text-white p-3 rounded-lg transition-colors backdrop-blur-sm border border-red-500/30 shadow-lg"
        title={t("buttons.clear_all")}
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
