"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";
import Image from "next/image";

const StickyButtonGroup = () => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="relative">
            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-10">
                <div
                    className="relative group"
                    onMouseEnter={() => setHovered(1)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <button className="bg-green-700 text-white p-4 rounded-full shadow-lg focus:outline-none">
                        <Phone className="w-3 h-3" />
                    </button>
                    {hovered === 1 && (
                        <div className="absolute left-0 transform -translate-x-full -top-10 bg-white text-black p-4 rounded-md shadow-md text-1xl w-72">
                            <p>Telephone Customer Service</p>
                            <hr/>
                            <p>Service Time: 9:00-17:00</p>
                            <p>服务时间: 905-604-2915</p>
                        </div>
                    )}
                </div>

                <div
                    className="relative group"
                    onMouseEnter={() => setHovered(2)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <button className="bg-green-700 text-white p-4 rounded-full shadow-lg focus:outline-none">
                        <MessageCircle className="w-3 h-3" />
                    </button>
                    {hovered === 2 && (
                        <div className="absolute left-0 transform -translate-x-full -top-10 bg-white text-black p-2 rounded-md shadow-md text-1xl w-56">
                            <p>Public Webchat Number</p>
                            <hr/>
                            <Image 
                            src="/qr.jpg"
                            width={300}
                            height={200}
                            alt="WeChat QR Code"
                            className="p-2"
                            />
                        </div>
                    )}
                </div>

                <div
                    className="relative group"
                    onMouseEnter={() => setHovered(3)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <button className="bg-green-700 text-white p-4 rounded-full shadow-lg focus:outline-none">
                        <Mail className="w-3 h-3" />
                    </button>
                    {hovered === 3 && (
                        <div className="absolute left-0 transform -translate-x-full -top-10 bg-white text-black p-2 rounded-md shadow-md text-1xl w-64">
                            <p>Mail</p>
                            <hr/>
                            <p className="text-green-500">online@meritedu.ca</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StickyButtonGroup;
