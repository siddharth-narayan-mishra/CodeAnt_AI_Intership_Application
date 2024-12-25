import house from "/assets/icons/house.svg";
import code from "/assets/icons/code.svg";
import cloud from "/assets/icons/cloud.svg";
import book from "/assets/icons/book.svg";
import settings from "/assets/icons/settings.svg";
import houseSelected from "/assets/icons/house_selected.svg";
import codeSelected from "/assets/icons/code_selected.svg";
import cloudSelected from "/assets/icons/cloud_selected.svg";
import bookSelected from "/assets/icons/book_selected.svg";
import settingsSelected from "/assets/icons/settings_selected.svg";
import call from "/assets/icons/phone.svg";
import exit from "/assets/icons/exit.svg";

export const navOptions = [
  {
    text: "Repositories",
    imgSrc: house,
    selectedImageSrc: houseSelected,
    active: true,
  },
  {
    text: "AI Code Review",
    imgSrc: code,
    selectedImageSrc: codeSelected,
    active: false,
  },
  {
    text: "Cloud Security",
    imgSrc: cloud,
    selectedImageSrc: cloudSelected,
    active: false,
  },
  {
    text: "How to Use",
    imgSrc: book,
    selectedImageSrc: bookSelected,
    active: false,
  },
  {
    text: "Settings",
    imgSrc: settings,
    selectedImageSrc: settingsSelected,
    active: false,
  },
];

export const footerItems = [
  {
    text: "Support",
    imgSrc: call,
    selectedImageSrc: "",
    active: false,
  },
  {
    text: "Logout",
    imgSrc: exit,
    selectedImageSrc: "",
    active: false,
  },
];

export const users = [
  "UtkarshDhairyaPanwar",
  "SiddharthNarayanMishra",
  "JustATestUser",
];