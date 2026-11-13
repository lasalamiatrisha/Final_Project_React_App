import React, { useState } from 'react';

interface RoomItem {
  id: string;
  name: string;
  capacity: number;
  price: number;
  image: string;
  quantity: number;
}

interface AddonItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface MealItem {
  id: string;
  name: string;
  price: number;
  image: string;
  selected: boolean;
}

const INITIAL_ROOMS: RoomItem[] = [
  {
    id: 'auditorium',
    name: 'Auditorium Hall',
    capacity: 200,
    price: 5500,
    image: 'https://i.pinimg.com/736x/5e/01/64/5e01642cc4155336f3da0b6a71ed501c.jpg',
    quantity: 0,
  },
  {
    id: 'conference',
    name: 'Conference Room',
    capacity: 15,
    price: 3500,
    image: 'https://i.pinimg.com/736x/aa/ac/77/aaac77af3b59b9a3f6e566786aa48471.jpg',
    quantity: 0,
  },
  {
    id: 'presentation',
    name: 'Presentation Room',
    capacity: 50,
    price: 700,
    image: 'https://i.pinimg.com/736x/a3/e8/67/a3e867c3453a797aae5cbf9edb96a515.jpg',
    quantity: 0,
  },
  {
    id: 'large-meeting',
    name: 'Large Meeting Room',
    capacity: 10,
    price: 900,
    image: 'https://i.pinimg.com/1200x/e7/66/6a/e7666a8df236d860d8d1fd2a43d111d7.jpg',
    quantity: 0,
  },
  {
    id: 'small-meeting',
    name: 'Small Meeting Room',
    capacity: 5,
    price: 1100,
    image: 'https://i.pinimg.com/1200x/65/45/4d/65454d9136697c3dd0944fae2aafecbc.jpg',
    quantity: 0,
  },
];

const INITIAL_ADDONS: AddonItem[] = [
  {
    id: 'speakers',
    name: 'Speakers',
    price: 35,
    image: 'https://i.pinimg.com/1200x/62/17/78/6217783cee8411d7c9b3d4c5adbee6fc.jpg',
    quantity: 0,
  },
  {
    id: 'microphones',
    name: 'Microphones',
    price: 45,
    image: 'https://i.pinimg.com/236x/39/e2/16/39e216e0defd4d07ff99e62a0e147121.jpg',
    quantity: 0,
  },
  {
    id: 'whiteboards',
    name: 'Whiteboards',
    price: 80,
    image: 'https://i.pinimg.com/1200x/cd/8d/45/cd8d45917d05438431840d0c94e0f8e7.jpg',
    quantity: 0,
  },
  {
    id: 'projectors',
    name: 'Projectors',
    price: 200,
    image: 'https://i.pinimg.com/736x/c4/a8/91/c4a891cc3553576774567a1527f78f68.jpg',
    quantity: 0,
  },
  {
    id: 'signage',
    name: 'Signage',
    price: 80,
    image: 'https://i.pinimg.com/736x/31/b9/f3/31b9f3a686e8057b99db39d42290b0ac.jpg',
    quantity: 0,
  },
];
const INITIAL_MEALS: MealItem[] = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    price: 50,
    image: 'https://i.pinimg.com/736x/1b/60/b5/1b60b5581209e888e09c44d8a91fa2c5.jpg',
    selected: false,
  },
  {
    id: 'hightea',
    name: 'High Tea',
    price: 25,
    image: 'https://i.pinimg.com/736x/6a/04/60/6a046096965a3ed3203fcc517ecd1fa1.jpg',
    selected: false,
  },
  {
    id: 'lunch',
    name: 'Lunch',
    price: 65,
    image: 'https://i.pinimg.com/736x/91/b1/d6/91b1d6f2a193226f72cf2dfa358ae020.jpg',
    selected: false,
  },
  {
    id: 'dinner',
    name: 'Dinner',
    price: 70,
    image: 'https://i.pinimg.com/1200x/88/50/1f/88501fd43112dd8b3f63b3a346d45050.jpg',
    selected: false,
  },
];

export const ProductSelection: React.FC = () => {
  const [rooms, setRooms] = useState<RoomItem[]>(INITIAL_ROOMS);
  const [addons, setAddons] = useState<AddonItem[]>(INITIAL_ADDONS);
  const [meals, setMeals] = useState<MealItem[]>(INITIAL_MEALS);
  const [mealPeople, setMealPeople] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);

  const handleRoomQuantityChange = (id: string, delta: number) => {
    setRooms((prev) =>
      prev.map((room) =>
        room.id === id
          ? { ...room, quantity: Math.max(0, room.quantity + delta) }
          : room
      )
    );
  };

  const handleAddonQuantityChange = (id: string, delta: number) => {
    setAddons((prev) =>
      prev.map((addon) =>
        addon.id === id
          ? { ...addon, quantity: Math.max(0, addon.quantity + delta) }
          : addon
      )
    );
  };

  const handleMealToggle = (id: string) => {
    setMeals((prev) =>
      prev.map((meal) =>
        meal.id === id ? { ...meal, selected: !meal.selected } : meal
      )
    );
  };

  const roomsTotalCost = rooms.reduce(
    (sum, room) => sum + room.price * room.quantity,
    0
  );

  const addonsTotalCost = addons.reduce(
    (sum, addon) => sum + addon.price * addon.quantity,
    0
  );

  const mealsTotalCost = meals.reduce(
    (sum, meal) => sum + (meal.selected ? meal.price * mealPeople : 0),
    0
  );

  const grandTotal = roomsTotalCost + addonsTotalCost + mealsTotalCost;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="sticky top-0 z-30 bg-[#1e3a5f] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xl font-bold tracking-wide text-amber-400">
            Conference Expense Planner
          </div>

          <nav className="flex items-center gap-6 text-sm md:text-base font-medium">
            <a href="#venue" className="hover:text-amber-300 transition-colors">
              Venue
            </a>
            <a href="#addons" className="hover:text-amber-300 transition-colors">
              Add-ons
            </a>
            <a href="#meals" className="hover:text-amber-300 transition-colors">
              Meals
            </a>
          </nav>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-md shadow transition-colors"
          >
            Show Details
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-16">
        {/* Venue Section */}
        <section id="venue" className="scroll-mt-24 space-y-6">
          <div className="bg-[#1e3a5f] text-white text-center py-3 rounded-lg shadow">
            <h2 className="text-2xl font-bold">Venue Room Selection</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-4 text-center space-y-1">
                    <h3 className="text-base font-bold text-gray-900">
                      {room.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      (Capacity: {room.capacity})
                    </p>
                    <p className="text-lg font-extrabold text-[#1e3a5f]">
                      ${room.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleRoomQuantityChange(room.id, -1)}
                    disabled={room.quantity === 0}
                    className="w-8 h-8 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-40 font-bold text-base flex items-center justify-center transition-colors"
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-semibold text-base">
                    {room.quantity}
                  </span>
                  <button
                    onClick={() => handleRoomQuantityChange(room.id, 1)}
                    className="w-8 h-8 rounded-md bg-[#1e3a5f] hover:bg-[#162b47] text-white font-bold text-base flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-lg py-3 px-6 text-center shadow-sm max-w-md mx-auto">
            <span className="text-lg font-bold text-gray-800">
              Rooms Total Cost: ${roomsTotalCost.toLocaleString()}
            </span>
          </div>
        </section>

        {/* Add-ons Section */}
        <section id="addons" className="scroll-mt-24 space-y-6">
          <div className="bg-[#1e3a5f] text-white text-center py-3 rounded-lg shadow">
            <h2 className="text-2xl font-bold">Add-ons Selection</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {addons.map((addon) => (
              <div
                key={addon.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={addon.image}
                    alt={addon.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 text-center space-y-2">
                    <h3 className="text-base font-bold text-gray-900">
                      {addon.name}
                    </h3>
                    <p className="text-lg font-extrabold text-[#1e3a5f]">
                      ${addon.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleAddonQuantityChange(addon.id, -1)}
                    disabled={addon.quantity === 0}
                    className="w-8 h-8 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-40 font-bold text-base flex items-center justify-center transition-colors"
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-semibold text-base">
                    {addon.quantity}
                  </span>
                  <button
                    onClick={() => handleAddonQuantityChange(addon.id, 1)}
                    className="w-8 h-8 rounded-md bg-[#1e3a5f] hover:bg-[#162b47] text-white font-bold text-base flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-lg py-3 px-6 text-center shadow-sm max-w-md mx-auto">
            <span className="text-lg font-bold text-gray-800">
              Add-ons Total Cost: ${addonsTotalCost.toLocaleString()}
            </span>
          </div>
        </section>

        {/* Meals Section with Images */}
        <section id="meals" className="scroll-mt-24 space-y-6">
          <div className="bg-[#1e3a5f] text-white text-center py-3 rounded-lg shadow">
            <h2 className="text-2xl font-bold">Meals Selection</h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-center gap-4">
              <label htmlFor="meal-people" className="text-lg font-bold text-gray-800">
                Number of People:
              </label>
              <input
                id="meal-people"
                type="number"
                min="0"
                value={mealPeople}
                onChange={(e) => setMealPeople(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-28 px-3 py-2 border border-gray-300 rounded-md text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {meals.map((meal) => (
                <div
                  key={meal.id}
                  className="bg-gray-50 rounded-xl shadow-sm overflow-hidden border border-gray-200 flex flex-col justify-between"
                >
                  <div>
                    <img
                      src={meal.image}
                      alt={meal.name}
                      className="w-full h-36 object-cover"
                    />
                    <div className="p-4 text-center space-y-1">
                      <h3 className="text-base font-bold text-gray-900">
                        {meal.name}
                      </h3>
                      <p className="text-lg font-extrabold text-[#1e3a5f]">
                        ${meal.price} 
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-4 flex items-center justify-center">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={meal.selected}
                        onChange={() => handleMealToggle(meal.id)}
                        className="w-5 h-5 text-[#1e3a5f] rounded border-gray-300 focus:ring-[#1e3a5f]"
                      />
                      <span className="text-sm font-semibold text-gray-700">Select</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 text-center">
              <span className="text-xl font-extrabold text-gray-900">
                Meals Total Cost: ${mealsTotalCost.toLocaleString()}
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Summary Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-xl font-bold text-gray-900">
                TOTAL COST FOR THE EVENT
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-800 font-bold text-xl"
              >
                ×
              </button>
            </div>

            <div className="text-center text-3xl font-extrabold text-[#1e3a5f]">
              ${grandTotal.toLocaleString()}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b text-sm uppercase text-gray-600">
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Unit Cost</th>
                    <th className="py-3 px-4">Quantity / People</th>
                    <th className="py-3 px-4">Total Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  {/* Rooms */}
                  {rooms
                    .filter((r) => r.quantity > 0)
                    .map((room) => (
                      <tr key={room.id}>
                        <td className="py-3 px-4 font-medium">
                          {room.name} (Capacity: {room.capacity})
                        </td>
                        <td className="py-3 px-4">${room.price.toLocaleString()}</td>
                        <td className="py-3 px-4">{room.quantity}</td>
                        <td className="py-3 px-4 font-semibold">
                          ${(room.price * room.quantity).toLocaleString()}
                        </td>
                      </tr>
                    ))}

                  {/* Add-ons */}
                  {addons
                    .filter((a) => a.quantity > 0)
                    .map((addon) => (
                      <tr key={addon.id}>
                        <td className="py-3 px-4 font-medium">{addon.name}</td>
                        <td className="py-3 px-4">${addon.price.toLocaleString()}</td>
                        <td className="py-3 px-4">{addon.quantity}</td>
                        <td className="py-3 px-4 font-semibold">
                          ${(addon.price * addon.quantity).toLocaleString()}
                        </td>
                      </tr>
                    ))}

                  {/* Meals */}
                  {meals
                    .filter((m) => m.selected && mealPeople > 0)
                    .map((meal) => (
                      <tr key={meal.id}>
                        <td className="py-3 px-4 font-medium">{meal.name} (Meal)</td>
                        <td className="py-3 px-4">${meal.price} </td>
                        <td className="py-3 px-4">{mealPeople} people</td>
                        <td className="py-3 px-4 font-semibold">
                          ${(meal.price * mealPeople).toLocaleString()}
                        </td>
                      </tr>
                    ))}

                  {rooms.every((r) => r.quantity === 0) &&
                    addons.every((a) => a.quantity === 0) &&
                    meals.every((m) => !m.selected || mealPeople === 0) && (
                      <tr>
                        <td colSpan={4} className="py-6 text-center text-gray-500">
                          No items selected yet.
                        </td>
                      </tr>
                    )}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 bg-[#1e3a5f] text-white font-semibold rounded-md hover:bg-[#162b47]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
