import { AnnotationIcon, SearchIcon, StarIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Link from "next/link";
import Card from "components/Card"
import ExampleImage from "src/public/example.jpg"
import Image from 'next/image'

const Home: NextPage = () => {

  return (
      <main className="bg-gradient-to-tr from-primary via-primary to-secondary min-h-screen">
        <h1 className="text-white ml-2 text-xl">Logo</h1>
        <h1 className="text-lg text-primary-100 mx-2 mt-7">Selamat Datang Maurice Yang</h1>
        <h1 className="text-white mx-2 text-3xl mb-7 font-semibold">Mencari makan di UI tak pernah semudah ini</h1>
        <div className="relative z-[2]">
          <input placeholder="Cari Kantin" type="search" className="input-field placeholder:text-white mb-5 border-white border-4 bg-transparent text-white focus:bg-white focus:text-black" />
          <SearchIcon className="w-6 h-6 text-white absolute top-[40%] translate-y-[-40%] right-7 -z-10" />
        </div>
        <section className="h-full w-full bg-white rounded-t-3xl p-3">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl text-semibold">Rekomendasi</h2>
            <h2 className="text-primary">Lihat semua</h2>
          </div>
          <Card name="Dallas - FMIPA" image={ExampleImage} rating="5.0" reviewCount={10} />
          <h2 className="text-2xl text-semibold">Top 3 Kantin</h2>
          <ul>
            <li>
              <Card name="Dallas - FMIPA" image={ExampleImage} rating="5.0" reviewCount={10} /> 
            </li>
            <li>
              <Card name="Kansas - FIB" image={ExampleImage} rating="5.0" reviewCount={8} /> 
            </li>
            <li>
              <Card name="Kantin Perpusat" image={ExampleImage} rating="5.0" reviewCount={9} /> 
            </li>
          </ul>
          
        </section>
      </main>
  );
};


export default Home;
