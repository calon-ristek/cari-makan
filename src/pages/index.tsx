import { SearchIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Card from "components/Card"
import ExampleImage from "public/example.jpg"
import Container from "components/Container";
import Link from "next/link";
import TabContainer from "components/TabContainer";
import Title from "components/Title";

const Home: NextPage = () => {

  return (
      <Container>
        <h1 className="text-lg text-primary-100 mx-4 mt-7">Selamat Datang Maurice Yang</h1>
        <Title className="mt-0 mb-7">Mencari makan di UI tak pernah semudah ini</Title>
        <div className="relative z-[2] px-2">
          <input placeholder="Cari Kantin" type="search" className="input-field placeholder:text-white mb-5 border-white border-2 bg-transparent text-white focus:bg-white focus:text-black" />
          <SearchIcon className="w-6 h-6 text-white absolute top-[40%] translate-y-[-40%] right-9 -z-10" />
        </div>
        <TabContainer>
          <div className="flex items-center justify-between p-1">
            <h2 className="text-2xl text-semibold">Rekomendasi</h2>
            <Link href="/kantin">
              <a className="text-primary">Lihat semua</a>
            </Link>
          </div>
          <Card name="Dallas" faculty="FMIPA" image={ExampleImage} rating="5.0" reviewCount={10} />
          <h2 className="text-2xl text-semibold">Top 3 Kantin</h2>
          <ul>
            <li>
              <Card name="Dallas" faculty="FMIPA" image={ExampleImage} rating="5.0" reviewCount={10} /> 
            </li>
            <li>
              <Card name="Kansas" faculty="FIB" image={ExampleImage} rating="5.0" reviewCount={8} /> 
            </li>
            <li>
              <Card name="Kantin Perpusat" faculty="Perpusat" image={ExampleImage} rating="5.0" reviewCount={9} /> 
            </li>
          </ul>
          
        </TabContainer>
      </Container>
  );
};


export default Home;

