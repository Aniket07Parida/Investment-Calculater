import React from "react";
import { CalculateInvestmentResults, formatter } from "./src/Investments";

export default function Result({ Output }) {
    const getResult = CalculateInvestmentResults(Output)
    const InitialInvestment = getResult[0].valueEndOfYear - getResult[0].interest - getResult[0].annualInvestment;
    console.log(getResult);
    return (
        <React.Fragment>
            <h3 className="text-3xl ml-65">Result...</h3>
            <table className="ml-135 text-base">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Intrest (Year)</th>
                        <th>Total Intrest</th>
                        <th>Invested Capital</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getResult.map(InputYear => {
                        let totalIntrest = InputYear.valueEndOfYear - InputYear.annualInvestment * InputYear.year - InitialInvestment;
                        const totalAmountInvested = InputYear.valueEndOfYear - totalIntrest;
                            return <tr key={InputYear.year}>
                                <td>{InputYear.year}</td>
                                <td>{formatter.format(InputYear.valueEndOfYear)}</td>
                                <td>{formatter.format(totalIntrest)}</td>
                                <td>{formatter.format(InputYear.annualInvestment)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                           
                        }
                        )}
                    </tbody>
            </table>
        </React.Fragment>
    )
}