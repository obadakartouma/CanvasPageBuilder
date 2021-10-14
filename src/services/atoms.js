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
