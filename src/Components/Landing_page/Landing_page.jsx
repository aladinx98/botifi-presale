/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import "./Landing_page.css";
import eth from "../Assets/eth.png";
import usdt from "../Assets/usdt.png";
import bnb from "../Assets/bnb.png";
import busd from "../Assets/Busd.png";
import moon from "../Assets/boxLogo.png";
import { BsLinkedin, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaTwitch } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import site_logo from "../Assets/site_logo.png";
import Swal from "sweetalert2";

import Web3 from "web3";

import {
  boldAI_Presale_BNB_Abi,
  boldAI_Presale_BNB_Address,
  boldAI_Presale_Eth_Abi,
  boldAI_Presale_Eth_Address,
  BUSD_Abi,
  BUSD_Address,
  TetherToken_Eth_Abi,
  TetherToken_Eth_Address,
  USDT_Abi,
  USDT_Address,
} from "../../util/Contract";
import {
  useAccount,
  useContractWrite,
  useNetwork,
  useSwitchNetwork,
} from "wagmi";
import { useBalance } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import { toast } from "react-hot-toast";
import ImageNew1 from "../../Components/Assets/The-Future-is-AI-Decentralized.webp";
import { useGetExtraToken } from "../hooks/useGetExtraToken";
import HowToBuyModal from "../howToBuy/HowToBuyModal";
import { useAddTransaction } from "../hooks/useAddTransaction";
import ToastModal from "./ToastModal";
import { Link } from "react-router-dom";
import { HelpIcon } from "../common/Icon";
import { useAllTransaction } from "../hooks/useAllTransaction";
export default function Landing_page() {
  const [amount, setAmount] = useState();
  const { totalAmount, GetAllTransaction, GetTotalAmount, allTransaction } =
    useAllTransaction();
  useEffect(() => {
    GetAllTransaction();
  }, []);
  useEffect(() => {
    if (allTransaction && allTransaction.length > 0) {
      GetTotalAmount();
    }
  }, [allTransaction]);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const { extraToken, getExtraToken } = useGetExtraToken();
  const { writeUserTransaction } = useAddTransaction();

  useEffect(() => {
    getExtraToken();
  }, []);
  useEffect(() => {
    if (extraToken && extraToken.length > 0 && totalAmount) {
      console.log(totalAmount);
      const totalExtraAmount = Number(extraToken[0].token) * 0.11;
      console.log(totalExtraAmount);
      console.log(totalAmount);
      const total = Number(totalAmount) + Number(totalExtraAmount);
      setAmount(total.toFixed(2));
    }
  }, [extraToken, totalAmount]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { chain } = useNetwork();
  const { chains, switchNetwork } = useSwitchNetwork();
  const { address, isConnecting, isDisconnected } = useAccount();
  const { open, close } = useWeb3Modal();
  const [isActive, setisActive] = useState(0);
  const [Token_Balance, setToken_Balance] = useState(0);
  const [get_userValue, setget_userValue] = useState("");
  const [show_value, setshow_value] = useState(0);
  const [getmaxTokeninPresale, setgetmaxTokeninPresale] = useState(0);
  const [boldAI_Sold, setboldAI_Sold] = useState(0);
  const [contractbalance, setcontractbalance] = useState(0);
  const [progressbarWidth, setProgressbarWidth] = useState(0);
  const [spinner, setspinner] = useState(false);
  const [totalTokenSold, setTotalTokenSold] = useState(0);
  const [addExtraToken, setAddExtraToken] = useState();
  const [activeChain, setActiveChain] = useState("ETH");
  const [actualIncreaseAmount, setActualIncreaseAmount] = useState();
  const [modalInfo, setModalInfo] = useState({
    title: "",
    text: "",
    icon: "",
    confirmButtonText: "",
    redirect: false,
  });
  const data1 = useBalance({
    address: address || null,
  });

  const webSupply = new Web3("https://rpc.builder0x69.io");
  const webSupply_Binance = new Web3("https://1rpc.io/bnb");

  // const webSupply = new Web3("https://eth-sepolia.public.blastapi.io");
  // const webSupply_Binance = new Web3("https://bsc-testnet.public.blastapi.io");

  const USDT_Balance = async () => {
    let contractOf_Token;
    let contractOf_BUSDToken;
    let contractOf;
    let contractOf_USDT;

    if (chain?.id == 56) {
      contractOf_BUSDToken = new webSupply_Binance.eth.Contract(
        BUSD_Abi,
        BUSD_Address
      );
      contractOf = new webSupply_Binance.eth.Contract(
        boldAI_Presale_BNB_Abi,
        boldAI_Presale_BNB_Address
      );
      contractOf_USDT = new webSupply_Binance.eth.Contract(
        USDT_Abi,
        USDT_Address
      );
    } else {
      contractOf_Token = new webSupply.eth.Contract(
        TetherToken_Eth_Abi,
        TetherToken_Eth_Address
      );
      contractOf = new webSupply.eth.Contract(
        boldAI_Presale_Eth_Abi,
        boldAI_Presale_Eth_Address
      );
    }
    let contractOf_Eth = new webSupply.eth.Contract(
      boldAI_Presale_Eth_Abi,
      boldAI_Presale_Eth_Address
    );
    let contractOf_BNB = new webSupply_Binance.eth.Contract(
      boldAI_Presale_BNB_Abi,
      boldAI_Presale_BNB_Address
    );

    if (address && isActive == 1) {
      if (chain?.id == 56) {
        let balance = await contractOf_BUSDToken.methods
          .balanceOf(address)
          .call();
        balance = webSupply_Binance.utils.fromWei(balance.toString());
        setToken_Balance(balance);
      } else {
        let balance = await contractOf_Token.methods.balanceOf(address).call();
        setToken_Balance(balance / 1000000);
      }
    } else if (address && isActive == 2) {
      let balance = await contractOf_USDT.methods.balanceOf(address).call();
      balance = webSupply_Binance.utils.fromWei(balance.toString());
      setToken_Balance(balance);
    }

    let boldAI_Sold = await contractOf.methods.token_Sold().call();
    boldAI_Sold = webSupply.utils.fromWei(boldAI_Sold);
    const increaseToken =
      extraToken && extraToken.length > 0 ? extraToken[0].token : 0;
    setAddExtraToken(increaseToken);
    setTotalTokenSold(Number(boldAI_Sold) + Number(increaseToken));

    setboldAI_Sold(boldAI_Sold);
    let maxTokeninPresale = await contractOf.methods.maxTokeninPresale().call();
    maxTokeninPresale = webSupply.utils.fromWei(maxTokeninPresale.toString());
    setgetmaxTokeninPresale(maxTokeninPresale);

    let USDraised_BNB = await contractOf_BNB.methods.USDraised().call();
    USDraised_BNB = webSupply_Binance.utils.fromWei(USDraised_BNB.toString());

    let USDraised_ETH = await contractOf_Eth.methods.USDraised().call();

    USDraised_ETH = Number(USDraised_ETH) / Number(1000000);
    setcontractbalance(
      
      Number(USDraised_BNB) + Number(USDraised_ETH)
    );
    const increased_balance = Number(increaseToken * 0.09);
    const balance = Number(USDraised_BNB) + Number(USDraised_ETH);
    const total_balance = increased_balance + balance;
    setActualIncreaseAmount(total_balance.toFixed(2));
    const calc_width = total_balance / 6315.75;
    setProgressbarWidth(calc_width);
  };
  useEffect(() => {
    if (extraToken && extraToken.length > 0 && extraToken[0].token) {
      USDT_Balance();
    }
  }, [extraToken]);
  const getLive_Rate = async () => {
    console.log(chain?.id);
    console.log(isActive);
    try {
      let contractOf;
      if (chain?.id == 56) {
        contractOf = new webSupply_Binance.eth.Contract(
          boldAI_Presale_BNB_Abi,
          boldAI_Presale_BNB_Address
        );
      } else {
        contractOf = new webSupply.eth.Contract(
          boldAI_Presale_Eth_Abi,
          boldAI_Presale_Eth_Address
        );
      }
      console.log(contractOf);
      if (isActive == 0) {
        if (get_userValue) {
          let value = webSupply.utils.toWei(get_userValue.toString());
          if (chain?.id == 56) {
            let getboldAIvalueperBNB = await contractOf.methods
              .getvalueperBNB(value)
              .call();
            let result = webSupply_Binance.utils.fromWei(
              getboldAIvalueperBNB.toString()
            );
            setshow_value(result);
          } else {
            let getboldAIvalueperETH = await contractOf.methods
              .getvalueperETH(value)
              .call();
            let result = webSupply.utils.fromWei(
              getboldAIvalueperETH.toString()
            );
            setshow_value(result);
          }
        }
      } else if (isActive == 1) {
        if (chain?.id == 56) {
          let value = webSupply_Binance.utils.toWei(get_userValue.toString());
          let getboldAIvalueperBUSD = await contractOf.methods
            .getvalueperBUSD(value)
            .call();
          let result = webSupply_Binance.utils.fromWei(
            getboldAIvalueperBUSD.toString()
          );
          setshow_value(result);
        } else {
          let value = get_userValue * 1000000;
          let getboldAIvalueperUSDT = await contractOf.methods
            .getvalueperUSDT(value)
            .call();
          let result = webSupply.utils.fromWei(
            getboldAIvalueperUSDT.toString()
          );
          setshow_value(result);
        }
      } else if (isActive == 2) {
        if (chain?.id == 56) {
          let value = webSupply_Binance.utils.toWei(get_userValue.toString());
          let getboldAIvalueperBUSD = await contractOf.methods
            .getvalueperBUSD(value)
            .call();
          let result = webSupply_Binance.utils.fromWei(
            getboldAIvalueperBUSD.toString()
          );
          setshow_value(result);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    USDT_Balance();
    getLive_Rate();
  }, [get_userValue, isActive, chain?.id]);

  const buyEth = async () => {
    try {
      if (address) {
        if (get_userValue != "") {
          if (get_userValue > parseFloat(data1?.data?.formatted).toFixed(4)) {
            toast.error("Insufficient balance");
            // Swal.fire({
            //   title: "Insufficient balance",
            //   text: "You dont have enough ETH to pay for Transaction",
            //   icon: "error",
            //   confirmButtonText: "OK",
            // });

            setspinner(false);
          } else {
            setspinner(true);
            const { request } = await prepareWriteContract({
              address: boldAI_Presale_Eth_Address,
              abi: boldAI_Presale_Eth_Abi,
              functionName: "BuyWithETH",
              value: webSupply.utils.toWei(get_userValue.toString()),
              account: address,
            });
            const { hash } = await writeContract(request);
            const data = await waitForTransaction({
              hash,
            });

            setTimeout(() => {
              // Swal.fire({
              //   title: "Transaction Successful",
              //   text: "The purchase of BOTIFI tokens has been successfully completed.",
              //   icon: "success",
              //   confirmButtonText: "OK",
              // });

              setModalInfo({
                title: "Transaction Successful",
                text: "The purchase of BOTIFI tokens has been successfully completed.",
                icon: "success",
                confirmButtonText: "OK",
                redirect: true,
              });
              setIsOpen(true);
              const amount = show_value * 0.11;
              writeUserTransaction(address, amount.toFixed(2));
              // toast.success("Transaction Completed");
              setspinner(false);
            }, 4000);
          }
        } else {
          toast.error("Please Enter Amount First");
          setspinner(false);
        }
      } else {
        // Swal.fire({
        //   title: "Error",
        //   text: "Please Connect wallet First",
        //   icon: "error",
        //   confirmButtonText: "OK",
        // });
        setModalInfo({
          title: "Error",
          text: "Please Connect wallet First",
          icon: "error",
          confirmButtonText: "OK",
          redirect: false,
        });
        setIsOpen(true);
        setspinner(false);
      }
    } catch (error) {
      console.log(error);
      setspinner(false);
    }
  };
  const buyBNB = async () => {
    try {
      if (address) {
        if (get_userValue != "") {
          if (get_userValue > parseFloat(data1?.data?.formatted).toFixed(4)) {
            // Swal.fire({
            //   title: "Insufficient balance",
            //   text: "You dont have enough BNB to pay for Transaction",
            //   icon: "error",
            //   confirmButtonText: "OK",
            // });
            toast.error("Insufficient balance");
            setspinner(false);
          } else {
            setspinner(true);

            const { request } = await prepareWriteContract({
              address: boldAI_Presale_BNB_Address,
              abi: boldAI_Presale_BNB_Abi,
              functionName: "BuyWithBNB",
              value: webSupply.utils.toWei(get_userValue.toString()),
              account: address,
            });
            const { hash } = await writeContract(request);
            const data = await waitForTransaction({
              hash,
            });
            setTimeout(() => {
              setspinner(false);
              // Swal.fire({
              //   title: "Transaction Successfull",
              //   text: "Your BOTIFI Purchase is confirmed.",
              //   icon: "success",
              //   confirmButtonText: "OK",
              // });
              setModalInfo({
                title: "Transaction Successfull",
                text: "Your BOTIFI Purchase is confirmed.",
                icon: "success",
                confirmButtonText: "OK",
                redirect: true,
              });
              setIsOpen(true);
              const amount = show_value * 0.11;
              writeUserTransaction(address, amount.toFixed(2));
            }, 4000);
          }
        } else {
          toast.error("Please Enter Amount First");
          setspinner(false);
        }
      } else {
        toast.error("Connect Wallet!");
        setspinner(false);
      }
    } catch (error) {
      console.log(error);
      setspinner(false);
    }
  };

  const buyUSDT = async () => {
    try {
      if (address) {
        if (get_userValue != "") {
          setspinner(true);

          let value = get_userValue * 1000000;
          console.log("value", value);

          const { request } = await prepareWriteContract({
            address: TetherToken_Eth_Address,
            abi: TetherToken_Eth_Abi,
            functionName: "approve",
            args: [boldAI_Presale_Eth_Address, value],
            account: address,
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash,
          });
          setTimeout(() => {
            setspinner(false);
            // Swal.fire({
            //   title: "Approve Successful",
            //   text: "Approval Successful. Please confirm the transaction to complete your BOTIFI purchase.",
            //   icon: "success",
            //   timer: 3000, // Adjust the time in milliseconds (e.g., 3000 = 3 seconds)
            //   showConfirmButton: false, // Hide the "OK" button
            // });
            setModalInfo({
              title: "Approve Successful",
              text: "Approval Successful. Please confirm the transaction to complete your BOTIFI purchase.",
              icon: "success",
              confirmButtonText: "OK",
              redirect: false,
            });
            setIsOpen(true);
            const amount = show_value * 0.11;
            writeUserTransaction(address, amount.toFixed(2));
            // toast.success("Approve SuccessFully");
            Ethereum_Token();
          }, 5000);
        } else {
          toast.error("Please Enter Amount First");
          setspinner(false);
        }
      } else {
        toast.error("Connect Wallet!");
      }
    } catch (error) {
      setspinner(false);

      console.log(error);
    }
  };

  const Ethereum_Token = async () => {
    try {
      let value = get_userValue * 1000000;

      setspinner(true);

      const { request } = await prepareWriteContract({
        address: boldAI_Presale_Eth_Address,
        abi: boldAI_Presale_Eth_Abi,
        functionName: "BuyWithUSDT",
        args: [value],
        account: address,
      });
      const { hash } = await writeContract(request);
      const data = await waitForTransaction({
        hash,
      });

      setTimeout(() => {
        setspinner(false);
        // Swal.fire({
        //   title: "Transaction Successful",
        //   text: "The purchase of BOTIFI tokens has been successfully completed.",
        //   icon: "success",
        //   confirmButtonText: "OK",
        // });
        setModalInfo({
          title: "Transaction Successful",
          text: "The purchase of BOTIFI tokens has been successfully completed.",
          icon: "success",
          confirmButtonText: "OK",
          redirect: true,
        });
        setIsOpen(true);
        // toast.success("Transaction Completed");
        const amount = show_value * 0.11;
        writeUserTransaction(address, amount.toFixed(2));
      }, 4000);
    } catch (error) {
      console.log(error);
    }
  };

  const buyBUSD = async () => {
    try {
      if (address) {
        if (get_userValue != "") {
          if (chain.id == 56 && isActive == 1) {
            setspinner(true);

            let value = webSupply_Binance.utils.toWei(get_userValue.toString());

            const { request } = await prepareWriteContract({
              address: BUSD_Address,
              abi: BUSD_Abi,
              functionName: "approve",
              args: [boldAI_Presale_BNB_Address, value],
              account: address,
            });
            const { hash } = await writeContract(request);
            const data = await waitForTransaction({
              hash,
            });

            setTimeout(() => {
              setspinner(false);
              // Swal.fire({
              //   title: "Approve Successful",
              //   text: "Approval Successful. Please confirm the transaction to complete your BOTIFI purchase.",
              //   icon: "success",
              //   timer: 3000, // Adjust the time in milliseconds (e.g., 3000 = 3 seconds)
              //   showConfirmButton: false, // Hide the "OK" button
              // });
              setModalInfo({
                title: "Approve Successful",
                text: "Approval Successful. Please confirm the transaction to complete your BOTIFI purchase.",
                icon: "success",
                confirmButtonText: "OK",
                redirect: false,
              });
              setIsOpen(true);
              const amount = show_value * 0.11;
              writeUserTransaction(address, amount.toFixed(2));
              // toast.success("Approve SuccessFully");
              BUSD_Buy();
            }, 5000);
          } else if (chain.id == 56 && isActive == 2) {
            setspinner(true);

            let value = webSupply_Binance.utils.toWei(get_userValue.toString());
            const { request } = await prepareWriteContract({
              address: USDT_Address,
              abi: USDT_Abi,
              functionName: "approve",
              args: [boldAI_Presale_BNB_Address, value],
              account: address,
            });
            const { hash } = await writeContract(request);
            const data = await waitForTransaction({
              hash,
            });

            setTimeout(() => {
              setspinner(false);
              // Swal.fire({
              //   title: "Approve Successful",
              //   text: "Approval Successful. Please confirm the transaction to complete your BOTIFI purchase.",
              //   icon: "success",
              //   timer: 3000, // Adjust the time in milliseconds (e.g., 3000 = 3 seconds)
              //   showConfirmButton: false, // Hide the "OK" button
              // });
              setModalInfo({
                title: "Approve Successful",
                text: "Approval Successful. Please confirm the transaction to complete your BOTIFI purchase.",
                icon: "success",
                confirmButtonText: "OK",
                redirect: false,
              });
              setIsOpen(true);
              const amount = show_value * 0.11;
              writeUserTransaction(address, amount.toFixed(2));
              // toast.success("Approve SuccessFully");
              BUSD_Buy();
            }, 5000);
          }
        } else {
          toast.error("Please Enter Amount First");
          setspinner(false);
        }
      } else {
        toast.error("Connect Wallet!");
      }
    } catch (error) {
      setspinner(false);

      console.log(error);
    }
  };

  const BUSD_Buy = async () => {
    try {
      let value = webSupply_Binance.utils.toWei(get_userValue.toString());
      if (chain.id == 56 && isActive == 1) {
        setspinner(true);

        const { request } = await prepareWriteContract({
          address: boldAI_Presale_BNB_Address,
          abi: boldAI_Presale_BNB_Abi,
          functionName: "BuyWithBUSD",
          args: [value],
          account: address,
        });
        const { hash } = await writeContract(request);
        const data = await waitForTransaction({
          hash,
        });

        setTimeout(() => {
          setspinner(false);
          // Swal.fire({
          //   title: "Transaction Successful",
          //   text: "The purchase of BOTIFI tokens has been successfully completed.",
          //   icon: "success",
          //   confirmButtonText: "OK",
          // });
          setModalInfo({
            title: "Transaction Successful",
            text: "The purchase of BOTIFI tokens has been successfully completed.",
            icon: "success",
            confirmButtonText: "OK",
            redirect: true,
          });
          setIsOpen(true);
          // toast.success("Transaction Completed");
        }, 4000);
      } else if (chain.id == 56 && isActive == 2) {
        setspinner(true);

        const { request } = await prepareWriteContract({
          address: boldAI_Presale_BNB_Address,
          abi: boldAI_Presale_BNB_Abi,
          functionName: "BuyWithUSDT",
          args: [value],
          account: address,
        });
        const { hash } = await writeContract(request);
        const data = await waitForTransaction({
          hash,
        });

        setTimeout(() => {
          setspinner(false);
          // Swal.fire({
          //   title: "Transaction Successful",
          //   text: "Your BOTIFI Purchase is confirmed.",
          //   icon: "success",
          //   confirmButtonText: "OK",
          // });
          setModalInfo({
            title: "Transaction Successful",
            text: "The purchase of BOTIFI tokens has been successfully completed.",
            icon: "success",
            confirmButtonText: "OK",
            redirect: true,
          });
          setIsOpen(true);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Completionist = () => {
    return (
      <>
        <div className="text_days fs-5 ">Date of Sale TBA</div>
      </>
    );
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="row justify-content-between mt-3 ml-10">
          <div className="col-3">
            <div className="white_box">
              <p>{days}d</p>
            </div>
          </div>
          <div className="col-3  mt-md-0">
            <div className="white_box">
              <p>{hours}h</p>
            </div>
          </div>
          <div className="col-3  mt-md-0">
            <div className="white_box">
              <p>{minutes}m</p>
            </div>
          </div>
          <div className="col-3  mt-md-0">
            <div className="white_box">
              <p>{seconds}s</p>
            </div>
          </div>
        </div>
      );
    }
  };
  // useEffect(() => {
  //   setModalInfo({
  //     title: "Transaction Successful",
  //     text: "The purchase of BOTIFI tokens has been successfully completed.",
  //     icon: "success",
  //     confirmButtonText: "OK",
  //     redirect: true,
  //   });
  //   setIsOpen(true);
  // }, []);
  return (
    <>
      <ToastModal
        modalInfo={modalInfo}
        closeModal={closeModal}
        isOpen={isOpen}
      />
      <div className="main_landing px-4 pt-[100px] relative">
        <img
          src={ImageNew1}
          className="absolute z-1 w-full opacity-[.3] max-w-[900px] translate-y-[-50%] translate-x-[-80%] top-[50%] left-[50%]"
          alt="image-new"
        />
        <div className="max-w-[1200px] relative z-3 mx-auto">
          <div className="flex flex-wrap justify-center items-center">
            {/* <div className="w-full sm:w-[70%] mb-8 md:w-[48%]">
            <HeroLeft />
          </div> */}
            <div className="w-full sm:w-[70%] mb-8 md:w-[60%] lg:w-[550px]">
              <div className="border border-[#818181ba] p-3 rounded-3xl">
                <div className="">
                  <h5 className="text-white my-3 text-center tracking-wide font-publicSans font-bold text-[22px] uppercase">
                    Presale <span className="gradient-text">Live</span> Stage 2
                  </h5>
                  <div className="flex justify-between">
                    <span className="text-[12px] text-lightGrey font-publicSans">
                      Raised
                    </span>
                    <span className="text-[12px] text-lightGrey font-publicSans">
                      Total Amount
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[18px] text-lightGrey font-publicSans">
                      $<b>{amount}</b>
                    </span>
                    <span className="text-[18px] text-lightGrey font-publicSans">
                      $1,401,575
                    </span>
                  </div>
                  <div className="!h-[20px] overflow-hidden progress_bar">
                    <div
                      className="bvvvv"
                      style={{
                        width: (amount / 1401575) * 100 + "%",
                      }}
                    ></div>
                  </div>
                  <h5 className="text-lightGrey my-2 text-center font-publicSans font-medium text-[16px] uppercase">
                    untill sold out
                  </h5>
                  {/* <p className="uppercase text-center text-[18px] font-bold text-primary font-monospace">
                  Raised: ${contractbalance + addExtraToken * 0.09} / $1,000,000
                </p> */}
                  <div className="font-publicSans flex flex-wrap justify-between">
                    <div className="flex sm:w-[24%] w-[48%] mb-3 border completed-stage border-primary rounded-lg px-1 py-2  text-white items-center  flex-col space-y-1">
                      <span className="text-[14px] text-black font-bold">
                        Stage 1
                      </span>
                      <b className="text-[12px] text-black font-bold">
                        $0.09 = 1 BOTIFI
                      </b>
                    </div>
                    <div className="flex sm:w-[24%] w-[48%] mb-3 border active-stage border-[#efefef] rounded-lg px-1 py-2  text-white items-center  flex-col space-y-1">
                      <span className="text-[14px] text-black font-bold">
                        Stage 2
                      </span>
                      <b className="text-[12px] text-black font-bold">
                        $0.11 = 1 BOTIFI
                      </b>
                    </div>
                    <div className="flex sm:w-[24%] w-[48%] mb-3 border border-[#efefef] rounded-lg px-1 py-2  text-white items-center  flex-col space-y-1">
                      <span className="text-[14px]">Stage 3</span>
                      <b className="text-[12px]"> $0.14 = 1 BOTIFI</b>
                    </div>{" "}
                    <div className="flex sm:w-[24%] w-[48%] mb-3 border border-[#efefef] rounded-lg px-1 py-2  text-white items-center  flex-col space-y-1">
                      <span className="text-[14px]">Stage 4</span>
                      <b className="text-[12px]"> $0.17 = 1 BOTIFI</b>
                    </div>
                  </div>

                  <p className="one_how">1 BOTIFI = $0.11</p>
                  <div className="token_boxes font-publicSans py-3 flex justify-center gap-3">
                    <div className="flex">
                      <div
                        className={`eth flex justify-center space-x-2 items-center ${
                          isActive == 0 ? "border" : ""
                        }`}
                        onClick={() => setisActive(0)}
                      >
                        {chain?.id == 56 ? (
                          <>
                            <img className="token_logo" src={bnb} alt="" />
                          </>
                        ) : (
                          <>
                            <img className="token_logo" src={eth} alt="" />
                          </>
                        )}
                        <p> {chain?.id == 56 ? <>BNB</> : <>ETH</>}</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div
                        className={`eth flex justify-center space-x-2 items-center ${
                          isActive == 1 ? "border" : ""
                        }`}
                        onClick={() => setisActive(1)}
                      >
                        {chain?.id == 56 ? (
                          <>
                            <img className="token_logo" src={busd} alt="" />
                          </>
                        ) : (
                          <>
                            <img className="token_logo" src={usdt} alt="" />
                          </>
                        )}
                        <p>{chain?.id == 56 ? <>BUSD</> : <>USDT</>}</p>
                      </div>
                    </div>
                    {chain?.id == 56 && (
                      <>
                        <div className="d-flex">
                          <div
                            className={`eth flex justify-center space-x-2 items-center ${
                              isActive == 2 ? "border" : ""
                            }`}
                            onClick={() => setisActive(2)}
                          >
                            {chain?.id == 56 ? (
                              <>
                                <img className="token_logo" src={usdt} alt="" />
                              </>
                            ) : (
                              <></>
                            )}
                            <p>USDT</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  {/* <div className="flex mt-3 justify-center space-x-3">
                  <div
                    className={`eth flex justify-center space-x-2 items-center ${
                      activeChain == "ETH" ? "border" : ""
                    }`}
                    onClick={() => setActiveChain("ETH")}
                  >
                    <img className="token_logo" src={eth} alt="" />

                    <p> ETH</p>
                  </div>

                  <div
                    className={`eth flex justify-center space-x-2 items-center ${
                      activeChain == "BNB" ? "border" : ""
                    }`}
                    onClick={() => setActiveChain("BNB")}
                  >
                    <img className="token_logo" src={bnb} alt="" />

                    <p> BNB</p>
                  </div>

                  <div
                    className={`eth flex justify-center space-x-2 items-center ${
                      activeChain == "BUSD" ? "border" : ""
                    }`}
                    onClick={() => setActiveChain("BUSD")}
                  >
                    <img className="token_logo" src={busd} alt="" />

                    <p>BUSD</p>
                  </div>

                  <div
                    className={`eth flex justify-center space-x-2 items-center ${
                      activeChain == "USDT" ? "border" : ""
                    }`}
                    onClick={() => setActiveChain("USDT")}
                  >
                    <img className="token_logo" src={usdt} alt="" />

                    <p>USDT</p>
                  </div>
                </div> */}
                  <div className="flex flex-col">
                    <p className="eth_bla uppercase">
                      {" "}
                      {isActive == 0
                        ? chain?.id == 56
                          ? "BNB "
                          : "ETH "
                        : isActive == 1
                        ? chain?.id == 56
                          ? "BUSD "
                          : "USDT "
                        : "USDT "}
                      balance :{" "}
                      <span className="fs-5 font-bold text-primary text-[20px]">
                        {isActive == 0 ? (
                          <>
                            {data1?.data?.formatted == undefined
                              ? 0
                              : parseFloat(data1?.data?.formatted).toFixed(4)}
                          </>
                        ) : (
                          <>{parseFloat(Token_Balance).toFixed(4)} </>
                        )}
                      </span>
                    </p>
                    <div className="flex font-publicSans mt-4 justify-between">
                      <div className="w-[49.5%] sm:w-[47%] mb-5">
                        <div className="flex mb-1 new_conver justify-between">
                          <p className="text-[12px] text-lightGrey">you pay </p>
                          <p
                            className="text-[12px] text-lightGrey cursor-pointer"
                            onClick={() =>
                              setget_userValue(
                                isActive == 0
                                  ? parseFloat(data1?.data?.formatted).toFixed(
                                      4
                                    ) - Number(0.001)
                                  : Token_Balance
                              )
                            }
                          >
                            Max
                          </p>
                        </div>
                        <div className="covert_input flex  ">
                          <input
                            type="number"
                            className="input_cober"
                            name=""
                            id=""
                            placeholder="0.00"
                            value={get_userValue}
                            onChange={(e) => setget_userValue(e.target.value)}
                          />
                          {/* {activeChain === "BNB" && (
                          <img className="token_logo" src={bnb} alt="" />
                        )}
                        {activeChain === "ETH" && (
                          <img className="token_logo" src={eth} alt="" />
                        )}
                        {activeChain === "BUSD" && (
                          <img className="token_logo" src={busd} alt="" />
                        )}
                        {activeChain === "USDT" && (
                          <img className="token_logo" src={usdt} alt="" />
                        )} */}
                          {isActive == 0 ? (
                            <>
                              {chain?.id == 56 ? (
                                <>
                                  <img
                                    className="token_logo"
                                    src={bnb}
                                    alt=""
                                  />
                                </>
                              ) : (
                                <>
                                  <img
                                    className="token_logo"
                                    src={eth}
                                    alt=""
                                  />
                                </>
                              )}
                            </>
                          ) : isActive == 1 ? (
                            <>
                              {chain?.id == 56 ? (
                                <>
                                  <img
                                    className="token_logo"
                                    src={busd}
                                    alt=""
                                  />
                                </>
                              ) : (
                                <>
                                  <img
                                    className="token_logo"
                                    src={usdt}
                                    alt=""
                                  />
                                </>
                              )}
                            </>
                          ) : (
                            <>
                              <img className="token_logo" src={usdt} alt="" />
                            </>
                          )}
                        </div>
                      </div>
                      <div className="w-[49.5%] sm:w-[47%] mb-5">
                        <div className="flex mb-1 new_conver justify-between">
                          <p className="text-[12px] text-lightGrey">
                            Amount Of Tokens
                          </p>
                        </div>
                        <div className="covert_input flex  ">
                          <input
                            type="number"
                            className="input_cober"
                            name=""
                            id=""
                            value={show_value}
                          />
                          <img className="" src={moon} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-2 py-4">
                    <button
                      className="primary-btn-style w-full"
                      onClick={() =>
                        isActive == 0
                          ? chain?.id == 56
                            ? buyBNB()
                            : buyEth()
                          : isActive == 1
                          ? chain?.id == 56
                            ? buyBUSD()
                            : buyUSDT()
                          : buyBUSD()
                      }
                    >
                      {" "}
                      {spinner ? "Loading..." : "Buy Now"}
                    </button>

                    <button
                      className="primary-btn-style mt-3 w-full"
                      onClick={() =>
                        chain?.id == 56
                          ? switchNetwork?.(chains[1]?.id)
                          : switchNetwork?.(chains[0]?.id)
                      }
                    >
                      {/* {chain?.id != 56 ? "Buy with BNB" : "Buy with ETH"}{" "} */}
                      {chain?.id != 56
                        ? "Switch to BSC"
                        : "Switch to ETH Chain"}{" "}
                    </button>
                  </div>

                  <div className="mx-auto flex  justify-center">
                    <button
                      className="primary-btn-style w-full px-8"
                      onClick={() =>
                        address
                          ? chain?.id == chains[0]?.id
                            ? open()
                            : switchNetwork?.(chains[0]?.id)
                          : open()
                      }
                    >
                      {address ? (
                        chain?.id == chains[0]?.id ||
                        chain?.id == chains[1]?.id ? (
                          address ? (
                            <>
                              {`${address.substring(
                                0,
                                6
                              )}...${address.substring(
                                address.length - 4
                              )}`}{" "}
                            </>
                          ) : (
                            "connect wallet"
                          )
                        ) : (
                          "Switch Network"
                        )
                      ) : (
                        "Connect Wallet"
                      )}
                    </button>
                  </div>

                  <div className="mx-auto flex mt-3 justify-center">
                    <HowToBuyModal />
                  </div>
                  <div className="flex my-2 justify-center">
                    {" "}
                    <Link
                      to="https://tawk.to/chat/65074163b1aaa13b7a775ae4/1hai5es2g"
                      target="_blank"
                      className="flex  rounded-xl px-3 py-1 space-x-2 items-center"
                    >
                      <HelpIcon />{" "}
                      <span className="font-publicSans underline text-white font-semibold text-[14px]">
                        24/7 LIve Help
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
