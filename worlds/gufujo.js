// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = [
        "newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"
    ];

    Constants.UserBehaviorDirectory = "behaviors/gufujo";
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
                translation: [-11.670, 0, 9.700],
                rotation: [0,-0.8436080934199487,0,0.5369593883305882],
                spawn: "default",
            }
        },
        {
            card: {
                name:"world model",
                type: "3d",
                dataLocation: "./assets/3D/gufujo.glb.zip",
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
                translation: [2.7029612193159642,1.2505042205453514,10.800263931444027],
                behaviorModules: ["GoCroquetPortalButton"],
                type: "object",
            }
        },
    ];
}
