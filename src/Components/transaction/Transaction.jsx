/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { useAllTransaction } from "../hooks/useAllTransaction";

const Transaction = () => {
  const [filteredTransaction, setFilteredTransaction] = useState();
  const { allTransaction, GetAllTransaction } = useAllTransaction();
  const [walletAddress, setWalletAddress] = useState();
  useEffect(() => {
    GetAllTransaction();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const filter = allTransaction.filter((obj) => obj.account == walletAddress);
    setFilteredTransaction(filter);
  };

  console.log(allTransaction);
  return (
    <div className="font-publicSans px-4 pt-[200px]">
      <form onSubmit={handleSubmit}>
        <div className="max-w-[800px] flex flex-col items-center justify-center space-y-4 mx-auto border border-[#5c5c5c] rounded-lg px-4 p-6">
          <h4 className="text-[20px] text-center font-semibold text-white">
            Transaction Verify
          </h4>
          <input
            type="text"
            required
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="Enter Your Wallet Address"
            className="border border-[#5c5c5c] text-[#9e9e9ece] rounded-[5px] px-4 py-2 bg-transparent w-full max-w-full min-w-full"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 primary-btn-style text-white mx-auto"
            >
              Search
            </button>
          </div>
          {filteredTransaction && filteredTransaction.length > 0 && (
            <div className="pt-4 flex justify-center mx-auto max-w-[800px] w-full overflow-auto text-white text-[12px]">
              <table>
                <tr>
                  <th className="border px-1 py-2 whitespace-nowrap">
                    Wallet Address
                  </th>
                  <th className="border px-1 py-2 whitespace-nowrap">
                    Amount Spent
                  </th>
                  <th className="border px-1 py-2 whitespace-nowrap">Date</th>
                  <th className="border px-1 py-2 whitespace-nowrap">
                    Token Received{" "}
                  </th>
                </tr>
                {filteredTransaction.map((obj) => (
                  <tr>
                    <td className="border p-1 whitespace-nowrap">
                      {obj.account}
                    </td>
                    <td className="border whitespace-nowrap text-center p-1">
                      ${Number(obj.amountOfToken).toFixed(2)}
                    </td>
                    <td className="border whitespace-nowrap p-1">
                      {" "}
                      {new Date(obj.createdAt).toLocaleString()}
                    </td>
                    <td className="border whitespace-nowrap text-center p-1">
                      {(Number(obj.amountOfToken) / 0.09).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Transaction;
