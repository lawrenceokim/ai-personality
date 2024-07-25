import prisma from "@/lib/db";
import CompanionForm from "./components/companion-form";

interface CompanionIdpageProps {
  params: {
    companionId: string;
  };
}

async function CompanionIdPage({ params }: CompanionIdpageProps) {
  //TODO: check if user is upgraded

  const companion = await prisma.companion.findUnique({
    where: {
      id: params.companionId,
    },
  }); // this fetches an existing companion using id from browser url

  const categories = await prisma.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
}

export default CompanionIdPage;
