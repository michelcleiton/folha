import { Section } from "lucide-react";
import { PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER } from "next/dist/lib/constants";
import Link from "next/link";
export default function Home() {
  return (
    <section className="flex flex-col h-screen">
        <div className="custom-container">
          <nav className="flex gap-4 justify-center items-center">
            <Link href="/cadastro">
              <button className="custom-button">Login</button>
            </Link>

            <Link href="/folha">
              <button className="custom-button">Folha de Pagamento</button>
            </Link>
          </nav>
        </div>
    </section>
    
  );
}
 