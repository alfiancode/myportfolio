import React from "react";
import CardProject from "../components/CardProject";
import Title from "../components/Title";

const Project = () => {
  const data = [
    {
      title: "Movie Web",
      desc: "I created this project using the Public API. This project is a movie web that displays the latest movie information.The feature I made is   Sign In and Sign Up, protected Page if not logged in, 404 page if URL doesn't exist,Responsive design",
      imageUrl: "https://i.postimg.cc/W4RD0Cyb/movieapp.png",
    },
    {
      title: "NewsGame",
      desc: "I created this project using the Public API.The feature I made is:  Sign In and Sign Up,protected Page if not logged in,404 page if URL doesn't exist,Responsive design,search feature. Here is the technology I used to build this website: React JS as Front End Library,Firebase as Authentication,Material UI as UI Tools so that the components that are made are uniform and more attractive according to standards,Multiple Hooks from React to make work easier",
      imageUrl:
        "https://www.upwork.com/att/download/portfolio/persons/uid/1566610396931543040/profile/projects/files/621036c1-2934-479c-b300-2c54e9c59ee4",
    },
  ];
  return (
    <div className="mx-8">
      <Title title="Project" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-auto ">
        {data.map((item, index) => (
          <CardProject
            title={item.title}
            desc={item.desc}
            imageUrl={item.imageUrl}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
