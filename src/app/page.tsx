import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/components/container";
import { Button } from "@/app/components/button";

const ALT = "Placeholder portrait of Dr. Folasade Femi-Lawal used across the site draft.";
const portrait = "/assets/folasade.png";

const ARTICLES = Array.from({ length: 25 }).map((_, i) => ({
  id: i + 1,
  title: `Article title placeholder ${i + 1}`,
  desc: "Short description placeholder copy to be replaced later.",
}));

export default function Page() {
  return (
    <div className="space-y-16">
      <section className="section">
        <div className="container-section grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1>Elevating Self… Empowering Others</h1>
            <p className="mt-4 text-slate-700">Visionary business leader and digital transformation expert. Placeholder text for now.</p>
            <div className="mt-6 flex gap-3">
              <Button as="a" href="/contact">Invite Dr. Folasade To Speak</Button>
              <Button as="a" href="/about" variant="outline">Meet Folasade</Button>
            </div>
          </div>
          <div className="portrait-wrapper">
            <Image alt={ALT} src={portrait} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-section">
          <div className="flex items-end justify-between">
            <h2>Publications</h2>
            <Button as="a" href="/publications" variant="outline">View all</Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {ARTICLES.slice(0, 3).map(a => <ArticleCard key={a.id} title={a.title} desc={a.desc} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <Container>
          <div className="card flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3>Booking & Media</h3>
              <p className="text-slate-700">For speaking engagements or interviews, reach out via the form.</p>
            </div>
            <Button as="a" href="/contact">Request Engagement</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

function ArticleCard({ title, desc }: { title: string; desc: string }) {
  return (
    <article className="card">
      <div className="thumb-wrapper mb-4">
        <Image alt={ALT} src={portrait} fill sizes="(min-width: 1024px) 25vw, 90vw" className="object-cover rounded-xl" />
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-slate-600 mt-2">{desc}</p>
      <div className="mt-4">
        <Link href="/publications" className="btn-outline">Read more</Link>
      </div>
    </article>
  );
}
