type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-1 ${alignment}`}>
      <div className="dv-section-heading">{eyebrow}</div>
      <h2 className="dv-section-title">{title}</h2>
      {lead && <p className="dv-section-lead">{lead}</p>}
    </div>
  );
}


