
import React, { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";



const Certificates = () => {
    const certificates = [{
        title: "Smart Interviews",
        description: ["Successfully completed problem-solving and Data Structures & Algorithms training through Smart Interviews, strengthening coding skills, algorithmic thinking, and interview preparation."],
        images: ["/certificate-1.pdf"]
    },
    {
        title: "JavaScript",
        description: ["Completed comprehensive JavaScript training, mastering core concepts, advanced features, and best practices for modern web development."],
        images: ["/certificate-2.png"]
    }
    ]
    const [certificateIndex, setCertificateIndex] = useState(0);
    const nextCertificate = () => {
        setCertificateIndex((certificateIndex + 1) % certificates.length);
    };

    const prevCertificate = () => {
        setCertificateIndex(
            (certificateIndex - 1 + certificates.length) % certificates.length
        );
    };
    const certificate = certificates[certificateIndex];

    return (
        <>
        <div name="certifications">
            <h1 className="text-4xl font-bold text-green-700 mt-10 text-center">
                Certificates
            </h1>
            <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto">
                A collection of certificates that reflect my dedication to continuous learning, professional development, and expertise in various technologies and domains.
            </p>
            {/* Top Navigation */}
            <div className="flex justify-center items-center gap-6 mt-8">
                <button onClick={prevCertificate}>
                    <IoIosArrowDropleft className="text-3xl md:text-5xl cursor-pointer" />
                </button>

                <h2 className=" text-sm md:text-2xl font-bold">
                    Certificate {certificateIndex + 1} / {certificates.length} : <span className="text-sm text-blue-600 md:text-2xl border border-yellow-500 px-3 rounded-2xl ">{certificate.title}</span>
                </h2>

                <button onClick={nextCertificate}>
                    <IoIosArrowDropright className="text-3xl md:text-5xl cursor-pointer" />
                </button>
            </div>

            {/* Certificate Content */}
<div className="mt-10 w-[90%] md:w-[40%] mx-auto border border-gray-300 bg-white rounded-2xl p-4 shadow-2xl">                
    <div className="text-center">
                    <h1 className="text-xl font-bold  mt-10 border border-amber-500 inline-block px-2 py-1 rounded-xl">{certificate.title}</h1>
                </div>
                <p className="text-lg text-gray-700 p-4 whitespace-break-spaces">{certificate.description}</p>
                <div className="flex flex-start gap-4 mt-6 ml-4">

                    <button className="bg-blue-500 text-white px-2 md:px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                        <a href={certificate.images} target="_blank">
                            View Certificate
                        </a>
                    </button>

                    <button className="bg-blue-500 text-white px-2 md:px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                        <a
                            href={certificate.images}
                            download
                            className="flex items-center gap-2"
                        >
                            <IoMdDownload className="text-xl" />
                            <span>Certificate</span>
                        </a>
                    </button>
                </div>
            </div>
            </div>
            <br>
            </br>
            <hr/>
        </>
    )

}
export default Certificates;