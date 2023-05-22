import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
function ProjelerDetay() {

  const params = useParams();
  
  const [datas,setDatas] = useState([]);
  const [content,setContent] = useState([]);
  const getContent = async () => {
   const resp = await fetch(`http://localhost:3000/projeler/${params.id}`)
    .then((res) => res.json())
    .then((text) => {
      setDatas(text); 
    }
   );

   if(!resp){
    await fetch(datas.to)
  .then((res) => res.text())
  .then((text) => {
    setContent(text); 
  })
}
  }


  
    
    useEffect(() => {
        getContent();
    }, [content]);
    
  
  
  return (
    <>
  
    <div className="p-36 text-white markdown-body    ">
    
      <h1 className=" text-2xl font-bold bg-gray-700 rounded-xl text-center text-white w-full h-full">Proje Sahibi : {datas.owner}</h1>
      <ReactMarkdown  className="text-white" >{content}</ReactMarkdown>
    </div>
    </>
  );
}

export default ProjelerDetay;

