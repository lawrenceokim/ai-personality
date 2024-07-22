"use client";

import { ChangeEventHandler, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import qs from "query-string";

function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryid = searchParams.get("categoryId");
  const name = searchParams.get("name");

  const [value, setValue] = useState(name || "");
  const debouncedValue = useDebounce<string>(value, 500);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = {
      name: debouncedValue,
      categoryid: categoryid,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    ); //removes the string(ie "categoryId" or "name" above) from the query if it is NULL or EMPTY

    router.push(url);
  }, [debouncedValue, router, categoryid]);

  return (
    <div className="relative bg-primary/10">
      <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
      <Input
        onChange={onChange}
        value={value}
        placeholder="Search..."
        className="pl-10 bg-primary/10"
      />
    </div>
  );
}

export default SearchInput;
