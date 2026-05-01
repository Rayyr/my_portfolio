import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ProjectsShowcase from "@/components/ProjectsShowcase";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutPreview />
      <ProjectsShowcase />
    </div>
  );
}
