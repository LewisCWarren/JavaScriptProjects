$(document).ready(function() {
                        $("html").append(
                    
                            "<body>\
                                <div id='container'>\
                                    <div id='inner'>\
                                        <h1>Basic jQuery</h1>\
                                        <p id='1'>Paragraph 1</p>\
                                        <p id='2'>Paragraph 2</p>\
                                        <p id='3'>Paragraph 3</p>\
                                    </div>\
                                </div>\
                            </body>"               
                        );
                       
                        $("#2").css({"color":"red"});
                        $("#3").click(function() {
                            $('h1').hide();
                        });


                    });

                    $(document).ready(function() {
                        alert().console.log("an alert event has occured.")
                    })