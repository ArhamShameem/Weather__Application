import React from "react";
import { Box, InputBase, Button, styled } from "@mui/material";
import { useState } from "react";
import { getweather } from "../services/api";

const Container = styled(Box)({
  background: "#445a6f",
  padding: "10px",
});
const Input = styled(InputBase)({
  color: "#FFF",
  marginRight: "20",
  fontSize: "60",
});

const GetButton = styled(Button)({
  background: "#e67e22",
});

const Form = ({ setResult }) => {
  const [data, setData] = useState({ City: "", Country: "" });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getWeatherInfo = async () => {
    let response = await getweather(data.City, data.Country);
    setResult(response);
  };

  return (
    <Container>
      <Input placeholder="City" onChange={(e) => handleChange(e)} name="City" />
      <Input
        placeholder="Country"
        onChange={(e) => handleChange(e)}
        name="country"
      />
      <GetButton variant="contained" onClick={() => getWeatherInfo()}>
        Get Weather
      </GetButton>
    </Container>
  );
};

export default Form;
