import React, { Dispatch, FC, SetStateAction } from "react";
import { FaArrowTurnDown } from "react-icons/fa6";
import { FaArrowTurnUp } from "react-icons/fa6";
interface Props {
  hidden: boolean;
  setHidden: Dispatch<SetStateAction<boolean>>;
}
const CrPostHeader: FC<Props> = ({ hidden, setHidden }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <h1 className="font-bold text-center text-3xl">THINK & WHISPER</h1>
      <button onClick={() => setHidden(!hidden)} className="text-2xl">
        {hidden ? <FaArrowTurnDown /> : <FaArrowTurnUp />}
      </button>
    </div>
  );
};

export default CrPostHeader;
