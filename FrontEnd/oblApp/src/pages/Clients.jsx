import React, { useEffect, useState } from "react";
import TextBox from "../components/textBox";
import { useForm } from "react-hook-form";
import {
  createClient,
  deleteClient,
  getClient,
  getClients,
  updateClient,
} from "../api/client";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getClients().then((response) => setClients(response));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = async (client) => {
    if (editId) {
      // Update existing client
      await updateClient(editId, client).then((response) => {
        setClients(clients.map((c) => (c.id === editId ? response : c)));
        setEditId(null);
        reset();
      });
    } else {
      // Create new client
      await createClient(client).then((response) => {
        setClients([...clients, response]);
        reset();
      });
    }
    navigate("/scope");
  };

  const handleDelete = (id) => {
    deleteClient(id).then(() => {
      setClients(clients.filter((c) => c.id !== id));
    });
  };

  const handleEdit = (client) => {
    setEditId(client.id);
    reset(client);
  };

  return (
    <div>
      <h1>OBL: Clients</h1>
      <h2>Enter the following data:</h2>

      <form onSubmit={handleSubmit(submitHandler)}>
        <TextBox
          type="text"
          placeholder=""
          label="First Name"
          className=""
          register={register("first_name", { required: true })}
        ></TextBox>
        {errors.first_name && <span>This field is required</span>}

        <TextBox
          type="text"
          placeholder=""
          label="Middle Name"
          className=""
          register={register("middle_name", { required: false })}
        ></TextBox>

        <TextBox
          type="text"
          placeholder=""
          label="Last Name"
          className=""
          register={register("last_name", { required: true })}
        ></TextBox>
        {errors.last_name && <span>This field is required</span>}

        <TextBox
          type="text"
          placeholder=""
          label="Email"
          className=""
          register={register("email", { required: false })}
        ></TextBox>

        <TextBox
          type="text"
          placeholder=""
          label="Phone Number"
          className=""
          register={register("phone", { required: false })}
        ></TextBox>

        <TextBox
          type="text"
          placeholder=""
          label="Property Address"
          className=""
          register={register("property_address", { required: true })}
        ></TextBox>
        {errors.property_address && <span>This field is required</span>}

        <TextBox
          type="text"
          placeholder=""
          label="Billing Address"
          className=""
          register={register("billing_address", { required: false })}
        ></TextBox>

        <br />
        <Button type="submit" label="Next" />
      </form>
    </div>
  );
};

export default Clients;