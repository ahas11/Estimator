import React, { useEffect, useState } from "react";
import TextBox from "../components/textBox";
import { useForm } from "react-hook-form";
import {
  createWall,
  deleteWall,
  getWall,
  getWalls,
  updateWall,
  calculateExpenses,
} from "../api/wall";
import Button from "../components/button";

const Wall = () => {
  const [walls, setWalls] = useState([]);
  const [editId, setEditId] = useState(null);
  const [expenses, setExpenses] = useState(null);

  useEffect(() => {
    getWalls().then((response) => setWalls(response));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = async (wall) => {
    if (editId) {
      // Update existing wall
      await updateWall(editId, wall).then((response) => {
        setWalls(walls.map((w) => (w.id === editId ? response : w)));
        setEditId(null);
        reset();
      });
    } else {
      // Create new wall
      await createWall(wall).then((response) => {
        setWalls([...walls, response]);
        reset();
      });
    }

    // Calculate expenses
    await calculateExpenses(wall).then((response) => {
      setExpenses(response);
    });
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
      <h1>OBL: Spray Foam</h1>
      <h2>Enter the following data:</h2>

      <form onSubmit={handleSubmit(submitHandler)}>
        <TextBox
          type="number"
          placeholder="0"
          label="Length (ft)"
          className=""
          register={register("length", { required: true })}
        ></TextBox>
        {errors.length && <span>This field is required</span>}

        <TextBox
          type="number"
          placeholder="0"
          label="Height (ft)"
          className=""
          register={register("height", { required: true })}
        ></TextBox>
        {errors.height && <span>This field is required</span>}

        <TextBox
          type="number"
          placeholder="0"
          label="Thickness (in)"
          step = "any" 
          className=""
          register={register("thickness", { required: true })}
        ></TextBox>
        {errors.thickness && <span>This field is required</span>}

        <TextBox
          type="checkbox"
          placeholder="0"
          label="Intumescent Paint"
          className=""
          register={register("paint")}
        ></TextBox>

        <TextBox
          type="number"
          placeholder="0"
          label="Time (h)"
          className=""
          register={register("time", { required: true })}
        ></TextBox>
        {errors.time && <span>This field is required</span>}

        <TextBox
          type="number"
          placeholder="0"
          label="Crew Members (total)"
          className=""
          register={register("crew", { required: true })}
        ></TextBox>
        {errors.crew && <span>This field is required</span>}

        <TextBox
          type="number"
          placeholder="40"
          label="Profit Margin (%)"
          className=""
          register={register("profit", { required: true })}
        ></TextBox>
        {errors.profit && <span>This field is required</span>}

        <br />
        <Button type="submit" label="Calculate"></Button>
      </form>

      {expenses && (
        <div>
          <h2>Expenses Breakdown:</h2>
          <p>Spray Foam Material Expense: ${expenses.sf_total_expense}</p>
          <p>Intumescent Paint Material Expense: ${expenses.paint_total_expense}</p>
          <p>Labor Expense: ${expenses.labor_total_expense}</p>
          <p>Suits/Gloves/Masks Material Expense: ${expenses.suits_total_expense}</p>
          <p>Truck Expense: ${expenses.truck_total_expense}</p>
          <p>Protection Material Expense: ${expenses.protection_total_expense}</p>
          <p>Total Expense: ${expenses.total_expense}</p>
          <p>Total Sale: ${expenses.total_sale}</p>
        </div>
      )}
    </div>
  );
};

export default Wall;