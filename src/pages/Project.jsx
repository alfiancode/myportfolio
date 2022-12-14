import React from "react";
import CardProject from "../components/CardProject";
import Title from "../components/Title";

const Project = () => {
  const data = [
    {
      title: "Top Cryptocurrencies",
      desc: "I created this project using the Public API.on this project i use React Query for optimize Data Fetching because this case need realtime data Fecthing .anothers of the web front end technologies I use are ReactJs, , tailwindcss,daisyUI, React-Router, React Custom Hooks, Axios",
      imageUrl: "https://i.ibb.co/prMRCYb/crypto-web.png",
      link: "https://cryptoweb-alfian.vercel.app/",
    },
    {
      title: "Movie Web",
      desc: "I created this project using the Public API. This project is a movie web that displays the latest movie information.The feature I made is   Sign In and Sign Up, protected Page if not logged in, 404 page if URL doesn't exist,Responsive design",
      imageUrl: "https://i.postimg.cc/W4RD0Cyb/movieapp.png",
      link: "https://pair-41-dts-mini-project.vercel.app/",
    },
    {
      title: "Resepku (Recipe Web)",
      desc: "I created this project using the Public API. This project is a recipe web that displays the latest recipe information.The feature I made is   Sign In and Sign Up, protected Page if not logged in, 404 page if URL doesn't exist,Responsive design.Some of the web front end technologies I use are ReactJs, Firebase, MaterialUi, React-Router, React Custom Hooks, Axios",
      imageUrl: "https://i.postimg.cc/Qtwbm3s9/Screenshot-22.png",
      link: "https://152235865100543-dts-final-project.vercel.app/",
    },
    {
      title: "NewsGame",
      desc: "I created this project using the Public API.The feature I made is:  Sign In and Sign Up,protected Page if not logged in,404 page if URL doesn't exist,Responsive design,search feature. Here is the technology I used to build this website: React JS as Front End Library,Firebase as Authentication,Material UI as UI Tools so that the components that are made are uniform and more attractive according to standards,Multiple Hooks from React to make work easier",
      imageUrl:
        "https://www.upwork.com/att/download/portfolio/persons/uid/1566610396931543040/profile/projects/files/621036c1-2934-479c-b300-2c54e9c59ee4",
      link: "https://152235865100545-dts-final-project.netlify.app/",
    },
    {
      title: "Sobat Tubel (Education Web)",
      desc: "I use this website to help students in Indonesia to be able to pass the entrance exam to one of the best official schools in Indonesia. The website is built with technologies such as ReactJs, Firebase, Material UI and has a responsive design",
      imageUrl: "https://i.postimg.cc/tT12QT4C/Screenshot-21.png",
      link: "https://kembang15.vercel.app/",
    },

    {
      title: "Medium UI Clone",
      desc: "On this website, I created a clone of Medium.com on the desktop and mobile versions. the main technology i use is tailwindcss and headless ui",
      imageUrl: "https://i.imgur.com/DlS14qF.png",
      link: "https://medium-clone-alfians.vercel.app/",
    },
    {
      title: "Tutorify Slicing",
      desc: "here I try speed, try using tailwind to design a mobile app version only. the design I use I take from figma community",
      imageUrl: " https://i.imgur.com/W5nnf2D.png",
      link: "https://tutorify.vercel.app/",
    },
    {
      title: "Social Auth with NextAuth",
      desc: "implementation of nextAuth especially on the social login feature because it is really needed in today's web development",
      imageUrl: " https://i.imgur.com/JPWQJt6.png",
      link: "https://belajar-next-auth.vercel.app/",
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
            index={index}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
