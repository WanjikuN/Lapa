import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import volunteer from "../assets/images/volunteer.jpg";
import donate from "../assets/images/donate12.webp";
import raise from "../assets/images/raise-awarness.jpg";
import partner from "../assets/images/partners12.png";
const steps = [
  {
    title: "Become a Volunteer",
    content:
      "Lend your skills and knowledge to support our various projects. From legal research to community outreach, there's a role for everyone.",
    image: volunteer,
  },
  {
    title: "Donate",
    content:
      "Your financial contributions empower LAPA to provide critical resources for communities, advocate for policy changes, and strengthen our wildlife database.",
    image: donate,
  },
  {
    title: "Raise Awareness",
    content:
      "Spread the word about LAPA's work. Take part in our events, share information on social media, or educate your community.",
    image: raise,
  },
  {
    title: "Partner with Us",
    content:
      "If your organization shares our goals, explore collaborative opportunities. We can combine expertise and resources to create a more significant impact together.",
    image: partner,
  },
];

const WorkWithUs = () => {
  return (
    <div id="our-cause">
      <h1 id="title">Work With Us</h1>
      <Box className="stepper-container">
        {steps.map((step, index) => (
          <Box
            key={index}
            className={`stepper-card ${index % 2 === 0 ? "left" : "right"}`}
          >
            <Card
              className="step-card"
              onMouseEnter={(e) => e.currentTarget.classList.add("hovered")}
              onMouseLeave={(e) => e.currentTarget.classList.remove("hovered")}
            >
              <CardContent id="content">
                <img src={step.image}  className="step-image" />
                <Typography variant="h5" className="step-title">
                  {step.title}
                </Typography>
                <Typography variant="body2" className="step-content">
                  {step.content}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default WorkWithUs;
