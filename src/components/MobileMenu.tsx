import { Save, FolderOpen, Send, X } from "lucide-react";
import { useTranslation } from "react-i18next";

type Props = {
  open: boolean;
  onClose: () => void;
  onShare: () => void;
};

export function MobileMenu({ open, onClose, onShare }: Props) {
  const { t } = useTranslation();

  function trigger(id: string) {
    const el = document.getElementById(id) as HTMLButtonElement | null;
    if (el) el.click();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-20 bg-black/85 backdrop-blur-sm flex flex-col h-[100vh]">
      <div className="flex items-center justify-end p-4">
        <button aria-label="Close menu" className="btn" onClick={onClose}>
          <X size={18} />
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 w-full max-w-xs px-6">
          <button
            className="btn w-full justify-center text-base py-3"
            onClick={() => {
              trigger("tm-open-save");
              onClose();
            }}
          >
            <Save size={18} /> {t("buttons.save")}
          </button>
          <button
            className="btn w-full justify-center text-base py-3"
            onClick={() => {
              trigger("tm-open-load");
              onClose();
            }}
          >
            <FolderOpen size={18} /> {t("buttons.load")}
          </button>
          <button
            className="btn w-full justify-center text-base py-3"
            onClick={async () => {
              await onShare();
              onClose();
            }}
          >
            <Send size={18} /> {t("buttons.share")}
          </button>
        </div>
      </div>
    </div>
  );
}
