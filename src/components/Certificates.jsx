
import React, { useState } from "react";
import {
    IoIosArrowDropleft,
    IoIosArrowDropright,
} from "react-icons/io";
import { IoMdDownload } from "react-icons/io";

const Certificates = () => {
    const certificates = [
        {
            title: "Smart Interviews",
            description: [
                "Completed comprehensive Data Structures & Algorithms training through Smart Interviews.",
                "Strengthened problem-solving skills using Java and algorithmic techniques.",
                "Practiced arrays, strings, linked lists, trees, graphs, recursion, and other core DSA concepts.",
                "Improved algorithmic thinking by solving coding problems and optimizing solutions.",
                "Developed stronger coding and interview preparation skills through regular practice.",
            ],
            images: ["/certificate-1.pdf"],
        },
        {
            title: "JavaScript",
            description: [
                "Completed comprehensive training in JavaScript fundamentals and modern concepts.",
                "Gained hands-on knowledge of variables, functions, arrays, objects, and ES6 features.",
                "Worked with DOM manipulation, events, and interactive web page development.",
                "Strengthened understanding of asynchronous JavaScript, promises, and API handling.",
                "Applied JavaScript concepts to build dynamic and user-friendly web applications.",
            ],
            images: ["/certificate-2.png"],
        },
    ];

    const [certificateIndex, setCertificateIndex] = useState(0);

    const nextCertificate = () => {
        setCertificateIndex(
            (certificateIndex + 1) % certificates.length
        );
    };

    const prevCertificate = () => {
        setCertificateIndex(
            (certificateIndex - 1 + certificates.length) %
                certificates.length
        );
    };

    const certificate = certificates[certificateIndex];

    return (
        <>
            <section
                name="certifications"
                className="flex min-h-screen w-full flex-col justify-center px-5 py-24 md:px-12"
            >
                {/* Heading */}
                <h1 className="mt-10 text-center text-4xl font-bold text-green-700">
                    Certificates
                </h1>

                <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
                    A collection of certificates that reflect my dedication
                    to continuous learning, professional development, and
                    technical skill development.
                </p>

                {/* Top Navigation */}
                <div className="mt-8 flex items-center justify-center gap-6">
                    <button onClick={prevCertificate}>
                        <IoIosArrowDropleft className="cursor-pointer text-3xl md:text-5xl" />
                    </button>

                    <h2 className="text-sm font-bold md:text-2xl">
                        Certificate {certificateIndex + 1} /{" "}
                        {certificates.length} :{" "}
                        <span className="rounded-2xl px-3 text-sm text-orange-600 md:text-2xl">
                            {certificate.title}
                        </span>
                    </h2>

                    <button onClick={nextCertificate}>
                        <IoIosArrowDropright className="cursor-pointer text-3xl md:text-5xl" />
                    </button>
                </div>

                {/* Certificate Content */}
                <div className="mx-auto mt-10 w-full max-w-4xl rounded-2xl border border-gray-300 bg-white p-4 shadow-2xl md:p-6">
                    <div className="grid items-center gap-6 md:grid-cols-[0.9fr_1.1fr]">

                        {/* Certificate Details */}
                        <div className="text-center md:text-left">

                            <h1 className="mx-auto mt-10 block w-fit rounded-xl px-3 py-1 text-2xl font-bold">
                                {certificate.title}
                            </h1>

                            {/* Points */}
                            <ul className="mt-5 list-disc space-y-3 pl-6 text-left text-base text-gray-700 md:text-lg">
                                {certificate.description.map(
                                    (point, index) => (
                                        <li key={index}>
                                            {point}
                                        </li>
                                    )
                                )}
                            </ul>

                            {/* Download Button */}
                            <div className="mt-6 flex justify-center md:justify-start">
                                <a
                                    href={certificate.images[0]}
                                    download
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    <IoMdDownload className="text-xl" />
                                    <span>
                                        Download Certificate
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* Certificate Preview */}
                        <div className="flex min-h-64 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-3">

                            {certificate.images[0].endsWith(".pdf") ? (
                                <iframe
                                    src={certificate.images[0]}
                                    title={`${certificate.title} certificate preview`}
                                    className="h-72 w-full rounded-lg"
                                />
                            ) : (
                                <img
                                    src={certificate.images[0]}
                                    alt={`${certificate.title} certificate`}
                                    className="max-h-72 w-full rounded-lg object-contain"
                                />
                            )}

                        </div>
                    </div>
                </div>
            </section>

            <hr />
        </>
    );
};

export default Certificates;

