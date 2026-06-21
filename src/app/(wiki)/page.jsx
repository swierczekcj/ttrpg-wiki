import { getNotes } from "@/lib/markdown";

export default async function Home() {
  const welcome_notes = await getNotes("Cosmos")

  return (
    <article className="max-w-3xl mx-auto p-8 prose prose-invert">
      <div className="flex gap-2 text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2">
        <span>{welcome_notes.metadata.title}</span>
        <span>•</span>
        <span>{welcome_notes.metadata.subtitle}</span>
      </div>

      <h1 className="text-4xl font-extrabold text-slate-100 mb-6">
        {welcome_notes.metadata.heading}
      </h1>

      <div 
        className="text-slate-300 space-y-4 line-leading-relaxed"
        dangerouslySetInnerHTML={{ __html: welcome_notes.html_content }} 
      />
    </article>
  );
}   