// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = [
        "newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"
    ];

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js", "text3D.js", "urlLink.js", "openPortal.js"
    ];

    const frameColor = 0x888888;

    Constants.DefaultCards = [
        {
            card: {
                name: "entrance",
                type: "object",
                // same position and orientation as in openPortal.js
                translation: [-13.25, 0, 13.47],
                rotation: [0,-0.31503132267907424,0,0.9490812745656048],
                spawn: "default",
            }
        },
        {
            card: {
                name:"world model",
                type: "3d",
                dataLocation: "./assets/3D/artgalerio.glb.zip",
                dataScale:[0.2,0.2,0.2],
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
                name: "zamenhof card",
                translation: [-10.5, 12, -13.5],
                //rotation: [0, Math.PI / 2, 0],
                layers: ["pointer"],
                type: "3d",
                dataLocation: "./assets/3D/zamenhof.glb.zip",
                dataScale:[1,1,1],
                modelType: "glb",
                shadow: true,
                singleSided: true,
            }
        },
        {
            card: {
                name: "Bonvenon al la Kiberspaco",
                text: "kiberspaco.com",
                color: 0x1E8449,
                frameColor: 0x58D68D,
                weight: 'bold',
                font: "helvetiker",
                fullBright: true,
                bevelEnabled: false,
                translation: [-12.62974370953798,-1.5386052464268003,8.561335023062723],
                rotation: [0.00005337885794301923,-0.09026131891664446,0.0057166051178177656,0.9959017079431345],
                scale: [1, 1, 1],
                behaviorModules: ["Text3D"],
                shadow: true,
            }
        },
        {
            card: {
                name: "image card",
                translation: [-6.195129232878324,0.6657408882766496,9.057055714099604],
                rotation: [0, -Math.PI / 2, 0],
                scale: [1.6326769951289246, 1.6326769951289246, 1.6326769951289246],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/meta.jpg",
                cardURL: "https://www.oculus.com/horizon-worlds/",
                behaviorModules: ["URLLink"],
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xbbbbbb,
                cornerRadius: 0.02,
                shadow: true,
            }
        },
        {
            card: {
                name: "image card",
                translation: [-6.0881353116604275,0.6573024280642026,5.837494584042409],
                rotation: [0.0006896385632877734,0.7162364858841654,0.006717563268038547,-0.6978249744962512],
                scale: [2.2110046597000985, 2.2110046597000985, 2.2110046597000985],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/secondlife.jpg",
                cardURL: "https://secondlife.com/",
                behaviorModules: ["URLLink"],
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xbbbbbb,
                cornerRadius: 0.02,
                shadow: true,
            }
        },
        {
            card: {
                name: "image card",
                translation: [-6.181956948369729,0.2955828375898555,-7.488115491774694],
                rotation: [0,-0.6790385932163815,0,0.7341025738428641],
                scale: [3.4640991272402513, 3.4640991272402513, 3.4640991272402513],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/engelbart.jpg",
                cardURL: "https://eo.wikipedia.org/wiki/Douglas_Engelbart",
                behaviorModules: ["URLLink"],
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xbbbbbb,
                cornerRadius: 0.02,
                shadow: true,
            }
        },
        {
            card: {
                name: "portal button",
                translation: [-10.81629759288346,1.5781371821191166,-14.710318234147532],
                behaviorModules: ["OpenBibliotekoPortalButton"],
                type: "object",
            }
        },
        {
            card: {
                name: "text editor",
                className: "TextFieldActor",
                translation: [-13.086797873192362,-0.1513690345645784,8.035280996535503],
                rotation: [0, 0, 0, 1],
                depth: 0.05,
                type: "text",
                runs: [{text: "\nBonvenon al la Kiberspaco!\n"}],
                margins: {left: 20, top: 20, right: 20, bottom: 20},
                backgroundColor: 0xf4e056,
                color: 0x000000,
                //color: 0xf4e056,
                frameColor: frameColor,
                width: 2,
                height: 2,
                textScale: 0.002,
                shadow: true,
            }
        },
    ];
}
