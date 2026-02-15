import Link from "next/link";
import { FileText, Send } from "lucide-react";

const GetInTouch = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {/* Resume Button */}
      <Link
        href="https://drive.google.com/file/d/1E_3wdzHx_EvKxJYPhh8RuLUSa_ZZu63e/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Resume"
        className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800 dark:border-neutral-700"
      >
        <FileText size={16} />
        View Resume
      </Link>

      {/* Email Button */}
      <Link
        href="mailto:gausul.analytics@gmail.com"
        aria-label="Send Email"
        className="flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
      >
        <Send size={16} />
        Contact Me
      </Link>
    </div>
  );
};

export default GetInTouch;
