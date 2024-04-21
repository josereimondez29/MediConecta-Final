import React from "react";

const getIconProps = (variant) => {
    switch (variant) {
        case "camera":
            return {
                alt: "camera",
                activeBgColor: "#2F66F71A",
                bgColor: "#F26B4D",
                iconSource: "/camera.svg",
                offIcon: "/cam-off.svg",
            };
        case "microphone":
            return {
                alt: "microphone",
                activeBgColor: "#03AB191A",
                bgColor: "#F26B4D",
                iconSource: "/microphone.svg",
                offIcon: "/mic-off.svg",
            };
        case "share":
            return {
                alt: "share",
                activeBgColor: "#F26B4D",
                bgColor: "#FDC7451A",
                iconSource: "/share.svg",
                offIcon: "/share.svg",
            };
        default:
            return {
                alt: "camera",
                activeBgColor: "#F26B4D",
                bgColor: "#2F66F71A",
                iconSource: "/camera.svg",
                offIcon: "/cam-off.svg",
            };
    }
};

const IconButton = ({ variant, isActive = true, onClick }) => {
    const { alt, activeBgColor, bgColor, iconSource, offIcon } = getIconProps(variant);

    return (
        <div className="icon-button-wrapper">
            <button
                className="icon-button"
                onClick={onClick}
                style={{
                    backgroundColor: isActive ? activeBgColor : bgColor,
                }}
            >
                <img src={isActive ? iconSource : offIcon} alt={alt} />
            </button>
        </div>
    );
};

export default IconButton;


