"use client";
import UITextfield from "@/components/UITextfield/UITextfield";
import { apiPost } from "@/util/ApiRequest";
import { Button, CircularProgress, Grid, TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const ImageGeneration = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };
  const generateImage = () => {
    setIsLoading(true);
    const dataObj = {
      prompt: prompt,
      negative_prompt:
        "ugly, tiling, poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, extra limbs, disfigured, deformed, body out of frame, blurry, bad anatomy, blurred, watermark, grainy, signature, cut off, draft",
      style: "base",
      samples: 1,
      scheduler: "UniPC",
      num_inference_steps: 25,
      guidance_scale: 8,
      strength: 0.2,
      high_noise_fraction: 0.8,
      seed: 468685,
      img_width: 896,
      img_height: 1152,
      refiner: true,
      base64: true,
    };
    apiPost(
      "https://api.segmind.com/v1/sdxl1.0-txt2img",
      dataObj,
      async (res) => {
        console.log("res", res);

        // const parsedResponse = new TextDecoder().decode(res);
        // console.log("parsedResponse", parsedResponse);

        // const base64 = Buffer.from(res.data, 'binary').toString('base64');
        // const imageUrl = `data:image/jpeg;base64,${base64}`;
        setGeneratedImage(res.data);
        setIsLoading(false);
      },
      (err) => {
        setIsLoading(false);
        console.log("err", err);
      }
    );
  };
  return (
    <>
      <Grid container gap={3}>
        <Grid item xs={9}>
          <UITextfield
            variant="outlined"
            onChange={handleInputChange}
            value={prompt}
            placeholder="Enter your prompt"
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={generateImage}
            sx={{
              backgroundColor: "#ffffff",
              color: "#000000",
              padding: "12px 30px",
              borderRadius: "14px",
              "&:hover": {
                color: "white",
                backgroundColor: "#143dd0",
              },
            }}
          >
            Generate
          </Button>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          {isLoading && <CircularProgress />}
        </Grid>
        <Grid item xs={12}>
          {generatedImage?.image && (
            <img
              src={`data:image/jpeg;base64,${generatedImage.image}`}
              alt="img"
              style={{
                objectFit: "cover",
                height: "400px",
                width: "400px",
              }}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ImageGeneration;
