import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";

const Scope = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-black">OBL Estimator tool</h1>
        <Menu>
          <MenuButton>Please Choose A Scope Of Work</MenuButton>
          <MenuItems anchor="bottom">
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 bg-slate-500" href="/insulationtype">
                Insulation
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 bg-slate-500" href="">
                Abatement
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 bg-slate-500" href="">
                Clean Removal
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default Scope;
