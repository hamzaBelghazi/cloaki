import React from "react";
import GropedBet from "./GropedBet";

function BetsHandi({ bets }) {
  const groupByBaseLine = bets?.reduce((grp, odd) => {
    const { BaseLine } = odd;
    grp[BaseLine] = grp[BaseLine] ?? [];
    grp[BaseLine].push(odd);
    return grp;
  }, {});

  return (
    <div className="group">
      {groupByBaseLine
        ? Object.entries(groupByBaseLine).map(([key, value]) => (
            <GropedBet
              ket={
                value[0]?.Line +
                value[0]?.Id +
                Math.trunc(Math.random() * 123498111117)
              }
              bet={value}
            />
          ))
        : ""}
    </div>
  );
}

export default BetsHandi;
