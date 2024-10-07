import ArrowLeft from "@/components/icons/ArrowLeft";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/functions/getAllProjects";
import Link from "next/link";

export default function ProjectsPage({ projects }) {
  return (
    <Layout title={"Portfolio / Projects"} description={"My Projects"}>
      <section className="h-full max-w-5xl pt-4 mx-auto px-5">
        <Link
          href="/"
          className="flex items-center space-x-4 font-semibold pb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
        >
          <ArrowLeft className="w-8 h-8 fill-current" />
          <span></span>
        </Link>
        {/* Project card area */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-15 lg:grid-cols-3">
          {projects?.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
  };
};
