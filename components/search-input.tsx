"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

function SearchInput() {
  return (
    <div className="relative bg-primary/10">
      <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
      <Input placeholder="Search..." className="pl-10 bg-primary/10" />
    </div>
  );
}

export default SearchInput;
