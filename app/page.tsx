const countries = [
  {
    id: 1,
    country: "Brazil",
    capital: "Brasília",
    region: "South America",
    populacao: "213993437",
  },
  {
    id: 2,
    country: "United States",
    capital: "Washington, D.C.",
    region: "North America",
    populacao: "331893745",
  },
  {
    id: 3,
    country: "Japan",
    capital: "Tokyo",
    region: "Asia",
    populacao: "13929286",
  },
  {
    id: 4,
    country: "United Kingdom",
    capital: "London",
    region: "Europe",
    populacao: "8982000",
  },
  {
    id: 5,
    country: "France",
    capital: "Paris",
    region: "Europe",
    populacao: "2140526",
  },
  {
    id: 6,
    country: "China",
    capital: "Beijing",
    region: "Asia",
    populacao: "21542000",
  },
  {
    id: 7,
    country: "Egypt",
    capital: "Cairo",
    region: "Africa",
    populacao: "9910000",
  },
  {
    id: 8,
    country: "Australia",
    capital: "Canberra",
    region: "Oceania",
    populacao: "5230330",
  },
];

import { Card, Footer, Header } from "./components/index";
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Card
          id={countries[0].id}
          country={countries[0].country}
          capital={countries[0].capital}
          regiao={countries[0].region}
          populaçao={countries[0].populacao}
        />
        <Card
          id={countries[1].id}
          country={countries[1].country}
          capital={countries[1].capital}
          regiao={countries[1].region}
          populaçao={countries[1].populacao}
        />
        <Card
          id={countries[2].id}
          country={countries[2].country}
          capital={countries[2].capital}
          regiao={countries[2].region}
          populaçao={countries[2].populacao}
        />
        <Card
          id={countries[3].id}
          country={countries[3].country}
          capital={countries[3].capital}
          regiao={countries[3].region}
          populaçao={countries[3].populacao}
        />
        <Card
          id={countries[4].id}
          country={countries[4].country}
          capital={countries[4].capital}
          regiao={countries[4].region}
          populaçao={countries[4].populacao}
        />
        <Card
          id={countries[5].id}
          country={countries[5].country}
          capital={countries[5].capital}
          regiao={countries[5].region}
          populaçao={countries[5].populacao}
        />
        <Card
          id={countries[6].id}
          country={countries[6].country}
          capital={countries[6].capital}
          regiao={countries[6].region}
          populaçao={countries[6].populacao}
        />
        <Card
          id={countries[7].id}
          country={countries[7].country}
          capital={countries[7].capital}
          regiao={countries[7].region}
          populaçao={countries[7].populacao}
        />
      </main>
      <Footer />
    </>
  );
}
