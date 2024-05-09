import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function ClipboardCopy({ copyText }: { copyText: string }) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = (text: string) => {
    copyTextToClipboard(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  {
    /* <span>{isCopied ? "Copied!" : "Copy"}</span> */
  }
  return (
    <div className="flex w-full justify-end pr-4">
      {isCopied ? (
        <Check />
      ) : (
        <Copy
          className="cursor-pointer "
          onClick={() => handleCopyClick(copyText)}
        />
      )}
    </div>
  );
}
