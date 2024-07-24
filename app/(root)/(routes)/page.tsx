import Categories from "@/components/categories";
import SearchInput from "@/components/search-input";
import prisma from "@/lib/db";

async function RootPage() {
  const categories = await prisma.category.findMany();
  return (
    <div className="h-full p-4 space-y-5">
      <SearchInput />
      <Categories data={categories} />
    </div>
  );
}

export default RootPage;
