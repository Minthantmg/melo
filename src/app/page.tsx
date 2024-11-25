import Nav from "@/app/components/nav";
import Hero from "@/app/components/hero";
import Feature from "@/app/components/feature";
import Movies from "@/app/components/movies";


export default function Home() {
  return (
    <div>
        <nav>
            <Nav />
        </nav>
        <main className='md:mx-10 mx-4'>
            <Feature />
            <Hero />
            <Movies />
        </main>
    </div>
  );
}
