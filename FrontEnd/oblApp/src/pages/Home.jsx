import React from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/sprayFoam");
  };
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-black">OBL Estimator tool</h1>
        <Menu>
          <MenuButton>Insulation</MenuButton>
          <MenuItems anchor="bottom">
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="/sprayFoam">
                Spray Foam
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default Home;
