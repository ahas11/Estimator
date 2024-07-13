import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Fragment } from "react";

const DropDown = ({ label, lists }) => {
  return (
    <div>
      <Menu>
        <MenuButton className="data-[active]:bg-blue-400" as={Fragment}>{label}</MenuButton>
        <MenuItems
          anchor="bottom"
          transition
          className="origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem className="data-[focus]:bg-red-600">
            {lists.map((list) => (
              <MenuItem
                key={list.href}
                as={Fragment}
                className="data-[focus]:bg-red-600"
              >
                <a className="block data-[focus]:bg-blue-100" href={list.href}>
                  {list.label}
                </a>
              </MenuItem>
            ))}
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default DropDown;
