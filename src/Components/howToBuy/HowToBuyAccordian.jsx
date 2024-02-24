import React from "react";
import { Disclosure } from "@headlessui/react";
import { ArrowIcon } from "../common/Icon";

const HowToBuyAccordian = () => {
  return (
    <div className="w-full p-4">
      <div className="mx-auto w-full max-w-lg rounded-2xl bg-[#e1d9d9] p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="font-semibold text-[14px]">
                  Buy BOTIFI With ETH/USDT on ERC20 Chain
                </span>
                <ArrowIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                <b>Step:1</b> Connect Metamask/TrustWallet with
                presale.botifi.ai
                <br />
                <b> Step:2</b> Enter the amount you wish to purchase & Click on
                Buy Now <br />
                <b>Final Step:</b> Approve the transaction in your wallet for
                spending (use default in custom spending cap) click approve, and
                wait for confirmation Now click "Approve" again.
                <br />
                Please ensure you have ETH to cover your gas fees.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="font-semibold text-[14px]">
                  Buy BOTIFI With BNB/USDT or BUSD on BEP20 Chain
                </span>
                <ArrowIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                <b>Step:1</b> Connect Metamask/TrustWallet with
                presale.botifi.ai
                <br />
                <b> Step:2</b> Enter the amount you wish to purchase & Click on
                Buy Now <br />
                <b>Final Step:</b> Approve the transaction in your wallet for
                spending (use default in custom spending cap) click approve, and
                wait for confirmation Now click "Approve" again.
                <br />
                Please ensure you have BNB to cover your gas fees.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default HowToBuyAccordian;
