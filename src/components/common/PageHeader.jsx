import "./PageHeader.css";
import { FileText, ListOrdered, BookOpen, Star, Newspaper, Zap } from "lucide-react";

const QUICK_START_OPTIONS = [
  { key: "howto", label: "How-To Guide", icon: FileText, iconColor: "#9ca3af" },
  { key: "listicle", label: "Listicle", badge: "10" },
  { key: "story", label: "Personal Story", icon: BookOpen, iconColor: "#60a5fa" },
  { key: "review", label: "Product Review", icon: Star, iconColor: "#f5a623", filled: true },
  { key: "news", label: "News Roundup", icon: Newspaper, iconColor: "#6b7280" },
];

function PageHeader({ title, subtitle }) {
  return (
    <div className="pageHeaderWrap">
      <h1 className="pageHeaderTitle">{title}</h1>
      {subtitle && <p className="pageHeaderSubtitle">{subtitle}</p>}
    </div>
  );
}

export function QuickStartRow({ onSelect }) {
  return (
    <div className="quickStartRow">
      <span className="quickStartLabel">
        <Zap size={14} color="#e84a0c" fill="#e84a0c" />
        Quick start:
      </span>

      {QUICK_START_OPTIONS.map(({ key, label, icon: Icon, iconColor, filled, badge }) => (
        <button
          key={key}
          type="button"
          className="quickStartPill"
          onClick={() => onSelect?.(key)}
        >
          {badge ? (
            <span className="quickStartBadge">{badge}</span>
          ) : (
            <Icon size={15} color={iconColor} fill={filled ? iconColor : "none"} strokeWidth={2} />
          )}
          {label}
        </button>
      ))}
    </div>
  );
}



export default PageHeader;