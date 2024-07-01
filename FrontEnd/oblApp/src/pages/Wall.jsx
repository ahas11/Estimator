import React, { useEffect, useState } from "react";
import TextBox from "../components/textBox";
import { useForm } from "react-hook-form";
import {
  createWall,
  deleteWall,
  getWall,
  getWalls,
  updateWall,
} from "../api/wall";
import Button from "../components/button";

const Wall = () => {
  const [walls, setWalls] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getWalls().then((response) => setWalls(response));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (wall) => {
    if (editId) {
      // Update existing wall
      updateWall(editId, wall).then((response) => {
        setWalls(walls.map((w) => (w.id === editId ? response : w)));
        setEditId(null);
        reset();
      });
    } else {
      // Create new wall
      createWall(wall).then((response) => {
        setWalls([...walls, response]);
        reset();
      });
    }
  };

  const handleDelete = (id) => {
    deleteWall(id).then(() => {
      setWalls(walls.filter((w) => w.id !== id));
    });
  };

  const handleEdit = (wall) => {
    setEditId(wall.id);
    reset(wall);
  };
  return (
    <div>
      <h1 className="text-black">Spray Foam</h1>
      <div className="flex justify-center items-center">
        <h1>itrms</h1>
        <ul>
          {walls.map((wall) => (
            <li key={wall.id}>
              {wall.length} x {wall.height} x {wall.thickness}
              <Button onClick={() => handleEdit(wall)}>Edit</Button>
              <Button onClick={() => handleDelete(wall.id)}>Delete</Button>
            </li>
          ))}
        </ul>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="form-container w-full flex flex-col bg-blue px-10 pt-14 pb-14 md:w-[400px] gap-y-8"
        >
          <div className="flex flex-col gap-y-5">
            <TextBox
              placeholder="0"
              type="number"
              label="Length"
              className="w-full rounded-full"
              register={register("length", {
                required: "Required",
              })}
            />
            <TextBox
              placeholder="0"
              type="text"
              label="Height"
              className="w-full rounded-full"
              register={register("height", {
                required: "Required!",
              })}
            />
            <TextBox
              placeholder="0"
              type="number"
              label="Thickness"
              className="w-full rounded-full"
              register={register("thickness", {
                required: "Required!",
              })}
            />
            <TextBox
              placeholder="0"
              type="checkbox"
              label="Paint"
              className="w-full rounded-full"
              register={register("paint", {})}
            />
            <TextBox
              placeholder="0"
              type="number"
              label="Time"
              className="w-full rounded-full"
              register={register("time", {
                required: "Required!",
              })}
            />
            <TextBox
              placeholder="0"
              type="number"
              label="Profit"
              className="w-full rounded-full"
              register={register("profit", {
                required: "Required!",
              })}
            />
          </div>
          <button type="submit" className="bg-slate-500 rounded-full p-2 mt-4">
            {editId ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Wall;
