import React from "react";
import img1 from "../assets/2.png";
export default function DijitalTeam() {
  const people = [
    { name: "Muhammed Bilgin", role: "Frond-End Developer", image: img1 },
    { name: "Ömer Şanver", role: "Back-End Developer", image: img1 },
    { name: "Emre Özkaya", role: "Chief", image: img1 },
    { name: "Nazım Emre Özdoğan", role: "IOT Engineer/Chief", image: img1 },
    { name: "Kürşat Aydaç", role: "IOT Engineer", image: img1 },
    {name:"Buğra Erkiş",role:"IOT Engineer",image:img1},
    {name:"Buğra Erkiş",role:"IOT Engineer",image:img1},
  ];
  return (
    <div className="">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 p-44">
        
        <div >
          <h2 className="text-3xl font-bold mb-6 text-indigo-600/90 sm:text-4xl">
            Dijital Dönüşüm Nedir ?
          </h2>
          <p className=" text-lg  font-semibold text-gray-400">
            Dijital dönüşüm, bir kuruluşun dijital teknolojiyi bir işletmenin
            tüm alanlarına entegre etmek için uyguladığı süreçtir. Bu süreç, bir
            kuruluşun müşterilere nasıl değer sağladığını temelden değiştirir.
            Şirketler, değişen müşteri taleplerine daha iyi uyum sağlayan
            kültürel ve operasyonel değişimler gerçekleştirmek için yenilikçi
            dijital teknolojileri benimser.
          </p>
        </div>
        <ul
          role="list"
          className="grid  gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.image}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                    {person.name}
                  </h3>
                  <p className="text-lg font-semibold leading-6 text-indigo-400/80">
                    {person.role}
                  </p>
                  <div className=" w-8">

                  <a
                    href="#"
                    className="text-gray-900  dark:hover:text-indigo-300 dark:text-blue-300 "
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule=" "
                      />
                    </svg>
                    
                  </a>
                  </div>

                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
