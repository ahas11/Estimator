import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const SprayFoam = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/wall");
  };
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-black">OBL Estimator tool</h1>
        <Menu>
          <MenuButton>Spray Foam Type</MenuButton>
          <MenuItems anchor="bottom">
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 bg-slate-500" href="/wall">
                Wall
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100 bg-slate-500" href="">
                Rim Joist
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}

export default SprayFoam