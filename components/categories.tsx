"use client";

import qs from "query-string";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { Category } from "@prisma/client";

const data = [
  {
    name: "Philosophy",
    id: "000-111-222-333-444-555",
  },
  {
    name: "Animals",
    id: "222-333-444-555-666-777",
  },
  {
    name: "Movies & TV",
    id: "333-444-555-666-777-888",
  },
  {
    name: "Musicians",
    id: "121-323-443-565-767-787",
  },
  {
    name: "Scientists",
    id: "353-666-745-242-668-376",
  },
  {
    name: "Famous People",
    id: "998-489-902-567-291-759",
  },
];

interface CategoriesProps {
  data: Category[];
}

function Categories({ data }: CategoriesProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const onClick = (id: string | undefined) => {
    const query = { categoryId: id };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="w-full overflow-auto space-x-2 flex p-1">
      <button
        className={cn(
          `flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition`,
          !categoryId ? "bg-primary/25" : "bg-primary/10"
        )}
        onClick={() => onClick(undefined)}
      >
        Newest
      </button>
      {data.map((item) => (
        <button
          onClick={() => onClick(item.id)}
          key={item.id}
          className={cn(
            `flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition`,
            item.id === categoryId ? "bg-primary/25" : "bg-primary/10"
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default Categories;
