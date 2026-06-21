
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Globe } from "lucide-react"

export function LanguageSelector() {
    return (
        <Select defaultValue="en">
            <SelectTrigger className="w-auto gap-2 border-none bg-transparent px-3 py-1.5 h-auto text-sm font-medium focus:ring-0 focus:ring-offset-0 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors [&>svg]:hidden">
                <div className="flex items-center gap-2">
                    <Globe className="size-4" />
                    <SelectValue placeholder="Select Language" />
                </div>
            </SelectTrigger>
            <SelectContent align="end">
                <SelectItem value="en">ENG</SelectItem>
                <SelectItem value="tr">TR</SelectItem>
            </SelectContent>
        </Select>
    )
}
