"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpeg";
import img8 from "../../assets/img8.jpeg";
import img9 from "../../assets/img9.jpeg";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function UIMasonry() {
  const itemData = [
    {
      img: img1,
      title: "Fern",
    },
    {
      img: img2,
      title: "Snacks",
    },
    {
      img: img3,
      title: "Mushrooms",
    },
    {
      img: img4,
      title: "Tower",
    },
    {
      img: img5,
      title: "Sea star",
    },
    {
      img: img6,
      title: "Honey",
    },
    {
      img: img7,
      title: "Basketball",
    },
    {
      img: img8,
      title: "Breakfast",
    },
    {
      img: img9,
      title: "Tree",
    },
  ];
  return (
    <Box sx={{ width: "100%", minHeight: 829 }}>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img
              src={`${item.img.src}`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
