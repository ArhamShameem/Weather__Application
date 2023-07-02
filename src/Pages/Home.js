import React from "react";
import { Box, styled } from "@mui/material";
import Sunset from "../assets/image/bg.jpg";
import Information from "../Compnents/Information";
import Form from "../Compnents/Form";
import { useState } from "react";

const Components = styled(Box)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  width: "65%",
});
const Image = styled(Box)({
  backgroundImage: `url(${Sunset})`,
  width: "27%",
  height: "80%",
  backgroundSize: "cover", // to make image in center
  borderRadius: "20px 0 0 20px", // for Round edges of border image {TL  TR  BL  BR}
});
const Home = () => {
  const [result, setResult] = useState({});
  return (
    <Components>
      <Image />
      <Box style={{ width: "73%", height: "80%" }}>
        <Form setResult={setResult} />
        <Information result={result} />
      </Box>
    </Components>
  );
};

export default Home;
