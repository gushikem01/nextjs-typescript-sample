import Head from "next/head";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import PokemonShort from "../components/pockemon-short";

function Main() {
  const { data } = useSWR("https://pokeapi.co/api/v2/pokemon", fetcher);

  if (!data) return <h1>Loading...</h1>;
  const { results } = data;

  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <section className="container mx-auto">
        <div className="-mx-2 flex flex-wrap">
          {results.map(result => (
            <PokemonShort key={result.name} name={result.name} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Main;
