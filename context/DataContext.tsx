"use client";
import { set } from "mongoose";
import { createContext, useState, useEffect, useContext } from "react";

interface Project {
  name: string;
  details: string;
  type: string;
  year: string;
  bottomPhoneImage: string;
  topPhoneImage: string;
  link: string;
  github: string;
}
interface HomePage {
  name: string;
  petName: string;
  message: string;
}

interface AboutPage {
  details: string;
  image: string;
  resumeLink: string;
}

interface Other {
  logoLink: string;
}

interface WorkPage {
  projects: Project[];
}

interface portfolioData {
  data: {
    rendered: boolean;
    homePage: HomePage;
    aboutPage: AboutPage;
    other: Other;
    workPage: WorkPage;
  };
  setData: (data: any) => void;
}

const DataContext = createContext<portfolioData>({
  data: {
    rendered: false,
    homePage: {
      name: "",
      petName: "",
      message: "",
    },
    aboutPage: {
      details: "",
      image: "",
      resumeLink: "",
    },
    other: {
      logoLink: "",
    },
    workPage: {
      projects: [],
    },
  },
  setData: () => {},
});

export const DataProvider = ({ children }: any) => {
  const [data, setData] = useState<portfolioData>({
    data: {
      rendered: false,
      homePage: {
        name: "",
        petName: "",
        message: "",
      },
      aboutPage: {
        details: "",
        image: "",
        resumeLink: "",
      },
      other: {
        logoLink: "",
      },
      workPage: {
        projects: [],
      },
    },
    setData: () => {},
  });

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_GET_DATA + "")
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data: any) => {
        setData({ data: { rendered: true, ...data.data }, setData: () => {} });
      });
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useDataContext = () => useContext(DataContext);
