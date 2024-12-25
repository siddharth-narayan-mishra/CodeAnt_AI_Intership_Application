import React, { useState } from "react";
import repos from "../../config/repos";
import Header from "./Header";
import Repo from "./Repo";
import { repoType } from "../../types/repoType";

const Repositories: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredRepos = repos.filter((repo: repoType) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white h-full rounded-xl border-[1px] border-[#E9EAEB] shadow-[0px_1px_2px_0px_rgba(10,_13,_18,_0.05)] flex flex-col divide-y-[1px] divide-[#D5D7DA] overflow-scroll">
      <Header
        totalRepos={repos.length}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {filteredRepos.map((item: repoType, idx: number) => {
        return (
          <Repo
            key={idx}
            name={item.name}
            visibility={item.visibility}
            language={item.language}
            size={item.size}
            lastUpdated={item.lastUpdated}
          />
        );
      })}
    </div>
  );
};

export default Repositories;
