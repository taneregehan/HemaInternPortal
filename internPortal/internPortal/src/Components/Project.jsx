import React from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
function Project() {
  return (
    <div className="p-32 ">
      
      <form className="bg-transparent border border-y-8 border-gray-700 rounded-xl p-5 font-mono ">
      <h1 className="text-white underline decoration-clone ">Proje Ekleme Ekranı</h1>
       
        <div className="space-y-12">
          <div className=" pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Proje Adı
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white font-mono placeholder:text-white focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Proje Adı giriniz..."
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-white "
                >
                  Proje Hakkında
                </label>
                <div className="mt-2  rounded-full">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-white border py-1.5 bg-transparent text-white  shadow-sm ring-1 ring-inset ring-transparent  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Dosya Yükle
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-white">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Dosya Yükle</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">ya da sürükle bırak</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF en fazla 2GB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link
            to="/projeler"
            type="button"
            className="text-sm font-semibold leading-6 text-white borde bg-gray-600 rounded-full p-3"
          >
            İptal
          </Link>
          <button
            type="submit"
            className="text-sm font-semibold leading-6 text-white borde bg-gray-600 rounded-full p-3"
          >
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
}

export default Project;
