import React from "react";
import image1 from "../assets/2.png";
import { Link , useParams} from "react-router-dom";
function Stajyerler() {

  const [users, setUsers] = React.useState([]);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:3000/kullanicilar")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error("Bir hata oluştu.");
      })
      .then((data) => {
        setUsers(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

 

  if (error) {
    return <div className="text-white p-32">{error}</div>;
  }





  return (
    <section className="bg-transparent p-12 ">
      <div className=" mx-auto max-w-screen-lg text-center  ">
      <h2 className=" mt-6 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Stajyerler
          </h2>
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Dijital Dönüşüm Ofisi
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8  ">
          {users.map((person) => (
            <div className="text-center text-white  border border-cyan-600 rounded-2xl p-5 font-mono ">
              <img
                className="mx-auto mb-4 w-24 h-24 rounded-full"
                src={person.image}
                alt="img"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p href="#">{person.name}</p>
              </h3>
              <p>{person.icerik}</p>
              <ul class="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href={person.github}
                    target="_blank"
                    className="text-gray-900  dark:hover:text-purple-900 dark:text-blue-300 "
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
                </li>
                <li>
                  <a
                    href={`/projeler/${person.id}`}
                    className="text-gray-900  dark:hover:text-purple-900 dark:text-blue-300 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
        /
      </div>
    </section>
  );
}

export default Stajyerler;
