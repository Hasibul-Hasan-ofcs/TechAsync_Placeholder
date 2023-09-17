import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { MainContext } from "../../../context/MainContextProvider";

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
      >
        <DialogHeader className="text-center">
          Its a simple dialog.
        </DialogHeader>
        <DialogBody className="text-center">
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="gray" onClick={handleClose}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default UnderDevelopmentModal;
