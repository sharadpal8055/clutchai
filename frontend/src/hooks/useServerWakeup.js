import { useEffect, useState } from "react";
import { checkBackend } from "../services/healthService";

export default function useServerWakeup() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const wakeServer = async () => {
      while (!cancelled) {
        const ok = await checkBackend();

        if (ok) {
          setReady(true);
          break;
        }

        await new Promise((resolve) =>
          setTimeout(resolve, 2500)
        );
      }
    };

    wakeServer();

    return () => {
      cancelled = true;
    };
  }, []);

  return ready;
}