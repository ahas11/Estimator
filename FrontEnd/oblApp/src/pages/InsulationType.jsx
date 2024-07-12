import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";

const InsulationType = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-black">OBL Estimator tool</h1>
        <Menu>
          <MenuButton>Insulation Types</MenuButton>
          <MenuItems anchor="bottom">
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 bg-slate-500" href="/sprayFoam">
                Spray Foam
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 bg-slate-500" href="">
                Blown Cellulose
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 bg-slate-500" href="">
                Batts
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default InsulationType;
