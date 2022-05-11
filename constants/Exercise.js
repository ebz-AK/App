import react from "react";
import biceps from "../assets/biceps.mp4";
import pushup from "../assets/pushup.mp4";
import crutches from "../assets/crutches.mp4";
import pullups from "../assets/pullups.mp4";


const ExerciseTutorials = [
    {
      id: 0,
      name: "Biceps",  
      description: "curl the weights towards your face, the slower and more control you have to better",
      Video: biceps,
      time: 5,
    },
    {
        id: 1,
        name: "push ups",  
        description: "lie down down and push yourself up with arms and back down till your chest almost hits the ground and repeat",
        Video: pushup,
        time: 5,
    },
    {
        id: 2,
        name: "crutches",  
        description: "lying down pull your head up towards knees",
        Video: crutches,
        time: 5,
    },
    {
        id: 3,
        name: "pullups",  
        description: "both hands at the edge of the bar pull yourself up till you chin is above the bar",
        Video: pullups,
        time: 5,
    },        




]
export {ExerciseTutorials};