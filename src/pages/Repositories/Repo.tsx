import { repoType } from "../../types/repoType";
import Badge from "./Badge";
import dbIcon from "/assets/icons/db.svg"

const Repo = ({name,visibility,language,size,lastUpdated}:repoType) => {
  return (
    <div className="flex flex-col py-6 gap-3 px-6 hover:bg-[#F5F5F5]">
      <div id="head" className="flex gap-2">
        <span className="text-[#181D27] font-inter text-xl leading-6 font-semibold">
          {name}
        </span>
        <Badge text={visibility} />
      </div>
      <div id="additional-info" className="flex gap-10 items-center">
        <div id="language" className="text-[#181D27] flex gap-2 items-center">
          {language}
          <div className="w-2 h-2 rounded-full bg-[#1570EF]"></div>
        </div>
        <div id="size" className="flex gap-2">
          <img src={dbIcon} alt="" />
          <span className="text-[#181D27] font-inter leading-6">{size} KB</span>
        </div>
        <div id="last-updated" className="text-[#181D27] font-inter leading-6">
          Updated {lastUpdated} days ago
        </div>
      </div>
    </div>
  );
};

export default Repo;
