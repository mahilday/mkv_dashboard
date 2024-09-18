import delay from "@/utils/delay";
import { useId, useState } from "react";
import { flushSync } from "react-dom";

const useDialogue = () => {
  const dialogueId = useId();
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);

  const handleUnmountDialogue = () => {
    void (async () => {
      await delay(200);
      setIsDialogueOpen(false);
    })();
  };

  const handleOpenDialogue = () => {
    void (async () => {
      flushSync(() => {
        setIsDialogueOpen(true);
      });

      await delay(100);

      const dialogue = document.getElementById(
        dialogueId
      ) as HTMLDialogElement | null;

      if (!dialogue) {
        return;
      }

      dialogue.showModal();
    })();
  };

  const handleCloseDialogue = () => {
    const dialogue = document.getElementById(
      dialogueId
    ) as HTMLDialogElement | null;

    if (!dialogue) {
      return;
    }

    dialogue.close();
  };

  return {
    dialogueId,
    handleOpenDialogue,
    handleCloseDialogue,
    handleUnmountDialogue,
    isDialogueOpen,
  };
};

export default useDialogue;
