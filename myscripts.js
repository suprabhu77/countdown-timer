var mins = 5 
                var secs = mins * 60; 
                // console.log(secs)
                // countdown();
                
                //countdown function is evoked when page is loaded 
                function countdown() { 
                    // console.log(2)
                    setTimeout('Decrement()', 60); 


                
                }
        
                //Decrement function decrement the value. 
                function Decrement() { 

                    if (document.getElementById) { 
                        // console.log(1)
                        minutes = document.getElementById("minutes"); 
                        seconds = document.getElementById("seconds"); 
        
                        //if less than a minute remaining 
                        //Display only seconds value. 
                        if (seconds < 59) { 
                            seconds.value = secs; 
                        } 
        
                        //Display both minutes and seconds 
                        //getminutes and getseconds is used to 
                        //get minutes and seconds 
                        else { 
                            document.getElementById("minutes").innerHTML= getminutes();
                            document.getElementById("seconds").innerHTML= getseconds(); 
                        } 
                        //when less than a minute remaining 
                        //colour of the minutes and seconds 
                        //changes to red 
                        if (mins < 1) { 
                            minutes.style.color = "red"; 
                            seconds.style.color = "red"; 
                        } 
                        //if seconds becomes zero, 
                        //then page alert time up 
                        if (mins < 0) { 
                            alert('time up'); 
                            document.getElementById("minutes").innerHTML= 0;
                            document.getElementById("seconds").innerHTML= 0; 
                        } 
                        //if seconds > 0 then seconds is decremented 
                        else { 
                            secs--; 
                            setTimeout('Decrement()', 1000); 
                        } 
                            
                    } 
                    function getminutes() { 
                                //minutes is seconds divided by 60, rounded down 
                                mins = Math.floor(secs / 60); 
                                return mins; 
                            } 
                    
                     function getseconds() { 
                                //take minutes remaining (as seconds) away 
                                //from total seconds remaining 
                                return secs - Math.round(mins * 60); 
                        } 
                    // sessionStorage.removeItem("min1");
                }
                
                
                
        
                