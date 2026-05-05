import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    hideArrow?: boolean;
}

export default function ButtonColorful({ label = "Learn more", hideArrow = false, ...props }: ButtonColorfulProps) {
    return (
        <Button
            className={cn(
                "relative inline-flex h-[2.5rem] w-fit overflow-hidden cursor-pointer items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors duration-200",
                "bg-gradient-to-r from-[#b15457c] to-[#7142F7] hover:opacity-90 active:opacity-75",
                "shadow-[0_0_20px_10px_rgba(177,66,247,0.35)] hover:shadow-none transition-shadow duration-200 text-white"
            )}
            {...props}
        >
            {label}
            {!hideArrow && (
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-200" />
            )}
        </Button>
    );
}
