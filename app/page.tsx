import { Card, Footer, Header } from "./components/index";

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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {countries.map(({ id, country, capital, region, populacao }) => (
          <Card
            key={id}
            country={country}
            capital={capital}
            regiao={region}
            populaçao={populacao}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
