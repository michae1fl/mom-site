import { Container } from "@/app/components/container";

export function Footer() {
  return (
    <footer className="border-t">
      <Container className="py-8 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-semibold">Folasade Femi-Lawal</h3>
          <p className="text-sm text-slate-600">Lagos, Nigeria</p>
          <p className="text-sm text-slate-600 mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="md:justify-self-end flex gap-4 text-sm">
          <a href="#">LinkedIn</a><a href="#">Facebook</a><a href="#">Instagram</a>
        </div>
      </Container>
    </footer>
  );
}
