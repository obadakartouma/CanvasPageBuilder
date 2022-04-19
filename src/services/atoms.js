import { atom } from "recoil";

export const ImageUrl = atom({
  key: "imageUrl",
  default:
    "https://www.lyon-ortho-clinic.com/files/cto_layout/img/placeholder/bigteam.jpg",
});

export const CourseStructure = atom({
  key: "CourseStructure",
  default: "",
});

export const LearningObjectives = atom({
  key: "LearningObjectives",
  default: {
    youtubeUrl: "",
    items: [
      {
        item: "",
      },
    ],
  },
});

export const CourseNavigation = atom({
  key: "courseNavigation",
  default: {
    items: [
      {
        time: "",
        title: "",
        chapter: [""],
        link: "",
      },
    ],
  },
});

export const Contact = atom({
  key: "contact",
  default: {
    contacts: [
      {
        profilePicture: "",
        name: "",
        email: "",
      },
    ],
  },
});

export const BeschreibungBox = atom({
  key: "beschreibungBox",
  default: {
    title: "",
    text: "",
    link: "",
    image: "",
  },
});

export const Metroplan = atom({
  key: "Metroplan",
  default:
    "https://www.lyon-ortho-clinic.com/files/cto_layout/img/placeholder/bigteam.jpg",
});

export const Inhaltsuebersicht = atom({
  key: "InhaltsUebersicht",
  default: {
    items: [
      {
        ImageUrl: "",
        courses: [
          {
            text: "",
            link: "",
          },
        ],
      },
    ],
  },
});

export const Badges = atom({
  key: "Badges",
  default: {
    title: "",
    text: "",
  },
});

export const CanvasInfos = atom({
  key: "CanvasInfos",
  default: {
    title: "",
    text: "",
    buttontext: "",
    link: "",
  },
});
