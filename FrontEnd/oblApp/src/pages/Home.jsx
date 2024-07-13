import React, { Fragment } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Home = () => {
  const lists = [
    { label: "Create Estimate", href: "/clients" },
    { label: "Existing Estimates", href: "" },
    // Add more items if needed
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-black mb-4">OBL Estimator Tool</h1>
        <div className="w-64 mx-auto">
          <Menu>
            <MenuButton className="data-[active]:bg-blue-400">
              Choose an option
            </MenuButton>
            <MenuItems
              anchor="bottom"
              transition
              className="origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              {lists.map((list) => (
                <MenuItem key={list.href} as="div" className="data-[focus]:bg-red-600">
                  <a
                    className="block data-[focus]:bg-blue-100"
                    href={list.href}
                  >
                    {list.label}
                  </a>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Home;
