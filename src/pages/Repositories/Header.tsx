import React from "react";
import ButtonPrimary from "../../components/ui/ButtonPrimary";
import ButtonSecondary from "../../components/ui/ButtonSecondary";
import plus from "/assets/icons/plus.svg";
import refresh from "/assets/icons/refresh.svg";

interface HeaderProps {
  totalRepos: number;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  totalRepos,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="flex flex-col gap-4 py-5 px-6">
      <div className="flex justify-between w-full portrait:flex-col portrait:gap-3">
        <div id="heading">
          <span className="text-[#181D27] font-inter text-2xl font-semibold leading-8">
            Repositories
          </span>
          <div id="subheading" className="text-secondary">
            {totalRepos} total repositories
          </div>
        </div>
        <div id="header-buttons" className="flex gap-3">
          <ButtonSecondary>
            <img src={refresh} alt="" /> Refresh All
          </ButtonSecondary>
          <ButtonPrimary>
            <img src={plus} alt="" />
            Add Repository
          </ButtonPrimary>
        </div>
      </div>
      <div className="bg-white rounded-md border border-gray-300 py-2 px-3 flex items-center w-[366px] shadow-custom">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="text"
          placeholder="Search Repositories"
          className="ml-2 flex-1 focus:outline-none font-secondary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;