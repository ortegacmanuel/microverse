// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

import {filterDomEventsOn, closeAllDialogs, hideShellControls} from "./worldMenu.js";

export function startHelpMenu() {
    closeAllDialogs();
    createHelpMenu();
    hideShellControls();
}

function createHelpMenu() {
    let help = `
    <div id="helpDialog" class="dialogPanel no-select">
    <button id="close-button" type="button" class="btn btn-danger btn-x topright">x</button>
        <div id="share-container" class="content-container">
            <div id="help-title" class="panel-title">Helpo</div>
            <div id="table-wrapper">
                <div id="table-scroll" id="scrollbar">
                    <table class="help-table">
                        <tr class="help-row">
                            <td>
                                <p class="table-head">Navigado</p>
                                <p class="table-desc">Moviĝu tra la mondo uzante la stirstangon, aŭ WASD klavojn.</p>
                            </td>
                            <td class="icon-column">
                                <div class="icons">
                                    <div class="help-pane-icon move-icon"></div>
                                    <div class="help-pane-icon wasd-icon"></div>
                                </div>
                            </td>
                        </tr>
                        <tr class="help-row">
                            <td>
                                <p class="table-head">Vidi</p>
                                <p class="table-desc">Alklaku kaj ŝovu por ŝanĝi la vido-pozicion.</p>
                            </td>
                        <td class="icon-column">
                            <div class="icons"><div class="help-pane-icon look-icon"></div>
                        </td>
                    </tr>
                    <tr class="help-row">
                        <td>
                            <p class="table-head">Manipuli</p>
                            <p class="table-desc">Premtenu la (Ctrl) stirklavon kaj samtempe alklaku objekton por malfermi kaj elekti la "gizmo"-ilon kiun vi volas uzi. La bildsimbolo de plurpanela ilo estas butono por malfermi la ilon por vidi la ecojn de la alklakita objekto.</p>
                        </td>
                        <td class="icon-column">
                            <div class="icons">
                                <div class="help-pane-icon ctrlclick-icon"></div>
                            </div>
                        </td>
                    </tr>
                    <tr class="help-row">
                        <td>
                            <p class="table-head">Plenkranigo</p>
                            <p class="table-desc">Plenekranigu vian retumilon.</p>
                        </td>
                        <td class="icon-column"><i class="fas fa-solid fa-expand icons"></i></td>
                    </tr>
                    <tr class="help-row">
                        <td>
                            <p class="table-head">Hejmo</p>
                            <p class="table-desc">Alklaku tiun ĉi bildsimbolon por reveni al la loko kie vi aperis en la mondo kiam vi eniris.</p>
                        </td>
                        <td class="icon-column"><i class="fas fa-solid fa-house-user icons"></i></td>
                    </tr>
                    <tr class="help-row">
                        <td>
                            <p class="table-head">Grupigi</p>
                            <p class="table-desc">Montas kiom da uzantoj troviĝas en la mondo. Alklaku por grupigi ĉiujn uzantojn ĉirkaŭ vi.</p>
                        </td>
                        <td class="icon-column"><i class="fas fa-solid fa-users icons"></i></td>
                    </tr>
                    <tr class="help-row">
                        <td>
                            <p class="table-head">Enporti</p>
                            <p class="table-desc">Enportu dosierojn el via komputilo en la virtualan mondon. Laŭ via plaĉo, ŝovu kaj demetu aŭ alklaku la "enporti"-menueron.</p>
                        </td>
                        <td class="icon-column">
                            <div class="icons">
                                <div class="help-pane-icon import-icon help-menu-icon"></div>
                            </div>
                        </td>
                     </tr>
                     <tr class="help-row">
                         <td>
                             <p class="table-head">Konekti</p>
                             <p class="table-desc">Alklaku por konekti vian tekstoredaktilon al la behavior-dosieroj.</p>
                         </td>
                         <td class="icon-column">
                             <div class="icons">
                                 <div class="help-pane-icon connect-icon help-menu-icon"</div>
                             </div>
                         </td>
                     </tr>
                     <tr class="help-row">
                         <td>
                             <p class="table-head">Kundividi</p>
                             <p class="table-desc">Konservu vian metaverson kiel .vrse-dosieron por kundivido aŭ uzu la QR-kodon por kundividi la seancon kun aliaj.</p>
                         </td>
                         <td class="icon-column">
                             <div class="icons">
                                 <div class="help-pane-icon share-icon help-menu-icon"></div>
                             </div>
                         </td>
                     </tr>
                     <tr class="help-row">
                         <td>
                             <p class="table-head">Agordoj</p>
                             <p class="table-desc">Ŝanĝu vian kromnomon, elektu vian avataron aŭ algluu vian propran avataron.</p>
                         </td>
                         <td class="icon-column">
                             <div class="icons">
                                 <div class="help-pane-icon settings-icon help-menu-icon"></div>
                             </div>
                         </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>`.trim();

    let div = document.createElement("div");
    div.innerHTML = help;

    let helpMenu = div.querySelector("#helpDialog");
    let closeButton = helpMenu.querySelector("#close-button");

    filterDomEventsOn(helpMenu);

    closeButton.onclick = () => closeAllDialogs();

    document.body.appendChild(helpMenu);
}
