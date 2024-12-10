"use client";
import {Modal,ModalContent,ModalHeader,ModalBody,Button, useDisclosure} from "@nextui-org/react";
import { useRef} from "react";
import { toast } from "react-toastify";
import Webcam from "react-webcam";
import { signIn } from "next-auth/react";
  
export default function CamModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const webcamRef = useRef<Webcam>(null);


    const DetectUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (webcamRef.current) {
            const screenshot = webcamRef.current.getScreenshot();
          
        if (!screenshot) {
            toast.error("Image is required! fjjyhfh ");
            return;
        }
        console.log(screenshot);
        signIn("credentials", { image: "screenshot" ,redirect: false }).then(() => {
            toast.success("User detected successfully!");
        }).catch((error) => {
            console.error("Error detecting user:", error);
            toast.error("Error detecting user. Please try again.");
        })
    }
    };

  
    return (
        <>  
            <Button onClick={onOpen}   className="font-semibold text-lg py-8 px-14  bg-[#004838] text-[#e2fb6c] shadow-lg rounded-2xl">Start</Button>
            <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 font-semibold text-dark_green">Detect the user</ModalHeader>
                        <ModalBody>
                            <div className="pb-5">
                                <form onSubmit={(e)=>{DetectUser(e)}} className="space-y-4">
                                    <Webcam
                                    audio={false}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    width={800}
                                    height={500}
                                    className="rounded-lg"
                                    />
                                    <div className="w-full flex gap-5 justify-end ">
                                        <Button  color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button type="submit" color="primary" className="bg-dark_green text-yellow" >
                                            Start
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </ModalBody>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    );
}