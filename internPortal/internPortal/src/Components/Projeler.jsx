import React, { useState, useEffect } from "react";

import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";

function Projeler() {
//   const [content, setContent] = useState(0);
//   const [url, setUrl] = useState(0);





// const urls = [
//   {id:0,name: "baslarken", url: "https://raw.githubusercontent.com/taneregehan/MOsitesi/main/README.md",},
//   {id:1,name: "so-vits-svc-fork-paperspace", url: "https://raw.githubusercontent.com/voicepaw/so-vits-svc-fork-paperspace/main/README.md"},
//   {id:2,name: "react-dark-mode", url: "https://raw.githubusercontent.com/alexeagleson/react-dark-mode/master/README.md"},
//   {id:3,name: "unifiedjs", url: "https://raw.githubusercontent.com/unifiedjs/.github/main/profile/readme.md"},
//   {id:4,name: "readmes", url: "https://raw.githubusercontent.com/taneregehan/readmes/main/sourceCode.md"},

// ];




//   useEffect(() => {
//     fetch(urls[url].url)
//       .then((res) => res.text())
//       .then((text) => setContent(text));
//   }, [url]);

const params = useParams();
const [content, setContent] = useState(0);
  const [url, setUrl] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/projeler`)
      .then((res) => res.text())
      .then((text) => setContent(text));
      
  }, [content]);
  




  // const handleNextClick = () => {
  //   setUrl((önceki) => (önceki + 1) % urls.length);
  // };

  // const handlePreviousClick = () => {
  //   setUrl((önceki) => (önceki - 1 + urls.length) % urls.length);
  // };
  


  return (
    <>
      <div className="grid grid-cols-5 gap-4 p-32  ">
      
        <div className="grid fixed">
        <details className="group transition-all duration-150 verflow-hidden w-56 ">
            <summary  className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-slate-600 hover:text-gray-700">
              <span  className="ml-3 text-sm text-white"> Başlarken </span>
            </summary>
          </details>

          <details className="group transition-all duration-150  overflow-hidden w-56">
            <summary className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-slate-600 hover:text-gray-700">
              <span onClick="" className="ml-3 text-sm text-white"> Kurulum </span>
            </summary>
          </details>

          <details className="group transition-all duration-150  overflow-hidden w-56">
            <summary className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-slate-600 hover:text-gray-700">
              <span className="ml-3 text-sm text-white"> Kaynak kodu </span>
            </summary>
          </details>

          
          <details className="group transition-all duration-150 overflow-hidden w-56">
            <summary className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-slate-600 hover:text-gray-700">
              <span className="ml-3 text-sm text-white"> Yardım ve Destek </span>

              <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav className="  flex flex-col ">
              <Link
                to="/dijitalteam"
                className="flex items-center rounded-lg px-8 py-2 text-gray-500 hover:bg-black "
              >
                <span className=" text-sm font-medium">Yardım için erişebileceğiniz kişiler</span>
              </Link>
            
         

             
            </nav>
          </details>
          <details className="group transition-all duration-150 h-10 overflow-hidden w-56">
            <summary className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-slate-600 hover:text-gray-700">
              <Link to="/proje_ekle" className="ml-3 text-sm text-white"> Proje Ekle </Link>

             
            </summary>
          </details>
            
          {/* <div className="content-between flex">
            <button
              className=" text-center p-5    rounded-full text-lg text-white flex mb-12 "
              onClick={handlePreviousClick}
            >
              Önceki
            </button>
            <button
              className="text-center p-5 rounded-full text-lg text-white flex "
              onClick={handleNextClick}
            >
              Sonraki
            </button>
          </div> */}
                 </div>

     

        <div className="markdown-body pb-32 pl-72 col-span-full">
      
          <ReactMarkdown>{content.link}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default Projeler;
