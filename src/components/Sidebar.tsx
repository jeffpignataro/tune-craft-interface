import { Home, Search, Library } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Search, label: "Search", active: false },
    { icon: Library, label: "Your Library", active: false },
  ];

  return (
    <aside className={cn("w-60 bg-black p-6 flex flex-col gap-6", className)}>
      <div className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200",
              item.active
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            )}
          >
            <item.icon size={24} />
            <span className="font-semibold">{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};
