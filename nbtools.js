if (localStorage.getItem("nbNewUserCheck") === null) {
    sessionStorage.setItem("nbNewUserSession", true);
    localStorage.setItem("nbNewUserCheck", true);
};

window.nbtools = (e, secondParam, thirdParam, fourthParam, fifthParam) => {
    typeof (e) == "string" ? e = e.replace(/\s/g, '') : null;

    switch (e) {
        case "returningUser":
            if (secondParam == undefined) {
                return (() => {
                    return sessionStorage.getItem("nbNewUserSession") ? false : true;
                })();
            } else {
                return (() => {
                    if (localStorage.getItem(`nbNewUserCheck${secondParam}`) === null) {
                        sessionStorage.setItem(`nbNewUserSession${secondParam}`, true);
                        localStorage.setItem(`nbNewUserCheck${secondParam}`, true);
                    };
                    return sessionStorage.getItem(`nbNewUserSession${secondParam}`) ? false : true;
                })();
            };
        case "newUser":
            if (secondParam == undefined) {
                return (() => {
                    return sessionStorage.getItem("nbNewUserSession") ? true : false;
                })();
            } else {
                return (() => {
                    if (localStorage.getItem(`nbNewUserCheck${secondParam}`) === null) {
                        sessionStorage.setItem(`nbNewUserSession${secondParam}`, true);
                        localStorage.setItem(`nbNewUserCheck${secondParam}`, true);
                    };
                    return sessionStorage.getItem(`nbNewUserSession${secondParam}`) ? true : false;
                })();
            };
        case "mobileCheck":
            return (() => {
                if (secondParam) {
                    if (secondParam == "ios") {
                        return (() => {
                            return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                        })();
                    } else if (secondParam == "android") {
                        return (() => {
                            return /Android/i.test(navigator.userAgent);
                        })();
                    } else {
                        console.error("nbtools-mobileCheck | wrong parameter, second parameter can be 'ios' or 'android'");
                    }
                } else {
                    let check = false;
                    (function (a) {
                        if (
                            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                                a
                            ) ||
                            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                                a.substr(0, 4)
                            )
                        )
                            check = true;
                    })(navigator.userAgent || navigator.vendor || window.opera);
                    return check;
                };
            })();
        case "getTime":
            return (() => {
                if (secondParam) {
                    if (secondParam.split(":").length == 3 && secondParam.split("/").length == 3 && secondParam.split("-").length == 2) {
                        const [dateComponents, timeComponents] = secondParam.split('-');
                        const [day, month, year] = dateComponents.split('/');
                        const [hours, minutes, seconds] = timeComponents.split(':');
                        const date = new Date(+year, month - 1, +day, +hours, +minutes, +seconds);

                        const timestamp = (date.getTime());
                        return timestamp;
                    } else {
                        console.error("nbtools-getTime | wrong syntax, second parameter syntax must be 'dd/mm/yy-hours:minutes:seconds'");
                    }
                } else {
                    console.error("nbtools-getTime | please type date as second parameter, syntax must be: 'dd/mm/yy-hours:minutes:seconds'");
                };
            })();
        case "perDay":
            let days;
            secondParam ? (typeof(secondParam) == "number" ? days = secondParam * 24 : [fourthParam,days] = [secondParam,24]) : days = 24;
            thirdParam ? thirdParam == "hours" ? days = days / 24 : null : null;
            fourthParam ? null : fourthParam = "";
            console.log("second: "+secondParam+" third: "+thirdParam+" fourth "+fourthParam+" days: "+days)
            return (() => {
                let lastclear = localStorage.getItem(`nbtoolsPerDaylastclear${fourthParam}`),
                    time_now = (new Date()).getTime();
                if ((time_now - lastclear) > 1000 * 60 * 60 * days) {
                    localStorage.removeItem(`nbtoolsPerDaylastclear${fourthParam}`);
                    localStorage.setItem(`nbtoolsPerDaylastclear${fourthParam}`, time_now);
                    return true;
                } else {
                    return false;
                };
            })();
        case "betweenDates":
            return (() => {
                if (secondParam && thirdParam) {
                    let d = new Date(),
                        n = d.getTime();
                    let startDate;
                    let endDate;
                    let timeStampConverter = (e, value) => {
                        [dateComponents, timeComponents] = e.split('-');
                        [day, month, year] = dateComponents.split('/');
                        [hours, minutes, seconds] = timeComponents.split(':');
                        let date = new Date(+year, month - 1, +day, +hours, +minutes, +seconds);
                        value == "startDate" ? startDate = (date.getTime()) : endDate = (date.getTime());
                    };
                    if (secondParam.split("/").length == 3 && secondParam.split(":").length == 3 && secondParam.split("-").length == 2 && thirdParam.split("/").length == 3 && thirdParam.split(":").length == 3 && thirdParam.split("-").length == 2) {
                        let i = 0;
                        while (i < 2) {
                            let e;
                            let value;
                            i == 0 ? e = secondParam : e = thirdParam;
                            i == 0 ? value = "startDate" : value = "endDate";
                            timeStampConverter(e, value);
                            i++;
                        };
                        return n > startDate && n < endDate ? true : false;
                    } else {
                        if (secondParam.split("/").length == 3 && secondParam.split(":").length == 3 && secondParam.split("-").length == 2) {
                            if (thirdParam == "end") {
                                timeStampConverter(secondParam, "endDate");
                                return n < endDate ? true : false;
                            } else if (thirdParam == "start") {
                                timeStampConverter(secondParam, "startDate");
                                return n > startDate ? true : false;
                            } else {
                                console.error("nbtools-betweenDates | wrong parameter, second parameter can be 'start' , 'end' , 'dd/mm/yy-hours:minutes:seconds'");
                            }
                        } else {
                            console.error("nbtools-betweenDates | wrong syntax, date parameter must be 'dd/mm/yy-hours:minutes:seconds'");
                        };
                    };
                } else {
                    console.error("nbtools-betweenDates | wrong parameters, first parameter required as 'dd/mm/yy-hours:minutes:seconds' , second parameter required as 'start' or 'end' or 'dd/mm/yy-hours:minutes:seconds'");
                };
            })();
        case "onlyTr":
            if (Intl.DateTimeFormat().resolvedOptions().timeZone) {
                return Intl.DateTimeFormat().resolvedOptions().timeZone == "Europe/Istanbul" ? true : false;
            } else {
                return false;
            };
        case "pageCounter":
            return (() => {
                if (secondParam) {
                    if (!!Number(secondParam)) {
                        thirdParam ? null : thirdParam = "";
                        if (sessionStorage.getItem(`nbVisitedPageCounter${thirdParam}`) == null) {
                            sessionStorage.setItem(`nbVisitedPageCounter${thirdParam}`, 1);
                        } else {
                            sessionStorage.setItem(`nbVisitedPageCounter${thirdParam}`, Number(sessionStorage.getItem(`nbVisitedPageCounter${thirdParam}`)) + 1);
                        };
                        return Number(sessionStorage.getItem(`nbVisitedPageCounter${thirdParam}`)) >= (Number(secondParam)) ? true : false;
                    } else {
                        console.error("nbtools-pageCounter| second parameter must be number for example: '3' , 3");
                    }
                } else {
                    console.error("nbtools-pageCounter| please type your counter limit as second parameter");
                }
            })();
        case "toastAlert":
            return (() => {
                if (document.getElementById("nbToastify") == null) {
                    if (secondParam == undefined) {
                        console.error("nbtools-toastAlert | please type your alert message as second parameter")
                    } else {
                        let nbCreateModal = document.createElement("div");
                        nbCreateModal.id = "nbToastify";
                        let nbToastifyStyle = document.createElement("style");
                        nbToastifyStyle.id = "nbToastifyStyle";
                        let nbAlertColor;
                        let nbAlertIcon;
                        let posH;
                        let posV;

                        switch (thirdParam) {
                            case "success":
                                nbAlertColor = "#4CAF50;";
                                nbAlertIcon = "&#10003;";
                                break;
                            case "fail":
                                nbAlertColor = "#F44336;";
                                nbAlertIcon = "&#33;";
                                break;
                            case "info":
                                nbAlertColor = "#2B8AD2;";
                                nbAlertIcon = "&#8505;";
                                break;
                            case "warning":
                                nbAlertColor = "#ECB90D;";
                                nbAlertIcon = "&#9888;";
                                break;
                            default:
                                nbAlertColor = "#4CAF50;";
                                nbAlertIcon = "&#10003;";
                                fourthParam = thirdParam;
                        };

                        switch (fourthParam) {
                            case "bottom-left":
                                posV = "bottom:15px";
                                posH = "left";
                                break;
                            case "bottom-right":
                                posV = "bottom:15px";
                                posH = "right";
                                break;
                            case "mid-left":
                                posV = "top:50%";
                                posH = "left";
                                break;
                            case "mid-right":
                                posV = "top:50%";
                                posH = "right";
                                break;
                            case "top-left":
                                posV = "top:15px";
                                posH = "left";
                                break;
                            case "top-right":
                                posV = "top:15px";
                                posH = "right";
                                break;
                            default:
                                posV = "bottom:15px";
                                posH = "left";
                                fifthParam = fourthParam;
                        };
                        let closeTimeOut;
                        fifthParam ? closeTimeOut = fifthParam : closeTimeOut = 2;
                        nbCreateModal.innerHTML = `<span class="nbToastifyIcon">${nbAlertIcon}</span> <div style="padding:0;margin:0;max-width:320px">${secondParam}</div>`;
                        nbToastifyStyle.innerText = `.nbToastifyIcon{font-size:20px;margin-right:5px;display:flex;align-items:center;justify-content:center;background-color:#fff;height:25px;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;width:27px;color:${nbAlertColor}}#nbToastify{height:fit-content;max-width:300px;min-width:60px;${posV};${posH}:-400px;font-family:'Fredoka',sans-serif;font-size:16px;float:right;display:flex;align-items:center;justify-content:center;padding:10px;position:fixed;z-index:999999999999;transition:.7s;border-radius:6px;background-color:${nbAlertColor};color:#F9FAF9;}@media screen and (max-width:768px) {#model-nb {font-size: 16px;padding: 5px;width:40%}}`;
                        document.querySelector("body").append(nbToastifyStyle);
                        document.querySelector("body").append(nbCreateModal);

                        setTimeout(() => {
                            document.querySelector("#nbToastify").style[posH] = "10px";
                        }, 10);
                        setTimeout(() => {
                            document.querySelector("#nbToastify").style[posH] = "-400px";
                        }, closeTimeOut * 1000);
                        setTimeout(() => {
                            document.getElementById("nbToastify").remove();
                            document.getElementById("nbToastifyStyle").remove();
                        }, closeTimeOut * 1000 + 500);
                    };
                };
            })();
        case "popup":
            thirdParam === undefined ? thirdParam = {} : null;
            let popupSize;

            if (secondParam == undefined) {
                console.error("nbtools-popup | please insert image source as second parameter");
            } else {
                (function (a) {
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                        thirdParam.mobile_width ? popupSize = `width:${thirdParam.mobile_width}px;` : null;
                        thirdParam.mobile_height ? popupSize = `height:${thirdParam.mobile_height}px;` : null;
                        thirdParam.mobile_width === undefined && thirdParam.mobile_height === undefined ? popupSize = "max-width:24rem;" : null;
                        thirdParam.mobile_image ? secondParam = thirdParam.mobile_image : null;
                    } else {
                        thirdParam.width ? popupSize = `width:${thirdParam.width}px;` : null;
                        thirdParam.height ? popupSize = `height:${thirdParam.height}px;` : null;
                        thirdParam.width === undefined && thirdParam.height === undefined ? popupSize = "max-height:24rem;" : null;
                    }
                })(navigator.userAgent || navigator.vendor || window.opera);

                let nbtoolsPopup = document.createElement("div");
                let nbtoolsOverlay = document.createElement("div");
                nbtoolsOverlay.style = `position:fixed;top:0;left:0;width:100%;background:rgba(0.5,0.5,0.5,.5);content:"";height:100%;z-index:999999;`;
                nbtoolsOverlay.id = `nbtoolsOverlay${thirdParam.id ? thirdParam.id : ""}`;
                nbtoolsOverlay.setAttribute("onclick", "nbToolsPopupClose()");
                nbtoolsPopup.id = `nbtoolsPopup${thirdParam.id ? thirdParam.id : ""}`;
                thirdParam.link ? nbtoolsPopup.innerHTML = `<span onclick="nbToolsPopupClose()" id="nbToolsPopupCloseBtn" style="cursor:pointer;font-size:20px;color:${thirdParam.button_color ? thirdParam.button_color : "white"};position:absolute;top:5px;right:10px;font-weight:bold;">x</span><a onclick="nbtoolsPopupClickEvent()" href="${thirdParam.link}"><img style="${popupSize}" src="${secondParam}"></a>` : nbtoolsPopup.innerHTML = `<span onclick="nbToolsPopupClose()" id="nbToolsPopupCloseBtn" style="cursor:pointer;font-size:20px;color:${thirdParam.button_color ? thirdParam.button_color : "white"};position:absolute;top:5px;right:10px;font-weight:bold;">x</span><img style="${popupSize}" src="${secondParam}">`;
                nbtoolsPopup.style = "position:fixed;z-index:99999999999999;top:50%;left:50%;transform:translate(-50%,-50%);";
                document.body.append(nbtoolsOverlay);
                document.body.append(nbtoolsPopup);
                
                nbToolsPopupClose = () => {
                    document.getElementById(`nbtoolsPopup${thirdParam.id ? thirdParam.id : ""}`).remove();
                    document.getElementById(`nbtoolsOverlay${thirdParam.id ? thirdParam.id : ""}`).remove();
                };
            };
            break;
        default:
            console.error("nbtools wrong paramater | avaliable paramaters: `returningUser` , `newUser` , `mobileCheck` , `getTime` , `perDay` , `toastAlert` ,`betweenDates` , `pageCounter` , `popup`");
    };
};