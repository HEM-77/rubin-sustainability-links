type ToolCardProps = {
  title: string;
  description: string;
  link: string;
  buttonText: string;
};

const ToolCard = ({
  title,
  description,
  link,
  buttonText,
}: ToolCardProps) => {
  return (
    <div className="group relative flex min-h-[520px] flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/80 p-8 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-100/30 to-blue-100/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">

        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl font-bold text-red-500 shadow-sm">
          B
        </div>

        {/* Content */}
        <div className="mt-10 flex-1">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900">
            {title}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            {description}
          </p>
        </div>

        {/* Button */}
        <button
          onClick={() => window.open(link, "_blank")}
          className="mt-10 flex items-center justify-center gap-2 rounded-2xl bg-red-500 px-6 py-5 text-lg font-semibold tracking-wide text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg"
        >
          {buttonText}

          <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

      </div>
    </div>
  );
};

export default ToolCard;