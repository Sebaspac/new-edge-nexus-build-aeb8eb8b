import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { unsubscribe as UNSUB_STATIC } from "@/content/pages/unsubscribe";
import { useCms } from "@/hooks/useCms";

const SUPABASE_URL = "https://yzmtgxfehvzgobxjivjl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6bXRneGZlaHZ6Z29ieGppdmpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NjY0MDMsImV4cCI6MjA1ODM0MjQwM30.0wMIGxbEZvqkjbzJEG0N2OjIl3fzLsakd3cPhqrFpjQ";

type PageState = "loading" | "valid" | "already" | "invalid" | "confirming" | "success" | "error";

const Unsubscribe = () => {
  // Inhalte live aus dem CMS (Strapi); Fallback: statischer Content-Layer
  const unsubscribe = useCms("unsubscribe", UNSUB_STATIC);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [state, setState] = useState<PageState>("loading");

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`, {
      headers: { apikey: SUPABASE_ANON_KEY },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.valid === true) setState("valid");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      })
      .catch(() => setState("error"));
  }, [token]);

  const handleUnsubscribe = async () => {
    setState("confirming");
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if (data?.success) setState("success");
      else if (data?.reason === "already_unsubscribed") setState("already");
      else setState("error");
    } catch {
      setState("error");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="font-serif text-3xl font-normal">{unsubscribe.title}</h1>

        {state === "loading" && <p className="text-muted-foreground">{unsubscribe.messages.loading}</p>}

        {state === "valid" && (
          <>
            <p className="text-muted-foreground">
              {unsubscribe.messages.valid}
            </p>
            <button
              onClick={handleUnsubscribe}
              className="px-6 py-3 bg-foreground text-background border-2 border-foreground hover:bg-background hover:text-foreground transition-colors font-mono text-sm tracking-wide"
            >
              {unsubscribe.confirmButton}
            </button>
          </>
        )}

        {state === "confirming" && <p className="text-muted-foreground">{unsubscribe.messages.confirming}</p>}

        {state === "success" && (
          <p className="text-muted-foreground">
            {unsubscribe.messages.success}
          </p>
        )}

        {state === "already" && (
          <p className="text-muted-foreground">{unsubscribe.messages.already}</p>
        )}

        {state === "invalid" && (
          <p className="text-muted-foreground">{unsubscribe.messages.invalid}</p>
        )}

        {state === "error" && (
          <p className="text-destructive">{unsubscribe.messages.error}</p>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;
