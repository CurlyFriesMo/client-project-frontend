document.addEventListener("DOMContentLoaded", function (event) {









        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        // artiest 1 (starttijd, eindtijd, datum, artiestennaam, genre, venue)
        // var start1 = "20:00";
        // var end1 = "21:00";
        // var day1 = new Date("10/15/2021");
        // var artistname1 = document.getElementsByClassName('artistname1');
        // for (var i = 0; i < artistname1.length; i++) {
        //     artistname1[i].innerHTML = "Commander Spoon";
        // }
        // document.getElementById("genre1").innerHTML = "Dark folk";
        // var venueArtist1 = 5;
        // // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt
        //
        // var blokArtist1Personal = document.getElementById("blokArtist1Personal");
        // var blokArtist1Full = document.getElementById("blokArtist1Full");
        //
        //
        // //Zorgen dat de artiesten in de full timetable bij de goede venue staan
        // if (venueArtist1 == 1) {
        //     blokArtist1Full.style.marginTop = "24px";
        // } else if (venueArtist1 == 2) {
        //     blokArtist1Full.style.marginTop = "61px";
        // } else if (venueArtist1 == 3) {
        //     blokArtist1Full.style.marginTop = "98px";
        // } else if (venueArtist1 == 4) {
        //     blokArtist1Full.style.marginTop = "135px";
        // } else if (venueArtist1 == 5) {
        //     blokArtist1Full.style.marginTop = "172px";
        // } else if (venueArtist1 == 6) {
        //     blokArtist1Full.style.marginTop = "209px";
        // } else {
        //     console.write("error venue");
        // }
        //
        // start1 = start1.split(":");
        // end1 = end1.split(":");
        //
        // function diff(start1, end1) {
        //
        //     var start1Date = new Date(0, 0, 0, start1[0], start1[1], 0);
        //     var end1Date = new Date(0, 0, 0, end1[0], end1[1], 0);
        //     var diff = end1Date.getTime() - start1Date.getTime();
        //     var hours = Math.floor(diff / 1000 / 60 / 60);
        //     diff -= hours * 1000 * 60 * 60;
        //     var minutes = Math.floor(diff / 1000 / 60);
        //
        //     var totalMinutes = (hours * 60) + minutes;
        //
        //     if (hours < 0)
        //         hours = hours + 24;
        //
        //     return totalMinutes
        // }
        // console.log(diff(start1, end1));
        //
        // // how long does the performance take? set the width
        // var widthArtist1 = diff(start1, end1) / 6 * 10;
        // blokArtist1Personal.style.width = widthArtist1 + "px";
        // blokArtist1Full.style.width = (widthArtist1 - 7) + "px";
        //
        // //spot on the timeline: when does the performance start?
        // var marginLeftArtist1 = ((((start1[0] - 18) * 60)) / 6 * 10) + (start1[1] / 6 * 10) + 150;
        // blokArtist1Personal.style.marginLeft = marginLeftArtist1 + "px";
        // blokArtist1Full.style.marginLeft = (marginLeftArtist1 + 1) + "px";
        //
        // // To calculate the time difference of two dates: in which timetable does it have to be?
        // // de laatste dag van het festival om te kunnen vergelijken:
        // var day0 = new Date("10/17/2021");
        //
        // var Difference_In_Time = day1.getTime() - day0.getTime();
        // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        //
        // if (Difference_In_Days == -2) {
        //     //its friday
        //     blokArtist1Personal.style.marginTop = "40px";
        // } else if (Difference_In_Days == -1) {
        //     //its saturday
        //     blokArtist1Personal.style.marginTop = "250px";
        // } else if (Difference_In_Days == 0) {
        //     //its sunday
        //     blokArtist1Personal.style.marginTop = "350px";
        // } else {
        //     console.log("error days");
        // }
        //
        //
        //
        //
    
    
    
        // Artist 2
        var start2 = "18:00";
        var end2 = "18:30";
        var day2 = new Date("10/15/2021");
        var artistname2 = document.getElementsByClassName('artistname2');
        for (var i = 0; i < artistname2.length; i++) {
            artistname2[i].innerHTML = "Max Frimout";
        }
        document.getElementById("genre2").innerHTML = "Dance";
        var venueArtist2 = 2;
        // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt
    
        var blokArtist2Personal = document.getElementById("blokArtist2Personal");
        var blokArtist2Full = document.getElementById("blokArtist2Full");
    
        if (venueArtist2 == 1) {
            blokArtist2Full.style.marginTop = "24px";
        } else if (venueArtist2 == 2) {
            blokArtist2Full.style.marginTop = "61px";
        } else if (venueArtist2 == 3) {
            blokArtist2Full.style.marginTop = "98px";
        } else if (venueArtist2 == 4) {
            blokArtist2Full.style.marginTop = "135px";
        } else if (venueArtist2 == 5) {
            blokArtist2Full.style.marginTop = "172px";
        } else if (venueArtist2 == 6) {
            blokArtist2Full.style.marginTop = "209px";
        } else {
            console.write("error venue");
        }
    
        start2 = start2.split(":");
        end2 = end2.split(":");
    
        function diff(start2, end2) {
    
            var start2Date = new Date(0, 0, 0, start2[0], start2[1], 0);
            var end2Date = new Date(0, 0, 0, end2[0], end2[1], 0);
            var diff = end2Date.getTime() - start2Date.getTime();
            var hours = Math.floor(diff / 1000 / 60 / 60);
            diff -= hours * 1000 * 60 * 60;
            var minutes = Math.floor(diff / 1000 / 60);
            var totalMinutes2 = (hours * 60) + minutes;
    
            if (hours < 0)
                hours = hours + 24;
    
            return totalMinutes2
        }
    
        var widthArtist2 = diff(start2, end2) / 6 * 10;
        blokArtist2Personal.style.width = widthArtist2 + "px";
        blokArtist2Full.style.width = (widthArtist2 - 7) + "px";
    
        var marginLeftArtist2 = ((((start2[0] - 18) * 60)) / 6 * 10) + (start2[1] / 6 * 10) + 150;
        blokArtist2Personal.style.marginLeft = marginLeftArtist2 + "px";
        blokArtist2Full.style.marginLeft = (marginLeftArtist2 + 1) + "px";
    
        var Difference_In_Time2 = day2.getTime() - day0.getTime();
        var Difference_In_Days2 = Difference_In_Time2 / (1000 * 3600 * 24);
    
        if (Difference_In_Days2 == -2) {
            //its friday
            blokArtist2Personal.style.marginTop = "40px";
        } else if (Difference_In_Days2 == -1) {
            //its saturday
            blokArtist2Personal.style.marginTop = "250px";
        } else if (Difference_In_Days2 == 0) {
            //its sunday
            blokArtist2Personal.style.marginTop = "350px";
        } else {
            console.log("error days");
        }
    
    
    
        var start3 = "19:00";
        var end3 = "20:00";
        var day3 = new Date("10/15/2021");
        var artistname3 = document.getElementsByClassName('artistname3');
        for (var i = 0; i < artistname3.length; i++) {
            artistname3[i].innerHTML = "Bastards Ball";
        }
        document.getElementById("genre3").innerHTML = "Idk";
        var venueArtist3 = 1;
        // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt
    
        var blokArtist3Personal = document.getElementById("blokArtist3Personal");
        var blokArtist3Full = document.getElementById("blokArtist3Full");
    
        if (venueArtist3 == 1) {
            blokArtist3Full.style.marginTop = "24px";
        } else if (venueArtist3 == 2) {
            blokArtist3Full.style.marginTop = "61px";
        } else if (venueArtist3 == 3) {
            blokArtist3Full.style.marginTop = "98px";
        } else if (venueArtist3 == 4) {
            blokArtist3Full.style.marginTop = "135px";
        } else if (venueArtist3 == 5) {
            blokArtist3Full.style.marginTop = "172px";
        } else if (venueArtist3 == 6) {
            blokArtist3Full.style.marginTop = "209px";
        } else {
            console.write("error venue");
        }



        // Artist 3
            var start3 = "19:00";
            var end3 = "20:00";
            var day3 = new Date("10/15/2021");
            var artistname3 = document.getElementsByClassName('artistname3');
            for (var i = 0; i < artistname3.length; i++) {
                artistname3[i].innerHTML = "Bastards Ball";
            }
            document.getElementById("genre3").innerHTML = "Idk";
            var venueArtist3 = 1;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist3Personal = document.getElementById("blokArtist3Personal");
            var blokArtist3Full = document.getElementById("blokArtist3Full");

            if (venueArtist3 == 1) {
                blokArtist3Full.style.marginTop = "24px";
            } else if (venueArtist3 == 2) {
                blokArtist3Full.style.marginTop = "61px";
            } else if (venueArtist3 == 3) {
                blokArtist3Full.style.marginTop = "98px";
            } else if (venueArtist3 == 4) {
                blokArtist3Full.style.marginTop = "135px";
            } else if (venueArtist3 == 5) {
                blokArtist3Full.style.marginTop = "172px";
            } else if (venueArtist3 == 6) {
                blokArtist3Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start3 = start3.split(":");
            end3 = end3.split(":");

            function diff(start3, end3) {

                var start3Date = new Date(0, 0, 0, start3[0], start3[1], 0);
                var end3Date = new Date(0, 0, 0, end3[0], end3[1], 0);
                var diff = end3Date.getTime() - start3Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes3 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes3
            }

            var widthArtist3 = diff(start3, end3) / 6 * 10;
            blokArtist3Personal.style.width = widthArtist3 + "px";
            blokArtist3Full.style.width = (widthArtist3 - 7) + "px";

            var marginLeftArtist3 = ((((start3[0] - 18) * 60)) / 6 * 10) + (start3[1] / 6 * 10) + 150;
            blokArtist3Personal.style.marginLeft = marginLeftArtist3 + "px";
            blokArtist3Full.style.marginLeft = (marginLeftArtist3 + 1) + "px";

            var Difference_In_Time3 = day3.getTime() - day0.getTime();
            var Difference_In_Days3 = Difference_In_Time3 / (1000 * 3600 * 24);

            if (Difference_In_Days3 == -2) {
                //its friday
                blokArtist3Personal.style.marginTop = "40px";
            } else if (Difference_In_Days3 == -1) {
                //its saturday
                blokArtist3Personal.style.marginTop = "250px";
            } else if (Difference_In_Days3 == 0) {
                //its sunday
                blokArtist3Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }



            //Artist4

            var start4 = "20:00";
            var end4 = "21:00";
            var day4 = new Date("10/15/2021");
            var artistname4 = document.getElementsByClassName('artistname4');
            for (var i = 0; i < artistname4.length; i++) {
                artistname4[i].innerHTML = "ALORA";
            }
            document.getElementById("genre4").innerHTML = "Idk";
            var venueArtist4 = 1;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist4Personal = document.getElementById("blokArtist4Personal");
            var blokArtist4Full = document.getElementById("blokArtist4Full");

            if (venueArtist4 == 1) {
                blokArtist4Full.style.marginTop = "24px";
            } else if (venueArtist4 == 2) {
                blokArtist4Full.style.marginTop = "61px";
            } else if (venueArtist4 == 3) {
                blokArtist4Full.style.marginTop = "98px";
            } else if (venueArtist4 == 4) {
                blokArtist4Full.style.marginTop = "135px";
            } else if (venueArtist4 == 5) {
                blokArtist4Full.style.marginTop = "172px";
            } else if (venueArtist4 == 6) {
                blokArtist4Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start4 = start4.split(":");
            end4 = end4.split(":");

            function diff(start4, end4) {

                var start4Date = new Date(0, 0, 0, start4[0], start4[1], 0);
                var end4Date = new Date(0, 0, 0, end4[0], end4[1], 0);
                var diff = end4Date.getTime() - start4Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes4 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes4
            }

            var widthArtist4 = diff(start4, end4) / 6 * 10;
            blokArtist4Personal.style.width = widthArtist4 + "px";
            blokArtist4Full.style.width = (widthArtist4 - 7) + "px";

            var marginLeftArtist4 = ((((start4[0] - 18) * 60)) / 6 * 10) + (start4[1] / 6 * 10) + 150;
            blokArtist4Personal.style.marginLeft = marginLeftArtist4 + "px";
            blokArtist4Full.style.marginLeft = (marginLeftArtist4 + 1) + "px";

            var Difference_In_Time4 = day4.getTime() - day0.getTime();
            var Difference_In_Days4 = Difference_In_Time4 / (1000 * 3600 * 24);

            if (Difference_In_Days4 == -2) {
                //its friday
                blokArtist4Personal.style.marginTop = "40px";
            } else if (Difference_In_Days4 == -1) {
                //its saturday
                blokArtist4Personal.style.marginTop = "250px";
            } else if (Difference_In_Days4 == 0) {
                //its sunday
                blokArtist4Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }



            //Artist5

            var start5 = "21:00";
            var end5 = "22:00";
            var day5 = new Date("10/15/2021");
            var artistname5 = document.getElementsByClassName('artistname5');
            for (var i = 0; i < artistname5.length; i++) {
                artistname5[i].innerHTML = "NCT";
            }
            document.getElementById("genre5").innerHTML = "Idk";
            var venueArtist5 = 1;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist5Personal = document.getElementById("blokArtist5Personal");
            var blokArtist5Full = document.getElementById("blokArtist5Full");

            if (venueArtist5 == 1) {
                blokArtist5Full.style.marginTop = "24px";
            } else if (venueArtist5 == 2) {
                blokArtist5Full.style.marginTop = "61px";
            } else if (venueArtist5 == 3) {
                blokArtist5Full.style.marginTop = "98px";
            } else if (venueArtist5 == 4) {
                blokArtist5Full.style.marginTop = "135px";
            } else if (venueArtist5 == 5) {
                blokArtist5Full.style.marginTop = "172px";
            } else if (venueArtist5 == 6) {
                blokArtist5Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start5 = start5.split(":");
            end5 = end5.split(":");

            function diff(start5, end5) {

                var start5Date = new Date(0, 0, 0, start5[0], start5[1], 0);
                var end5Date = new Date(0, 0, 0, end5[0], end5[1], 0);
                var diff = end5Date.getTime() - start5Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes5 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes5
            }

            var widthArtist5 = diff(start5, end5) / 6 * 10;
            blokArtist5Personal.style.width = widthArtist5 + "px";
            blokArtist5Full.style.width = (widthArtist5 - 7) + "px";

            var marginLeftArtist5 = ((((start5[0] - 18) * 60)) / 6 * 10) + (start5[1] / 6 * 10) + 150;
            blokArtist5Personal.style.marginLeft = marginLeftArtist5 + "px";
            blokArtist5Full.style.marginLeft = (marginLeftArtist5 + 1) + "px";

            var Difference_In_Time5 = day5.getTime() - day0.getTime();
            var Difference_In_Days5 = Difference_In_Time5 / (1000 * 3600 * 24);

            if (Difference_In_Days5 == -2) {
                //its friday
                blokArtist5Personal.style.marginTop = "40px";
            } else if (Difference_In_Days5 == -1) {
                //its saturday
                blokArtist5Personal.style.marginTop = "250px";
            } else if (Difference_In_Days5 == 0) {
                //its sunday
                blokArtist5Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }


            //Artist6

            var start6 = "22:00";
            var end6 = "23:00";
            var day6 = new Date("10/15/2021");
            var artistname6 = document.getElementsByClassName('artistname6');
            for (var i = 0; i < artistname6.length; i++) {
                artistname6[i].innerHTML = "Protostar";
            }
            document.getElementById("genre6").innerHTML = "Idk";
            var venueArtist6 = 1;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist6Personal = document.getElementById("blokArtist6Personal");
            var blokArtist6Full = document.getElementById("blokArtist6Full");

            if (venueArtist6 == 1) {
                blokArtist6Full.style.marginTop = "24px";
            } else if (venueArtist6 == 2) {
                blokArtist6Full.style.marginTop = "61px";
            } else if (venueArtist6 == 3) {
                blokArtist6Full.style.marginTop = "98px";
            } else if (venueArtist6 == 4) {
                blokArtist6Full.style.marginTop = "135px";
            } else if (venueArtist6 == 5) {
                blokArtist6Full.style.marginTop = "172px";
            } else if (venueArtist6 == 6) {
                blokArtist6Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start6 = start6.split(":");
            end6 = end6.split(":");

            function diff(start6, end6) {

                var start6Date = new Date(0, 0, 0, start6[0], start6[1], 0);
                var end6Date = new Date(0, 0, 0, end6[0], end6[1], 0);
                var diff = end6Date.getTime() - start6Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes6 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes6
            }

            var widthArtist6 = diff(start6, end6) / 6 * 10;
            blokArtist6Personal.style.width = widthArtist6 + "px";
            blokArtist6Full.style.width = (widthArtist6 - 7) + "px";

            var marginLeftArtist6 = ((((start6[0] - 18) * 60)) / 6 * 10) + (start6[1] / 6 * 10) + 150;
            blokArtist6Personal.style.marginLeft = marginLeftArtist6 + "px";
            blokArtist6Full.style.marginLeft = (marginLeftArtist6 + 1) + "px";

            var Difference_In_Time6 = day6.getTime() - day0.getTime();
            var Difference_In_Days6 = Difference_In_Time6 / (1000 * 3600 * 24);

            if (Difference_In_Days6 == -2) {
                blokArtist6Personal.style.marginTop = "40px";
            } else if (Difference_In_Days6 == -1) {
                blokArtist6Personal.style.marginTop = "250px";
            } else if (Difference_In_Days6 == 0) {
                blokArtist6Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }



            //Artist7

            // var start7 = "18:30";
            // var end7 = "19:30";
            // var day7 = new Date("10/15/2021");
            // var artistname7 = document.getElementsByClassName('artistname7');
            // for (var i = 0; i < artistname7.length; i++) {
            //     artistname7[i].innerHTML = "ITem";
            // }
            // document.getElementById("genre7").innerHTML = "Idk";
            // var venueArtist7 = 2;
            // // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            // var blokArtist7Personal = document.getElementById("blokArtist7Personal");
            // var blokArtist7Full = document.getElementById("blokArtist7Full");

            // if (venueArtist7 == 1) {
            //     blokArtist7Full.style.marginTop = "24px";
            // } else if (venueArtist7 == 2) {
            //     blokArtist7Full.style.marginTop = "61px";
            // } else if (venueArtist7 == 3) {
            //     blokArtist7Full.style.marginTop = "98px";
            // } else if (venueArtist7 == 4) {
            //     blokArtist7Full.style.marginTop = "135px";
            // } else if (venueArtist7 == 5) {
            //     blokArtist7Full.style.marginTop = "172px";
            // } else if (venueArtist7 == 6) {
            //     blokArtist7Full.style.marginTop = "209px";
            // } else {
            //     console.write("error venue");
            // }

            // start7 = start7.split(":");
            // end7 = end7.split(":");

            // function diff(start7, end7) {

            //     var start7Date = new Date(0, 0, 0, start7[0], start7[1], 0);
            //     var end7Date = new Date(0, 0, 0, end7[0], end7[1], 0);
            //     var diff = end7Date.getTime() - start7Date.getTime();
            //     var hours = Math.floor(diff / 1000 / 60 / 60);
            //     diff -= hours * 1000 * 60 * 60;
            //     var minutes = Math.floor(diff / 1000 / 60);
            //     var totalMinutes7 = (hours * 60) + minutes;

            //     if (hours < 0)
            //         hours = hours + 24;

            //     return totalMinutes7
            // }

            // var widthArtist7 = diff(start7, end7) / 6 * 10;
            // blokArtist7Personal.style.width = widthArtist7 + "px";
            // blokArtist7Full.style.width = (widthArtist7 - 7) + "px";

            // var marginLeftArtist7 = ((((start7[0] - 18) * 60)) / 6 * 10) + (start7[1] / 6 * 10) + 150;
            // blokArtist7Personal.style.marginLeft = marginLeftArtist7 + "px";
            // blokArtist7Full.style.marginLeft = (marginLeftArtist7 + 1) + "px";

            // var Difference_In_Time7 = day7.getTime() - day0.getTime();
            // var Difference_In_Days7 = Difference_In_Time7 / (1000 * 3600 * 24);

            // if (Difference_In_Days7 == -2) {
            //     blokArtist7Personal.style.marginTop = "40px";
            // } else if (Difference_In_Days7 == -1) {
            //     blokArtist7Personal.style.marginTop = "250px";
            // } else if (Difference_In_Days7 == 0) {
            //     blokArtist7Personal.style.marginTop = "350px";
            // } else {
            //     console.log("error days");
            // }




            //Artist8

            var start8 = "19:30";
            var end8 = "21:00";
            var day8 = new Date("10/15/2021");
            var artistname8 = document.getElementsByClassName('artistname8');
            for (var i = 0; i < artistname8.length; i++) {
                artistname8[i].innerHTML = "Iris Rijskamp";
            }
            document.getElementById("genre8").innerHTML = "Idk";
            var venueArtist8 = 2;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist8Personal = document.getElementById("blokArtist8Personal");
            var blokArtist8Full = document.getElementById("blokArtist8Full");

            if (venueArtist8 == 1) {
                blokArtist8Full.style.marginTop = "24px";
            } else if (venueArtist8 == 2) {
                blokArtist8Full.style.marginTop = "61px";
            } else if (venueArtist8 == 3) {
                blokArtist8Full.style.marginTop = "98px";
            } else if (venueArtist8 == 4) {
                blokArtist8Full.style.marginTop = "135px";
            } else if (venueArtist8 == 5) {
                blokArtist8Full.style.marginTop = "172px";
            } else if (venueArtist8 == 6) {
                blokArtist8Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start8 = start8.split(":");
            end8 = end8.split(":");

            function diff(start8, end8) {

                var start8Date = new Date(0, 0, 0, start8[0], start8[1], 0);
                var end8Date = new Date(0, 0, 0, end8[0], end8[1], 0);
                var diff = end8Date.getTime() - start8Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes8 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes8
            }

            var widthArtist8 = diff(start8, end8) / 6 * 10;
            blokArtist8Personal.style.width = widthArtist8 + "px";
            blokArtist8Full.style.width = (widthArtist8 - 7) + "px";

            var marginLeftArtist8 = ((((start8[0] - 18) * 60)) / 6 * 10) + (start8[1] / 6 * 10) + 150;
            blokArtist8Personal.style.marginLeft = marginLeftArtist8 + "px";
            blokArtist8Full.style.marginLeft = (marginLeftArtist8 + 1) + "px";

            var Difference_In_Time8 = day8.getTime() - day0.getTime();
            var Difference_In_Days8 = Difference_In_Time8 / (1000 * 3600 * 24);

            if (Difference_In_Days8 == -2) {
                blokArtist8Personal.style.marginTop = "40px";
            } else if (Difference_In_Days8 == -1) {
                blokArtist8Personal.style.marginTop = "250px";
            } else if (Difference_In_Days8 == 0) {
                blokArtist8Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }


            //Artist9

            var start9 = "21:00";
            var end9 = "22:30";
            var day9 = new Date("10/15/2021");
            var artistname9 = document.getElementsByClassName('artistname9');
            for (var i = 0; i < artistname9.length; i++) {
                artistname9[i].innerHTML = "Afra";
            }
            document.getElementById("genre9").innerHTML = "Idk";
            var venueArtist9 = 2;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist9Personal = document.getElementById("blokArtist9Personal");
            var blokArtist9Full = document.getElementById("blokArtist9Full");

            if (venueArtist9 == 1) {
                blokArtist9Full.style.marginTop = "24px";
            } else if (venueArtist9 == 2) {
                blokArtist9Full.style.marginTop = "61px";
            } else if (venueArtist9 == 3) {
                blokArtist9Full.style.marginTop = "98px";
            } else if (venueArtist9 == 4) {
                blokArtist9Full.style.marginTop = "135px";
            } else if (venueArtist9 == 5) {
                blokArtist9Full.style.marginTop = "172px";
            } else if (venueArtist9 == 6) {
                blokArtist9Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start9 = start9.split(":");
            end9 = end9.split(":");

            function diff(start9, end9) {

                var start9Date = new Date(0, 0, 0, start9[0], start9[1], 0);
                var end9Date = new Date(0, 0, 0, end9[0], end9[1], 0);
                var diff = end9Date.getTime() - start9Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes9 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes9
            }

            var widthArtist9 = diff(start9, end9) / 6 * 10;
            blokArtist9Personal.style.width = widthArtist9 + "px";
            blokArtist9Full.style.width = (widthArtist9 - 7) + "px";

            var marginLeftArtist9 = ((((start9[0] - 18) * 60)) / 6 * 10) + (start9[1] / 6 * 10) + 150;
            blokArtist9Personal.style.marginLeft = marginLeftArtist9 + "px";
            blokArtist9Full.style.marginLeft = (marginLeftArtist9 + 1) + "px";

            var Difference_In_Time9 = day9.getTime() - day0.getTime();
            var Difference_In_Days9 = Difference_In_Time9 / (1000 * 3600 * 24);

            if (Difference_In_Days9 == -2) {
                blokArtist9Personal.style.marginTop = "40px";
            } else if (Difference_In_Days9 == -1) {
                blokArtist9Personal.style.marginTop = "250px";
            } else if (Difference_In_Days9 == 0) {
                blokArtist9Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }



            //Artist10

            var start10 = "22:30";
            var end10 = "00:00";
            var day10 = new Date("10/15/2021");
            var artistname10 = document.getElementsByClassName('artistname10');
            for (var i = 0; i < artistname10.length; i++) {
                artistname10[i].innerHTML = "Jess Oberlin & Laura van Hal";
            }
            document.getElementById("genre10").innerHTML = "Idk";
            var venueArtist10 = 2;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist10Personal = document.getElementById("blokArtist10Personal");
            var blokArtist10Full = document.getElementById("blokArtist10Full");

            if (venueArtist10 == 1) {
                blokArtist10Full.style.marginTop = "24px";
            } else if (venueArtist10 == 2) {
                blokArtist10Full.style.marginTop = "61px";
            } else if (venueArtist10 == 3) {
                blokArtist10Full.style.marginTop = "98px";
            } else if (venueArtist10 == 4) {
                blokArtist10Full.style.marginTop = "135px";
            } else if (venueArtist10 == 5) {
                blokArtist10Full.style.marginTop = "172px";
            } else if (venueArtist10 == 6) {
                blokArtist10Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start10 = start10.split(":");
            end10 = end10.split(":");

            function diff(start10, end10) {

                var start10Date = new Date(0, 0, 0, start10[0], start10[1], 0);
                var end10Date = new Date(0, 0, 0, end10[0], end10[1], 0);
                var diff = end10Date.getTime() - start10Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes10 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes10
            }

            var widthArtist10 = diff(start10, end10) / 6 * 10;
            blokArtist10Personal.style.width = widthArtist10 + "px";
            blokArtist10Full.style.width = (widthArtist10 - 7) + "px";

            var marginLeftArtist10 = ((((start10[0] - 18) * 60)) / 6 * 10) + (start10[1] / 6 * 10) + 150;
            blokArtist10Personal.style.marginLeft = marginLeftArtist10 + "px";
            blokArtist10Full.style.marginLeft = (marginLeftArtist10 + 1) + "px";

            var Difference_In_Time10 = day10.getTime() - day0.getTime();
            var Difference_In_Days10 = Difference_In_Time10 / (1000 * 3600 * 24);

            if (Difference_In_Days10 == -2) {
                blokArtist10Personal.style.marginTop = "40px";
            } else if (Difference_In_Days10 == -1) {
                blokArtist10Personal.style.marginTop = "250px";
            } else if (Difference_In_Days10 == 0) {
                blokArtist10Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }



            //Artist11

            var start11 = "20:00";
            var end11 = "20:30";
            var day11 = new Date("10/15/2021");
            var artistname11 = document.getElementsByClassName('artistname11');
            for (var i = 0; i < artistname11.length; i++) {
                artistname11[i].innerHTML = "Baby's Berserk";
            }
            document.getElementById("genre11").innerHTML = "Idk";
            var venueArtist11 = 3;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist11Personal = document.getElementById("blokArtist11Personal");
            var blokArtist11Full = document.getElementById("blokArtist11Full");

            if (venueArtist11 == 1) {
                blokArtist11Full.style.marginTop = "24px";
            } else if (venueArtist11 == 2) {
                blokArtist11Full.style.marginTop = "61px";
            } else if (venueArtist11 == 3) {
                blokArtist11Full.style.marginTop = "98px";
            } else if (venueArtist11 == 4) {
                blokArtist11Full.style.marginTop = "135px";
            } else if (venueArtist11 == 5) {
                blokArtist11Full.style.marginTop = "172px";
            } else if (venueArtist11 == 6) {
                blokArtist11Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start11 = start11.split(":");
            end11 = end11.split(":");

            function diff(start11, end11) {

                var start11Date = new Date(0, 0, 0, start11[0], start11[1], 0);
                var end11Date = new Date(0, 0, 0, end11[0], end11[1], 0);
                var diff = end11Date.getTime() - start11Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes11 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes11
            }

            var widthArtist11 = diff(start11, end11) / 6 * 10;
            blokArtist11Personal.style.width = widthArtist11 + "px";
            blokArtist11Full.style.width = (widthArtist11 - 7) + "px";

            var marginLeftArtist11 = ((((start11[0] - 18) * 60)) / 6 * 10) + (start11[1] / 6 * 10) + 150;
            blokArtist11Personal.style.marginLeft = marginLeftArtist11 + "px";
            blokArtist11Full.style.marginLeft = (marginLeftArtist11 + 1) + "px";

            var Difference_In_Time11 = day11.getTime() - day0.getTime();
            var Difference_In_Days11 = Difference_In_Time11 / (1000 * 3600 * 24);

            if (Difference_In_Days11 == -2) {
                blokArtist11Personal.style.marginTop = "40px";
            } else if (Difference_In_Days11 == -1) {
                blokArtist11Personal.style.marginTop = "250px";
            } else if (Difference_In_Days11 == 0) {
                blokArtist11Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }



            //Artist12

            var start12 = "21:00";
            var end12 = "22:00";
            var day12 = new Date("10/15/2021");
            var artistname12 = document.getElementsByClassName('artistname12');
            for (var i = 0; i < artistname12.length; i++) {
                artistname12[i].innerHTML = "Sophie Straat";
            }
            document.getElementById("genre12").innerHTML = "Idk";
            var venueArtist12 = 3;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist12Personal = document.getElementById("blokArtist12Personal");
            var blokArtist12Full = document.getElementById("blokArtist12Full");

            if (venueArtist12 == 1) {
                blokArtist12Full.style.marginTop = "24px";
            } else if (venueArtist12 == 2) {
                blokArtist12Full.style.marginTop = "61px";
            } else if (venueArtist12 == 3) {
                blokArtist12Full.style.marginTop = "98px";
            } else if (venueArtist12 == 4) {
                blokArtist12Full.style.marginTop = "135px";
            } else if (venueArtist12 == 5) {
                blokArtist12Full.style.marginTop = "172px";
            } else if (venueArtist12 == 6) {
                blokArtist12Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start12 = start12.split(":");
            end12 = end12.split(":");

            function diff(start12, end12) {

                var start12Date = new Date(0, 0, 0, start12[0], start12[1], 0);
                var end12Date = new Date(0, 0, 0, end12[0], end12[1], 0);
                var diff = end12Date.getTime() - start12Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes12 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes12
            }

            var widthArtist12 = diff(start12, end12) / 6 * 10;
            blokArtist12Personal.style.width = widthArtist12 + "px";
            blokArtist12Full.style.width = (widthArtist12 - 7) + "px";

            var marginLeftArtist12 = ((((start12[0] - 18) * 60)) / 6 * 10) + (start12[1] / 6 * 10) + 150;
            blokArtist12Personal.style.marginLeft = marginLeftArtist12 + "px";
            blokArtist12Full.style.marginLeft = (marginLeftArtist12 + 1) + "px";

            var Difference_In_Time12 = day12.getTime() - day0.getTime();
            var Difference_In_Days12 = Difference_In_Time12 / (1000 * 3600 * 24);

            if (Difference_In_Days12 == -2) {
                blokArtist12Personal.style.marginTop = "40px";
            } else if (Difference_In_Days12 == -1) {
                blokArtist12Personal.style.marginTop = "250px";
            } else if (Difference_In_Days12 == 0) {
                blokArtist12Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }



            //Artist13

            var start13 = "22:30";
            var end13 = "23:30";
            var day13 = new Date("10/15/2021");
            var artistname13 = document.getElementsByClassName('artistname13');
            for (var i = 0; i < artistname13.length; i++) {
                artistname13[i].innerHTML = "Charlie & The Lesbians";
            }
            document.getElementById("genre13").innerHTML = "Idk";
            var venueArtist13 = 3;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist13Personal = document.getElementById("blokArtist13Personal");
            var blokArtist13Full = document.getElementById("blokArtist13Full");

            if (venueArtist13 == 1) {
                blokArtist13Full.style.marginTop = "24px";
            } else if (venueArtist13 == 2) {
                blokArtist13Full.style.marginTop = "61px";
            } else if (venueArtist13 == 3) {
                blokArtist13Full.style.marginTop = "98px";
            } else if (venueArtist13 == 4) {
                blokArtist13Full.style.marginTop = "135px";
            } else if (venueArtist13 == 5) {
                blokArtist13Full.style.marginTop = "172px";
            } else if (venueArtist13 == 6) {
                blokArtist13Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start13 = start13.split(":");
            end13 = end13.split(":");

            function diff(start13, end13) {

                var start13Date = new Date(0, 0, 0, start13[0], start13[1], 0);
                var end13Date = new Date(0, 0, 0, end13[0], end13[1], 0);
                var diff = end13Date.getTime() - start13Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes13 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes13
            }

            var widthArtist13 = diff(start13, end13) / 6 * 10;
            blokArtist13Personal.style.width = widthArtist13 + "px";
            blokArtist13Full.style.width = (widthArtist13 - 7) + "px";

            var marginLeftArtist13 = ((((start13[0] - 18) * 60)) / 6 * 10) + (start13[1] / 6 * 10) + 150;
            blokArtist13Personal.style.marginLeft = marginLeftArtist13 + "px";
            blokArtist13Full.style.marginLeft = (marginLeftArtist13 + 1) + "px";

            var Difference_In_Time13 = day13.getTime() - day0.getTime();
            var Difference_In_Days13 = Difference_In_Time13 / (1000 * 3600 * 24);

            if (Difference_In_Days13 == -2) {
                blokArtist13Personal.style.marginTop = "40px";
            } else if (Difference_In_Days13 == -1) {
                blokArtist13Personal.style.marginTop = "250px";
            } else if (Difference_In_Days13 == 0) {
                blokArtist13Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }


            //Artist14

            var start14 = "21:00";
            var end14 = "21:45";
            var day14 = new Date("10/15/2021");
            var artistname14 = document.getElementsByClassName('artistname14');
            for (var i = 0; i < artistname14.length; i++) {
                artistname14[i].innerHTML = "Remme";
            }
            document.getElementById("genre14").innerHTML = "Idk";
            var venueArtist14 = 4;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist14Personal = document.getElementById("blokArtist14Personal");
            var blokArtist14Full = document.getElementById("blokArtist14Full");

            if (venueArtist14 == 1) {
                blokArtist14Full.style.marginTop = "24px";
            } else if (venueArtist14 == 2) {
                blokArtist14Full.style.marginTop = "61px";
            } else if (venueArtist14 == 3) {
                blokArtist14Full.style.marginTop = "98px";
            } else if (venueArtist14 == 4) {
                blokArtist14Full.style.marginTop = "135px";
            } else if (venueArtist14 == 5) {
                blokArtist14Full.style.marginTop = "172px";
            } else if (venueArtist14 == 6) {
                blokArtist14Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start14 = start14.split(":");
            end14 = end14.split(":");

            function diff(start14, end14) {

                var start14Date = new Date(0, 0, 0, start14[0], start14[1], 0);
                var end14Date = new Date(0, 0, 0, end14[0], end14[1], 0);
                var diff = end14Date.getTime() - start14Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes14 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes14
            }

            var widthArtist14 = diff(start14, end14) / 6 * 10;
            blokArtist14Personal.style.width = widthArtist14 + "px";
            blokArtist14Full.style.width = (widthArtist14 - 7) + "px";

            var marginLeftArtist14 = ((((start14[0] - 18) * 60)) / 6 * 10) + (start14[1] / 6 * 10) + 150;
            blokArtist14Personal.style.marginLeft = marginLeftArtist14 + "px";
            blokArtist14Full.style.marginLeft = (marginLeftArtist14 + 1) + "px";

            var Difference_In_Time14 = day14.getTime() - day0.getTime();
            var Difference_In_Days14 = Difference_In_Time14 / (1000 * 3600 * 24);

            if (Difference_In_Days14 == -2) {
                blokArtist14Personal.style.marginTop = "40px";
            } else if (Difference_In_Days14 == -1) {
                blokArtist14Personal.style.marginTop = "250px";
            } else if (Difference_In_Days14 == 0) {
                blokArtist14Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }

            //Artist15

            var start15 = "22:30";
            var end15 = "18:30";
            var day15 = new Date("10/15/2021");
            var artistname15 = document.getElementsByClassName('artistname15');
            for (var i = 0; i < artistname15.length; i++) {
                artistname15[i].innerHTML = "Nambyar";
            }
            document.getElementById("genre15").innerHTML = "Indiepop";
            var venueArtist15 = 4;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist15Personal = document.getElementById("blokArtist15Personal");
            var blokArtist15Full = document.getElementById("blokArtist15Full");

            if (venueArtist15 == 1) {
                blokArtist15Full.style.marginTop = "24px";
            } else if (venueArtist15 == 2) {
                blokArtist15Full.style.marginTop = "61px";
            } else if (venueArtist15 == 3) {
                blokArtist15Full.style.marginTop = "98px";
            } else if (venueArtist15 == 4) {
                blokArtist15Full.style.marginTop = "135px";
            } else if (venueArtist15 == 5) {
                blokArtist15Full.style.marginTop = "172px";
            } else if (venueArtist15 == 6) {
                blokArtist15Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start15 = start15.split(":");
            end15 = end15.split(":");

            function diff(start15, end15) {

                var start15Date = new Date(0, 0, 0, start15[0], start15[1], 0);
                var end15Date = new Date(0, 0, 0, end15[0], end15[1], 0);
                var diff = end15Date.getTime() - start15Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes15 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes15
            }

            var widthArtist15 = diff(start15, end15) / 6 * 10;
            blokArtist15Personal.style.width = widthArtist15 + "px";
            blokArtist15Full.style.width = (widthArtist15 - 7) + "px";

            var marginLeftArtist15 = ((((start15[0] - 18) * 60)) / 6 * 10) + (start15[1] / 6 * 10) + 150;
            blokArtist15Personal.style.marginLeft = marginLeftArtist15 + "px";
            blokArtist15Full.style.marginLeft = (marginLeftArtist15 + 1) + "px";

            var Difference_In_Time15 = day15.getTime() - day0.getTime();
            var Difference_In_Days15 = Difference_In_Time15 / (1000 * 3600 * 24);

            if (Difference_In_Days15 == -2) {
                blokArtist15Personal.style.marginTop = "40px";
            } else if (Difference_In_Days15 == -1) {
                blokArtist15Personal.style.marginTop = "250px";
            } else if (Difference_In_Days15 == 0) {
                blokArtist15Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }



            //Artist16

            var start16 = "21:30";
            var end16 = "22:45";
            var day16 = new Date("10/15/2021");
            var artistname16 = document.getElementsByClassName('artistname16');
            for (var i = 0; i < artistname16.length; i++) {
                artistname16[i].innerHTML = "TBA";
            }
            document.getElementById("genre16").innerHTML = "Idk";
            var venueArtist16 = 5;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist16Personal = document.getElementById("blokArtist16Personal");
            var blokArtist16Full = document.getElementById("blokArtist16Full");

            if (venueArtist16 == 1) {
                blokArtist16Full.style.marginTop = "24px";
            } else if (venueArtist16 == 2) {
                blokArtist16Full.style.marginTop = "61px";
            } else if (venueArtist16 == 3) {
                blokArtist16Full.style.marginTop = "98px";
            } else if (venueArtist16 == 4) {
                blokArtist16Full.style.marginTop = "135px";
            } else if (venueArtist16 == 5) {
                blokArtist16Full.style.marginTop = "172px";
            } else if (venueArtist16 == 6) {
                blokArtist16Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start16 = start16.split(":");
            end16 = end16.split(":");

            function diff(start16, end16) {

                var start16Date = new Date(0, 0, 0, start16[0], start16[1], 0);
                var end16Date = new Date(0, 0, 0, end16[0], end16[1], 0);
                var diff = end16Date.getTime() - start16Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes16 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes16
            }

            var widthArtist16 = diff(start16, end16) / 6 * 10;
            blokArtist16Personal.style.width = widthArtist16 + "px";
            blokArtist16Full.style.width = (widthArtist16 - 7) + "px";

            var marginLeftArtist16 = ((((start16[0] - 18) * 60)) / 6 * 10) + (start16[1] / 6 * 10) + 150;
            blokArtist16Personal.style.marginLeft = marginLeftArtist16 + "px";
            blokArtist16Full.style.marginLeft = (marginLeftArtist16 + 1) + "px";

            var Difference_In_Time16 = day16.getTime() - day0.getTime();
            var Difference_In_Days16 = Difference_In_Time16 / (1000 * 3600 * 24);

            if (Difference_In_Days16 == -2) {
                blokArtist16Personal.style.marginTop = "40px";
            } else if (Difference_In_Days16 == -1) {
                blokArtist16Personal.style.marginTop = "250px";
            } else if (Difference_In_Days16 == 0) {
                blokArtist16Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }







            //Artist17

            var start17 = "19:30";
            var end17 = "20:00";
            var day17 = new Date("10/15/2021");
            var artistname17 = document.getElementsByClassName('artistname17');
            for (var i = 0; i < artistname17.length; i++) {
                artistname17[i].innerHTML = "De Witte Kunst";
            }
            document.getElementById("genre17").innerHTML = "Idk";
            var venueArtist17 = 6;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist17Personal = document.getElementById("blokArtist17Personal");
            var blokArtist17Full = document.getElementById("blokArtist17Full");

            if (venueArtist17 == 1) {
                blokArtist17Full.style.marginTop = "24px";
            } else if (venueArtist17 == 2) {
                blokArtist17Full.style.marginTop = "61px";
            } else if (venueArtist17 == 3) {
                blokArtist17Full.style.marginTop = "98px";
            } else if (venueArtist17 == 4) {
                blokArtist17Full.style.marginTop = "135px";
            } else if (venueArtist17 == 5) {
                blokArtist17Full.style.marginTop = "172px";
            } else if (venueArtist17 == 6) {
                blokArtist17Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start17 = start17.split(":");
            end17 = end17.split(":");

            function diff(start17, end17) {

                var start17Date = new Date(0, 0, 0, start17[0], start17[1], 0);
                var end17Date = new Date(0, 0, 0, end17[0], end17[1], 0);
                var diff = end17Date.getTime() - start17Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes17 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes17
            }

            var widthArtist17 = diff(start17, end17) / 6 * 10;
            blokArtist17Personal.style.width = widthArtist17 + "px";
            blokArtist17Full.style.width = (widthArtist17 - 7) + "px";

            var marginLeftArtist17 = ((((start17[0] - 18) * 60)) / 6 * 10) + (start17[1] / 6 * 10) + 150;
            blokArtist17Personal.style.marginLeft = marginLeftArtist17 + "px";
            blokArtist17Full.style.marginLeft = (marginLeftArtist17 + 1) + "px";

            var Difference_In_Time17 = day17.getTime() - day0.getTime();
            var Difference_In_Days17 = Difference_In_Time17 / (1000 * 3600 * 24);

            if (Difference_In_Days17 == -2) {
                blokArtist17Personal.style.marginTop = "40px";
            } else if (Difference_In_Days17 == -1) {
                blokArtist17Personal.style.marginTop = "250px";
            } else if (Difference_In_Days17 == 0) {
                blokArtist17Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }


            //Artist18

            var start18 = "20:45";
            var end18 = "21:15";
            var day18 = new Date("10/15/2021");
            var artistname18 = document.getElementsByClassName('artistname18');
            for (var i = 0; i < artistname18.length; i++) {
                artistname18[i].innerHTML = "Kwartet Niek Hilk...";
            }
            document.getElementById("genre18").innerHTML = "Idk";
            var venueArtist18 = 6;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist18Personal = document.getElementById("blokArtist18Personal");
            var blokArtist18Full = document.getElementById("blokArtist18Full");

            if (venueArtist18 == 1) {
                blokArtist18Full.style.marginTop = "24px";
            } else if (venueArtist18 == 2) {
                blokArtist18Full.style.marginTop = "61px";
            } else if (venueArtist18 == 3) {
                blokArtist18Full.style.marginTop = "98px";
            } else if (venueArtist18 == 4) {
                blokArtist18Full.style.marginTop = "135px";
            } else if (venueArtist18 == 5) {
                blokArtist18Full.style.marginTop = "172px";
            } else if (venueArtist18 == 6) {
                blokArtist18Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start18 = start18.split(":");
            end18 = end18.split(":");

            function diff(start18, end18) {

                var start18Date = new Date(0, 0, 0, start18[0], start18[1], 0);
                var end18Date = new Date(0, 0, 0, end18[0], end18[1], 0);
                var diff = end18Date.getTime() - start18Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes18 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes18
            }

            var widthArtist18 = diff(start18, end18) / 6 * 10;
            blokArtist18Personal.style.width = widthArtist18 + "px";
            blokArtist18Full.style.width = (widthArtist18 - 7) + "px";

            var marginLeftArtist18 = ((((start18[0] - 18) * 60)) / 6 * 10) + (start18[1] / 6 * 10) + 150;
            blokArtist18Personal.style.marginLeft = marginLeftArtist18 + "px";
            blokArtist18Full.style.marginLeft = (marginLeftArtist18 + 1) + "px";

            var Difference_In_Time18 = day18.getTime() - day0.getTime();
            var Difference_In_Days18 = Difference_In_Time18 / (1000 * 3600 * 24);

            if (Difference_In_Days18 == -2) {
                blokArtist18Personal.style.marginTop = "40px";
            } else if (Difference_In_Days18 == -1) {
                blokArtist18Personal.style.marginTop = "250px";
            } else if (Difference_In_Days18 == 0) {
                blokArtist18Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }

            //Artist19

            var start19 = "22:15";
            var end19 = "23:00";
            var day19 = new Date("10/15/2021");
            var artistname19 = document.getElementsByClassName('artistname19');
            for (var i = 0; i < artistname19.length; i++) {
                artistname19[i].innerHTML = "Le Motat";
            }
            document.getElementById("genre19").innerHTML = "Idk";
            var venueArtist19 = 6;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist19Personal = document.getElementById("blokArtist19Personal");
            var blokArtist19Full = document.getElementById("blokArtist19Full");

            if (venueArtist19 == 1) {
                blokArtist19Full.style.marginTop = "24px";
            } else if (venueArtist19 == 2) {
                blokArtist19Full.style.marginTop = "61px";
            } else if (venueArtist19 == 3) {
                blokArtist19Full.style.marginTop = "98px";
            } else if (venueArtist19 == 4) {
                blokArtist19Full.style.marginTop = "135px";
            } else if (venueArtist19 == 5) {
                blokArtist19Full.style.marginTop = "172px";
            } else if (venueArtist19 == 6) {
                blokArtist19Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start19 = start19.split(":");
            end19 = end19.split(":");

            function diff(start19, end19) {

                var start19Date = new Date(0, 0, 0, start19[0], start19[1], 0);
                var end19Date = new Date(0, 0, 0, end19[0], end19[1], 0);
                var diff = end19Date.getTime() - start19Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes19 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes19
            }

            var widthArtist19 = diff(start19, end19) / 6 * 10;
            blokArtist19Personal.style.width = widthArtist19 + "px";
            blokArtist19Full.style.width = (widthArtist19 - 7) + "px";

            var marginLeftArtist19 = ((((start19[0] - 18) * 60)) / 6 * 10) + (start19[1] / 6 * 10) + 150;
            blokArtist19Personal.style.marginLeft = marginLeftArtist19 + "px";
            blokArtist19Full.style.marginLeft = (marginLeftArtist19 + 1) + "px";

            var Difference_In_Time19 = day19.getTime() - day0.getTime();
            var Difference_In_Days19 = Difference_In_Time19 / (1000 * 3600 * 24);

            if (Difference_In_Days19 == -2) {
                blokArtist19Personal.style.marginTop = "40px";
            } else if (Difference_In_Days19 == -1) {
                blokArtist19Personal.style.marginTop = "250px";
            } else if (Difference_In_Days19 == 0) {
                blokArtist19Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }



            //Artist20

            var start20 = "18:00";
            var end20 = "18:30";
            var day20 = new Date("10/15/2021");
            var artistname20 = document.getElementsByClassName('artistname20');
            for (var i = 0; i < artistname20.length; i++) {
                artistname20[i].innerHTML = "Max Frimout";
            }
            document.getElementById("genre20").innerHTML = "Idk";
            var venueArtist20 = 2;
            // voor venue vul in: 1 Effenaar / 2 Subbar / 3 Stroomhuis / 4 Fifth / 5 Dynamo / 6 Altstadt

            var blokArtist20Personal = document.getElementById("blokArtist20Personal");
            var blokArtist20Full = document.getElementById("blokArtist20Full");

            if (venueArtist20 == 1) {
                blokArtist20Full.style.marginTop = "24px";
            } else if (venueArtist20 == 2) {
                blokArtist20Full.style.marginTop = "61px";
            } else if (venueArtist20 == 3) {
                blokArtist20Full.style.marginTop = "98px";
            } else if (venueArtist20 == 4) {
                blokArtist20Full.style.marginTop = "135px";
            } else if (venueArtist20 == 5) {
                blokArtist20Full.style.marginTop = "172px";
            } else if (venueArtist20 == 6) {
                blokArtist20Full.style.marginTop = "209px";
            } else {
                console.write("error venue");
            }

            start20 = start20.split(":");
            end20 = end20.split(":");

            function diff(start20, end20) {

                var start20Date = new Date(0, 0, 0, start20[0], start20[1], 0);
                var end20Date = new Date(0, 0, 0, end20[0], end20[1], 0);
                var diff = end20Date.getTime() - start20Date.getTime();
                var hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                var minutes = Math.floor(diff / 1000 / 60);
                var totalMinutes20 = (hours * 60) + minutes;

                if (hours < 0)
                    hours = hours + 24;

                return totalMinutes20
            }

            var widthArtist20 = diff(start20, end20) / 6 * 10;
            blokArtist20Personal.style.width = widthArtist20 + "px";
            blokArtist20Full.style.width = (widthArtist20 - 7) + "px";

            var marginLeftArtist20 = ((((start20[0] - 18) * 60)) / 6 * 10) + (start20[1] / 6 * 10) + 150;
            blokArtist20Personal.style.marginLeft = marginLeftArtist20 + "px";
            blokArtist20Full.style.marginLeft = (marginLeftArtist20 + 1) + "px";

            var Difference_In_Time20 = day20.getTime() - day0.getTime();
            var Difference_In_Days20 = Difference_In_Time20 / (1000 * 3600 * 24);

            if (Difference_In_Days20 == -2) {
                blokArtist20Personal.style.marginTop = "40px";
            } else if (Difference_In_Days20 == -1) {
                blokArtist20Personal.style.marginTop = "250px";
            } else if (Difference_In_Days20 == 0) {
                blokArtist20Personal.style.marginTop = "350px";
            } else {
                console.log("error days");
            }



        });