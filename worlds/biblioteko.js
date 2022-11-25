// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = [
        "newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"
    ];

    Constants.UserBehaviorDirectory = "behaviors/biblioteko";
    Constants.UserBehaviorModules = [
        "lights.js", "openPortal.js"
    ];

    const frameColor = 0x888888;

    Constants.DefaultCards = [
        {
            card: {
                name: "entrance",
                type: "object",
                // same position and orientation as in openPortal.js
                translation: [2.826, 0, 4.345],
                rotation: [0,-0.3767801590608589,0,-0.9263027106394938],
                spawn: "default",
            }
        },
        {
            card: {
                name:"world model",
                type: "3d",
                dataLocation: "./assets/3D/biblioteko.glb.zip",
                dataScale:[1,1,1],
                singleSided: true,
                shadow: true,
                layers: ["walk"],
                translation:[0, -1.7, 0],

                placeholder: true,
                placeholderSize: [100, 0.01, 100],
                placeholderColor: 0xcccccc,
                placeholderOffset: [0, -1.7, 0],
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "./assets/sky/shanghai_riverside_2k.exr",
                dataType: "exr",
            }
        },
        {
            card: {
                name: "portal button",
                translation: [-3.920201569294251,-0.17115430685939348,-0.19610941454184205],
                behaviorModules: ["OpenGufujoPortalButton"],
                type: "object",
            }
        },
    ];
}
