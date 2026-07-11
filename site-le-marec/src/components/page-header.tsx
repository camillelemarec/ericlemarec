type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        SELARL Eric Le Marec
      </p>
      <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h1>
      {subtitle ? (
        <p className="max-w-3xl text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}

