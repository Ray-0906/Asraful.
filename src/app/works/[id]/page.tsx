import { notFound } from "next/navigation";
import WorkDetail from "../../../views/WorkDetail";
import { projects } from "../../../components/projects";

type Params = {
  id: string;
};

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ id: project.id }));
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const data = projects.find((project) => project.id === id);

  if (!data) {
    notFound();
  }

  return <WorkDetail id={id} />;
}
