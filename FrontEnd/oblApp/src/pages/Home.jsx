import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-black">OBL Estimator tool</h1>
        <Menu>
          <MenuButton>Estimating list</MenuButton>
          <MenuItems anchor="bottom">
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 bg-slate-500" href="/clients">
                Create Estimate
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 bg-slate-500" href="">
                Existing Estimates
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default Home;
