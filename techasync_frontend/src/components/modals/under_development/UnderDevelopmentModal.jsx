import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { MainContext } from "../../../context/MainContextProvider";
import CountDownTimer from "./../../time_counter/CountDownTimer";

const UnderDevelopmentModal = () => {
  const [open, setOpen] = useState(false);

  const { welcomeLoader, setWelcomeLoader } = useContext(MainContext);

  useEffect(() => {
    if (!welcomeLoader)
      setTimeout(() => {
        setOpen(true);
      }, 1000);
  }, [welcomeLoader]);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Dialog
        open={open}
        handler={handleClose}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size="lg"
      >
        <DialogHeader>
          <div className="flex justify-between items-center w-full">
            <span className="font-exo">Under Development Notice!</span>

            <img src="/svg/settings.svg" className="h-6 w-6" />
          </div>
        </DialogHeader>
        <DialogBody divider className=" pt-4 pb-16">
          <CountDownTimer></CountDownTimer>

          <p className="text-center font-poppins text-gray-800 font-semibold">
            Something amazing is brewing at our company. We are integrating
            several awesome features with this web application. These features
            will be live as soon as they are integrated. We apologize for any
            inconvenience this may cause. We are working diligently to bring you
            an improved online experience.
          </p>
          <div className="pt-6">
            <p className="text-center text-xl font-semibold">By</p>
            <p className="text-center">
              Team <span className="font-dancing text-xl">TechAsync</span>
            </p>
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-center">
          <Button
            variant="gradient"
            color="gray"
            className="flex-grow"
            onClick={handleClose}
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default UnderDevelopmentModal;
