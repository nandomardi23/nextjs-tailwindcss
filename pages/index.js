import React from "react";

export default function Home() {
    return (
        <div className=" max-w-xl">
            <div className="bg-white rounded-xl shadow-sm border  overflow-hidden">
                <header className=" border-b px-4 py-2.5  bg-gray-50/50 flex items-center justify-between ">
                    <div>
                        <h1 className="font-medium text-xl">Card title</h1>
                        <span className="text-gray-500">
                            Mollit aute id duis culpa enim ullamco.
                        </span>
                    </div>
                    <a
                        href=""
                        className=" bg-pink-500 hover:bg-pink-600 transition duration-300 focus:outline-none focus:ring focus:ring-pink-400 text-white px-5 py-2.5 rounded-xl font-semibold text-sm"
                    >
                        New Task
                    </a>
                </header>
                <section className="px-4 py-2.5">
                    Do labore laborum proident mollit sit sint ut nisi pariatur
                    nisi. Mollit ad deserunt aliqua aliqua pariatur commodo
                    adipisicing ad consectetur excepteur dolor. Nulla qui fugiat
                    occaecat ut pariatur enim sunt ut laboris.
                </section>
                <footer className="border-t px-4 py-2.5 text-gray-500 bg-gray-50/50">
                    Tempor dolore do est irure ullamco dolor tempor id tempor
                    culpa officia.
                </footer>
            </div>
        </div>
    );
}
