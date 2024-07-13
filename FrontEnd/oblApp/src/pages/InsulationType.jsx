import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";

const InsulationType = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-black">OBL Estimator tool</h1>
        <Menu>
          <MenuButton className="px-4 py-2 text-white bg-blue-600 rounded">
            Insulation Types
          </MenuButton>
          <MenuItems className="mt-2 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem>
              {({ active }) => (
                <a
                  className={`${
                    active ? 'bg-blue-100' : 'bg-white'
                  } block px-4 py-2 text-black`}
                  href="/sprayFoam"
                >
                  Spray Foam
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  className={`${
                    active ? 'bg-blue-100' : 'bg-white'
                  } block px-4 py-2 text-black`}
                  href=""
                >
                  Blown Cellulose
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  className={`${
                    active ? 'bg-blue-100' : 'bg-white'
                  } block px-4 py-2 text-black`}
                  href=""
                >
                  Batts
                </a>
              )}
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default InsulationType;
