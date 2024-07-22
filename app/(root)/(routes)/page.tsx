import Categories from "@/components/categories";
import SearchInput from "@/components/search-input";

function RootPage() {
  return (
    <div className="h-full p-4 space-y-5">
      <SearchInput />
      <Categories />
    </div>
  );
}

export default RootPage;
