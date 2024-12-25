const Badge = ({text}:{text:string}) => {
  return (
    <div className="py-[2px] px-2 rounded-full border-[1px] border-[#B2DDFF] w-fit bg-[#EFF8FF] text-[#175CD3] text-secondary">
      {text}
    </div>
  );
}

export default Badge