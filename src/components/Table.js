import React, { useState, useEffect } from "react";
import {
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'

const MTG_URL = "https://api.magicthegathering.io/v1/cards";

const manaDict = {
  'W': '<i class="ms ms-w"></i>',
  'B': '<i class="ms ms-b"></i>',
  'R': '<i class="ms ms-r"></i>',
  'G': '<i class="ms ms-g"></i>',
  'U': '<i class="ms ms-u"></i>',
}

async function fetchCards() {
  const response = await fetch(MTG_URL).then((response) => response.json());
  return response;
}

function Table() {
  const [cards, setCards] = useState("Fetching cards...");

  useEffect(() => {
    fetchCards().then((result) => setCards(result));
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        {/* <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Cards</h1>
          <p className="mt-2 text-sm text-gray-700">A list of cards</p>
        </div> */}
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          {/* <button
      type="button"
      className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
    >
      Add user
    </button> */}
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
           
            <div className="relative">
                    <div className="w-24 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-48 rounded-md border border-gray bg-white-700 py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-white sm:text-sm"
                      placeholder="Rarity"
                      type="search"
                    />
                  </div>



              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Set
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Mana Cost
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Rarity
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Colors
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {cards?.cards?.filter(card => card.imageUrl).map((card, index) => (
                    <tr key={card.name + index}>
                      <td className="hover_img whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <a href="#">{card.name}<span><img src={card.imageUrl} alt="image" height="250"/></span></a>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {card.setName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {card.manaCost}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {card.rarity}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {card.type}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {card.colors}
                      </td>
                    </tr>
                  )) || "Fecthing cards..."}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
