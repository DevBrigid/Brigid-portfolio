import { useState } from "react";

export default function ContactDispatch() {
  const [copied, setCopied] = useState(false);
  
  // Primary contact email
  const email = "muriithibrigid@gmail.com"; 

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Software Engineering Inquiry");
    const body = encodeURIComponent("Hi Brigid,\n\nI came across your portfolio and wanted to connect regarding...");
    
    // Direct Gmail Web Composer URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    
    // Attempt opening Gmail web composer in a new tab
    const newWindow = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    
    // If pop-ups are blocked or the user is not in a standard browser tab, fall back to mailto:
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for non-https / older web contexts
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section className="border-b-4 border-ink bg-flag text-ink">
      {/* Editorial Category Header */}
      <div className="flex items-center justify-between border-b-2 border-ink px-6 py-2 font-mono text-xs uppercase tracking-widest text-ink/70">
        <span>// DIRECT TRANSMISSION</span>
        <span>INQUIRIES DESK</span>
      </div>

      <div className="grid grid-cols-1 divide-y-2 divide-ink lg:grid-cols-12 lg:divide-y-0 lg:divide-x-2">
        {/* Call to Action Column */}
        <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-7">
          <div>
            <span className="mb-4 inline-block bg-ink px-2 py-0.5 font-mono text-xs font-bold uppercase text-flag">
              NEW ENGAGEMENTS
            </span>
            <h2 className="mb-4 font-display text-4xl font-black uppercase tracking-tight leading-none sm:text-5xl">
              Let’s build something reliable together.
            </h2>
            <p className="max-w-xl font-body text-base leading-relaxed text-ink/90">
              Open to full-stack engineering roles, software internships, and client
              collaborations. Have a role or problem you're looking to solve? Send a message.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3 border-t-2 border-ink pt-6">
            <button
              type="button"
              onClick={handleSendEmail}
              className="border-2 border-ink bg-ink px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-paper transition-colors hover:border-signal hover:bg-signal cursor-pointer"
            >
              Send Direct Email ↗
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className={`border-2 border-ink px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                copied
                  ? "bg-signal text-paper border-signal"
                  : "bg-paper text-ink hover:bg-ink hover:text-paper"
              }`}
            >
              {copied ? "✓ Copied to Clipboard!" : "Copy Email Address"}
            </button>
          </div>
        </div>

        {/* Directory Channels Column */}
        <div className="flex flex-col justify-between bg-paper p-6 sm:p-10 lg:col-span-5">
          <div className="space-y-4 font-mono text-xs">
            <span className="block text-[10px] uppercase tracking-widest text-ink/60">
              COMMUNICATION CHANNELS
            </span>

            <div className="border-2 border-ink bg-paper p-3">
              <div className="text-[10px] uppercase text-ink/60">Location Base</div>
              <div className="text-sm font-bold text-ink">Nairobi, Kenya [EAT / UTC+3]</div>
            </div>

            <div className="border-2 border-ink bg-paper p-3">
              <div className="text-[10px] uppercase text-ink/60">Direct Inbox</div>
              <div className="text-sm font-bold text-ink select-all break-all">
                {email}
              </div>
            </div>

            <div className="border-2 border-ink bg-paper p-3">
              <div className="text-[10px] uppercase text-ink/60">Code Profiles</div>
              <div className="mt-1 flex gap-4 text-sm font-bold">
                <a
                  href="https://github.com/DevBrigid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-signal"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/brigid-mukami-434219313/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-signal"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 font-mono text-[10px] uppercase text-ink/60">
            Average response time: within 24 hours.
          </div>
        </div>
      </div>
    </section>
  );
}